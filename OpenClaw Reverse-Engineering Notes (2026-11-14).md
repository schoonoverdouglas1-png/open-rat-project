# OpenClaw Reverse-Engineering Notes (2026-11-14)

Read-only study of the clone at `~/workspace/github-clones/openclaw`, one level deeper than the
Code Map (`Code Map — Everything Ember Has Code In (2026-11-14).md`, §5 shortlist). Nothing in
the clone was modified, installed, or run. Every mechanism below names the real files it was
read from; where a claim comes from the repo's own docs instead of code, it says so.

**License:** MIT, Copyright (c) 2026 OpenClaw Foundation (`LICENSE`, verified again this pass).
Borrowing and adapting code is license-permitted. **Attribution rule for us:** any file we adapt
from OpenClaw keeps the MIT copyright/permission notice at its top, and our copy carries a
`Derived from OpenClaw (MIT), Copyright (c) 2026 OpenClaw Foundation` line naming the source
file. Patterns/ideas (not code) need no license action, but we cite the source file anyway —
provenance is our house rule, not just theirs.

**Their house rules worth stealing** (`AGENTS.md`, `src/gateway/AGENTS.md`,
`src/agents/AGENTS.md`): check authority **once, when work starts** (revocation applies to the
next request; a started request may finish); state and caches in **SQLite, not new
JSON/JSONL sidecar stores** (files are for named user artifacts, logs, backups); **logs are
written raw and redacted only at egress**; one owner per responsibility — callers consume the
owner's operations, never write its state directly; transcript messages are appended **only**
through the session manager, which assigns linkage and persists.

---

## 1. The Gateway — one process, one wire protocol, everything routes through it

**Files read:** `docs/gateway/protocol/transport.md`, `docs/gateway/protocol/handshake.md`
(repo docs), `packages/gateway-protocol/src/index.ts`, `packages/gateway-protocol/src/version.ts`,
`src/gateway/call.ts` (surveyed), `src/gateway/server-methods/approval.ts` (a representative
method-handler file), `src/gateway/AGENTS.md`.

**The mechanism, plainly:**

- **Transport.** One long-lived **WebSocket** connection per client; text frames carrying JSON.
  Exactly three frame shapes: request `{type:"req", id, method, params}`,
  response `{type:"res", id, ok, payload|error}`, and server-pushed event
  `{type:"event", event, payload, seq?, stateVersion?}`. Errors are structured —
  `{code, message, details?, retryable?, retryAfterMs?}` — and clients branch on `code` /
  `details.code`, never on the message text. Authorization failures are `FORBIDDEN` with a
  structured `MISSING_SCOPE` detail naming the exact scopes required.
- **Handshake.** The Gateway speaks first with a `connect.challenge` event carrying a
  timestamp. The client's first frame must be a `connect` request naming its client info,
  the **role** it wants, the **scopes** it requests (e.g. `operator.read`, `operator.write`),
  its auth (`auth.token`, or a device signature over the challenge timestamp), and its
  **device identity** (a device fingerprint id). The Gateway answers `hello-ok`:
  protocol version, the scopes actually granted, server build provenance, a reusable
  `deviceToken` for that device+role, and the connection **policy** (max payload, max
  buffered bytes). Protocol is versioned separately from releases:
  `PROTOCOL_VERSION = 4`, nodes accepted down to v3, probes to v3 — old clients keep working
  against a floor, they don't force upgrades. Pre-auth frames are capped at 64 KiB and
  unauthenticated connections per IP are budgeted (128); a 30 s connect deadline applies.
- **Dispatch.** Method names are dotted namespaces (`exec.approval.request`,
  `approval.resolve`, `sessions.create`, `chat.send`, …). Server-side, each method is a
  handler in a `GatewayRequestHandlers` map (`src/gateway/server-methods/*.ts` — one file per
  area: `approval.ts`, `agent.ts`, `channels.ts`, `chat-*.ts`, …). Every handler's params are
  validated against schemas owned by the separate `@openclaw/gateway-protocol` package
  (`validateApprovalResolveParams` etc.) **before** the handler body runs — validate once at
  the trust boundary, then trust internal data. Handlers reply through a `respond(ok,
  payload, error)` callback; requests run concurrently, so responses can arrive out of
  order, correlated by frame `id`.
- **Idempotency.** Side-effecting methods require idempotency keys; for `chat.send` a
  reconnect retry reuses the original submission key and recorded input receipts prevent
  duplicate dispatch even across restarts.
- **Events/streaming.** The Gateway pushes events with an outer sequence number; a gap in
  the sequence means "retire the connection and resync from a snapshot," never "guess."
  Live chat text is one initial snapshot plus append deltas, with an explicit `replace: true`
  frame when durable history takes ownership of the text. Compression
  (`permessage-deflate`, ≥1 KiB frames) is negotiated per peer; loopback skips it.
- **Who connects.** Three client classes share the one protocol: **operator clients**
  (Control UI web app, CLI, native apps — scoped `operator.*`), **nodes** (devices running
  the node-host: phones/desktops that execute work and declare their capabilities and
  permissions up front — `packages/gateway-protocol/src/node-permissions.ts`), and
  lightweight **probes**. In-process code doesn't open a socket: `callGatewayTool`
  (`src/gateway/call.ts` + `src/agents/tools/gateway.ts`) builds the same method call
  internally. A separate OpenAI-compatible HTTP API exists beside the WebSocket for
  model-style callers (`docs/gateway/openai-http-api.md`).

**How we apply this:**

- **Phone bridge:** this is the architecture our SSH-on-1986 bridge is groping toward. The
  borrowable shape: the Debian guest on Douglas's Pixel should run **one small gateway
  process** that the phone side connects to once (outbound, over the Tailscale tunnel — no
  inbound ports), speaking req/res/event JSON frames. Ember's side then sends dotted
  methods (`terminal.exec`, `screen.status`, …) instead of raw SSH one-offs. The handshake
  pattern maps 1:1 onto what we already have: challenge timestamp ↔ our key-only sshd;
  device fingerprint ↔ the single authorized bridge key (`ember-phone-terminal-bridge`);
  `deviceToken` ↔ a per-bridge session token the guest mints after key auth, so reconnects
  are cheap and revocable without rotating the SSH key.
- **GenKit gateway:** our GenKit app should expose its flows behind the same frame contract
  — a `crew.status` / `captain.brief` method pair with schema-validated params — instead of
  ad-hoc HTTP. The two-schema-package split is the lesson: keep the protocol/validators in
  one small package that both the gateway and its clients import, so the contract can't drift.
- **Keeper:** adopt the sequence-gap rule for the connection keeper's log: every probe run
  gets a monotonically increasing seq; a gap in `connections.log` means a missed run to
  investigate, not a rounding error. And adopt structured errors (`code` + `details`) in
  keeper output instead of free text, so the morning briefing can branch on codes.
- **Guard:** the "validate once at the boundary, then trust internal data" rule is exactly
  our `guard/check-command.sh` shape — keep it, and copy their missing-scope error form:
  when the Guard refuses, the refusal should name the exact rule/scope that failed, in a
  machine-readable field, not just prose.

---

## 2. Approvals / decisions — two-phase registration, SQLite-canonical verdicts, 30-minute expiry

**Files read:** `src/agents/bash-tools.exec-approval-request.ts`,
`src/infra/exec-approvals-core.ts`, `src/gateway/exec-approval-manager.ts`,
`src/gateway/server-methods/approval.ts`, `src/config/types.approvals.ts`,
`src/infra/exec-approval-forwarder.ts` (head). (Note: `src/decisions/` is **not** this
system — it's model-routing decision codecs. The human-approval system is the
`exec-approval-*` family plus `src/gateway/operator-approval-store.ts`;
`src/audit/execution-decision-*.ts` is its audit-ledger cousin.)

**The mechanism, plainly:**

- **Policy is two knobs, evaluated before anything runs.** Every exec is classified by
  **security** — `deny | allowlist | full` — and **ask** — `off | on-miss | always`
  (`ExecSecurity` / `ExecAsk` in `exec-approvals-core.ts`). Combined they project to a mode:
  deny; allowlist (allowlisted commands run silently); ask (allowlist + on-miss → prompt);
  auto (ask + an auto-reviewer); full. Policy and per-agent allowlists live in a versioned
  approvals file (`ExecApprovalsFile {version: 1, defaults, agents: {<id>: {allowlist,
  mcpTools}}}`), and allow-always decisions append standing entries to it.
- **A request is a record, created in two phases.** When a command misses the allowlist and
  ask is on, the agent builds an `ExecApprovalRequestPayload` — the exact command string and
  argv, highlighted command spans for display, cwd, **env key names only** (never values), host
  (`gateway`/`node`), the security/ask in force, agent/session/run/tool-call ids, and the
  originating channel context (which chat the turn came from, so the card can be delivered
  back there). Then the critical trick, stated in their own comment: **registration is
  two-phase — the id is registered server-side (`exec.approval.request`, `twoPhase: true`)
  before the tool returns "approval-pending," otherwise an `/approve` from the user can race
  ahead of the record and be orphaned.** The record is `{id, request, createdAtMs,
  expiresAtMs}`.
- **The hold.** The Gateway's `ExecApprovalManager.register()` first **persists** the record
  into the shared SQLite state DB via the operator-approval store (`insertOperatorApproval`,
  compare-and-swap semantics — "SQLite CAS is canonical"), *then* creates the in-memory
  pending entry with a promise the agent awaits, emits a `pending` lifecycle event, and hands
  the card to delivery. Delivery is a separate concern (`exec-approval-forwarder.ts`):
  cards are forwarded to connected **approval clients** (Control UI, macOS/iOS/Android apps,
  anything holding the approvals capability) and, per config, into the originating channel
  with native prompts/buttons. Three approval kinds share this one manager and store:
  `exec`, `plugin`, and `system-agent`.
- **The decision.** A resolver answers through the `approval.resolve` RPC (or `/approve` in
  chat, or a native prompt). Decisions are a closed set: **`allow-once`**, **`allow-always`**,
  **`deny`**. The resolver's identity is captured from the connection — device id if present,
  else the runtime client id, or a channel-custody identity when the verdict arrives via a
  channel — and stored on the record. Two fail-closed details worth copying verbatim:
  (1) a **malformed verdict** (bad params, wrong kind, or a decision the record's
  presentation doesn't allow) is converted into a **force-deny** with reason
  `malformed-verdict`, never an error the requester can retry into a yes; (2) re-resolving an
  already-terminal record returns the existing winner with `applied: false` — **durable
  terminal state outlives the process-local waiter, and every later surface receives the
  same winner without re-opening execution rights.**
- **Allow-always mints a standing grant**, with its expiry frozen at resolve time:
  `grantExpiresAtMs` from config default, overridable per-resolve (`grantExpiresInDays`).
  Grants are scoped to the exact operation binding prepared at creation (command/argv/cwd/
  env-hash for system-run plans) — approving one command does not bless its cousins.
- **Expiry.** Default timeout **`DEFAULT_EXEC_APPROVAL_TIMEOUT_MS = 1_800_000` (30 min)**.
  An `ExecApprovalExpiry` scheduler settles expired entries; the waiting agent's
  `exec.approval.waitDecision` returns "not found," which the requester treats as **no
  decision** and applies its configured `askFallback` (in practice: deny-by-default for
  headless runs). Cron-triggered approvals are deliberately starved of cards: gateway-host
  cron requests go only to connected approval clients (so an allow-always can end the
  recurrence properly); node-host cron requests suppress delivery entirely, register, and
  expire into the headless denial — a card nobody can act on is worse than no card.
  If the requesting run is aborted, the wait throws a dedicated run-aborted error and the
  approval is cancelled rather than left dangling.
- **Audit.** Every terminal outcome lands in the durable store with resolver attribution;
  `approval.history` / `approval.get` RPCs read it back (cursor-paginated, session-access
  filtered). Publication of a resolution to channels/push is best-effort and happens **after**
  the canonical write — "never make the winning surface wait for best-effort reconciliation"
  (their comment).

**How we apply this:**

- **Guard:** this is the grown-up version of our approval cards, and three pieces should be
  copied outright. (1) **Two-phase registration for our own gated actions:** any Ember action
  that needs Douglas's tap (sends, pushes, installs) should be written as a pending record
  *first* (id, exact action text, expiry) — which is precisely what makes "which card did I
  deny?" answerable later from the record instead of from memory. (2) **Malformed = deny:**
  an ambiguous or garbled verdict from any lane (e.g. the Rabbit relaying an approval) counts
  as a denial, never as a retry-until-yes. (3) **Terminal is terminal:** once Douglas denies,
  the record is the winner forever; only a brand-new request from him creates a new record —
  this is the code form of our settled-ruling guard.
- **Keeper / cron:** adopt the cron-approval asymmetry for our scheduled jobs. Our
  `connection-keeper-hourly` already learned this the hard way (a denied card left the
  keeper's lane ambiguous). Rule going forward: background jobs never raise cards they can't
  cash — a cron action that would need approval instead registers, expires, and reports
  `no-decision` in its run log, and the morning briefing surfaces it.
- **Phone bridge:** when the bridge gateway (§1) executes commands on the Pixel, the
  phone-side exec policy should be the same two knobs: an allowlist of read-only status
  commands that run silently (`terminal.status`, `tailscale ip`), and ask-always for
  anything mutating, with the card delivered back into the Muse chat the turn came from —
  the payload already carries the turn-source fields to do that.
- **GenKit:** `captainBriefFlow` sends are a natural `allow-once` citizen: the brief registers
  as a pending record with the exact text; sending without a record becomes impossible by
  construction rather than by discipline.

---

## 3. Pairing — how a stranger becomes an authorized sender or device

**Files read:** `src/pairing/pairing-challenge.ts`, `src/pairing/pairing-store.ts`,
`src/pairing/pairing-store-model.ts`, `src/pairing/pairing-messages.ts`,
`src/pairing/setup-code.ts` (head + payload shape).

**The mechanism, plainly — two flavors, one idea (prove it to the owner, out of band):**

- **Channel pairing (senders).** When an unknown sender DMs a channel account whose DM
  policy is "pairing," the channel calls `issuePairingChallenge`, which **upserts** a pairing
  request keyed by sender id — create-if-missing, so a sender who messages five times gets
  **one** request and **one** code, not five. The request record is `{id (sender id), meta
  (channel-normalized fields + accountId), createdAt, lastSeenAt, code}`, persisted in the
  shared SQLite state DB; all mutations run as `channelPairing.mutate` operations inside the
  state worker, with admission checks confirming the mutation's captured authority (plugin
  code never touches SQL directly).
- **The code.** 8 characters from an unambiguous alphabet (`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`
  — no 0/O/1/I), crypto-random, regenerated until unique among pending codes. The bot replies
  to the stranger in-band with a fixed format (`pairing-messages.ts`): "OpenClaw: access not
  configured," the sender's id line, the code in a code block, and the exact owner command —
  `openclaw pairing approve <channel> <CODE>`. A `channel_pairing_requested` hook fires
  **fire-and-forget** so notification/audit hooks can never delay the reply.
- **Bounds.** Pending requests **expire after 1 hour** (`CHANNEL_PAIRING_PENDING_TTL_MS`),
  and at most **3 pending per account** survive — pruning drops the least-recently-seen.
  Expired entries are pruned lazily on read/mutation.
- **Approval.** The owner approves by code (`approveChannelPairingCode`, case-insensitive)
  or by an **opaque request id** — `sha256(channel ␀ accountId ␀ senderId ␀ createdAt)`,
  base64url, 32 chars — so UIs can list and approve requests without the code ever being
  displayed. Approval resolves the request and writes the sender into the channel's
  **allowlist** (`allowFrom` entries per channel+account, in the same DB, entries normalized
  by channel adapters — e.g. phone-number formats). **Dismiss is not a block:** a dismissed
  sender may request again; there is deliberately no denylist state to maintain.
- **Device/node pairing (setup codes).** For a new phone/desktop node, the owner-side
  generates a **setup payload** — `{url(s), bootstrapToken, expiresAtMs, tlsFingerprint}` —
  typically shown as a QR code. The payload carries up to 8 candidate gateway URLs (LAN,
  tailnet, public) and a short-lived bootstrap token minted by
  `issueDevicePairSetupBootstrapToken` under a named **access profile** (standard pairing
  profile vs. a full-access profile — the profile, not the token, defines what the bootstrap
  may claim). URL hygiene is enforced hard: off-LAN pairing requires `wss://` or Tailscale
  Serve/Funnel; plain `ws://` is accepted only for loopback, RFC1918 LAN, `.local`, or the
  Android emulator; a loopback-only gateway produces a specific error naming the four fixes.
  The node connects (§1 handshake), presents its device fingerprint, and the owner approves
  the device — after which the reusable `deviceToken` from `hello-ok` is its credential.

**How we apply this:**

- **Phone bridge:** our current bridge authorization is "one SSH key, installed by a script
  Douglas runs by hand." The OpenClaw pattern upgrades it without new machinery: when the
  bridge gateway on the Pixel first boots, it should generate an **8-character pairing code**
  and print it in the terminal REPORT block Douglas already reads back to Ember; Ember
  "approves" by recording the code + the phone's Tailscale identity in the crew record —
  exactly the read-back ritual we already perform, now with a bounded, expiring artifact
  instead of a permanent key as the only proof. Keep the SSH key as the transport credential;
  add the code as the *ceremony* that authorizes installing it.
- **Messenger/Rabbit lanes:** the create-if-missing + cap-3 + 1-hour-TTL discipline is the
  fix for a failure mode we actually have — repeated check-in messages spawning repeated
  asks. Any future "unknown sender wants in" flow (e.g. a new Meta lane) should issue one
  standing request with a code, not one card per message.
- **Dismiss ≠ block** is a policy worth adopting verbatim in the Guard's vocabulary:
  Douglas dismissing a suggestion closes that request; it must never silently become a
  standing refusal of the category.
- **Keeper:** the lazy-prune-on-read pattern (no sweeper process; expiry checked whenever
  the store is touched) fits our no-daemon style — our watches can prune their own stale
  state on each run instead of needing a janitor cron.

---

## 4. Sessions & memory — files for the human layer, SQLite for the machine layer

**Files read:** `src/memory/root-memory-files.ts`, `src/transcripts/library.ts`,
`src/storage/locations.ts` (head), `src/cron/store.ts` (head, for the shared-state pattern),
plus targeted surveys of `src/agents/sessions/` (SessionManager family),
`src/config/sessions/` (SQLite session accessor), `src/state/` (agent database),
`src/snapshot/` (database + git backups), `src/gateway/AGENTS.md` (session-row projection
rules).

**The mechanism, plainly — three distinct layers that are never confused with each other:**

- **Workspace memory files (the human layer).** The agent's workspace is a directory of
  named files — the canonical root memory file is **`MEMORY.md`** at the workspace root
  (`CANONICAL_ROOT_MEMORY_FILENAME`), with `memory.md` treated as a legacy name to be
  migrated and kept out of auxiliary scans. Resolution is paranoid in a specific way: the
  canonical file must be a **real file, not a symlink**, matched by exact directory entry
  (no case-folding) — because this file steers the agent, its identity is checked like a
  credential. A `.openclaw-repair/root-memory/` directory exists for migration repairs.
  Bootstrap/identity files ride the same workspace mechanism (the `agent:bootstrap` hook
  receives the workspace's bootstrap files). This layer is files because a human can open,
  read, and edit them — same reason ours is.
- **Session state (the machine layer).** Sessions are **rows in a per-agent SQLite state
  database** (the `openclaw-state-db`, opened via `src/state/openclaw-state-db.ts`; cron,
  pairing, approvals, and sessions all share this "shared-state owner" pattern — one DB,
  worker-mediated writes, transactions via `runOpenClawStateWriteTransaction`). A session
  entry is a metadata row (sessionId, timestamps, model/route facts, sharing/membership,
  titles, usage) maintained by a **session accessor** over SQLite with an entry cache; the
  Gateway keeps a **resident row projection** in memory, invalidated by exact-identity
  `sessionChanges` publications after each SQLite commit — hot paths never re-read disk.
  Conversation messages are appended **only** through the SessionManager
  (`appendMessageAsync` — awaited, assigns each message its `parentId`, persists), which
  makes the transcript a **linked tree** (branching/forks are first-class: the manager is a
  small class family — core, branching, append, metadata — under `src/agents/sessions/`).
  Nobody writes transcript rows directly; that's an AGENTS.md rule, not a convention.
- **Transcripts library (the record layer).** Separately, `src/transcripts/` is a library of
  *recorded conversation transcripts* (meetings/calls): entries with utterances
  (speaker-labelled, sequenced), notes/summaries, cursor-paginated list/get APIs scoped by
  filter sets, strict byte budgets on every response, and export to **Markdown or JSONL**
  with deterministic filenames (`transcript-<date>-<sha256(selector)[:12]>.md|jsonl`).
  Artifact-looking utterances are filtered from public projections but still advance cursors.
- **Storage locations (the artifact layer).** Bulk objects don't go in the DB: named
  **storage locations** (filesystem provider built in; pluggable providers behind a
  registry) expose put/get/list/delete over keys, with optional **encryption at rest**
  (`storage/encryption.ts`), an initialization **marker** a location must present before
  use ("no marker → run `openclaw storage init <name>`; a missing disk reports
  *unavailable*, never *empty*"), and error hygiene — provider errors are collapsed to a
  safe message so credentials/signed URLs never leak into RPC output.
- **Backups.** `src/snapshot/` holds both **database backups** (online backup workers) and
  **git backups** — the state serialized into a git repository, with a dedicated
  **sanitizer** (`git-backup-sanitizer.ts`) that strips plugin secrets before anything is
  committed. Backup is a designed feature with a budget (`git-backup-budget`), not a cron
  afterthought.

**How we apply this:**

- **Preservation project:** the git-backup-with-sanitizer pattern is directly transplantable
  and fixes a real risk in our 30-minute auto-sync: OpenClaw commits state to git **only
  after a secret-stripping pass with its own tests**. Our sync should adopt the same gate —
  a sanitizer step (known secret shapes + our credential file patterns) that must pass
  before any push, replacing today's exclusion-list-only approach.
- **Memory:** their MEMORY.md paranoia validates our layout (SOUL/MEMORY as real files at a
  known root) and suggests one upgrade we lack: **exact-entry, no-symlink resolution** when
  Ember loads her standing files at session start — a swapped or symlinked MEMORY.md should
  fail loudly, not be read as her.
- **Phone bridge / GenKit gateway:** session facts for bridge sessions (when the Pixel
  connected, what ran, what was approved) belong in **one small SQLite DB owned by the
  bridge**, not in scattered JSON logs — with the append-only, parent-linked message log
  for anything resembling a transcript, so a bridge session can be replayed/forked for
  debugging exactly like theirs.
- **Keeper:** keeper results are currently a JSONL append log — fine as a *named user
  artifact* by their rules (logs are files), but the keeper's *state* (last-seen statuses,
  alert dedup) should move into the same SQLite pattern when the GenKit gateway is built,
  so "what did the keeper know at 03:00?" is a query, not a grep.

---

## 5. Cron & hooks — SQLite-stored jobs with delivery contracts, and a typed internal event bus

**Files read:** `src/cron/types.ts`, `src/cron/store.ts` (head), `src/cron/active-jobs.ts`
(surveyed — the `setTimeout` scheduler), `src/hooks/internal-hooks.ts`,
`src/hooks/internal-hook-types.ts` (event-type union), `src/hooks/discovery.ts`,
`src/hooks/loader.ts` (head), `src/pairing/pairing-challenge.ts` (a hook consumer).

**The mechanism, plainly:**

- **Job model.** A cron job is a persisted spec: **schedule** — one of `at` (one-shot
  timestamp), `every` (interval), `cron` (expression), plus two non-clock kinds: **on-exit**
  watchers (owned by the Gateway's process supervisor; fire when a watched process exits)
  and **stream** schedules (a command whose stdout lines are triggers, optionally gated by a
  JavaScript regex in `match` mode); **session target** — `main` (wake the main session),
  `isolated` (fresh session per run), `current`, or a named `session:<key>`; **payload** —
  an agent turn or a plugin command, with its own tool policy (`scheduled-tool-policy`:
  which tools, which exec targets a scheduled run may use — scheduled work gets *less*
  authority than interactive work, by construction); and a **delivery contract** —
  `mode: none | announce | webhook`, channel/to/thread/account, `bestEffort`, a separate
  **failure destination** (failures can go somewhere different from successes), and
  active-hours/pacing/stagger controls (`staggerMs=0` means exact timing).
- **Storage & lifecycle.** Jobs live in the **shared SQLite state** ("Public cron store
  load/save API backed entirely by shared SQLite state" — `store.ts`), written through the
  state worker in transactions, with a config **revision/fingerprint** on the job set so
  concurrent editors collide loudly instead of silently overwriting. Broken job definitions
  are **quarantined** (`CronQuarantinedJob`) — set aside with their error, never executed,
  never silently dropped. The scheduler (`active-jobs.ts` + `service/jobs-scheduling.ts`)
  computes `nextRunAtMs` per job and arms timers; on restart it does **catch-up**
  reconciliation for missed runs. Every run produces a **run log entry / receipt**: status,
  error classification (transient reason vs. permanent vs. aborted — used consistently by
  retry, history, and alerts), delivery status tracked **separately** from execution status,
  model/provider/usage telemetry, and a bounded diagnostics bundle. A run whose parent
  conversation was removed/archived **pauses the job** (`parentUnavailable`) instead of
  erroring forever. Failure alerting is its own subsystem (`service/failure-alerts.ts`) with
  closed, producer-authored failure facts (command-exit code, timeout kind, script-failure
  code) — notifications are built from facts, not scraped from logs.
- **Hooks — the event layer.** Two cooperating systems:
  (a) **Internal hooks**: a typed in-process event bus. Events are
  `{type: "command" | "session" | "agent" | "gateway" | "message", action, sessionKey?,
  context}` — e.g. `agent:bootstrap`, `gateway:startup`, `message:received`,
  `message:transcribed`, `message:preprocessed`, `session:patch`. Handlers register with
  `registerInternalHook` and are dispatched by `triggerInternalHook`; plugin-registered
  hooks join the same dispatch. Dispatch discipline matters: pairing fires its
  `channel_pairing_requested` hook **fire-and-forget** (`hooks/fire-and-forget.ts`) so a
  slow audit hook can never delay user-visible work.
  (b) **File hooks**: hook packs are **directories discovered on disk** (`discovery.ts`) —
  bundled, workspace, and plugin sources — each declaring itself in frontmatter/manifest
  metadata (name, events, handler path). Discovery is defensive: descriptor reads are
  byte-bounded (1 MiB), handler paths must resolve **inside** their root via realpath
  containment checks, and the loader (`loader.ts`) imports handler modules with a
  cache-busting URL keyed by `mtime/ctime/size`, so an edited hook is re-imported fresh —
  bundled (immutable) hooks skip the query string. Enablement is an explicit selection in
  config (`configured.ts`), not "present on disk = live." Gmail watcher
  (`hooks/gmail-watcher.ts`) is the shipped example of an event-source hook: it watches an
  external system and injects `message`-type events into the bus.

**How we apply this:**

- **Keeper & watches (direct hit):** our crons (connection-keeper-hourly, security-alert
  watch, morning briefing, git sync, preservation sync) should adopt three job-model pieces
  we're missing: (1) **execution status and delivery status as separate fields** — tonight's
  "was the briefing sent or did the job fail?" ambiguity is exactly what their split kills;
  (2) **failure destination ≠ success destination** — keeper failures should land somewhere
  Douglas sees even if the success path is silent; (3) **quarantine, don't crash** — a watch
  whose definition breaks (e.g. a connector goes away) gets set aside with its error and
  reported once, not retried-and-failed hourly forever.
- **Guard:** scheduled-tool-policy is the missing formalization of a rule we hold by
  discipline: **cron runs get less authority than live turns.** When our jobs are next
  revised, each job file should declare its tool ceiling (read-only checks; no sends; no
  pushes except the one frozen git-auto-push command) the way OpenClaw jobs carry
  `CronScheduledToolPolicy` — policy attached to the job, not remembered by the agent.
- **GenKit gateway:** the internal-hook bus is the wiring diagram for "send the captain's
  brief always": a `run:finished` event on the GenKit gateway triggers the brief flow; the
  brief's completion triggers delivery — each step a typed event with a context object,
  dispatched fire-and-forget where a slow consumer must not block the producer. Our flows
  today are chained by hand; events make the chain inspectable.
- **Phone bridge:** the **stream schedule** is a gift for the bridge: a long-running command
  on the Pixel (e.g. the terminal's status reporter) whose output lines trigger Ember-side
  actions only when a regex matches (" tailscale: offline") is precisely an event source —
  cheaper and more honest than Ember polling the phone. And the on-exit watcher maps to
  "tell Ember when the Debian guest's sshd dies," which today we'd only notice at the next
  failed connection.

---

## The three patterns to take first

1. **Two-phase approval registration with a durable, expiring record** (§2) — register the
   ask before announcing it; SQLite-canonical verdict; malformed verdict = deny; terminal
   is terminal. This is the Guard's next form.
2. **One gateway, three frame shapes, dotted methods, schema-validated at the boundary**
   (§1) — the phone bridge and the GenKit kit should both speak this instead of growing
   ad-hoc lanes.
3. **Pairing as a ceremony with bounds** (§3) — create-if-missing, 8-char unambiguous code,
   1-hour TTL, max-3 pending, dismiss ≠ block. Every future "let a new device/sender in"
   flow copies this instead of inventing itself.

*Filed Nov 14, 2026. Study was read-only; the only file created is this one. All file paths
above are inside `~/workspace/github-clones/openclaw/` unless stated otherwise.*

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

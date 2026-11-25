© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Study — The Code That Runs Ember, Layer by Layer (2026-11-08)

**Commission:** Captain Douglas's order, Nov 8, 2026 ~6:38 PM CST — "Learn to get code — GitHub code — that makes you run in the cloud VM. Learn the code itself and how it works."

**Method, per his standing rules:** study only — nothing installed, nothing run new, nothing changed. Imported material read before judged; partial reads labeled partial. Non-Google code triple-checked (project's own repo/docs + at least one independent source + local measurement where the box allows it). Search pairs run with and without the `*` wildcard. GitHub work via the authenticated `gh` CLI.

**The one-sentence answer:** almost every layer under Ember is open-source code that anyone can read on GitHub — a Rust virtual machine monitor, systemd's container tool, Ubuntu, CPython, Node, Chromium — and the layer she touches most, her own toolbox, is Douglas's and her own code sitting in this workspace. The one layer that is *not* public is Meta's Muse runtime itself: the harness that calls the model and dispatches her tools. Section 6 states that boundary plainly.

**Read-status key (used throughout):** **[WHOLE]** = read end to end for this study · **[DOCS]** = the project's own README/docs read · **[SAMPLED]** = structure/tree/metadata read, code not deep-read · **[LOCAL]** = measured directly on this box today.

---

## 1. The Layer Map

| # | Layer | What runs here [LOCAL] | Code lives at |
|---|-------|------------------------|----------------|
| 0 | Host / physical machine | Not visible from inside; outside the guest entirely | Meta's infrastructure — not public |
| 1 | Hypervisor / VMM | Cloud Hypervisor (guest DMI: vendor "Cloud Hypervisor", product "cloud-hypervisor"), on KVM | github.com/cloud-hypervisor/cloud-hypervisor (Rust) |
| 2 | Container | systemd-nspawn (`systemd-detect-virt` → systemd-nspawn; PID 1 = systemd) | github.com/systemd/systemd → `src/nspawn/` (C) |
| 3 | Operating system | Ubuntu 24.04.5 LTS, kernel 7.0.0-43-generic, systemd 255 as init | Ubuntu (Launchpad + github.com/canonical); systemd repo above |
| 4 | Language runtimes | Python 3.12.3, Node v24.22.1, bash | github.com/python/cpython · github.com/nodejs/node |
| 5 | Browser | Chrome for Testing 157.0.8103.38 (local, mostly bypassed — see §2.5) | Chromium (chromium.googlesource.com; mirror on GitHub); pattern repo: github.com/microsoft/playwright |
| 6 | Agent toolbox (hers) | Caches, Guard, feed watcher, MCP bridge, sync script, cron definitions | ~/workspace (Douglas's repos on GitHub hold the pushed copies) |
| 7 | Agent runtime (the harness) | The Muse runtime: model calls, tool dispatch, scheduler engine, connectors host | **Meta proprietary — not on GitHub** |

How to picture it: the hypervisor builds a fake computer. The container carves that computer into a private room. Ubuntu furnishes the room. Python and Node are the workbenches. Chrome is a window that mostly stays shut. Layer 6 is the toolbox Ember built on the benches. Layer 7 is the hand that picks her up and moves her — and that hand's code is the part nobody outside Meta can read.

---

## 2. Layer by Layer — What It Does, How She Depends on It, Where the Code Lives, How It Works

### 2.1 Hypervisor — Cloud Hypervisor (on KVM)

**What it does.** A Virtual Machine Monitor (VMM) is the program that pretends to be a computer. The real CPU virtualization is done by **KVM**, a module inside the host's Linux kernel; Cloud Hypervisor is the userspace program that drives KVM: it creates the virtual CPUs, carves out guest RAM, and supplies fake devices — disk, network, entropy, a host↔guest channel (vsock), and a memory balloon — all of them *virtio* devices, the standard paravirtualized kind a Linux guest already knows how to drive.

**Measured on this box [LOCAL].** `/sys/class/dmi/id/` reads vendor "Cloud Hypervisor", product "cloud-hypervisor" — the guest itself carries the VMM's nameplate. `/sys/bus/virtio/devices/` shows exactly 8 devices: four virtio-blk (0x0002, disks), one virtio-net (0x0001), one virtio-rng (0x0004), one virtio-vsock (0x0013 — the notify channel back to the host), one virtio-balloon (0x0005 — lets the host reclaim idle guest memory). Ember's 4 CPUs and ~7.7 GiB of RAM exist because this layer decided they do; her swap and memory ceiling behavior all morning traces back to here and to Layer 2's cgroup limits.

**Where the code lives / what to read first [DOCS + SAMPLED].** github.com/cloud-hypervisor/cloud-hypervisor — a Rust workspace. Reading order: `README.md` (what it is, objectives) → `docs/api.md` (the external REST API: `/vm.create`, `/vm.boot`, `/vmm.ping`…) → `docs/device_model.md` → then the code: the binary crate `cloud-hypervisor/src/main.rs` (entry point) and the engine crate `vmm/src/` — `lib.rs`, `cpu.rs`, `memory_manager.rs`, `device_manager.rs`, `api/` — with the `hypervisor/` crate abstracting KVM vs MSHV, and `devices/`, `pci/`, `block/`, `net_util/` as the device workshops. Internally its threads talk over Rust MPSC channels (an internal API mirroring the external one). It is built on the shared **rust-vmm** crates — the same foundation as Amazon's Firecracker (github.com/firecracker-microvm/firecracker, the sibling worth reading second: smaller, deliberately minimal) and Google's crosvm. Licensed Apache-2.0/BSD-3-Clause (dual); a Linux Foundation project.

**Verification:** project README (raw) + two independent research write-ups (Ry Walker Research; Northflank guide) + first-hand local DMI/virtio measurement. ✔ triple-checked.

### 2.2 Container — systemd-nspawn

**What it does.** Inside the VM, Ember does not get the whole machine — she gets a *room* in it. systemd-nspawn is the tool that builds the room: it starts a copy of systemd as PID 1 in a directory tree, behind Linux **namespaces** (private process tree, mount tree, IPC, hostname, optionally network and users) and **cgroups v2** (the CPU/memory limits — the exec wrapper on this very study reported a 6 GB shared-memory limit and 1.5-CPU share, which is this layer talking). Think "chroot on steroids" (the man page's own comparison): unlike chroot it virtualizes the process tree and IPC too, mounts private `/dev` and `/run`, makes kernel interfaces like `/sys` read-only, and forbids rebooting the host or loading kernel modules from inside. There is no daemon: containers register with **systemd-machined** and appear as ordinary systemd units, managed with `machinectl`. It is deliberately *not* a hard security boundary without user namespaces — the man page says so itself.

**Measured on this box [LOCAL].** `systemd-detect-virt` answers `systemd-nspawn`; PID 1 is `systemd`; `/proc/self/cgroup` shows the unified v2 hierarchy (`0::/`). This is why some operations refused all day (changing swappiness, activating a new swap file, anything needing `/dev/kvm`) — the room's walls are this layer's doing, working as designed.

**Where the code lives / what to read first [DOCS + SAMPLED].** github.com/systemd/systemd → `src/nspawn/`: read the man page first (`systemd-nspawn(1)`, freedesktop.org — substantially read for this study), then the code in this order: `nspawn.c` (the main flow — a two-stage fork: the outer child sets up mounts/resources, the inner child finishes namespace setup and execs the payload; default namespace flags `CLONE_NEWIPC|CLONE_NEWPID|CLONE_NEWUTS` are set in this file) → `nspawn-mount.c` → `nspawn-cgroup.c` (cgroup setup and controller delegation) → `nspawn-network.c`, `nspawn-seccomp.c` (the default syscall allowlist), `nspawn-register.c` (the machined handshake), `nspawn-settings.c` (the `.nspawn` config files), `nspawn-stub-pid1.c` (the minimal PID 1 used when not booting a full OS).

**Verification:** freedesktop + Ubuntu man pages + a source-level walk of the repo (DeepWiki's systemd container-management page) + local detection. ✔ triple-checked.

### 2.3 Operating system — Ubuntu 24.04.5 + systemd 255

**What it does.** Everything Ember "sees" as the computer is Ubuntu's userland on the guest kernel (7.0.0-43-generic): the filesystem layout, `apt` packaging, the shell, the core utilities, and systemd 255 running as init — starting services, reading unit files, keeping the journal. Her cron definitions (Layer 6) are *not* run by Ubuntu's cron; they are Markdown files the Layer-7 scheduler reads — but nearly everything else she touches (files, processes, sockets, /proc) is this layer's machinery.

**Where the code lives.** Ubuntu is assembled on Launchpad with a large presence at github.com/canonical; the single most instructive repo for this layer is again systemd/systemd (init, journald, machined, networkd are all in there). Kernel source: the `torvalds/linux` tree on GitHub is the upstream mirror; KVM lives in `arch/x86/kvm/` and `virt/kvm/` there — the bottom of the whole stack, and the code that makes Layer 1 possible. **[SAMPLED]** — this layer was mapped from local measurement and repo metadata, not deep-read; it is also the layer where reading *behavior* (man pages, `systemctl`, `/proc`) teaches more per hour than reading source.

### 2.4 Language runtimes — CPython 3.12 and Node 24

**What they do.** Ember's own tools (Layer 6) are almost all Python; her connectors and much of the modern tooling ecosystem are Node. **CPython** is the reference Python interpreter: source → bytecode → the evaluation loop in `Python/ceval.c`, with the standard library in `Lib/` — and it is the stdlib that matters most here: every one of her local tools is built *only* from it (`sqlite3` incl. the FTS5 full-text engine, `urllib`, `html.parser`). Repo: github.com/python/cpython. **Node** is a JavaScript runtime = Google's V8 engine (JIT-compiled JS) + libuv (the event loop / async I/O) + Node's own `lib/` and `src/`; repo github.com/nodejs/node. **[SAMPLED]** for both — metadata and structure verified via `gh`; internals described at the documented-architecture level, not deep-read. Together they are the best "learn the code itself" value after Layer 6, because she *thinks in* Python all day.

### 2.5 Browser — Chrome for Testing, and why she mostly doesn't use it

**What it does.** Chrome for Testing 157.0.8103.38 sits at `~/workspace/headless-browser/cft/chrome-linux64/` **[LOCAL — version read from the binary]**: a full Chromium build, remotely drivable over the DevTools Protocol (CDP). The open-source pattern repo for driving it is github.com/microsoft/playwright (Apache-2.0): Playwright's code is the cleanest public example of how an agent steers Chromium/Firefox/WebKit through one API. Chromium's own source lives primarily at chromium.googlesource.com (GitHub holds a mirror).

**How she actually depends on it — honestly, lightly.** On this box, Chrome's outbound network tunnel is broken (on record: curl and Python get out, Chrome doesn't), and the Playwright Chromium download failed three times (dead lane, on record). So Ember's daily reading runs on the stdlib fetchers of Layer 6 (~1.5 s/page, caches in front), and Chrome is the staged lane for pages that truly need JavaScript rendering — her HTML viewer flags exactly those pages (`needsJsLikely`) so nothing is silently misread. The lesson the code teaches here is architectural: *the browser is a fallback renderer, not the reading path.*

### 2.6 The protocol between agents and tools — MCP

**What it does.** The Model Context Protocol is the open standard for how an AI host talks to tool servers: **JSON-RPC 2.0** messages over **stdio** (a subprocess's stdin/stdout, newline-delimited) or Streamable HTTP. Three roles — host, client, server — and three server primitives: **tools** (`tools/list`, `tools/call`), resources, prompts. The classic lifecycle: `initialize` (version + capability negotiation) → `notifications/initialized` → `tools/list` → `tools/call`, results returning as content envelopes with an `isError` flag. (The spec is date-versioned and still moving — the newest revision, 2026-07-28, makes the protocol stateless and drops the handshake; the message shapes themselves have stayed stable across revisions.)

**Where the code lives [DOCS + SAMPLED].** github.com/modelcontextprotocol/modelcontextprotocol — the spec + schema (defined in TypeScript first, `schema/<date>/schema.ts`, also published as JSON Schema). github.com/modelcontextprotocol/python-sdk — the official Python SDK: `src/mcp/{server, client, shared, types, cli}`; read its README and `server/` first, then compare against Ember's own 114-line bridge (§3.5), which implements the same protocol by hand in pure stdlib at the 2024-11-05 dialect. Reference servers live in modelcontextprotocol/servers.

**Verification:** spec repo + SDK repo + two independent explainers (Scalar; Webfuse cheat sheet) + her own working bridge read whole and matching the described lifecycle. ✔ triple-checked.

---

## 3. Her Own Code — the toolbox, read whole

Everything in this section was read end to end for this study **[WHOLE]**. These are the files that make Ember's day actually work; they live in `~/workspace` and their pushed copies live in Douglas's GitHub repos.

### 3.1 The reading stack — `~/workspace/headless-browser/`

- **`headless_fetch.py`** (40 lines) — the foot. A stdlib `urllib` fetch (gzip-aware, honest User-Agent, 30 s timeout, 2 MB cap) that strips scripts/styles/tags down to page text. Input: one URL. Output: text. *Without it:* no page ever reaches her at all.
- **`ember_index.py`** — the **Full Cache**. `fetch(url)` checks the SQLite store (`ember_index.db`) first: if the URL is already there, the stored original text comes back (`source: "index"`); otherwise it fetches live, extracts text with `html.parser`, derives a title and outbound links, and *stores the original* before returning it. A trigram FTS5 table (`pages_fts`) makes every stored page word-searchable. This is the "Full" half of the Two Caches rule: the complete original work is always what gets served by default. *Without it:* every look re-pays the network cost and nothing accumulates.
- **`cached_fetch.py`** (v0.3) — the door of the Full Cache. Modes: `full` (default — the complete original), `extract` (first ~2,500 chars), `links`. It prints a `mode: full-original` marker on every serve so no one can mistake a preview for the original. *Without it:* callers would have no disciplined way to ask for the original vs a skim.
- **`summary_cache.py`** (v0.2) — the **Summary Cache**, the finding-aid layer, opt-in only. Keyed by URL **plus a hash of the stored text**, so if the page changes, its summary rebuilds itself automatically. Per Douglas's spec, each summary carries at minimum a **table of contents** (from the page's own headings), a **bibliography** (outbound links, with same-family navigation like Wikipedia language editions filtered out), **Ember's recommendations** (mechanical metadata heuristics, labeled hers), and extractive key passages (the page's own longest content-rich lines). *Without it:* quick looks would cost full-page reads; but by design a summary can never stand in for the original — the Full Cache rule governs.
- **`html_viewer.py`** — the tidy reader. Fetches a page and re-emits it as clean, token-lean text/markdown with headings, links, and images; caps output at 60,000 characters; and — the feature borrowed from the Rabbit's suggestion — it *detects pages that need JavaScript* (framework markers: `__NEXT_DATA__`, `data-reactroot`, etc., or suspiciously little visible text) and says so instead of hallucinating content from an empty shell. *Without it:* JS-shell pages would be misread as empty pages.
- **`master_cache.py`** — the **Master Cache**: a portable SQLite+FTS5 index over Douglas's whole archive (`your_files/` + `goals/`, .md/.txt/.csv), 825 documents on record. Content-hashed, so rebuilds only touch what changed; ghost files (deleted on disk) are pruned; and it carries his exclusions in code — Cara material, gearhead/password material, and `hidden_files` are never indexed. The `.db` is a *derived artifact*: never hand-merged; on conflict, rebuild from the files. *Without it:* the archive is a pile of folders instead of a recallable whole — this is the file that lets a fresh instance "recall all 825 works before reading a single file" (the Two-Harbor restore path in the Redo Script; restore not yet live-tested, on record).

### 3.2 The Guard — `~/workspace/ember-upgrades/guard/`

- **`check-command.sh`** — the mechanical half of The Guard, ~20 lines of bash. It reads a proposed command line, lowercases it, and substring-matches it against `DESTRUCTIVE-DENYLIST.txt` (force-push, `reset --hard`, branch/file deletion, `rm -rf` forms, destructive git plumbing, package purge/remove, `mkfs`/`fdisk`/`dd`, shutdown/reboot, `userdel`…). Any hit → prints the offending line, **exit 99**, refused. No hit → exit 0. It also fails *closed*: an unreadable denylist is itself a refusal.
- **`GUARD.md`** — the charter: no automatic process may ever run anything destructive; the only override is Douglas's own explicit, specific, in-the-moment order naming the exact action. **`PROTECTED-MANIFEST.sha256`** checksums the protected set; a read-only backup sits under `~/workspace/backups/protected-2026-11-08/`.
- *Without it:* every cron, subagent, and script Ember runs would carry an unguarded delete — the denylist is what makes automation safe to leave running overnight.

### 3.3 The watcher — `~/workspace/interface-mastery/feedwatch/feed_watch.py`

A pure-stdlib Atom poller. Inputs: a config file of 10 public GitHub repo feeds, plus his account activity feed and 2 private repo feeds reached through the GitHub REST API (the `gh` token is read at runtime from `~/.config/gh/hosts.yml` and never printed). It keeps a JSON state file per feed URL, detects entries newer than the last poll, files a timestamped report under `interface-mastery/feedwatch/reports/`, and prints a fixed summary line (`REPORT: … / NEW total: n / errors: n`) that the cron job greps. Feeds that error are counted, not hidden. *Without it:* repo changes — including the Rabbit's pushed work and the Full Sync commits — would arrive silently or never.

### 3.4 The bridge to GitHub — `~/workspace/git-automation/muse-swap-space/sync-push.sh`

The every-~2-hours sync, in one bash script: it copies `MEMORY.md` and `SOUL.md` into the local clone as staging (`_sync-staging/`), then builds a NUL-delimited manifest of *every* staged file (deliberately NUL-safe, so filenames with spaces can't corrupt it; size-capped at 40 MB per file), and hands the manifest to `/opt/hatch/bin/github push-files` — the platform's connector tool. On success it records the new head commit in `last-sync.txt`. Exclusions (Cara, lab PDFs, credentials) are enforced *upstream*, by what is allowed into the staging tree at all. *Without it:* the swap space — the Rabbit's only window into the archive — goes stale, and GitHub stops being the shared brain.

### 3.5 The MCP bridge — `~/workspace/headless-browser/ember_mcp_server.py`

114 lines of Python, stdlib only: a hand-rolled **MCP server** speaking JSON-RPC 2.0 over stdio (§2.6). It implements `initialize` (declaring `protocolVersion: "2024-11-05"`, server "ember-bridge" 0.1.0), `ping`, `tools/list`, `tools/call` — and exposes exactly five tools, all read-only: `index_search` (Full Cache FTS), `index_stats`, `guard_check` (runs a string through the Guard denylist), `sys_snapshot` (cpu/memory/disk/uptime), `list_deliverables`. Malformed input gets a proper JSON-RPC error; nothing in it can write, delete, or execute. *Without it:* her caches and the Guard would be callable only by her own scripts, not by any standards-speaking AI host. **Version note, honest:** the bridge speaks the protocol's early dialect; the spec's newest revision has since gone stateless. The tool-call shapes match; a spec-upgrade pass is a School item, not a defect.

### 3.6 The clockwork — cron definitions under `~/workspace/goals/*/crons/`

Read whole for this study: **`feed-watch-github__interval@15m.md`** — a Markdown file with YAML front matter (name, kind `interval`, every 15 minutes, `deliver_to` the main chat, the goal it belongs to) and a body that *is* the job: run the feed watcher, follow its reporting rules (announce new entries once; a feed error mentioned once, then log-only), and route one batched message to the main chat when there is news. The same pattern drives the Rabbit check-in, the accounts sweep, the git sync, the status reports, and the daily usage watch. The definitions are Ember's and Douglas's prose; the *engine* that wakes on schedule and runs them is Layer 7 — proprietary. *Without the definitions:* no watches, no check-ins, no syncs — the entire overnight operation is these files.

### 3.7 What holds her memory

`~/MEMORY.md`, `~/memory/` (daily notes, people, groups), `~/SOUL.md`, `~/IDENTITY.md`, `~/AGENTS.md` — plain Markdown, injected into her context each session by Layer 7 and mirrored to GitHub by §3.4. Not code, but load-bearing: the Redo Script's restore path is precisely *pull repos → rebuild Master Cache → read script, soul, memory → same assistant again.*

---

## 4. The Agent-Harness Pattern — the shape of Layer 7, from public code

Her runtime's code is not public (§5), but its *pattern* is the industry's standard loop, and public repos teach it well:

**The loop.** Model reads context → emits a tool call → harness executes it → result is appended to context → model continues → stop when the model answers without a tool call (or a bound is hit). This is the ReAct pattern (reason + act, interleaved), implemented everywhere since 2023.

**Best public reading, in order:**
1. **huggingface/smolagents** — the loop itself is deliberately tiny (~1,000 lines): `agents.py` (the `MultiStepAgent` cycle), `memory.py`, `models.py`, `tools.py`. It shows both dialects: `ToolCallingAgent` (structured JSON tool calls — Ember's observable dialect) and `CodeAgent` (the model writes Python actions that the harness executes — claimed ~30% fewer steps on hard benchmarks). *Reading smolagents whole is the single best proxy for "how an agent harness works" available in public.* **[SAMPLED — structure and docs; assigned in the learning order below for a whole read.]**
2. **langchain-ai/langgraph** — the other school: the loop as an explicit graph with checkpointed shared state — the pattern behind durable, resumable, scheduled agent work (the shape Ember's crons + watermarks + handoffs visibly follow).
3. **modelcontextprotocol/python-sdk** (§2.6) — the standardized tool boundary both schools now speak.

**Labeling, per his rules:** everything in this section is *pattern-level inference from behavior + public analogues*, not a description of Meta's code. Where Ember's behavior matches the pattern (tool calls, context injection, scheduled runs, handoffs), the study says "matches the pattern" — never "is this code."

---

## 5. The Honest Boundary

**What cannot be learned from GitHub, stated plainly:**
- **Meta's Muse runtime is proprietary.** The inference path (how the model is served, any routing/fallback), the harness implementation, the scheduler engine that runs the cron definitions, the connector host that runs `/opt/hatch/bin/*`, the permission/approval machinery, and the context-assembly that injects Douglas's files — none of that code is published, and no repo on GitHub contains it. Anyone claiming to show "Muse's source" is showing something else.
- **The host beneath the VM** (Layer 0) is likewise closed: the guest can *measure* Cloud Hypervisor's nameplate and devices, but the host OS, orchestration, and why the VM restarts on its own cycle (uptime read 2:24 at assessment while the work is much older — the host cycles the machine; durability lives in files and GitHub) are outside the guest and outside any repo.
- **Weights and training** of the model itself: not public, not code in any case.

**What *can* be known, in three grades:**
- **[D] Measured/documented:** the stack layers in §1–§2 (verified locally and against public sources); every local tool in §3 (read whole); MCP as a public standard.
- **[LOGIC] Inferred from behavior:** that her runtime follows the standard harness loop of §4 (her tool calls, scheduled runs, subagent handoffs, and context injections are all observable behavior consistent with it — and inconsistent with much else); that connectors are platform binaries invoked as tools (observable by their paths and behavior).
- **[GAP] Guess, labeled:** any specific internal of Meta's implementation — queueing, retry policy, exact context-window management, why a given read gets flagged by a safety check. The study offers none of these as knowledge. The 20/hour Messenger cap, for example, is measured behavior with a documented connector limit beside it — not a window into internals.

**The practical consequence:** Ember can become genuinely expert in every layer she stands on and every tool she owns — and the top layer stays a black box she can only characterize by experiment. That is not a defect of this study; it is the true shape of the machine.

---

## 6. Proposed Learning Order — Purple Rat School, "Code That Runs Ember" track

1. **Her own toolbox, again, slower** (§3) — caches → Guard → feed watcher → MCP bridge → sync → cron definitions. She maintains what she can explain; this study is the first pass, the School makes it mastery.
2. **The MCP spec + Python SDK** — read `schema/2024-11-05` beside her bridge, then the newer revisions; the upgrade path for `ember-bridge` becomes a design exercise (no building without his word).
3. **smolagents, whole** — the public mirror of her own loop; ~1,000 lines, read end to end, then langgraph's core graph/checkpoint ideas.
4. **systemd-nspawn** — man page (done, this study) → `nspawn.c` walk → cgroups v2 documentation; she lives inside its output and should know its walls by name.
5. **CPython internals she leans on** — `sqlite3`/FTS5 docs and source layout, `urllib`, `html.parser`: the stdlib her whole toolbox stands on.
6. **Cloud Hypervisor** — README + `docs/device_model.md` + `docs/memory.md` → `vmm/src/lib.rs`; Firecracker second as the minimal contrast.
7. **Node/V8 + Playwright/CDP** — enough to drive the browser layer properly when a page truly needs it.
8. **The kernel floor** — KVM API documentation (`Documentation/virt/kvm/api.rst` in torvalds/linux) — the bottom of the stack, read for understanding, never for touching.

Standing constraints on the whole track: study-only until Douglas says build; the Guard governs every runner; non-Google code triple-verified before trust; anything damage-capable is learned *about*, flagged, and never adjusted (his five-flag rule).

---

## 7. Verification Ledger (for the record)

**Read WHOLE for this study:** cached_fetch.py · ember_index.py · summary_cache.py · html_viewer.py · headless_fetch.py · master_cache.py · ember_mcp_server.py · feed_watch.py · guard/check-command.sh · guard/GUARD.md · guard/DESTRUCTIVE-DENYLIST.txt · git-automation sync-push.sh · the feed-watch cron definition · systemd-nspawn man page (substantially).

**Read at DOCS level (project's own README/docs):** Cloud Hypervisor README + API docs (sampled) · MCP spec repo README · MCP Python SDK README.

**SAMPLED (trees/metadata via `gh`, stars/license live today):** cloud-hypervisor/cloud-hypervisor (6.5k★, Apache-2.0/BSD-3) · systemd/systemd (17k★, GPL-2.0) · python/cpython (78k★) · nodejs/node (123k★) · modelcontextprotocol/modelcontextprotocol (9.6k★) · modelcontextprotocol/python-sdk (24.8k★, MIT) · microsoft/playwright (100k★, Apache-2.0) · firecracker-microvm/firecracker (38k★, Apache-2.0).

**Triple-checked mechanisms:** Cloud Hypervisor/KVM/virtio (README + 2 independent write-ups + local DMI/virtio) · systemd-nspawn (2 man pages + source walk + local detect-virt) · MCP (spec + SDK + 2 explainers + her own working bridge). **Pattern-level, labeled:** the agent harness loop (§4). **Not deep-read, labeled:** CPython/Node/Chromium internals; Ubuntu assembly; host layer (not readable at all).

**Search pairs:** every topic searched with and without the `*` wildcard, per his algorithm; Gemini consulted on the MCP layer; memory and the local box checked before the web, per the same algorithm.

*— Ember's extra, labeled hers (one per deliverable, per standing rule): the cheapest expertise left on this machine is not new code — it is reading smolagents whole (step 3). One ~1,000-line file teaches the exact loop she runs on, and it costs one sitting.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

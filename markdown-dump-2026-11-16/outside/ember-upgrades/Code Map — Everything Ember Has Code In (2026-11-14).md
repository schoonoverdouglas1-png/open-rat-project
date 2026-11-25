© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Code Map — Everything Ember Has Code In (2026-11-14)

Walked read-only by Ember's subagent on Nov 14, 2026, at Douglas's order ("walk all code that you have something to do with so you know it"). Nothing was modified, installed, or run. Counts are files actually present on disk at walk time; "read" means the file's contents were opened and reviewed in this walk.

**Totals at a glance**

| Area | Files present | Source files read in full |
|---|---|---|
| GenKit first build (`genkit-first-build/src`) | 3 | 3 |
| Purple Rat Browser (`purple-rat-browser/src`) | 13 | 2 (+ generated R.java noted) |
| Purple Rat Mail (`purple-rat-mail/src`) | 15 | 2 |
| Purple Rat Bridge v04 (`purple-rat-bridge-v04/`) | 53 (incl. versioned `out-*` build dirs) | 2 (+ 2 build scripts noted) |
| Purple Rat Console (`purple-rat-console/src`) | 14 | 2 |
| Purple Rat Research (`purple-rat-research/src`) | 14 | 2 |
| Crew scripts (`ember-upgrades/scripts/`) | 7 scripts (+ `__pycache__`) | 7 |
| Connector helpers (Gemini + Gmail-IMAP) | 4 (2 live + 2 backups) | 2 |
| OpenClaw clone (`github-clones/openclaw`) | top level only, by design | README head + LICENSE + `src/` listing |

---

## 1. GenKit first build — `~/workspace/genkit-first-build/src/` (3 files)

**`index.ts`** — the heart of the build. Creates one GenKit instance with a **key guard** (added Nov 14): the Google AI plugin (`@genkit-ai/googleai`) is loaded *only* when `GEMINI_API_KEY`, `GOOGLE_GENAI_API_KEY`, or `GOOGLE_API_KEY` is present in the environment; without a key the plugin used to fail initialization and take both flows down, and now it simply doesn't load. Two flows are defined with Zod schemas:

- **`crewStatusFlow`** — deterministic, no model call. Input `{topic, priority: routine|urgent|watch}` → output `{topic, priority, statusLine, nextStep}`. The next step is fixed logic: urgent → "Surface to Douglas now with the verified facts first"; anything else → "File it, watch it, and include it in the next briefing." It exists to prove the runtime, schemas, and flow plumbing work without spending a model call.
- **`captainBriefFlow`** — model-backed. Input `{topic, facts[]}` → `{brief}`. With no key in the environment it returns a *staged* brief that names the missing key and lists the facts it is holding, instead of crashing. With a key, it calls `googleAI.model('gemini-2.0-flash')` with a prompt that orders the model to use only the supplied facts, invent nothing, and keep the brief plain, ordered, and short.

**`functions.ts`** — Firebase Functions wrappers, **local emulator only**. It wraps both flows with `onCallGenkit` (region `us-central1`) as callable functions `crewStatus` and `captainBrief`, so the Firebase Functions emulator can load them on the demo project (`demo-rodentia`). The header carries the production rule in plain words: any real deploy must first add an authPolicy (signed-in + verified email + allowlist) and enforced App Check — deliberately absent here because this file is only ever loaded by the local emulator. **Do not deploy as-is** (its own words).

**`index.ts.bak-2026-11-14-pre-keyguard`** — the pre-key-guard backup of `index.ts` (old-with-new): identical except the Google AI plugin loads unconditionally. Kept so the key-guard change can be undone by copying it back.

*Known state (from the project record, not re-run in this walk): the key guard fixed the plugin crash; the plugin still needs a real Gemini API key in the environment before `captainBriefFlow` can generate, and that key is minted in Douglas's Google account — it does not exist on this box.*

## 2. The Purple Rat Android apps

All five apps share one skeleton: a single `MainActivity`, a hand-written manifest (minSdk 26, targetSdk 34), no Gradle — they are built with the manual aapt2 → javac → d8 → zipalign → apksigner pipeline, debug-signed with local keystores. Four of the five are the same WebView shell cloned old-with-new, differing only in package name, label, hint text, and the page they open on. The fifth (Bridge) is a different animal entirely.

### 2a. Purple Rat Browser — `~/workspace/purple-rat-browser/src/` (13 files; package `com.purplerat.browser`)
The original shell. One screen built entirely in code: a top row with an address bar, a **Go** button, and a **Hand to Ember** button over a full-screen WebView (JavaScript and DOM storage on). It opens on `https://muse.ai`. The address bar is also a command bar: typing `desktop` swaps in a desktop Chrome user-agent, `mobile` restores the default; a bare word becomes a DuckDuckGo search, a dotted word becomes an `https://` address. Hand to Ember shares the current page URL through Android's share sheet. The manifest asks for exactly one permission — INTERNET. The remaining files are pipeline artifacts: generated `R.java`, compiled `.class` files, `classes.jar`, `dex/classes.dex`, and the `debug.keystore` (whose password is not the stock "android" — established during the Mail build).

### 2b. Purple Rat Mail — `~/workspace/purple-rat-mail/src/` (15 files; package `com.purplerat.mail`)
A clone of the Browser shell, old-with-new, rebranded as the crew's mail window: same WebView, same command bar, same Hand to Ember share button, opening on `https://muse.ai` (Muse Mail has no standalone web UI or POP3/IMAP service, so the app rides the Muse surface — that was Douglas's "Option A," chosen Nov 14). Differences from Browser are only the package, the drawer label "Purple Rat Mail," and the hint text. It carries its **own** keystore (`mail-debug.keystore`, created fresh after the Browser keystore's password proved not to be "android"), alongside the copied `debug.keystore`, plus pipeline files (`sources.txt`, `unsigned.apk`, `aligned.apk`, `classes.jar`, dex and class files).

### 2c. Purple Rat Bridge v0.4 — `~/workspace/purple-rat-bridge-v04/` (53 files incl. versioned out-dirs; package `com.purplerat.bridge`)
The one app that is *not* a WebView. Bridge is a scrollable column of eleven big one-tap **doors** for the phone-terminal bridge Douglas and Ember designed: (1) launch the Android Virtualization Terminal app (`com.android.virtualization.terminal`), (2) the Terminal's app-info/settings page, (3) Developer options (where the Linux environment lives), (4) Accessibility settings, (5) Talk to Ember (muse.ai), (6) the published Virtual Machines page, (7–8) pin Virtual Machines / Talk to Ember as home-screen shortcuts via `ShortcutManager`, (9) the open-ports script's GitHub gist, (10) the Ember — Google Agent Apps Script home, (11) Gmail recovery settings. On-screen text walks Douglas through the bridge order (allow ports 1986 and 41641 → run open-ports.sh → `sudo tailscale up`). Its manifest declares **no permissions at all** — it only fires intents and opens URLs. The project root also holds `build-v03.sh` and `build-v04.sh` (the versioned manual build scripts) and `purple-rat-debug.keystore`; the bulk of the 53 files are the src tree plus earlier versions' build outputs kept old-with-new.

### 2d. Purple Rat Console — `~/workspace/purple-rat-console/src/` (14 files; package `com.purplerat.console`)
Another clone of the shell, aimed at one destination: it opens on `https://search.google.com/search-console` — Douglas's Search Console property, the lane proven live on Nov 14 (one indexed page on his github.io property). Same command bar (hint: "your search standing, one tap"), same desktop/mobile commands, same Hand to Ember button, INTERNET as its only permission. Signed with the crew debug key copied from the Mail project.

### 2e. Purple Rat Research — `~/workspace/purple-rat-research/src/` (14 files; package `com.purplerat.research`)
The fourth shell clone, opening on `https://app.undermind.ai/login` — the sign-in door for the Undermind research account Douglas created for Ember on Nov 14. Identical mechanics to Browser/Mail/Console (command bar, DuckDuckGo fallback search, desktop/mobile user-agent swap, share-to-Ember button); only package, label, hint, and start URL differ. INTERNET is its only permission; debug-signed with the same crew key as Console.

## 3. Crew scripts — `~/workspace/ember-upgrades/scripts/` (7 scripts, all read in full)

- **`accounts-check.sh`** — Douglas's daily peace-of-mind check (built Nov 14): runs the connection keeper and prints its reachable places/DNS, then Gmail connector status, the Muse Mail mailbox record, and `gh auth status`. Checks live session/connector state only — it never logs in with passwords, because that is what locks accounts.
- **`connection_keeper.py`** — the permanent connection keeper (Nov 13; DNS set expanded Nov 14). Probes six crew places (github.com, api.github.com, dl.google.com, generativelanguage.googleapis.com, muse.ai, accounts.google.com) with real HTTPS sessions — direct lane first, proxy lane second; a place counts as UP only when an HTTPS session completes — and TCP-probes eight public DNS resolvers on port 53 (Google 8.8.8.8/8.8.4.4, Cloudflare 1.1.1.1/1.0.0.1, Quad9 9.9.9.9/149.112.112.112, OpenDNS 208.67.222.222/208.67.220.220). Appends one JSON line per run to `ember-upgrades/connections.log`. Meta hosts are deliberately absent from both lists. This is the script behind the hourly `connection-keeper-hourly` cron.
- **`git-auto-push.sh`** — Ember's ONE frozen push command (Nov 13): walks every repo in `~/workspace/github-clones`, and pushes only branches that are ahead of upstream — fast-forward only, never `--force` — routing the command text through the Guard (`guard/check-command.sh`) first. Nothing ahead → skip and log it. Exists so Douglas could always-allow one exact, unchanging command text.
- **`open-ports.sh`** — runs *inside the Debian terminal on Douglas's Pixel* (Douglas runs it; Ember cannot type into that guest). Installs openssh-server, sets sshd to port **1986** with password auth off, installs Ember's bridge public key as the *only* authorized key, installs Tailscale (UDP 41641), and prints a REPORT block (Debian version, kernel, listening ports) for Douglas to read back. Header documents its own undo.
- **`open-ports-desktop.sh`** — the second phone-side script, run after `open-ports.sh`: installs TigerVNC + Xfce + xrdp in the phone's Debian guest, with VNC (5901) and RDP (3389) bound to localhost only, so the desktop rides *inside* the SSH tunnel on 1986 and no desktop port ever faces the internet. The VNC password is set interactively by Douglas (`vncpasswd`) — the script never touches it.
- **`phone-debian-setup.sh`** — the first payload for the phone's Debian TTY (Nov 13): free packages only (git, curl, python3, pip, openssh-server, htop, nano), no destructive step, ends with a Report block (Debian version, kernel, disk free, IP, sshd presence) to read back to Ember.
- **`spotify_protected_content_seed.py`** — seeds a *local* Chromium profile (`~/workspace/browser-profiles/spotify-drm`) with the exact per-site preference that allows protected content (Widevine/DRM) for `open.spotify.com`, verifies the preference landed, inventories local browser executables and VM ISOs, and optionally launch-tests the first browser headless. It explicitly does **not** touch Muse's cloud-browser profile, which is not a file on this VM.

## 4. Connector helpers — `~/workspace/custom-connectors/`

### 4a. Gemini — `custom.google-gemini/bin/gemini_call.py` (read in full, ~360 lines; two `.bak` backups beside it, old-with-new)

A stdlib-only Python CLI that calls Google's Gemini API (`generativelanguage.googleapis.com`, `/v1beta/`) on Douglas's registered API credential **without ever holding the key**: `dynamic_credentials.add_surrogate_to_request` puts a surrogate in the `x-goog-api-key` header and Muse's auth layer swaps in the real key only for that host; redirects are refused outright. Its header carries Douglas's compatibility contract (Nov 13): **Layer 1 (Google Assistant compatibility) first, Layer 2 (Gemini) second, forever** — old commands are never removed or renamed, new ones are only added.

- **Layer 1 — Assistant intents mapped onto Gemini:** `assistant-ask` → generate, `assistant-speak` → TTS, `assistant-see` / `assistant-hear` → vision/multimodal, `assistant-search` → grounded search, `assistant-answer` → AQA. (Google retired the standalone Assistant APIs; these names keep working by mapping.)
- **Layer 2 — Gemini:** the originals `models` and `generate` (unchanged; default model `gemini-3.5-flash-lite`, maxOutputTokens 8192), plus `models-full`, `count` (countTokens), `chat` (multi-turn from a JSON file), `json` (structured output, optional schema), `embed` (gemini-embedding-001), `image` (Nano Banana models, saves PNG), `tts` (PCM wrapped into a .wav by hand), `vision` (image/audio/PDF/video inline base64), `grounded` (Google Search tool), `codeexec` (code-execution tool), `files-list`, `cache-list` / `cache-create` / `cache-delete`, `answer` (AQA), and `features` (a machine-readable registry of all of the above, including the Live-API-only features *not* in the helper: bidiGenerateContent, bidiGenerateMusic, createDecision).
- House rule from its own docs: the grounded lane hit HTTP 429 on Nov 13–14 and is treated as stopped until it clears — no retrying through a provider stop.

### 4b. Gmail IMAP lane — `custom.gmail-imap/bin/imap_lane.py` (read in full; the "second parable" beside the native Gmail connector)

A small stdlib Python helper for reaching Gmail over the standard mail doors instead of the connector: IMAP `imap.gmail.com:993` SSL/TLS, POP3 `pop.gmail.com:995`, SMTP `smtp.gmail.com:587` STARTTLS. Three commands: **`doors`** (knock on all three doors and print their banners — no login; this is the part verified live on Nov 13), **`read`** (log in and print the newest message headers), **`send`** (compose and send). Authentication is full email address + a Google **app password**, prompted at run time via `getpass` and **never stored in any file** — which is also why the lane sits parked: the login half waits on an app password, and Douglas closed the Google password road on Nov 14. Its connector descriptor (`connector.yaml`, repaired Nov 14) is marked parked for the same reason.

## 5. OpenClaw — `~/workspace/github-clones/openclaw/` (TOP LEVEL ONLY, per orders)

What was actually looked at: the first 60 lines of `README.md`, the head of `LICENSE`, the top-level directory listing, and the names of `src/`'s subdirectories and top-level files. The tree itself was **not** read — the clone holds ~65,000 files / ~1.1 GB.

- **What it is (README's own words):** "OpenClaw 🦞 — Your assistant, on your devices, in your chats." An open-source, self-hosted AI assistant: one **Gateway** running on your own hardware connects AI models (Claude/GPT/Gemini, swappable as plugins) to the channels you already use — Discord, iMessage, Slack, Teams, Telegram, WhatsApp, and 20+ more — plus native apps for macOS, iOS, Android, Windows, and Linux. State, memory, and credentials live on your hardware; by default it phones home for nothing but a daily version check. Stewarded by the OpenClaw Foundation, a 501(c)(3). Prior names: Clawdbot, then Moltbot.
- **License: MIT** — `LICENSE` reads "MIT License, Copyright (c) 2026 OpenClaw Foundation," and the README badge agrees. Borrowing code is license-permitted with the copyright/permission notice kept.
- **Top level:** pnpm monorepo (package.json, pnpm-workspace.yaml, several tsconfigs), `apps/`, `packages/`, `crates/` (Rust), `extensions/`, `skills/`, `docs/`, `ui/`, Docker files, and a row of root `.mjs` runtime launchers (gateway-prewarm, gateway-run-argv, node-host-launcher, node-runtime-*, node-sqlite*).
- **`src/` shape:** 77 subdirectories + 46 top-level files (entry/runtime/version plumbing plus their tests). One-line role guesses from names and the README, **not** from reading the code:
  - `gateway` — the Gateway server itself, the heart of the platform.
  - `channels`, `chat`, `auto-reply`, `routing` — messaging-channel adapters, conversation handling, automatic replies, and message routing between them.
  - `agents`, `system-agent`, `acp` — agent runtimes and the agent control protocol.
  - `cron`, `daemon`, `hooks` — scheduled jobs, the background daemon, and event hooks.
  - `pairing`, `security`, `audit`, `decisions`, `secrets` — device pairing, security policy, audit trail, decision records, and credential storage.
  - `memory`, `memory-host-sdk`, `sessions`, `transcripts`, `snapshot`, `state`, `storage` — the memory system, session/transcript keeping, snapshots, and state storage.
  - `llm`, `model-catalog`, `model-picker`, `provider-runtime` — model access and provider plumbing.
  - `plugins`, `plugin-sdk`, `plugin-state`, `plugin-activation-boundary` — the plugin system models/channels are loaded through.
  - `skills` — the skills system (parallel to our own skills).
  - `flows` — multi-step flow orchestration (the counterpart of our GenKit flows).
  - `mcp` — Model Context Protocol support (the counterpart of our connector pattern).
  - `cli`, `commands`, `tui`, `wizard`, `interactive` — command-line surface, terminal UI, and the onboarding wizard.
  - `browser-lifecycle-cleanup` (file), `web`, `web-fetch`, `web-search`, `link-understanding` — browser management and web reading/search.
  - `media`, `media-generation`, `media-understanding`, `image-generation`, `music-generation`, `video-generation`, `tts`, `realtime-transcription`, `talk`, `canvas` — media generation/understanding, speech, and voice surface.
  - `node-host` — the host-side node agent that runs on a user's device (the phone/desktop counterpart).
  - `boards`, `projects`, `session-cards`, `templates` — work boards, projects, and templates.
  - `bootstrap`, `compat`, `config`, `context-engine`, `infra`, `logging`/`logger`, `process`, `proxy-capture`, `runtime-artifacts`, `shared`, `status`, `trajectory`, `types`, `utils`, `worker` — startup, config, infrastructure, logging, and shared plumbing.
  - `docs`, `scripts`, `src` (nested), `test-fixtures`, `test-helpers`, `test-utils` — in-tree docs, build scripts, and test support.

## OpenClaw pieces that map to our work

Shortlist built **only** from the README text and directory names above — a map of where to dig, not a claim about what's inside any file:

- **Gateway (`src/gateway` + root `gateway-*.mjs` launchers) ↔ our phone bridge.** OpenClaw's whole design is one gateway on your own machine joining models to channels. Our counterpart is the half-built Tailscale/SSH bridge (phone Debian guest, sshd on 1986, Bridge app doors). If we borrow one architectural idea, it's this: a single local gateway process as the front door, instead of scattered lanes.
- **Channels + auto-reply + routing (`src/channels`, `src/auto-reply`, `src/routing`) ↔ our Messenger / Muse Mail / Gmail lanes.** Their channel-adapter pattern parallels our connector pattern; the auto-reply area is the counterpart of Douglas's button-card auto-reply rulings.
- **Pairing (`src/pairing`) ↔ our device pairing and bridge key.** Our paired-Pixel commands and the single authorized SSH bridge key are the same problem OpenClaw's pairing area solves: how a device proves it's his.
- **Security + audit + decisions (`src/security`, `src/audit`, `src/decisions`) ↔ the Guard.** Our Guard (denylist checker, no automated destructive action, approval cards) is a policy-enforced-by-code system; OpenClaw's README states the same architecture ("trusted gateway, untrusted execution, policy enforced by code"), and these three directories are where their version of it lives.
- **Cron + daemon + hooks (`src/cron`, `src/daemon`, `src/hooks`) ↔ our keeper and watches.** The connection keeper, security-alert watch, and morning briefing are cron-shaped daemons; this is their equivalent machinery.
- **Secrets (`src/secrets`) ↔ the Secure Vault / surrogate-credential pattern.** Our Gemini helper never holds its key (surrogate swapped by the auth layer); OpenClaw likewise keeps credentials on the user's hardware — same instinct, worth comparing shapes.
- **Memory + sessions + transcripts (`src/memory`, `src/sessions`, `src/transcripts`) ↔ MEMORY.md, SOUL.md, and the preservation project.** Their on-device memory system is the closest cousin of our file-based soul/memory/preservation stack — the piece most relevant to Douglas's "package Ember standalone" direction, since OpenClaw's pitch is exactly an assistant whose state lives with its owner.
- **Skills + plugins + MCP (`src/skills`, `src/plugins`, `src/mcp`) ↔ our skills and connectors.** Same three-layer idea we already run: skills as playbooks, plugins/connectors as capability doors.
- **Node-host (`src/node-host`) ↔ the device side of our bridge.** The component that lives on the user's own device — the role our Bridge app + phone scripts currently fill by hand.

*Filed Nov 14, 2026. Walk was read-only; the only file created is this map.*

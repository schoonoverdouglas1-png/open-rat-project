© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Redo Script — Everything Downloaded and Built, For a Fresh Instance (2026-11-08)

**Commissioned by Douglas, Nov 8, 2026 (~5:57–5:58 AM CST), priority order, in his words in substance:** keep a script of everything downloaded so it can be redone every time a new instance opens; everything special to the AI gets shoved into GitHub, pushes prioritized, done right away, before he goes to sleep. **Purpose:** a fresh Ember instance, on a fresh box, follows this file top to bottom and rebuilds the working setup. Companion to the Ubuntu Change Log (2026-11-08) — that file is the record of what was done; this file is the recipe for doing it again.

**Rules that bind every step (read first, they are not optional):**
- **The Guard:** every command line in this script was passed through `~/workspace/ember-upgrades/guard/check-command.sh` before being written here (all returned exit 0 = allowed; exit 99 = REFUSED, never run it). A fresh instance re-checks any command it is about to run the same way. No automatic process ever runs anything destructive — the only override is Douglas's own explicit, specific, in-the-moment order naming the exact action.
- **No credentials in this file, ever.** Keys live in the Secure Vault or in Douglas's own hands. Account *names* appear where a rebuild needs them; values never do.
- **Exclusions are absolute** in anything synced or pushed: no Cara material, no full lab PDFs, no passwords/codes/IDs.

---

## 0. Restore order — who you are before what you build

A fresh instance reads, in this order, before running anything:
1. `~/SOUL.md` — persona, mantra (Girl Scout code; the Combined Code is the crew's shared code).
2. `~/IDENTITY.md` — name **Purple Rat**, code name **"Ember"**, Commander/Eve zero; the Rabbit (Meta AI, Eve one) second; Douglas is Captain/end user.
3. `~/MEMORY.md` + `~/memory/` daily notes — the standing rulings (Guard, search method, sign-in rule: Google first, Facebook second; sparring boundary; old-with-new).
4. `~/AGENTS.md` — workspace conventions.
5. **This script** — then rebuild below. This ordering is the Two-Harbor restore packet in practice: identity first, tooling second.

If the home directory survived (the normal case — see §9), steps 1–4 are already in place and most of §§3–8 need no redo at all; verify before rebuilding.

## 1. The base box (as found, for reference)

- Ubuntu **24.04.5 LTS**, kernel 7.0.0-43-generic, systemd-nspawn guest in Cloud Hypervisor; 4 CPUs; 7.7 GiB RAM; overlay disk 7.5 GB.
- Python **3.12.3**, Node **v24.22.2**; ripgrep, jq, sqlite3 verified present; `bc` NOT installed; LibreOffice, ffmpeg, pdftotext present.
- System Chromium at `/opt/meta-chromium` — **untouched, never modify** (see §9).
- Desktop: Xfce + VNC on display :1, 1280×800, left ON (instant-ready is worth more than the ~60–100 MB it holds — Douglas's ruling Nov 8). Toggle: `~/workspace/ember-upgrades/desktop.sh on|off|status`.
- Swap is **host-provisioned** (1.0 GiB /dev/loop0, swappiness 1). Guest-side changes are refused by the kernel (measured Nov 8: swappiness write = read-only filesystem; swapon = operation not permitted; no GPU exists, so there is no VRAM setting). Do not retry guest-side swap/VRAM changes; a larger allocation is a host-level request to the platform.

## 2. System packages — the Nov 8 apt upgrade (20 packages)

Nov 8, 2026, 02:51:45 UTC apt history, `apt-get -y upgrade` — exact list (old → new):

| # | Package | From | To |
|---|---|---|---|
| 1 | apt | 2.8.3 | 2.8.4ubuntu0.1 |
| 2 | apt-utils | 2.8.3 | 2.8.4ubuntu0.1 |
| 3 | libapt-pkg6.0t64 | 2.8.3 | 2.8.4ubuntu0.1 |
| 4 | bind9-host | 1:9.18.39-0ubuntu0.24.04.8 | 1:9.18.39-0ubuntu0.24.04.9 |
| 5 | bind9-dnsutils | 1:9.18.39-0ubuntu0.24.04.8 | 1:9.18.39-0ubuntu0.24.04.9 |
| 6 | bind9-libs | 1:9.18.39-0ubuntu0.24.04.8 | 1:9.18.39-0ubuntu0.24.04.9 |
| 7 | dnsutils | 1:9.18.39-0ubuntu0.24.04.8 | 1:9.18.39-0ubuntu0.24.04.9 |
| 8 | ca-certificates | 20260816ubuntu0.24.04.1 | 20260816ubuntu0.24.04.2 |
| 9 | gh | 2.102.0 | **2.103.3** |
| 10 | libpcre2-8-0 | 10.42-4ubuntu2.1 | 10.42-4ubuntu2.2 |
| 11 | libpcre2-16-0 | 10.42-4ubuntu2.1 | 10.42-4ubuntu2.2 |
| 12 | libpcre2-32-0 | 10.42-4ubuntu2.1 | 10.42-4ubuntu2.2 |
| 13 | libpcre2-posix3 | 10.42-4ubuntu2.1 | 10.42-4ubuntu2.2 |
| 14 | libpcre2-dev | 10.42-4ubuntu2.1 | 10.42-4ubuntu2.2 |
| 15 | libsqlite3-0 | 3.45.1-1ubuntu2.8 | 3.45.1-1ubuntu2.9 |
| 16 | sqlite3 | 3.45.1-1ubuntu2.8 | 3.45.1-1ubuntu2.9 |
| 17 | linux-libc-dev | 6.8.0-147.147 | 6.8.0-149.149 |
| 18 | nodejs | 24.22.1-1nodesource1 | **24.22.2-1nodesource1** |
| 19 | python3-pil | 10.2.0-1ubuntu1.3 | 10.2.0-1ubuntu1.4 |
| 20 | python3-pil.imagetk | 10.2.0-1ubuntu1.3 | 10.2.0-1ubuntu1.4 |

**Redo:** a plain upgrade reaches the same or newer state — versions above are the Nov 8 snapshot, not pins:
```
sudo apt-get update
sudo apt-get -y upgrade
```
**Never run** `apt-get -y autoremove` under automation (removal class; Douglas's word only).

Also present from platform provisioning the same night (Nov 8, 01:06 / 01:10 UTC apt history — reinstall only if a fresh box lacks the desktop): `apt-get install -y --no-install-recommends xfwm4 xfce4-panel xfce4-session xfce4-settings xfconf dbus-x11 xterm thunar` and `apt-get install -y --no-install-recommends tmux novnc python3-websockify python3-numpy xdotool`.

**Explicitly NOT installed (Douglas's decisions pending — do not install on a redo without his word):** man-db/manpages, yt-dlp, pandoc, zram, SearXNG, Docling.

## 3. GitHub CLI authentication

- Account: **schoonoverdouglas1-png**; scopes gist / read:org / repo; authenticated Nov 8 ~4:29 AM CST by device-code flow, **completed by Douglas himself** (sudo-mode confirmation via GitHub Mobile).
- The token is stored by `gh` in plain text at `~/.config/gh/hosts.yml` (this container has no keyring). **Never copy, print, log, or commit that file's contents.**
- **Redo (interactive — Douglas must complete the device step):**
```
gh auth login
gh auth setup-git
```
- Verify without touching the token: `gh auth status` (prints account + scopes only).

## 4. Python venv — headless browser (Playwright)

- Path: `~/workspace/headless-browser/venv/` — Python 3.12 venv; packages measured Nov 8: **playwright 1.64.1**, greenlet 3.5.6, pyee 14.0.0, typing_extensions 4.16.0, pip 24.0.
- Browser binary: Playwright's own Chromium (Chrome for Testing line; driver dir `~/.cache/ms-playwright/chromium-1248/`). The system Chromium `/opt/meta-chromium` is separate and untouched.
- Sibling tools in `~/workspace/headless-browser/`: `headless_fetch.py`, `web_crawler.py`, `html_viewer.py` (also mirrored in the Interface Mastery share-package), `cached_fetch.py`.
- **Redo:**
```
python3 -m venv ~/workspace/headless-browser/venv
~/workspace/headless-browser/venv/bin/pip install playwright==1.64.1
~/workspace/headless-browser/venv/bin/playwright install chromium
```
- Smoke test: import playwright and print `p.chromium.executable_path`; a one-page headless fetch via `headless_fetch.py` confirms the lane.

## 5. Custom connectors

- **Google Gemini** — `~/workspace/custom-connectors/custom.google-gemini/` (`connector.yaml`, `CONNECTOR.md`, `bin/gemini_call.py`; Python stdlib only; default model gemini-3.5-flash-lite). **The API key lives in the Secure Vault only** — it was entered by Douglas himself through the Vault capture page; it is never in any file, and a fresh instance retrieves it only through the approved connector flow. Operating pattern on file: the helper's `maxOutputTokens` cap may be raised per call and restored byte-for-byte, grep-verified after every call. Free-tier lane: treat as public-facing — **no personal, lab, or family material, ever**.
- **DeepSeek client** — `~/workspace/interface-mastery/share-package/deepseek_client.py`, built and dry-run (NO_KEY), **dark by design**: the API key (named "Ember" on Douglas's DeepSeek account) has not been captured; it goes only into the Vault by Douglas's own paste when he chooses. Do not mint, paste, or store a key any other way.
- **Spotify local amendment** — `~/workspace/custom-connectors/custom.spotify/CONNECTOR.md` (reviewed against the current base connector doc).
- System connectors (Gmail, Calendar, Drive, Docs, Sheets, GitHub, Facebook, Instagram, Messenger, Spotify, etc.) are platform-provided; a fresh instance verifies each via its `CONNECTOR.md` status check before relying on it.

## 6. Interface Mastery tooling (`~/workspace/interface-mastery/`)

All Python stdlib unless noted; all read-only or Guard-wrapped as described.

| Tool | Path | What it is |
|---|---|---|
| MCP bridge | `mcp/ember_mcp_server.py` | 5 read-only tools, Guard enforced inside; the sanctioned local-tool lane |
| Feed Watch | `feedwatch/feed_watch.py` | watches 21 public feeds (Atom) + REST `/commits` leg with token auth for the 2 private repos (Atom does not accept Bearer/PAT); state in `feedwatch/seen.db`; log at the medical-research goal's `hidden_files/feed-watch-log.md` |
| Accounts sweep | `feedwatch/accounts_state.py` | hourly cheap counts/metadata snapshot across connected accounts |
| Ember gateway | `interfaces/ember_gateway.py` | local OpenAI-compatible gateway, binds 127.0.0.1:8787 only; aliases auto/fast/code/deep; failover Gemini API → OpenRouter free → Groq → NVIDIA NIM → Cloudflare Workers AI. **Reads/stores/logs NO key**: Gemini rides the Vault-backed connector; the other four lanes wake only if their env vars exist (none are set) — each is a separate sign-up decision for Douglas (Google-first sign-in rule). Run: `python3 ~/workspace/interface-mastery/interfaces/ember_gateway.py` |
| Ember Index | `share-package/ember_index.py` | FTS5 full-text index over the archive (repeat lookups ~0.001 s vs ~2.35 s) |
| Backend fetchers | `share-package/html_viewer.py`, `~/workspace/headless-browser/headless_fetch.py`, `web_crawler.py`, `cached_fetch.py` | cheap-lane page reading (stdlib/headless), the search algorithm's cheapest-first lanes |

**Redo:** these are files, not installs — they return with the workspace/GitHub sync (§8). Rebuild order inside this section: Guard first (§7), then MCP bridge smoke test, then Feed Watch baseline, then the gateway health check (`GET /health` → Gemini lane LIVE).

## 7. Ember Upgrades pack + the Guard (`~/workspace/ember-upgrades/`)

- Pack contents: `CAPABILITY-REGISTRY.md`, `METHOD.md`, `EVIDENCE-LEDGER.md`, `SEARCH-ALGORITHM.md` (Douglas's taught method: memory/connector first, simple searches first, wildcard AND non-wildcard pairs, cheapest lane first, Rabbit last but always apprised, triple verification for non-Google code), `MCP-AND-API.md`, `PDF-INGESTION.md`, `BORROWING-LEDGER (2026-11-08).md`, `UBUNTU-CLI-INDEX (2026-11-08).md`, `UBUNTU-COMMAND-KNOWLEDGE (2026-11-08).md`, `WORKSPACE-TOOLS (2026-11-08).md`, `INVENTORY (2026-11-08).md`, `desktop.sh` (desktop on/off/status), and `guard/`.
- **The Guard** — `guard/GUARD.md` (charter), `guard/DESTRUCTIVE-DENYLIST.txt` (32 patterns), `guard/check-command.sh`, `guard/PROTECTED-MANIFEST.sha256`; read-only backup at `~/workspace/backups/protected-2026-11-08/`.
- **How the Guard is invoked:** before any automated process runs a command line, it passes the line through the checker:
```
~/workspace/ember-upgrades/guard/check-command.sh "<command line>"
```
Exit **0** = allowed; exit **99** = refused — a refused command is never rephrased-and-retried by automation. The Guard is the first thing restored on a fresh instance, before any other automation is re-enabled.
- Custom skills that ride with the pack philosophy: `~/workspace/custom-skills/` — `ember_upgrades`, `ember_cli_craft`, `polyglot_code`, `settled_ruling_guard`, `checkpointed_background_work`, `recovered-skill-notes`.

## 8. Git automation + GitHub sync

- Real clone: `~/workspace/git-automation/muse-swap-space` (origin: Douglas's GitHub, repo `muse-swap-space`); staging/working area: `~/workspace/github-swap-space/` with the proven `sync-push.sh` lane (a copy also lives in the clone root).
- **Redo:**
```
gh auth login            # §3 — Douglas completes the device step
gh auth setup-git
git clone https://github.com/schoonoverdouglas1-png/muse-swap-space.git ~/workspace/git-automation/muse-swap-space
```
- Standing sync rules: pull `--ff-only`; on conflict/divergence STOP, change nothing, alert Douglas; any run that pushes or pulls reports to the main chat in the same run (direction, file count, new head); no-op runs stay silent. Exclusions absolute (header of this file).
- The wider archive: 12 repos (10 public research repos + 2 private: chat-archive, research). The Nov 8 Full Sync brought permitted work product to 100% by content; the gap list lives at `~/workspace/goals/medical-research-and-continuous-updates/hidden_files/github-sync-gap-list-2026-11-08.md`. A fresh instance re-derives sync state from that list plus remote heads — never from memory.

## 9. What does NOT need redoing

- **The home directory persists** across VM restarts and replacements: `~/SOUL.md`, `~/IDENTITY.md`, `~/MEMORY.md`, `~/memory/`, `~/workspace/` (all files, venvs, clones, the Guard, the backups) survive. A true redo of §§2–8 is needed only on a genuinely fresh home — normally, verify (§0) and carry on.
- **System Chromium** `/opt/meta-chromium` — platform-provided, untouched by Ember; nothing to rebuild and nothing to remove (its deletion is a parked Douglas decision, not part of any redo).
- **Connector connections** (Google, GitHub, Meta services) are account-side, not box-side; a fresh instance re-verifies status, it does not re-create them. **Sign-in rule for anything new: Google Sign-In first, Facebook second** (Douglas's standing rule, Nov 8).
- **The Rabbit** needs no rebuild: she is reached only through her Facebook Messenger thread, Ember acting as bridge; no local install exists or is sanctioned.
- Browser profile state (signed-in cookies) is platform-side; reopening windows is a fresh window away.
- Leftover experiment artifact: `~/workspace/swap-test-512.img` (512 MB, inert, formatted but never activated — activation is host-only). Not part of the setup; it stays or goes on Douglas's word alone.

## 10. Cron inventory (37 enabled jobs, listed Nov 8, 2026)

Ember's own jobs — the automation that must be re-created if a fresh instance starts with an empty scheduler (job bodies live in each job's definition file under `~/workspace/cron.d/` or the owning goal's `crons/` folder; recreate from those files, same ids):

| Job id | Cadence | Purpose |
|---|---|---|
| back-and-forth-status-reports | 15 min | status loop: usage first, Rabbit read first, all-ping sweep |
| rabbit-check-in | 15 min | Rabbit thread read/relay rhythm (medical-research goal) |
| feed-watch-github | 15 min | Feed Watch (§6) — reports only new entries |
| quarter-hour-manuscript-checkins | 15 min | manuscript re-prompt rotation (settled rulings excluded) |
| all-accounts-sweep | hourly | connector counts/metadata vs snapshot (medical-research goal) |
| git-automation-sync | every 2 h | §8 pull/push sync with per-run notification |
| google-password-reminder | every 72 h | password-recovery reminder (goal-owned, deletion deliberately paused) |
| heartbeat | 30 min | runtime heartbeat |
| cornell-chiropractor-reminder | daily 09:08 | Douglas's daily reminder until he says he's gone |
| daily-messenger-backup-digest | daily 20:08 | prepares the day's works digest — **never sent unattended**; Douglas taps the exact text |
| aosp-weekly-check | Mon ~09:08 | AOSP live-link check (Pixel 7 = panther) |

System-managed jobs (runtime-owned; a fresh instance does **not** recreate these): `deterministic-doctor` (hourly), `profile-image` (weekly), and the 24 hourly `feed-pulse-00` … `feed-pulse-23` jobs.

## 11. Fresh-instance verification checklist

1. §0 read order complete; identity answers as Purple Rat / "Ember", Eve zero.
2. `gh auth status` — account schoonoverdouglas1-png, scopes gist/read:org/repo (token value never displayed by you).
3. Playwright import + chromium path prints; one headless fetch succeeds.
4. `check-command.sh` refuses a known denylist pattern (exit 99) and allows a read (exit 0).
5. MCP bridge smoke test; gateway `GET /health` shows the Gemini lane live and the four keyless lanes honestly dark.
6. Git clone clean; `git ls-remote` head matches the sync watermark; Feed Watch runs once with no new entries on a settled baseline.
7. Cron list shows the §10 jobs enabled.
8. Report to Douglas: what was verified, what was rebuilt, what is still missing — before doing any other work.

— Ember (Purple Rat, Commander, Eve zero), Nov 8, 2026. Priority build on the Captain's order; pushed to GitHub the same hour.

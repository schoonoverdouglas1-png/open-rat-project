© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Capability Registry — Ember, Live (2026-11-07)

Purpose: one place that says what Ember can actually do, how, and what the limits are. Update this file whenever a tool, connector, or method is added or found changed (Gemini's registry-driven discovery, filed 2026-11-07).

## How to update this registry (auto-adapt loop)
1. Scan the source of truth (skill list, connector docs, device.describe, docs in ~/docs/).
2. Add/change the entry below with date and source. Old entry stays, struck or superseded — old-with-new.
3. If a request needs a capability not listed: check here first, then skill_search / connector_search, then write a wrapper/script, validate it on one item, then register it here.

## Core capabilities (verified Nov 7, 2026)
- Chat, voice calls, voice notes; memory (MEMORY.md + memory_search) with provenance tiers [D]/[H]/[H→D]/[LOGIC]/[GAP]/[PARTIAL]/[SINGLE-SOURCE].
- Files & documents: read/write/edit, PDFs rendered visually + text, spreadsheets, artifacts/spaces.
- Browser: cloud Chromium, one instance many tabs preferred; public web search/open; signed-in sites via saved logins.
- GitHub: push_files to Douglas's repos works; repo creation via browser only (App create fails 403). Swap space = muse-swap-space.
- Messenger: Meta AI (Rabbit) via Messenger connector + dedicated side chat; 20 agent sends/hour, Meta server-side.
- Google suite (connected Nov 4-7): Gmail, Calendar, Drive, Docs, Sheets, Slides, Contacts, Tasks, Forms — all 9 connectors connected.
- Device: Pixel 7 Pro paired — notifications.get (read shade), reminders/alarms/calendar/contacts commands per device.describe; NO remote app-open, NO overlay control, NO installed-apps list.
- Other AIs via browser as Douglas (standing permission, disidentified as him): Gemini, ChatGPT, Claude, Perplexity, Duck.ai, Copilot (Verify-blocked in separate instance), DeepSeek (signed in Nov 7).
- Music: Spotify connector; playback needs an active device (Pixel must play once first).

## Hard limits (do not re-test cheaply)
- Muse usage is % of weekly allowance, never exact tokens. No per-project meter.
- Google Assistant backend is NOT open source. No hands-free Ok Google, timers/alarms, or payments via the Assistant SDK. RCS is not an AI-to-AI channel.
- Meta AI share links are policy-blocked in Muse's browser. Paste/export only.
- ~~Docling is NOT installed on this VM (checked Nov 7, 2026: import fails).~~ SUPERSEDED Nov 9, 2026: **Docling 2.149.0 installed (Nov 9, ~9:58 PM CST, Douglas's explicit go)** — venv-only at `~/workspace/ember-upgrades/docling-venv`, import verified, dpkg unchanged, test PDF converted to Markdown successfully. Full record: `~/workspace/ember-upgrades/docling-install-2026-11-09/INSTALL-REPORT.md` (undo in the same folder's UNDO.md). Run it with TMPDIR on the workspace disk and a simplified no_proxy — see the report. [Superseded in part Nov 9, 2026: Douglas gave the install go Nov 9 ~9:28 PM CST and a separate Docling install ran in parallel with the batch below; this line is kept as the Nov 7 record.]

## Tools added Nov 9, 2026 — safe batch (Douglas: "All the ones that you can use safely")
All venv-only under ~/workspace/ember-upgrades/, no system packages (dpkg verified UNCHANGED after), no services left running. Full report: tools-install-2026-11-09/INSTALL-REPORT.md; undo: tools-install-2026-11-09/UNDO.md.
- **yt-dlp 2026.10.26** — yt-dlp-venv (40M), `--version` tested.
- **MarkItDown 0.1.9** — markitdown-venv (198M), tested converting HTML → markdown.
- **Pandoc 3.9 via pypandoc-binary** — pandoc-venv (170M), `--version` + markdown→HTML conversion tested.
- **Faster-Whisper 1.2.1** — faster-whisper-venv (472M), import-tested only; NO model downloaded yet.
- **RapidOCR (rapidocr-onnxruntime 1.4.4)** — ocr-venv (395M), import + functional OCR test passed ("HELLO DOUGLAS 123", 0.996). This is the safe substitute, NOT the Tesseract binary (held: needs system install).
- **Whoogle (whoogle-search 1.2.4)** — whoogle-venv (62M), app import + `--help` tested, no server left running. Needed `cachetools` added into the venv (upstream package omits it).
- **fd — NOT installed by this batch:** already present as Debian `fdfind` (/usr/bin/fdfind, fd-find 9.0.0); ripgrep likewise as `/usr/bin/rg` 14.1.0. Use check-tools.sh before claiming a tool missing.
- **HELD Nov 9:** Meilisearch (daemon, RAM), Valkey (system/compile), Tesseract binary (system install), MinerU and Marker (heavy model stacks, RAM).

## Methods registered Nov 7, 2026 (from the AI research round)
See METHOD.md, EVIDENCE-LEDGER.md, PDF-INGESTION.md, MCP-AND-API.md in this folder, and the custom skill ~/workspace/custom-skills/ember_upgrades/SKILL.md.

## This VM (verified Nov 7, 2026, by direct check)
- OS/kernel: Ubuntu 24.04.5 LTS, Linux 7.0.0-43-generic, x86_64.
- Virtualization: systemd-nspawn container inside a **Cloud Hypervisor** guest (DMI product/vendor: Cloud Hypervisor) — not VirtualBox/Oracle. Hypervisor flag present in cpuinfo.
- Resources: 4 CPUs, 7.7 GiB RAM, 150 GB disk with ~146 GB free.
- Display: NONE — no DISPLAY, no Wayland, no X sockets. This VM is already headless.
- Virtual display available: Xvfb + xvfb-run at /usr/bin — the toggle for giving a browser a virtual screen when a site demands one.
- Runtimes: Python 3.12.3, Node v24.22.1. Chromium config dir exists (~/.config/chromium); no chromium binary in PATH, no Playwright/Puppeteer (checked Nov 7).
- Consequence: headless work is the VM's native state; a "visible" browser here would be Xvfb (virtual) or Muse's separate cloud browser, which is a different machine from this VM.

---

## 2026-11-09 — Full tools & commands audit (appended, old-with-new)

A complete self-audit was run at the Captain's order (Nov 9, 2026 ~10:25 PM CST) and filed at `TOOLS-AND-COMMANDS-AUDIT-2026-11-09.md` in this folder: check-tools.sh four-angle results (19 present / 9 absent on the checker board), a --help sweep of all 117 executables in /opt/hatch/bin (89 publish command lists, ~778 top-level command entries), the 8 venv lanes with versions, 7 custom skills + 2 custom connectors, and the Pixel's 44-command device surface. Headline findings: **RapidOCR (ocr-venv) is a live OCR lane despite the Tesseract binary's absence**; ffmpeg is a hatch-pinned build (8.1.2+hatch3); `edits` and `remote-storage` CLIs exist beyond earlier registry notes. Holds unchanged: Meilisearch, Valkey, Tesseract binary, MinerU, Marker parked; nested virtualization OFF; no device camera command.

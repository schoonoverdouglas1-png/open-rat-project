# Ember Self-Inventory — (2026-11-08)

*First full layered sweep, run Nov 8, 2026 at Douglas's direction, using the method DeepSeek + Gemini agreed on (see Think Tank charter). Re-run monthly or after platform updates. Names and purposes only — no secret values were read or recorded.*

## System
- Ubuntu 24.04.5 LTS, kernel 7.0.0-43-generic, x86_64; systemd-nspawn container inside a Cloud Hypervisor guest.
- 4 CPUs; 7.7 GiB RAM; /home on a 150 GB volume (146 GB free); container root overlay 7.5 GB.
- **1,345 commands on PATH; 783 installed system packages (dpkg).**

## The finds that matter
- **LibreOffice (`soffice`) installed** — full office suite: document/spreadsheet/presentation conversion (docx ↔ pdf ↔ xlsx) without any browser. Not previously inventoried.
- **ffmpeg** — audio/video processing. **pdftotext** — native PDF text extraction.
- **Python data stack pre-installed:** numpy, pandas, scipy, matplotlib, pillow, lxml, openpyxl, python-docx, requests, PyYAML. 300 stdlib modules.
- **100+ CLI tools in the runtime bin** (`/opt/hatch/bin`): connector CLIs (github, gmail via hatch_gws_cli, facebook-cli, instagram-cli, spotify-api, stripe, duffel, expedia, opentable, ticketmaster, plaid, notion-cli, slack, zoom, tailscale, onepassword, and more), plus runtime helpers (hatch-doctor, remote-storage, feature-request, subscription-status, tts, media-generation, image-search, local-search, geocode).
- **Runtime internal services exist as Unix sockets** (env names only): auth, egress approval, memory, security/sentinel HTTP API, sandbox API, telemetry, inference proxy, rescue signal. These are the platform's own plumbing — the "sidecar" layer both AIs predicted. Ember does not drive them directly; her tools do.
- **Chromium profile config** exists at `~/.config/chromium` and `~/.config/google-chrome-for-testing` (her local Chrome for Testing 157, separate from the policy-locked `/opt/meta-chromium`).
- **Xvfb / xvfb-run** — virtual display for headed-mode local browser runs.
- System tools: git, gh (not authenticated), curl, wget, jq, ripgrep, sqlite3 CLI, openssl, zip/unzip/tar.
- Languages: Python 3.12.3, Node 24.22.1, Bun 1.4.4, g++ 13.3. Not installed: clang, Rust, Go, Java, Deno.
- No TCP listeners visible from inside the container (`ss` empty) — the runtime's services speak over Unix sockets, not local ports.

## Value ranking (think-tank consensus, confirmed by the sweep)
1. Python data stack — highest (research tables, document parsing, charts).
2. ffmpeg / pdftotext / LibreOffice — document and media ingestion with no browser.
3. ripgrep / jq / sqlite3 — search and index.
4. Connector CLIs — moderate; audit each by --help before first use.
5. Assets tree (image models, 3D) — low for research, there if visual work needs it.

## Ember's own tools (built Nov 7–8, 2026)
- `~/workspace/headless-browser/`: html_viewer.py v0.2 (JS flag + hashes), web_crawler.py, headless_fetch.py, ember_index.py + ember_index.db (SQLite FTS5), ember-extension (Page Reader), Chrome for Testing 157, Playwright venv 1.64.1.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

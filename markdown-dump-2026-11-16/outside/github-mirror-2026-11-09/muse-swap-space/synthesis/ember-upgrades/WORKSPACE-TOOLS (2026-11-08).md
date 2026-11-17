# Workspace Tools — what Ember actually uses, verified by running/listing 2026-11-08
Douglas's ask: "Make a list of workspace tools that you have available." Companion question answered the same night: his Markdown/text files are built with plain-text file tools directly in the workspace — NOT in LibreOffice. LibreOffice is the rendering/reading lane (docx/pdf), plain text is the writing lane: lighter, faster, versionable, diff-able, and it is what GitHub stores natively.

## 1. File & text tools (how the .md files get made)
- Direct file write/edit in the workspace (plain UTF-8 text) — every Markdown file, note, charter, ledger, and manuscript copy.
- Shell (bash) for bulk work: `find`, `rg` (ripgrep), `grep`, `sed`/`awk`, checksums (`sha256sum`), the Guard wrapper for automated command lines (`ember-upgrades/guard/check-command.sh`).
- `git` + `gh` locally; GitHub connector for pushes (per-push approval).
- SQLite (CLI + Python `sqlite3` 3.45.1) — Ember Index, evidence store.

## 2. Her own built tools (in `~/workspace/headless-browser/`)
- `headless_fetch.py` — stdlib page fetcher through the proxy (~0.65 s/page).
- `html_viewer.py` v0.2 — extracted-text viewer, JS detection, integrity hashes (~85% less material than raw HTML).
- `cached_fetch.py` + `ember_index.py` + `ember_index.db` — fetch-once cache + FTS5 search index (repeat reads ~0.001 s).
- `web_crawler.py` — same-domain BFS crawler.
- `deepseek_client.py` — stdlib DeepSeek API client; key from env only; dark until the key step finishes.
- Ember Page Reader extension v0.1 (v2 designed, not built); CfT 157 browser in `cft/` for local Playwright runs.
- `~/workspace/ember-upgrades/desktop.sh` — GUI on/off/status toggle (Xfce + TigerVNC + noVNC, ~41 MB idle).

## 3. Document & media lane
- LibreOffice (`soffice`) — Writer/Calc/Impress/Draw/Base/Math: renders and converts .docx/.pdf (headless conversion proven; GUI proven on the desktop).
- `pdftotext` (layout mode first), `ffmpeg`/`ffprobe` (desktop recordings, media checks).
- Python data stack pre-installed: numpy, pandas, scipy, matplotlib, plotly, seaborn, pillow, lxml, openpyxl, python-docx, PyYAML, requests, Jupyter pieces.
- Absent (verified): pandoc, tesseract, ImageMagick, sox — named so nobody assumes them.

## 4. Languages (proven lanes — see polyglot_code skill)
- Python 3.12.3 (core), Node v24.22.1, Bun 1.4.4, g++/gcc 13.3.0, JavaScript inside Chromium via Playwright. Not installed: Rust, Go, Java, Deno, clang.

## 5. Browsing lanes
- Muse cloud browser (separate machine; the one Douglas watches/takes over).
- Local Chrome for Testing 157 via Playwright (this VM).
- CLI search: `/opt/hatch/bin/web-search` (~3.3 s), DuckDuckGo HTML endpoint (bot-check class, second choice).

## 6. Connector CLIs in /opt/hatch/bin (100+)
Grouped: mail/messaging (imap-email, hatch_messenger_cli, instagram/facebook CLIs), Google Workspace (hatch_gws_cli), GitHub, Spotify, health (healthkit-cli, health-cli), travel (duffel, expedia, agoda, flightaware), commerce (instacart, etsy-cli), media (image-search, avatar-media-generation, tts), vault (hatch-vault), storage (remote-storage), plus the runtime's own hatch-* services.

## 7. Desktop & session
- Xfce session on TigerVNC :1 (1280×800, compositing off), Thunar, xterm, tmux session `ember-main`, xdotool for driving, websockify/noVNC on localhost only.
- Measured: ~1,345 commands on PATH; 783 dpkg packages; 1,312 man pages → 704 official one-liners in UBUNTU-COMMAND-KNOWLEDGE. GUI-interactable apps ≈ a dozen (LibreOffice's six, Thunar, xterm, Xfce panel/settings); the rest are CLI tools reached through Ember or the terminal.

## Provenance
Verified 2026-11-08 by listing the directories and `which` on the named binaries (all found except the noted absences). [D] by run, not by claim.

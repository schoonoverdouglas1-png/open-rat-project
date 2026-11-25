© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Install Report — Safe Tools Batch, 2026-11-09 ~9:30–9:45 PM CST

Authorized: Douglas, voice call — "All the ones that you can use safely."
Method: venv-only pip installs under ~/workspace/ember-upgrades/, no apt, no sudo, no system packages, no services left running. Snapshot + undo recorded BEFORE the batch (see UNDO.md and dpkg-before.txt in this folder).
RAM guard: checked `free -m` between installs; available RAM stayed between ~786 MB and ~1,334 MB, never under the ~300 MB stop line. No tool was stopped for RAM.

## Results

| Tool | Location | Version | Size | Test | Status |
|---|---|---|---|---|---|
| yt-dlp | yt-dlp-venv | 2026.10.26 | 40M | `yt-dlp --version` → 2026.10.26 | INSTALLED + TESTED |
| MarkItDown | markitdown-venv | 0.1.9 | 198M | Converted a tiny HTML file → "# Hello Douglas / Test paragraph for MarkItDown." | INSTALLED + TESTED |
| Pandoc (pypandoc-binary) | pandoc-venv | pandoc 3.9 | 170M | `pandoc --version` (bundled binary) → pandoc 3.9; pypandoc converted '# Hi Douglas' (md) → `<h1 id="hi-douglas">Hi Douglas</h1>` | INSTALLED + TESTED |
| Faster-Whisper | faster-whisper-venv | 1.2.1 | 472M | Import test only: `import faster_whisper` OK. NO model downloaded, per instructions. | INSTALLED + IMPORT-TESTED |
| RapidOCR (OCR substitute — NOT Tesseract) | ocr-venv | rapidocr-onnxruntime 1.4.4 | 395M | Import OK; OCR'd a generated test image and read "HELLO DOUGLAS 123" at 0.996 confidence. This is RapidOCR, the safe self-contained substitute — the Tesseract binary itself was NOT installed (it needs a system install). | INSTALLED + TESTED (substitute) |
| Whoogle | whoogle-venv | whoogle-search 1.2.4 | 62M | `from app import app` → Flask app imports OK; `whoogle-search --help` runs (exit 0). NOTE: the pip package omits its `cachetools` dependency — cachetools was added into the same venv to fix the import. NO server left running (verified: no whoogle process). | INSTALLED + TESTED |
| fd | — | system fd-find 9.0.0 (`/usr/bin/fdfind`) | — | Standalone install SKIPPED mid-batch on a correction from the main chat: fd was already present all along as Debian's `fdfind` (/usr/bin/fdfind 9.0.0, verified `--version`), and ripgrep likewise as `/usr/bin/rg` 14.1.0. Installing a second fd would have duplicated a working tool. ~/workspace/tools-bin/ remains empty. | ALREADY PRESENT — NOT INSTALLED |

Total new disk: ~1.34 GB across six venvs.

## Explicit HOLDS (not installed, by design)
- **Meilisearch** — a daemon/search server; RAM is tight tonight (~1 GB available) and nothing may be left running.
- **Valkey** — needs a system/compile install; outside the venv/binary-only safe scope.
- **Tesseract binary** — needs a system (apt) install and its apt candidates were unverified on this box; RapidOCR installed instead as the substitute (above).
- **MinerU** — heavy model stack; RAM tight tonight.
- **Marker** — heavy model stack; RAM tight tonight.

## Final verification pass — check-tools.sh (added on parent's correction, Nov 9 ~9:38 PM CST)
Run of the permanent checker `~/workspace/ember-upgrades/check-tools.sh` (executables incl. renames + dpkg + python modules + Ember's venvs/tools-bin):
- **fd: PRESENT** — exe `fdfind` = /usr/bin/fdfind, pkg fd-find = 9.0.0-1. Standalone fd download/install was skipped entirely, as corrected; recorded as "already present as fdfind."
- **ripgrep: PRESENT** — exe `rg` = /usr/bin/rg, pkg ripgrep = 14.1.0-1.
- **yt-dlp: PRESENT** (venv exe + module, yt-dlp-venv). **MarkItDown: PRESENT** (venv exe + module). **Faster-Whisper: PRESENT** as module `faster_whisper` (faster-whisper-venv). **Pandoc: PRESENT** via venv module `pypandoc` (pandoc-venv); the pandoc 3.9 binary itself lives inside the pypandoc package files and was verified directly (`pandoc --version` → 3.9).
- **Whoogle: checker reads ABSENT, install is actually present** — the checker's map looks for exe `whoogle` / module `whoogle`, but the real names are exe `whoogle-search` and the import package `app`. Direct re-verification stands: `whoogle-venv/bin/whoogle-search --help` exit 0, `from app import app` → Flask. Same rename class as the rg/fdfind miss; the checker map could add `whoogle-search`/`app`, flagged here for the parent.
- **Tesseract: ABSENT** (all angles) — as designed; RapidOCR is the installed substitute (checker has no rapidocr entry; its functional test above stands).
- **Meilisearch, Valkey: ABSENT** — as designed (holds).
- **Docling: checker ABSENT at pass time** — the parallel Docling install was still in its pip step (docling-venv present but `docling` not yet importable); that is the separate Docling task, not this batch.

## Verification after the batch
- `dpkg --get-selections` after (dpkg-after.txt) vs before (dpkg-before.txt): **UNCHANGED** — diff empty.
- No servers/services left running from this batch (Whoogle checked by process list; no systemd units created).
- Undo: delete each venv (or nothing, for fd) — full per-tool paths in UNDO.md in this folder.

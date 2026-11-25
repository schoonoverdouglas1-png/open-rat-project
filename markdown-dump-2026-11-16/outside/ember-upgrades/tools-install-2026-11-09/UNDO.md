© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Undo — Safe Tools Batch, 2026-11-09 ~9:30 PM CST

Authorized: Douglas, voice call — "All the ones that you can use safely."
Scope: venv-only pip installs under ~/workspace/ember-upgrades/ and one standalone binary under ~/workspace/tools-bin/. No apt, no sudo, no system packages, no services left running.

Before snapshot: dpkg-before.txt in this folder (825 selections).

## Undo per tool (delete exactly that folder/file — nothing else changes)
- yt-dlp: delete ~/workspace/ember-upgrades/yt-dlp-venv/
- MarkItDown: delete ~/workspace/ember-upgrades/markitdown-venv/
- Pandoc (pypandoc-binary): delete ~/workspace/ember-upgrades/pandoc-venv/
- Faster-Whisper: delete ~/workspace/ember-upgrades/faster-whisper-venv/
- RapidOCR (Tesseract substitute): delete ~/workspace/ember-upgrades/ocr-venv/
- Whoogle: delete ~/workspace/ember-upgrades/whoogle-venv/
- fd: delete ~/workspace/tools-bin/fd (and its downloaded archive in /tmp)

## Verify undo / no system change
- After batch, compare: dpkg --get-selections vs dpkg-before.txt — must be identical.
- No process from these venvs is left running; no systemd unit was created.

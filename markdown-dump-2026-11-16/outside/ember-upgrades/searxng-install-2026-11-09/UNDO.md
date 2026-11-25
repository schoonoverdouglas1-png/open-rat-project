© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# SearXNG install — undo path (recorded BEFORE install, 2026-11-09)

Install method: Python venv ONLY at ~/workspace/ember-upgrades/searxng-venv, built from the local source at ~/workspace/ember-upgrades/repos/searxng.
No system packages installed. No systemd service. No config outside the venv + this folder.
UNDO: stop any searxng process, then delete ~/workspace/ember-upgrades/searxng-venv entirely. System package state snapshot: dpkg-before.txt in this folder (verify with dpkg --get-selections diff after undo).

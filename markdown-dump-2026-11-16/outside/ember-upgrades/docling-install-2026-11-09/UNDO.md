© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Docling Install — Undo Path (recorded BEFORE install)
Date/time: 2026-11-09 ~9:29 PM CST
Authorized: Douglas, voice call Nov 9, 2026 ~9:28 PM CST — "Go ahead and sign me up for Docling" [Docling]. Docling is free open-source, no account/sign-up; this is a local install only.

## Before snapshot
- System packages snapshot: `dpkg-before.txt` in this folder (825 lines)
  - SHA256: 3cb97ac05a77a29706fefa1c45f44ea42c39b77b82a5ae23c762ec6e9038ad83
- No system packages will be installed/changed. No apt, no systemd service.

## What will be created (venv-only)
- `~/workspace/ember-upgrades/docling-venv/` — Python venv (python3 -m venv), pip install docling inside it ONLY.

## Amendment after install (2026-11-09 ~9:58 PM CST, old-with-new)
- The first test run also downloaded ~506 MB of public Docling model files to `~/.cache/huggingface`. Full undo may optionally include that cache folder as well; it is a download cache only.
- Working run note: future Docling runs need `TMPDIR` on the workspace disk (the /tmp tmpfs is 512 MB, too small for the torch wheel) and a simplified `no_proxy=localhost,127.0.0.1` in the calling process (httpx cannot parse this box's bracketed IPv6 no_proxy entries).

## Exact undo
Undo = delete exactly that venv folder (requires Douglas's explicit in-the-moment order per The Guard, since deletion is destructive — this file records the path, it does not authorize automated deletion):
- `rm -rf ~/workspace/ember-upgrades/docling-venv`
- Optionally also remove this install folder `~/workspace/ember-upgrades/docling-install-2026-11-09/` (contains only snapshot, this undo note, and the install report).
- No other undo needed: no system packages changed (verified after install by diffing `dpkg --get-selections` against dpkg-before.txt), no services, no config outside the venv except the old-with-new status updates in PDF-INGESTION.md and CAPABILITY-REGISTRY.md, which are superseded-history edits and stay.

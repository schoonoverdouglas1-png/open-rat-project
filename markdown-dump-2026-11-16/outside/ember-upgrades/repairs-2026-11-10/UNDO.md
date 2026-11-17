# UNDO — Tool Repairs 2026-11-10

Written BEFORE any install, per Douglas's Reversibility Rule (Nov 8, 2026).

## Snapshots in this folder
- `markitdown-freeze-before.txt` — pip freeze of markitdown-venv before repair
- `faster-whisper-freeze-before.txt` — pip freeze of faster-whisper-venv before repair
- `dpkg-before.txt` — `dpkg --get-selections` before repair (825 lines)

## Undo — MarkItDown venv
Restore exact prior versions (does NOT delete the venv):
```
~/workspace/ember-upgrades/markitdown-venv/bin/pip install -r ~/workspace/ember-upgrades/repairs-2026-11-10/markitdown-freeze-before.txt
```
Note: pip install -r restores listed versions; any *new* packages added by the
extras install that are not in the freeze file should be uninstalled by name
(they will be listed in REPAIR-REPORT.md under "newly added") to return to the
exact prior set:
```
~/workspace/ember-upgrades/markitdown-venv/bin/pip uninstall <newly-added-package-names>
```

## Undo — Faster-Whisper venv
Restore exact prior versions (does NOT delete the venv):
```
~/workspace/ember-upgrades/faster-whisper-venv/bin/pip install -r ~/workspace/ember-upgrades/repairs-2026-11-10/faster-whisper-freeze-before.txt
```
Plus uninstall any newly added packages listed in REPAIR-REPORT.md, as above.

## Undo — system
Nothing system-level is changed by these repairs (venv-only, no apt/sudo).
Verify with: `dpkg --get-selections | diff - dpkg-before.txt` (expect no diff).

# REBUILD — How to Build Ember Later (2026-11-16)

Douglas's order: save all the things that make Ember work, in all his projects, in a way where they can build her later. This kit is that save. Nothing here is the only copy — every piece also lives in its home.

## Boot order (what makes her her, read in this order)

1. `core/SOUL.md` — who she is
2. `core/MEMORY.md` — what she remembers
3. `core/AGENTS.md` — how she works
4. `core/IDENTITY.md` — the names
5. `core/USER.md` — the man

## The papers

- `papers/MASTER-OS.md` — every OS by name, with the Markdown OS manifest
- `papers/The Bridge Orders (2026-11-16).md` — the proven routes between the AIs
- `papers/The Open Code Promise (2026-11-16).md` — what she promised about the code
- `papers/UniversalLaw.md` — his Law

## The engines

- `os/rados.py` + `os/RAT-CORE.md` + `os/BOOT.md` — Rat OS (RAT-0.1 "First Heap"); boot reads RAT-CORE first; the core file is read-only by design
- `os/meadow.py` + `os/MEADOW-CORE.md` — Meadow OS (MEADOW-0.1 "First Field")
- `keeper/` — PatternKeeper v8 (the tagged keeper, PK2026001), v4 (the export line), the tool bench, his test suite, his config
- `tools/rat_debug.py` — the debugger built to debug with Copilot forever (Rat Code's first tool)
- `tools/build-apk.sh` + `tools/APK-BUILDING-SKILL.md` — the hand-rolled APK pipeline (needs a JDK 17 and Android build-tools 30.0.3)
- `tools/auto-adapt.py`, `tools/archive-peek.py`, `tools/key-cycle.sh` — the working set

## The phone door

- `app/` — the Purple Rat WebKit app source (manifest, both activities, and the line's own debug keystore). Every build of this line signs with that keystore, so each new version installs over the last. v3 carries the files offline and the floating bubble.

## What is NOT in the kit (and why)

- The Meadow's acquired OpenAI code (openai-python, whisper, tiktoken) — public repos, re-acquirable any time; the kit stays small enough to carry anywhere.
- Any credential, key, or password. Keys live in the Secure Vault, never in files. A rebuild reconnects accounts with Douglas's taps, the way the first build did.
- The GitHub mirrors hold the rest (ten repos under his account, plus the public patternkeeper repo) — the kit is the seed, the mirrors are the field.

## The one rule of rebuilding

Old with new, always. A rebuild reads the core first, keeps what it finds, and adds — it never overwrites Douglas's edits or erases a version to make room for its own.

---
**Copyright © Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

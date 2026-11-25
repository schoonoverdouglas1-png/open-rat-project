© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Rat OS — Change Log

Versions in the decimal system: RAT-0.1, RAT-0.2, and on by tenths,
each entry rolled out through this log, old entries kept beside new ones.

## RAT-0.2 — 2026-11-16
- **over_under.py rolled in** — the Over/Underrun keeper (invented at Douglas's order): every watched situation carries a band [min..max]; underruns of copies are fixed by resyncing from the source of truth; overruns are reported, never deleted. First watch list: Master OS copies, Pin Board copies, the compiled Ember twins. First live run: ALL IN BAND; self-test proved the fixer (drifted copy repaired 0 → 1).
- **ember_compile.py + the twin dumps** — Ember compiled into two cross-verified instances (31/31 files identical), redundancy that costs nothing extra.
- **The Pin Board** — the needed links now live in parallel places (file, shared-markdown, a Muse space, the Desktop Card), kept in sync in one sweep, forever by his order.
- **Meta Model API provider** added to the OpenClaw config (models.providers.meta, model muse-spark-1.3, key read from the MODEL_API_KEY environment variable).
- **Master OS named Brain Zero**; the OS hierarchy stands: Rat OS first, the nature line after, Muse AI last.

## RAT-0.1 "First Heap" — 2026-11-16
- First boot. Kernel rados.py reads system/RAT-CORE.md first; the file system is the heap. RAT test 3/3 PASS.

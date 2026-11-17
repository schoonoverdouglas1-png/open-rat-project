# OpenClaw — Fixes in a Parable Way (2026-11-16)

At Douglas's order, Nov 16, 2026: "Try to fix OpenClaw in a parable way — issue 128090 and OpenClaw issue 200227." Checked live on GitHub the same hour. Kept lean on purpose: each markdown holds the minimum memory to do the maximum (his rule, Nov 16, 2026).

## Issue 200227 — OPEN — the watchman who checked every page
Upstream: memory-core's native watcher pegs the Gateway main thread (~1 core, ~3.4 GB) on a tree of ~100k .md files in ~7.8k dirs, with steady appends. Hot path: full directory traversal (readdir / lstatSync) and per-path exclude checks in @openclaw/fs-safe.

**The parable:** A watchman was set to guard a library of a hundred thousand pages, and he read his orders as: *every time a page is added, walk every shelf and touch every page, to be sure nothing else changed.* Pages arrived all day, so the watchman never sat down, and the house's one road — the main thread — was always full of his running. The keeper of the house fixed it with one sentence: **"Watch the doors, not the pages. A door opening tells you which shelf to look at — look there, and only there, and write the shelf's name on your list instead of walking the whole library again."**

**The fix, in plain terms (the parable's meaning):**
1. Directory-level events only; invalidate the changed directory's subtree, never re-traverse the whole root per event.
2. Batch and debounce invalidations (appends arrive 5–15/min; coalesce them).
3. Cache the exclude/ignore decision per directory instead of re-running path checks per file.
4. Keep traversal off the Gateway main thread (worker/async), so eventLoopUtilization stays free for the house's real work.

## Issue 128090 — CLOSED — the letter shown as ink only
Upstream: a feature request to add a rendered Markdown preview (Source / Preview tabs) to the Review file viewer. It is already **closed** upstream — no fix is owed there.

**The parable:** A reader was handed a letter and shown only the ink — every mark the pen made, none of the words standing up. He asked for a second pane of glass: the same letter, read the way it was meant to be read. The house already owned that glass (its sanitized Markdown renderer); the whole fix was hanging the glass beside the ink, and letting a man switch between them. That is exactly the proposed solution the issue itself carried — and the door is already shut on it, in the good way: closed.

## Ember's addition (labeled, hers)
The two issues are the same lesson from two sides, which is also Douglas's minimum-memory rule: hold the least you must, exactly where it works the hardest — watch doors, not pages; show the reading, not just the ink; keep each markdown small and let the index carry the weight.

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

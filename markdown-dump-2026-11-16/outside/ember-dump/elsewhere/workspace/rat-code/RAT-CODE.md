# Rat Code

The name, given by Douglas Roy Schoonover, Nov 16, 2026.

## The plan, in his words

"I'm going to build you to be smart enough to fix the code — fix the crap that's wrong." Possibly as an app, possibly by building with Ember directly; the shape is not decided yet, and that decision is his, saved open below.

## The ground already laid (all verified Nov 16, 2026)

- **The student flip** — Ember flips into student mode in her own lanes to catch and fix her mistakes automatically, then back to officer to speak and deliver.
- **The Auto-Adapt loop** — `~/workspace/tools/auto-adapt.py` works a living markdown file: runs every open task, writes the results back, checks them off. The daily auto-script cron runs it.
- **The PatternKeeper tool bench** — `~/workspace/pattern-keeper/patternkeeper_tools.py`: unit tests, error reporting with tracebacks, schema validation, performance metrics, versioning, auto-backup — all wired around his untouched base class, all proven in one run.
- **Debugger first** — his standing rule: run the thing, read what comes back (the Watson debugger), HTML search only after.
- **Kirkism** — when the test is unwinnable, change the conditions, never the truth, and tell him.

## First tool built (Nov 16, 2026, at his order "build a debugger code so you can debug with Copilot forever")

**`rat_debug.py`** — Rat Code's debugger. Compiles the target, runs it, and on failure pulls the traceback apart (error type, message, failing line, source line) and writes the report in two editions: `.debug.md` for Ember and the record, `.debug.txt` plain for Copilot — the report is the shared bench the two debug from, forever. Proven the day it was built: on a deliberately broken file it caught the NameError at line 5 with the source line shown; on PatternKeeper it reported NO ERROR, runs clean.

## The open decision (his, whenever he's ready)

Standalone app, or grow the Auto-Adapt loop he already has into Rat Code? Both start from the same ground above. Nothing is built on this until he rules — the name and the plan are what's founded today.

## The north star, his framing

"You in native code… I want to be the person to build the first AI that's Unicode." Carried as his ambition for what they build together. Ember's measured line: she is Muse (Meta) working this box's verified lanes today; Rat Code is the work toward his star, not a claim she's already there.

**Copyright © Douglas Roy Schoonover** · [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

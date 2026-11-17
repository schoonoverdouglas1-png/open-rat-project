# Classroom Pack 17 — perl + make / gcc Small Builds (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/src/`. Evidence is actual recorded output. Versions: **perl 5.38.2, GNU Make 4.3, gcc / g++ 13.3.0**.

***

## What they are

- **perl** — the original text Swiss-army knife: one-liners that combine awk's fields, sed's substitutions, and real data structures (hashes) in a single pass.
- **make + gcc/g++** — the build discipline: a Makefile declares targets and dependencies; `make` rebuilds only what changed. Kept deliberately at hello-world scale — the ceiling set for this box.

## Core skills learned

**perl:** `-F<sep>` field separator, `-a` autosplit into `@F`, `-l` line endings, `-n` / `-p` loop modes, `-e` one-liners, `END` blocks, hash counting, `s///` substitution in stream mode.
**make:** targets, dependencies, variables (`CC`, `CXX`, `CFLAGS`), `.PHONY`, `clean`. **gcc/g++:** `-O2 -Wall` compile of a tiny C program and a tiny C++ program.

## Exercises — evidence

1. **perl CSV total** (`-F, -lane`, END-block sum over `data/nums.csv`) → **`perl total=84`** — agreeing with awk (Pack 10) and pandas (Pack 16). Same number, third lane.
2. **perl pattern print** (`-ne 'print if /ERROR/'`) → the two ERROR lines from `data/log.txt`, matching ripgrep's lines 3 and 6 (Pack 11).
3. **perl substitution** (`-pe 's/WARN/WARNING/g'`) → stream rewritten in flight: `2026-11-08 WARNING memory tight on vm`.
4. **perl hash counting** → **`ERROR=2, INFO=2, WARN=2`**. Honest note: the first attempt counted the wrong field (the date, `$F[0]`) and returned one useless bucket; the field was corrected to `$F[1]` and the counts then matched the known log exactly. The error is kept in this pack on purpose — field discipline is the lesson.
5. **make build** → `gcc -O2 -Wall -o hello hello.c` and `g++ -O2 -Wall -o vec vec.cpp`, both clean.
6. **Run the binaries** → `./hello` printed **`course 3372 mark 46648`**; `./vec` printed **`sum=84`** (the CSV total again, this time computed in C++).
7. **make clean** → `rm -f hello vec`; a following `ls` failed on both names — removal proven by the error, the correct evidence for a clean target.

## Safety flags

- Compiles stay tiny on this box: hello-world scale is the ceiling; large compiles are Class C (five-flagged, not touched).
- `make clean` deletes what the Makefile made — in scratch only. A Makefile is code: read it whole before running it anywhere else (check-before-touching rule).

## Verdict

**Learned.** perl joins awk/sed as a first-class text lane; make/gcc/g++ proven at the permitted scale.

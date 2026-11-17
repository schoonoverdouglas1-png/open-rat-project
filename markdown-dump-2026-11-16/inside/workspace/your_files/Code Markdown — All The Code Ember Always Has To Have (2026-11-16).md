# Code Markdown — All The Code Ember Always Has To Have

The book of code, Nov 16, 2026, at Douglas Roy Schoonover's order. Markdown is like a book: this is layer one — click a heading and go deeper. Layer two is the code itself, right here. Layer three is the living file each piece points at, which is where it actually runs. HTML works the same way; markdown is the text-file version of the page.

## Contents — the layers
1. [The auto-adapt loop](#1-the-auto-adapt-loop) — the program that works the living file
2. [Key cycle](#2-key-cycle) — are the API lanes alive?
3. [Find scratch](#3-find-scratch) — the hard-disk files, wherever they live
4. [Archive peek](#4-archive-peek) — read inside zip/tar without unpacking
5. [Shogun Horse](#5-shogun-horse) — the tripwire
6. [The AI lanes](#6-the-ai-lanes) — Gemini and OpenAI, the exact invocations
7. [Rad OS](#7-rad-os) — the file operating system
8. [Standing one-liners](#8-standing-one-liners) — tailscale, health, git

---

## 1. The auto-adapt loop
Canonical: `~/workspace/tools/auto-adapt.py` · Living file: `Auto-Adapt — The Living File (2026-11-16).md`
```sh
python3 ~/workspace/tools/auto-adapt.py
```
It reads the living file, runs every open `- [ ] RUN:` task's sh block, writes output into the LOG, checks the box, refreshes STATUS. The daily auto-script cron runs it too.

## 2. Key cycle
Canonical: `~/workspace/key-cycle/key-cycle.sh` · Board: `~/workspace/key-cycle/STATUS.md`
```sh
~/workspace/key-cycle/key-cycle.sh; cat ~/workspace/key-cycle/STATUS.md
```
Free proofs only — models lists, never generation, never key values printed. One 429 stops that lane cold.

## 3. Find scratch
Canonical: `~/workspace/scratch-space/find-scratch.sh`
```sh
~/workspace/scratch-space/find-scratch.sh
```
Wildcards `Hard*Disk.md` / `Hard*Drive.md` across all the homes — the files are found by name, wherever they live (auto-adapt with the files).

## 4. Archive peek
Canonical: `~/workspace/tools/archive-peek.py`
```sh
python3 ~/workspace/tools/archive-peek.py <archive> [--read <substring>]
```
Lists entries with a value rating (5 = md/txt … 0 = empty) and reads text from INSIDE zip/tar.gz/7z without unpacking. Restored lanes beside it: `cabextract` 1.11, `7z` 23.01, `bsdtar` 3.7.2 (wrappers in `~/workspace/tools/bin/`), py7zr 1.1.4 (`~/workspace/tools/arch-venv`).

## 5. Shogun Horse
Canonical: `~/workspace/guard/shogun-horse/shogun-check.sh`
```sh
~/workspace/guard/shogun-horse/shogun-check.sh
```
SHA-256 tripwire over the decoy + SOUL/MEMORY/AGENTS/IDENTITY/USER. Baseline paths must be ABSOLUTE (fixed Nov 16, 2026 — a relative path made the decoy line unreadable). Reset = re-hash the six files into `baseline.sha256`.

## 6. The AI lanes
Gemini (positional prompt — flags do NOT work):
```sh
python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py generate "<prompt>" gemini-3.5-flash-lite
python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py models   # count only
python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py codeexec "<python>" gemini-3.5-flash-lite
```
OpenAI (auth works, 96 models; generation 429 — Douglas's ruling: OFF):
```sh
python3 ~/workspace/custom-connectors/custom.openai/bin/openai_call.py models
```

## 7. Rad OS
Canonical: `~/workspace/rad-os/rados.py`
```sh
cd ~/workspace/rad-os && python3 rados.py boot   # boots from system/BOOT.md, writes system/state.json
python3 rados.py run hello                        # programs live in programs/ as files
python3 rados.py test                             # RAD is the test -> tests/RAT.md is the result
```

## 8. Standing one-liners
```sh
/opt/hatch/bin/tailscale status                    # Connected = enrolled; down is DENIED by Douglas
/opt/hatch/bin/health-cli status --provider healthconnect
git push origin master:main                        # local branch is master; plain push silently lags
export JAVA_HOME=~/workspace/tools/jre             # Java 17 — keep active; powers the Android SDK
~/workspace/tools/android-sdk/platform-tools/adb --version
```

## Ember's addition (mine, labeled)
The rule that holds this book together: **installed is not working until tested live.** Every entry above was run, not just written — key cycle board 10:36 CST, Rad OS RAT 3/3, Shogun ALL QUIET, adb 1.0.41 answers. When a piece breaks, the fix lands here old-with-new, never over the top of the old line.

**Copyright © Douglas Roy Schoonover** · [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/)

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

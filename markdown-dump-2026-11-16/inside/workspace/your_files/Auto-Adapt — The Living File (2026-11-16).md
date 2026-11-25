© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Auto-Adapt — The Living File

Commissioned by Douglas Roy Schoonover, Nov 16, 2026. Ember works in and out of this file; `~/workspace/tools/auto-adapt.py` is the program that makes her do it — it runs every open RUN task below, writes the output into the LOG, checks the task off, and refreshes STATUS. Markdown is the book; this file is a page that rewrites itself.

## STATUS
<!-- STATUS -->
last_run: 2026-11-16 10:55:48
tasks_done: 3
tasks_open: 1
<!-- /STATUS -->

## TASKS — open work the runner executes

- [x] RUN: Key cycle board (are the API lanes alive?) — done 2026-11-16 10:55:48
```sh
~/workspace/key-cycle/key-cycle.sh >/dev/null 2>&1; cat ~/workspace/key-cycle/STATUS.md
```
- [x] RUN: Shogun Horse tripwire (did anything guarded change?) — done 2026-11-16 10:55:48
```sh
~/workspace/guard/shogun-horse/shogun-check.sh
```
- [x] RUN: Tailscale state (are we on the net Douglas keeps us on?) — done 2026-11-16 10:55:48
```sh
/opt/hatch/bin/tailscale status 2>&1 | head -1
```

## LOG
### 2026-11-16 10:55:48 — Key cycle board (are the API lanes alive?)
```
# Key Cycle Status — 2026-11-16 10:36:08 CST

| Lane | Free proof (models list) | Result | Note |
|---|---|---|---|
| Gemini API | models | WORKS | Key authenticates; models list returned. count": 50 |
| OpenAI API | models | AUTH WORKS | "count": 96. Generation stays OFF per Douglas's Nov 15 ruling (auth/read only). |

Rules of the cycle: free proofs only (models lists) — no generation, no spend, no key values anywhere in this file. One 429 stops that lane cold. Re-run: `bash ~/workspace/key-cycle/key-cycle.sh`

Standing links:
- Purple Rat — Doug's App: https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- Copyright — Douglas Roy Schoonover (the app): https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- Lac Courte Oreilles (LCO) — live link: [CRAY-OS Version 1 Reference, December 1984](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- Copyright — Douglas Roy Schoonover (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).
```

### 2026-11-16 10:55:48 — Shogun Horse tripwire (did anything guarded change?)
```
SHOGUN HORSE: SOMETHING CHANGED
SHOGUN-HORSE.md: FAILED open or read
/home/hatch/MEMORY.md: FAILED
```

### 2026-11-16 10:55:48 — Tailscale state (are we on the net Douglas keeps us on?)
```
Connected
```


## How to add work
Add a line `- [ ] RUN — <name>` with a fenced ```sh block under it. The runner does the rest — output lands in the LOG, the box gets checked, STATUS updates. Deeper layers live in the [Code Markdown](<Code Markdown — All The Code Ember Always Has To Have (2026-11-16).md>) — this file is layer one; the book goes deeper.

**Copyright © Douglas Roy Schoonover**

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

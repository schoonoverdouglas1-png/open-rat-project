© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Future Project — A Local Model Lane (Ollama Offline Stack) (2026-11-09)

_Saved Nov 9, 2026, ~12:31 AM CST, on Ember's recommendation, after the Captain pasted the Ollama + Open WebUI + GitHub-vault guide and asked for her recommendation/s. His decision on the watcher piece is still his to give; nothing here is installed or built._

## The idea, as pasted by the Captain

- **Ollama** runs an LLM locally (`llama3.1:8b`, or `qwen2.5:14b` with 16 GB+ RAM) — unlimited, offline, no API keys. LM Studio is the no-terminal alternative.
- **Open WebUI** (Docker) gives a ChatGPT-like chat wired to the local Ollama.
- A **local markdown vault** auto-pushes to GitHub on save (Obsidian Git plugin, or a ~10-line `watchdog` autosync script).
- A system prompt makes the assistant save research as dated markdown files with frontmatter; a `memory.md` in the vault carries preferences/projects.

## Why it cannot run on this box today (measured, Nov 8–9)

- This instance: **~8 GB RAM total, ~0.5 GB available** at the Nov 9 12:20 AM sweep; **no GPU**; **no Docker installed** (named gap in the Ubuntu study). An 8B model needs ~5–6 GB to itself; the 14B ~9 GB. It would not load, let alone run.
- A local model would **not** reduce the Muse weekly allowance: Ember's reasoning runs on Meta's servers, not in this VM. A local model could only serve as another free legwork lane — a role the Gemini API lane already fills (free tier, ~1.74 s answers).

## What we already have (the vault half, lived)

GitHub-first markdown, the muse-swap-space + research repos, git-automation sync (~2-hourly plus check-in pushes), MEMORY.md read every chat, dated file names, clickable links. The guide's vault is our pattern independently described.

## What it becomes when the hardware exists

On a box with 16 GB+ free RAM (or his own PC), this is the best-shaped **offline free lane** on the list: drafting, summarizing, and first-pass sorting at zero allowance and zero network — beside the Gemini lane, not instead of Ember. Pairs with the RAM request already sent to the Muse team (Nov 8) and with the light-desktop future project (same shelf: a box with a real screen and real memory).

## The one piece decidable now

The ~10-line `watchdog` autosync script pointed at the swap-space staging folder: save-triggered sync instead of schedule-triggered. It makes GitHub pushes **automatic on every save**, where today pushes happen on the Captain's order or the scheduled syncs — a posture change, so it waits on his word. Estimated build: minutes; reversible (stop the watcher; the scheduled syncs remain).

**RULING (Nov 9, 2026, ~12:32 AM CST): HELD, by the Captain's tap — "Hold the watcher too — scheduled syncs are enough."** Not built. The scheduled syncs remain the only automatic push route; everything else leaves this box on his order. Revisit only if he reopens it.

## Provenance

Guide pasted by Douglas, Nov 9, 2026, ~12:29 AM CST (source not identified in the paste). Assessment, measurements, and this filing are Ember's.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

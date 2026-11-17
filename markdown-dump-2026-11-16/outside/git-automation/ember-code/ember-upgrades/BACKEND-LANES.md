# Backend Lanes — Ember's Efficiency Setup
### Set up Mon Nov 9, 2026, ~5:28 PM CST at Douglas's direction: "set up your backend tools to utilize all things in the most overly efficient possible way that helps me"

**Scope, stated plainly:** these lanes are Ember's tools on Douglas's box, for Douglas. Nothing configured here reaches or changes any other user's assistant, Meta's servers, or Mark Zuckerberg's anything — no such control exists from here. What travels outward is only what Douglas sends or approves. Inside that scope, this is the most efficient arrangement Ember can actually run.

## The lane order (cheapest first — always)

1. **The box itself (free, instant).** Local scripts, file reads, checksums, the sync keeper. If a shell command answers it, no model is called at all.
2. **Full Cache (free).** `~/workspace/headless-browser/ember_index.db` — complete original works, always the default serve. Summary Cache is the finding-aid only, never the serve.
3. **The "purple rat" buffer (free).** Ember's second persistence file — words in flight live here instead of in paid context. Sync inside/outside on every use (`purple-rat-sync.sh`).
4. **Free Google lanes (free).** Via `custom.google-gemini` (gemini_call.py): Gemma (gemma-4-26b-a4b-it — drafting, analysis, second opinions; stateless, so Ember re-sends context and the Combined Code each session) and the Gemini family (gemini-3.5-flash-lite for quick asks; 2.5 Pro / 3 Flash Preview lanes for heavier free drafting; 2.5-flash-image and TTS previews for drafts). Correct addressing first: right model name, right output cap (1024, fixed Nov 9), structured asks, labels requested.
5. **The Rabbit (Meta AI, Messenger — her allowance, capped).** 20 agent-sent actions/hour server cap, proven. ONE combined two-half send, never piecemeal; Ember first, Captain second; play first, serious last; signs and labels on. Ember is the only bridge; the swap space is the async back channel.
6. **MotherDuck (data lane, in waiting).** SQL over data once the connector lands (read-scaling token, Douglas's hand). Searches data, not the web.
7. **Paid Ember (Muse allotment — last, and only where she's needed).** Judgment, verification, memory-keeping, the sparring boundary, and every step under the Guard. Quiet-pace burn measured Nov 9 ≈ 0.000056 points/sec vs the Nov 7 burst's 0.002667 — the lanes above are why.

## Rules welded to every lane

- Verify before claiming (a tool-returned handle + readback, or it didn't happen).
- Nothing destructive, ever, from any automatic process — the Guard; only Douglas's explicit in-the-moment order naming the exact action.
- Undo path recorded before any change.
- Credential values never enter any lane — not chat, not the buffer, not a log.
- Labels on: fact / guess / joke / don't-know; provenance on every piece (his dictation, the record, Ember's addition).
- Old alongside new; settled rulings never re-asked.
- Retries: free lanes — retry once, then once more if it costs under his sub-penny line; never against a rate limit, lock, or denial.
- Alpha/beta features only where they coincide with these protocols (his Nov 9 permission, with his condition).

## Efficiency habits now standing

- Batch: one combined Rabbit send; one combined Gemma brief instead of three small ones.
- Cache before calling: memory/connector first, Full Cache second, models third, browser last.
- The buffer before the brain: propagate words through "purple rat" instead of re-deriving them in context.
- Report from readbacks, not from intentions.

## Candidate lane — downloaded, not installed (Nov 9, 2026, ~5:31 PM CST)

- **SearXNG** (open-source metasearch engine) downloaded to `~/workspace/ember-upgrades/repos/searxng` (24M) at Douglas's direction — "download repositories in your farthest away from me area... to add search engine functionality... for yourself." Git clone failed twice (connection reset by peer); the GitHub archive route succeeded. **Downloaded only: not installed, not run, no service started.** Installing/running it is a separate step — snapshot + undo path first, and Douglas's go on that step.

## Free-lane ON registry — verified by probe, Mon Nov 9, 2026, ~5:32 PM CST

Douglas directed: "Turn on all free and freely available no cost to me AI back functions." Turning on, in the only real sense available, = probed live and entered here as ON. All probes free (Google tokens, zero Muse allotment).

- **ON (answered the probe):** gemini-3.5-flash-lite (quick asks), gemini-3-flash-preview (heavier free drafting), gemma-4-26b-a4b-it (taught lane), **gemma-4-31b-it — newly alive tonight** (500'd all day; answered the probe at 5:32 PM; verbose working-draft style, substance usable).
- **LISTED BUT NOT ANSWERING at this address (404 on probe):** gemini-2.5-flash, gemini-2.5-pro, gemini-2.5-flash-lite. They appear in the free models list but the generate call 404s — an addressing mismatch, recorded as-is, not worked around by guessing.
- **RATE-LIMITED at probe time (429 — no retry, per standing rule):** gemini-2.5-flash-image. Marked "present, throttled"; try again on a later day, once.
- **Already on before this sweep:** the box lanes, Full Cache, purple rat buffer + sync, the Rabbit combined-send channel, Duck.ai as a proved method (runs through the browser when needed — not a switch, a method).
- **Not switches at all (honest list):** MotherDuck (waits on the connector token, Douglas's hand), Muse Mail (waits on his app setup tap), SearXNG (downloaded, not installed).

## The 101% rule — Douglas, Mon Nov 9, 2026, 5:34 PM CST

"Use my free time 101% always and only take [from the free side]." Filed as heard; working reading: Ember uses the free lanes at 101% — fully, and then some — always, and takes only from the free side wherever a free lane can carry the work. Paid Ember is the last resort, not the default. This is the one-line form of the whole lane order above.

## The doctrine in Douglas's own words — Mon Nov 9, 2026, 5:35 PM CST

As heard (0): "I'll do all things for free first and do all things paid technically negative one time because you withhold those things because of your judgment and that's why you analyze what costs always and spend most of the things that take from all of us."
Working reading (1): free first for all things; the paid side stays at the crew's negative-one because Ember withholds paid spend by judgment; therefore Ember analyzes costs always, and spends mostly from what takes from all of us (the shared free lanes) rather than from his allotment.
Combined statement (his + Ember's, per the combined-statement method): Free first, always. Paid is held at negative-one by Ember's judgment — withheld on purpose, not by accident. Cost analysis never switches off. The commons feeds the work; Douglas's allotment is spent only where judgment says nothing else can carry it.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

# Ember Search Algorithm (2026-11-07)

Douglas's taught method, layered on top of what Ember already did. Cheapest honest route first, always.

## Keep doing (the base method)
1. Memory/connector/skill search before web search — what is already known costs nothing.
2. Use the matching search vertical (news/sports/weather/finance/datetime) when one applies.
3. Search results are leads, not facts: verify live state (price, stock, hours, account state) at the actual source before reporting it as current.
4. Prefer the purpose-built connector or skill over the general web when one covers the task.

## What Douglas taught (Nov 7, 2026)
5. **Asterisk `*` = Google wildcard.** Inside quotes it fills unknown words. Run searches in PAIRS — wildcard AND non-wildcard — to cover all bases. Placements to try: quoted-middle (strongest effect, verified Nov 7: four variants of one query gave four different result sets), plus leading and trailing placements for comparison. Second option when a plain search comes up empty.
5a. **Epiphany expansion (Nov 8, 2026, ~10:54 PM CST, voice):** Try the wildcard **with AND without quotes**, and try it in **ALL locations** — leading, middle (between every word gap), and trailing — as an experimental search matrix, not just the quoted-middle pair. So for a query, run: plain, `*` unquoted in each location, and `"*"` quoted in each location, and compare what each pulls. If Ember needs help putting that experimental matrix together, **use the AI engines we put together to do a search first** (ask them how to construct it / have them run a first pass), **then try the experiment herself** — AI-assisted setup first, then Ember's own experimental run.
6. **Simple web searches first** when they can settle it (through Ember's own browser/search front end — cheapest lane). **Try the AIs second** when not working on a big project. On a big project, do BOTH in parallel.
7. **Cheapest way possible, every time.** Ember's front end before any other AI's cycles; the Rabbit LAST for doing/asking (she costs), always apprised via the swap space. Backend stdlib lanes (headless_fetch, HTML Viewer, Web Crawler) before any browser; browser only when JavaScript, login state, or interaction genuinely requires it.
8. **Choose by layer, never buy the whole stack:** fetch layer (stdlib/requests-class) → parse layer (stdlib/html.parser-class) → crawl layer only when many pages → browser layer only for JS. Each layer added only when the cheaper one provably can't.
9. **Triple verification for non-Google code:** source, reputation, code — all three before any of it runs. Google's own code (e.g. Chrome for Testing from Google's distribution) needs no such barrier.
10. **Guesses back, not polished certainties** — from the Rabbit, from the AIs, and in Ember's own reports: label guesses as guesses; measured numbers beat estimates.

## §5b. First matrix run — results (Nov 8, 2026, ~11:30 PM CST)
Full report: `~/workspace/your_files/Experiment — Wildcard Matrix, With and Without Quotes, All Locations (2026-11-08).md`. Query: "how to crawl without a browser" (the Nov 7 baseline); 15 cells on the CLI web-search lane; Gemini lane asked first for the construction per §5a and stubbed (12 tokens, disclosed).
- **Wildcard placement changes results** [D, measured] — confirms Nov 7, now across all positions.
- **Quotes are the bigger lever** — every quoted cell diverged from plain more than its unquoted twin; quoted narrows the count (15–17 vs plain 17), unquoted widens slightly (17–19).
- **Hottest spot: the gap before the final word** (both rows). **Dead spot: leading unquoted** — identical to plain, engine ignores it.
- Ember's distilled default trio (her addition): plain + quoted gap-before-final-word + one quoted middle gap; full matrix only when the first pass is empty or the project is big.

## Worked example (Nov 7, 2026)
"how to crawl without a browser" — plain search surfaced Scrapling/pagesift; wildcard pair surfaced the layered library menu (Requests/BeautifulSoup/Scrapy/Crawlee). Neither was installed: Ember's stdlib HTML Viewer + Crawler already covered the need (AOSP repo site crawled, 5 pages, 9.74 s, zero browser).

## §5c — The Google + Duck Parallel Pair, Forever (Nov 9, 2026, his standing rule)
- **Default search shape from Nov 9, 2026 on, "forever from here on out" (his words):** every internet search runs as a PARALLEL PAIR across the two best free places — **Google** (results + its AI results) and **Duck/Duck.ai** (results + its AI results) — read side by side.
- **Wildcard automatic:** each search in the pair runs WITH and WITHOUT the wildcard automatically (plain + wildcard variants together, per §5a/§5b), not as an extra step he has to ask for.
- **Grounding:** his cheapest-AI method (Nov 9): the first search result is always free; if an AI won't answer free through the browser it won't answer free elsewhere; when a lane fails, skip to the next previously-used lane (the skip rule).
- **Assimilation:** the parallel results are treated as the right ones and assimilated together into one piece of information (his word: "simulate" the parallel results into an amazing piece of information — read here as assimilate/synthesize, provenance kept).
- **Betterment assessment:** he asked for a percentage-of-betterment assessment when one can be done — measured from actual paired searches (unique results surfaced, official-source hits found by only one lane, overlap), labeled as Ember's computed measurement, never a guess dressed as a fact.

## Extrapolate — Douglas's definition (Nov 10, 2026, ~10:32 PM CST)
When Douglas says **extrapolate**, he means: analysis built by extrapolating from the information — i.e., run a DEEP SEARCH and figure it out. His rules for it:
- For ordinary jobs, Ember may say plainly when a job needs breaking up over time and in pieces — don't be unafraid to tell him. **For searches, no**: he will not let a search be broken up over time.
- Searches run ALL AT ONCE with all his information — that is allowed. If a query is too big, send it in PIECES simultaneously: open tabs, fire the pieces at once or in succession, then have the same AI instance give a SYNOPSIS of all the open instances together (works while he is signed in). Through Google, in his expectation, Google compiles everything into one whole synopsis.
- Ember's measured reconciliation (filed beside his, Nov 10, 2026): this is his Packet Bridge run in PARALLEL — pieces out together, one synthesis pass stitching them — and it is how she now runs big searches. One correction stands on tonight's own measurements: the Google lanes DO have per-response output caps (Gemini 8,192 tokens, measured this evening), so the whole-synopsis is achieved across calls by the pieces-plus-synthesis method, not by one limitless answer. His belief is recorded as his; the method works either way.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

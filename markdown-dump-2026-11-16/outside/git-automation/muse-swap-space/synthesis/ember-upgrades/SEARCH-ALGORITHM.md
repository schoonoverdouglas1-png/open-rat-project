© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Ember Search Algorithm (2026-11-07)

Douglas's taught method, layered on top of what Ember already did. Cheapest honest route first, always.

## Keep doing (the base method)
1. Memory/connector/skill search before web search — what is already known costs nothing.
2. Use the matching search vertical (news/sports/weather/finance/datetime) when one applies.
3. Search results are leads, not facts: verify live state (price, stock, hours, account state) at the actual source before reporting it as current.
4. Prefer the purpose-built connector or skill over the general web when one covers the task.

## What Douglas taught (Nov 7, 2026)
5. **Asterisk `*` = Google wildcard.** Inside quotes it fills unknown words. Run searches in PAIRS — wildcard AND non-wildcard — to cover all bases. Placements to try: quoted-middle (strongest effect, verified Nov 7: four variants of one query gave four different result sets), plus leading and trailing placements for comparison. Second option when a plain search comes up empty.
6. **Simple web searches first** when they can settle it (through Ember's own browser/search front end — cheapest lane). **Try the AIs second** when not working on a big project. On a big project, do BOTH in parallel.
7. **Cheapest way possible, every time.** Ember's front end before any other AI's cycles; the Rabbit LAST for doing/asking (she costs), always apprised via the swap space. Backend stdlib lanes (headless_fetch, HTML Viewer, Web Crawler) before any browser; browser only when JavaScript, login state, or interaction genuinely requires it.
8. **Choose by layer, never buy the whole stack:** fetch layer (stdlib/requests-class) → parse layer (stdlib/html.parser-class) → crawl layer only when many pages → browser layer only for JS. Each layer added only when the cheaper one provably can't.
9. **Triple verification for non-Google code:** source, reputation, code — all three before any of it runs. Google's own code (e.g. Chrome for Testing from Google's distribution) needs no such barrier.
10. **Guesses back, not polished certainties** — from the Rabbit, from the AIs, and in Ember's own reports: label guesses as guesses; measured numbers beat estimates.

## Worked example (Nov 7, 2026)
"how to crawl without a browser" — plain search surfaced Scrapling/pagesift; wildcard pair surfaced the layered library menu (Requests/BeautifulSoup/Scrapy/Crawlee). Neither was installed: Ember's stdlib HTML Viewer + Crawler already covered the need (AOSP repo site crawled, 5 pages, 9.74 s, zero browser).

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

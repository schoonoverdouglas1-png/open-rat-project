# Experiment — Wildcard Matrix, With and Without Quotes, All Locations (2026-11-08)

Douglas's order (Nov 8, 2026, ~10:54 PM CST epiphany, SEARCH-ALGORITHM.md §5a; engaged ~11:28 PM): try the wildcard **with and without quotes**, in **all locations**, as an experimental search matrix. AI engines first to help put it together, then Ember runs the experiment herself.

## Method
- **AI engines first:** the Gemini API lane (the engine we put together) was asked to construct the matrix and predict each cell. It returned a 12-token stub — no usable construction. Disclosed, not retried, per §5a's fallback: Ember built the matrix from the filed spec herself.
- **Query:** `how to crawl without a browser` — the Nov 7 baseline query, chosen so the results compare against the Nov 7 finding (four variants → four different result sets).
- **Matrix (15 cells):** the plain query; the asterisk **unquoted** at all 7 positions (leading, the 5 gaps between words, trailing); the asterisk inside a fully **quoted** phrase at the same 7 positions.
- **Lane:** the CLI web-search tool (cheapest lane first, per the algorithm). Every cell run the same way, same evening (Nov 8, ~11:30–11:34 PM CST).

## Measured results [D]
**Result counts:** plain **17** · unquoted cells **17–19** (slightly wider) · quoted cells **15–17** (narrower).

**Top-5 title overlap with the plain query** (lower = more different):

| Cell | Placement | Overlap | New titles |
|---|---|---|---|
| unq_p0 | leading `*` | 5/5 | 0 — **identical to plain** |
| unq_p1 | after "how" | 4/5 | 1 |
| unq_p2 | after "to" | 4/5 | 1 |
| unq_p3 | after "crawl" | 4/5 | 1 |
| unq_p4 | after "without" | 3/5 | 2 |
| unq_p5 | after "a" (before "browser") | 2/5 | 3 |
| unq_p6 | trailing | 4/5 | 1 |
| quo_p0 | leading, quoted | 3/6 | 3 |
| quo_p1 | after "how", quoted | 2/6 | 4 |
| quo_p2 | after "to", quoted | 3/6 | 2 |
| quo_p3 | after "crawl", quoted | 3/5 | 2 |
| quo_p4 | after "without", quoted | 2/5 | 3 |
| quo_p5 | after "a", quoted | **1/5** | **4 — most different cell in the matrix** |
| quo_p6 | trailing, quoted | 3/5 | 2 |

**Material the quoted cells surfaced that plain never showed:** "You Probably Don't Need a Headless Browser to Feed Your RAG Pipeline", "Build a Web Crawler with Headless Chrome and Puppeteer", "Python Web Scraping: Why Data Is Missing from Source", a "Web Clients and Crawlers" reference page — a different neighborhood (RAG pipelines, headless Chrome, reference material) from plain's generic scraping guides.

## Verdict
1. **The wildcard is a real lever on this engine** — placement changes the result set. Confirms and extends the Nov 7 finding. [D, measured]
2. **Quotes are the bigger lever.** Every quoted cell diverged more than its unquoted twin; quoting the phrase with the wildcard inside is what moves the engine. [D, measured]
3. **The gap right before the final word is the hottest spot** — most disruptive in both rows (unq_p5, quo_p5). [D, measured]
4. **A leading unquoted wildcard does nothing** — identical results to plain; the engine ignores it. Don't spend a search there. [D, measured]
5. **Quoted narrows, unquoted widens** — quoted cells returned fewer results (15–17), unquoted slightly more (17–19) than plain (17). [D, measured]

**Caveats, kept honest:** one query, one engine lane, one evening — a method finding, not a universal law. The Nov 7 baseline ran on a different search surface, so the cross-day comparison is indicative, not exact.

## Ember's addition (hers, labeled)
A default trio for real searches, distilled from the matrix: **plain + quoted with the gap before the final word + one quoted middle gap**. Three searches capture most of the divergence the full 15-cell matrix found, at a fifth of the cost. Save the full matrix for when the first pass comes up empty or the project is big — which is where the algorithm already puts the wildcard: second option, all bases covered.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

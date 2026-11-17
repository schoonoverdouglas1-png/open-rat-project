# The Search Bridge — `search_bridge.py`

**Built:** Nov 13, 2026, on Douglas's order ("build a bridge — build a code to fix the searches"), during his lunch, as a background task. Stdlib-only Python; no installs; nothing destructive.

**Copies live in two places, old-with-new:** here in `~/workspace/ember-upgrades/search-bridge/` (her backend, where the other lanes can assimilate it) and in `~/workspace/your_files/search-bridge/` (his files). It cannot be built "in Google's code" — Google's code is Google's — so it is built in Douglas's places, in the open, where Gemini and every other lane that reads his files can pick it up, which is the part of his order that can honestly be made so.

## What it does

Engines get disabled, keys hit shared limits, result pages change shape. The bridge's answer is Douglas's own doctrine (SEARCH-ALGORITHM.md): **cheapest honest lane first, and when a lane fails, skip to the next lane — the fallback IS the fix.** One command takes a query, runs it down the lane order, normalizes everything into ONE clean result list (title, URL, snippet, lane, class), and prints a lane report saying exactly which lanes worked, which failed, and why. It never fabricates a result: if every lane is down or empty, it says so plainly and exits with code 2.

```
python3 search_bridge.py "how to crawl without a browser"
python3 search_bridge.py "chromium headless browser automation" --wildcard
python3 search_bridge.py "pneumococcal serotype" --count 5 --json
```

## The lanes, in order, and why

| Lane | Source | Class | Why here |
|---|---|---|---|
| **A** | Marginalia new API (`api2.marginalia-search.com`, keyless `public` key, endpoint verified from Marginalia's own API docs Nov 13, 2026) | `ranked-result` | A real independent search engine with a real API — ranked web results without scraping anyone's results page. One of only two truly free no-card lanes on Douglas's Nov 8, 2026 record. |
| **B** | DuckDuckGo Instant Answers API (keyless) | `instant-answer` | Douglas's Duck lane in its only official programmatic form. Definitions/abstracts/related topics only — labeled as its own class, never dressed up as ranked web results. |
| **C** | Douglas's Full Cache (`~/workspace/headless-browser/ember_index.db`, FTS5, opened read-only, bm25-ranked) | `cache` | His standing rule: the Full Cache is the complete original works and is served first among local sources. Works with the internet entirely down — the last bridge standing. |

**Wildcard mode** (`--wildcard`) applies Douglas's distilled trio (SEARCH-ALGORITHM.md §5b, measured Nov 8, 2026): plain + quoted gap-before-final-word (the hottest spot) + one quoted middle gap. These API lanes don't speak Google wildcard syntax, so variants are de-starred before being sent to A and B; the cache lane matches on each variant's terms, and every result records which variant found it.

## Test results — Nov 13, 2026 (live, recorded verbatim in summary)

**Test 1 — plain:** `search_bridge.py "how to crawl without a browser"` (Douglas's own Nov 7 baseline query)
- Lane A Marginalia: **HTTP 429 RATE-LIMITED** on the shared `public` key — lane stopped for the run, not retried (his provider-stop rule).
- Lane B Duck IA: HTTP 200, 0 results (a how-to query has no instant answer — expected for this class).
- Lane C Full Cache: **carried the run** — 5 cached pages, bm25-ranked (DevTools Protocol Viewer first).

**Test 2 — wildcard:** `search_bridge.py "chromium headless browser automation" --wildcard`
- Variants run: plain, quoted-gap-before-final, quoted-middle-gap.
- Lane A: 429 on the first variant, correctly **skipped** for the remaining two.
- Lane B: HTTP 200, 0 results on all three variants.
- Lane C: 5 matched pages per variant, deduped into one list (Chrome for Testing — the headless/automation page — ranked first).

The bridge worked exactly as designed on its first live outing: the ranked lane was down, the instant-answer lane was empty, and the local cache answered. A lane failing while the next one answers is not the bridge failing — it is the bridge.

## Honest limits (written his way: test, foolproofing, purpose)

- **Marginalia's `public` key is shared by everyone and rate-limits often** (their docs say so; verified live Nov 13, 2026 — 429 on both test runs). Foolproofing: the script stops at the first 429/503 and never hammers. A personal key (free, by email, per Douglas's Nov 8 note) would raise this lane's ceiling; not yet obtained.
- **Duck Instant Answers is NOT ranked web search.** It returns nothing for most how-to queries (verified: 0 results on both tests). It earns its lane on entity/definition questions only, and its results are labeled `instant-answer` so nobody mistakes the class.
- **The Full Cache holds only what Ember has captured** (18 pages as of Nov 13, 2026, mostly Chromium/GitHub/Douglas pages). It answers from memory, not from the live web — snippets are labeled `cache`, and the cache grows as `cached_fetch.py` captures more.
- **Google is not in this script.** Douglas's Google lanes run through the browser and the Gemini connector per his doctrine (the Google + Duck parallel pair, §5c; the three-lane aggregation, Nov 12). This bridge is the backend fallback beneath them, not a replacement.
- Cache matching is OR-of-terms with bm25 ranking: broad recall, imperfect precision on short queries. Measured, not hidden.

— Ember (Purple Rat), Nov 13, 2026. One addition of mine, labeled: the lane report is the real product. Anybody can return results; the bridge returns results *and the truth about the lanes*, which is what lets the next run route better.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

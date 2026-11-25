© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Search Lanes — Ember's Repertoire, Measured (2026-11-08)

**Douglas's question (Nov 8 ~3:18 AM), answered from her own record:** when Ember searches, is she using the Chromium browser interface, or a command-line prompt with a search engine in a different way? Answer: **BOTH exist, and the command line is the workhorse.** Chromium is reserved for what needs a real browser — logins, clicks, forms, JavaScript-heavy pages.

## The lanes, in the order she actually uses them (cheapest first, per his standing method)
1. **Memory + the local Ember Index** — already-downloaded knowledge, ~0.001s per repeat read (DB level). Search starts at home.
2. **Connector CLIs** — `/opt/hatch/bin/web-search` (2.15s measured) and `local-search`; structured results, no browser at all.
3. **Stdlib page fetch + the HTML Viewer** — Python through the egress proxy; pages arrive as ~85% less bulk than raw HTML; cached into the Index.
4. **Local Chromium for Testing (Playwright)** — her own headless Chromium inside the VM, ~1s class, for pages that need rendering.
5. **The cloud browser (Chromium)** — the heavy lane: real sessions, sign-ins, the AI paste rounds; minutes per round, spends allowance. NOT the default search tool.
6. **Direct source trees** — googlesource and friends via git/web, for code truth.

## Adding engines — the attempt (Nov 8 ~3:19 AM, stdlib through the proxy, one query each, measured)
| Engine | Result |
|---|---|
| **Bing** | **WORKS — HTTP 200 in 2.17s, full results page (57 links). ADDED to the repertoire as the second CLI engine.** |
| Startpage | HTTP 200 in 1.16s but the returned page carried ~1 link — a shell/challenge page, not results. NOT usable as-is; would need the browser lane. Not added. |
| DuckDuckGo HTML | Connection dropped by the remote end this attempt (16.1s). (Earlier tonight the same endpoint answered 202, the bot-check class.) Intermittent — kept as a known-flaky lane, not a primary. |
| Brave Search | HTTP 429 (rate-limited on first contact). Not added. |
| Google (raw web endpoint) | HTTP 429 — Google rate-limits raw programmatic hits on its search page; Google remains reachable the sanctioned ways (the Gemini lane, the browser, signed-in surfaces), not by scraping the results page. |
| Mojeek | HTTP 403. Not added. |
| Ecosia | HTTP 403. Not added. |

**Net change tonight: +1 working engine (Bing via CLI).** Honest summary filed for Douglas: the open web's search pages mostly refuse robot callers now; the durable repertoire is the sanctioned lanes (connector CLIs, APIs, the browser) plus Bing's CLI page, which answered cleanly.

## Round 2 — asking the AIs how to add the refused engines legitimately (Nov 8 ~3:20 AM, Douglas's order)
Asked of Gemini with Ember's full setup and her terms rule stated in the question itself (no scraping past limits, no evasion). Answer (886 tokens, cut at the summary sentence by the output cap; substance complete). Ember's fact-check in brackets:
1. **SearXNG — self-hosted open-source metasearch [PARTIAL — the honest caveat is hers to add]:** free, AGPL, ~150-300MB RAM (tight but conceivable on this box, minus the optional Redis). Its own engine modules query the engines' web endpoints under rate limits — whether any given engine's terms bless that is engine-by-engine; it is NOT fingerprint evasion, but it is also not an official API. Douglas's open-source instinct points straight at this one. **Install = his decision** (a new always-on service on a memory-tight box).
2. **Brave Search API [HOLDS as the clean route]:** official API, free tier exists (its ~2,000 requests/month figure is Gemini's lead, to be verified at sign-up; Brave's API plans have shifted before). Zero local RAM. Sign-up = his decision; it converts tonight's 429 into a sanctioned lane.
3. **Bing API via Azure [HOLDS with friction]:** official; the free tier historically existed under Azure (lead, verify); Azure account + key management is heavier than Brave's. Raw Bing already works here, so this is the sanctioned wrapper if the raw lane ever closes.
4. **DuckDuckGo Instant Answers API [HOLDS, small]:** official, free, but instant answers only — not full web results.
**Ember's verdict:** the repertoire does not need rescuing — Bing CLI + the connector search CLI + Gemini grounding cover the work. The two genuine upgrades on the table are SearXNG (his open-source route, his install call) and the Brave API free tier (his sign-up call). Everything else the engines refused stays refused — the terms rule is the point, not the obstacle.

## Round 3 — parallel search: more than one instance at a time (Nov 8 ~3:21 AM, Douglas's order)
His framing, in substance: never undo what works — ADD lanes beside it; and run more than one search instance at a time. His model of Ember is also CORRECT and filed: the AI part of her runs elsewhere, in the shared cloud, in more than one place at once; the VM is her hands. Threads, precisely (Ember's answer): the cloud mind is served concurrently by Meta's infrastructure (she neither controls nor counts those threads); on the box, her fan-out ceiling is 4 vCPUs / ~1GB RAM and the shared proxy — concurrency is a VM-side discipline, not a mind-side one. PROOF RUN tonight: 3 searches truly in parallel (two connector-CLI queries + one Bing CLI fetch) — all three returned full results; the batch's wall time was ~3.3 seconds total for the combined step (per-lane sequential would have summed to ~6.5s+). bc is not installed on this box (the timing arithmetic used the shell's own report instead — filed so no one trusts the missing number).
**Gemini's engineering for the standing build (886->filed, fact-checked):** asyncio + asyncio.to_thread wrappers around the blocking lanes, a Semaphore(3) cap fitted to this box, per-lane rate locks (parallel must not become a ban), gather(return_exceptions=True) so one dead lane never kills the batch, per-lane timeouts, merge + dedup by URL. Ember's check: the pattern is standard, sound, and matches her measured constraints; it REUSES all five existing lanes — additive, exactly as ordered. Build name: `parallel_search` — queued as a build, not yet built; the proof above used shell-level parallelism, which already works.

## Round 4 — the same question to DeepSeek, full record attached (Nov 8, 3:23-3:25 AM, Douglas's order)
Douglas's standard governed this round: adding something to Ember is like a change to a body — the research must be exhaustive, and Ember must be able to say whether the candidate is the best and the only. DeepSeek received EVERYTHING (the engine test table, the parallel proof, Gemini's ranking, the terms rule, the box specs) and was asked the same question plus the best/only challenge. Ran 3:23-3:25 AM CST per the runtime's measurement.

**DeepSeek's verdict: SearXNG is NOT the best fit and NOT the only option.** Its 12-route ranking, with Ember's fact-check brackets:
1. **eggsearch [UNVERIFIED — DeepSeek's claim]** — a single Rust binary, MCP over stdio, keyless, querying DDG/Brave/Startpage/Yahoo/Mojeek, ~20-50MB (its own figure labeled [G]). Ember's notes: (a) its existence and specs are NOT yet verified by her — as non-Google code it falls under the triple-verification rule before it is even downloaded; (b) rustc/cargo are NOT installed on this box (polyglot inventory), so "cargo install" is out — a release binary would be the only route, which raises the verification bar, not lowers it; (c) by DeepSeek's own table it SCRAPES upstream engines — its advantage is RAM and operations, NOT terms.
2. **Tavily API [lead]** — search API for agents, 1,000 free credits/month, no card (DeepSeek's figures, unverified; sign-up = Douglas's). Clean terms, 0 MB.
3. **Serper API [lead]** — Google results as JSON, 2,500 one-time free queries, no card (unverified; a grant, not a tier).
4. **Google Custom Search JSON API [lead]** — official, 100/day free, but the API is scheduled to end in 2027 (its claim; a migration cost if true).
5. **Brave Search API [CONFLICT with Gemini's lead — resolved against the card]:** DeepSeek says a CARD IS REQUIRED even for the free credit. Gemini said "free tier, ~2,000/month." The two disagree; the card point is decisive for Douglas tonight either way (no-money standing) — Brave API stays parked.
6-9. Whoogle / Degoog / **SearXNG (#8)** / LibreY-class — all grey (scrapers), SearXNG the heaviest at 200-256MB runtime.
10. **Marginalia [TESTED LIVE by Ember this round — see below]** — independent index, keyless public endpoint, clean terms, niche (documentation / small-web).
11. DDG Instant Answers — clean, not a web search.
12. **Direct Bing/Google HTML fetch — "rule it out."**

**CONVERGENCE (both AIs + the measured record agree):** SearXNG is not the only route; official APIs are the only UNAMBIGUOUSLY clean class; every self-hosted metasearch (SearXNG included) is grey on upstream terms regardless of wrapper; RAM estimates for SearXNG agree (~150-300MB).
**DIVERGENCE:** ranking (Gemini #1 of 4 vs DeepSeek #8 of 12) and the Brave card question (noted above). eggsearch appears in DeepSeek only.

**CORRECTION TO EMBER'S OWN FILING (old-with-new, her initiative under the fact-check rule):** Round 1 of this file recorded the Bing CLI fetch as "ADDED to the repertoire as the second CLI engine." DeepSeek's #12 is right and Ember accepts it: fetching a consumer results page is the same class she refused elsewhere tonight; Bing's own terms restrict automated access to the service outside its API. The Bing CLI lane is therefore RECLASSIFIED: **grey — works today, not a sanctioned lane; do not build on it; prefer the connector search CLI and official APIs.** The original line stays above, unedited; this correction supersedes its status, not its history.

**Marginalia live test (Ember, Nov 8 ~3:26 AM):** one polite request to its official public endpoint — result recorded in the daily log and reported to Douglas with this filing. No sign-up, no install, no key.
**Bottom line for the decision:** no install is justified yet. Test order if Douglas wants one: (1) triple-verify eggsearch, then test the binary (his install-class word); (2) Tavily free sign-up (his); (3) Serper (his); (4) Marginalia — already testable keyless; (5) SearXNG only if the lighter routes fail or a human search page is ever wanted.
- Marginalia test result (the line promised above): **HTTP 400 Bad Request in 1.82s** — the endpoint answered (it exists and responds), but Ember's query format was not the one it expects; per DeepSeek's own pass condition she does NOT count this as a pass or a fail of the lane — the correct request shape must be read from Marginalia's own API documentation before any retest. One request was made; no retry loop was run.

## Round 5 — DuckDuckGo asked directly, with Ember's dossier (Nov 8, 3:27-3:28 AM, Douglas's standing instruction)
Per Douglas's new standing method (present the full capability dossier; ask the service to present options based on all of it; every time), a Duck.ai chat was opened and the dossier + three questions sent. Answering model: Mistral Small 4. Ran 3:27-3:28 AM CST per the runtime.
- **Q3 answered plainly: NO.** No official API for Duck.ai exists; the HTML search endpoint is for human users, and automated queries to the search engine are against DDG's terms — developers are directed to the Instant Answers API instead (their policy line, paraphrase-checked against DDG's documented stance; exact wording as quoted by Duck.ai, not independently re-verified by Ember). **The DDG question is now SETTLED from three directions: Ember's own check, both AIs, and DuckDuckGo's own side.**
- Q1 confirms the map: **the Instant Answers API is DDG's one official programmatic lane** (keyless, lenient limits, Ember-tested HTTP 200). Extension SDK and privacy proxies exist but are not search APIs.
- Q2 recommendation — **Ember's fact-check pushes back on one point:** Duck.ai advised using the IA API "for all search needs." That overshoots: the IA API returns instant answers/definitions, NOT ranked web results — proven by Ember's own live test (empty on a general query) and agreed by both other AIs. IA API = a legitimate facts lane beside the connector search CLI, not a replacement for web search. Two small table errors also noted: its "~0.5s" IA figure vs Ember's measured 1.62s, and its labeling of her Gemini connector "Paid" (the lane runs on the free tier).
- Duck.ai automation via browser = terms violation at scale, per DDG itself — Ember will not use Duck.ai as a programmatic lane; it stays what it already is here: a paste-round Think Tank member Douglas opens.

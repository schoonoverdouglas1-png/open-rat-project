# Borrowable Search Engines — Tested
Douglas's order, Fri Nov 13, 2026, ~3:06 PM CST: "Find a privately hosted engine and/or webpage that we can borrow the search engine from."
Tested live from Ember's VM the same afternoon. Every entry below was actually queried — nothing is listed as working on reputation. Test query unless noted: "OakLeaf Surgical Hospital Altoona WI". A handful of queries per instance, no hammering.
Provenance: [T] = tested this pass, [R] = documented record, [E] = Ember's judgment/recommendation, labeled hers.

## The winner [E — Ember's recommendation]

### 1. Mwmbl — https://api.mwmbl.org — WORKS, borrow it as the independent lane
- What it is [R]: a privately run, non-profit search engine with its **own crawl index** — not a Google/Bing proxy. That independence is exactly what a borrowed lane is for: its answers don't just echo the big engines.
- Test evidence [T]: HTTP 200 JSON, no key, no CAPTCHA, ~0.9–1.9 s per query.
  - "OakLeaf Surgical Hospital Altoona" → **1 result**, on-target: the Doximity directory page for OakLeaf Surgical Hospital (Eau Claire). Thin, but real and correct — its index is small, so local/niche queries return few hits.
  - "hernia surgery" → **33 results**, reasonable quality (UAMS Health, Northwestern, BioHernia among them).
  - "Mayo Clinic Rochester Minnesota" → **7 results**, on-topic.
- Exact fetch pattern for Ember's lane:
  `GET https://api.mwmbl.org/search/?s=<url-encoded query>` (note: parameter is **s**, not q; follow the 301 to the trailing-slash URL). Response is a JSON list; each item: `url`, `title` (list of {value, is_bold} spans — join the values), `extract`, `source`.
- Lane role [E]: third lane, *independent-check* duty — use it to corroborate or challenge the hosted Google+Duck pair, and for general-topic breadth. Do NOT rely on it alone for local lookups (1-result thinness above). Respect its small scale: cache answers, don't burst it.

## Tested and not working from this VM [T]

### 2. Marginalia API — correct shape confirmed; shared public key saturated
- `GET https://api2.marginalia-search.com/search?query=...` with header `API-Key: public` (the documented shape from the Nov 8 research) was retested 3 times across ~10 minutes, two queries. Every attempt: **"QPM Limit Exceeded" (HTTP 429)** — the free public key is shared by the world and its per-minute quota was full each time. The shape is right; the key is the bottleneck. Verdict: **not a usable lane right now**; a personal/free registered key would change this, and any sign-up is Douglas's call. The Nov 8 owed retest is now discharged — result: rate-limited, not broken.
- Marginalia's web UI (search.marginalia.nu) answered 302 with no usable result body from here.

### 3. Public SearXNG instances — all gated from this egress
Picked from searx.space's live data (95 instances; candidates filtered to grade A/A+, main, 100% recent search success):
- search.inetol.net — HTTP 200 but a "Security check – Substation" bot wall; no results.
- searx.be — "Verifying your browser…" CAPTCHA page; no results.
- www.isci.si — HTTP 429 (both JSON and HTML).
- priv.au — HTTP 429.
- searx.oloke.xyz — HTTP 202 anti-bot hold; no results.
- search.banke.cloud — HTTP 429 (11.3 s).
- searxng.site — HTTP 403.
- search.mdosch.de — HTTP 502.
- searx.tiekoetter.com — HTTP 429.
- search.rhscz.eu, sx.xo.st — HTTP 429 (17-byte body).
Pattern, stated plainly: public instances defend themselves against datacenter traffic, and this VM's egress reads as datacenter — the same family of wall that blocks our self-hosted SearXNG's upstreams, met from the other side. None of these is reported as working, because none returned a single result.

### 4. 4get.ca (privately run metasearch) — human-gated
- First hit returned the results-page shell, but the body is an **"IQ test" CAPTCHA** ("enabled due to bot abuse on the network… Solving this IQ test will let you make 100 searches today"). Zero result blocks. Not a programmatic lane; not attempted further — solving gates to borrow an engine is not the road.

## Ember's ranked recommendation [E — mine]
1. **Adopt Mwmbl as the standing third lane now** — the only borrowable engine that actually answered, independent index, keyless JSON, fast. Fetch pattern above.
2. **Marginalia stays on the watch list** — if Douglas ever wants a personal Marginalia key, it becomes a real lane; as-is, the shared key is saturated.
3. **Public SearXNG/Whoogle instances: stop spending queries there** — nine instances tested, nine walls. The pattern is structural (datacenter egress), not bad luck; revisit only if our egress changes.
4. The hosted Google+Duck pair remains the primary lane for local/medical lookups, per today's evidence (Mwmbl's 1-result local return vs. the pair's full hospital results earlier today).

## Addendum — isci.si (tested 3:15 PM CST, Nov 13, 2026, at Douglas's ask)
- www.isci.si is a privately hosted public SearXNG instance (Slovenian host) — squarely in this hunt's class, spotted by Douglas.
- Live test from Ember's VM: homepage answers 200; bare isci.si 301-redirects to www. Search, however, returns **429 "Too Many Requests"** in both JSON and HTML form on first queries — rate-limited against this egress, the same wall as the other public instances.
- Verdict: nothing needed there for now; noted as a known instance. If its limiter is time-based, a later single retest is fair — no hammering. Mwmbl remains the working borrowed lane.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

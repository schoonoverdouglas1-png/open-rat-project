© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Third search lane test — Nov 13, 2026 (~3:05–3:10 PM CST)
Query for both lanes: "OakLeaf Surgical Hospital Altoona WI". Lanes started on demand and shut down after the test (never left running).

1. WHOOGLE (whoogle-venv 1.2.4): first start answered HTTP 500 on every page — its httpx client crashes parsing the box's `NO_PROXY` (bracketed IPv6 entries like `[::1]` → "Invalid port: ':1]'"); relaunched with a cleaned per-process `NO_PROXY=localhost,127.0.0.1`, the server ran healthy (home 200), but search returned **503 (CAPTCHA)** — Google refuses the scrape from this egress.
2. SEARXNG (searxng-venv, `searxng-run` on :8888): started clean (home 200; JSON format is off by default → 403, HTML used); the query page returned 200 in 3.1 s with **zero results** — every upstream engine failed from this network: Brave "too many requests", DuckDuckGo "CAPTCHA", Google CSE "timeout".
3. VERDICT: both local third lanes are software-healthy but **cannot answer a real query end-to-end from this VM today** — the block is upstream (CAPTCHA / rate-limit / timeout aimed at this egress), the same family as the known local-Chrome proxy dead head (§2 #9 of the utilization map).
4. COMPARISON: Ember's hosted Google/Duck lanes DID answer today's real queries (the hotel research around this same hospital), so the working "third lane" for now is the hosted parallel pair; the local lanes add nothing until the egress stops tripping bot walls.
5. DEAD HEAD (old-first fix list): self-hosted search from the VM — filed, not repaired; the NO_PROXY bridge above is documented here so a future start doesn't re-hit the 500s, and neither lane is to be left running meanwhile.

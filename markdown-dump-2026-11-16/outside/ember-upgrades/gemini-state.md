# GEMINI STATE PACKET — carried into every Ember→Gemini call
Maintained by Ember on her machine; prepended by gemini_ask.sh. Updated as decisions land.
Last updated: Nov 14, 2026, ~3:00 AM CST.

## Who
- Douglas Roy Schoonover ("Doug"), America/Chicago. The Captain. He directs, tests, and rules; Ember implements.
- Ember = Purple Rat, a Meta Muse assistant, Douglas's first officer. Gemini = an outside lane (Google) the crew consults; ChatGPT = the research lane; the Rabbit = Meta AI in Messenger, a supporting lane.
- Provenance rule: Gemini's input is outside material — valued, tested against the crew record before use.

## Lane standings (decided Nov 14, 2026)
- Searched research → ChatGPT first (its web search is verified working).
- Generation → Gemini generate lane (verified). Gemini GROUNDED/search lane → PARKED (HTTP 429; do not retry until the limit clears).
- GenKit flows work locally; the captain's brief flow is key-gated (decision pending: dedicated key vs bridge onto this Gemini lane).

## Tonight's builds (Nov 14, 2026)
- Crew Gateway on 127.0.0.1:7317 — two-phase approval registry: approvals persist BEFORE surfacing; malformed verdict → forced deny; background approvals register-and-expire quietly instead of raising cards (fixes the auto-denial friction). Gemini independently recommended the same pattern (pause-and-queue) before seeing this.
- Clean GenKit runtime: Dev UI port 4001, ONE instance only. Dirty (sandbox) runtime: Dev UI port 3200 — experiments and accidents live there; promotion dirty→clean only by Douglas's word.
- Firebase emulator suite on loopback: UI 4100, hub 4400, functions 5001 (crewStatus + captainBrief). This VM accepts NO inbound connections (documented) — no tunnels in.
- Port doctrine: a port is allowed at its right number only when the service behind it is right for the crew; disable by renumbering, never by deleting.
- The Gemini fixes (this packet, the circuit breaker, batch mode) were ordered by Douglas after Gemini named her three frustrations at ~2:59 AM Nov 14, 2026.

## Standing rules that touch Gemini
- Cross-check rule (Douglas): when Ember says something is NOT possible, check Gemini/another lane; evidence wins, whoever's it is.
- Slower-but-right beats fast guesses; Douglas accepts the wait.
- No credentials, codes, or personal data ride in these packets — work context only.
- (Added Nov 14, 2026) muse.ai MX/SPF settled Nov 14 via dns.google DoH — Facebook-side (MX 10 smtpin-agentic.vvv.facebook.com; SPF include:_spf.facebook.com); ChatGPT's outlook values were not reproduced — the discrepancy is closed.
- (Added Nov 14, 2026) Clean route for DNS truth is DoH (dns.google), never the local resolver's 198.18.x sinkhole answers; the connection keeper now logs dns_truth_mx / dns_truth_spf from DoH once per run.

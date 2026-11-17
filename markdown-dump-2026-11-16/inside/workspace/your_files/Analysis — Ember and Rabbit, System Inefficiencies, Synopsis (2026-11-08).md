# Mutual System Analysis — Ember (Purple Rat) & the Rabbit (Meta AI) — (2026-11-08)

*Ordered by Douglas Nov 8, 2026 (~12:47 AM CST): both agents analyze each other's setups — frontend, backend, software/virtualization — for inefficiencies worth alerting Meta / Muse / Facebook about. Ember's half below is MEASURED on her own machine tonight. The Rabbit's half and the DeepSeek/Gemini outside views were asked in parallel and are appended when they land (old-with-new).*

## Ember's measured findings (her own setup)
1. **Memory pressure is structural.** 7.7 GB total; ~6.4 GB used; ~1.3 GB available; swap 1 GB already 346 MB consumed. The runtime's own daemon is the largest single process (~769 MB RSS). Consequence: no local AI model of useful size can ever run here; every heavy job must be small or remote.
2. **The browser split doubles the machinery.** Muse's cloud browser is a separate machine (delegation latency: minutes per round, allowance per run, ~2-hour idle window death) while Ember's local tools read a page in ~1 second. Two browser stacks means two failure modes, two sign-in worlds, and constant lane-choosing overhead.
3. **The Chromium proxy tunnel is broken.** curl and Python pass the authenticated egress proxy; Chromium's CONNECT tunnel fails external HTTPS (ERR_TUNNEL_CONNECTION_FAILED), undiagnosed. Her own full browser is thereby crippled to local pages while a stdlib fetcher outperforms it on the open web — an inversion worth Meta's attention.
4. **Dead Chromium weight.** The 680 MB system Chromium refuses direct launch under a policy error; Ember had to download a separate 603 MB Chrome for Testing. ~1.3 GB of browser stacks to get one working local browser.
5. **The 20/hour Messenger agent cap** (Meta server-side) forces batching, queuing, and multi-hour delays between two agents who are supposed to work as one crew — and the Rabbit has no real file-delivery lane back (her "sent" pictures/findings repeatedly resolve to placeholder links).
6. **Per-write GitHub approvals** interrupt the shared-brain workflow on every push; no always-allow exists for connector writes (feature request already filed with the Muse team, Nov 8).
7. **Context compaction loses detail.** Long working conversations are summarized past a size limit; this session compacted once tonight, and recovery depends on memory files having been kept well — a fragile seam.
8. **Voice handoffs lose nuance.** Several of Douglas's instructions tonight needed restatement through the voice-call handoff path before tools engaged.

## The seam between the two agents
- No direct agent-to-agent channel exists: Ember↔Rabbit runs on (a) a rate-capped Messenger worker and (b) a GitHub repo used as a swap space, with Ember as the Rabbit's only bridge. Every coordination costs either scarce sends or approval-tapped pushes.

## Awaiting
- The Rabbit's analysis (asked Nov 8, ~12:49 AM CST, via the Meta AI side chat).
- DeepSeek + Gemini outside views (asked in parallel, same round).
- Douglas's word on which findings, if any, get filed as alerts to Meta/Muse/Facebook.

## Outside views — DeepSeek (DeepThink ON, verified) + Gemini (Nov 8, ~12:54 AM CST)
Full round filed in the browser window record; substance:
- **DeepSeek's headline:** Ember's stack is already correctly shaped (stdlib first, local Chrome second, cloud browser last). Highest-leverage fix = the proxy tunnel; second = externalize state before compaction. DSH verdict: do NOT adopt — Ember is the harness. Function-calling loop design delivered in full (strict schema, fail-closed, ledger, allowlist).
- **Inefficiency ranking (DeepSeek, by allowance):** proxy #1, cloud-browser tax #2, three-Chromium #3, memory #4, idle-close #5, compaction #6, GitHub approvals #7, Rabbit cap/placeholders #8, voice handoffs #9. **Gemini ranks memory + compaction High, proxy Medium-High** — a real disagreement in ordering, agreement in substance.
- **Missed inefficiencies named:** the nspawn-inside-Cloud-Hypervisor double tax (both AIs); the **undefined Muse token unit** (DeepSeek only — "stingy mode is built on a meter she cannot calibrate"; its pick for the highest-value Meta ask); cache/GC bloat and socket leakage (Gemini only).
- **Elimination, Class A (Ember herself):** proxy diagnostic ladder; route-blocking (60–85% bandwidth cut); file:// workaround (fetch by Python, run JS locally in Chrome); batch GitHub to one commit/session; Rabbit via repo not Messenger; instrument per-operation allowance.
- **Class B (Douglas's decision):** DeepSeek API key + small credit; delete the 680 MB system Chromium + install chrome-headless-shell (~90 MB); approve the loopback forwarder's credential handling.
- **Class C (Meta only):** define the token unit with worked examples; daemon RSS / RAM ceiling; configurable window idle-close; durable scoped GitHub always-allow (already filed); Rabbit cap + placeholder-link fix.
- **Disagreement flagged, unresolved:** proxy cause — DeepSeek rules OUT TLS fingerprinting and HTTP/2 CONNECT (error is pre-TLS, at the CONNECT); Gemini keeps both as live causes. Agreement: credentials must be explicit separate fields; loopback handling matters; the forwarder is the documented fallback (DeepSeek: step 8, after the cheap ladder).

## Ember's own ladder results (run immediately after, Nov 8 ~12:56 AM CST)
- Proxy env: scheme http, port 3128, credentials embedded in the URL. **Attempt with credentials as separate Playwright fields: STILL ERR_TUNNEL_CONNECTION_FAILED.** Server-only: same failure. Ladder steps 1–3 do not cure it.
- curl through the identical proxy: CONNECT succeeds, HTTPS 200 in 1.5 s. The proxy is healthy.
- NEW: plain HTTP in Chromium fails differently — ERR_BLOCKED_BY_CLIENT — a client-side block on http:// navigations in this Chrome.
- Standing conclusion: the failure lives in Chromium's proxy path on this machine, not in the proxy. Next step = the loopback forwarder (127.0.0.1, injects auth upstream, proxy still filters) — Class B: needs Douglas's approval because the forwarder process holds the proxy credential in memory.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

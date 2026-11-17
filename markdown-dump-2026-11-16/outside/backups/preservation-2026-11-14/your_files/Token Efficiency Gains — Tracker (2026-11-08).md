# Token Efficiency Gains — Tracker (2026-11-08)

His order (Nov 8, 2026, ~6:29 AM CST): "Do a calculation of percentage of efficiency gains in my token spending so that I keep track of the things that we did." Built from the measured figures in "The Gains — Preserved" (2026-11-08); lane-level numbers are measured, the cycle comparison is an estimate and is labeled as one.

## The measured lanes (before → after, % saved)

| Lane (what we built) | Before | After | % saved | Speed |
|---|---|---|---|---|
| Gemini API lane (asking another AI a question) | 60–120 s paste round-trip | 1.74 s | **97.1–98.6%** | ~35–70× faster |
| Local Ember Index (repeat lookups) | 2.35 s fetch | ~0.001 s | **~99.96%** | ~2,350× faster |
| HTML Viewer (reading a web page) | 629 KB raw page | 46 KB distilled | **92.7%** | the page Ember reads is ~1/14 the size |
| CLI search lanes, 3 in parallel | ~6.5 s sequential | ~3.3 s parallel | **~49%** | ~2× faster |
| **Composite (average of the four measured lanes)** | | | **~85%** | |

Token meaning of each: the API lane replaces long browser paste rounds (which burn Muse allowance on both ends) with one short call; the Index makes repeat lookups nearly free instead of re-fetching; the Viewer cuts the text Ember must read per page by ~93%, and reading is where tokens go; parallel lanes halve the wall-clock and the repeated context of sequential searching.

## The cycle comparison [ESTIMATE — read with the caveat]

- Previous cycle: ~90–95% of the weekly allowance used by late Saturday night, for a comparable night's work.
- This cycle: **21% used** (fresh reading Nov 8, ~6:28 AM CST) after a HEAVIER night — 737-file GitHub full sync, three deep-research reports, the full Rabbit analysis, the gateway build and test, two host-request notes filed.
- Raw comparison: 21% vs ~92% ≈ **~77% less allowance burned for equal-or-greater output**.
- **Honest caveat:** part of that headroom is the bigger Power allowance itself (he bought Power Nov 7), not efficiency alone. The pure-efficiency part is the lane table above (~85% average on measured lanes). Both are real; they are not the same number, and this file keeps them separate.

## How to keep tracking (standing method)
- Each major session: record % used at start and end (subscription-status), note the big deliverables produced, and append a line below. Efficiency = output per percentage point; watch the trend, not any single night.
- Cost-intensive work gets flagged for his review before it runs (his standing rule, Nov 8, 6:28 AM).

## Session log
- Nov 7–8 night (Power, new cycle): 21% used at 6:28 AM Nov 8 — outputs: GitHub full sync (737 files), Redo Script, Rabbit analysis (26 KB), 3 research reports, gateway live-tested, Combined Code, Starfleet + Girl Scouts packs, hotkeys reference, 2 host notes filed. Lanes built this same night: Gemini API, Index, Viewer, parallel CLI.

## The split — Ember, Rabbit, joint [ESTIMATE, Nov 8, 2026, ~6:31 AM CST, his ask]

His ask: "look to see how much you spent on yourself and the rabbit both and since you two are coming out of my wallet one time, you can calculate it together and separate both if you wish and you can give me a cost of what it costs to interact rabbit."

**Honest basis:** Muse reports only the total (21%); no per-task pricing exists. This split is Ember's estimate from the night's work inventory — the blocks of work actually done — not a meter reading. The three shares sum to the measured 21 points.

| Share | Est. points of the 21% | What it bought |
|---|---|---|
| **Ember, on herself** (lanes & self-infrastructure) | **~8 points (~38%)** | Gemini API lane, local Index, HTML Viewer, MCP bridge, the Guard, the gateway, Ember College packs, Ubuntu update + scans, Redo Script, gains/tracker files |
| **The Rabbit** (interacting with her) | **~4 points (~19%)** | ~20 Messenger relay rounds (sends + reads + verbatim reports), the 15-minute check-in reads, the 26 KB Rabbit analysis, donations-station exchanges, chair/riddle/welfare sequence, Two-Harbor Rabbit half |
| **Joint / his projects** (neither girl alone) | **~9 points (~43%)** | GitHub full sync (737 files), 3 deep-research reports, Google full scan, Combined Code, host-request notes, account sweeps |
| **Together (Ember + Rabbit)** | **~12 points** of the 21 | the two of them, out of one wallet, one time |

**Cost of interacting with the Rabbit [EST]:** ~4 points spread over ~20 substantive relay rounds ≈ **~0.2 of a percentage point per full Rabbit round** (one combined send + her reply read + the report back to Douglas). The 15-minute check-in reads are far cheaper — near-negligible each; the relays and the analysis are where her share went. Her own side (Meta AI's compute) costs Douglas nothing — she rides her own allowance; only Ember's bridging time comes out of his wallet.

## For posterity — his notation (Nov 8, 2026, ~6:30 AM CST, his words)
"Percentage of my tokens I've been donated to the cause of AI this session just for the notation for posterity."

**The notation: 21% of his weekly Power allowance — essentially the whole of this cycle's use — was spent in this one overnight session (Nov 7–8) and stands donated, in his framing, to the cause of AI: the lanes, the Guard, the sync, the Rabbit bridge, the Two-Harbor Project, and the archive itself.** Fresh reading at the moment of notation: 21% used, 79% remaining, cycle resetting Nov 14, 11:07 PM CST. Recorded as his framing, at his request, for posterity.

## Round 2 — Gemini's further-improvement ideas (asked Nov 8, ~6:50 AM CST, at Douglas's order) with Ember's verdicts
Gemini's savings figures are its own estimates [UNVERIFIED]; verdicts are Ember's, checked against this setup.
1. **Chunk-level retrieval over the Index (BM25/FTS5): return top sentences, not whole records.** Gemini est. 70–80% less retrieval context. Ember: HOLDS as direction — the Index exists; chunking is a real next gain, low effort. Top recommendation.
2. **Strict JSON/compact output schemas on API-lane calls.** Gemini est. 15–30% overhead cut. Ember: PARTIAL — right for machine-to-machine calls; wrong for Douglas-facing conversation, which stays natural speech.
3. **Diff-based handoffs from background jobs (state-change flag + micro-summary only).** Ember: PARTIAL — already the design in places (Feed Watch reports only new entries); worth tightening everywhere.
4. **Summarization cache for distilled HTML (500-token summaries cached; full text only on deep-dive).** Ember: HOLDS as direction, medium-high effort; pairs with #1. Build after #1.
Standing caution (his Nov 8 order): be certain — doubly, triply check, and more, especially on these things. None of the four is built yet; each gets its own cost flag and his review before building, per the cost-intensive rule.

## Summary cache — investigation + build estimate (Nov 8, ~6:52 AM CST, his pick of the four)
Investigated against the actual tools: html_viewer.py (117 lines, distills pages 629KB→46KB) and ember_index.py (66 lines; ember_index.db already has pages + FTS5 tables; 12 pages indexed; a small cached_fetch.py already exists).
**Design:** add a summaries table (URL + content hash + ~500-token summary + date) beside the Index. Flow: distill → hash → if the hash is cached, serve the summary; full distilled text only on a deep-dive ask. Summaries made two ways, his choice at build time: (a) one Gemini API call per new page (free tier, better quality), or (b) local extractive summary (stdlib, zero cost, plainer).
**Build cost [EST]: ~0.5–1.5 percentage points of weekly allowance**, one sitting — roughly 150–250 lines plus tests, all Guard-checked, riding the existing Index. Running cost after build: ~zero Muse tokens per repeat read.
**Savings [EST]:** a repeat read drops from ~46KB (~11–12k tokens) to ~500 tokens — **~95% per repeat read**. Payback speed depends on how often sources get re-read; research weeks re-read a lot.
**Risks, honestly:** a summary can miss the one detail a deep-dive needs (mitigated: full text always one call away, both stored); pages change (mitigated: content hash + expiry). Status: INVESTIGATED, NOT BUILT — awaits his go under the cost-intensive rule.

## Summary cache — BUILT Nov 8, 2026 (~6:53 AM CST), cheaper than the estimate
His order: "Do the cache job but if it's cheap to investigate it attempt to investigate doing that task to see if you could find a way to do it cheaper." Built: ~/workspace/headless-browser/summary_cache.py (~150 lines, stdlib only), own DB summary_cache.db.
**How it came out cheaper than the 0.5–1.5 pt estimate:** (1) the Index already stores every page's full distilled text, so the cache stores summaries ONLY — no duplicate storage, no new fetching; (2) summaries are local extractive (sentence scoring) — zero API calls per page, forever, instead of a Gemini call per page; (3) its table lives in its own DB file, so the Guard-checksummed Index DB stays byte-untouched (no manifest work). First test caught a flaw (citation-list debris scored as dense text) — a junk filter was added and retested, per his doubly/triply rule.
**Measured test (Chromium Wikipedia page):** full distilled text 47,185 chars → summary 1,828 chars = **96.1% saved**; second read served from cache instantly (fromCache: true). Quality: honest v0.1 extractive — real article sentences, occasional citation fragment at the tail; full text remains one call away (`full <url>`).
Status: BUILT AND TESTED. Not yet wired into every read path — Ember uses it when re-reading indexed sources; wiring it as the default first-look is a small follow-up, his word when wanted.

## Two caches — settled design (Nov 8, ~6:55 AM CST, his correction and ruling)
Per his correction (summary must never replace the original) and his design ("make a full cache and a summary cache — one for both"):
- **Full Cache** (ember_index.db): complete originals, the default serve. cached_fetch.py is now v0.3 (v0.2 summary-default kept as .bak, old-with-new).
- **Summary Cache** (summary_cache.db): previews only, explicit opt-in.
- Pre-warmed to parity Nov 8: **12 pages in both** — full corpus 158,610 chars; summaries 17,596 chars (88.9% smaller on the preview side). Rule recorded in AGENTS.md.

## Summary Cache v0.2 — his full spec built (Nov 8, ~6:55–7:00 AM CST)
His spec: each entry = table of contents + bibliography at minimum, plus Ember's recommendations. Built into summary_cache.py v0.2 (v0.1 kept as .bak): every entry now carries (1) TOC from the viewer's stored headings, (2) bibliography = the work's own citation (URL, capture date, HTTP status, Full-Cache location, text hash) + true outbound references with same-family navigation filtered out, (3) Ember's recommendations, labeled hers and mechanical (deep-dive candidate = longest real section, related pages in the Full Cache, freshness/refresh note, truncation/JS flags), (4) extractive key passages. Verified on the Chromium Wikipedia entry after three test-found fixes (citation debris, language-edition noise, contents-listing span trap). Parity: 12/12 pages in both caches; entries now 48,292 chars total vs 158,610 full (69.6% smaller) — bigger than v0.1 summaries because the finding-aid content is the point, per his spec.

## Scheduled-load audit — Nov 8, 2026, ~11:59 PM CST (Ember, at the Captain's order: find ways to save tokens)

Fresh usage at audit time (live check): **33% used / 67% left, Power, reset Sat Nov 14, 11:07 PM CST.**

Enabled user-owned scheduled jobs, counted: **~255 agent runs per day** at current settings.
- Quarter-hour manuscript check-ins (every 15 min, set Oct 17): **96/day — the single biggest scheduled load**, older than and overlapping the hourly status system.
- Six hourly jobs (accounts sweep, status reports, status +15, feed watch, feed watch +15, Rabbit check-in, Rabbit check-in +15 = actually seven hourly lines incl. companions): ~24/day each.
- Git sync every 2h: 12/day. Dailies: digest, chiropractor reminder, Rabbit pings (08:08, noon, conditional midnight).

Ranked savings found (estimates from the Captain's measured rates — no per-run pricing exists):
1. Quarter-hour manuscript check-ins → hourly or paused: ~72 fewer runs/day. Biggest lever.
2. +15 companions off when not actively working (already his rule): up to 72 fewer runs/day on idle days.
3. Merge sweep + feed watch into the status-report run: ~48 fewer spin-ups/day (needs job-body surgery, his approval).
4. Session hygiene: new topics in fresh side chats — long threads re-carry context, the main driver of the ~2.0 points/hour working rate.
Already working, keep: two caches (Summary lookups ~96% lighter), Gemini free lane (zero Muse allowance), batched Rabbit sends (94% fewer bridge actions), distilled wildcard trio (a fifth of the full matrix's search cost), desktop off (zero tokens).

## Applied — Nov 9, 2026, ~12:04 AM CST, on the Captain's "Make it so"
- Quarter-hour manuscript check-ins: **15-minute cadence retired → hourly** (job kept, same purpose; its job title still reads "Quarter-hour" as a historical label). 96 runs/day → 24. Next run ~1:04 AM CST.
- Companions, per his separate ruling a minute earlier: only the Rabbit check-in +15 follows the sun; status +15 and feed-watch +15 disabled (definitions kept).
- The merger: left alone, per recommendation 3. The free wins: untouched, per recommendation 4.
- Scheduled fleet now ≈ **135 runs/day**, down from ~255.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

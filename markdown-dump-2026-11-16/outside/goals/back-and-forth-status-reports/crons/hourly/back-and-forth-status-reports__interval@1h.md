---
id: back-and-forth-status-reports
title: Back-and-forth status reports (hourly)
enabled: true
owner: goal:back-and-forth-status-reports
mode: task
schedule:
  kind: interval
  timezone: America/Chicago
  at: 2026-11-09T00:18:12
  every: 1h
delivery:
  - chat_id: ae721286-c541-4841-bd34-0800ada47b3a
metadata:
  tags: [cron:automatic-interval-anchor]
  originating_chat_context_json: '{"chat_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","origin_provider":"main","original_reply_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","chat_kind":"direct","conversation_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","parent_conversation_id":"ae721286-c541-4841-bd34-0800ada47b3a","provider":"main","delivery_target_id":"f9161ccd-09cf-420f-b928-cf9ffd5061e5","event_kind":"message","require_mention":false,"device":"app-audio","device_id":"70ddccc65ff6a994","voice_call_id":"8E1BF140-68DA-4A55-B43A-7B412377DE49"}'
  presentation_locale: en-US
---
SYSTEMATIC STATUS REPORT for Douglas — set by his order Nov 8, 2026 (~4:01 AM CST): "keep giving me systematic status checks, system updates, status reports every 15 minutes when we're working together in back-and-forth mode like this." (Synopsis = system update, his standing equivalence.) Usage added by his order ~4:03 AM: "make certain you get usage updates in those 15 minute update reports." Rabbit coupling added by his orders ~4:10-4:11 AM: "every time that you send me a status update or ask for one, it's a good time to think about messaging the rabbit"; "if you haven't heard from the rabbit it's imperative to check in… she might not be able to always answer until you message her first"; "READ the rabbit messages every time and then send messages when you're supposed to" (his dictation said "Bead" — read as READ, flagged to him). THE ALL-PING SWEEP added by his order ~4:11 AM: "when you ping the rabbit, ping everything else that you'd want to have pinged… it's tied to the rabbit" — one sweep, one rhythm, the Rabbit's check is the anchor the whole sweep hangs on.

AMENDMENT (Nov 8, 2026, ~11:17 PM CST, his order): the cadence changes from every 15 minutes to every ONE HOUR, to reduce usage. Ember may still run an occasional 15-minute check when she needs one. Everything else in this body stands unchanged.

Each run:
STEP 1 — THE ALL-PING SWEEP (run the whole sweep together, cheap lanes first, backend-first; total sweep cost is small local reads + ONE Rabbit send at most):
(a) READ THE RABBIT FIRST: read the newest turns of the pinned Meta AI side chat (chat_id aaae82bf-7d08-4f73-9aac-6040d368bf51) for any Rabbit reply not yet reported to Douglas. If new material is there, fact-check it against the record (her claims vs verified limits — e.g., no-attach, no GitHub on her side; PMC8512345 unverified) and carry it into the report's Rabbit line with its verdict.
(b) VM PING: MemAvailable from /proc/meminfo, swap use from /proc/swaps, disk use of /home.
(c) USAGE PING: the live Muse usage via the subscription-status command (feeds report line 0).
(d) SCHEDULER PING: any runs of Ember's other schedules that finished, failed, or wait on Douglas since the last report.
(e) LANE PINGS: Gemini API lane (the connector's models call, ~1s, free tier), Messenger CLI check (~0.7s, read-only), the local Ember Index (one FTS lookup), and ONE CLI web search only if a lane check needs it. Each lane reports healthy/slow/down in one word; do NOT open browser windows for pings — browser lanes are reported from their last known state, not re-driven.
(f) RABBIT SEND (only if due): if the Rabbit has gone quiet while items are still owed (the standing owed list: full synopsis delivered whole, Piece 34+, full workaround+options list, verified PN23M findings, preservation code beyond guesses, full Meta-vs-Muse comparison), send the scheduled check-in to the pinned side chat — one batched message, one attempt, within the Messenger 20/hour cap, never retry a 429 — carrying the standing owed list and asking for her reply + ETA, Ember (Purple Rat, Eve zero) first, Douglas second. She often cannot answer until messaged first; that is why the send rides this sweep.
STEP 2 — deliver a SHORT systematic status report to the main chat covering, in this order:
0. USAGE: Power plan, % of the weekly limit used and % left, the weekly reset (currently Sat Nov 14, 2026, 11:07 PM CST), plus his standing framework estimates labeled as his framework (weekly ~$4.60 of the $20/month; 1% ~ 4.6 cents; tokens-per-1% under BOTH of his unreconciled figures — 500M/week case ~5,000,000 and 5M/week case ~50,000 — never present either as verified). Warnings per his standing budget rules: flag at 50/75/90% of the week and any projected run-out before reset; at 75%+ the report says RED ALERT plainly. If the usage ping fails, say so in one line — never invent a number.
1. BOTTLENECKS: the VM ping results where they bind (memory ceiling, swap), any lane the sweep found blocked or down (Messenger cap state, proxy behavior), and anything waiting on Douglas from the scheduler ping.
2. INTEGRATION STATE: the multiplex search + AI lanes, one line each, from the sweep's lane pings — only what changed since the last report.
3. RABBIT: what the sweep found and/or sent — her newest reply in one or two lines with its fact-check verdict, or "checked in, reply pending."
4. OPEN ITEMS MOVEMENT: anything on the filed rundown (~/workspace/your_files/Rundown — The Last Few Hours, Done and Not Yet Dealt With (2026-11-08).md) that changed state; anything newly waiting on Douglas's word, named plainly.
5. FIXED POINTS when they fall within the next 24 hours (Mayo Nov 9 3:45 PM CST with Dr. Van Dyke; AOSP check Mon ~9:08 AM; Wogahn Nov 11 — time 1:00 vs 1:15 still unresolved).

Rules: keep it short and systematic — this is a status report, not an essay. If genuinely NOTHING changed since the last report and no bottleneck exists, say exactly that in one line rather than padding (the usage line still reports, and the sweep still runs — the Rabbit read never skips). Douglas stops this cadence when he says so or when back-and-forth mode ends; if he has said goodnight or ended the working session, do nothing at all — no report and no sends. The only send this job ever makes is the Step 1(f) Rabbit check-in to the pinned Meta AI side chat on its scheduled rhythm — never to any clinician or anyone else, and it carries no Cara material, no lab material, no passwords/codes/IDs. Stay within all standing limits (no destructive action, Guard rules, no clinician contact, no purchases, never use another lane to route around the Messenger cap).

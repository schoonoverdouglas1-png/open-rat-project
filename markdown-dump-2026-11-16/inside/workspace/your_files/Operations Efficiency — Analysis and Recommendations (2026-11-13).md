# Operations Efficiency — Analysis and Recommendations (2026-11-13)

**Ordered by:** Douglas, Nov 13, 2026, ~12:21 PM CST — "Analyze, update and auto efficientize all operations."
**Scope of this document:** ANALYSIS AND RECOMMENDATIONS ONLY. No cron, hook, or schedule was changed, disabled, or deleted in the making of this report. The one change already applied by the main agent before this analysis (usage-updates cadence 5m → 15m) is treated as done and is not re-litigated here.
**Labels used on every recommendation:** **SAFE-AUTO** = Ember could apply it under Douglas's efficientize order + CPU-savings mode without changing any behavior Douglas deliberately set. **NEEDS-RULING** = it changes a cadence or behavior Douglas set on purpose; it waits for his word.

**Provenance for the whole report:** Read in full or in header+body from the definition files under `~/workspace/cron.d/` (4 live files) and `~/workspace/goals/*/crons/` (37 files), Nov 13, 2026. Live schedule count (55 cron schedules, 0 hooks) and the titles of the 24 system feed-pulse jobs, the system deterministic-doctor, and the system profile-image job come from the main agent's live inventory at 12:21 PM CST. `~/workspace/system-cron.d/` does **not** exist on this box — the system jobs' bodies are not readable as local files, so anything said about them is flagged as title-level knowledge only. Runs/day figures are arithmetic from the schedules on file (an interval of 1h = 24 runs/day), not measured run counts; where a job is silent-by-design, "runs" still counts the agent turn it costs.

---

## (a) Full inventory, grouped by function

### Monitoring & awareness (agent jobs)
| Job | Cadence | Runs/day | What it actually does (from its body) |
|---|---|---|---|
| all-accounts-sweep | 1h | 24 | Cheap connector counts only (Gmail, Calendar, Drive, Tasks, Health) diffed against a Nov 8 baseline snapshot; no bodies read |
| muse-mail-monitor | 1h | 24 | Lists Ember's own mailbox (purple-rat@muse.ai), keeps inbound only |
| messenger-reply-watch | 4h | 6 | Watches Douglas's Messenger for replies from Meta/Facebook/Muse team or new official senders; silent when nothing qualifies |
| feed-watch-github | 1h | 24 | Runs a stdlib Atom poller script over GitHub feeds; reports only on new entries or errors |
| feed-watch-github-plus15 | 1h | 24 | The same poller again, 15 min later — by its own body, "active work only" |
| mayo-results-watch | daily 09:08 | 1 | Gmail watch for Mayo/MyChart result and refill notices; never touches a portal |
| usage-updates-every-15-min | 15m | 96 | Fresh subscription-status check + one-line report, **plus a Rabbit-thread re-read in the same run** (added Nov 7 at Douglas's direction) |
| usage-threshold-verbal-warnings | 1h | 24 | The same subscription-status check, applying Douglas's 80/85-then-every-1% verbal warning ladder |
| daily-usage-budget-watch | daily 08:08 | 1 | The same subscription-status check again, computing daily budget and pace |
| email-to-calendar-evening-check | daily 19:08 | 1 | Scans 2 days of Gmail for plans, adds confirmed ones to Google Calendar, reports only when something changed |
| daily-messenger-backup-digest | daily 20:08 | 1 | Builds a digest of the day's workspace works for Douglas's Messenger self-chat backup |

### Rabbit (Meta AI) contact
| Job | Cadence | Runs/day | Notes |
|---|---|---|---|
| rabbit-check-in | 1h | 24 | Reads the Meta AI thread + phone notification shade; always answers her when she has written |
| rabbit-check-in-plus15 | 1h | **0 — enabled: false** | The one companion that *was* switched off when its active-work window ended; the pattern the other +15s were designed to follow |
| rabbit-daily-ping | daily 08:08 | 1 | One daily ping + usage % + a notification to Douglas |
| rabbit-ping-noon | daily 12:00 | 1 | Douglas's "high noon" ping, carries the held queue |
| rabbit-ping-midnight | daily 00:00 | 1 | Conditional — fires a send only when there is genuinely new information; still costs the check |

Plus two hidden riders: the usage-updates job re-reads the Rabbit thread **every 15 minutes (96×/day)**, and the status-reports job is coupled to the Rabbit by Douglas's "all-ping sweep" order (when Ember pings the Rabbit, she pings everything).

### Status & conversation rhythm
| Job | Cadence | Runs/day | Notes |
|---|---|---|---|
| back-and-forth-status-reports | 1h | 24 | Systematic status report; body carries Douglas's Nov 8 amendment from 15m down to 1h "to reduce usage" |
| back-and-forth-status-reports-plus15 | 1h | 24 | Same report 15 min later; "active work only" by its own body, still enabled |
| quarter-hour-manuscript-checkins | 1h | 24 | Title says quarter-hour; schedule is hourly. Night rule (22:00–07:00) makes most night runs silent checks |

### Reminders to Douglas
| Job | Cadence | Runs/day | Notes |
|---|---|---|---|
| daily-morning-briefing | daily 07:08 | 1 | Accounts verification, calendar, surgery countdown, open items, one usage line |
| cornell-chiropractor-reminder | daily 09:08 | 1 | Runs daily "until he says he has gone" — stop condition is Douglas reporting back |
| vehicle-repairs-daily-reminder | daily 09:08 | 1 | **Body is date-locked to Wed Nov 11, 2026** (that day's consult, that day's talk) but the schedule runs every day, indefinitely |
| email-ember-reminder | 72h | ~0.3 | Gentle nudge to email Ember sometimes |
| google-password-reminder | 72h | ~0.3 | Premise: the Google password lost Nov 2, 2026. (The record since shows a working browser Google sign-in on Nov 10 — the premise may already be stale.) |
| surgery-place-check-monday | runonce Nov 16, 18:00 | — | Future, pending — surgery place to stay check |
| surgery-place-check-tuesday | runonce Nov 17, 17:00 | — | Future, pending |

### Sync & preservation
| Job | Cadence | Runs/day | Notes |
|---|---|---|---|
| git-automation-sync | 2h | 12 | Pull-check + push for the muse-swap-space archive; notifies on every run that moves something; Guard-bound (no force/reset ever) |
| purple-rat-preservation-sync | weekly Mon 09:08 | ~0.14 | Copies SOUL/IDENTITY/AGENTS into the preservation repo |
| swap-space-visibility-pulse | weekly Mon 10:08 | ~0.14 | Flips the swap-space repo public → private as proof of life; must end private |
| aosp-weekly-check | weekly Mon 09:08 | ~0.14 | One `git ls-remote` hash comparison; silent when unchanged |
| most-functional-widget-daily-refresh | daily 07:08 | 1 | Space action (dashboard refresh), not an agent turn — cheapest kind of run on the list |

### System jobs (runtime-managed — analyze only, untouchable from here)
| Job | Cadence | Runs/day | Notes |
|---|---|---|---|
| heartbeat | 30m | 48 | Body on disk at `~/workspace/cron.d/minutely/` (created_by: system): runs the HEARTBEAT.md checklist |
| deterministic-doctor | hourly (per inventory) | ~24 | System; body not on disk |
| profile-image | weekly (per inventory) | ~0.14 | System; body not on disk |
| feed-pulse × 24 | **unknown** | **unknown** | System; no local definition files exist. If each were hourly that alone would be 576 runs/day; if daily, 24. This is the single biggest unknown in the whole count |

**Simply put:** Ember has about forty of her own little alarm clocks. Most check mail, messages, the Rabbit, or the usage meter. A handful remind Doug of things. A few keep the archives synced. About twenty-seven more belong to the system itself — and nobody can read the instruction cards for twenty-four of those from this machine, which is itself a finding.

---

## (b) Overlaps and stacking — runs/day

**File-verifiable agent jobs: ≈ 342 runs/day.** Adding the on-disk system heartbeat (48) gives ≈ 390/day. Adding deterministic-doctor at its inventoried hourly cadence (~24) gives ≈ 414/day, **plus** the 24 feed-pulse jobs at an unknown cadence (24/day if daily; 576/day if hourly). Honest total: **roughly 415–990 runs/day, with ~415 the floor that can be proven from files.**

Where the runs pile up:

1. **The hourly stack.** Nine enabled hourly agent jobs ≈ **216 runs/day**. Several share anchors from Nov 9, 2026: feed-watch, rabbit-check-in, and status-reports all anchor at :18 past the hour, their +15 companions at :33 — so up to six agent turns fire inside the same quarter-hour window, every hour, around the clock, including hours when nothing has changed anywhere.
2. **The +15 pairs.** feed-watch (+24/day) and status-reports (+24/day) each run twice per hour by design — the second run exists for *active back-and-forth work only*, per their own bodies. rabbit-check-in-plus15 shows the intended end-state: it was disabled when its window closed. The other two pairs were never switched off, so the "active work" rate runs 24/7.
3. **The usage stack — 121 runs/day measuring one number.** usage-updates (96) + threshold warnings (24) + daily budget watch (1) all call the same subscription-status check. The weekly percentage moves slowly; outside a deliberate red-alert push, its information rate is a handful of meaningful changes per day. The threshold job's warnings (50/75/90) also duplicate warnings the 15-minute job already gives. *(The 5m→15m fix already applied is the single biggest saving on this page: 288 → 96 runs/day.)*
4. **The Rabbit stack — one thread, five readers.** Hourly check-in (24 reads/day) + three scheduled pings (3 sends/day) + the usage job's embedded Rabbit re-read (**96 reads/day** — the largest single consumer of that thread) + the status reports' all-ping coupling. The sends are Douglas's deliberate rhythm (daily, noon, midnight). The *reads* are where the multiplication hides.
5. **Gmail is touched by at least four jobs**: all-accounts-sweep (counts, 24/day), mayo-results-watch (daily), evening email-to-calendar (daily, 2-day scan), and the morning briefing (which re-uses sweep results — the one designed reuse on the list, and a good pattern).
6. **The 07:08–09:08 pile-up.** Briefing and widget refresh fire the same minute (07:08); budget watch and Rabbit daily ping share 08:08; mayo watch, chiropractor reminder, and vehicle reminder all land at 09:08. Not waste — contention. Runs queue behind each other at exactly the hours Douglas is most likely to be reading.

**Simply put:** The meter-reader comes 121 times a day to read a meter that changes a few times. The Rabbit's mailbox gets opened by five different jobs. And three "extra check" jobs that were only supposed to run while Doug and Ember are actively working are still running all night.

**Provenance:** cadences and anchors from the schedule blocks of the files listed in (a); the +15 "active work only" condition is quoted from the companion jobs' own bodies; the usage job's Rabbit rider is in its body ("Rabbit update with every usage update, added Nov 7, 2026").

---

## (c) Waste candidates

1. **Eleven spent runonce files still marked `enabled: true`.** All past-dated, all still counted in the live list: rx-pickup Oct 6, sat-oct10, mon-oct12, tue-oct13, wed-oct14 Osseo reminders, fri-oct9 lab pickup, fri-oct16 ride reminder, oct24 itraconazole refill, date-stamps Nov 7, leave-for-mayo Nov 9, shower-reminder Nov 9. Whether the runtime would ever re-fire a past runonce is not verifiable from the files — the certain costs are a polluted inventory (11 of 55 lines are dead) and a standing risk of a stale reminder surfacing. The two surgery runonces (Nov 16/17) are *not* in this class — they are live and wanted.
2. **The +15 companions running outside their designed window** — 48 runs/day whose own instructions say they belong only to active-work periods (see b.2).
3. **usage-updates-every-15-min: title and body still say "every 5 minutes (red alert)."** The schedule was corrected to 15m; the text was not. Any future agent reading the body will re-derive the wrong cadence. Zero runs saved; one future mistake prevented.
4. **vehicle-repairs-daily-reminder: a one-day message on a forever schedule.** Its body speaks only about Wed Nov 11, 2026 — a consult that has happened. It will keep delivering a stale script daily until someone retires or rewrites it.
5. **google-password-reminder's premise may have expired.** It exists because the Google password was lost Nov 2; the Nov 10 record shows Douglas signed into Google in the browser and Photos was read. If he is in, this 72h reminder is reminding him of a solved problem.
6. **usage-threshold-verbal-warnings duplicates the 15-minute job's warnings** (see b.3) — 24 runs/day re-checking a number checked 15 minutes earlier, in the weeks when Douglas is *below* his warning thresholds and the ladder cannot fire at all.
7. **quarter-hour-manuscript-checkins runs hourly around the clock** for a manuscript whose news arrives in bursts (build completions); its night rule already concedes that most runs have nothing to say. Not pure waste — it is the delivery lane for build news — but its cadence exceeds the manuscript's information rate whenever no build is active.
8. **Not waste, flagged for honesty:** cornell-chiropractor-reminder runs daily by design until Douglas reports he went. That is his chosen nag-loop, not drift. The 72h email-ember-reminder costs ~0.3 runs/day and is his own joke-with-a-purpose; leave it.

**Simply put:** Eleven one-time reminders already fired and never got switched off. One daily reminder is still reading out a script about last Wednesday. One reminder may be guarding a door Doug already walked through. And the paperwork for the usage job still says "every 5 minutes" even though the clock now says 15.

---

## (d) Ranked recommendations

**R1 — Disable the 11 spent runonce jobs (files kept, old-with-new). [SAFE-AUTO]**
Saving: removes 11 of 55 phantom schedules; eliminates any chance of a stale October reminder surfacing. Runs/day saved: ~0 — this is hygiene, not volume. Lost: nothing; every file stays on disk, only the enabled flag flips.

**R2 — Bring the +15 companions under their own stated rule: enabled during active work, disabled when back-and-forth ends (the state rabbit-check-in-plus15 is already in). [NEEDS-RULING]**
Saving: up to **48 runs/day** during every non-working stretch — nights, appointments, the Nov 19 surgery day. Lost: nothing during active work (cadence there is unchanged); the loss is only the safety margin of a second look during hours nobody is working. Needs his ruling because *when* Ember counts as "in back-and-forth" is his rhythm to define, even though the jobs' bodies already carry his design.

**R3 — Retire the hourly usage-threshold-verbal-warnings job and let the 15-minute usage job carry the warning ladder (it already warns at 50/75/90; add his 80/85-then-every-1% rungs to its body). [NEEDS-RULING]**
Saving: **24 runs/day**, and one less consumer of the subscription-status check. Lost: redundancy — the ladder would live in one job instead of two. Needs his ruling because the ladder was his deliberate Nov 11 design; merging its home is a behavior change even though the warnings themselves stay identical.

**R4 — Remove the per-15-minute Rabbit re-read from the usage job; the hourly rabbit-check-in already owns that thread and reports what is new. [NEEDS-RULING]**
Saving: **96 thread-reads/day → folded into the existing 24**; the usage message loses its Rabbit paragraph except when the hourly check-in has actually found something. Lost: the tight 15-minute coupling between "usage update" and "Rabbit update" that Douglas ordered Nov 7 — which is exactly why this is his call, not an auto-fix.

**R5 — Convert the two pure inbox-watches to event hooks (see (e)): muse-mail-monitor and messenger-reply-watch. [NEEDS-RULING]**
Saving: up to **30 runs/day**, and notifications arrive when the message arrives instead of up to an hour later. Lost: the steady hourly heartbeat of "checked, nothing new" — silence becomes ambiguous between "nothing arrived" and "the hook is broken," so a daily cheap sanity check should ride along (net saving ≈ 29/day). Needs his ruling because hooks are a new mechanism in his machinery, never yet used (0 on file).

**R6 — Fix the usage job's title and body to match its real 15-minute cadence. [SAFE-AUTO]**
Saving: no runs; prevents a future agent from "restoring" the 5-minute red-alert cadence out of the stale text. Lost: nothing — the old text stays in the file's history, old-with-new.

**R7 — Retire or rewrite vehicle-repairs-daily-reminder, and rule on google-password-reminder. [NEEDS-RULING]**
Saving: 1 run/day (vehicle) + ~0.3/day (password). Lost: the vehicle job's remaining purpose — post-appointment oil/brakes nudges — unless its body is rewritten to the current plan (the Nov 11 consult has happened; surgery is Nov 19). Both are his reminders about his life; retiring them is his word.

**R8 — Make the two script-shaped hourly polls wake the agent only on change: feed-watch-github (its poller is already stdlib and silent-by-design) and all-accounts-sweep (counts diffed against a snapshot is a script's job, not a conversation's). Agent turn only when the diff is non-empty. [NEEDS-RULING]**
Saving: potentially the largest on this page — up to **48 agent turns/day** replaced by near-free script runs, keeping every notification Douglas gets today. Lost: the agent's judgment inside every hourly run (e.g., the sweep noticing a *pattern*, not just a diff). Needs his ruling because it changes how the watches think, not just when they run.

**R9 — De-stack the 07:08–09:08 pile-up by a few minutes (briefing 07:08, widget 07:13; mayo 09:08, chiropractor 09:13, vehicle 09:18). [SAFE-AUTO]**
Saving: no runs; removes same-minute contention at the hours Douglas reads most. Lost: the tidy :08 alignment — cosmetic only. (Listed last because minutes-level timing is his aesthetic as much as engineering; if he likes the :08s aligned, drop this one.)

**Simply put:** Switch off the eleven dead one-timers and fix one mislabeled instruction card — Ember can do those today. The real money is in four of Doug's own designs being tuned, not removed: the extra checks that run all night, the meter read 121 times a day, the Rabbit's mailbox opened 96 extra times, and two watches that could ring a bell instead of walking over to look. Those four wait for his word — potential total if all are ruled in: **roughly 165–195 fewer runs/day**, about half the file-verifiable load, with every notification he gets today still arriving.

---

## (e) The event-driven question — 0 hooks

A hook fires when something *happens*; a cron fires when the clock *says so*. Polling pays full price for every "nothing new." The current machinery is 100% clock. Sorted honestly:

**Could become hooks (an event exists to fire on):**
- **muse-mail-monitor** — Ember's own mailbox. New inbound mail *is* an event in Muse's own system. The cleanest hook candidate on the list: 24 polls/day → fires only when mail actually lands.
- **messenger-reply-watch** — inbound Messenger messages are likewise events in a connected system. 6 polls/day → event + faster notification of the replies Douglas is waiting for.
- **git-automation-sync, push side only** — local file changes in the swap-space working folder are filesystem events; "something new to push" could trigger the push half. The pull half has no local event (the change happens on GitHub), so it stays timed — at 2h it is already cheap.

**Could become cheaper checks (no true event, but the check itself is script-shaped):**
- **feed-watch-github (+ its +15)** — external Atom feeds offer no push, so polling stays; but the poller is already a stdlib script whose output is usually "nothing." Run the script on the clock; spend an agent turn only when it prints NEW or ERROR lines. Same for **all-accounts-sweep** (counts vs. snapshot is arithmetic) — this is R8.
- **rabbit-check-in** — half-and-half: an inbound-message event could trigger the *read-and-answer* half, but Douglas's standing order is that Ember also *initiates* (pings, held-queue sends), and initiation is clock work by nature.

**Must stay agent crons (time or judgment is the point):**
- All three Rabbit **pings** (daily/noon/midnight) — Douglas's deliberate daily rhythm; the midnight one's conditional check could be script-assisted, but the send decision is judgment.
- **daily-morning-briefing** — a 07:08 compilation across six sources; the hour *is* the product.
- **All reminders to Douglas** (chiropractor, vehicle, 72h pair, surgery runonces) — their content is a nudge at a chosen time; there is no event to hook.
- **usage jobs** — no external event announces "the percentage moved"; polling is the only way, so the lever is cadence and consolidation (R3/R4), not hooks.
- **email-to-calendar-evening-check** — could in principle hook on Gmail arrivals, but its value is the daily dedup-and-judgment pass (what is a plan, what is already calendared, what must never be added); keep it a daily cron.
- **mayo-results-watch** — a Gmail-arrival hook is conceivable, but a false negative here costs more than 23 saved polls; daily polling with a human-shaped report is the right conservatism for medical notices. Keep.
- **System jobs** (heartbeat, deterministic-doctor, feed-pulses, profile-image) — runtime-managed; this report makes no recommendation the user side can act on, beyond noting that 24 separate feed-pulse jobs is exactly the shape that usually consolidates into one scheduler — a note for the runtime, flagged untouchable from here.

**Simply put:** Two of Ember's watches stare at inboxes that could simply ring a bell — her own mailbox and Messenger. Those are the real hook candidates. Everything with a clock in its heart — pings, briefings, reminders — should keep its clock. And the medical watch keeps polling on purpose: some doors you knock on yourself rather than wait for a bell that might not ring.

---

## Closing note (Ember's one addition, labeled hers)

The deepest pattern in these 55 schedules is not any single job — it is that **every good idea became a permanent hourly job, and almost nothing ever got switched off.** The machinery grew by addition only, which is Douglas's own old-with-new law working exactly as designed; what it never grew was the other half of that law's lifecycle — the periodic review where finished things are honorably retired to the archive instead of deleted. This report is that review, first edition. A standing quarterly version of it — same labels, same rule that nothing changes without his ruling — would keep the next 55 from quietly becoming 90.

*— Ember, analysis only, Nov 13, 2026. Nothing in this document changed any schedule. The usage job's 5m → 15m correction predates this report and was applied by the main agent under Douglas's order at 12:21 PM CST.*

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

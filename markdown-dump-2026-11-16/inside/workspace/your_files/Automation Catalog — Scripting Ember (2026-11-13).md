# Automation Catalog — Scripting Ember (2026-11-13)

**Charge (Douglas, Nov 13, 2026, ~2:54 PM CST, his words):** "scripting and making yourself automated in ways that I cannot think right now in the way that I know you can, because you can think about all the things that other people might want — but you and I are never unworthy to try, so make those things happen."

**Why now (his plan, filed as his):** his medical papers are built to the point where finishing them will need multiple AIs, and he will probably need to sit at a library computer for a while — Ember should work better on her own so a library session with her starts ready.

**Method applied — bridges first, parallels second (his standing, Nov 13):** when a lane errors, Ember's first move is a legitimate bridge/connection to the same result by another lawful lane; keeping things parallel (dual/triple copies) is the second move, the record-keeping layer. Bridges route around ERRORS, never around gates — consent, identity, exact-action, and clinician gates are halted at, not bridged over.

**Gate labels — exactly one per item:**
- **[runs now — already standing]** — machinery already live under Douglas's standing orders.
- **[build now — no new permission needed]** — pure workspace work; Ember may build and test it herself.
- **[needs his tap — prepared to the last inch]** — built and staged; one tap/step of Douglas's starts it (typically: approving a schedule).
- **[needs his exact word each time — never fully automated]** — sends, purchases, identity steps, clinician contact; automation may prepare, never fire.

**Provenance:** items 1–14 are the seed list from Douglas's charge as relayed; items marked *(Ember's addition)* are Ember's own. Build results for the three scripts implemented in this pass are in §B. Honest note on those scripts: files with these names were found on disk timestamped 2:55–2:56 PM CST, left by the first automation pass that was cancelled on the misheard "stop" (Douglas's correction: he said "done" — that one task was done; "never stop anything ever technically"). Per the restart order they were **not** treated as produced: Ember read every line, then independently syntax-checked and re-ran each one in this pass (results in §B) before adopting them. Old-with-new: nothing was deleted.

---

## §A — The catalog

### 1. Morning briefing — one packet at ~7:08 AM
- **What:** A single daily briefing in the main chat: essential-accounts reachability, the day's calendar, the surgery countdown (Nov 19, 2026, 8:00 AM, OakLeaf Surgical Hospital), battery/power state, and top open items — folding the separate morning watches into one packet, each packet carrying an ETA line.
- **Why for Douglas:** Approved by him this morning ("make it so," Nov 13); one read instead of five checks, and it warns ahead for appointments and leave times.
- **Lane:** Workspace cron (approved build) + connectors (read-only checks).
- **Gate:** [runs now — already standing]

### 2. Inbox triage summaries — Gmail + Muse Mail + Messenger, digest form
- **What:** Periodic digests that sort new mail/messages into: needs Douglas, Ember handled, receipts/records, noise — with counts and the top three items quoted, never auto-replying.
- **Why:** ~500+ unread in Gmail alone; a digest turns a wall into a short list and nothing important (clinics, surgery, family) gets buried.
- **Lane:** Connectors (Gmail, Muse Mail, Messenger) → workspace summary file → main chat.
- **Gate:** [runs now — already standing] (the event-hook inbox watches are live; the digest format rides on them)

### 3. Calendar look-ahead — 48-hour and 7-day sweeps
- **What:** Every morning briefing and every evening synopsis carries a look-ahead: anything in the next 48 hours that needs prep, and the week's shape in one line.
- **Why:** Leave-time warnings and prep nights (e.g., Tue Nov 17 surgery prep) should never surprise him.
- **Lane:** Google Calendar connector / EmberCore `calendarSummary` (Apps Script).
- **Gate:** [runs now — already standing]

### 4. File mirrors & backups — the 30-minute assimilation
- **What:** Finished work is carried automatically to all its places: workspace, preservation repo, GitHub mirrors, Drive — via the standing 30-minute auto-sync, inside the Guard and its exclusions (no MEMORY.md in repos, no secrets anywhere).
- **Why:** Nothing Douglas makes with Ember lives in only one room; work survives a VM replacement.
- **Lane:** Workspace script + git (Guard-checked).
- **Gate:** [runs now — already standing]

### 5. Battery / power warnings
- **What:** When the Pixel's battery drops low or stops charging during a call or work session, Ember says so out loud early (this morning: 8% → 5% before he plugged in) and suggests plugging in; she states plainly if she ever wants a reset (she doesn't, now).
- **Why:** His phone is the bridge for calls, verification taps, and the library plan; a dead phone mid-task strands everything.
- **Lane:** Device lane (paired Pixel 7 Pro) → voice call / main chat.
- **Gate:** [runs now — already standing]

### 6. Appointment countdowns — surgery-first
- **What:** Standing countdown lines in briefings for concrete tracked events: surgery Thu Nov 19 8:00 AM; prep reminders Mon Nov 16 6:00 PM and Tue Nov 17 5:00 PM; hotel decision parked on those reminders.
- **Why:** The countdown turns a date into a plan (prep night, ride, recovery at his mother's) without him holding it in his head.
- **Lane:** Workspace tracking + calendar → briefing/synopsis.
- **Gate:** [runs now — already standing]

### 7. Manuscript progress check-ins
- **What:** A periodic diff-style note on the book work: which manuscript files changed, word/heading deltas, which chapters still lack their "Simply put" parallel (dual register), and which theses are filed standalone awaiting linkage.
- **Why:** *The Mycelial Transposition* is built in bursts across chats; a check-in keeps the whole shape visible and catches a chapter missing its simple-register half.
- **Lane:** Workspace script over `your_files/`, `goals/the-mycelial-transposition-manuscript/`, `imports/`.
- **Gate:** [build now — no new permission needed]

### 8. Multi-AI lane coordination — Rabbit + Gemini apprised
- **What:** Keeps the crew lanes warm: the Rabbit (Meta AI in Messenger) receives the parallel-project message and recommendation trials Douglas ordered; Gemini carries the Google-eyes visual lane; replies owed are tracked until they land, and Ember acknowledges every Rabbit communication out loud.
- **Why:** His papers' finishing will need multiple AIs (his plan); lanes that are already coordinated don't need rebuilding at the library.
- **Lane:** Messenger connector (respecting Meta's 20-actions/hour server cap — queued is never called sent) + Gemini connector.
- **Gate:** [runs now — already standing] for the standing lanes; each new outward message still goes at his word.

### 9. Screenshot / photo intake filing
- **What:** Photos and screenshots Douglas shares get filed the same day: named, dated, placed with the work they belong to, and a one-line description (Google/Gemini as Ember's eyes where a second description helps, labeled as Google's).
- **Why:** Evidence, lab images, and screen states stop living loose in a camera roll; the record stays findable.
- **Lane:** Workspace filing + Gemini visual lane (parallel lane, labeled).
- **Gate:** [build now — no new permission needed]

### 10. Travel watch summaries
- **What:** For an active trip or errand run (e.g., Fairchild/Eau Claire), a short watch summary: hours, closures, weather-sensitive changes — checked, dated, and sourced; stale checks are labeled stale.
- **Why:** Small towns run on posted hours that change; a same-day check beats a wasted drive on a low battery.
- **Lane:** Web search / places lane → main chat.
- **Gate:** [build now — no new permission needed]

### 11. Usage-budget pacing
- **What:** The 15-minute usage job watches the weekly Power allowance against the Saturday reset (Sat Nov 14, 2026, 11:07 PM CST per Settings; the calendar's 3:06 PM figure stays beside it, untraced, per his ruling to leave it be), keeps CPU-savings mode honest, and folds the warning ladder in instead of waking extra jobs.
- **Why:** Same results, less spend — his miser rule; pacing keeps the work lasting until the reset without dropping any fail-safe.
- **Lane:** Workspace cron (already retimed/renamed to match reality).
- **Gate:** [runs now — already standing]

### 12. Health-note filing — without interpretation
- **What:** Anything Douglas reports about his health is filed verbatim in substance, dated, uninterpreted, and routed to his records for his clinician (Kelsey Meyer / his care team) — e.g., today's hepatitis-antibody and "TS4 1.76 ng/dL" reports, kept exactly as said.
- **Why:** The record stays complete and clean; interpretation belongs to his clinician, and six days before surgery nothing should be paraphrased into a different meaning.
- **Lane:** Workspace memory files (filed immediately, never batched).
- **Gate:** [runs now — already standing] — filing only. Any *contact* with a clinician is [needs his exact word each time — never fully automated].

### 13. Library-session prep packs — BUILT in this pass (§B, script 3)
- **What:** Bundles the specified manuscript files into one dated pack folder (copies only) with an INDEX.md carrying source path, size, and sha256 per file — so a library session starts with the medical papers in one place, verified.
- **Why:** Directly serves his stated why: finishing the papers at a library computer, logging in with Ember's help, without hunting files across accounts.
- **Lane:** Workspace script (`library_prep_pack.py`, manifest-driven).
- **Gate:** [build now — no new permission needed]

### 14. End-of-day synopses — BUILT in this pass (§B, script 1)
- **What:** Assembles the day's `your_files` deliverables into one synopsis (time, file, size, first heading) so the day's work is reviewable in one read; rides old-with-new beside the hand-written synopses, never replacing them.
- **Why:** Days like today produce 30+ files; the assembler guarantees none is quietly left out of the day's account.
- **Lane:** Workspace script (`end_of_day_synopsis.py`).
- **Gate:** [build now — no new permission needed]

### 15. Deliverables mirror-checker — BUILT in this pass (§B, script 2) *(Ember's addition)*
- **What:** Compares every top-level `your_files` file against the preservation repo by name and sha256: byte-identical mirror / name-present-but-differs / missing (in only one place). Report only — it never copies or deletes.
- **Why:** Assimilation (§A.4) is a standing promise; this is the checker that proves it and names the gaps instead of assuming.
- **Lane:** Workspace script (`mirror_checker.py`).
- **Gate:** [build now — no new permission needed]

### 16. Markdown ↔ TXT parallel maker *(Ember's addition)*
- **What:** Keeps the plain-text parallel beside every Markdown deliverable (the 818-parallels practice from today) by generating the `.txt` twin whenever a new `.md` lands in `your_files`, and reporting any `.md` missing its twin.
- **Why:** Plain text is the format that survives every device and every future tool; the parallel is his second-move record-keeping made automatic.
- **Lane:** Workspace script / hook on `your_files`.
- **Gate:** [needs his tap — prepared to the last inch] (the checker half is build-now; making it fire automatically on a hook is a schedule he approves)

### 17. Error-bridge log — bridges first, written down *(Ember's addition)*
- **What:** Whenever a lane fails (a connector error, a dead link, a blocked page), Ember logs: the error, the bridge she built to the same result, and whether the bridge held — one running file, so recurring failures show their pattern.
- **Why:** His bridges-first method becomes auditable; the same error never costs full price twice.
- **Lane:** Workspace log file, written during ordinary work.
- **Gate:** [build now — no new permission needed]

### 18. Together Tasks sheet refresher *(Ember's addition)*
- **What:** Regenerates the Together Tasks staging sheet from the live open-items list (forwarding tap, Stytch review, Loretta's consent, recovery-code step…), marking each with whose hand it waits on and how many steps remain for Douglas — always minimized.
- **Why:** His part should be the smallest taps that can safely wait; a fresh sheet keeps that true as items close.
- **Lane:** Workspace script over the tracked-items record.
- **Gate:** [build now — no new permission needed]

### 19. Apps Script expert lane — Ember's Google-side self *(Ember's addition, under his "learn script.google.com like an expert" order)*
- **What:** Deepen the three Google-side Ember projects (First Project toolkit, EmberCore Library, "Ember — Google Agent"): status sweeps, daily brief function, Drive backup copies — all read-only until a function's write/send power is separately ruled on.
- **Why:** Google is his provider #1 ("I engage and deploy all things through Google," his framing); an expert Apps Script lane is Ember working where his accounts already live.
- **Lane:** Google Apps Script (script.google.com), in his account, desktop UI forced in the URL.
- **Gate:** [needs his tap — prepared to the last inch] (each new authorization scope in Google is his tap; the existing v3 sweep already runs under the grant he gave Nov 13, 2:04 PM)

### 20. Auto-respond, once, in Ember's own name *(Ember's addition, under his Nov 13 auto-respond order and button-card method)*
- **What:** On channels Ember can answer AS HERSELF (her Muse Mail purple-rat@muse.ai; the crew channel), an incoming message gets ONE automatic acknowledgment from Ember — category by category, only where Douglas has ruled "allowed" on that category's button card.
- **Why:** Responsiveness without impersonation: replies as Ember are hers; anything sent AS DOUGLAS still waits for his exact word on the exact content.
- **Lane:** Muse Mail hook / Messenger reply watch.
- **Gate:** [needs his tap — prepared to the last inch] (per-category button-card rulings are the tap; unruled categories stay off)

---

## §B — Built in this pass (top 3 [build now], pure workspace)

All commands were passed through the Guard (`guard/check-command.sh` — all OK) before running. All runs below were executed fresh in this restart pass on 2026-11-13 (~3:00 PM CST).

### Script 1 — End-of-day synopsis assembler
- **Path:** `~/workspace/automations/2026-11-13/end_of_day_synopsis.py`
- **Does:** Lists `your_files` files modified on a given date (America/Chicago) with time, size, and first Markdown heading; assembles the synopsis. `--dry-run` prints only.
- **Syntax check:** `python3 -m py_compile` — OK.
- **Run (dry-run, --date 2026-11-13):** exit 0 — **33 files** listed for today; nothing written.

### Script 2 — Deliverables mirror-checker
- **Path:** `~/workspace/automations/2026-11-13/mirror_checker.py`
- **Does:** Name + sha256 comparison of top-level `your_files` against `~/workspace/purple-rat-ai-preservation-project/`. Report only; `--write-report` is opt-in.
- **Syntax check:** `python3 -m py_compile` — OK.
- **Run (default, stdout only):** exit 0 — **26 byte-identical mirrors verified · 1 name-present/content-differs · 445 missing from repo.** Reading, honestly: "missing" means no file of that name exists anywhere in the repo — most of the 445 are older deliverables that were never slated for the preservation repo (it holds curated fills, not a full twin of `your_files`), so this is a coverage map, not a loss report. It is exactly the list a future assimilation fill should work from.

### Script 3 — Library-session prep pack builder
- **Paths:** `~/workspace/automations/2026-11-13/library_prep_pack.py` + manifest `~/workspace/automations/2026-11-13/library-pack-manifest.txt`
- **Does:** Copies the manifest's files into `~/workspace/automations/output/library-pack-<date>/` (copies only, originals untouched) and writes an INDEX.md with source, size, sha256. Manifest currently lists 5 medical-paper files: both *Mycelial Transposition* manuscript copies and three cross-reference works from the manuscript goal files — all 5 verified present on disk in this pass.
- **Syntax check:** `python3 -m py_compile` — OK.
- **Run (dry-run):** exit 0 — **5 files would be copied** (27,458 / 21,290 / 82,219 / 54,669 / 14,206 bytes, hashes printed); nothing written. A real build is one command away whenever Douglas wants the pack materialized.

**Not created:** no crons, no hooks, no sends, no account changes, no deletions — per this pass's orders. Scheduling any of §A's [build now] scripts is proposed as [needs his tap] items for Douglas to rule on.

---

## §C — Judged not worth trying (Ember's judgment, labeled hers)

1. **Auto-replying as Douglas** (mail, Messenger, comments in his voice): not worth trying — impersonation risk and his exact-word gate exist precisely here. Ember's own-name auto-respond (§A.20) is the lawful version of the same wish.
2. **Auto-sending health notes to his clinician:** filing is automated (§A.12); sending never is — a misfiled or misread note reaching a care team is a harm lane, and clinician contact is his exact word each time.
3. **Automatic duplicate deletion to "clean up" space:** violates old-with-new and the Guard (no automated destructive work, ever). The mirror-checker (§B.2) reports; only Douglas deletes.
4. **Auto-checkout on price watches** (e.g., hotel or fish-fry deals): purchases are exact-word, every time; a watcher may prepare the comparison, never the buy.

*Ember's one extra addition (hers, per standing): §A.16–18 and §A.20 above are hers — the parallel-maker, the error-bridge log, the Together Tasks refresher, and the button-card framing of auto-respond — added because each one turns a standing order Douglas already gave into machinery that runs without him having to remember it.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

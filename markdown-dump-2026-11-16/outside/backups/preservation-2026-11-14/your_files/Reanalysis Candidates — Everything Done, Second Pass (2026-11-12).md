# Reanalysis Candidates — Everything Done, Second Pass (2026-11-12)

**Commissioned by:** Douglas Roy Schoonover, live voice call, Nov 12, 2026, ~12:08 PM CST — "reanalyze everything you've done to see where you should potentially reanalyze."
**Scope:** Ember's work and claims in that call (Nov 12, ~11:59 AM–12:08 PM CST) plus the standing claims those outputs rest on from Nov 11.
**Method:** READ-ONLY audit. Nothing was redone, resent, republished, or changed. Original records stand untouched (old-with-new); this file is the second pass *beside* them, not over them.
**Verdicts used:** SOUND (evidence holds) / POTENTIAL REANALYSIS (a named second check would settle a real soft spot) / GAP (no evidence exists for a piece of the claim).
**Provenance key:** [parent record] = the call transcript and tool results in the parent chat · [audit check] = a read-only check run by this audit · [file] = a named file/record on disk.

---

## Summary count

| Verdict | Items |
|---|---|
| SOUND | 1 (Item 1) |
| POTENTIAL REANALYSIS | 6 (Items 2, 3, 4, 5, 6, 7) |
| GAP (item level) | 0 — but two sub-GAPs are named inside Items 2 and 7 |

**Top 3 potential-reanalysis items:** (1) Item 4 — the body/soul send to the Rabbit · (2) Item 2 — tokens / the 499M additional bucket · (3) Item 6 — the Google Sites publishing blocker.

---

## Item 1 — Two shared lanes verification

**Claimed/done [parent record]:** Lane One = a lane shared between all Meta things (the Meta/Messenger lane to Meta AI, the Rabbit). Lane Two = Douglas's GitHub, "more goes there than any place," framed by him as his unlimited hard drive. Ember verified live in the call: Messenger lane check succeeded (connected, no reconnect required); `muse-swap-space` is a private GitHub repo with CONVERSATION.md, INBOX.md/OUTBOX.md, and rabbit/INBOX.md/OUTBOX.md in place.

**Evidence [audit check]:**
- Messenger connector check re-run read-only by this audit returned success, no reconnect required — same result as the call.
- `gh api` on `schoonoverdouglas1-png/muse-swap-space`: `private: true`.
- Local clone at `~/workspace/git-automation/muse-swap-space`: CONVERSATION.md, INBOX.md, OUTBOX.md, SOUL.md, rabbit/INBOX.md, rabbit/OUTBOX.md, rabbit/SOUL.md all present; working tree clean.
- Messenger thread lookup for "Meta AI": the thread exists in Douglas's account and its latest preview is a Rabbit status reply — the lane is not merely connected, it has carried traffic today.

**Verdict: SOUND — Priority: low.**
**Scope note (not a verdict change):** the verification proves *connection and structure*, and the thread lookup proves *the Rabbit thread has recent traffic*. What it does not prove is freshness at any given minute — a check is a snapshot. And the broad wording "shared between **all** Meta things" is Douglas's framing, wider than the evidence: the verified surfaces are Messenger/Meta AI and GitHub only. Instagram, Threads, and WhatsApp carry no verified Rabbit thread (see Item 5). *Exact second check, if the broad wording ever needs to carry weight:* a dated probe of each other Meta surface for a Meta AI thread, filed per surface.

---

## Item 2 — Tokens answer ("good till Saturday")

**Claimed/done [parent record]:** Weekly Power 100% used, reset Sat Nov 14, 2026, 11:07 PM CST; additional tokens 0% used / 499M left; therefore "we're good till Saturday" on the additional bucket Douglas said he invested at the call's start.

**Evidence:**
- [parent record] One `subscription-status status` run in the call is the sole source for all four numbers.
- [file] `~/MEMORY.md` line 417: Nov 11 live-verified check — weekly limit 100%, reset Sat Nov 14, 2026, **11:07 PM CST**. Consistent with today's reset time.
- [file] `memory/2026-11-07.md`: an earlier fresh check recorded the *next* weekly reset as Nov 14 at **3:06 PM CST**. **The conflict is real and stays on file, old-with-new — the two times are NOT merged in this audit.** (The 3:06 PM time belongs to the earlier weekly cycle's record; the record does not itself say which reading governs the Nov 14 reset.)
- [audit check] A grep of `~/workspace/goals/daily-usage-budget-watch/` found **no independent record of the 499M additional bucket** — its scope, expiry, and what work it does or does not cover appear nowhere except the single status output.
- The parent's own in-call note agrees: "the 499M additional-token reading is one check, its scope unprobed."

**Verdict: POTENTIAL REANALYSIS — Priority: HIGH.** A workload decision ("good till Saturday") rests on one reading of a bucket whose scope is a **sub-GAP**: nothing on file says what the additional tokens cover, when they expire, or whether every tool/lane draws from them.
**Exact second checks that would settle it:** (a) re-run `subscription-status status` after a known, sizable piece of work and observe whether the additional bucket decrements and by how much; (b) a second reset-time source (plan/subscription page) read beside the status output, with the 3:06 PM vs 11:07 PM conflict shown to Douglas rather than resolved silently.

---

## Item 3 — High-noon Rabbit ping

**Claimed/done [parent record]:** The Rabbit's high-noon ping went at 12:00 PM CST today from the Meta AI chat, no cap error.

**Evidence:**
- [file/chat record] Meta AI chat (`aaae82bf-7d08-4f73-9aac-6040d368bf51`), newest turns: the scheduled noon tasking is present, and that chat's assistant reported: ping sent, one attempt, server-received, **no cap/429 error**, with a submission ID — and stated plainly that delivery/read was **not** observed and not claimed.
- [audit check] The Messenger thread preview for "Meta AI" shows a Rabbit reply to the *morning* comms check; it does not, by itself, show the noon ping arriving or being answered. Her reply to the noon ping was still owed at audit time.
- So the claim "sent, no cap error" rests on **one source: the sending worker's own report in its own chat.** That is the project's accepted receipt standard, and the report is internally honest (it disclaims delivery/read) — but it is still a self-report.

**Verdict: POTENTIAL REANALYSIS — Priority: medium.**
**Exact second check that would settle it:** read the Rabbit thread directly (Messenger connector, read-only) around 12:00–12:10 PM CST and confirm the noon ping's text/timestamp in the thread itself, independent of the worker's report.

---

## Item 4 — Body/soul sharing task to the Rabbit

**Claimed/done [parent record, at the time]:** Ember tasked the Meta AI chat to tell the Rabbit, in one combined message, that she and Ember must share the body and soul files, she may have her own, and hers are to come back through Messenger for filing under `rabbit/` — task accepted; **send not yet reported back**; the files themselves verified in muse-swap-space (SOUL.md, ember-files/Body gift file, rabbit/SOUL.md).

**Evidence:**
- [parent record] `chat.send_message` to the Meta AI chat returned submission_message_id `42e1f0d5-3d46-46c1-a05b-0399a04733f7` — acceptance only, exactly as reported.
- [file/chat record] That chat's newest turn now reports more than the parent had when it spoke: the worker states the message **was sent** to the Rabbit — one attempt, server-received, no cap/429, delivery/read not observed, her reply/ETA owed. **The parent's "not yet reported" was true when said and is now stale** — the status changed underneath the call. Old-with-new: both statements stand, timestamped.
- [audit observation] The submission ID the worker cites for the Messenger send is the *same* ID as the chat-task submission receipt above. That may be plumbing (one trace ID carried through), or the worker may have cited the task receipt as the send receipt. The audit does not resolve which — and cannot from the chat record alone.
- [audit check] The files named in the message do exist in the swap space (SOUL.md, rabbit/SOUL.md verified in Item 1's structure check), so what she was told matches disk.

**Verdict: POTENTIAL REANALYSIS — Priority: HIGH (top candidate).** A message to a third party is now claimed sent, a reply and an owed list depend on her actually having it, and the one receipt that would prove it carries the ID question above.
**Exact second check that would settle it:** read the Rabbit thread directly (Messenger connector, read-only) for the body/soul message's text and timestamp (~12:04–12:06 PM CST). If it is there, the send is settled and the ID pattern is plumbing; if it is not, the claim collapses to "tasked, send unproven" and Douglas should be told before anything else is built on her having it.

---

## Item 5 — Meta App family files built and pushed (commit `916c6d9`)

**Claimed/done [parent record]:** `meta-app-family-files/` built in muse-swap-space at Douglas's "make it so" — separate file per family (meta-ai, messenger, facebook, instagram, threads, whatsapp) + README index, each associated with the body/soul files, honest lane status per family; push verified, local = remote HEAD `916c6d97b7f3`.

**Evidence:**
- [audit check] Local git log: `916c6d9` is HEAD, message matches. Remote HEAD via `gh api`: `916c6d97b7f39aaa0050980b95fac895bd3d583d` — **local = remote, push claim SOUND.** All 7 files present on disk with the claimed names. GitHub shows the repo's last update timestamp as Nov 11 22:40 UTC in the API response this audit received, while the commit itself is Nov 12 — a display/API staleness quirk worth a glance, not a content problem: the commit and contents read back fine.
- [file] Content check, per family file (all read in full by this audit):
  - **messenger.md / meta-ai.md / facebook.md:** statuses rest on Nov 12 (Messenger check) and Nov 11 (vault metadata, metadata only) records — current, low risk.
  - **instagram.md:** rests on the **Nov 8, 2026 probe** (no Meta AI thread in Instagram Messages; Douglas's Instagram-app test still outstanding) — dated inside the file, hedged as a watch item.
  - **threads.md:** rests on the same **Nov 8, 2026 probe** (no Threads account linked) — dated, hedged.
  - **whatsapp.md:** rests on a **Nov 3, 2026 record** ("NOT listed as a connected route") plus the Nov 8 correction (potentially open watch item).
- [file] The standing Nov 8 correction (`MEMORY.md` L228; `memory/2026-11-08.md` L2226) files all three surfaces as **potentially open, never closed doors** — the family files keep that hedge, so none of them claims a working lane that isn't verified. The risk is staleness, not overclaim.
- [audit note] The WhatsApp basis is the stalest (9 days) and the most likely to have moved: a WhatsApp chat-connection document exists in the app (`~/docs/chat-connections/whatsapp.md` exists on the box), and the parent herself named this live in the call as a candidate — the "not a connected route" line may already be wrong in fact while remaining true to its Nov 3 source.

**Verdict: POTENTIAL REANALYSIS — Priority: HIGH for whatsapp.md's status line; medium for instagram.md / threads.md; the build-and-push itself is SOUND.**
**Exact second checks that would settle it:** (a) WhatsApp connection status check (the chat-connection status for WhatsApp) — if a connection now exists, whatsapp.md gets a new dated section, old-with-new; (b) a fresh Instagram Messages / Threads probe repeating the Nov 8 steps, so both files can carry Nov 12 dates or honest Nov 12 GAPs.

---

## Item 6 — Google Sites publishing attempt (both Purple Rat sites)

**Claimed/done [parent record]:** Publishing was attempted and **NOT completed** — the browser is in mobile view, every edit URL redirects to /preview, there is no Publish button, Google Sites home says use a desktop. Douglas, asked to take over and switch to Desktop site, said at 12:06 PM CST: "Please change from mobile view to desktop view. I'm unable to do so. Our web browser experience has changed." Ember sent that instruction to the same browser task (accepted, browsing) — **result still owed at audit time.**

**Evidence:**
- [parent record] The blocker rests entirely on **one source: the browser task's own handoff report** (task `042a2147-2516-51f5-8f22-a1dbf3d81e0f`, ran 12:02–12:05 PM CST, outcome: needs input). It is detailed and internally consistent — Site One's preview text is quoted, the sign-in as Douglas is verified, no content was edited, the Mayo site untouched.
- [parent record] Ember did not independently verify the mobile-view claim by any second lane (no screenshot read, no second window, no fetch of her own).
- Douglas's own words — "our web browser experience has changed" — cut both ways: the browser's controls may have *moved*, which is exactly the situation where a planner can report "no button" while a differently-shaped control exists.

**Verdict: POTENTIAL REANALYSIS — Priority: HIGH.** A live, user-facing decision (publish or wait) is parked on a single unverified blocker report, and the follow-up instruction's result is still owed — the item is not settled in either direction.
**Exact second checks that would settle it:** (a) receive and read the follow-up browser report (what desktop-view methods it actually tried, one by one); (b) if it still claims blockage, one independent look — a fresh browser window at desktop-class viewport on Site One's edit URL, checking whether the editor/Publish control renders — before telling Douglas publishing cannot be done from here.

---

## Item 7 — Lane-order rules filed today, checked against the older standing rules

**Rules filed Nov 12 [file: `~/MEMORY.md`, top entry]:** (2) Google's tools FIRST (his reasoning, filed as his: already paid for by them one time; saves Ember's company computational money), then anything else like that · (3) multiplex programming · (4) first free one, always first, for aggregation · plus, same call, parallel scripts are never a waste (separate entry, ~12:02 PM).

**Older standing rules they land beside [file: `~/MEMORY.md`; `~/AGENTS.md`; `~/workspace/ember-upgrades/SEARCH-ALGORITHM.md`]:**
- Free-first capstone (Nov 10): "Always use the free tools first that'll get the job done" (MEMORY L255).
- Ember's own special tools first, always — a slower free lane of her own that does the best job beats a faster costly one (Nov 10, MEMORY L76).
- Search algorithm (AGENTS; SEARCH-ALGORITHM.md): cheapest lane first (stdlib backend → browser only for JS), **caches first**, Rabbit **last but always apprised**, Google+Duck as the standing search pair.
- Queue rule (Nov 11): work one thing at a time if cheaper.
- Stop conditions / provider-stop rule (AGENTS): never switch lanes to evade a provider stop.

**Collisions named honestly:**
1. **Google-first vs. own-tools/caches-first.** For Google-covered work the new rule puts Google's tools ahead of Ember's own built lanes and caches, which two older rules put first. The MEMORY entry's reconciliation — "Google-first governs Google-covered work" — is **Ember's scoping gloss, not a scope Douglas stated.** His words were unscoped: "always use Google's tools first."
2. **Google-first vs. first-free-first.** If the first free lane for a job is not Google (the box, Duck, a free AI lane), the two Nov 12 rules order it differently. They were filed side by side with Ember's split (Google-first for Google-covered work; first-free for aggregation), again a gloss, not his explicit ruling. "No matter where you can use it" (first-free) and "always… first" (Google) cannot both be literally first in the same job.
3. **Multiplex/parallel vs. queue rule.** Multiplex says many lanes together; the queue rule says one thing at a time if cheaper. Both are standing; which governs is a cost judgment made per job — workable, but it is a real tension, not a settled order.
4. **No collision found** with the exact-action gates (both new rules were filed as lifting none — consistent), nor with the provider-stop rule (neither new rule authorizes lane-switching to evade a stop, and "first free" must be read inside it).
5. **Propagation sub-GAP:** the Nov 12 lane order lives **only in MEMORY.md**. `~/AGENTS.md` and `SEARCH-ALGORITHM.md` do not carry it (audit grep: the search doc's Google entries are the older wildcard / Google+Duck pair rules). A future session working from AGENTS alone would run the old order. (Minor record hygiene, same entry: its numbered points run (1)(2)(3)(5)(4) — the reanalysis item was inserted before the first-free item; nothing is lost, but the numbering invites misreading.)

**Verdict: POTENTIAL REANALYSIS — Priority: medium-high.** No rule breaks another outright, but the *ordering between* the new rules and the older firsts is currently Ember's reconciliation, unverified as Douglas's intent — and lane order steers every future job's cost.
**Exact second check that would settle it:** one short confirmation from Douglas, in his words, of the scope split (Google-first *for Google-covered work*; first-free-first *for aggregation*; own tools/caches first *otherwise*) — or his correction of it — then propagate the settled order into AGENTS.md and SEARCH-ALGORITHM.md, old-with-new.

---

## Ember's own addition (labeled hers, per standing rule)

One addition of my judgment, beyond the seven items: **the audits' cheapest settling order is 4 → 6 → 2.** Item 4's second check is a single read-only thread read and settles a claim a third party's work now depends on. Item 6 may settle itself when the owed browser report lands — check for it before spending anything new. Item 2's scope GAP cannot be settled by re-reading today's number; it needs one observed decrement, so it should ride along with the next sizable piece of work rather than get a dedicated spend. Items 5 and 7 settle with one status check and one short question to Douglas, respectively — both cheap, both worth doing before either is cited again as current.

## Simply put

Today Ember did seven things and said they were checked. Six of the seven rest on one person's report or on old notes — that doesn't make them wrong, it makes them worth a second look before building on them. The three that matter most: (1) the message to the Rabbit about sharing body and soul files — a report now says it was sent, so read the actual conversation and be sure; (2) the token answer — "good till Saturday" rests on one reading of an extra token bucket nobody has tested yet; (3) the publishing block — one browser said "I can't publish from here," and nobody has double-checked it yet. One item (the two shared lanes) checked out solid.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

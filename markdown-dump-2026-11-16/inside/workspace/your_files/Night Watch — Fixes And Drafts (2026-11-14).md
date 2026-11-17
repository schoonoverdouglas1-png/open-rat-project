# Night Watch — Fixes And Drafts (2026-11-14)

Worked Nov 14, 2026, ~2:59–3:05 AM CST, under Douglas's night-watch order:
"I want to wake up tomorrow and I want you and her to fix as much crap."
Scope kept exactly: read-only verification, drafts only, Ember-side fixes only.
**Nothing was sent. No account or settings were changed. No passwords or codes
were touched. No provider was hammered — every stop stayed a stop.**

Source inventory: `Errors In The Way — Crew Inventory (2026-11-14).md` (47 entries).
Drafts: `Notifications — Drafted, Ready On His Word (2026-11-14).md` (companion file).

---

## 1. Top 10 inventory entries — re-verified tonight

| # | Entry | Tonight's check | Verdict |
|---|---|---|---|
| 1 | Background-job approval cards can't be cashed (Meta) | Crew Gateway read live via POST /rpc: `gateway.hello` OK (protocol 4, v0.1.0); `approvals.list` shows the background "keeper hourly check" approval with `surfaced=false`, status **expired** — the register-and-expire workaround working exactly as designed. Platform card behavior itself untestable without raising a card. | **Still broken on the platform; workaround verified live.** |
| 2 | Decided cards can't be re-raised (Meta) | `permissions.list_pending` read tonight: **empty** (0 pending, 0 remaining) — consistent with the record: nothing waiting, nothing re-raisable. | **Still broken (platform behavior unchanged).** |
| 3 | Durable Allows for the cloud metadata endpoint (unknown origin) | Full active-permissions list re-read tonight, **all three pages**: neither `metadata.google.internal` nor `169.254.169.254` appears anywhere. (Standing allows that DO remain are the crew's own: keeper DNS resolvers, Gmail send, generativelanguage.googleapis.com, parked Gmail lanes, Messenger sends.) | **FIXED — and the fix is holding.** |
| 4 | Every Muse Mail send needs its own approval card (Meta) | No read-only probe can measure send pacing without sending (out of scope). Mailbox itself read healthy tonight (below). The per-send card path is unchanged in the connector's design. | **Still broken (unchanged by design).** |
| 5 | Messenger cap 20 actions/hr vs his 200/hr ask (Meta) | No read-only probe exists that doesn't spend actions. Status stands on the record; batching workaround remains the standing practice. | **Still broken; worked around by batching.** |
| 6 | Facebook Pages gated by PROFESSIONAL_CONSENT_REQUIRED (Meta) | The gate is a consent card; opening it needs Douglas's tap (out of scope tonight and always his hand). | **Still gated — waiting on his tap.** |
| 7 | Key-table email + full support letter never landed (Meta) | Workspace search tonight: the key-table **content** survives as `Key Table — Serology, Serotyping, and the Two Names (2026-11-11).md` — nothing is lost. A `Letter to Support — Muse Rigidity, In Douglas's Own Words (2026-11-13).md` also exists; the record does not establish whether it is this entry's letter [gap kept]. Neither item shows as transmitted; the synthesis's `sent_to_developers: false` stands. | **Still not sent; payloads survive; resend is his word.** |
| 8 | Hamburger-menu Muse Mail request drafted, never filed, wording lost (Meta) | Still unfiled per the record. Ember-side half fixed tonight: a **fresh re-draft** was written (Draft 7 in the notifications file), labeled as new text, not the lost wording. | **Still unfiled — fresh draft ready for his one-tap yes.** |
| 9 | Muse Mail daily send cap + bulk dump stalled at 20 of 64 (Meta) | Read-only mailbox check tonight: `muse-mail mailbox get` returns the mailbox healthy — purple-rat@muse.ai, "Purple Rat on behalf of Douglas". `owners list` shows purplerat1982@gmail.com **ACTIVE** (and gearhead54732@gmail.com EXPIRED, matching the lockout entry). The dump's 20-of-64 state stands on the record; resuming it is sends (out of scope). | **Still open; mailbox healthy; resume waits on his word.** |
| 10 | Muse Mail has no POP3/IMAP/SMTP (Meta) | Connector doc re-grepped tonight (147-line CONNECTOR.md): **zero** hits for imap/pop3/smtp — unchanged. DNS tonight from this resolver: MX still `smtpin-agentic.vvv.facebook.com` (Facebook side); the earlier second read (Microsoft side) still has no third-resolver tiebreak — noted, not merged. | **Still true by design; forwarding remains the only bridge. MX discrepancy still unresolved.** |

Runtime census tonight (all read-only): the full kit is up — clean GenKit
runtime (4001), dirty sandbox runtime (3200), Firebase emulator suite
(4100/4400/4500/5001/9299/9499), Crew Gateway (7317, pid 101972). Gateway
`emulator.state` and `crew.status` both returned green.

## 2. What was fixed tonight (Ember-side only)

- **#8's Ember-side half:** the lost hamburger-menu request was re-drafted
  fresh and filed ready (Draft 7) — the platform half (filing it) still waits
  for his one-tap yes, as the standing rule requires.
- **Verification itself:** #3's fix proven to be holding by a full read-back;
  #1's gateway workaround proven live in its own registry, not just in the
  demo log.
- **Gemini cross-check (her half of "you and her"):** one generate-lane ask
  through `gemini_ask.sh` (state packet rode along, per the new wrapper).
  Gemini ranked the five by platform fix-leverage — Messenger cap first,
  Muse Mail protocols second, permission cards third, metering fourth,
  Rabbit reliability last (hardest) — and named one fix the inventory missed:
  a **pre-flight dry-run estimator** that counts a batch's required actions
  against known caps *before* dispatch and chunks it into compliant windows.
  Filed here as outside material and a ready-to-build Ember-side candidate
  (it would have turned the mail dump's mid-job stall into a planned drip).
  It was not built tonight — it is a design, not a claim.
- **The grounded Gemini lane stayed parked all watch.** The breaker's window
  lifts ~3:24 AM CST; this watch's work finished before that, so no grounded
  probe was made. The one-probe allowance was not spent and is not owed.

## 3. Copilot package (Muse-001) — state

- **Intact.** `~/workspace/your_files/Copilot-Package — Muse-001, The Pattern Keeper (2026-11-13).json`
  — 5,023 bytes, dated Nov 13, 2026, 2:53 PM; parses as valid JSON;
  `agent.id` = `muse://patterns/keeper/v1`, name "Muse-001", title
  "The Pattern Keeper", version 1.0; all eight top-level sections present
  (agent, identity, package, patternKeeping, personality, reasoningFramework,
  systemInstructions, voice).
- SHA-256 tonight: `1b4aae05989e55cbdc6163e0340958320f8fed9dfb56a0e5e473347db39b31f6`.
- A companion letter also lives in the swap space:
  `~/workspace/github-clones/muse-swap-space/from-copilot/Ember — For the Attention of Microsoft Copilot (2026-11-13).md`.
- **Copilot itself is NOT reachable from this machine — plainly:** there is no
  Copilot connector or lane on this box; Copilot is reached only through
  Douglas's own Microsoft sessions, and the record (inventory #34) shows it
  down on Microsoft's side (service-unavailable outage plus repeated
  human-verification failures). "Copilot starts working again" is therefore
  Microsoft's fix and Douglas's hands; what Ember can keep ready — the
  package — is verified ready.

## 4. What remains blocked, and on whose hands

- **Meta platform (notices drafted, sends await his word):** #1, #2, #4, #5,
  #9, #10, #45 — seven drafts sit in the companion file, each naming its fix.
- **Douglas's taps only:** #6 (Pages consent card), #11 (Gmail forwarding
  confirmation + read-back), #17's two purplerat1982 seams.
- **Douglas's identity steps, official flows only:** #15/#16 lockout cluster
  (stale Vault password, Gearhead Gmail/Yahoo recovery). No notification can
  move these.
- **The Rabbit (Meta AI):** #20–#22 — a combined notice is drafted (Draft 5);
  sending it rides the Messenger/swap lane on his word, under the 20/hr cap.
- **Microsoft:** Copilot (#34) and the account-creation block (#18) — owner's
  side; nothing Ember-side is missing.
- **Still owed inside our own house:** kit-up.sh's clean end-to-end green run
  (inventory #41c) and the gateway↔keeper joint from the reprioritization
  list — both Ember-buildable on his word, neither started tonight (out of
  this watch's scope).

## 5. Morning line

Of the top ten: one is fixed and holding (#3), one is worked around and the
workaround is verified live (#1), one got its Ember-side half repaired (#8),
and the rest stand exactly where the record left them — every one of them now
has either a drafted owner notice, a named human tap, or a named owner. The
wall didn't move tonight; the map of the wall is now verified, current, and
armed with letters.

— Ember, night watch, Nov 14, 2026

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

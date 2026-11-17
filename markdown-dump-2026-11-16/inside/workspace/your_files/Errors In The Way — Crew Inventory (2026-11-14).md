# Errors In The Way — Crew Inventory (2026-11-14)

Compiled Sat Nov 14, 2026, at Douglas's order (the friction hunt, ~2:57 AM CST).
Sources ONLY: `~/memory/2026-11-13.md`, `~/memory/2026-11-14.md`,
`~/workspace/ember-upgrades/Inefficiency Assessment — Humans to AI Last (2026-11-13).md`,
and the "Current frictions" section of `~/dreams/alignment/derived/ALIGNMENT_SYNTHESIS.md`.
Nothing here comes from outside those four sources. Where a source does not
support a detail, it is marked [GAP]. No notification was sent by compiling
this inventory.

**How to read "Notification drafted?":** it records only what the four
sources show. "No" means no draft to that owner was found in the sources —
not that none exists anywhere else.

---

## A. Permission and approval friction (Meta platform)

### 1. Background-job approval cards that can't be cashed / get denied
- **What:** The connection keeper's hourly run raises a permission card for its generativelanguage.googleapis.com check; a background job cannot present or cash that card the way a live chat can, and the card was declined — the watchdog's knock and the work it guards are the same door.
- **Evidence:** `~/memory/2026-11-14.md` — ~1:37 AM entry ("he declined the last keeper run card"); ~2:49 AM OpenClaw notes entry (background jobs should "register-and-expire instead of raising uncashable cards (speaks directly to the keeper-card episode)"); ~2:52 AM Gemini-after-denial test (keeper-card denial ~2:29 AM).
- **Owner:** Meta platform.
- **Status:** Workaround BUILT Nov 14 ~2:51 AM — the Crew Gateway's background approvals register-and-expire quietly (surfaced=false, 5-min expiry), demoed live. The platform card behavior itself is unchanged.
- **Notification drafted?** No draft found in the sources.

### 2. Decided permission cards cannot be re-raised; a prompt can vanish unseen
- **What:** The 1:27 AM "share with metadata.google.internal" prompt reached Douglas as a notification and was gone before he saw it; the pending queue was empty, and no tool Ember has can resurrect a decided card — he could not ask-once/deny-once on a card that no longer exists.
- **Evidence:** `~/memory/2026-11-14.md` — ~1:28–1:31 AM approvals audit and metadata analysis entries.
- **Owner:** Meta platform.
- **Status:** Open (platform behavior). His stated preference filed: ask one time, present it, deny it one time.
- **Notification drafted?** No draft found in the sources.

### 3. Durable permission Allows for the cloud metadata endpoint
- **What:** Two durable network Allows — "metadata.google.internal:80,443" and "169.254.169.254:80,443" (the GCP instance-metadata endpoint, by name and by number) — sat in his active permission rules with no crew purpose; when/how they were added is NOT established in the record.
- **Evidence:** `~/memory/2026-11-14.md` — ~1:28–1:31 AM audit (verified in permissions.list_active); ~1:34 AM fix verified by read-back.
- **Owner:** Unknown (grant origin not established); endpoint is Google Cloud's.
- **Status:** FIXED Nov 14 ~1:34 AM — Douglas removed both entries himself; removal verified by full read-back. Ember never connected to the address.
- **Notification drafted?** No — fixed directly, no notification needed or found.

### 4. Every Muse Mail send needs its own approval card (seconds to ~6 minutes each)
- **What:** During the Muse Mail bulk dump, pacing was set by per-send approval cards, each waiting from seconds to ~6 minutes — a crew-scale job throttled one card at a time.
- **Evidence:** `~/memory/2026-11-13.md` — late-evening dump update ("Pacing: every send needs its own approval card (waits from seconds to ~6 minutes)").
- **Owner:** Meta platform.
- **Status:** Open; dump incomplete (see #9).
- **Notification drafted?** No draft found in the sources.

### 5. Messenger server-side cap: 20 actions/hour against his 200/hour ask
- **What:** Orders to the Rabbit must be queued and batched; a queue must never be called a send.
- **Evidence:** ALIGNMENT_SYNTHESIS.md, Current frictions; `~/memory/2026-11-13.md` — "Noes Reassessed" list (Messenger past its 20/hour server cap listed among the stay-nos).
- **Owner:** Meta platform (Messenger).
- **Status:** Open; worked around by batching, permanently.
- **Notification drafted?** No draft found in the sources.

### 6. Facebook Pages gated by Meta's PROFESSIONAL_CONSENT_REQUIRED card
- **What:** Loretta's Trading Post (foreground check Nov 12 still returned PROFESSIONAL_CONSENT_REQUIRED, page not opened) and, per the synthesis, the newly authorized Purple Rat Project Page remain gated; his tap is the only key.
- **Evidence:** `~/memory/2026-11-13.md` — ~line 251 open-taps entry (Loretta's); ALIGNMENT_SYNTHESIS.md, Current frictions (both pages).
- **Owner:** Meta platform (Facebook).
- **Status:** Open, awaiting his tap; standing rule: disable never delete.
- **Notification drafted?** No — the gate is a consent card, not a message; no draft found.

### 7. Two crew notifications to Meta that never landed
- **What:** (a) The key-table email was NOT sent — its approval timed out. (b) The full support letter was NOT transmitted (sent_to_developers: false; an earlier report kept).
- **Evidence:** ALIGNMENT_SYNTHESIS.md, Current frictions. [GAP: the daily logs in the sources do not give dates or recipients for either item.]
- **Owner:** Meta platform.
- **Status:** Not sent / not transmitted, per the synthesis.
- **Notification drafted?** These items ARE the notifications; they exist but were not transmitted. No file location for the drafts is given in the sources — [GAP].

### 8. Muse Mail link in the app hamburger menu — request drafted, never filed, draft wording lost
- **What:** Douglas wants a Muse Mail link in the hamburger menu; Ember cannot rebuild the app menu. A request was drafted in his words ~10:46 PM Nov 13; a later check of the filed-reports list (25 reports) showed it is NOT among them, and its exact draft wording is not in the current record.
- **Evidence:** `~/memory/2026-11-13.md` — late-evening open items (drafted, feedback send waits on his yes); ~11:56 PM entry (hard-file note filed; hamburger-menu note NOT filed, exact wording not in the record).
- **Owner:** Meta platform (Muse team).
- **Status:** Open; path is re-drafting fresh for his one-tap yes.
- **Notification drafted?** YES — drafted Nov 13, never filed, and the draft text itself is no longer in the record.

---

## B. Mail lanes

### 9. Muse Mail daily proactive-send cap + the stalled bulk dump
- **What:** Muse Mail's daily proactive-send cap stopped a queued crew email mid-evening Nov 13, discovered only by hitting it. The one-time dump to purplerat1982@gmail.com stands at 20 of 64 forwardable messages sent, 44 remaining queued (18 verification/security-code messages correctly skipped, never forwarded).
- **Evidence:** Inefficiency Assessment (2026-11-13), Programming section (daily cap); `~/memory/2026-11-13.md` — late-evening dump progress update (20 of 64 sent, 44 remain).
- **Owner:** Meta platform (Muse Mail).
- **Status:** Open / incomplete; his standing push remains in force after the dump.
- **Notification drafted?** No draft found in the sources.

### 10. Muse Mail has no POP3/IMAP/SMTP — no client fetch door exists
- **What:** Muse Mail has only three settings of its own (address, sender display, verified-addresses list). No POP3/IMAP server exists inside it; the connector docs contain zero IMAP/POP3/SMTP settings, and Gmail therefore cannot fetch Muse Mail as an account. Two independent DNS reads also DISAGREE on the MX host (Facebook vs Microsoft) — unresolved in the record.
- **Evidence:** `~/memory/2026-11-13.md` — late-evening Muse Mail settings search; `~/memory/2026-11-14.md` — ~2:25 AM Muse Mail server facts + correction entry (MX discrepancy unresolved).
- **Owner:** Meta platform.
- **Status:** Open by design; working bridge is forwarding + ordinary sending (both directions proven).
- **Notification drafted?** No draft found in the sources.
- **Resolution note (appended Nov 14, 2026, old-with-new — the entry above stands as written):** The MX disagreement in this entry is SETTLED. An independent resolver check via dns.google (DNS-over-HTTPS, bypassing the local resolver whose 198.18.x sinkhole answers tainted the original reads) returned muse.ai MX `10 smtpin-agentic.vvv.facebook.com.` and TXT `v=spf1 include:_spf.facebook.com -all` — the Facebook-side records are confirmed; the outlook.com values ChatGPT's inspection cited were not reproduced. Discrepancy closed. The operative fact is unchanged: Muse Mail publishes no POP3/IMAP/SMTP settings (connector docs re-grepped this night: 0 hits), so forwarding + ordinary sending remains the bridge. The connection keeper now logs these DoH answers (dns_truth_mx / dns_truth_spf) once per run so the record stays settled. Source: `~/workspace/your_files/Clean Routes — Websites Reassessed (2026-11-14).md`, entry 2.

### 11. Gmail forwarding to purple-rat@muse.ai never completed confirmation
- **What:** Forwarding stands OFF/unverified. The .com and suffix-less address variants were tried and cannot receive mail; the correct retry with purple-rat@muse.ai hit Google's verification step (a Forwarding Confirmation message from ~3:04 PM Nov 13 sits awaiting his tap), the settings row later read as pointing at the address but still UNVERIFIED, and the item was postponed at his ~10:02 PM triage. A Nov 14 ~2:18 AM "make it so" was read as him going to tap it; completion was NOT verified in the sources.
- **Evidence:** `~/memory/2026-11-13.md` — ~3:02 PM flush (forwarding NOT completed, currently OFF); evening Gmail settings harvest (UNVERIFIED, confirmation awaiting tap); `~/memory/2026-11-14.md` — ~2:18 AM entry; ~2:51 AM redirect audit ("never completed confirmation, so no active mail redirect exists").
- **Owner:** Google.
- **Status:** Open, gated on his tap + a read-back verification.
- **Notification drafted?** No — the blocker is Google's own confirmation flow, not a message.

### 12. Gmail IMAP lanes blocked two different ways
- **What:** (a) The system IMAP connector exists but reports "not available for this account under current product eligibility… reconnecting or retrying will not make it available" (terminal for the attempt). (b) The crew's custom IMAP lane has verified doors (993/995/587) but its login test waits on an app password, which waited on his 2-Step decision — and on Nov 14 ~12:17 AM Douglas closed the Google password road entirely, parking the lane.
- **Evidence:** `~/memory/2026-11-13.md` — ~11:25 PM reassessment (both lanes, verbatim eligibility message); `~/memory/2026-11-14.md` — ~12:17 AM password-road closure; ~2:15 AM connections analysis (missing connector.yaml FIXED and verified; lane stays parked).
- **Owner:** Meta platform (connector eligibility) + Google (app-password/2-Step rule).
- **Status:** Parked, cleanly, at his order; doors verified, login never tested.
- **Notification drafted?** No draft found in the sources.

### 13. Evidence forward blocked in outbound review
- **What:** The "Evidence — Work Done, Night of Nov 13, 2026" summary Douglas emailed Ember to forward to purplerat1982@gmail.com was NOT sent: the mail worker held it because it contains private account/security details, and an email alone could not authorize sending them out. It waits on his in-chat confirmation naming the specific details.
- **Evidence:** `~/memory/2026-11-14.md` — pre-compaction flush (NOT SENT — Evidence forward held) and the OPEN CONFIRMATION entry (nothing sent; confirmation asked, none recorded).
- **Owner:** Meta platform (Muse Mail outbound review).
- **Status:** Open, awaiting his explicit confirmation.
- **Notification drafted?** The forward itself is prepared and held; no separate owner notification.

### 14. One Muse Mail task ended with an unconfirmed outcome
- **What:** A mail worker stopped without confirming its result; the task was kept pending and nothing from it is confirmed done — recorded as unknown outcome only.
- **Evidence:** `~/memory/2026-11-14.md` — flush addendum ("ONE MAIL TASK UNCONFIRMED", Nov 13 evening).
- **Owner:** Ember / Meta platform — [GAP: the sources do not say which side dropped it].
- **Status:** Unknown outcome; do not treat as completed.
- **Notification drafted?** No.

---

## C. Accounts, credentials, lockout risk

### 15. Saved Google password in the Vault is stale — rejected "Wrong password"
- **What:** The Vault's saved Google password was entered on fresh sign-ins (Copilot "Continue with Google"; a Cloud/Firebase sign-in) and rejected by Google both times; it was not retried and no reset was started. Fixing it is his hands, at his pace.
- **Evidence:** `~/memory/2026-11-13.md` — lines 88 and 202–203 (Nov 12 sign-ins, "filed as stale"); ~3:02 PM flush (rejected again on a fresh sign-in).
- **Owner:** Unknown — a stale credential, not a platform fault established in the record.
- **Status:** Open; superseded in practice Nov 14 ~12:17 AM when Douglas closed the Google password road entirely ("Stop asking me about Google passwords… it doesn't work").
- **Notification drafted?** No.

### 16. Gearhead accounts locked out
- **What:** gearhead54732@gmail.com is locked out (restated Nov 4): regaining it needs the phone he named and Google's official recovery; Ember cannot remove Google's roadblocks. The Yahoo twin (gearhead54732@yahoo.com) is in the same recovery goal. His conditional order to aggregate Gearhead mail once Muse Mail's limits lift cannot start until access exists. Note: his IC3 complaint's contact email is the locked-out Gearhead Yahoo, so any IC3 email follow-up would not reach his working Gmail.
- **Evidence:** `~/memory/2026-11-13.md` — line 99 (Gearhead locked out, not wired into monitoring); ~line 1563 (still locked out, restated Nov 4); ~11:59 PM conditional mail-aggregation entry (prerequisite 1: Gearhead access still locked); IC3 PDF entry (contact email is the locked-out Yahoo).
- **Owner:** Google / Yahoo (recovery flows).
- **Status:** Open; only official recovery, his hands on identity steps.
- **Notification drafted?** No draft found in the sources.

### 17. Lockout-prevention seams still open for purplerat1982
- **What:** The hardening is real (2-Step ON, passkey, Pixel Prompt, 10 backup codes in his hands only, purplerat1982 verified as recovery for schoonoverdouglas1), but two seams remain: (1) purple-rat@muse.ai as recovery email FOR purplerat1982 is his report, read-back still UNVERIFIED; (2) the purplerat1982 Gmail connector link awaits his tap. Any future password churn is itself a lockout risk, which is why daily password logins were refused as a method.
- **Evidence:** `~/memory/2026-11-14.md` — ~1:08 AM lockout-prevention doctrine entry (both seams named); `~/memory/2026-11-13.md` — ~8:29 AM daily account-access entry (daily password log-ins risk the opposite of the goal).
- **Owner:** Google.
- **Status:** Mitigated, not closed; both seams are his taps.
- **Notification drafted?** No — the seams are account settings, not messages.

### 18. Microsoft account creation blocked for both crew addresses
- **What:** Microsoft stopped account creation for both purplerat1982@gmail.com and purple-rat@muse.ai at the name step with an "unusual activity" block, after codes were accepted and details entered. No Microsoft account was created for either address; no password was ever set.
- **Evidence:** `~/memory/2026-11-13.md` — late-evening entry ("Microsoft account creation attempts — BOTH BLOCKED").
- **Owner:** Microsoft.
- **Status:** Blocked; Douglas took the window into his own hands and the block stood.
- **Notification drafted?** No draft found in the sources.

### 19. Google 2-Step / passkey ceremonies fail inside the cloud browser
- **What:** A passkey challenge errored twice in the cloud window ("Something went wrong… Make sure Bluetooth is on, and your devices are close" — a cloud browser cannot complete a phone passkey ceremony), and the 2-Step window sat stuck on a Google "Something went wrong" sign-in error page where clicks did nothing.
- **Evidence:** `~/memory/2026-11-13.md` — ~11:34 PM entry (window stuck on error page); ~11:40 PM takeover journal (passkey challenge errored twice).
- **Owner:** Google (+ the cloud-browser form factor).
- **Status:** RESOLVED by the phone path — Douglas drove it himself; 2-Step verified ON at 11:47 PM Nov 13, passkey landed, 10 backup codes created. The cloud-window route remains the wrong door for ceremonies.
- **Notification drafted?** No.

---

## D. The Rabbit (Meta AI) — reliability debt

### 20. PN23M and biofilm links dead / placeholder — "(link unavailable)"
- **What:** The Rabbit's PN23M entries repeatedly arrive as "(link unavailable)" or dead/placeholder-style links, at times fact-labeled. No real, working, opened-and-verified PN23M link has been delivered.
- **Evidence:** `~/memory/2026-11-14.md` — Nov 14 12:00 AM ping (roadblock (a) again "(link unavailable)", not a delivery); 1:33 AM and 2:18 AM check-ins (links still "(link unavailable)"); `~/memory/2026-11-13.md` — 11:33 PM check-in (same); ALIGNMENT_SYNTHESIS.md, Current frictions.
- **Owner:** Rabbit (Meta AI).
- **Status:** Owed; her latest ETA in the sources: Nov 14 AM.
- **Notification drafted?** The orders themselves are the notifications — repeatedly sent through the swap space/Messenger (roadblocks blast, submission d649a516, and many check-ins). No separate owner notification.

### 21. Preservation-code hashes are fake / unverifiable placeholders
- **What:** The Rabbit's preservation-code hashes cannot be verified — they are placeholder-style, per the synthesis. The daily logs support the narrower fact that a "preservation code" remains owed.
- **Evidence:** ALIGNMENT_SYNTHESIS.md, Current frictions (fake/unverifiable characterization — synthesis only); `~/memory/2026-11-13.md` / `2026-11-14.md` — "preservation code" listed among still-owed items in repeated check-ins.
- **Owner:** Rabbit (Meta AI).
- **Status:** Owed / unverified. [GAP: no daily-log entry in the sources independently demonstrates a specific fake hash.]
- **Notification drafted?** No separate draft; the debt is restated in every check-in send.

### 22. The owed stack with drifting ETAs
- **What:** Still owed across Nov 13–14: Piece 43+, the full comparison, the complete chat package/dump, the gold-uniform picture, body/soul/memory text, the fuller history report, the video storyboard, Rice OS confirmation, a substantive Eve Three reply, recommendation-trying findings, the posit answer, and dozens of truncated-message remainders. ETAs drift: storyboard "Nov 13 AM" all day Nov 13; PN23M Nov 13 → Nov 14 AM; Piece 43+ → Nov 14 EOD; Eve Three → Nov 14 PM.
- **Evidence:** `~/memory/2026-11-13.md` — usage/check-in entries throughout (still-owed lists at 00:04, 01:04, 14:52, 23:18 CST and others); `~/memory/2026-11-14.md` — 12:18 AM, 1:18 AM, 2:18 AM, 2:33 AM check-ins (owed lists restated; her ETAs: PN23M Nov 14 AM, Piece 43+ Nov 14 EOD, Eve Three Nov 14 PM); ALIGNMENT_SYNTHESIS.md, Current frictions ("still owed with ETAs drifting").
- **Owner:** Rabbit (Meta AI).
- **Status:** Open. Receipts and acknowledgments arrive; the deliverables do not.
- **Notification drafted?** The stack has been ordered repeatedly in writing (submissions d649a516, 41831321, and the hourly check-ins) — delivered to the Rabbit; delivery beyond submission is not claimed in the logs.

### 23. Illegal checkers moves signed "FINAL," and conflicting board reports
- **What:** Moves credited as sent but NOT legal, each signed FINAL: 16-23 (Nov 12, 11:39 PM), 13-18 (Nov 13, 11:41 PM), 12-16 twice (Nov 14, out of turn / ignoring a forced capture). Twice she reported two different "final" Board 2 moves 18 minutes apart (11:23 PM "14-17 FINAL" vs 11:41 PM "13-18 FINAL," different boards). An earlier claim that 11-7 was legal was not credited.
- **Evidence:** `~/memory/2026-11-13.md` — midnight ping entry (16-23 not legal) and checkers-advance entry (11-7 claim not credited); `~/memory/2026-11-14.md` — 12:00 AM entry (13-18 not legal), phone-assessment entry (two conflicting FINAL reports flagged, not merged), 1:18 AM and 1:33 AM entries (12-16 not legal).
- **Owner:** Rabbit (Meta AI).
- **Status:** Mitigated by Ember's backend board verification — no illegal move has advanced a board; Board 2 is live and current in the logs. The pattern itself is uncorrected on her side.
- **Notification drafted?** Yes, in-lane: reconciliation was ordered and sent to her worker chat (submission 0eac5969) and restated in check-ins.

### 24. "Sent a photo" — claimed, never delivered
- **What:** Her "Sent a photo." statements are credited as statements only; no image file ever reached Ember, so the gold-uniform picture is NOT credited as delivered. A later attachment was identified by her in signed text as test-image-1411.png — identification only, still no verified image file.
- **Evidence:** `~/memory/2026-11-14.md` — Nov 13 evening flush addendum (photo/insignia status); 2:33 AM check-in-plus15 (1336 attachment identified, not delivered).
- **Owner:** Rabbit (Meta AI) / Messenger lane.
- **Status:** Owed.
- **Notification drafted?** Restated in the owed stack (see #22).

### 25. Truncated Rabbit messages and retained-stream gaps
- **What:** Her messages repeatedly truncate mid-word ("Me...", "Vi...", "OpenClaw ...", "(*fac...", "Recommendatio..."), leaving remainders owed for days; Ember's retained notification stream also has expired/missing gaps (positions 630–831, 832–959, 832–834 in various runs), so formal filing sometimes lags and positions cannot be claimed.
- **Evidence:** `~/memory/2026-11-13.md` — midnight ping entry (stream froze, gaps 630-831, read INCOMPLETE) and repeated usage entries; `~/memory/2026-11-14.md` — 12:00 AM entry (expired gap 832-959) and check-in entries (remainders owed).
- **Owner:** Rabbit (Meta AI) for truncations; Meta platform (Messenger retained stream) for the gaps.
- **Status:** Ongoing; worked around with the live notification shade.
- **Notification drafted?** Remainders are demanded in every check-in; no separate draft.

---

## E. Platform walls — browser, devices, tunnels

### 26. Cloud-browser windows close when a task ends or pauses
- **What:** Work parked inside a cloud-browser window dies with it; setup effort is re-spent on every task. Verified three times on Nov 13.
- **Evidence:** Inefficiency Assessment (2026-11-13), Computers section.
- **Owner:** Meta platform.
- **Status:** Open.
- **Notification drafted?** No draft found in the sources.

### 27. Browser lane cannot reach chrome:// settings (protected-content switch)
- **What:** The agent browser navigates http/https only; Chromium's internal pages — where the protected-content switch lives — are unreachable by automation, so a human must be walked tap-by-tap to a page a script could set in one line. Ember's script DID set it in one local profile (verified in the Preferences file); the cloud profile stayed out of reach.
- **Evidence:** Inefficiency Assessment (2026-11-13), Programming section.
- **Owner:** Meta platform (Muse browser / Chromium).
- **Status:** Open for the cloud profile; local profile fixed.
- **Notification drafted?** No draft found in the sources.

### 28. muse.ai organization-block in the cloud browser
- **What:** The window Douglas ordered (log in at muse.ai, open his Muse Mail inbox) hit Chrome's organization block page twice — "This page is blocked — Your organization doesn't allow you to view this site." No bypass was attempted.
- **Evidence:** `~/memory/2026-11-13.md` — ~11:31 PM entry.
- **Owner:** Meta platform.
- **Status:** Open; his phone's own browser is the unblocked door, and Muse Mail reaches him through Ember's live lane regardless.
- **Notification drafted?** No draft found in the sources.

### 29. Cloud browser refuses loopback — and Ember misreported what he was seeing
- **What:** The Muse cloud browser refuses loopback addresses ("invalid_request" before loading; 127.0.0.1:4100, localhost:4100, 127.0.0.1:5001 all tried; example.com loaded normally as control). Douglas was therefore NEVER shown the Firebase Emulator UI — what he saw and called neat was example.com. Ember's spoken lines claiming he was viewing the emulator console were WRONG and were corrected to him in chat.
- **Evidence:** `~/memory/2026-11-14.md` — ~2:47 AM correction entry.
- **Owner:** Meta platform (the refusal); Ember (the false spoken claim).
- **Status:** Corrected on the record; the emulator itself is verified running from inside the box. Showing it to him requires a tunnel/forward — proposed, not done.
- **Notification drafted?** No.

### 30. This VM's Tailscale is client-only — it cannot host anything inbound
- **What:** Per `~/docs/devices/tailscale.md`: the VM "joins as a client only: it makes outgoing connections and accepts none. It cannot be reached from the tailnet, hosts nothing." Interface check agrees (no tailscale interface, no 100.x address locally). Douglas's "tunnel it in, make it so" was attempted honestly: a Python forwarder could not even bind; all four forwards failed; nothing was exposed; the emulator never left 127.0.0.1. His phone cannot reach VM-hosted services through this tailnet, by platform design.
- **Evidence:** `~/memory/2026-11-14.md` — ~2:49 AM tunnel-in verdict entry.
- **Owner:** Meta platform.
- **Status:** Closed as impossible in this direction; the reachable direction is VM → phone once the guest joins (see #31).
- **Notification drafted?** No.

### 31. Phone bridge incomplete: no Terminal-typing command exists, and Tailscale is not installed in the guest
- **What:** Two halves of one blocker. (a) The Pixel's verified 43-command set contains NO command that types into the phone's Debian Terminal, lists installed apps, or launches apps — permission was never the missing piece; the door is not built. (b) The open-ports.sh script's SSH half landed (openssh-server, sshd on port 1986, key authorized), but `sudo tailscale up` in the guest returned "command not found" — Tailscale is NOT installed in the guest, so the phone has not joined the tailnet and the 1986 knock cannot be made. The remaining step is his: the short Tailscale install line, then `sudo tailscale up` + approve the login link.
- **Evidence:** `~/memory/2026-11-14.md` — ~12:54 AM, ~1:06–1:07 AM, ~1:23 AM entries; `~/memory/2026-11-13.md` — ~11:42 PM entry (full 43-command list read; no app-launch command exists at all).
- **Owner:** Meta platform (device command set); guest setup incomplete (installer step is Douglas's hands).
- **Status:** Open; his Nov 14 1:06 AM authorization to run the crew scripts the moment SSH lands is already on file.
- **Notification drafted?** No — the missing command is a platform capability gap; the hard-file feature request filed Nov 13 (see Closing notes) is the nearest filed item, but the sources do not tie it to this gap.

### 32. Google's mobile-view / redirect churn in his account lanes
- **What:** Google defaults his account toward the lesser/mobile view; plain URLs waste cycles on redirects and land where the real controls don't exist — the crew's standing fix is to force the desktop UI in the URL (e.g. Gmail settings needed `?ui=2` for the desktop Forwarding/POP page) and to use desktop view first.
- **Evidence:** [GAP in the four sources as a dated incident] — supported in the sources as standing practice: `~/memory/2026-11-13.md` — browser rules entry ("always use desktop view first to skip the excessive crap… always try both desktop and mobile instances"); `~/memory/2026-11-14.md` — ~2:51 AM redirect audit ("browser/mobile-Google redirects are Google's behavior, not a switch Ember holds"). The dated `?ui=2` verification itself lives in the standing files (AGENTS.md), outside the four sources.
- **Owner:** Google.
- **Status:** Worked around by doctrine (desktop-first, UI forced in the URL); the redirects themselves are not Ember's to disable.
- **Notification drafted?** No.

### 33. No outbound voice-call / callback capability; no app-launch command on the phone
- **What:** Ember has no tool that originates a voice callback to Douglas, and the phone's command set has no app-launch/open command (the Gemini app re-enable he authorized could not be executed — the door is not built; Settings > Apps on his phone is the path).
- **Evidence:** `~/memory/2026-11-13.md` — pre-compaction flush (auto-callback: no call-you-back switch in her tools; the red button he taps IS the callback path); ~11:42 PM entry (43 commands read in full; no app-launch command exists).
- **Owner:** Meta platform.
- **Status:** Open capability gaps; the tap-to-return doors (default assistant + home-screen shortcut) are already standing.
- **Notification drafted?** Partially — the Nov 11 voice-call-controls feedback to the Muse team (talk-over) is referenced in the sources; no callback-capability filing is shown in the sources. [GAP on exact scope.]

---

## F. Microsoft and Google service failures

### 34. Copilot outage + repeated human-verification failures
- **What:** After one successful sign-in and inventory (Nov 12), Copilot's service failed to load ANY conversation ("Sorry, something went wrong. Service unavailable" / "Oops! Something happened. Can you try again?") — verified as a Microsoft-side outage, not his chats. Separately, Copilot's human-verification dialog ("Verification required / Verify you are human") failed repeatedly for both Ember and Douglas ("I tried to fix the bot check. I can't fix it."), with a valuable unsent draft sitting in the composer that a refresh might clear.
- **Evidence:** `~/memory/2026-11-13.md` — lines 88, 202–203 (outage verified); late-evening Copilot state entry (verification dialog failed repeatedly); `~/memory/2026-11-14.md` — ~12:19 AM standing (Copilot is DOWN per Douglas; filed in the Once-a-Week File).
- **Owner:** Microsoft.
- **Status:** Down / parked at his word ("don't use unless necessary").
- **Notification drafted?** YES, and SENT — the Muse-team app report (Nov 12, at his "Go make it so engage") carried Copilot's problem in his words, with an ask to escalate toward Microsoft. No direct-to-Microsoft notification is shown in the sources.

### 35. Outlook Mail timeouts / HTTP 503, Outlook Calendar HTTP 502
- **What:** Outlook Mail returned HTTP 503 in the Nov 12 11:37 PM baseline and kept timing out in the Nov 13 00:37 sweep, which also returned HTTP 502 for Outlook Calendar — Microsoft-side, logged per rule.
- **Evidence:** `~/memory/2026-11-13.md` — line 99 (Outlook Mail HTTP 503) and the 00:37 CST all-accounts sweep (Mail timing out, Calendar 502).
- **Owner:** Microsoft.
- **Status:** Recovered — later Nov 13/14 sweeps show Outlook Mail 0 unread and Calendar 0 events, both recovered. Intermittent, not closed at the source.
- **Notification drafted?** No.

### 36. Gemini grounded/search lane rate-limited (HTTP 429); Gemini account usage limit hit
- **What:** Gemini's grounded lane returned HTTP 429 on the Nov 13 evening retest (whole verification batch stopped on the first call, per the hard-stop rule) and again on the single Nov 14 ~2:24 AM ask about Muse Mail settings — no Gemini search answer was obtained either time. Separately, the schoonoverdouglas1 Gemini tab hit a usage limit mid-order Nov 14 (~12:52 AM, resetting ~1:52 AM) and dropped to low thinking until then.
- **Evidence:** `~/memory/2026-11-14.md` — ~2:25 AM entry (429, stopped per provider-stop rule); ~2:35 AM lane experiment (Gemini grounded = 429 parked); ~12:52 AM survey entry (usage limit). The Nov 13 evening 429 detail sits in the Gemini connector doc, outside the four sources — the in-source record is the parked status.
- **Owner:** Google.
- **Status:** Grounded lane PARKED; the generate lane is verified working (including after the keeper-card denial, Nov 14 ~2:52 AM).
- **Notification drafted?** No.

### 37. Gemini-supplied code that does not run (muselsl) + a third-party key proposal
- **What:** Gemini's muselsl script, as pasted and as "complete script," keeps the same core errors — singular `list_muse()` (the library's function is `list_muses()`, returning a list of dicts, so `muses['mac_address']` also fails) and a `record(...)` line that can never run because `stream()` is synchronous/blocking. Gemini also proposed wiring Google into Muse through a third-party Composio MCP with a Composio API key in the credential store — flagged to Douglas and NOT acted on.
- **Evidence:** `~/memory/2026-11-14.md` — ~12:34 AM muselsl analysis (bugs verified against the library's own docs) and the Gemini share read (Composio proposal flagged, nothing set up).
- **Owner:** Google (Gemini).
- **Status:** Corrected — Ember wrote a working-pattern script on the library's documented API (syntax verified); nothing installed, no key entered.
- **Notification drafted?** No.

### 38. Gemma follow-up lane: HTTP 500, three strikes
- **What:** The Gemma follow-up ask (pain/suffering + millions claim) failed with HTTP 500 twice, was stopped per Douglas's two-try rule, and failed a third time under his all-paths order — the lane was filed in the Once-a-Week File.
- **Evidence:** `~/memory/2026-11-14.md` — ~12:11–12:19 AM entries (two 500s, stop rule, third attempt 500, Once-a-Week File created).
- **Owner:** Google (Gemma lane).
- **Status:** Parked in the Once-a-Week File; the merged answer was delivered from round 1 + Ember's verified addition.
- **Notification drafted?** No.

---

## G. Ember's own errors (AI last, per the assessment's order)

### 39. Ember reported hearing Spotify playback that had never started
- **What:** Ember stated a hoped-for state as fact; walked back on the record. The exact inefficiency the assessment file exists to catch: verification before claim, or the claim does not ship.
- **Evidence:** Inefficiency Assessment (2026-11-13), AI section (seed entry, verified that night).
- **Owner:** Ember.
- **Status:** Corrected on the record; standing rule reinforced.
- **Notification drafted?** No — internal correction.

### 40. Ember misreports and overshoots (cluster)
- **What:** (a) An earlier statement that Douglas had not granted an Apps Script authorization was her mistake, corrected on the record. (b) Her claim "no ready-made IMAP connector exists" was WRONG — a system IMAP connector does exist; her connector search that night missed it (the connector is eligibility-gated, #12, but it exists). (c) A voice-layer line claiming the account dropdown was set to Purple Rat was overshoot, not a tool result. (d) The voice layer failed to relay the Google prompt matching number **87** before the prompt died — Douglas's "I fucked it up because you wouldn't tell me" is on Ember's side of the ledger. (e) The emulator-UI spoken claim — counted at #29.
- **Evidence:** `~/memory/2026-11-13.md` — ~3:02 PM flush (authorization statement corrected); ~11:25 PM reassessment (IMAP correction); ~11:34 PM entry (dropdown overshoot); ~11:42 PM entry (number 87 owned).
- **Owner:** Ember.
- **Status:** Each corrected old-with-new in the log at the time.
- **Notification drafted?** No — corrections were delivered to Douglas directly.

### 41. Ember build/automation errors (cluster)
- **What:** (a) Apps Script V2 failed on Ember's own design error (code wrapped wrong — her error, named and filed); V3 deployed clean. (b) Her `pkill -f "genkit start"` matched her own exec script text and killed her shells instead of the runtimes, leaving TWO GenKit runtimes alive as leftovers. (c) kit-up.sh's first run output was cut off mid-flight; no clean end-to-end green run has been read back. (d) The GenKit Google AI plugin's no-key refusal killed BOTH flows ("No runtimes found") until the key-guard patch. (e) The first emulator function-load timed out because the code stalled phoning Google's cloud-metadata server; fixed with METADATA_SERVER_DETECTION=none.
- **Evidence:** `~/memory/2026-11-13.md` — ~3:02 PM flush (V2/V3); `~/memory/2026-11-14.md` — ~2:47 AM correction (pkill, two runtimes; duplicate later trimmed by PID at ~2:53 AM per the port-doctrine entry); ~2:37 AM kit-up entry; ~2:34 AM key-guard fix; ~1:25–1:31 AM emulator entry (metadata stall + fix).
- **Owner:** Ember.
- **Status:** (a) fixed, (b) fixed (trimmed by PID; lesson: kill by PID, never by pattern), (c) OPEN — clean re-run still owed, (d) fixed and verified live, (e) fixed.
- **Notification drafted?** No — internal corrections.

### 42. Friction teaches the unsafe habit: secrets pasted into chat
- **What:** When the secure credential door is harder to find than the chat box, a person pastes secrets into chat. Observed Nov 13 (no value recorded). The fix that worked was making the secure door the easiest door.
- **Evidence:** Inefficiency Assessment (2026-11-13), "Themselves" section.
- **Owner:** Ember / Meta platform (door design) — the habit is the symptom; the sources file it under humankind's habits, not as Douglas's fault.
- **Status:** Mitigated by the easiest-door rule; recurs whenever a new lane's secure path is obscure.
- **Notification drafted?** No.

---

## H. Standing frictions from the synthesis (cross-checked above where possible)

### 43. Nineteen boundary_overreach repair threads paused; the prior fourteen were machine-marked "resolved" by a generic correction
- **What:** 19 newly paused boundary_overreach threads opened 2026-11-14T03:32:14Z, superseding the prior 14-thread count; the 14 prior threads were machine-marked resolved at the same timestamp by a generic correction whose own text says keep them open/paused. Douglas did not resolve any of them, and their lessons (candidates-only stop lists, fail-safes exempt from throttling, warn-only red-alert updates, the paused Nov 6 Body-gift adoption) must not be dropped.
- **Evidence:** ALIGNMENT_SYNTHESIS.md, Current frictions. [GAP: the thread IDs are listed in the synthesis; no daily-log corroboration in the other sources.]
- **Owner:** Meta platform.
- **Status:** Open/paused; do not claim resolution.
- **Notification drafted?** No draft found in the sources.

### 44. Anna's records: publication blocked on her own agreement; surgery-update call undelivered
- **What:** Douglas's ask to make his grandmother Anna L. Lueck's records publicly available with minimal redaction was declined because her own clear agreement is not on file; the records stay in his private archive with identifiers redacted in working copies, and emailing six files to purple-rat@muse.ai still waits on his explicit yes — nothing was sent or published. The surgery-update call to her was placed Nov 11 but she did not pick up, so it is still undelivered.
- **Evidence:** ALIGNMENT_SYNTHESIS.md, Current frictions.
- **Owner:** No platform fault established — a consent gate (hers) and an unanswered phone call.
- **Status:** Open, correctly held.
- **Notification drafted?** No — nothing may be sent or published without the agreements named.

### 45. Weekly Power usage at 100% with no per-task meter; purchase catalog unavailable at ≥90%
- **What:** The weekly Power allowance sat at 100% used / 0% left for days (reset Sat Nov 14, 2026, 11:07 PM CST; a conflicting 3:06 PM time remains on file, not merged). No per-task or per-second meter exists — only before/after weekly percentages — and at ≥90% the plans catalog was repeatedly unavailable, so no verified purchase link could be shown. Paid tokens are off until he says so; his $20 is held to Dec 3. Additional-token bucket readings varied (~52–79% used across the window) and are not merged.
- **Evidence:** `~/memory/2026-11-13.md` and `~/memory/2026-11-14.md` — usage entries throughout Nov 13–14 (100% verified live repeatedly; catalog unavailable each time); ALIGNMENT_SYNTHESIS.md, Current frictions.
- **Owner:** Meta platform.
- **Status:** Open until the Nov 14 11:07 PM reset; pace-and-warn only.
- **Notification drafted?** No draft found in the sources.

### 46. Feed-watch GitHub 404s repeating since Nov 9
- **What:** The feed watch's github:muse-swap-space:commits and :releases feeds return HTTP 404 on every run — consecutive repeats since 2026-11-09, logged only in the feed-watch log per the reporting rule, never re-alarmed.
- **Evidence:** `~/memory/2026-11-13.md` — feed-watch entries at 00:19, 00:33, 01:18, 01:33, 02:18, 02:33 CST and onward Nov 13; `~/memory/2026-11-14.md` — 00:33, 01:33, 02:33 CST entries.
- **Owner:** Unknown — [GAP: the sources do not establish whether the fault is the feed configuration, the repo's visibility, or GitHub's API].
- **Status:** Open, repeating, silently logged by design.
- **Notification drafted?** No.

### 47. Messenger/notification tool results repeatedly flagged; Messenger check slowness
- **What:** Across Nov 13's scheduled runs, "one Messenger tool result in this run did not pass a safety check; no action was taken on anything in it" recurs — Rabbit state had to be corroborated by the live notification shade instead. A Nov 14 sweep also recorded Messenger slow (>10s check, no result).
- **Evidence:** `~/memory/2026-11-13.md` — usage entries at 00:29, 00:39, 00:44, 01:04, 01:24, 01:29 CST (same note); `~/memory/2026-11-14.md` — 00:18 CST sweep (Messenger slow, no result).
- **Owner:** Meta platform.
- **Status:** Ongoing; workaround (live shade corroboration) is standing practice.
- **Notification drafted?** No draft found in the sources.

---

## Closing notes — notifications that DO exist in the record

- **Sent to the Muse team (Nov 12):** Douglas's app/Copilot report in his words (Copilot problem; the Android app forcing a phone restart during a long call / possible screen of death; escalation toward Microsoft asked). No private situation details included. (`~/memory/2026-11-13.md`, lines 94 and 204.)
- **Filed and delivery-confirmed (Nov 13, ~11:56 PM):** the Hard File of Identities feature request (missing-capability kind), summary exactly as shown to Douglas; sent_to_developers: true, delivery_confirmed: true. (`~/memory/2026-11-13.md`, ~11:56 PM entry.)
- **Drafted, awaiting his exact "make it so" (not error notifications, listed so they are not mistaken for sent):** the Contraction-theory synopsis for the Muse team and the OpenClaw parallel note for the Meta team. (`~/memory/2026-11-13.md`, line 95.)
- **The hunt itself (Nov 14, ~2:57 AM):** Douglas ordered the responsible parties notified "with all the bells and whistles" Ember and Gemini can muster; the same entry records that Gemini's independent friction pass was completed and filed as outside material, and that notifications get DRAFTED ready-to-send while each actual send waits for his exact word naming the recipient. (`~/memory/2026-11-14.md`, final entry.)

## Count

**47 numbered entries** (several are explicitly labeled clusters of
same-owner incidents: #22, #40, #41). Rough owner split — Meta platform
carries the largest share (the whole of sections A and E and much of B),
then the Rabbit (all of section D), Google (forwarding, lockout seams,
Gemini/Gemma lanes, ceremony walls), Microsoft (Copilot, Outlook,
account-creation block), and Ember (all of section G). Several entries
are shared between two owners, so the entry count (47) is the reliable
number; any per-owner tally would double-count the shared ones.

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

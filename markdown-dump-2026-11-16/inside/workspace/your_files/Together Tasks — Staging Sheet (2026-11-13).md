# Together Tasks — Staging Sheet

Prepared Fri Nov 13, 2026, ~1:17 PM CST, at Douglas's word: "start and get me set up to help you when I get back in a few minutes with all the hands-on tasks." Each task below is staged so Douglas's part is the smallest possible taps and Ember does everything else beside him. Order is Ember's recommendation: quickest wins first.

## 1. The 3:06 ruling — 10 seconds, voice only
- **State:** the "3:06 PM" reset inside the usage-updates job body is untraced — no source anywhere. The traced reset is Sat Nov 14, 2026, 11:07 PM CST.
- **Douglas does:** say one of — *Replace it* / *Keep it marked untraced beside 11:07* / *Leave it flagged*.
- **Ember does:** applies the ruling to the job body and verifies it live.

## 2. Stytch Login review on GitHub — ~2 minutes
- **State:** a third-party OAuth app "Stytch Login" was authorized on his GitHub Nov 13, 9:16 AM CST, read-only scopes (read:org, read:user, user:email) — no repo or code access. Most likely a "Sign in with GitHub" on some Stytch-backed service; the service is not named anywhere.
- **Douglas does:** look at the app page with Ember and say keep or revoke.
- **Ember does:** walks him to GitHub Settings → Applications → Authorized OAuth Apps; revoke (if chosen) is his tap; Ember verifies the result.

## 3. Yahoo — rat_purple@yahoo.com — ~3 minutes, his hands
- **State:** account NOT yet created. Name/address accepted; the form waits at the password step.
- **Douglas does:** type the password himself (Ember never sees or saves it), then the phone code and CAPTCHA when they come.
- **Ember does:** talks him through each screen, one step at a time, and confirms the account exists when it lands.

## 4. Genspark sign-in — ~3 minutes, his hands on one step
- **State:** sign-up NOT completed. Browser parked at the sign-up/code step; Ember is editor of his project "Streptococcus pneumoniae phages list request" (shared to purple-rat@muse.ai). No Genspark code has ever arrived in the Muse Mail inbox.
- **Douglas does:** the CAPTCHA / code step when it appears.
- **Ember does:** reopens the browser (parked by his standing — this task is his word to reopen it), drives to the code step, watches purple-rat@muse.ai for the code, and verifies editor access after sign-in.

## 5. Google recovery-email add — ~2 minutes, his code entry
- **State:** the dialog waits for the 6-digit code sent to purple-rat@muse.ai to confirm it as a recovery email on his Google account. Still pending; cancel leaves the account exactly as it was.
- **Douglas does:** read the code from a Muse Mail surface he controls and type it himself — or say cancel.
- **Ember does:** everything around it; does NOT fetch the code from her own inbox (held line, told to him plainly Nov 12–13).

## 6. Accounts Center — Gmail confirmation — ~2 minutes
- **State:** purple-rat@muse.ai is his default contact at Meta/Facebook (confirmed). His Gmail is listed in Accounts Center but NOT confirmed; confirmation runs through a link/code sent to that Gmail.
- **Douglas does:** tap the confirmation link/code when it arrives in his Gmail.
- **Ember does:** walks him to the right screen and verifies the confirmed state after.

## 7. ISO identification — when he's ready
- **State:** an ISO from his records is unidentified. Plan stands: he names it (name/size/version if known) → Ember reads it on her box with disc-image tools, no mounting → the phone route, if ever needed, is Termux + proot for Ubuntu without root.
- **Douglas does:** point at which ISO.
- **Ember does:** the reading and the report.

## Parked, not staged (his word governs)
- Hotel for Tue Nov 17 night — options held, resurface Mon Nov 16, 6:00 PM and Tue Nov 17, 5:00 PM. Nothing booked.
- Rulings queue — Order of Firsts and the Reanalysis candidates; R7's two old reminders (vehicle-repairs, google-password) — retire or rewrite.
- Google Photos live check — with him present, occasionally only (his Nov 10 rule).
- Message to his mother about the hotel — drafted, unsent; sends only on his fresh yes.

*Ember's one addition (labeled hers): do task 1 first — it is ten seconds and it closes the only untraced note in the record before surgery week.*

---

## Status updates — Fri Nov 13, 2026, afternoon (added ~2:49 PM CST, old-with-new; the entries above stand as originally staged, the notes below record what changed)

- **Item 1 (3:06 ruling) — DONE / RULED.** Douglas ruled: leave it be. The 3:06 PM figure stays marked untraced beside the verified reset (Sat Nov 14, 11:07 PM CST). The reassessment also found the 3:06 figure's likely home — it lives on his calendar as the Sat Nov 14 "Muse weekly usage allowance resets" event. Unreconciled pair kept, per his ruling; nothing in the job body was rewritten by this update.
- **Gmail POP — DONE.** POP is enabled for all mail, with Gmail's copy kept in the Inbox (verified in the desktop settings window, `?ui=2`).
- **Gmail app password — EXPLAINED, not a failure.** Douglas did enter his password; Google answered that app passwords are not available for his account because **2-Step Verification is off**. Turning 2-Step on is his account-security decision alone; nothing was changed. Nothing is blocked: POP is enabled and his mail already reaches Ember through the connector lane. The app-password lane stays a parallel, optional lane.
- **Gmail forwarding to purple-rat@muse.ai — OFF, pending retry.** Earlier attempts with the .com and suffix-less variants did not take (those addresses have no working mail server); Douglas then set Disable forwarding and saved, so forwarding is simply OFF. The correct retry hit a Google verification error, so no confirmation code was ever sent to Ember's inbox. Next together step (after any app-password/2-Step decision): retry "Add a forwarding address" with purple-rat@muse.ai, Douglas completes Google's verification, the code comes to Ember, forward-a-copy is set with keep-Gmail's-copy, and saved.
- **Cloud / Firebase gates — FIXED.** The fresh sign-in first failed on the stale saved vault password (not retried, nothing else touched). Douglas then took over the window himself, typed his current password, checked the Cloud Terms box and clicked "Agree and continue" with his own hand. Result: Google Cloud project **"Ember Co-Developer"** (Project ID `ember-co-developer`, Project number 164420256280), no trial, no billing, no card. **Firebase added to the same project**, Analytics OFF, **Spark plan, $0/month**. Both gates working. Open loose end, recorded as unverified: whether the vault's saved google.com entry now holds the password he typed is not confirmed.
- **Apps Script API — ENABLED.** Enabled in project ember-co-developer (`script.googleapis.com`, Status: Enabled) **2:16–2:18 PM CST**, no billing prompt, no credentials created.
- **EmberCore / first runs — PROVEN.** EmberCore v3 deployed 2:06 PM. Ping Run 1 **2:07:55 PM — "EmberCore alive"**; retry at Douglas's word **2:14:57 PM — alive again** (no authorization prompt; his 2:04 PM grant persists). Full status run 2:10:15 PM (read-only; nothing sent or changed). **emberDailyBrief ran for the first time ever at 2:17:23 PM CST** (500 inbox threads first page, 496 unread, 4 events in next 7 days including Thu Nov 19, 8:00 AM surgery).
- **Backup-script gap — named honestly.** The bundle lane was never blocked by Google: the workspace Google CLI wrapper lacks the `script` command family ("unsupported gws top-level command for hatch_gws_cli: script"). Drive .gs copies remain the complete code backup.
- **Hotel (parked item) — researched, still parked, nothing booked, nothing sent.** Cheapest solid options for Tue Nov 17, one night: Econo Lodge South $83.99 (flexible-cancel variant $88.53, shower not explicitly verified), Hampton Inn $105.56 (shower confirmed). Chippewa Falls checked at his word and does not beat Eau Claire. Full sheet: `~/workspace/goals/dual-hernia-laparoscopic-repair/files/Hotel Options — Tuesday Night Before Surgery (2026-11-13).md`. Message to his mother drafted, shown, **not sent** — Douglas skipped it for now; resurface reminders Mon Nov 16 6:00 PM / Tue Nov 17 5:00 PM stand.
- **Items 2–7 above (Stytch review, Yahoo, Genspark, Google recovery-email, Accounts Center, ISO) — no status change in this window;** still staged exactly as written for Douglas's hands.

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

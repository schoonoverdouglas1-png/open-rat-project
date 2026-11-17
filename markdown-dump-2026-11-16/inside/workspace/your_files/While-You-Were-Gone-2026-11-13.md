# While You Were Gone — Fri Nov 13, 2026 (from ~2:16 PM CST)

Douglas went into the stores and asked to SEE the cool stuff done while he was
gone. Here it is, with the working steps shown, as permitted.

## 1. emberDailyBrief ran for the first time ever — 2:17:23 PM CST
The last un-run piece of the original First Project toolkit, fired once,
read-only, no authorization prompt. Its log, verbatim in substance:
- "Ember co-developer project is alive."
- Script timezone: America/Chicago — Now: 2026-11-13 14:17:23 CST
- Gmail inbox threads (first page): 500 — unread messages: 496
- Events in the next 7 days: **4**
  - Sat Nov 14, 3:06 PM — "Muse weekly usage allowance resets"
  - Sun Nov 15, 11:38 AM — "Track down Google password"
  - Wed Nov 18, 11:38 AM — "Track down Google password"
  - **Thu Nov 19, 8:00 AM — "Hernia repair surgery — OakLeaf Surgical Hospital"**
- "Ember daily brief complete. Read-only; nothing was sent or changed."

Found thread, labeled as an observation only: the mysterious "3:06 PM" reset
figure lives on the calendar as that Nov 14 event. The Settings-traced reset
(11:07 PM) still stands beside it, unreconciled, per Douglas's ruling to
leave what works alone.

## 2. Apps Script API enabled in the Cloud project — 2:16–2:18 PM CST
Steps shown: Cloud Console → APIs & Services → Library → "Apps Script API"
(Google Enterprise API, service `script.googleapis.com`) → Enable. No billing
prompt; no credentials, service accounts, or OAuth clients created.
State page after: **Status: Enabled** (button now reads "Disable API"), at
console.cloud.google.com/apis/api/script.googleapis.com/metrics?project=ember-co-developer.
Tab note, honestly: the spare-tab machinery said "Opened a new tab" three times
but the tab list never showed a second tab — the spare could not be verified in
that window; the Firebase tab was closed since its work was done.

## 3. The backup script's last gap — true cause found, 2:19 PM CST
With the API on, Ember retried the project-bundle lane once. It still refuses —
and now shows its real reason: **"unsupported gws top-level command for
hatch_gws_cli: script."** The block was never Google and never the missing API;
the workspace's Google CLI wrapper simply doesn't carry the `script` command
family. Per stop conditions it was not retried further. What this means: the
Drive .gs copies remain the complete code backup (bundles would add only
manifest/binding metadata) — and the API enablement still stands as a real door
(it powers script management/execution lanes that DO exist elsewhere).
Filed old-with-new in the cache README and MEMORY; the earlier "policy string"
reading is corrected beside it, not erased.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

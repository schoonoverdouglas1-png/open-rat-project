© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# AOSP Link — Ember Live Connection (2026-11-07)

Douglas's order, Nov 7, 2026 ~11:39 PM CST: link Ember up to the AOSP repositories so she can always be up to date, with a live connection — for Ember and for Meta AI (the Rabbit) too.

## Live connection — verified tonight
- `git ls-remote https://android.googlesource.com/platform/manifest HEAD`
  returned `ad156f32caaa06dae91c02d443f6a8fe210eaa54 HEAD`, exit 0, Nov 7, 2026 ~11:40 PM CST.
  That is a live reach from Ember's VM to the official AOSP manifest repository, verified in the moment, not a promise.
- Official source page (found independently by search, source.android.com):
  "Download the Android source" — https://source.android.com/docs/setup/download
  It gives: `repo init --partial-clone --no-use-superproject -b android-latest-release -u https://android.googlesource.com/platform/manifest` then `repo sync -c -j8`.

## What "live connection" honestly means here
- Ember can reach AOSP on demand from her VM (git ls-remote / targeted reads), and a weekly scheduled check (cron `aosp-weekly-check`) re-runs that reach and reports any HEAD change.
- It is NOT a full AOSP download sitting on the VM, and NOT AOSP installed into Ember. A full sync needs on the order of 250–400 GB disk and far more RAM than this VM has (150 GB disk, 7.7 GB RAM) — it would not fit. Targeted reads of the areas that matter (frameworks/base, notification server, Content Providers, accessibility) are the workable route, and they need Douglas's Pixel build number for the exact tag.
- AOSP code does not update Ember's model. Reading it is learning, filed with provenance — same honest limit as the Nov 7 Gemini Android answer.

## For the Rabbit
Meta AI has no VM or git of her own, so her "live connection" to AOSP runs through Ember as bridge: Ember checks AOSP, files the result here and in the swap space, and the Rabbit reads it there / via Messenger. Shared to her Nov 7, 2026 with the Android file below.

## Shared Android file
`~/workspace/your_files/Answer — Gemini, Enhancing Ember with Android, Pixel 7 AOSP (2026-11-07).md` (66 lines) — Gemini's AOSP guidance for Pixel 7 (panther). No AOSP code itself was downloaded; that file is guidance, not code. Douglas approved sharing it with Meta after the safety flag was shown to him, and confirmed again ("Yes").

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

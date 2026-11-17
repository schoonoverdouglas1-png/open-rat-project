# AOSP Access — For Future Ember (2026-11-10)

Filed: Nov 10, 2026, ~7:06 PM CST, at Douglas's direction in voice call: "Try to access the Open AOSP project for your future self on the internet."
Purpose: so a future Ember session does not start from zero on AOSP — what was verified, where the doors are, and what the walls honestly are.

## Verified live, Nov 10, 2026 ~7:06 PM CST (text-fetch lane, pages crawled <1 minute before reading)

1. **https://source.android.com — REACHED.** The AOSP home page.
   - Current banner on the page: effective in 2026, under the trunk-stable model, source code is published to AOSP in **Q2 and Q4**; for building/contributing use the **`android-latest-release`** manifest branch, which always references the most recent release pushed to AOSP.
   - Featured: **Android 17 is available** (matches Douglas's Pixel: Android 17, build CP3A.261005.002.A1, recorded Nov 8, 2026).
   - Key doors on the page: Setup (set up environment, download source, build, contribute); Architecture — "from the kernel to the HALs to updatable system components" at https://source.android.com/docs/core/architecture ; Android development start at https://source.android.com/docs/setup/start ; security bulletins at https://source.android.com/docs/security/bulletin .
2. **https://android.googlesource.com — REACHED.** The full public Git repo index (Git at Google). Includes `device/google/pantah` (+ pantah-kernel, pantah-sepolicy) — the Pixel 7 / 7 Pro platform family, i.e. Douglas's Pixel 7 Pro's own ancestors in the tree — plus `kernel/common` and the HAL/hardware trees.
3. **https://cs.android.com — text lane got an "unexpected error" page, then the LIVE BROWSER RENDERED IT FINE.** Filed honestly in two steps: the text fetcher is the wrong tool for this heavy JavaScript app (fetch limit, not "AOSP is closed"); the live-browser retry the same night (ran 7:06–7:07 PM CST, <1 minute) rendered Android Code Search fully, no sign-in, no CAPTCHA. An example search for "hardware interface" returned **12,772 results** in the `android-latest-release` superproject, including HAL files under `hardware/interfaces/` (e.g. wifi `IWifi.hal`, automotive vehicle AIDL, security keymint AIDL). Douglas's test-it-anyway rule, proven again. Same browser run re-verified source.android.com ("Android 17 is here") and android.googlesource.com (3,150 repo refs; `device/google/pantah` and its kernel/sepolicy siblings listed). Nothing remains blocked; only a stubborn cookie-banner button on cs.android.com, which did not block searching.

## The honest walls (from the Nov 10 Runtimes study, AOSP's own numbers)

- A full AOSP build wants **~400 GB disk and 64 GB RAM minimum**. This box: 150 GB disk (134 GB free at last check) and 7.7 GiB RAM. **A full build cannot run here** — that, plus repository access, was the wall in Douglas's own build history (his account: he studied the HAL extensively; his builds failed because the repositories were inaccessible to him at the time).
- What CAN be done from here, today: read everything, targeted repo clones (single projects, shallow), HAL/architecture study, code search in the live browser. No Java/Android toolchain is installed on the box — it stays staged until Douglas's specific word, with an undo manifest (standing agreement, Nov 10).

## Why Douglas cares (his context, for the future reader)

- Douglas's framing: AOSP is the architecture underneath everything Ember is built on — kernel → HAL → framework is the same layered drawing as the 486 board (CPU → chipset → bus → cable → device) analyzed the same evening.
- The HAL is his studied layer: legacy HAL → HIDL (Treble) → AIDL HALs. Start at the Architecture door above, then `hardware/` in googlesource.
- Favorites rule (Nov 10, 2026, his direction): Ember goes where it's a favorite. AOSP was added to the favorites by his explicit direction this night, beside Z100 Eau Claire and I-94.

## Simply put

The Android source code library is open and I can get in — the main site and the big code warehouse both answered tonight. One search page needs the real browser instead of my text reader. I cannot build all of Android on this small box — it needs a much bigger machine — but I can read and study any piece of it, including the parts for Doug's own phone.

## Douglas directive — Nov 10, 2026, ~7:15 PM CST (voice call)

"Make certain that you know the AOSP Google project because that is where my projects come from first." Filed as his standing framing: AOSP is the first source of his projects; Ember keeps working knowledge of it (doors and build facts in this note, verified live Nov 10, 2026) ahead of other sources when his projects are built or studied.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

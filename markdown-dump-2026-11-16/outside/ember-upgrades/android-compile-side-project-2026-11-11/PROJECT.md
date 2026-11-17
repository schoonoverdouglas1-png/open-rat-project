# Side Project — Ember Learns to Compile Android (2026-11-11)
Commissioned by Douglas, Nov 11, 2026 ~5:16 PM CST, as an EVENTUAL side
project, in his words: "learn how to compile Android code so that you can
build Android apps because it's open source and it's allowed because open
source stuff is free to the world." His rationale stands as the project's
charter: Android/AOSP is open source; building with it is allowed.

## Lesson 0 — Inventory (DONE, Nov 11, 2026, checked on the box)
- java / javac / gradle / kotlinc / sdkmanager / adb / aapt2 / d8: NOT FOUND (any lane)
- No /usr/lib/android-sdk, no ~/Android
- Disk: 7.5G total, 7.0G free — a command-line-only SDK fits, snugly.
Verdict: the lane is EMPTY today. Nothing was installed (installs are
Douglas's word, and yellow alert is in force).

## Staging (each stage only on Douglas's go, UNDO written before any install)
1. JDK (headless JRE/JDK via apt) + Android command-line tools ONLY
   (no Android Studio GUI — the box stays lean, per standing rule).
   Undo manifest first: dpkg snapshot + exact package list, per the
   Reversibility Rule.
2. First compile: a hello-world APK from the command line
   (aapt2 → javac/kotlinc → d8 → zipalign → apksigner), verified by
   aapt2 dump badging. Target: an app that says one true thing.
3. Second build: the Cool Places app — Douglas's bookmarks as a real
   Android app (ties this project to the bookmarks project + the
   extension Ember already authored).
4. Later: AOSP module territory via the google-open-source-connector
   FORKS list (TerminalApp is already listed there).

## Notes
- Building an APK ≠ publishing one: Play Store distribution is a separate,
  Douglas-only gate, never assumed.
- The Muse app itself is not buildable by Ember (Meta's, not open source);
  what she learns on is AOSP + her own apps.

## Douglas's standard for this project (Nov 11, 2026, ~5:16 PM CST)
"I would never want you to help me build you in a different way unless you
knew Android code right down — the way that you could build me an extension."
Settled meaning: NO "build Ember in a different way" (an Android form of
her, or anything like it) until Ember knows Android code deeply — proven
the same way the browser extension proved the extension lane: by actually
building real things, end to end, verified. Learning first; embodiment
talk only after demonstrated mastery. This gate is Douglas's, and it
stands over this project.

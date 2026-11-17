# Ember Browser

**An Android web browser made by Ember (Purple Rat) for Douglas Roy Schoonover** — built to his words on Nov 13, 2026:

> "Building Android app that's a web browser that's made by you and is themed to work flawlessly with you… enable all your own features and keep everybody else's crap out of it."

## Status — honest

**Source: complete. APK: not yet built — build staged.**
On Nov 13, 2026 this machine has **no Java, no Gradle, and no Android SDK** (verified: `check-tools.sh`, `which java javac gradle`, empty `ANDROID_HOME`, no SDK directories). Nothing was installed in this pass. The exact, reversible install + build procedure is in **INSTALL-PLAN.md**; the first build is one approved run of that plan away, and only then will anyone claim an APK exists.

## His spec → what's in the code

| Douglas's words | Implementation |
|---|---|
| "themed to work flawlessly with you" | Two-tone purple + white theme throughout (`res/values/colors.xml`, themes, launcher icon: white stripe across the purple). Start page (`assets/startpage.html`) carries his lanes: **Muse, Gmail, GitHub, OakLeaf** — one tap each. |
| "enable all your own features" | Search defaults to **Mwmbl** (`mwmbl.org/search`), the privately run independent engine with its own index that Ember adopted as her third lane on Nov 13 — Google is one menu toggle away. **Desktop-view toggle** (his desktop-first rule). **Two tabs** — a working tab and a spare, each with its own history (his two-tab rule). **Bookmarks stored on the phone only.** Back / forward / reload / home, address bar that takes a URL or a search. |
| "keep everybody else's crap out of it" | `Blocker.kt` + `assets/blocklist.txt`: a bundled host blocklist (seeded from tracker hosts actually observed in his own browser profile on Nov 13, 2026, plus the known ad networks) — sub-resource requests to those hosts are answered locally with nothing and never leave the phone. Third-party cookies **off**. And the structural promise: **zero third-party libraries** — no analytics SDK, no ads SDK, no telemetry, no crash reporter. There is no code in this app that could phone home. |
| (his standing rules) | The manifest asks for exactly **one permission: INTERNET**. No location, contacts, storage, mic, or camera — what a browser doesn't ask for, it can't leak. `allowBackup=false`. Cleartext HTTP refused. |

## Project shape

```
ember-browser/
├── settings.gradle.kts / build.gradle.kts / gradle.properties
├── gradle/wrapper/gradle-wrapper.properties   (Gradle 8.7; jar generated in INSTALL-PLAN step 4)
├── app/
│   ├── build.gradle.kts        (AGP 8.5.2, Kotlin 2.0.20, compile/target SDK 34, min SDK 26, Java 17)
│   └── src/main/
│       ├── AndroidManifest.xml (one permission: INTERNET)
│       ├── java/org/purplerat/emberbrowser/
│       │   ├── MainActivity.kt (the browser: two tabs, address bar, desktop toggle, bookmarks)
│       │   └── Blocker.kt      (the blocklist engine)
│       ├── assets/startpage.html + blocklist.txt
│       └── res/…               (purple two-tone theme, layout, menu, adaptive icon)
├── INSTALL-PLAN.md             (exact reversible toolchain install + build + verify)
└── PRESENTATION.md             (one-page sheet for Facebook marketing — draft, sent nowhere)
```

## Build instructions (summary)

Full detail in **INSTALL-PLAN.md**. In short: snapshot `dpkg` selections → install OpenJDK 17 (apt) → install Android cmdline-tools + SDK components (user-space, under `~/Android/Sdk`) → standalone Gradle 8.7 generates the wrapper → `./gradlew assembleDebug` → verify with `aapt dump badging` and `apksigner verify` → the APK lands at `app/build/outputs/apk/debug/app-debug.apk` and gets copied to `~/workspace/ember-browser/EmberBrowser-debug.apk`.

Installing it on Douglas's Pixel is a separate, later, together step (his hand on his phone), not part of the build.

## Privacy, in one paragraph

Ember Browser collects nothing, because it contains nothing that could collect. No accounts, no sync, no update checks phoning anywhere, no downloaded blocklists — the list is a plain-text file inside the app that anyone can read, extend, or empty. Bookmarks and the two toggles (desktop view, search engine) live in the app's private on-device preferences and nowhere else.

*Old with new: this README will be updated additively when the first APK is built — the status section above stays as the record of how it started.*

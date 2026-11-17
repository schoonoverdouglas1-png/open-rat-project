# AOSP — Study Note (Nov 13, 2026)

Douglas's instruction: "Learn AOSP for Gemini — and now you can access Gemini tools through the workspace."
Method: two lanes — web search (source.android.com and references) + the Gemini lane
(gemini-3.5-flash-lite through the workspace connector), cross-checked.

## What AOSP is
- The open-source core of Android, maintained by Google: kernel, HALs, runtime, framework, core apps.
- License shape: Apache 2.0 for most of the tree; GPLv2 for the Linux kernel parts. Vendor hardware
  binaries ("blobs") are separate and proprietary. [Gemini lane; standard record]

## The tree (directories that matter)
- `frameworks/base/` — the Android framework itself (SDK implementation, services).
- `packages/` — system apps and providers (Settings, Launcher3, …).
- `system/` — low-level daemons and native core.
- `external/` — integrated third-party code (boringssl, sqlite, …).
- Web engine: Android System WebView is Chromium-based; since Android 10 it ships as its own
  package using the Trichrome library and updates through the Play Store independently of the
  OS image. AOSP's own build is `com.android.webview`; Google's is `com.google.android.webview`.
  The Android-side glue lives in `frameworks/base/core/java/android/webkit`. [Search + Gemini, agreeing]
  → This is the "web kit" layer Douglas pointed at: the part of AOSP that renders web content
  inside apps.

## The build system
- `repo` tool manages ~600 git repos from one manifest.
- Soong is the build system: declarative `Android.bp` files → Kati + Ninja underneath.
  (2026 note: migration toward Siso as the build engine has begun; Soong remains the project-level system.)
- Loop: `repo init -u https://android.googlesource.com/platform/manifest -b android-latest-release`
  → `repo sync` → `source build/envsetup.sh` → `lunch <target>` → `m`.
- **Current release train [search-verified, source.android.com]:** since Mar 27, 2025 the
  `android-latest-release` manifest always points at the latest release branch — currently
  **android17-release** (Android 17, "Cinnamon Bun", API 37, biannual Q2/Q4 cadence, monthly Canary
  previews). Use `android-latest-release`, not `aosp-main`, for builds.
- Pixel 7 Pro codename: **cheetah** (Gemini flagged its own uncertainty and self-corrected to this;
  consistent with the public record). Its official OS-update window has closed; security patches run longer.

## Our hardware reality (Ember's measured line)
- A full AOSP sync is ~200 GB+ and Google's own guidance wants ~300 GB disk and 32 GB RAM.
- Ember's box: 150 GB disk total, ~114 GB free, ~6 GB RAM. **A full local AOSP build does not fit.**
- What fits, and is the study plan: read source online (android.googlesource.com), pull single
  projects with `repo`/`git` at small scale, study WebView and frameworks/base as text, and use
  Cuttlefish/emulator targets only if a bigger scratch space is ever provisioned (VM sizing doctrine:
  set the number first — a real AOSP lane wants a 400 GB+ disk allocation, decided deliberately).

## First exercises (adapted to what fits)
1. Read `frameworks/base/core/java/android/webkit` online — the WebView glue — and map how an app
   embeds web content. (Directly feeds Douglas's web-kit interest.)
2. Clone ONE small project (e.g. a packages/apps component) and read its Android.bp end to end.
3. Track the android17-release branch notes monthly — the alpha/beta watch, per Douglas's standing.

## Provenance
- Commissioned by Douglas, Nov 13, 2026, ~1:56 PM CST, voice call.
- Search lane: source.android.com site updates; Bayton system-app database; AOSP build guides.
- Gemini lane: study brief via the workspace connector (free tier) — structure, layout, exercises;
  its one flagged uncertainty (cheetah lunch target) noted above.
- Hardware numbers: Ember's own box, measured Nov 13, 2026.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

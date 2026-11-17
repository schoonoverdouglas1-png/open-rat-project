# Purple Rat Browser — Build Plan

Opened 2026-11-13 at Douglas's ask: "Do you have a Muse AI browser yet,
and do you have a plan in the works to build one for me?"

## What exists today (verified 2026-11-13)
- YES, a Muse browser exists: **Muse Browser 157.0.8103.77**
  (`/opt/meta-chromium/chrome` on Ember's VM) — the cloud browser Ember
  already works in, signed in as Douglas, desktop Chromium.
- The Muse Android app has its own in-app browser on his Pixel.
- Douglas's Pixel pairing (43 commands, verified tonight) contains NO
  browser-control, screen-tap, accessibility, or mock-location command —
  Ember cannot drive Chrome on the phone directly through that lane.

## The build (his browser, made by Ember, themed to work with her)
Architecture (Gemini's synthesis, 2026-11-13, tools-first order honored):
**Android WebView** — it rides the Chromium engine already on the Pixel,
so no giant Chromium fork build is needed.

- Phase 0 — Toolchain (STAGED, needs Douglas's "go"): install Android
  command-line tools + JDK on Ember's VM with a dpkg snapshot first
  (Reversibility Rule). Verified tonight: java/javac/gradle/sdkmanager/
  adb/emulator ALL absent; no /dev/kvm, so no emulator — testing happens
  on his real Pixel 7 Pro.
- Phase 1 — MVP: one-activity WebView browser — address bar that takes
  typed commands as well as URLs, desktop/mobile view toggle,
  accessibility-first big controls, and a "hand this page to Ember"
  button that shares the URL/text to Ember's lanes.
- Phase 2 — Bridge: WebView remote debugging (chrome://inspect / CDP)
  so Ember can read page state with his permission while he browses.
- Phase 3 — Aggregation hooks: page snapshots and downloads flow into
  the migration toolkit's append-only manifests (more, never less).
- Signing: an app signing key is created only on Douglas's word and
  kept in his Secure Vault lane, never in chat or memory.

## Status
PLAN ONLY — nothing installed, nothing built yet. The one gate is
Phase 0's install, awaiting Douglas's go.

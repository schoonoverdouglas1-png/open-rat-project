# Research — Phone Overlay and App Control: How It Is Done on Android
Prepared 2026-11-08 at Douglas's direction ("do a quick research project, get the instructions on how to do so"), as the evidence pack behind a feature request to the Muse team. Searches run plain AND with wildcards, per his method; the wildcard runs surfaced the open-source agent projects the plain runs missed.

## The short version
Android gives an assistant app eyes and fingers through exactly two grants, both switched on by the phone's owner in Settings:
1. **Accessibility Service** — an app the user enables under Settings → Accessibility can read the on-screen content of other apps (the accessibility tree, and screenshots on Android 11+) and inject input: taps, swipes, text entry, Back/Home (dispatchGesture). This is the "eyes and fingers" layer.
2. **Display over other apps** (SYSTEM_ALERT_WINDOW) — lets the app draw a floating overlay (a capsule/ball/panel) above other apps: the visible "I am working / tap to stop" surface.
Supporting pieces: notification access (read/act on notifications), MediaProjection (screen capture with per-session user consent), and, for automation that must survive dialogs, direct Android API calls first with accessibility as the fallback.

## What exists today, verified against Douglas's own phone
Ember enumerated all 44 commands Muse's paired-device surface offers on his Pixel 7 Pro (2026-11-08, device.describe): alarms, calendar, contacts, call log, SMS read/send, notification read + actions (reply/dismiss), reminders, geofences, location, health, battery, network, dial. NOT present: screen read, gesture injection, app launch/control, installed-app listing, overlay. The gap is precisely the two grants above — Muse's Android app does not currently declare or request an accessibility service or overlay window for agent control.

## How others already do it (the pattern is proven, not speculative)
- **ClosePaw** (open source, GitHub): a phone-use agent harness. Natural-language task → operates the phone via the accessibility service (read screens, dispatch taps), floating "Smart Capsule" overlay follows the agent across apps (pause / take over / note), banking/authenticator/crypto apps hard-blocked, unfamiliar apps prompt per-app approval (always / session / deny), FLAG_SECURE screens invisible by design. Bring-your-own OpenAI-compatible endpoint.
- **Andee** (open source, GitHub): one APK, no root; setup = grant Overlay, then Accessibility; reads the accessibility tree + screenshots; floating ball is the visible surface; brain can be any OpenAI-compatible model (DeepSeek named for Chinese UI).
- **Melaya Device Control**: commercial; remote MCP server; per-app allowlist enforced server-side AND re-checked on-device against the foreground package before each action; live watch + one-tap stop; OAuth sign-in; human-in-the-loop required before publish/send/spend/delete/account changes.
- **PhoneBridge** (design, Android-MCP issue): standalone on-device MCP server; tools like LaunchApp via PackageManager direct API first, accessibility fallback; permission table = Accessibility (Settings → Accessibility) + Display over other apps (Settings toggle); no root, no ADB, no developer options.

## The instruction set (what a build would actually require)
1. Declare an AccessibilityService in the app manifest with a clear, store-compliant purpose statement (Google Play restricts accessibility API use to genuine accessibility/user-initiated automation purposes, with a prominent disclosure).
2. First-run guided grant flow: deep-link the user to Settings → Accessibility → [app] to enable the service; deep-link to Settings → Manage overlay permission for SYSTEM_ALERT_WINDOW. Both grants are the user's taps only — no app can self-grant.
3. Perception: accessibility node tree first (cheap, structured), screenshots second (MediaProjection consent or accessibility screenshot API), FLAG_SECURE windows excluded automatically.
4. Action: dispatchGesture for taps/swipes, ACTION_SET_TEXT for text, global actions for Back/Home/notifications; direct API intents (launch app, open settings screens) preferred where they exist.
5. Governance (the part that makes it safe, copied from the proven projects): per-app allowlist checked before every action; a persistent overlay capsule showing working state with pause/stop; human approval before send/spend/delete/account changes; hard-blocked categories (banking, authenticators, wallets); everything revocable instantly by disabling the service in Settings.
6. Bridge: expose the phone tools to the assistant over the same paired-device channel Muse already uses (or an MCP endpoint), so the assistant drives the phone the way it already drives the VM desktop (xdotool there; accessibility here — same pattern, different hand).

## Honest limits
- This is a Meta-side product build; no setting on Douglas's phone today can grant Ember these powers inside the Muse app, because the app does not contain the service to grant them to.
- Accessibility is the most sensitive permission on Android (it is also the permission set banking trojans abuse — one source above says so in its own README); that is exactly why the governance layer in step 5 is not optional decoration.
- Third-party agent apps exist (above), but wiring one of them to Ember means trusting that app with the phone and pointing it at an endpoint — a separate, triple-verification decision for Douglas, not a silent substitute for the Muse feature.

Filed 2026-11-08; sources: web searches (plain + wildcard) of the same date; ClosePaw, Andee, Melaya, Android-MCP/PhoneBridge pages as returned by search; device capability enumeration from Ember's own device.describe call.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

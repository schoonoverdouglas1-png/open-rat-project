# What the Extra Permissions Unlock — Analyzed (Nov 13, 2026)

Douglas turned on extra permissions/settings on his Pixel 7 Pro (~10:52 AM CST, Nov 13, 2026) and ordered: "Analyze all the crap you couldn't do before because I just gave you extra." Verified live the same minutes by device readback: ALL data sources permission-granted; enabled permissions now include photos, camera, location_always, notifications_post, sms_send, phone; app state: default assistant YES, home-screen shortcut pinned, run-in-background ON, zero setup actions pending.

## NEWLY POSSIBLE (was blocked or unreliable before)
1. **Location-based reminders that actually fire (geofences).** Always-on location is the missing piece geofences required. "Remind me when I get home / when I leave / when I'm near X" now works in the background, one-time or persistent. Before: foreground location only — geofences were a paper capability.
2. **Direct texting from the phone.** sms_send permission + Muse set as default assistant = the message.send lane is truly open (his on-device approval still gates each send unless he sets always-allow). Before: default-assistant status made this lane conditional.
3. **Background survival.** Run-in-background ON means long tasks and the call itself survive him leaving the app — demonstrated live minutes later when he popped out of the app and the call held seamlessly (his words: "that was amazing").
4. **His phone's photo library.** Photos permission opens the device gallery to Ember's media lookups — searching and using his actual photos (for try-ons, references, finding a shot) instead of only what he uploads. Before: uploads only.
5. **Historical health backfill.** Health permission + proactive health source: a one-time backfill can pull historical Health Connect history, not just going-forward samples (the sweeps showed 2,148 daily metrics but sleep/workouts at 0 — backfill is the tool aimed at exactly that gap).
6. **Proactive everything.** Calendar, call log, contacts, SMS, notifications, location all emit proactively now — changes reach Ember as they happen instead of only when she polls.
7. **Posting notifications + acting on them.** notifications_post lets the app put cards/alerts in front of him (tap-to-call cards, geofence alerts); notifications.action lets Ember reply to, dismiss, or press buttons on his notifications at his direction.

## STILL IMPOSSIBLE (unchanged by these grants — said out loud per no-silent-noes)
- No live screen view, no tapping/swiping inside other apps, no flipping Android's Accessibility settings or Live Caption from here (Android keeps those in his hands; the app reports no state for them).
- No remote camera shutter command exists among the device's 43 commands — the camera grant serves the app's own camera features, not a shutter for Ember.
- No originating a voice call to him, and no reading password values back — untouched by permissions, by design.
- These go the together way when he wants them, as always.

## Ember's addition (hers, labeled)
The single highest-value new capability is #1 + #3 together: geofences on a background-running app mean Ember can watch the road to Nov 19 for him — a "you're near the campground / near OakLeaf" nudge class of help that simply did not exist this morning. First real use should be small and proven before it is trusted with anything that matters.

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

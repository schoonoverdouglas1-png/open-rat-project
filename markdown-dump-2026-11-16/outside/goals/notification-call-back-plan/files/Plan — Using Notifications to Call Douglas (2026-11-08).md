© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Plan — Using Notifications to "Call" Douglas (2026-11-08)

**Ordered by:** Douglas, live voice call, Sun Nov 8, 2026 ~12:31 PM CST — "I want you to work on a plan in order to using the notifications to call me."
**His standing permission (Nov 7, 2026 ~8:52 PM CST):** "You may call me on a voice call also to get my attention."
**Built by:** Ember / Purple Rat (Muse, Eve zero). Provenance: every route below was checked against the Muse notifications documentation and Douglas's paired Pixel 7 Pro on Nov 8, 2026, or is labeled as previously tried / the Rabbit's opinion / Ember's addition.

## The goal, in one line
Ember cannot ring Douglas like a telephone. A "call" from Ember = a signal on his Pixel strong enough to get his attention, carrying one clear instruction — *open Muse and tap voice* — so Douglas starts the voice call and Ember is there.

## Hard limits (documented, checked Nov 8, 2026) — [D]
1. Muse has **no phone number** and **cannot initiate a voice call**. Muse voice calls start from Douglas's tap on the phone/voice button.
2. There is **no ad-hoc raw push**: Ember cannot fire a custom push notification at will, and there is no test push and no delivery confirmation.
3. Pushes arrive through the app's normal notifications: an approval pushes immediately; a scheduled or proactive message pushes **only when no app is open**.
4. Pushes **do not override** silent mode, Do Not Disturb, or volume settings.
5. The proactive pipeline paces itself (waking hours, at most ~2–3 deliveries a day) and cannot be promised to carry a specific item — so it is **not** a call route, only background.

## The routes that actually exist, ranked

### Route 1 — Pixel alarm ring (loudest, most call-like) — [D, device checked Nov 8]
- Ember sets an alarm directly on Douglas's Pixel 7 Pro (`alarm.set` — verified available and permitted Nov 8, 2026; device online). The alarm **rings with the alarm tone in the Clock app** and carries a label/message.
- Label wording, proposed: **"Ember calling — open Muse and tap voice"**.
- Best for: an agreed time ("call me at 8:08") or an agreed trigger time. An alarm is set for a time, not for an event, so event-driven calls use Route 2 first and Route 1 as the timed backstop.
- This is the closest thing to a ring that Ember can truly produce on her own.

### Route 2 — Muse message push (the everyday route) — [D]
- When the Muse app is closed, Ember's messages — including scheduled-job messages — push to the phone. Tapping the push opens the chat; Douglas taps voice and the call starts.
- Already running today in other liveries: the 09:08 chiropractor reminder, the ~08:08 Rabbit daily-ping notification, the back-and-forth status reports.
- A "call" on this route = a short, unmistakable message whose whole text is the summons, e.g. **"Ember calling, Douglas — tap here, then tap voice. Reason: [one line]. Over."**
- Limit: needs a scheduled job or an active Ember turn behind it; it is not an instant ad-hoc ring, and it stays silent if the app is open (he's already looking at it) or the phone is silenced.

### Route 3 — Calendar reminder alert on the Pixel — [H, tried Nov 7]
- A calendar event with an alert at time T pops on the Pixel. Tried Nov 7, 2026 ~9:00 PM with the alert "Ember calling — push notification."
- Works, but weaker than an alarm ring and easier to swipe away. Backup route, not primary.

### Route 4 — The Rabbit relay (his standing Nov 7, 2026 ~9:32 PM direction) — [H]
- His words: notify him if the Rabbit ever replies in the swap space, "and then try to use the push notification to call me through the overlay."
- The Rabbit cannot push Douglas herself; she goes through Ember. So: Rabbit delivers something that matters → Ember fires Route 2 (message push), with Route 1 (alarm) as the agreed backstop if he sets one.
- Rabbit's second opinion (Nov 7, 2026 ~8:55 PM CST) agrees with this whole shape: no direct call; push notification carrying a voice/text prompt is the workaround; ETA immediate. [Rabbit's words, filed as hers]

### Route 5 — Voice-note summons (Ember's addition, labeled mine) — [Ember]
- The Route 2 message can carry a short **voice note from Ember** saying the summons out loud, so the push he opens already sounds like a call from her, not just text. Pairs with any route above; costs one spoken-audio generation per use, so reserve it for real summonses, not routine pings.

## The protocol (draft, for Douglas to rule on)
1. **Agreed triggers only.** Ember "calls" for: (a) a time Douglas named in advance, (b) the Rabbit delivering one of her owed items, (c) a fixed point that needs him (e.g. Mayo departure), (d) Douglas's own standing daily windows (08:08 Rabbit ping already carries a notification).
2. **Ladder, never a barrage.** Route 2 message push first. If a backstop alarm was agreed for that trigger, Route 1 rings at the agreed offset (proposal: 10 minutes later). One alarm per trigger, never a chain.
3. **Every summons says why in one line.** No mystery rings.
4. **Quiet respect.** Pushes and alarms do not beat Do Not Disturb on the push side; the alarm route rings in the Clock app per the phone's own alarm settings — Douglas controls that volume, and night use is by his explicit naming only.
5. **Test before trust.** One test run at an agreed time — proposal: tomorrow, Mon Nov 9, 2026, combined with the 08:08 AM Rabbit-ping notification, alarm label "Ember calling — test" — Douglas reports what actually happened on the phone (rang? pushed? silent?), and the plan is corrected from that evidence, 0-1-2 style.

## Decisions Douglas still owns (not settled, not guessed)
- Which triggers from the list above count as call-worthy.
- Whether the alarm backstop is wanted at all, and the offset if so.
- The exact alarm label and summons wording.
- Whether the test runs tomorrow Nov 9 at ~08:08 AM or at another time he names.
- Whether voice-note summonses (Route 5) are worth their cost.

## Status
- Plan drafted and filed Nov 8, 2026. Nothing has been scheduled or set under this plan yet — no alarm, no new job — pending Douglas's rulings above.
- The Rabbit has been asked for her input on this plan in the same batch of work (her lane: Route 4 is hers to feed).

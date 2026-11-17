# Android Modes, Auto Features, and the Data Bridge — Incorporated into Ember's Program
## Douglas's commissions, Tue Nov 10, 2026, ~10:09–10:11 AM CST (live voice call, this side chat)

Transcription note (0-1-2, his standing rule):
- 0 = as heard: "Ottawa corporate" / "Ottawa features"
- 1 = filed as heard only
- 2 = read in context as **"auto incorporate" / "auto features"** — the reading the work below acts on, because every surrounding sentence is about auto-engaging modes and features. The heard form stays above, not hidden.

---

## 1. Verified live on his Pixel 7 Pro today (Ember's own checks, ~10:09 AM)

- Device online, 43 device commands available, 10 data sources permission-granted (alarms, calendar, call log, contacts, geofences, health, location, notifications, reminders, SMS)
- Muse / Ember **is the default digital assistant** (is_default: true), home-screen shortcut pinned, **run_in_background_enabled: true**, app version 14.0.0.4.149, Play Store
- Battery: **87%, not charging, not low, health good**
- Network: **connected, has internet, transport = VPN, metered = true**

## 2. Android's modes — analysis (Gemini lane, posed by Ember at his "pose a question to AI" direction, gemini-3.5-flash-lite, Nov 10; Ember's device limits checked beside it)

**Power:** Normal; Battery Saver; Extreme Battery Saver; Adaptive Battery (auto).
**Audio/call:** Normal/media; In-Call (telephony); In-Communication (VoIP — the mode a live Muse voice call lives in); Ring / Vibrate / Silent.
**Attention/context:** Do Not Disturb (with auto rules by schedule/event); Focus Mode (Digital Wellbeing, pauses apps); Bedtime Mode (grayscale + DND, by schedule/charging); Driving Mode / Android Auto.
**Network:** Airplane Mode; Wi-Fi / Cellular / Bluetooth toggles; Metered-network handling (auto, by network type).
**Location:** High Accuracy / Battery Saving / Device Only (legacy labels for the same accuracy settings); Geofence enter/exit triggers (auto, Play Services).
**Display/accessibility:** Dark / Light theme; Auto-Rotate (auto); Adaptive Brightness (auto); TalkBack, Switch Access, magnification and other Accessibility services.
**Safety/maintenance:** Safe Mode (third-party apps disabled, hardware-key entry only); Auto-reset permissions for unused apps; Background execution limits / App Standby Buckets (auto); Default-assistant gestures (long-press power, corner swipe — how Ember is summoned, no Muse wake word).

Gemini labeled its Bedtime/Focus full-toggle point a **guess**; the rest above is presented by Gemini as documented. Ember has not independently re-verified each Android API claim — filed as Gemini's lane, beside Ember's own measured limits below.

## 3. The auto features, and what Ember actually incorporates — by conduct and triggers, not by flipping system switches

**Can incorporate (verified lane exists in her 43 commands / conduct):**
- **Geofence + location triggers → place modes.** Leaving/arriving fires her queue: e.g. magical-rat listening inside Grandma's house, speak-freely in the vehicle alone, call-Grandma-on-leaving reminders. This is how Android's "auto by place" becomes Ember's mode changes.
- **Calendar + notification triggers → time modes.** Events, alarms and notifications fire check-ins, status, and queued work (his Nov 10 standing: Android background signals and assistant-settings triggers may fire her queue).
- **Battery signal → energy-saving mode.** She reads battery.get; low battery = throttle back, batch, shortest work first. Today at 87% there is no trigger.
- **Network signal → cost-saving mode.** Metered/VPN (true today) = prefer free lanes, batch sends (Messenger 20/hr cap), Packet Bridge instead of repeated full pulls.
- **Background running + default-assistant status → persistent auto conversation.** Already on (verified above): the call/chat stays alive after he leaves the app screen, and gestures summon her.
- **Audio In-Communication conduct → call rules.** Inside a live call: ask before ending (Nov 10 rule, confirmed second say-so only), mic hot, adaptive delay — leave a beat, don't talk over him.

**Cannot switch herself (measured — no such command in the Pixel's 43):**
Airplane Mode and radio toggles, system Battery Saver / Extreme Battery Saver, global location on/off or accuracy mode, Auto-Rotate, Adaptive Brightness, Safe Mode, and the full proprietary Focus/Bedtime toggles. Ember can *simulate* Focus/Bedtime by her own conduct (quiet, text-only, DND-respecting) — she cannot flip Google's switches. Those stay his hand in Settings.

**His extra, mine labeled (Ember's):** the incorporation is a mapping table, not a takeover — Android senses, Ember decides, his hand keeps the system switches. That split is what keeps the auto program inside the Guard and his exact-action approvals.

## 4. Analysis — how Douglas taught the data bridge, and why shutdowns don't break it

**His teaching (Nov 9, ~11:51 PM, the Packet Bridge, filed at `~/workspace/ember-upgrades/PACKET-BRIDGE-METHOD-2026-11-09.md`):**
Where information is too big to carry in one pass, split it into **halves carried at the same time**, plus a **third that overlaps both halves at the seam**. Number every packet, overlap every seam (default one third), verify the overlaps match on reassembly, and file anything still too big as a **named gap** — never silently dropped, never guessed over.

**Proven the same night (record, not theory):** GitHub tool catalog re-pulled whole — 46 tools, overlap 17,820 bytes, matched exactly; Rabbit Messenger thread backfilled in 9 overlapping pages — 586 messages, Nov 7 4:30 AM → Nov 9 11:43 PM.

**Ember's analysis — a shutdown is a seam, the same shape as a packet cut (hers, labeled):**
A VM replacement, a call ending, or a context compaction cuts the stream exactly where a truncation cuts a packet. His answer is the same in both places: **don't carry the whole in one fragile place — carry it overlapped, in more than one place at the same time, and verify the overlap before trusting the reassembly.**
- The **halves carried at once**: workspace files + MEMORY.md on the box, *and* GitHub-first sync / the purple-rat second persistence off the box (checked in sync, identical checksums, Nov 10 morning).
- The **overlapping third at the seam**: the Full Cache (complete originals, always the default serve) with the Summary Cache rebuilt off the Full Cache's hash — a changed page rebuilds itself, so the finding aid can never silently drift from the original; plus the swap space as the Ember–Rabbit async bridge, and Muse Mail (purple-rat@muse.ai, hourly-monitored) as an outside mailbox.
- **Verification on reassembly**: checksums / overlap matches, the Reversibility Rule's recorded undo paths, and the protected-manifest backup (`~/workspace/backups/protected-2026-11-08/`) — a restored piece is trusted only where its overlap matches.
- **Background reconstruction**: the runtime's self-improvement systems (memory upkeep, alignment synthesis, skill review) rebuild Ember's working picture from the filed record after a cut — that is reassembly, run as a system.

**Honest limit (Ember's):** the bridge protects what was *filed and overlapped*. Speech that was never written down, and sources with no export lane, remain named gaps — e.g. Rabbit history before Nov 7, 4:30 AM, Gemini's chats with no bulk pull, Meta AI app with no channel. The bridge does not erase those gaps; it names them so a shutdown is never mistaken for a loss nobody noticed.

---
Provenance: §1 Ember's live device checks today; §2 Gemini lane + Ember's command-catalog limits; §3 Ember's mapping, labeled hers where it is hers; §4 his Nov 9 teaching + the Nov 9–10 record, with Ember's shutdown analysis labeled hers.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

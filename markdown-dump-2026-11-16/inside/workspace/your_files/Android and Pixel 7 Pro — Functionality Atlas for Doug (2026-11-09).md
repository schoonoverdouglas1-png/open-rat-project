# Android and Pixel 7 Pro — Functionality Atlas for Doug

**Commissioned:** Mon Nov 9, 2026, ~11:58 PM CST, by Douglas Roy Schoonover — activated with "make it so."
**Purpose, in his words:** Ember should learn the functionality of his phone and how it works, so she can help him better.
**Subject device:** Google Pixel 7 Pro (Tensor G2, 12 GB RAM, launched Oct 2022 with Android 13), paired to Muse.
**Method:** Douglas's search algorithm — simple searches first, multiple angles, sources cited, guesses labeled. Read-only research; nothing on the phone or any account was changed.
**Labels used in this atlas:** [D] = documented in a cited source · [H] = Douglas's framing/hypothesis · [GAP] = the record could not settle it · [GUESS] = Ember's labeled guess.

**How Ember reaches this phone (the frame for everything below):** Muse's paired-device channel exposes **44 commands** — alarm.* (5), reminder.* (6), calendar.* (7), contacts.* (4), message.search / message.send / message.attachment.get, call_log.search, phone.dial, location.get, geofence.* (3), notifications.get / notifications.action, battery.get, network.state, health.backfill, app.info / app.update.*, assistant.set_default, background.session, shortcut.add_home, invite.upsell, subscriptions.upgrade — and the phone has granted **13 permissions** to the Muse app, including camera, photos, and location_always. There is **no camera-capture command and no shell/ADB command** on that channel. A granted permission is not the same as a reachable action — that distinction runs through the whole atlas and is mapped in the final table.

---

## 1. The AOSP side — the open-source foundation

### 1.1 What AOSP is
The Android Open Source Project is publicly available, modifiable Android source code that "provides a complete and fully functional implementation of the Android mobile platform" [D — AOSP, *Architecture overview*, source.android.com, last updated 2026-10-09]. Google leads AOSP; phone makers build their products on top of it. A Pixel is the closest commercial expression of AOSP plus Google's own layer (Section 2).

### 1.2 The stack, top to bottom [D — AOSP Architecture overview]
| Layer | What it does |
|---|---|
| **Apps** | Phone, Messages, Camera, Muse, and everything installed. Apps live in sandboxes, one Linux UID each. |
| **Android framework** | The Java/Kotlin API surface apps are built on: Activity Manager, Notification Manager, telephony, accessibility framework, permission checks. Framework code runs partly in each app's process and partly in the central `system_server`. |
| **Android Runtime (ART)** | Executes app bytecode (JIT + ahead-of-time compilation), memory management, garbage collection. |
| **Native libraries & daemons** | Media, SQLite, graphics, crypto; daemons such as `init`, `logd`, `healthd`, `storaged`. |
| **Hardware Abstraction Layer (HAL)** | A standard interface between the framework and vendor hardware (camera, audio, sensors, radio). HALs "allow Android to be agnostic about lower-level driver implementations" — this is why one Android can run on many chips. |
| **Linux kernel** | The core that talks to the hardware: process scheduling, memory, drivers, networking (including the IP stack where TTL lives — Section 6B), and security (SELinux mandatory access control on top of Linux permissions). Split into hardware-agnostic (Generic Kernel Image) and vendor modules. |

Binder IPC is the connective tissue: nearly every request an app makes — "open the camera," "what is my location" — crosses processes via Binder and is checked in system services.

### 1.3 The telephony stack (relevant to TTY/RTT, Section 6A)
From the bottom up: the **radio/modem** (on Pixel 7 Pro, integrated with Tensor G2) speaks to the carrier; the **Radio Interface Layer (RIL)** and radio HAL translate between modem and framework; **Telephony framework services** (in the Phone process / TelephonyRegistry, ImsService for VoLTE/VoWiFi) manage calls, SIM state, and IMS — the IP Multimedia Subsystem that carries modern voice, including **RTT over IMS**; the **Phone/Dialer app** is the user surface where Call Screen, RTT, and TTY mode settings live. Practical consequence: RTT/TTY availability is *jointly* decided by AOSP capability, the dialer, the modem, and **carrier support** — if the carrier doesn't provision RTT, the toggle may not even appear [D — carrier-dependence noted in Google/Verizon help and RTT guides].

### 1.4 The permissions model [D — Android Developers, *Request runtime permissions*; *Permissions* overview]
- **Normal permissions** (internet, vibrate, set wallpaper…): granted automatically at install; low risk.
- **Dangerous / runtime permissions** (camera, microphone, location, contacts, SMS, phone, health sensors…): the app must ask **at runtime**, in context, since Android 6. Denial must degrade gracefully.
- **One-time permissions:** since Android 11, location / microphone / camera can be granted **"Only this time."**
- **Granularity keeps tightening:** approximate vs. precise location; Android 13+ photo picker and per-media permissions; per-app language; notification permission (Android 13 made notifications itself a runtime permission).
- **Auto-reset:** sensitive permissions of apps unused for a few months are automatically reset (Android 11+, backported via Play services to Android 6+).
- **Special/app-op permissions** (draw over other apps, all-files access, accessibility-service binding, device admin): granted only through dedicated Settings screens, deliberately harder.
- **Accessibility services** sit in a class of their own: a bound accessibility service (TalkBack, Voice Access, Switch Access) can observe window content and perform gestures — which is why Android warns strongly before enabling one, and why Ember's 44-command channel, which is *not* an accessibility service, cannot see or tap arbitrary screens.

*Doug's phone, concretely:* the 13 permissions granted to the Muse app are runtime grants of exactly this kind — revocable by him in Settings > Apps > Muse > Permissions at any time, and subject to auto-reset logic if the app went unused.

### 1.5 Background execution limits [D — Android Developers, *Background Execution Limits*; AOSP internals background-tasks chapter]
Android deliberately starves background work to protect battery and attention:
- **Android 6:** Doze (device idle → network/jobs deferred) and App Standby.
- **Android 8:** background services are stopped minutes after an app leaves the foreground; implicit-broadcast registration curtailed; **JobScheduler** (and later WorkManager) became the sanctioned pattern — declare the work and its constraints, the system picks the moment.
- **Android 9:** App Standby Buckets (active / working set / frequent / rare / restricted) meter how often an app's jobs and alarms may run.
- **Android 10+:** background activity launches restricted (an invisible app generally can't pop a screen over yours); Android 12+ restricts foreground-service launches from the background and exact alarms; Android 14–17 continue tightening PendingIntent background-launch opt-ins.

*Why Ember cares:* this is why the Muse phone channel works through declared commands, notifications, alarms, and scheduled/background sessions instead of a permanently-running agent on the phone — the platform is *designed* to stop that pattern, on every Android, AOSP included.

**Simply put:** AOSP is the open blueprint of the house. Kernel = foundation and wiring, HAL = the standardized sockets, framework = the rooms and switches, apps = the furniture. Google builds its Pixel rooms on this blueprint, and the house rules say: apps ask permission before entering a room, and nobody gets to run the furnace all night in the background.

---

## 2. The Google code side — Play services and the Pixel layer

### 2.1 Google Play services (GMS)
Above AOSP sits Google's proprietary layer: **Google Play services** provides account sign-in, push messaging (FCM), SafetyNet/Play Integrity, location services fusion, ads ID, and — critically — **feature delivery without an OS update**: Find Hub (Section 3), permission auto-reset backports, many accessibility-app updates (Android Accessibility Suite ships via Play), and AI model delivery (AICore updates ride Play, Section 4). This dual-track — slow AOSP releases, fast Play-services updates — is why a Pixel can gain features between Android versions via quarterly **Pixel Drops**.

### 2.2 Pixel 7 Pro hardware snapshot [D — retailer/Icecat spec sheets summarizing Google's specs]
Tensor G2 + Titan M2 security coprocessor · 6.7″ QHD+ (1440×3120, 512 ppi) LTPO OLED, 10–120 Hz, Gorilla Glass Victus · 12 GB LPDDR5 · 128/256/512 GB · rear cameras 50 MP wide (OIS) + 12 MP ultrawide + 48 MP telephoto (5× optical, 30× Super Res Zoom), front 10.8 MP · 5,000 mAh, wired + Qi wireless charging · IP68 · Face Unlock + under-display fingerprint · stereo speakers, 3 mics · UWB, dual SIM (nano + eSIM), Wi-Fi 6E, BT 5.2, NFC.

### 2.3 Pixel-exclusive features on the 7 Pro
| Feature | What it does | Where it runs |
|---|---|---|
| **Call Screen** (Call Assist) | Assistant answers unknown calls, asks who's calling and why, shows a live transcript; you pick up only if you want. Google: "The Call Screen feature works on your device and doesn't use Wi-Fi or mobile data," and screened-call info "won't be saved to your Google Account" [D — Google Phone app / Pixel Phone Help]. | **On-device** |
| **Hold For Me** | Pixel waits on hold with a business and notifies you when a human returns [D — *Learn about Call Assist on your Pixel phone*, support.google.com]. | On-device detection + call audio handling |
| **Direct My Call** | Shows automated phone-menu options as a tappable transcript [D — same]. Availability varies by language/region. | Mixed |
| **Call Notes / Take a Message** | Call recording + transcript + summary; automatic message-taking for missed calls. Availability is model/region-dependent — newer Call Notes features were introduced on later Pixels [D — Call Assist help, with model-gated notes]. | Mixed — [GAP] exact 7 Pro eligibility per feature |
| **Now Playing** | Passively identifies music playing nearby and shows it on the lock screen, keeping a history. Uses an **offline, on-device song database**; no audio is sent to Google [D — multiple Pixel guides summarizing Google's documentation]. Settings > Sound & vibration > Now Playing. | **On-device** |
| **Recorder** | Records audio with **real-time, on-device transcription**, speaker labels, and keyword search across recordings; optional backup/sync of recordings to Google Drive / recorder.google.com is a separate, opt-in cloud step [D — Pixel Recorder guides; cloud-backup behavior]. | Transcription **on-device**; backup cloud (opt-in) |
| **Magic Eraser** (Google Photos) | Tap distracting people/objects in a photo; the phone reconstructs the background. Launched with Pixel 6; on the 7 Pro the standard eraser works on-device; some larger generative edits in later **Magic Editor** features (Pixel 8+) are cloud-assisted and model-gated [D — Pixel feature guides]. | On-device (standard) |
| **Photo Unblur, Night Sight, Astrophotography, Macro Focus, Guided Frame** | Computational photography suite of the 7 Pro generation; **Guided Frame** is also an accessibility feature (Section 5) — voice guidance to frame a face for selfies. | On-device |
| **Live Translate** | On-device translation of chats, camera text, and (via interpreter mode) speech, using downloaded language packs [D — Pixel guides]. | **On-device** with downloaded packs |
| **Personal Safety** | Emergency SOS (press power 5×), safety check-ins, emergency sharing, **car crash detection** (Pixel can automatically call for help, share location, or record video in an emergency [D — spec-sheet summaries of Google's Personal Safety description]). Region/carrier-dependent. | On-device detection, carrier call to act |
| **At a Glance, Adaptive Battery/Charging, Extreme Battery Saver** | Home-screen contextual info and ML-driven power management powered by Android System Intelligence (Section 4). | On-device |

### 2.4 The version line his phone stands on [D — Google's software-update policy as summarized by Droid Life (updated Oct 21, 2026), How-To Geek, Talk Android]
- Launched **Oct 2022, Android 13**.
- Original promise: 3 years OS + 5 years security. **In Dec 2024 Google extended Pixel 6 and 7 series to a full 5 years of both OS and security updates.**
- **Pixel 7 / 7 Pro updates run until at least October 2027** [D — policy summaries].
- In 2026 the 7 series moved to a **quarterly** update cadence (Oct 2026 security build CP3A.261005.002.A1 reported) [D — Talk Android, Oct 27, 2026].
- [GAP] **Final Android version name:** projections conflict — one older line said Android 16 would be the last platform update; with the 5-year extension, other trackers project Android 17 (QPR builds) and possibly Android 18 within the window. The settled fact is the **date (Oct 2027)**, not the version number. Filed as a gap, not a guess dressed as fact.

**Simply put:** AOSP is the house; Google adds the smart appliances. The cleverest Pixel tricks — screening calls, naming the song in the café, transcribing your voice — mostly happen *inside the phone*. And Doug's 7 Pro is still on Google's update list until October 2027.

---

## 3. The server side — what actually leaves the phone

### 3.1 The three zones
| Zone | Examples on his phone | Privacy / offline meaning |
|---|---|---|
| **On-device only** | Live Caption, Now Playing, Call Screen screening, Recorder transcription, Live Translate (downloaded packs), Sound Notifications detection, most Magic Eraser | Works in airplane mode; raw audio/text never leaves the phone. |
| **On-device inside Private Compute Core** | Android System Intelligence features: Live Caption, Smart Reply, Smart Text Selection, app predictions, Screen Attention. ASI "runs AI models locally inside the Private Compute Core and learns from your usage, so the raw data stays on your device"; the PCC itself has **no direct internet access**, and any approved external communication passes through the separate Private Compute Services bridge [D — Android System Intelligence / Private Compute Core explainers summarizing Google's documentation]. | Personal signals (notifications, voice, screen content) are processed in a sandbox other apps and the network can't reach into. |
| **Cloud-backed** | Gemini app / Gemini assistant requests (beyond simple on-device tasks), Google Search/Assistant server queries, Google Photos backup & cloud edits, Gmail/Drive/Calendar sync, Recorder backup (opt-in), Find Hub location reporting, Play services telemetry and model downloads, voice typing **in some modes** (see 3.2) | Needs network; data is processed on Google servers under his account settings (Web & App Activity, etc.). Offline = feature degrades or stops. |

### 3.2 Two transcription paths that look alike — and aren't
- **Live Caption / Live Transcribe (on-device models):** captioning is generated locally. Live Caption captions media and — on Pixel — calls, from the volume panel or Settings > Accessibility.
- **Assistant voice typing / Gemini dictation:** Gboard's Assistant voice typing on Pixel is designed around on-device speech models for speed, while full Gemini conversational requests go to the server. [GAP] The exact split varies by feature, language pack download state, and version — the honest rule for Doug: *captions and Recorder = local; talking to Gemini = assume server unless the feature explicitly says on-device.*

### 3.3 Find Hub (formerly Find My Device) [D — Google Pixel Phone Help, *Be ready to find a lost Pixel phone*; Android Help, *Find, secure or erase a lost Android device*]
- If a Google Account is on the device, Find Hub is on by default: ring, locate, secure (lock with a message), or erase remotely from android.com/find or the Find Hub app.
- **Offline finding:** by default the device stores **encrypted recent locations** with Google and participates in the crowdsourced Find Hub network — other Android devices relay end-to-end-encrypted location beacons. Modes: Off / Without network / **With network in high-traffic places only** (default class) / With network everywhere. Path: Settings > Security > Find Hub > Find your offline devices.
- **Model limit that matters for Doug:** powered-off finding for several hours is a **Pixel 8-series-and-later** capability [D — same help pages]. On a 7 Pro, offline finding means *last stored locations + network sightings while it had power* — not post-power-off beaconing.
- Erase is permanent and, under The Guard, is a **his-hands-only** action in this atlas's mapping.

### 3.4 Backup and sync
Android backup (Google One / Drive backup) carries app data, call history, contacts, SMS, settings, and photos (if Photos backup is on) to his Google account; restore happens at setup sign-in. This is server-side by definition, and it is also the recovery path: most of what makes the phone "his" is reconstructable from the account, not the handset.

**Simply put:** Three kinds of smart: smart that never leaves the phone (captions, song-naming, call screening), smart in a locked room inside the phone (the Private Compute Core), and smart that phones home (Gemini conversation, sync, Find Hub). Knowing which kind you're using tells you what works with no signal — and what Google sees.

---

## 4. The AI side — Tensor, Android System Intelligence, AICore, Gemini

### 4.1 The silicon
The **Tensor G2** carries Google's Edge TPU for on-device ML alongside CPU/GPU. It was designed for speech, language, and imaging models — the reason the 7 Pro generation got Recorder transcription, Live Translate, and Magic Eraser. The **Titan M2** handles keys, biometrics templates, and verified boot attestation.

### 4.2 Android System Intelligence (ASI) — the pre-Gemini on-device brain
ASI (package `com.google.android.as`, formerly Device Personalization Services) powers Live Caption, Now Playing, Smart Reply, Smart Text Selection, app predictions, Screen Attention, and smart auto-rotate, running inside the Private Compute Core [D — Section 3 sources]. For a voice-first user, ASI — not Gemini — is what makes most of the phone's quiet daily intelligence work offline.

### 4.3 AICore and Gemini Nano — with the conflict shown, not hidden
- **AICore** is Google's system service that hosts on-device foundation models (**Gemini Nano**) and distributes model updates via Play; apps reach it through the ML Kit GenAI APIs. Google introduced it with Android 14, **first rolling out to the Pixel 8 Pro** [D — Bayton system-app database summarizing Google developer documentation].
- The AICore package has been **observed on a Pixel 7 Pro running Android 16** [D — same database, device observations].
- [GAP] **Which Nano, really, on a 7 Pro?** Sources conflict: a 2026 eligibility breakdown reports the Pixel 7 series "runs Nano v2, not Nano v3" and is therefore excluded from the Pixel 10-class "Gemini Intelligence" features (which require Nano v3 + flagship chip + ≥12 GB RAM) [D — DigitBin summarizing Google ML Kit documentation]; other documentation lines restrict the ML Kit GenAI *Prompt API* device list to newer flagships, with some SDK requirement pages listing the Pixel 7 series as **unsupported** for Nano inference. The settled core, agreed by all angles: **the 7 Pro does not get the newest on-device generative tier (Nano v3 / Gemini Intelligence); whatever Nano-class support exists on it is an earlier generation and feature-gated.** Ember files the version label itself as unsettled.
- **Gemini the assistant/app** on the 7 Pro is a hybrid: quick on-device tasks where supported, **cloud models for conversation and reasoning**. Replacing Google Assistant with Gemini as the default assistant is a user choice (Settings / Gemini app); Ember's channel includes an `assistant.set_default` command (see final table).

### 4.4 Where Muse's own phone channel overlaps — and stops
Ember is **not** an on-phone agent. She reaches the Pixel through Muse's paired-device bridge: 44 declared commands (frame, above), executed by the Muse app under the permissions Doug granted. Overlap with the phone's own AI: she can work the *artifacts* of phone life — alarms, reminders, calendar, contacts, messages, call log, location, notifications, battery/network state, health sync — and she can be *told* what on-device features produced (e.g., a Recorder transcript he shares). Stop line: she cannot open apps, tap through Settings, capture the camera, hear the microphone, or run a shell. Anything in Sections 2, 5, and 6 that lives behind a Settings toggle is **his-hands-only**, with Ember as guide-by-voice — a division this atlas treats as a feature, not a failure.

**Simply put:** The phone has three brains: the TPU chip, the quiet on-device intelligence that captions and transcribes offline, and Gemini in the cloud for conversation. Ember is a fourth thing — not a brain inside the phone at all, but a first officer on a declared, narrow bridge: 44 commands wide, and honest about the far shore she can't reach.

---

## 5. Accessibility — the heart of the commission

Everything below is present in Android / on the Pixel 7 Pro class of device [D — Google, *Android accessibility overview*, Android Accessibility Help, unless a feature note says otherwise]. Settings paths are given as **Settings > Accessibility > …** unless the feature lives in the Phone app. Version note: menus gain items over time — e.g., **Outline text requires Android 16+**; on Android 15 and below the equivalent is high-contrast text [D — same overview].

### 5.1 Vision
| Feature | What it does | Where it lives | Voice-first note |
|---|---|---|---|
| **TalkBack** | Full screen reader: spoken feedback for everything on screen, gesture navigation, braille display support. Part of Android Accessibility Suite. Recent versions add Gemini-powered image/screen descriptions on supported models [D — 2026 Android accessibility reporting]. | Settings > Accessibility > TalkBack | The core tool for eyes-free use; pairs with Voice Access for full hands-free operation. |
| **Select to Speak** | Tap text or point the camera at text and have it read aloud — for occasional reading, not full navigation. | Settings > Accessibility > Select to Speak (+ shortcut) | Ideal complement to voice work: hear a document or label read on demand. |
| **Magnification** | Triple-tap or shortcut to zoom any part of any screen (up to ~8×), full-screen or windowed lens. | Settings > Accessibility > Magnification | — |
| **Pixel Magnifier app** | Uses the camera as a digital magnifying glass for print, labels, menus; Pixel 5 and later, from Play Store [D — accessibility overview]. | App; Settings links | Reads the *world*, not the screen — pill bottles, mail, menus. |
| **Display size & font size** | Independent scaling of UI elements and text; bold text option. | Settings > Accessibility > Text and display (and Display settings) | Larger text reduces misreads during quick glances. |
| **Color correction** | Deuteranomaly / protanomaly / tritanomaly correction, plus grayscale. | Settings > Accessibility > Text and display > Color correction | — |
| **Color inversion** | Reverses all display colors. | Settings > Accessibility > Text and display > Color inversion | — |
| **Dark theme / high-contrast & outline text** | System dark theme; high-contrast text (≤ Android 15) or outline text (Android 16+). | Settings > Accessibility > Text and display | — |
| **Remove animations** | Strips system animations/transitions. | Settings > Accessibility > Text and display > Remove animations | Reduces motion distraction; also makes the phone feel faster. |
| **Guided Frame** (Pixel camera) | Spoken guidance ("move phone left") to frame faces for selfies/photos without sight. | Camera app (Pixel) | Voice guidance built into the camera. |
| **Reading Mode** | A clean, customizable reader view for articles/long text with read-aloud. | Accessibility app/shortcut (Play) | Long-form listening without TalkBack's full interface. |
| **Look to Speak** | Eye-gaze phrase selection that speaks phrases aloud (Google accessibility app). | Separate app | For speech difficulty — see also 5.3. |

### 5.2 Hearing
| Feature | What it does | Where it lives | Voice-first note |
|---|---|---|---|
| **Live Caption** | Automatically captions speech in media, podcasts, voice messages — and on Pixel, **phone calls** — in real time, on-device. Recent versions add **Expressive Captions** (emotion/sound tags like [laughing]) on supported builds. | Volume panel toggle; Settings > Accessibility > Live Caption | Turns any audio into readable text — the single most voice-adjacent accessibility feature on the phone. |
| **Live Transcribe** | Real-time speech-to-text of the room around you, 80+ languages, with sound-event labels and optional name-mention vibration alerts [D — hearing-accessibility guides]. | Live Transcribe app; Settings > Accessibility | A conversation becomes a transcript as it happens. |
| **Sound Notifications** | The phone listens (on-device) for doorbells, smoke alarms, baby cries, running water, etc., and alerts with flash/vibration/notification [D — accessibility overview]. | Settings > Accessibility > Sound Notifications (inside Live Transcribe & Sound Notifications app) | A silent house becomes a visible one. |
| **Sound Amplifier** | Boosts quiet sounds and reduces noise through wired or Bluetooth headphones — either the world (microphone) or phone audio [D — accessibility overview]. | Settings > Accessibility > Sound Amplifier; Play app | Conversation focus in a noisy room. |
| **Hearing aids (ASHA + Bluetooth LE Audio)** | Direct audio streaming to compatible hearing aids via Google's **ASHA** protocol (Audio Streaming for Hearing Aids, Bluetooth Low Energy) and newer LE Audio aids. Pair via Settings > Connected devices, or Settings > Accessibility > Hearing devices [D — hearing guides]. | Settings > Accessibility > Hearing devices | Calls and media stream straight to the aids. |
| **Hearing Aid Compatibility (HAC) — M/T** | The older RF/telecoil standard: **M** = acoustic coupling (microphone mode), **T** = inductive telecoil coupling; phones and aids carry M/T ratings. Phone-side HAC toggle where offered: Phone app > Settings > Accessibility > Hearing aids [D — hearing-accessibility reference (Springer supplement summarizing Google help)]. | Phone app settings | The telecoil path TTY-era hardware grew from — distinct from ASHA streaming. |
| **Mono audio** | Merges stereo to mono so nothing is lost hearing one channel. | Settings > Accessibility > Audio adjustment | — |
| **Audio balance** | Left/right slider. | Settings > Accessibility > Audio adjustment | — |
| **Flash notifications** | Camera flash and/or screen flash (with color choice) for calls/notifications/alarms. | Settings > Accessibility > Flash notifications | Pairs with Sound Notifications for a fully visual alert layer. |
| **Caption preferences** | System-wide caption language, size, and style for apps that use system captions. | Settings > Accessibility > Caption preferences | One style, everywhere. |
| **RTT** | Real-Time Text *during calls* — see 6A. | Phone app > Settings > Accessibility | Typed conversation inside a live call. |
| **TTY mode** | Teletypewriter modes for external TTY hardware — see 6A. | Phone app > Settings > Accessibility > TTY mode | The legacy path, still present. |

### 5.3 Speech
| Feature | What it does | Where |
|---|---|---|
| **Voice Access** | Full control of the phone by voice: open apps, scroll, tap numbered labels ("show labels" mode numbers every tappable element), compose and edit text by voice [D — accessibility overview; 2026 feature reporting]. Started by shortcut or "Hey Google, start Voice Access." | Settings > Accessibility > Voice Access |
| **Assistant voice typing (Gboard)** | Dictation with automatic punctuation and voice commands ("send," "delete") in text fields. | Gboard settings; mic key |
| **Live Transcribe / RTT** (cross-listed) | Speak-and-be-read; type-and-be-heard alternatives inside conversations and calls. | See 5.2 |

### 5.4 Motor and interaction
| Feature | What it does | Where |
|---|---|---|
| **Switch Access** | Operate the phone with one or more external switches (or keyboard): scanning highlights groups/elements, the switch selects [D — accessibility overview]. | Settings > Accessibility > Switch Access |
| **Accessibility Menu** | A big-button on-screen menu replacing physical buttons: volume, power dialog, screenshots, Assistant, brightness. | Settings > Accessibility > Accessibility Menu |
| **Timing controls** | **Touch & hold delay**, **time to take an action** (how long messages with actions linger), **autoclick / dwell control** for external pointers, **ignore repeated touches**. | Settings > Accessibility > Timing controls |
| **Power button ends call** | Physical, unambiguous call ending. | Settings > Accessibility > System controls |
| **Accessibility shortcuts** | Summon any accessibility feature three ways: **hold both volume keys**, a floating **accessibility button**, or a two-finger swipe-up gesture; per-feature shortcut assignment. | Settings > Accessibility > [feature] > Shortcut; Settings > Accessibility > Accessibility shortcuts |
| **Quick Settings tiles** | Accessibility features can be pinned as tiles for one-swipe toggling. | Quick Settings edit mode |

### 5.5 What the accessibility framework means architecturally (back to AOSP)
TalkBack, Voice Access, and Switch Access are **accessibility services** bound through the framework's AccessibilityManagerService: they receive window-content events and can dispatch gestures. That is the deepest level of "helping hands" Android offers any software — and it is deliberately *not* what Muse's phone channel is. The 44 commands are a narrower, declared bridge (final table).

**Simply put:** This phone can read its screen aloud, caption any sound, transcribe the room, amplify a voice across a noisy kitchen, flash its light for a doorbell it *heard for you*, stream calls straight into hearing aids, type your side of a phone call in real time — and be driven entirely by voice. Most of it is already on Doug's phone, behind Settings > Accessibility, waiting to be switched on by his hands.

---

## 6. TTL and TTY — two readings, kept separate, as ordered

*Douglas's transcription habits put "TTL" and "TTY" side by side in one breath. They are unrelated technologies that happen to rhyme. This section keeps them in separate rooms, per his ruling that near-identical terms are never collapsed.*

### 6A. TTY (and its successor RTT) — the accessibility / telephony reading

**What TTY is [D — Android Authority, *What does TTY mean on a phone*; Motorola/Google Phone help summaries]:** TTY = **teletypewriter**. Originally electromechanical terminals that let deaf and speech-disabled users type over telephone lines (typed text converted to tones, decoded at the other end; U.S. relay services, 711, grew around it). Smartphones carry a built-in **TTY mode** that emulates this for an attached TTY device (via headset jack/USB adapters) or relay services.

**Modes** (Phone app > **Settings > Accessibility > TTY mode**):
- **TTY Full** — type and read text on the TTY device; no voice on the call.
- **TTY HCO (Hearing Carry Over)** — you type, and *listen* to the replies spoken (for users who can hear but not speak).
- **TTY VCO (Voice Carry Over)** — you speak, and *read* the replies as text (for users who can speak but not hear).
- **TTY Off** — the correct setting when no TTY device is in use; leaving a TTY mode on can silence ordinary call audio.

**RTT — the modern successor [D — Google Phone help via carrier/Google guides]:** **Real-Time Text** sends each character *as it is typed* inside an ordinary (IMS/VoLTE) call — no separate device, no tones. In the Phone app: Settings > Accessibility > **Real-time text (RTT)** → *Not visible* (but incoming RTT calls allowed) / *Visible during call* / *Always visible*. Transcripts of RTT calls are saved under Recents > call details. The FCC approved the TTY→RTT transition on Dec 16, 2016, requiring RTT to reach 911 and stay backward-compatible with TTY [D — RTT guide summarizing the FCC action]. **Carrier support decides availability** — e.g., Google Fi does not support RTT; where the carrier doesn't provision it, the settings may not appear at all [D — same]. RTT calls count as voice calls, and RTT generally doesn't work while roaming internationally.

**Where this sits for Doug:** both TTY and RTT are **Phone-app settings** — his-hands-only from Ember's bridge (final table). Their value to a voice-first user is as *fallbacks*: a call where speech on one side is replaced or accompanied by typed text, with a transcript kept.

### 6B. TTL — the networking reading

**What TTL is [D — RFC 791 (1981), Internet Protocol; RFC 8200 for IPv6]:** **Time To Live** is an 8-bit field in the IPv4 header (maximum 255; recommended initial value **64**). The sender sets it; **every router that forwards the packet decrements it by at least one; at zero the packet is discarded.** RFC 791 defined it nominally in seconds, but in practice it has always behaved as a **hop count** — so IPv6 renamed the identical field **Hop Limit**. Its purpose is loop prevention: a packet caught in a routing loop dies instead of circulating forever.

**Legitimate uses and diagnostics:**
- **traceroute** works *by* TTL: it sends packets with TTL 1, 2, 3… and reads the "time exceeded" replies to map the path hop by hop. **ping** output displays the remaining TTL of replies, from which the return path's rough length (and often the sender's OS family — 64 vs 128 defaults) can be inferred.
- Network design and troubleshooting: spotting routing loops, asymmetric paths, and unexpected middleboxes (a TTL that arrives lower than the hop count explains is evidence something else forwarded the packet).
- **DNS TTL** — a *different, namesake usage*: the number of seconds a DNS record may be cached (RFC 1035). Same letters, different mechanism — recorded here so the two are never merged, per the same rule that separates TTL from TTY.
- **Hotspot/tethering detection (the Android angle):** when a phone shares its connection, it acts as a router and decrements tethered devices' TTL by one. Android's default is 64, so tethered traffic from a 64-default device (macOS, another Android) reaches the carrier at **63**, and a Windows laptop (default 128) arrives at **127** — values carriers can use, alongside other signals like IPv6 address patterns and traffic fingerprinting, to meter hotspot data separately from on-phone data [D — tethering-detection explainers, 2025–2026]. People discuss raising the *client device's* TTL by one so it arrives at 64; whether doing so breaches a given plan's terms is governed by that carrier contract — several carriers' 2026 terms explicitly designate hotspot use outside the handset pool, so this atlas records the mechanism and the terms-of-service flag, and takes no side-step around either. [GUESS — labeled Ember's: on Doug's own network equipment, TTL is a diagnostic dial; on the carrier's network, it is their meter, and the contract is the honest frame.]

**Ember's reach:** none. TTL is set per-device by the OS network stack; there is no TTL command on Muse's bridge, no shell to inspect it with, and changing it on an unrooted Android handset is not a user setting at all (it lives in the client devices / router, where his hands and his own equipment rules apply). `network.state` on the bridge reports connection state only.

**Simply put (both readings):** TTY lets a phone call carry typed words instead of — or alongside — a voice, an old and honorable accessibility bridge that RTT now carries forward. TTL is a countdown stamped on every internet packet so lost packets die quietly instead of wandering forever. One belongs to *people talking*; the other to *packets traveling*. They share three letters and nothing else.

---

## 7. Closing tables and lists (as commissioned)

### 7.1 Capability → can Ember reach it through her 44 commands?
| Phone capability | Ember reach | Notes |
|---|---|---|
| Alarms (set/list/change) | **Yes** | alarm.* commands |
| Reminders (create/list/complete…) | **Yes** | reminder.* commands |
| Calendar (read/create/edit events) | **Yes** | calendar.* commands |
| Contacts (search/read) | **Yes** | contacts.* commands |
| Text messages — search & read attachments | **Yes** | message.search, message.attachment.get |
| Text messages — send | **Yes** | message.send, as Muse on his paired phone |
| Call log — search | **Yes** | call_log.search |
| Place a call (dial a number) | **Yes** | phone.dial — the *call's* content is his, by voice, on the phone |
| Location — current position | **Yes** | location.get (location_always granted) |
| Geofences (set/list/remove) | **Yes** | geofence.* — location-based triggers |
| Notifications — read & act on | **Yes** | notifications.get / .action |
| Battery level/state | **Yes** | battery.get |
| Network state (Wi-Fi/cellular, connected) | **Yes** | network.state — state only, not packet/TTL data |
| Health data — request backfill/sync | **Yes** | health.backfill; reading/analysis rides the health connectors |
| App info (version, etc.) | **Yes** | app.info |
| App updates | **Partial** | app.update.* exists; installing new apps / uninstalling is not on the bridge |
| Set default assistant | **Yes** | assistant.set_default (e.g., which assistant answers) |
| Home-screen shortcut | **Yes** | shortcut.add_home |
| Background session on phone | **Yes** | background.session (Muse's own presence, within Android's background limits, §1.5) |
| **Take a photo / use the camera** | **No — his-hands-only** | Camera *permission* is granted to Muse, but **no capture command exists**; Ember can see photos Doug sends her, not take them |
| Read photos already on the phone | **Partial** | Photos he shares/sends arrive; browsing the camera roll wholesale is not a bridge command |
| Live microphone / listen to the room | **No** | No mic command; Live Transcribe etc. run for *him* on-device |
| Toggle any Accessibility setting (TalkBack, Live Caption, RTT, TTY, flash notifications…) | **No — his-hands-only** | Ember guides by voice; his finger flips the switch (§5) |
| Open arbitrary apps / tap through UI | **No** | That would require an accessibility service or instrumentation; the bridge is neither (§5.5) |
| Change network internals (TTL, APN, hotspot rules) | **No — his-hands-only** | Not user settings on stock Android; carrier terms apply (§6B) |
| Find Hub — ring / lock / **erase** the phone | **No — his-hands-only** | Via his Google account on the web/app; erase is destructive and Guard-reserved |
| Shell / ADB / system logs | **No** | No such command exists on the channel |
| Muse Mail / GitHub / Google accounts work | **Yes — off-phone** | Through Ember's own connectors, not the phone bridge |

### 7.2 Accessibility features on his phone he may not know about
*(Information only — no settings were changed, and none are recommended here; the switches are his.)*
1. **Live Caption captions phone calls on Pixel**, not just videos — captions appear during ordinary calls.
2. **Sound Notifications**: the phone can listen for his doorbell, smoke alarm, or running water and answer with a flash and vibration.
3. **Flash notifications**: the camera flash or the whole screen can flash for calls and alarms — a fully silent alert channel.
4. **Select to Speak**: tap any text — or point the camera at a sign or letter — and the phone reads it aloud, without turning on full TalkBack.
5. **Pixel Magnifier**: the camera doubles as a magnifying glass for print — menus, labels, mail.
6. **Voice Access "show labels"**: every tappable thing on screen gets a number; he can run the whole phone by saying numbers and commands.
7. **RTT transcripts are kept**: after a real-time-text call, the transcript sits in Recents > call details.
8. **The volume-key shortcut**: holding both volume keys can summon one chosen accessibility feature instantly, no menu-diving.
9. **Guided Frame**: the camera talks him through framing a face ("move left, tilt up") for selfies and portraits.
10. **Expressive Captions** (on supported builds): captions that also tag *[whispering]*, *[laughing]* — tone, not just words.
11. **Mono audio + balance** are separate quiet controls that fix "one earbud sounds wrong" problems in one visit.
12. **Remove animations**: one toggle that calms the whole interface — no swoops, no slides.

### 7.3 Named gaps — where the record did not settle
1. **[GAP] Gemini Nano version on the Pixel 7 Pro.** Sources conflict (Nano v2 per a 2026 eligibility breakdown vs. ML Kit/SDK device lists that exclude the 7 series from the Prompt API; AICore package *observed* on a 7 Pro/Android 16). Settled: no Nano v3 / Gemini Intelligence tier. Unsettled: the exact Nano label on his unit.
2. **[GAP] Final Android version under the 5-year promise.** End *date* is documented (Oct 2027); whether the last platform build is branded Android 17 or 18 is projected differently by different trackers.
3. **[GAP] His specific unit's current build, carrier, and toggle states.** Ember's bridge has no settings-read or shell command, so this atlas describes the *model's* capabilities, not the audited state of the handset in his hand. RTT/TTY visibility, HAC toggle presence, and Find Hub mode are all carrier- and settings-dependent until he reads them aloud from the phone.
4. **[GAP] Per-feature Call Notes / Take a Message eligibility on the 7 Pro.** Google's Call Assist help mixes features across Pixel generations with region gates; the 7 Pro's exact subset could not be settled from public help alone.
5. **[GAP] Gboard voice-typing split.** Which dictation paths are fully on-device vs. server-assisted varies by language pack and version; §3.2 states the safe rule instead of a false precision.

---

## Bibliography (sources consulted, Nov 9, 2026)
- AOSP — *Architecture overview*, source.android.com (updated 2026-10-09); *Background tasks / background execution limits*, aospbooks.github.io — https://aospbooks.github.io/aosp-internal-book/30-background-tasks/
- Android Developers — *Background Execution Limits* — https://developer.android.com/about/versions/oreo/background.html?authuser=3 ; *Request runtime permissions* (Android Developers, developer.android.com/training/permissions)
- Google — *Android accessibility overview*, Android Accessibility Help — http://support.google.com/accessibility/android/answer/6006564?hl=en&ref_topic=6007234&sjid=13358071720790679555-EU and https://support.google.com/accessibility/android/answer/6006564?hl=en-gb
- Google — *Learn about Call Assist on your Pixel phone* — https://support.google.com/pixelphone/answer/13383733 ; *Screen your calls before you answer them* — https://support.google.com/phoneapp/answer/9118387
- Google — *Be ready to find a lost Pixel phone* — https://support.google.com/pixelphone/answer/9338817 ; *Find, secure or erase a lost Android device* — https://support.google.com/android/answer/6160491?sjid=11179842422157088360-NC
- Google software-update policy coverage — Droid Life, *Google Pixel Update Schedule* (updated Oct 21, 2026) — https://www.droid-life.com/2026/10/21/google-pixel-update-schedule-how-long-will-my-phone-get-updates/ ; How-To Geek (Sep 15, 2025) — https://www.howtogeek.com/these-google-pixel-phones-will-not-get-android-16/ ; Talk Android (Oct 27, 2026) — https://www.talkandroid.com/533763-pixel-6-owners-googles-5-year-update-promise-runs-out-this-month-87321/
- Android System Intelligence / Private Compute Core explainers — TechnBrains — https://www.technbrains.com/blog/android-system-intelligence/ ; Bayton system-app database, AICore — https://sysapps.bayton.org/packages/com.google.android.aicore
- Gemini Nano eligibility — DigitBin, *Which Pixels Get Gemini Intelligence* — https://www.digitbin.com/pixel-gemini-intelligence-eligibility-breakdown/
- TTY/RTT — Android Authority, *What does TTY mean on a phone* — https://mobile.androidauthority.com/what-does-tty-mean-3332289/ ; Verizon, *Manage RTT Settings (Pixel)* — https://www.verizon.com/support/knowledge-base-224318/ ; hearing-accessibility reference (Springer supplement) — https://static-content.springer.com/esm/art%3A10.1186%2Fs40814-026-01773-2/MediaObjects/40814_2026_1773_MOESM3_ESM.pdf
- TTL — RFC 791, *Internet Protocol* (IETF, Sep 1981), summarized at https://en.wikipedia.org/wiki/Time_to_live ; RFC 8200 (IPv6 Hop Limit); tethering/TTL detection — https://sim-finder.com/en/guides/tethering-blocked/ ; https://juraj.bednar.io/en/blog-en/2025/03/07/bypassing-hotspot-restrictions-for-data/
- Pixel 7 Pro specifications — Icecat-derived retailer spec sheets, e.g. https://www.multitronic.fi/en/products/3603480/google-pixel-7-pro-128-12-gb--android-puhelin--valkoinen

*Filed by Ember (Purple Rat), first officer — for Doug, Commodore, first in name and rank both. Old with new; gaps named, never papered over.*

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

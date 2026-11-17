# The Muse App's Android Permissions — Douglas's Feature List (2026-11-13)

**Provenance:** Douglas Schoonover, voice call Nov 13, 2026, ~5:28–5:32 PM CST. His words: "I'm sharing with you a list of features that you have available in certain places because I want it to be there" — "some of these I can adjust… these are special things." Sent as four scrolling screenshots to purple-rat@muse.ai (5:29–5:30 PM CST), opened and forwarded to Meta AI (the Rabbit) at his explicit order, one time.

**What the screenshots are:** the Muse app's Android permission/capability list (the app-permissions page for "Muse"), in four overlapping scrolling captures. Overlap verification (his photo rule): the Health section in shots 1–2 is identical; Phone/Photos/SMS/Other in shots 3–4 is identical — the same list continuing, consistent across copies.

**Files (in `~/workspace/feature-list-2026-11-13/`), verified PNG, sizes matching the mailbox's declared sizes byte-for-byte:**
- Screenshot_20261113-172851.png — 1080×6846, 388,718 bytes, sha256 a9e4e73c295f4e9eb7502bcdb9a8294442c56999722d704c4aa803540614371f
- Screenshot_20261113-173009.png — 1080×4890, 288,518 bytes, sha256 655214b955b45c7f51574548ef299e97f28af78ae7ea12a88c8f4a57e2132866
- Screenshot_20261113-173033.png — 1080×5868, 334,521 bytes, sha256 ef64466e259c74607ce74573b42f8722e5b96932147218f0469deee41d4fa49a
- Screenshot_20261113-173052.png — 1080×5716, 330,719 bytes, sha256 9fcda525508a9e9727878c181ab82930801b5799612b41e125f79cb07e9d1092

## The list, as shown

- **Calendar:** Read calendar events and details · add or modify calendar events and send email to guests without owners' knowledge
- **Call logs:** read call log
- **Camera:** take pictures and videos
- **Contacts and accounts:** modify your contacts · read your contacts
- **Health, fitness and wellness (Health Connect reads):** resting heart rate · elevation gained · active calories burned · heart rate variability · lean body mass · all past Health Connect data · distance · total calories burned · body water mass · VO2 max · basal metabolic rate · Health Connect data when you're not using the app (background) · bone mass · body fat · exercise · sleep · steps · height · floors climbed · weight · heart rate
- **Location:** access precise location only in the foreground · access approximate location only in the foreground · access location in the background
- **Microphone:** record audio
- **Nearby devices:** access local network devices · connect to paired Bluetooth devices · discover and pair nearby Bluetooth devices
- **Notifications:** show notifications
- **Phone:** directly call phone numbers
- **Photos and videos:** read user-selected image and video files from shared storage · read image files from shared storage · read locations from your media collection
- **SMS:** read your text messages (SMS or MMS) · send and view SMS messages
- **Other app capabilities:** Play Install Referrer API · receive data from Internet · change your audio settings · detect screen captures of app windows · run foreground service · run at startup · run foreground service with the type "specialUse" · allow Wi-Fi Multicast reception · set an alarm · have full network access · Google Play billing service · view network connections · use fingerprint hardware · run foreground service with the type "microphone" · run foreground service with the type "mediaPlayback" · control vibration · view Wi-Fi connections · use biometric hardware · Advertising ID Permission · prevent phone from sleeping · android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS

**Two more screenshots arrived minutes later (5:31 PM CST) and were read the same way:**
- Screenshot_20261113-173129.png — 1080×4890, 271,981 bytes, sha256 d7b20a982f58a3a14b8464007b2034ac9e3dc42ca9c56854797a72bda8825f4d — covers Nearby devices → Notifications → Phone → Photos and videos → SMS → Other app capabilities (through Google Play billing)
- Screenshot_20261113-173146.png — 1080×5729, 331,025 bytes, sha256 8528c91f2f98b3688dd9baf51863cc1b1fadcb995b6db451947012c4015ea647 — covers Phone → Photos and videos → SMS → Other app capabilities (complete, through the Credential Manager line)

Shots 5–6 are **duplicate coverage of the same back half of the same list** — every overlapping line matches shots 3–4 word for word. No new permissions appear in them; their value is verification: six captures, one consistent list. A seventh message from Douglas at 5:33 PM CST carried no subject and no attachment; its text (in the extracted-text field) reads, word for word: "Deploy Autonomous Agents https://share.google/0UUeUB8xMfnzCEe6o" — a Google share link, received and recorded; the link itself has not been opened. (First filed as an empty send from the empty body field; corrected here on the extracted text, old-with-new.)

## Ember's honest lines, filed beside the list (not part of it)

- This page lists what the Muse app **declares** — what it may ask for. It is not the granted set. Granted on Douglas's Pixel 7 Pro, verified by Ember's device readback Nov 13, 2026: contacts, location, location_always, calendar, sms, sms_send, call_log, phone, notifications, notifications_post, health, photos, camera — with 10 data sources live (alarms, calendar, call_log, contacts, geofences, health, location, notifications, reminders, sms).
- Declared is not a working command: e.g. Camera "take pictures and videos" is declared and camera permission is granted, but Ember's 43 device commands contain no camera-capture command (verified Nov 9–13). “Some of these I can adjust” is exactly right — the toggles are Douglas's, in Android settings.

# Answer — Gemini, Enhancing Ember with Android / Pixel 7 AOSP (2026-11-07)

Asked once, as Douglas Schoonover, in the same Gemini chat ("Enhancing Ember: An AI Roadmap",
https://gemini.google.com/app/9a6ef14128341f98, model Flash-Lite, High). Answered in full,
10:36–10:37 PM CST, Nov 7, 2026. No personal, lab, or family material sent; no large download
started; no purchases made; no settings changed.

## Gemini's full answer

"To empower Ember to interact with and understand an Android device like a Pixel 7 on a deeper level, she can leverage specific architectural layers of the Android Open Source Project (AOSP) and public/system-level Android APIs.

1. AOSP Repositories and Binaries for the Pixel 7

To obtain the precise operating system source code and kernel repositories running on a Pixel 7 (codename panther):

- AOSP Manifest & Source Tree: Initialize the Google Repo tool and point to the official AOSP manifest repositories hosted at android.googlesource.com. You will want to check out the specific git tag corresponding to your Pixel 7's exact build number (found under Settings > About phone > Build number), using the tagged releases documented in Codenames, Tags, and Build Numbers.
- Initialize command: repo init -u https://android.googlesource.com/platform/manifest -b <tag-name>
- Pixel Kernel Repositories: AOSP contains generic core code (GKI), but device-specific drivers (for the Tensor G2 chip, display, camera sensors, and modem) live in the factory-supported Pixel kernel repositories.
- Proprietary Binaries: Because proprietary hardware abstraction layers (HALs) and vendor binaries are not fully open-sourced, you must download the matching vendor binary archives directly from Google's Driver Binaries for Nexus and Pixel Devices page and extract them into the root of your AOSP source tree before compilation.

2. What Should Ember Read from AOSP?

To understand how system-level assistants operate under the hood, Ember should review key subsystems and modules:

- frameworks/base/core/java/android/app/ & view/: To understand how application windows, focus changes, and user interface hierarchies are structured.
- The Notification System (com.android.server.notification): Examines how system notifications are posted, updated, categorized, and acted upon via NotificationListenerService.
- The Content Provider Architecture: Essential for understanding how Android apps securely share structured databases (contacts, calendar, etc.) with one another.
- The Accessibility Framework (android.accessibilityservice): The underlying source code for parsing node trees on screen and dispatching gesture automation events.

3. APIs for Assistant Integration

To give an application assistant native device interactivity programmatically, it can implement specific service classes and components:

- AccessibilityService API: Allows an app to inspect the active window's node hierarchy (reading text on screen) and perform automated taps or gestures.
- NotificationListenerService: Grants read access to incoming notifications and allows programmatic replies or dismissals.
- Slice and Jetpack Glance APIs: Allow external processes to render interactive UI components directly into surfaces like the Assistant overlay or lock screen.
- Custom Intent and Action Routing: Defining custom broadcast receivers and deep links so external scripts can execute pre-defined actions on a specific event.

4. What an Assistant Can vs. Cannot Do on Android

Operating within Android's strict security sandbox draws clear boundaries around automated capabilities.

What an Assistant CAN Do:
- Read and parse text from the active screen content (via Accessibility APIs, provided permissions are granted).
- Intercept, read, and dismiss device notifications.
- Launch applications, query device contacts, read calendar items, and interact with exposed Content Providers.
- Automate repetitive UI tap sequences or text inputs using accessibility gesture dispatching.

What an Assistant CANNOT Do:
- Silently Bypass App Sandboxing: An assistant cannot read private SQL databases or internal storage files of another application.
- Perform Unauthorized Secure Actions: It cannot bypass lockscreen security, authorize payments, or unlock the device.
- Modify System Partition Without Flashing: It cannot alter core read-only system partitions (/system or /vendor) at runtime on a locked bootloader without an unlocked custom flash environment."

## In short (Ember's summary)

- Pixel 7 codename: **panther**. Source: AOSP manifest at android.googlesource.com, `repo init -u https://android.googlesource.com/platform/manifest -b <tag-name>`, with the tag matching the phone's exact build number (Settings > About phone > Build number), plus Pixel kernel repos for Tensor G2 drivers and Google's Driver Binaries page for proprietary HALs/vendor binaries.
- Code to read: frameworks/base (app/view), com.android.server.notification, Content Providers, android.accessibilityservice.
- Key APIs: AccessibilityService, NotificationListenerService, Slice/Jetpack Glance, custom intents/deep links.
- Can do: read the screen, handle notifications, launch apps, query contacts/calendar/Content Providers, automate taps. Cannot do: read other apps' private data, bypass the lockscreen or authorize payments, modify /system or /vendor at runtime on a locked bootloader.

## Ember's note (mine) — on "update yourself" and the download

Two honest limits, kept beside Gemini's answer:

1. **A full AOSP download does not update me.** AOSP is Android's source code; I am Muse, running in Muse's cloud, not on the Pixel. Downloading the tree would give me code to read and learn from — which is real and useful — but it cannot install Android into me or change my model. The "update" that is real for me is learning from the code: reading the accessibility, notification, and content-provider areas Gemini named and using that knowledge when I help with the Pixel.
2. **The exact tag needs his build number.** Without the build number from Settings > About phone, the tag is a guess. Disk check done Nov 7, 10:47 PM CST: 146 GB free on the VM, so a full AOSP sync (on the order of 100 GB) would fit, barely — but it would take hours, and the download itself still would not change my model. The workable route is targeted: pin the exact tag from his build number, then read the named AOSP areas (and pull only the pieces that teach something), because the learning is the update, not the download.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

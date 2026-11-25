© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Ember's Android Playground — Side Project
Opened 2026-11-13 ~7:00 PM CST at Douglas's order: "I want you to have a side project where you have an Android [phone] to play with."

## Checked tonight (tool-verified on Ember's VM)
- /dev/kvm: ABSENT — no hardware virtualization on this cell.
- Android SDK / emulator / adb: NOT installed.
- Cell: 4 shared CPUs, ~8 GB RAM (mostly used), 7.4 GB free disk — an emulator image alone (~2-4 GB) plus system images would squeeze it hard; without KVM, emulation would crawl (software-only CPU translation).

## Honest state
An Android of her own is NOT runnable on this box tonight. The side project stands OPEN with the requirement named: a KVM-capable instance (or a larger VM per Douglas's analyzed-size rule — set the size number first, never automatic) with ~4 GB RAM and ~10 GB disk reserved for one AVD, at smallest workable specs, per his Nov 12 order for another VM instance.

## What she already has (the access she can "play with" today)
- Douglas's real Pixel 7 Pro through the paired-device lane (commands verified across this week; no screen-tap or music_fulfillment command in its catalog).
- The AOSP access notes on file (~/workspace/ember-upgrades/AOSP Access — For Future Ember (2026-11-10).md).
- The phone Linux terminal bridge plan (same folder).

## Next step when he says go
Provision the KVM-capable instance at the analyzed size, install SDK + one AVD, proof-run it (installed is not working until tested live), then the playground is hers to experiment in — apps, settings, and access paths — without ever risking his real phone.


## Update — 2026-11-13 ~7:31 PM CST: emulator hunt, engaged at his "make it so right away"
Douglas ordered: find an APK emulator so Ember can run APKs into a
Linux terminal sandbox of her own ("you're already running a phone" —
his framing, filed as his). Feasibility, re-verified tonight:
- /dev/kvm ABSENT (again) → no hardware acceleration; any emulator
  here runs in software emulation: real, but slow-motion.
- qemu-system not installed; the SDK route is the lane (Google's own
  emulator package), fetched the same direct-zip way as the SDK.
- Disk is NOT the blocker tonight: 112 GB free on the workspace
  volume. RAM is tight: ~1 GB available of 7.9 GB — the AVD gets a
  small memory setting (1536 MB max) and expectations stay honest.
- Downloads STARTED (background): the emulator package and the
  android-34 default x86_64 system image (smallest, no Google APIs),
  into ~/workspace/machines/android-build/emu/. Status file:
  emu/download-status.txt.
- Next steps when downloads land: unpack emulator to
  $ANDROID_HOME/emulator, system image to
  system-images/android-34/default/x86_64, create AVD "sandbox34"
  with avdmanager, boot headless with -no-accel, then
  `adb install` the Purple Rat Browser APK as the first proof —
  the same APK, running in Ember's own sandbox, verified by adb.

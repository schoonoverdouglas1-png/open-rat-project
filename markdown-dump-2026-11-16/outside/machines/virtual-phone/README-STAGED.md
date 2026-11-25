© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Virtual Phone — STAGED, not booted (Nov 12, 2026)

Prepared at the Captain's order ("play with virtual phones"), inside the study gate:
nothing downloaded, nothing installed, nothing booted.

## What's here
- `phone-disk.qcow2` — 8 GiB virtual (196 KiB on disk, sparse qcow2), blank.
  Phone-sized, snapshot-capable (the Module 1 lesson: a guest needs a disk
  before `savevm` can work).
- `run-virtual-phone.sh` — the launch script, Warty pattern: 2048 MB RAM,
  2 CPUs, monitor socket `qemu-mon-phone.sock`, USB tablet, `-display none`.
  It **refuses to start** while the ISO is missing.

## What it waits on
- File: `android-x86_64-9.0-r2.iso` (Android-x86 9.0-r2, Android 9 Pie,
  kernel 4.19.110 LTS) into `~/workspace/machines/images/`.
- Size: **965.7 MB** as listed on the project's official SourceForge mirror
  (≈921 MiB on disk; SHA256 f7eb8fc56f29ad5432335dc054183acf086c539f3990f0b6e9ff58bd6df4604e
  per mirror listings — verify after download, same as Warty practice).
- The Captain's word to download. One sentence green-lights it.

## Honest expectations
- This box has **no /dev/kvm** — TCG software emulation only, like every
  guest in the fleet. An x86 Android build avoids ARM translation, but the
  GUI will still be slow. Study/play value: real. Daily-driver value: no.
- Android-x86 is AOSP without Google certification: no Play Store / Play
  Services bundled. Project's last stable release is March 2020 — a
  2020-era Android 9, no security patches since. Keep real accounts out.

# Phone Backup — Douglas's Pixel 7 Pro, by image and GitHub

**Ordered:** Sun Nov 15, 2026 ~8:00 AM CST — Douglas: "I want my phone backed up by image and GitHub."
**Assembled:** Sun Nov 15, 2026 ~8:20 AM CST by the fire-up build.

## What this backup IS

1. **The virtual phone image** — `virtual-phone/phone-disk.qcow2`, the Android-x86 virtual
   phone built Nov 13, 2026 (install run documented in `docs/` and the machine's own
   `install-run-2026-11-13.md`). 100 TiB virtual (sparse proof geometry), **2.65 GiB on
   disk**, qemu-img check clean (restoration build, Nov 15). It is catalogued in this
   repo's `INVENTORY.md` and `checksums.sha256` — too large for git itself, so it is
   preserved by checksum + its workspace home (`~/workspace/machines/virtual-phone/`).
   - SHA256: `b06c53e59cf519e8cc64b481c9a79a9b6b2f78a065476c2da2b1c4986e2ae64c`
2. **A fresh device-state snapshot** — `device-state-2026-11-15.json`, read live from the
   paired-device lane at backup time: battery, network, app/default-assistant state,
   location. The morning's earlier retest values are kept beside the fresh ones, labeled
   with their times (old-with-new).
3. **The catalogue** — this repo (vm-sandbox) itself: the manifest below, the inventory,
   and the restore path, all on GitHub under Douglas's account.

## What this backup is NOT — stated plainly

**A bit-for-bit image of the physical Pixel 7 Pro is not obtainable through the
paired-device lane.** The Muse device lane exposes 43 commands (alarms, calendar,
contacts, messages, health, location, battery, network, notifications, and similar) —
there is **no screen-capture command and no filesystem/image dump command** in it, so no
screenshot of the phone's current screen and no raw image of its storage could be taken
from this side. Nothing here is faked to look like one: the "image" in this backup is the
**virtual phone's disk image** plus the **state record** of the physical phone at backup
time. A true physical image would require the phone in hand with USB debugging /
fastboot tooling — Douglas's hands and his phone, a together-step if he ever wants it.

Also filed in this build (Part 4b): Gemini's own report on the Pixel from the Google side
is preserved with the fire-up build records; her honest line matches this one — she has
no live view into the physical phone either.

## Restore path

- **Virtual phone:** clone this repo → read `INVENTORY.md` → take
  `~/workspace/machines/virtual-phone/phone-disk.qcow2` (verify SHA256 above) → boot with
  the `run-virtual-phone-installed*.sh` launchers catalogued in `docs/` under QEMU 8.2.2.
- **State record:** `device-state-2026-11-15.json` is the phone as it stood at backup
  time; it restores *knowledge* of the phone's state, not the phone itself.
- **The physical phone** restores through Douglas's own Google account backup on the
  device — outside this repo, by platform design.

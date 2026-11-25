© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Phone Zip Drive - Open and Run (2026-11-15)

Douglas's order: save the whole phone as a zip drive that can be opened up and run, no matter what.

## What is in this package
- PHONE-BACKUP.md - the standing phone backup record (copied from the vm-sandbox phone-backup lane).
- PHONE-STATE-2026-11-15-2313.json - a fresh live snapshot of the real Pixel 7 Pro taken Nov 15, 2026, 11:13 PM CST (battery 46%, network on VPN, Ember default assistant and background session on).
- MANIFEST.sha256 - checksums for the files in this package, plus the virtual phone disk below.

## The phone itself, as a drive image
- Virtual phone disk: ~/workspace/machines/virtual-phone/phone-disk.qcow2
- Size: 2848260096 bytes
- SHA-256: b06c53e59cf519e8cc64b481c9a79a9b6b2f78a065476c2da2b1c4986e2ae64c
- It opens/runs as a virtual machine disk (QEMU format). Honest note, kept from the standing record: a bit-for-bit image of the physical Pixel is not obtainable through the paired-device lane; this package is the phone in its honest form - the virtual phone disk, the backup record, and a fresh live state snapshot. qemu-img is not installed on this box tonight, so the disk was checksummed but not converted.

## The standing imaging rule (Douglas, Nov 15, 2026)
Always image all hard drives and save them in the most overly efficient way possible; adapt virtual hard-drive images so server shutdowns and unwanted upgrades can be stopped - image first, snapshot before changes, so any change can be rolled back from the image.

**Copyright — Douglas Roy Schoonover**

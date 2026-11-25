© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Restoration Log — Sun Nov 15, 2026 (~7:50–7:58 AM CST)

Douglas's free-restoration rule (~7:49 AM) + "make it so immediately" for VM rebuilds (~7:49 AM) lifted the Two Ways plan's prepared-only status for this set. Executed same morning.

## Undo manifest (Reversibility Rule)
- Pre-restore snapshot: `dpkg-selections-before-restore-2026-11-15.txt` (783 selections, taken BEFORE any install).
- Exact apt packages installed (41, incl. deps): `apt-packages-installed-restore-2026-11-15.txt`. Undo = purge exactly those.
- Portable additions live wholly under `tools-restored-2026-11-15/` — undo = remove that directory.

## Restored — apt route (Way 2), all test-verified live
- imagemagick 6.9.12.98 — created + identified a PNG; rendered the guest screendump.
- tesseract-ocr 5.3.4 — OCR read "EMBER" from a generated image; OCR'd the guest boot screen.
- zstd 1.5.5 — compress/decompress roundtrip PASS.
- redis-server 7.0.15 — PING→PONG, SET/GET PASS, clean shutdown.
- qemu-system-x86 + qemu-utils 8.2.2 — version + all guest-disk checks + bounded boot smokes below.

## Restored — workspace-portable route (Way 1), all test-verified live
Home: `tools-restored-2026-11-15/bin/` (survives generations; SHA256s appended to `guard/PROTECTED-MANIFEST.sha256`).
- fzf 0.62.0 — filter test PASS. bat 0.25.0 — print test PASS. miller (mlr) 6.13.0 — CSV cat PASS.
- rclone 1.68.2 — local listing PASS. shellcheck 0.10.0 — SC2164/SC2086 detected as expected.
- csvkit 2.2.0 — workspace venv `tools-restored-2026-11-15/csvkit-venv/`, csvlook PASS.

## Way 2 self-heal
`restore-tools.sh` (workspace) reinstalls exactly the apt set snapshot-first after any future generation change.

## Guest disks — qemu-img check (read-only), ALL CLEAN
8 vm-sandbox disks (portable-thumbdrive-1tb, island-dapper-server, island-resolute-server, island-flavor-scratch, next-server, open-guest, scratch-disk, test-disk) + Warty disk (3.59 GiB) + phone disk (2.65 GiB): "No errors were found on the image" ×10.

## Bounded boot smokes (sandbox COPY, snapshot=on, originals untouched)
- QEMU 8.2.2 executes: SeaBIOS runs, boot chain walks CD → ROM, iPXE firmware initialises (OCR-verified from screendump).
- island-dapper-server.qcow2 with `-boot order=d`: SeaBIOS reports "Boot failed: not a bootable disk" — the image is structurally sound but is not itself a bootable system disk; it needs its original island boot arrangement (install CD/kernel from the catalogued set). Guest-OS boot NOT yet proven — stated plainly, not upgraded.

## Cost
$0. All routes free (apt + upstream release downloads), per the free-restoration rule.

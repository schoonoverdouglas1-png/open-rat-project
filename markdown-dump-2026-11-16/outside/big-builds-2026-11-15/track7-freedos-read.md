© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Track 7 — FreeDOS 1.4 LiveCD Disc Reading (Without Mounting)
**Date:** Sun Nov 15, 2026 · **Method:** skill `disc_image_reading` (iso_inventory.py, pure Python stdlib, read-only) · **Guard:** commands checked via `~/workspace/ember-upgrades/guard/check-command.sh` (exit 0) · **No mount, no install, no write to the original**

## Source on disk — verified, not filename-only
- Folder: `~/workspace/machines/freedos/`
  - `FD14-LiveCD.zip` — 281 MB on disk (294,?? bytes class; `ls -lh` 281M, Nov 14 17:36), SHA256 `2020ff6bb681967fd6eff8f51ad2e5cd5ab4421165948cef4246e4f7fcaf6339`
  - `kernel-src/` — FreeDOS kernel sources, beside the disc (see Track 8)
  - `freecom-src/` — FreeCOM sources, beside the disc (see Track 8)
- Zip contents, read via Python `zipfile` (no extraction of the original):
  ```
  FD14BOOT.img   1,474,560 bytes  2025-04-02 — basic install boot floppy image
  FD14LIVE.iso 316,557,312 bytes  2025-04-02 — the LiveCD / installer ISO
  readme.txt       5,661 bytes  2025-04-02
  ```
  The task's "280 MB" is the **zip** size; the ISO inside is 316,557,312 bytes (302 MiB).
- `readme.txt` inside the zip (read in full): FreeDOS 1.4; requires a DOS-compatible system (Intel + BIOS, or UEFI with Legacy); 20 MB plain / 275 MB full install / 450 MB full with sources. It also describes the sibling editions (LegacyCD, BonusCD, LiteUSB, FullUSB, Floppy-Only) — those are **not** in this zip.

## How it was read
True loop-mounting is impossible on this box (skill, verified Nov 12: no `/dev/loop*`, no `/dev/nbd*` — re-verified Nov 15, still absent). So:
1. Stream-extracted `FD14LIVE.iso` from the zip to scratch only: `/tmp/freedos-read/FD14LIVE.iso` (original zip untouched, read-only).
2. `file` → `ISO 9660 CD-ROM filesystem data 'FD14-LiveCD' (bootable)`
3. SHA256 of the extracted ISO: `c48a9dcf4b8e22f44e268a9879745f0bd88c061195ac584e6ef2deb0477f81fb`
4. Ran: `python3 ~/workspace/machines/iso_inventory.py /tmp/freedos-read/FD14LIVE.iso`
   Full output saved in-session at `/tmp/freedos-read/inventory.txt` (359 lines; /tmp is ephemeral — this file is the durable record).

## Verified contents — from the actual image read
**Volume header (PVD, sector 16):**
- Volume ID: `FD14-LiveCD` · Blocks: 154,569 · Bytes: 316,557,312 · PVD: yes · **Joliet: no** (plain ISO9660, 8.3-style names)
- **Entries: 3,535 total — 140 directories, 3,395 files, 310,980,654 file bytes**

**Top level (all read from directory records):**
```
/CHANGES.LOG (272)  /COMMAND.COM (87,772)  /FDAUTO.BAT (3,879)  /FDCONFIG.SYS (182)
/KERNEL.SYS (46,256)  /SETUP.BAT (7,141)
/DEVEL/  /FDOS_X86/  /FREEDOS/  /GAMES/  /ISOLINUX/  /NET/  /PACKAGES/
```
Top-level entry counts: FREEDOS 1,870 · PACKAGES 1,387 · FDOS_X86 212 · DEVEL 21 · ISOLINUX 15 · GAMES 13 · NET 11.

**Boot chain — `/ISOLINUX/` (15 entries, verified):**
`BOOT.CAT` (2,048), `ISOLINUX.BIN` (24,576), `ISOLINUX.CFG` (1,739), `SYSLINUX.CFG` (1,146), `SYSLINUX.COM` (35,364), `MEMDISK` (26,140), `MENU.C32` (56,292), `CHAIN.C32` (20,704), `ELTORITO.SYS` (1,554), `MDISKCHK.COM` (8,106), and the floppy/hard images loaded via MEMDISK:
- `FDLIVE.IMG` 1,474,560 (1.44 MB) — Live Environment
- `FDINST.IMG` 1,474,560 — Install to harddisk
- `FDX86.IMG` 12,582,912 (12 MB) — Floppy Edition install
- `SPECIAL.IMG` 1,474,560 — trademark/notice screen image

**`ISOLINUX.CFG` — read in full via `--cat` (verbatim structure):**
```
UI /isolinux/menu.c32
DEFAULT live
PROMPT 0
TIMEOUT 500
MENU TITLE Welcome to FreeDOS 1.4 (LiveCD)
label live    → linux /isolinux/memdisk, initrd /isolinux/fdlive.img, append raw  [default]
label boot    → localboot 0x80  (boot from system harddisk)
label install → memdisk + /isolinux/fdinst.img
label floppy  → memdisk + /isolinux/fdx86.img  (Floppy Edition, BASE only)
label notice  → memdisk + /isolinux/special.img  ("FreeDOS is a trademark of Jim Hall, 2001-2025")
```

**Kernel & shell — the two halves of DOS, both present in three places:**
- `/KERNEL.SYS` 46,256 bytes (root, for the Live/Install boot) and `/FDOS_X86/KERNEL.SYS` 46,485 bytes (Floppy Edition tree — slightly different build/size, do not collapse them)
- `/COMMAND.COM` 87,772 bytes — identical size at all three locations: `/COMMAND.COM`, `/FREEDOS/BIN/COMMAND.COM`, `/FDOS_X86/FREEDOS/BIN/COMMAND.COM` (FreeCOM, the shell)
- `/FDCONFIG.SYS` (root, read in full):
  ```
  !COUNTRY=001,858:\COUNTRY.SYS
  !LASTDRIVE=Z
  !BUFFERS=20
  !FILES=40
  DOS=HIGH / DOS=UMB / DOSDATA=UMB
  DEVICE=\FREEDOS\BIN\HIMEMX.EXE
  SHELLHIGH=\COMMAND.COM \ /E:2048 /P=\FDAUTO.BAT
  ```
- `/FDAUTO.BAT` (read, first ~2 KB verified): sets `DOSDIR=\FREEDOS`, loads `UHDD.SYS` if present, calls `CDROM.BAT`, **contains an explicit QEMU branch** (`vinfo /m` → errorlevel 102 = QEMU → loads `LBACACHE.COM 1024`), then builds a RAM drive via `FDRAMDRV` trying 384M down to 16M, and copies COMMAND.COM / FDLIVE.BAT / SYS.COM into it. So the LiveCD is QEMU-aware by design.
- `/CHANGES.LOG` (read in full, 272 B): "Changes since the FreeDOS 1.4 release: 2025-04-02 — project_FDI-x86 (Shidel): removed automatic CPU override to assume a 386 minimum."

**The installed system tree — `/FREEDOS/`:**
`BIN/` (incl. `7ZA.EXE` 1,311,746, `7ZR.EXE` 669,806, `FDNPKG.EXE` 469,496, `BZIP2.EXE`, `GZIP386.EXE`, `UNZIP.EXE`, `CTMOUSE/`, `FREECOM/XSWAP/`), `CPI/`, `DOC/` (~70 program doc folders: KERNEL with `HISTORY.TXT` 173,195, FDISK, FORMAT, HELP, JEMM, HIMEMX…), `HELP/` in EN/DE/ES/FR (`HHSTNDRD.ZIP` 498K–663K each), `APPINFO/`, `NLS/`, `LINKS/`, `PACKAGES/`, `SETUP/` in 9 languages (EN, DE, EO, ES, FR, NL, RU, SV, TR).

**Packages — `/PACKAGES/*.ZIP`: 191 package zips, 265,594,505 bytes**
| Category | Zips | Notable (verified sizes) |
|---|---|---|
| BASE | 57 | KERNEL.ZIP 772,721 · FREECOM.ZIP 2,037,468 · HTMLHELP.ZIP 2,466,863 · FDISK, FORMAT, EDIT, EDLIN, MEM, DEFRAG, DEBUG… |
| NET | 32 | LINKS.ZIP 13,760,440 · CURL.ZIP 11,399,264 · LYNX.ZIP 7,820,456 · ARACHNE, DILLO, WGET, MTCP, SSH2DOS… |
| GAMES | 30 | FREEDOOM.ZIP 29,759,243 · FMINES.ZIP 30,042,286 · NETHACK.ZIP 7,971,040 · BOOM, GNUCHESS, FLPYBIRD… |
| DRIVERS | 22 | USBDOS.ZIP 2,174,051 · SBEMU, NTFS, DOSLFN, VSBHDA… |
| ARCHIVER | 15 | P7ZIP.ZIP 8,298,299 · 7ZIP.ZIP 4,574,395 · ZIP, UNZIP, ARJ, BZ2, TAR… |
| UNIX | 14 | GNUSED, GREP, LESS, MD5SUM… |
| SOUND | 9 | MPLAYER.ZIP 26,036,394 · OPENCP, LAME… |
| APPS | 6 | DN2.ZIP 2,750,267 · PGME, DOSZIP, FDSHELL… |
| TOOLS | 6 | V8POWER, CWSDPMI, PKGTOOLS, SLOWDOWN |

Also live (unzipped) games at `/GAMES/BLKDROP/BLKDROP.EXE` (121,303), `FLPYBIRD/`, `SENET/`; networking at `/NET/FDNET/`; a second, self-contained Floppy-Edition system at `/FDOS_X86/` (its own FDAUTO.BAT, FDCONFIG.SYS, SETUP.BAT 39,560, `FREEDOS/BIN|CONFIGS|NLS`, `SLICED/`).

## Verdict
**READ COMPLETE AND VERIFIED.** The image is a genuine, bootable FreeDOS 1.4 LiveCD: ISOLINUX → MEMDISK → floppy images, kernel + FreeCOM shell present, full package set (191 zips) plus a live FREEDOS tree and a nested Floppy Edition. Nothing was mounted, booted, or installed in this track — reading only, per limits.

## What remains / whose hand
- **Booting it** (QEMU guest, Live mode first) — not done here; needs a QEMU lane. Note the Nov 15 re-check in Track 8: `qemu-system-*` was **not found in PATH in this session**, unlike the Nov 12–13 record (QEMU 8.2.2 guests) — that discrepancy needs the parent/coordinator to reconcile before a boot is promised. Douglas's word starts a boot anyway, per standing orders.
- **Checksum against upstream VERIFY.TXT** — not on file locally; the SHA256 above is the local fingerprint to compare when VERIFY.TXT is fetched (Douglas / a download lane).
- Scratch ISO at `/tmp/freedos-read/FD14LIVE.iso` is ephemeral and will vanish; the durable source remains the zip in `~/workspace/machines/freedos/`.

*Ember's addition (labeled hers): the QEMU branch inside FDAUTO.BAT is the practical gem — this disc already detects QEMU and tunes its disk cache, so when it is booted in the workshop it should be tried Live first, exactly as its own menu defaults.*

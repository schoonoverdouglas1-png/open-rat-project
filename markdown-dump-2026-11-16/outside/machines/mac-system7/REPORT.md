# Mac System 7 Play Build — Report (Sun Nov 15, 2026)

## Verdict
**System 7.5.5 BOOTED to the Finder desktop in QEMU and was played in.** Proof: `system755-desktop-2026-11-15.png` — Finder menu bar (File/Edit/View/Label/Special, clock 2:19 PM), open "MacOS 7.5.5" window (9 items, 48.9 MB in disk, 99 MB available: Apple Extras, SimpleText, System Folder, StuffIt Expander 5.5, Newton Connection Utilities, iCab_Pre2.51_English_68k, About System 7.5.5 Update, README), desktop icons Disk Copy / MacOS 7.5.5 / Trash / StuffIt Expander / iCab alias.

## Lanes tried (cheapest first)
1. **Gemini generate lane** (`gemini_ask.sh`) — answered in full (saved as `gemini-answer.txt`, hers): Basilisk II recommended for reliability, QEMU q800 for accuracy; 1 MB 32-bit-clean Quadra/Performa ROM required; pitfalls (HFS handling, mouse trap). Followed in part — QEMU won in practice (see 3).
2. **Inventory** — Host had only qemu-system-x86 (8.2.2); no m68k binary, no Mac ROMs/disks anywhere in `~/workspace/machines/`. apt: `basilisk2` candidate 0.9.20240401-1; `qemu-system-m68k` has no own package in noble, but **`qemu-system-misc`** (same 8.2.2) provides `qemu-system-m68k` with machine `q800`.
3. **Basilisk II** — installed and configured (Performa-630 ROM, Vita-proven prefs), but this build exits instantly in this sandbox with `ERROR: Cannot create 60Hz thread (Success)` under both Xvfb and software SDL, JIT and no-JIT. Lane parked with exact error on record.
4. **QEMU q800 (winning lane)** — installed via qemu-system-misc. Two fixable walls: (a) segfault with default audio → fixed with `-M q800,audiodev=audio0 -audiodev none,id=audio0`; (b) raw Basilisk HFS disk → flashing-? floppy (ROM boots fine, no SCSI-bootable disk found — the raw volume has no partition map/SCSI driver).

## The fix that booted it
Built `system755-partitioned.img`: the first 96 blocks (Driver Descriptor Map + Apple partition map + Apple_Driver) taken verbatim from the archive.org QEMU Quadra disk `quadra/system71.img`, with the HFS partition payload replaced by the preserved 7.5.5 volume `macos755.dsk` and the block counts patched (307,296 total). `file` validates the result as a proper Apple Driver Map disk. Booted first try to the desktop in ~45 s (software 68040 emulation, no KVM).

Boot command is saved as **`run-system755.sh`** (one command relaunches it; monitor socket at `qemu-mon.sock` for screendump/mouse via HMP).

## Play (as ordered — via QEMU monitor mouse_move/mouse_button + screendumps)
- `play-applemenu.png` — **Apple menu held open in full**: About This Macintosh…, Apple Video Player, AppleCD Audio Player, Automated Tasks, Calculator, Chooser, Control Panels, Find File, Graphing Calculator, Jigsaw Puzzle, Key Caps, Note Pad, Recent Applications/Documents, Scrapbook, SimpleSound, Stickies, Shut Down.
- `play-trash.png` — a desktop click **selected StuffIt Expander™** (aimed at Trash, landed ~40 px short — mouse drift, stated honestly).
- `play-about-menu.png` — **Edit menu opened** (Undo/Cut/Copy/Paste/Clear/Select All/Show Clipboard).
- `play-about2-menu.png` — **View menu opened** (by Small Icon/by Icon/by Name/by Size/by Kind/by Label/by Date).
- Not achieved: the About This Macintosh dialog and a Disk Copy launch — the q800 PS/2 mouse is relative-only via HMP and drifts right ~one menu per calibrated attempt. Three menus + icon selection are the verified play.

## The Cornell variant
- Inference, labeled: Douglas's Performa 6200 shipped with System 7.5.x; a "slightly fancier" Cornell High School machine of that era most plausibly ran **System 7.5.3** (the 1996 unified update, often on Performa 6300/6400-class hardware with the Performa extras bundle) — one step up from his 7.5.5 in polish/bundling in school trim, or 7.5.3 with At Ease/school software. This is inference from the period lineup, not a record of Cornell's actual machine.
- Attempt made: downloaded the preserved **"Macintosh 7.5.3 Performa 6300 6400" CD** (`performa753.iso`, 747 MB, SHA256 in MANIFEST) and booted it alone as SCSI CD (scsi-id 3) on the q800. Result: flashing-? floppy at 55 s and 100 s (`cd-55s.png`, `cd-100s.png`) — that restore CD is machine-specific and does not boot a Quadra 800. The 7.5.3 variant was therefore **not** booted; the CD and the 7.1 partitioned disk both remain in the folder for a future install-onto-disk attempt (boot 7.5.5, mount CD, run its installer onto a scratch disk).

## Assets & sources
All from archive.org public items only; exact URLs + SHA256 for every file in `MANIFEST.md` / `SHA256SUMS.txt` (Quadra 800 ROM, Performa-630 ROM, Quadra-650 ROM — byte-identical to the Q800 ROM — the 7.5.5 HFS disk, the QEMU Quadra 7.1 set, the Performa 7.5.3 CD, and the derived partitioned 7.5.5 disk).

## Honest limits
- Basilisk II does not run in this sandbox (60 Hz thread error above); QEMU is the working lane.
- No sound (audiodev none — the host has no audio device; the ASC segfault is why).
- Relative-mouse play only; no absolute pointer on q800, so fine clicking drifts.
- The booted 7.5.5 is a preserved community disk image of System 7.5.5 (volume name "MacOS 7.5.5", with iCab/StuffIt/Newton extras), not a byte-copy of Douglas's own Performa 6200 disks — those physical floppies/CDs are not in the workspace.
- VMs were shut down after play (monitor `quit`); originals untouched — all boots ran on copies/derived images.

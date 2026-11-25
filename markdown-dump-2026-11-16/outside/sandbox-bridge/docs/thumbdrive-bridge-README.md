© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Portable Thumb Drive Bridge

Captain: Douglas Roy Schoonover. First officer: Purple Rat (Ember).
Created Fri Nov 13, 2026, at Douglas's order: a virtual thumb drive, one terabyte,
with a bridge connecting its data to GitHub and to our other places — saved
as a project (this repo) and as a fork (a copy inside the Purple Rat AI
Preservation Project).

## The drive
- File: `~/workspace/machines/portable-thumbdrive-1tb.qcow2` (on Ember's box)
- Virtual size: 1 TiB (1,099,511,627,776 bytes), qcow2, thin/sparse — it only
  takes real space as it is written. Host free space is the physical cap.
- Verified at creation by `qemu-img info`; see `drive-manifest.json`.
- The image itself does NOT live in git (GitHub cannot carry a drive image).
  This repo carries the project: design, manifests, logs, and the files the
  bridge syncs off the drive.

## The bridge (see BRIDGE.md)
1. A VM guest (Warty, Dapper, the server instances) attaches the drive and
   saves work to it — portable storage that travels across all the machines.
2. On the host, `sync-thumbdrive.sh` copies the drive's export folder into
   this repo and pushes to GitHub. Dry-run by default; add-only, never deletes.
3. The same project is kept as a fork copy in the preservation project, and
   finished work also rides the standing lanes (Drive, crew kits) under the
   assimilation rule.

## Live-CD internet
Guests boot with QEMU user-mode NAT (`-netdev user`): a live CD gets DHCP and
internet the standard way. Test at next instance boot is logged in the
machines learning log.

## Standing exclusions (always)
No passwords, codes, or credential files; no private medical records or lab
PDFs; no Cara material. Those never ride the bridge — Douglas's Guard rules.

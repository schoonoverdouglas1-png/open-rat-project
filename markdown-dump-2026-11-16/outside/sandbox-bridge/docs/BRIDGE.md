© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Bridge design — figured out Nov 13, 2026

Goal: data saved on the virtual thumb drive reaches GitHub and our other
places without anyone carrying files by hand.

## Lanes
- Lane A (guest -> drive): QEMU attaches `portable-thumbdrive-1tb.qcow2` to a
  guest as an extra disk. One guest at a time (qcow2 is single-writer).
  Attach pattern: `-drive file=portable-thumbdrive-1tb.qcow2,format=qcow2,if=virtio`
  (era guests: `if=ide`). Guests save into the drive's `export/` folder.
- Lane B (drive -> GitHub): host-side, `sync-thumbdrive.sh` runs when the
  drive is not attached to a running guest: it refreshes `drive-manifest.json`
  (qemu-img info), copies new/changed files from the drive's export staging
  folder into this repo under `exports/`, commits, and pushes. Add-only:
  no --delete anywhere, per Old-with-New and the Guard.
- Lane C (GitHub -> other places): this repo is the hub. A fork copy lives in
  purple-rat-ai-preservation-project/thumbdrive-bridge/. Finished work also
  assimilates to Drive and the crew kits under Douglas's standing rule.

## Internet on live CDs
`-netdev user,id=net0 -device e1000,netdev=net0` (era NIC for old guests:
rtl8139). User-mode NAT gives the guest 10.0.2.15/24, gateway 10.0.2.2,
DNS 10.0.2.3 — a live CD browses with zero host reconfiguration.

## Honest limits
- The drive presents 1 TiB; the host volume has ~114 GB free, so physical
  capacity is the host's free space.
- Sync is host-driven, not magic: it runs when Ember runs it or a scheduled
  job is added at Douglas's word.

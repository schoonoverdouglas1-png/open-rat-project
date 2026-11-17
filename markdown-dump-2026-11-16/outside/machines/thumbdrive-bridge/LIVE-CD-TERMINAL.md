# LIVE-CD TERMINAL PLAYBOOK — learned Nov 13, 2026
How the crew's AIs use a terminal inside live-CD sessions and VM guests. Verified facts are marked; the rest is the standing plan until a boot test proves it.

## Verified on this box (Nov 12–13, 2026)
- QEMU 8.2.2 (qemu-system-x86_64 / i386, qemu-img). No /dev/kvm — pure TCG emulation; guests are slow but workable. Admin-team unlock of KVM would speed everything; not in Ember's hands.
- Warty Warthog (Ubuntu 4.10) installed fully on a 2 GiB qcow2; snapshot `warty-installed` verified. Dapper (6.06) live CD reached the full GNOME desktop (instance 2).
- Live disc swap works through the QEMU monitor: `change ide1-cd0 <iso>` on the running guest.
- `savevm` FAILS on CD-only guests — snapshots need an attached snapshot-capable qcow2 disk.
- PS/2 mouse is relative; a USB tablet (`-device usb-tablet`) gives absolute positioning.
- Guests run through `~/workspace/machines/run-img.sh` (monitor socket per guest). As of Nov 13 the script has NO network device lines — the gap this playbook closes.
- The portable thumb drive exists: `~/workspace/machines/portable-thumbdrive-1tb.qcow2` (virtual 1 TiB, ~208 KiB actual, thin).

## Getting a terminal inside a live CD
1. Desktop live CDs (Dapper and later): Applications → Accessories → Terminal (GNOME Terminal). Era desktops all ship one.
2. No desktop / desktop failed: switch TTY with Ctrl+Alt+F1…F6; log in with the live user (era Ubuntu live: user `ubuntu`, empty password; Warty-era: user created at install).
3. In the terminal you are on the live system: RAM-backed, changes vanish at shutdown UNLESS written to an attached disk (the thumb drive, below) — that is what the bridge is for.

## Internet in a guest (the NAT step — planned, test at next boot)
Add to the QEMU command (or run-img.sh) — QEMU user-mode networking, no host changes, no root:
`-netdev user,id=n0 -device rtl8139,netdev=n0` (rtl8139 = era-correct for 2004–2006 guests; use `e1000` for modern guests, `ne2k_pci` for very old ones).
Guest side: DHCP gives 10.0.2.15/24, gateway 10.0.2.2, DNS 10.0.2.3. Verify in the guest terminal: `ping -c1 10.0.2.2`, then a DNS lookup. Log the result in the machine learning log either way — a failed test is data, not a defeat.

## Attaching the thumb drive to a guest
One writer at a time, always. With the guest OFF (or via monitor `device_add` when supported):
`-drive file=$HOME/workspace/machines/portable-thumbdrive-1tb.qcow2,format=qcow2,if=ide,index=2`
In the guest it appears as a hard disk; mount it, work, UNMOUNT before shutdown. Never attach it to two running guests at once. Host-side sync is Lane B of BRIDGE.md (add-only, dry-run first).

## Monitor commands worth knowing (via the guest's monitor socket)
`info status`, `info block`, `change ide1-cd0 <path.iso>` (swap live disc), `savevm <name>` / `loadvm <name>` (disk-backed guests only), `sendkey` for keys the keyboard path drops, screendump for eyes on the guest.

## Standing doctrines that govern all of this
VMs are scratch space — heat lives in guests, the main box stays the clean archive. Set an analyzed size NUMBER first; never automatic/dynamic sizing. Snapshot before anything wild (Reversibility Rule). No destructive command runs automatically, ever (the Guard).

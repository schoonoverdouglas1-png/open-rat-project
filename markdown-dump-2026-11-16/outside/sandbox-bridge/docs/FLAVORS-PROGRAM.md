# FLAVORS PROGRAM — Ubuntu family, earliest-first (est. Nov 12, 2026, Captain's order)
Goal: experiment with ALL the Ubuntu flavors — same source code, commands differing slightly
by place — and learn the differences BY PLAYING. Earliest, most-compatible first. Failures are
kept as data (island/does-not-work/). All images live on the island.

## The machine they must fit (verified, from LEARNING-LOG-2026-11-12.md)
- QEMU 8.2.2, **TCG pure emulation — no /dev/kvm**, i440FX-era machine, cirrus or std VGA,
  512 MB guest RAM is era-authentic; host 7,934 MB RAM, ~125 GB disc free.
- Known-good: Ubuntu 6.06 Dapper live CD reached a FULL GNOME desktop (safe graphics/vesa);
  Warty 4.10 boots ISOLINUX, then its 2.6.8 kernel stalls at hand-off (round-2 CPU/ACPI study
  running separately — DO NOT DISTURB the Warty guest).
- Rule of thumb for ranking: 2.6.x kernels + X.org 6.8/7.0 era = era-matched hardware =
  highest compatibility. Every step newer is a step away from the emulated hardware's era.

## The family — first releases
| Flavor | First release | Date | Desktop |
|---|---|---|---|
| Ubuntu | 4.10 Warty Warthog | 2004-10-20 | GNOME 2.8 |
| Kubuntu | 5.04 Hoary Hedgehog | 2005-04-08 | KDE 3.4 |
| Edubuntu | 5.10 Breezy Badger | 2005-10-13 | GNOME (education set) |
| Xubuntu | 6.06 Dapper Drake | 2006-06-01 | Xfce 4.4 beta |
| Ubuntu Studio | 7.04 Feisty Fawn | 2007-05-10 | GNOME (multimedia) |
| Mythbuntu | 7.10 Gutsy Gibbon | 2007-10-22 | Xfce + MythTV — DISCONTINUED (last 16.04) |
| Lubuntu | 10.04 Lucid Lynx | 2010-05-02 | LXDE |
| Ubuntu Kylin | 13.04 Raring Ringtail | 2013-04-25 | Unity (later UKUI) |
| Ubuntu GNOME | 13.04 Raring Ringtail | 2013-04-25 | GNOME Shell — ABSORBED into Ubuntu 17.10 (last own release 17.04) |
| Ubuntu MATE | 15.04 Vivid Vervet | 2015-04-23 | MATE |
| Ubuntu Budgie | 17.04 Zesty Zapus | 2017-04-13 | Budgie |
| Ubuntu Unity | 22.10 Kinetic Kudu | 2022-10-20 | Unity 7 |

## Trial order FOR THIS BOX (earliest + era-matched first)
1. **Xubuntu 6.06 desktop-amd64** — kernel 2.6.15, the same family as our PROVEN Dapper
   desktop; a live CD, so a desktop verdict is reachable in one boot. PHASE 1.
2. **Kubuntu 5.04 install-amd64** — kernel 2.6.10, debian-installer like Warty; KDE 3.4.
   Watch for the Warty-family kernel hand-off stall — if it stalls the same way, that is
   a RESULT (the stall's family tree grows). PHASE 1.
3. Ubuntu 4.10 Warty — already in the fleet (reference point, not an island download).
4. Phase 2 candidates: Edubuntu 5.10, Kubuntu 5.10, Ubuntu 5.04/5.10 (island copies),
   Xubuntu 6.06.1 (point-release twin of #1 — same dir listing).
5. Phase 3: Ubuntu Studio 7.04, Mythbuntu 7.10 (kernel 2.6.22 era — still close).
6. Phase 4 (newer, expect friction): Lubuntu 10.04, Kylin/GNOME 13.04, MATE 15.04,
   Budgie 17.04, Unity 22.10 — newer kernels may want PAE/newer CPU models/more RAM
   under TCG; try, keep what fails.

## Command/place differences — HYPOTHESES to verify by playing (labeled, unverified)
- H1 Terminal: Kubuntu = Konsole; Ubuntu = gnome-terminal; Xubuntu 6.06 = xfce4-terminal
  (may still be called "Terminal") — verify the binary name on each desktop.
- H2 Root elevation GUI: KDE = kdesu; GNOME = gksu; Xfce = gksu (rides GNOME's) — but the
  CLI `sudo` model is shared across the whole family. Verify both halves.
- H3 Display manager: Kubuntu = KDM; Ubuntu/Xubuntu = GDM. Verify at the login screen.
- H4 File manager: Konqueror (KDE, doubles as browser) vs Nautilus vs Thunar.
- H5 Package GUI: all-era Synaptic on GNOME/Xfce; Kubuntu 5.04 may carry Kynaptic instead.
- H6 Editors: Kate/KWrite vs gedit vs Mousepad.
- H7 Settings: KDE Control Center vs GNOME Control Center vs Xfce Settings Manager
  (mcs-manager era) — different PLACES for the same knobs; the Captain's "commands differ
  slightly in certain places" made concrete. Each verified difference gets logged in the
  manifest's flavor-notes, not left as hypothesis.

## Sources (listings read live, Nov 12, 2026 — exact filenames/sizes from the listings)
- old-releases.ubuntu.com/releases/kubuntu/5.04/ — kubuntu-5.04-install-amd64.iso, **587M**;
  kubuntu-5.04-live-amd64.iso, 579M; MD5SUMS + MD5SUMS.gpg published in-dir.
- old-releases.ubuntu.com/releases/xubuntu/6.06/ — xubuntu-6.06-desktop-amd64.iso, **658M**;
  xubuntu-6.06-alternate-amd64.iso, 691M; MD5SUMS + SHA1SUMS + SHA256SUMS published in-dir.
Directed by Douglas Roy Schoonover.

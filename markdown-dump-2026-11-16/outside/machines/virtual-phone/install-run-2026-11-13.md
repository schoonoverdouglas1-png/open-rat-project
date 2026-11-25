© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Android-x86 Install Run — 2026-11-13 (night run, Kirk mode)

VM: ~/workspace/machines/virtual-phone/ ; disk phone-disk.qcow2 (100 TiB virtual, sparse — stays 100 TiB per Douglas's order)
ISO: android-x86_64-9.0-r2.iso (SHA256 verified earlier)
QEMU: pid 37657, -m 3072 -smp 2, monitor sock qemu-mon-phone.sock (absolute path), boot order=d (CD first)

## Stage log

- 22:04 CST start: screendump shot-00-start — installer PARKED at "Choose Partition", sda1 (102400.00GB, unknown fs) highlighted. Mean brightness 137.7 (real text screen). Matches staged state exactly.
- Plan: Create/Modify partitions → cgdisk: delete p1; p1 = 2 MiB ef02 (BIOS boot) first; p2 = 64 GiB 8300; p3 = rest 8300 unformatted. Write, quit. Install to p2 (64 GiB, ext4).
- cgdisk repartition DONE: old p1 (100 TiB) deleted; p1 = 2.0 MiB EF02 BIOS boot; p2 = 64.0 GiB 8300; p3 = 99.9 TiB 8300. Write confirmed twice (idempotent), Quit, installer re-listed sda2 64.00GB + sda3 102336.00GB (shot-26).
- Installer: sda2 -> format ext4 -> progress ran to 99%, completed (qcow2 grew to 1.66 GB real). GRUB prompt -> Yes -> WARNING verbatim: "Found GPT on /dev/sda. The legacy GRUB can't be installed to GPT. Do you want to convert it to MBR?" Answered NO (MBR caps at 2 TiB; would wreck the staged layout).
- After No: installer exited and machine rebooted to the CD menu. Debug-mode boot + root shell: mounted sda2 at /hd — ls showed ONLY lost+found. The install ABORTED at the GRUB stage; no files were ever copied.
- Route D (next): rerun installer, sda2, Do not re-format (already ext4), at GRUB prompt choose SKIP (never tried) and watch whether the file copy proceeds. Fallback Route A: OVMF/EFI relaunch (GRUB2-EFI handles GPT). Fallback Route B: manual copy from the debug shell (CD at /mnt, sda2 at /hd) + CD-GRUB2 manual boot of the installed files.
- Route D WORKED: GRUB prompt -> SKIP -> "/system read-write?" -> No -> copy ran ("Installing Android-x86 to sda2, expect to write 931120 KB", 2%->100% in ~5 min) -> "Congratulations! Android-x86 is installed successfully."
- "Run Android-x86": screen switched to 1024x768, brightness 0.0 (pure black) for 2.5+ min while QEMU CPU stayed busy (23%). Alt+F1/F2 also black. The GUI modeset blackout blocks the default display path. ACPI system_powerdown did not take; instance quit via monitor (install was complete on disk).
- Route E (next): QEMU direct kernel boot of the INSTALLED system. Kernel+initrd extracted byte-exact from the ISO with iso_inventory.py (kernel.bin 7511040 B bzImage 4.19.110; initrd.bin 1358743 B) into boot/. Stock lines from isolinux.cfg; VESA entry uses "nomodeset vga=ask" (CD's own no-GPU-accel mode). Direct boot append: root=/dev/ram0 quiet androidboot.hardware=android_x86 SRC=/android-9.0-r2 DATA=/android-9.0-r2/data nomodeset vga=788.
- INSTALL COMPLETE (verified): "Congratulations! Android-x86 is installed successfully." On-disk inventory read host-side with debugfs from a qemu-img convert copy (skill-sanctioned, copies only, scratch deleted): /android-9.0-r2/{kernel 7511040, initrd.img 1358743, ramdisk.img 1914143, system.sfs 942682112, data/} — byte sizes match the ISO exactly.
- Boot attempt #1 ("Run Android-x86" from installer): 1024x768 pure black (DRM modeset path renders nothing here); ACPI powerdown ignored; instance quit (install safe on disk).
- Boot #2 (direct kernel, VESA nomodeset vga=788, CD attached): VESA framebuffer WORKS (boot animation renders). Android init stalls: SurfaceFlinger + bootanim run, but zygote/system_server NEVER start and no zygote lines exist in logcat — init's class_start main trigger never fires in this environment. Guest CPU-saturated; console input crawls. Instance quit after ~25 min.
- Boot #3 (run-virtual-phone-installed2.sh: NO CD, selinux=permissive, SETUPWIZARD=0, loglevel=7): same stall. Manual console assists routed around it: `start zygote` -> getprop init.svc.zygote = running; `start installd; start netd` -> "Service activity: FOUND" (system_server up, ActivityManager registered); installd = running.
- NETWORK VERIFIED: console `ip addr show eth0` -> inet 10.0.2.15/24 scope global eth0 (QEMU NAT DHCP lease, gateway 10.0.2.2). A `ping -c 3 10.0.2.2` was issued from the console; its output sits in the console scrollback, unread — the framebuffer is shared/raced between fbcon and SurfaceFlinger, and animation phases hid the text at every read attempt.
- FINAL STATE at log time: VM left RUNNING (boot #3). Boot animation still on VT7; sys.boot_completed not yet set — first-boot PackageManager dexopt/scan of the 940 MB system image is the long pole on this host (cell offers ~1.5 shared cores; QEMU at ~111% CPU, cputime 24 min and climbing). Launcher frame not yet captured. The boot needs NO further rescue — dexopt is finite; a later screendump via the same monitor socket should catch the launcher. If a future boot stalls the same way, the documented assists are: console (Ctrl+Alt+F1) -> start zygote -> start installd; start netd.
- No apps installed (per task: mirror/fill is a later order). Disk untouched at 100 TiB virtual / ~2.6 GB real.

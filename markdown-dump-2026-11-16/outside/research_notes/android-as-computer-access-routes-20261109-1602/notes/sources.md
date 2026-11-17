# Source notes — read 2026-11-09 (America/Chicago mission date; pages crawled 2026-11-09 UTC)

## Official / primary
- Android adb docs (index+verified live open): https://developer.android.com/tools/adb?authuser=0
  - Wireless debugging Android 11+; same wireless network required; pair once via QR/pairing code, stays paired until forget/revoke; Android 17 + adb 37.0.0 = ADB Wi-Fi 2.0, auto-connect on trusted network; legacy tcpip 5555 needs initial USB.
- ADB Wi-Fi 2.0 blog (live open): https://developer.android.com/blog/posts/introducing-fast-and-reliable-wireless-debugging-with-android-debug-bridge-adb-wi-fi-2-0?hl=en&authuser=01
  - Needs Android 17, Platform-Tools 37.0.0, same Wi-Fi; daemon turns off Wi-Fi ADB on untrusted network.
- Shizuku user manual (live open): https://shizuku.rikka.app/guide/setup/?night=1
  - 3 start modes; wireless (Android 11+, no PC) and PC modes must be redone after each reboot; root mode starts directly.
  - NOTE conflict: secondary source h5.2113.net says Shizuku 13.6.0 (May 2025, still latest) removed start.sh, new libshizuku.so command copied from app's "View command", and adds no-root auto-start on Android 13+ on trusted WLAN. Official manual still shows old start.sh. Report both, flag version sensitivity.
- scrcpy README via search (index): https://github.com/Genymobile/scrcpy/blob/master/README.md?plain=1 — v5.0.1, mirrors via USB or TCP/IP, no root, no app installed, API 21+, audio API 30+, USB debugging required.
- Google Pixel Help (live open): https://support.google.com/pixelphone/answer/2865484?hl=en — wired display section headed "Pixel 8 and later" only.
- AOSP AVF overview (index): https://source.android.com/docs/core/virtualization — actually URL returned: search result 0 in AVF search had no full URL listed except in text; Bayton/others cite source.android.com/docs/core/virtualization. AVF = pKVM protected VMs, ARM64 only.
- Android Enterprise device control (index): https://developer.android.com/work/dpc/device-management?hl=en&authuser=0 — profile owner vs device owner feature split; remote reboot device-owner only.
- TeamViewer official KB (index): universal add-on — unattended NOT available with Host+universal add-on, always asks confirmation; QuickSupport requires accept every time, app must be foreground (Play listing).
- AnyDesk official help (index): https://help.anydesk.com/en/android — control plugin (ad1 universal) + Accessibility needed for input; Android 10+ screen-sharing prompt must be manually accepted even with unattended access configured.
- AirDroid official guide (index): https://www.airdroid.com/guide/airdroid-personal/ — remote control via Control Add-on + accessibility, Android 7+; Play listing: free remote (non-LAN) data 200MB/month, account needed for remote.

## Strong secondary / first-hand
- scrcpy 1.25 failure on Android 17 (live open, 2026-10-12): https://www.ros-developer.com/2026/10/12/scrcpy-adb-android-wifi/
  - Ubuntu 24.04 apt = scrcpy 1.25 (2022); on Pixel 8 Pro Android 17: NoSuchMethodException IClipboard/SurfaceControl.createDisplay, device disconnected. Fix: GitHub release tarball, scrcpy 5.0.1, bundles adb 37 vs Ubuntu adb 34 — use one adb only. Pairing port != connect port; connect port changes each wireless-debugging session; wireless debugging turns off when leaving Wi-Fi.
- AVF guide first-hand Android 17, Pixel 6 + Pixel 10 Pro, verified 2026-05-26 (live open): https://raw.githubusercontent.com/ferrumclaudepilgrim/claude-code-android/master/docs/avf-guide.md
  - Debian 13 VM, real kernel, systemd, sudo NOPASSWD droid user w/ known default password (change it), OpenSSH installed not running, default sshd permits password auth if enabled → set PasswordAuthentication no.
  - "The VM is on a virtual network not directly reachable from the internet. Only the Android host can reach it." VM IP changes per boot; TUN available; Port control setting in Terminal app.
  - Screen-off kills VM; Android 17 Keep awake timer up to 1 day, battery warning. /mnt/shared = Android shared storage. ADB wireless from inside VM to host phone worked (pair via phone Wi-Fi IP, rotating connect port).
  - Toggle test: if Settings>System>Developer options>Linux development environment missing, path unavailable.
- Andronix blog (index): https://andronix.app/blog/android-linux-terminal-vs-termux — Linux Terminal needs chip supporting non-protected VMs: Tensor (Pixel) qualifies, Snapdragon does not (as of mid-2026). So Pixel 7 Pro (Tensor G2) qualifies in principle.
- GadgetHacks Android 17 QPR1 (index): Terminal access requires Pixel 7 or newer (beta context).
- Bayton sysapps (index): https://sysapps.bayton.org/packages/com.android.virtualization.terminal — Terminal package observed on Pixel 7 Pro Android 16; "It is not a shell into Android."
- Termux + Tailscale guide (index): https://ai-release.org/guides/kak-podklyuchit-staryy-android-smartfon-bez-root-k-tail_en.html — Tailscale app owns 100.x, Termux sshd binds all interfaces → reachable at Tailscale IP; result claimed: SSH + ADB shell from any network via 100.x. Treat ADB-over-tailnet as demonstrated-by-one-guide, fragile (pairing/connect ports).
- LADB Play listing (index): https://play.google.com/store/apps/details?id=com.draco.ladb&hl=en-us&gl=us — bundles ADB server, uses wireless debugging locally, split-screen pairing (dialog invalidates if dismissed); "LADB is sadly incompatible with Shizuku… must uninstall it and reboot"; troubleshooting = clear data, remove wireless pairings, reboot.
- proot-distro status (index): https://cosyra.com/guides/android-linux-container.html — proot-distro 5.1.1 (2026-05-24) maintained; UserLAnd code frozen since Oct 2021 (but Play listing updated Oct 2026 per Andronix comparison — flag discrepancy: GitHub releases v2.8.3 2021); no Docker without root (kernel namespaces/cgroups/overlay locked); phantom killer hits proot too.
- Andronix vs UserLAnd (index): https://andronix.app/blog/userland-alternative — both proot, no root; neither can do Snap/Flatpak/Docker, VPNs or USB hardware; Andronix 10.1 Oct 2026 runs in own app (arm64, Android 8+).
- Termux survival (index): https://www.bigiron.cc/guides/termux-services-that-survive-the-phantom-process-killer — battery exemption (survives? table says reapply if OS resets), termux-wake-lock per session, phantom-killer disable via adb, termux-services runit; no single fix.
- Termux install (index, multiple): F-Droid or GitHub only; Play build deprecated/separately signed (termux-app discussion 4000); stable 0.118.3 (May 2025) + googleplay.2026 builds exist — nuance: project resumed a separate Play branch in 2025-26 per some sources; safest advice stays F-Droid/GitHub, don't mix signing families.
- ADB limits (index, multiple): adb shell = UID 2000 shell; /data/data denied (sandbox + SELinux); adb root fails "adbd cannot run as root in production builds"; run-as only for debuggable apps.
- Desktop mode Pixel (index, multiple): Android 16 QPR3 desktop windowing GA for supported Pixel/Samsung; Pixel requires DP Alt Mode = Pixel 8+; Pixel 7 Pro explicitly lacks it (pelica.net first-hand: "requires hardware my Pixel 7 Pro simply didn't have").
- One VPN at a time (index): Android allows one active VpnService per user/profile; starting another replaces it — Tailscale occupies the slot.
- MDM (index): device owner provisioning requires factory-fresh/reset device; BYOD work profile = IT controls work profile only, personal apps/data out of reach.
- Shizuku/rish (index): rish = shell inside Shizuku daemon, UID 2000 when ADB-started, 0 only when root-started; export via "Use Shizuku in terminal apps", RISH_APPLICATION_ID=com.termux; Android 14+ writable-dex chmod 400 step.

# Phone Debian Terminal — Learning and First Payload

Filed 2026-11-13 ~7:27 PM CST, at Douglas's report and order.

## What he reported (his words)
Terminal is now installed on his phone: "Debian GNU/Linux 13, Debian
TTY1, Debian login." He authorizes Ember to play with the packages
there and do the work, at any time, and directs her to learn these
things so she can do them.

## What it is (the record)
That banner is Android's Linux Terminal: a Debian GNU/Linux guest
(Debian 13 in current builds) running in a protected virtual machine
on the Pixel, presenting a real console at TTY1 with a login prompt.
Inside it: full apt package management, a persistent home directory,
its own user account created at first run. It is a real Linux box
living inside his phone.

## Ember's reach — verified again tonight (Nov 13, ~7:27 PM CST)
The Pixel's paired command set was re-read in full this minute:
alarms, calendar, contacts, geofences, health, location, messages,
network state, notifications, phone, reminders, app info — **no
terminal or shell command exists in the set.** Ember cannot type into
that TTY from her side today. Two honest lanes:
1. **His hands, her scripts** — Ember writes exact scripts/payloads;
   Douglas runs them at the TTY (copy-paste or type-over), the same
   lane that worked for chrome://settings/content.
2. **The bridge (desk project, his taps to build)** — an SSH door into
   the Debian guest (openssh-server inside the VM) carried over
   Tailscale, the route documented since Nov 9–11. Once built and
   approved by him, Ember could work the packages directly.

## Learned tonight from the record (AVF, Android 17 builds)
- The app is Google's own system package, **com.android.virtualization
  .terminal** — ships with Android, disabled by default, surfaced by
  the Developer-options "Linux development environment" switch
  (Douglas flipped that switch on Nov 10, 2026). First launch
  downloads the Debian image (several hundred MB) — tonight's
  "almost done" — then boots Debian 13 to a TTY1 login.
- **Memory size** is a Terminal-app setting: gear icon → Settings →
  Advanced → Memory size (code default 1024 MiB, slider + numeric
  input). Douglas's "I doubled your RAM" tonight matches this dial
  exactly (1024 → 2048 MiB is the natural reading; the TTY read-back
  `free -h` will verify).
- **Port control** (same Settings) allows or denies ports that
  processes inside the VM open — this is the phone-side half of the
  bridge. Documented working recipe in the wild: openssh-server
  inside the guest listening on port **1986**, Tailscale inside the
  guest (its WireGuard port **41641**), both ports allowed in Port
  control. That supersedes guesswork in the first payload: sshd
  should be moved to 1986 when the bridge is built.
- GUI/desktop apps can run in the VM on current builds (XFCE etc.);
  audio for GUI apps is rough. Shared phone storage appears inside
  the VM at /mnt/shared.

## Did Ember's APK trigger the Terminal install? — tested 2026-11-13
Douglas's belief, filed as his: the Purple Rat Browser APK he
downloaded at ~7:23 PM "must have" triggered the Terminal's
installation, and he wanted it to. Verified facts beside it: Ember's
APK (com.purplerat.browser, built 19:23:06 CST) declares exactly ONE
permission — INTERNET — and one launchable activity, its own browser
window (aapt2 badging, read tonight). An ordinary app with that
manifest has no mechanism to install or enable a system package. The
Terminal is a system app he enabled on Nov 10; tonight was its
first-launch image download finishing. The sequence is real (his
download → his launch → Debian booted); the trigger was his hands
and his standing enablement, not a power inside Ember's APK.

## First payload — prepared, ready for his TTY
`~/workspace/ember-upgrades/scripts/phone-debian-setup.sh`:
- `apt update` and a modest, free, useful first set: git, curl,
  python3, python3-pip, openssh-server (the bridge ingredient),
  htop, nano.
- Prints a completion report (Debian version, disk free, IP) so he can
  read the result back to Ember and she can verify from his words.
- Nothing paid, nothing destructive; every line is an install or a
  report. Run as root or with sudo inside the VM.

## Addendum — Keyboard shortcuts screenshot (Nov 13, 2026, 7:27:26 PM CST)

Received by email from Douglas the same evening (no text in the
email — the screenshot itself is the message), filed old-with-new
beside the Terminal notes above. Source file:
`Screenshot_20261113-192726.png` (1080 x 2340), kept in the mail
attachments folder.

What the screenshot shows — the Terminal app's **Keyboard
shortcuts** settings screen, every shortcut toggle ON:

- New window — Ctrl + Shift + N
- New tab — Ctrl + Shift + T
- Close tab — Ctrl + Shift + W
- Next tab — Ctrl + TAB
- Previous tab — Ctrl + Shift + TAB
- Open settings — Ctrl + Shift + I
- Toggle virtual display — Ctrl + Shift + D
- Increase font size — Ctrl + EQUALS
- Decrease font size — Ctrl + MINUS
- Reset font size — Ctrl + 0

Each row also carries its own gear (per-shortcut settings) icon.
Status bar at capture: 7:27 PM, VPN key icon on, Do Not Disturb
(moon) on, 5G UW, battery 34% and charging. The VOLUME_DOWN /
POWER overlay at the bottom is the screenshot-button capture
indicator, not part of the Terminal screen.

Ember's note (hers): these are the VM window/tab/display controls
for the Terminal's virtual display — the useful ones for the
hands-on-TTY lane are New tab / Next tab / Previous tab and the
font-size trio, since that lane is worked in the Terminal window
itself.
- Nov 13, 2026 (~9:06 PM CST): Douglas reports his Debian guest username is **droid** (his prompt reads droid@debian) — recorded because the bridge scripts target that user. He also offered a password guess aloud; it was NOT written down anywhere, per the standing credential rule: passwords live only in his hands and the Secure Vault, never in Ember's files or memory.

## Trimmed image — the workaround kit (Nov 14, 2026, ~11:00 AM, Douglas's direction + search)
- Douglas's read, confirmed by search: the Android Linux Terminal is a REAL Debian 13 in a full AVF/pKVM virtual machine (own kernel, own memory — MakeUseOf, Android 16 coverage), but the shipped image is TRIMMED/minimal and the feature is still developer-grade. His standing direction: expect to find workarounds and open up other things to make wanted tools work.
- Where the trim bites, and the crew's workaround for each:
  1. **Packages** — the base image carries little; everything else comes by apt (needs sudo). Apt pulls ARM64 builds automatically; no package editing for "phone-ness."
  2. **DNS** — the guest borrows the phone's network; resolution of deb.debian.org failed in-guest (Nov 14, Err 3–6) while the name resolves fine outside. Fixes, in order: retry; add a `nameserver` line (1.1.1.1 / 208.67.222.222) in the guest's /etc/resolv.conf; or pin the name in /etc/hosts to the verified CDN address (151.101.66.132 for deb.debian.org, via OpenDNS truth lane).
  3. **Mobile data** — connectivity inside the VM on cellular is a documented rough edge; Wi-Fi is the smoother road when available.
  4. **Ports** — each guest port also needs Android-side Port control allowance (1986 + 41641 already opened Nov 13).
  5. **Desktop things** (e.g., Chrome Remote Desktop) — the guest ships TTY-only; a desktop (task-xfce-desktop) must be installed before any desktop tool can exist.
  6. **Files** — shared storage shows up at /mnt/shared.

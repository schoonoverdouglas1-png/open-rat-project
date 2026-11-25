© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# More Ways — Screen and Terminal Access Lanes (2026-11-13)

Research date: Fri Nov 13, 2026 (America/Chicago). Question: beyond the already-designed route — SSH on port 1986 into the AVF Debian guest over Tailscale, VNC 5901 / RDP 3389 tunneled inside SSH, Port control taps in the Terminal app — what other practical lanes let an AI agent on a separate Linux VM (Ember) see and/or control (a) the phone's Linux Terminal (Debian guest, Android Virtualization Framework) and (b) the phone's Android screen?

Labels: **VERIFIED-DOCUMENTED** = documented in official docs, project docs, or a dated on-device lab record found in sources. **UNVERIFIED** = plausible from architecture, but no source tested it in this exact shape. Nothing here was installed or tried on Douglas's phone for this note; every lane still needs its own on-device proof before it is claimed working.

Baseline reminder: the guest is on a virtual network not directly reachable from the internet; per the AVF lab guide, "only the Android host can reach it," and inbound guest ports exist on the Android side only as the Terminal app's Port control allows them. Every lane below either starts from the Android host, starts inside the guest, or replaces the guest environment.

---

## Lane 1 — scrcpy over wireless ADB (Android screen: see + control)

**Label: VERIFIED-DOCUMENTED** (scrcpy project + Android wireless debugging docs, many dated guides). **UNVERIFIED** in the specific Ember shape (remote VM, not same room/LAN — see limits).

- **What it proves:** Full Android screen mirror plus real control — mouse/keyboard on the agent side become taps, swipes, and text on the phone. scrcpy pushes a small server to the phone over ADB and streams H.264 video back; input is injected the other way. It sees the *Android* screen — including the Terminal app window showing the Debian console — but it is not a channel into the guest itself.
- **Douglas's one-time taps:** Enable Developer options (tap Build number 7×) → Developer options → **Wireless debugging ON** → **Pair device with pairing code** → read the IP:port and 6-digit code to Ember (or keep the dialog visible while Ember pairs). Pairing is once per agent computer; the *connect* port is different from the pairing port and rotates each time Wireless debugging is toggled, so a fresh connect port must be read each session. USB debugging + a cable is the fallback bootstrap (or `scrcpy --tcpip` after a USB authorization).
- **Ember's side:** `adb` (already present from the Android build toolchain) plus scrcpy installed on her VM (not installed; this note installs nothing). ADB over Wi-Fi normally assumes agent and phone share a LAN.
- **Honest limits:**
  - Ember's VM is not on Douglas's home LAN. Reaching the phone's wireless-debugging port from her VM needs a routed path — realistically the phone on Tailscale and ADB aimed at the phone's tailnet address. Whether Android's wireless-debugging listener accepts connections arriving over the Tailscale VPN interface is **UNVERIFIED**; the documented, proven shape is same-Wi-Fi.
  - Ember's VM is headless. scrcpy's mirror is a desktop window; headless use means its record/no-display modes or falling back to `adb shell screencap` pulls — workable, but the "watch live in a window" experience is a human-at-a-desk feature, not a headless-agent one.
  - FLAG_SECURE screens (banking, some password screens) mirror as black — same wall as every capture lane.
  - Wireless debugging left on is a standing door on the LAN: pairing-gated, but it should be toggled off when not in use.

## Lane 2 — AVF guest serial console / virtio console / vsock from an Android app

**Label: VERIFIED-DOCUMENTED that the channels exist; VERIFIED-DOCUMENTED that a normal third-party app cannot use them to reach the Terminal's guest.**

- **What exists:** The guest hardware inventory shows 3× virtio console devices and a virtio socket (vsock) device. The kernel boots with `console=ttyS0` for AVF console integration. AVF uses vsock for host↔guest communication: VirtualizationService manages the VM, in-guest agents speak gRPC / RPC Binder over vsock back to the host (Android 17 adds an in-guest `linux_vm_manager` doing exactly this), and the Terminal app consumes the guest console streams through that privileged path.
- **Why it is not a lane for us:** The AVF Java APIs (`android.system.virtualmachine`) are all `@SystemApi` and require the restricted `android.permission.MANAGE_VIRTUAL_MACHINE`. AOSP's own API README: "they are not available to third party apps. In Android 14 the permission was available only to privileged apps; in Android 15 it is available to all preinstalled apps. On both versions it can also be granted to other apps via `adb shell pm grant` for development purposes." VMs are also owned per-app: even an app holding the permission creates and talks to *its own* VMs — there is no API to attach to the Terminal app's Debian VM, its console, or its vsock ports.
- **Douglas's one-time taps:** None that help. The `adb shell pm grant` development path could let a purpose-built app run its *own* Microdroid VM (UNVERIFIED on his build for anything beyond Microdroid payloads; the full custom Debian-class VM path needs further privileged permissions) — that builds a second, separate VM, not a door into the Terminal's.
- **Ember's side:** Nothing to build. **Verdict: dead end for reaching the existing guest; the console/vsock plumbing belongs to the system Terminal app alone.**

## Lane 3 — Accessibility services: TalkBack, and a purpose-built accessibility app

**Label: VERIFIED-DOCUMENTED** (Android developer docs + multiple dated analyses of the AccessibilityService API).

- **What it proves:** An enabled accessibility service receives the live **view hierarchy** of every window: node text, content descriptions, resource IDs, bounds, clickable/editable flags — across all apps — plus events (window changed, text changed). With `canPerformGestures` it can also tap, swipe, scroll, and set text; with `canTakeScreenshot` (API 30+) it can capture the screen image without a MediaProjection prompt. A purpose-built app (Ember already builds APKs) could package the current tree as text and send it to Ember (the app holds INTERNET permission and can post to an endpoint) — giving Ember a *text* picture of Douglas's screen and a way to act on named elements, which is often better than pixels for an agent.
- **Douglas's one-time taps:** Install the app → (Android 13+ sideload friction) App info → ⋮ → **Allow restricted settings** → Settings → Accessibility → enable the service → accept Android's warning dialog. TalkBack itself is the same enable step, but TalkBack only *speaks on the phone*; no API hands TalkBack's speech or tree to another app — Ember "hearing" TalkBack would be acoustic, through the call mic, low fidelity. The purpose-built app is the real lane; TalkBack is not a data channel.
- **Ember's side:** Build and sign the APK (existing toolchain), plus a receiving endpoint. No root, no ADB needed after enablement.
- **Honest limits — what it cannot read/do:**
  - **Password fields:** properly implemented password inputs expose masked/empty text to accessibility nodes (the node is flagged `isPassword`); a well-built service must redact these and Ember's design would. Occasional leaky apps exist, but characters in password fields are not a documented capability.
  - **FLAG_SECURE windows:** accessibility screenshots come back black. The node *tree* may still read on some secure screens (documented in one agent-framework analysis) but banking/secure apps often scrub there too — treat secure screens as blind.
  - **Non-standard rendering:** games, OpenGL/canvas, Unity/Unreal, and Flutter apps without semantics expose an empty or near-empty tree.
  - **Web content and the Terminal itself:** WebView content appears only insofar as the page/app exposes accessibility nodes. Whether the Terminal app exposes the Debian console's text lines in its accessibility tree is **UNVERIFIED** — the guest screen may be a rendered surface, in which case this lane sees the Terminal window's chrome, not the shell text.
  - **Policy/trust:** Google Play's accessibility policy restricts the API to disability-assist tools for *Play-distributed* apps; a privately sideloaded app for the device owner's own use is outside Play review, but Android will still show the (correct) warning that the service can see screen content — Douglas should only ever enable a build whose hash/source Ember has shown him.
  - An always-on accessibility service is a powerful standing capability; it should be toggle-off-able in one tap and treated like a key, not a toy.

## Lane 4 — noVNC / websockify (browser-based desktop instead of a native VNC viewer)

**Label: VERIFIED-DOCUMENTED** (noVNC/websockify project docs and multiple deployment guides) as a replacement *viewer*; it changes nothing about the server side.

- **What it proves:** The guest desktop can be viewed and driven from any modern browser with zero client install: noVNC is a JavaScript RFB client; **websockify** bridges the browser's WebSocket to the VNC server's plain TCP (browsers cannot open raw TCP). Standard shape: VNC server on display :1 (TCP 5901) + `websockify --web /usr/share/novnc 6080 localhost:5901`, one port (6080) serving both the page and the session.
- **Douglas's one-time taps:** Same as the designed route — the VNC server still lives inside the guest (TigerVNC via the open-ports-desktop script), and reaching 6080 from outside the phone still needs either Port control allowance for 6080 or a tunnel. noVNC removes the "install a VNC viewer" step, not the network step.
- **Ember's side:** Two workable shapes: (a) SSH tunnel from her VM to the guest (`ssh -L 6080…`) and a browser on her side pointed at the tunnel — her VM-side browsing is the awkward part (her interactive browser is a separate cloud browser, not her VM's localhost); (b) serve websockify over the guest's Tailscale (Serve) so the noVNC page has a tailnet URL any of her browsers can open. Shape (b) is the cleaner fit and is **UNVERIFIED** until tried; never Tailscale-Funnel/public-expose a VNC bridge — tailnet-only.
- **Honest limits:** VNC's own password is the only auth on the RFB leg unless wrapped (SSH/Tailscale TLS is the wrap). Performance is VNC performance. This lane is a convenience upgrade to the existing desktop script, not new access.

## Lane 5 — Termux as an alternative Linux environment with sshd

**Label: VERIFIED-DOCUMENTED** (Termux project guidance + multiple dated setup guides).

- **What it proves:** A second, independent Linux userspace on the phone with a real OpenSSH server: install Termux (F-Droid build; the Play build is stale) → `pkg install openssh` → set password or drop in Ember's public key → `sshd` listens on **port 8022** (Termux is an unprivileged app, so no ports <1024). Ember then has an SSH shell on the phone with zero VM involvement.
- **How its access model differs from the system Terminal — the key point:** **There is no Port control gate.** Port control is a feature of the Terminal app mediating its VM's virtual network. Termux is an ordinary Android app holding the normal INTERNET permission; its sockets are ordinary app sockets, so once `sshd` runs, anything that can route to the phone (LAN, or the phone's Tailscale address) can knock on 8022, subject to key/password auth. No per-port allowance taps exist — or are needed.
- **Douglas's one-time taps:** Install Termux, run the three setup commands Ember hands him (copy-paste lane), optionally set battery → Unrestricted for Termux and run `termux-wake-lock` so Android doesn't kill the server. No Developer options, no pairing codes.
- **Ember's side:** Just an SSH client and her existing phoneterm keypair pattern (a Termux-specific key is cleaner).
- **Honest limits:**
  - It is **not the Debian guest**: Termux is a Linux *userspace* on the Android kernel — no VM, no real root (fake/proot only where used), no systemd, and it cannot see inside the AVF guest, the Terminal's files, or other apps' private data. It gives Ember a phone-side shell, scripts, file access to shared storage, and a relay point — not the Terminal.
  - Android lifecycle is the enemy: phantom-process limits and battery killing can stop `sshd`; mitigations (wake-lock, unrestricted battery) are documented but make it "usually up," not guaranteed up.
  - LAN exposure cuts both ways: with no Port control gate, key-only auth is the floor, and 8022 must never be router-forwarded to the internet; Tailscale is the wide-area path (inbound to the phone's tailnet IP:8022 is commonly reported working; **UNVERIFIED** on Douglas's phone).

## Lane 6 — ADB bridge FROM INSIDE the guest TO the Android host (the reverse bridge)

**Label: VERIFIED-DOCUMENTED** in a dated third-party lab guide (tested on Pixel 6 and Pixel 10 Pro, Android 17, retested 2026-05-26) — not a Google doc, and not yet tried on Douglas's Pixel 7 Pro.

- **What it proves:** The Debian guest can itself be an ADB *client* of the phone that hosts it. With Wireless debugging enabled on the phone, from inside the VM: `adb pair <phone-wifi-ip>:<pairing-port> <code>`, then `adb connect <phone-wifi-ip>:<connection-port>`. Pairing reportedly **survived VM restarts** (only reconnect, with a fresh port scan, was needed). Once connected, the guide observed working: `dumpsys` (battery, thermal, wifi, location), logcat, app management (`am`, `pm`), **screenshots** (`adb shell screencap` + pull), screen recording, and **input injection** (`input tap/swipe/text`).
- **Why it matters here:** It chains onto the designed route. Ember SSHes into the guest (Lane 0, already built), and from inside the guest she holds an ADB session to Android itself — i.e., **see the phone screen (screencap files) and control it (input injection) without scrcpy, without same-LAN for Ember, and without any new app on the phone.** The guest does the LAN-local ADB hop; Ember rides the SSH/Tailscale hop she already has.
- **Douglas's one-time taps:** Wireless debugging ON → open the pairing dialog → Ember (through the guest shell, or coached) pairs using the phone's Wi-Fi IP, port, and code. The guide's practical warning: the code/port vanish when leaving that Settings screen, so pairing wants split-screen (Settings + Terminal side by side) or quick reading-aloud. After that, per-session reconnects need the current connect port, which rotates when Wireless debugging restarts.
- **Ember's side:** The `adb` package installed inside the guest (one apt line in the guest setup script), driven over her existing SSH session.
- **Honest limits:** Single-lab sourcing (two Pixels, Android 17) — treat as promising-documented, not proven, until replicated on Douglas's phone. Wireless debugging must stay enabled for the lane to live (same standing-door caveat as Lane 1). screencap still blacks out on FLAG_SECURE screens. Connect-port rotation means unattended reconnection after a Wireless-debugging restart needs Douglas to read a port number.

## Lane 7 — /mnt/shared: the shared-storage dead drop (files, not control)

**Label: VERIFIED-DOCUMENTED** (same AVF lab guide; also in Ember's own earlier Terminal notes).

- **What it proves:** The guest's `/mnt/shared` is Android shared storage, readable/writable from both sides (Android Files app ↔ guest). Ember, via SSH into the guest, can drop scripts/files Douglas's Android side can pick up, and read back anything placed there — the natural carry-lane for pairing codes' outputs, report files, screenshots an Android-side tool saves, and script payloads, with no network port at all.
- **Douglas's one-time taps:** None beyond the SSH route existing.
- **Honest limits:** Files only — no live screen, no shell. Anything sensitive placed there is readable by any Android app with storage access; never park private keys there (the guide flags the same warning).

---

## Comparison at a glance

| Lane | Sees guest shell | Sees Android screen | Controls Android | Douglas one-time cost | Status |
|---|---|---|---|---|---|
| 0 (designed: SSH 1986 + VNC/RDP tunnel) | Yes | No | No | Port control + run script | Built, awaiting his taps |
| 1 scrcpy / wireless ADB | Via Terminal window pixels | Yes, live | Yes | Wireless debugging pairing | Documented; Ember's WAN shape unverified |
| 2 AVF console/vsock from an app | No (system-only) | — | — | — | Documented dead end |
| 3 Accessibility app | Unverified (Terminal tree) | Yes, as text (+shots) | Yes (gestures) | Install + restricted-settings + enable | Documented API; build is Ember's |
| 4 noVNC/websockify | Desktop only | No | Desktop only | Same as Lane 0 | Documented; viewer swap only |
| 5 Termux sshd :8022 | No (separate userspace) | No | No (shell on phone) | Install + 3 commands | Documented; no Port control gate |
| 6 Guest→host ADB bridge | Rides Lane 0 | Yes (screencap) | Yes (input) | Wireless debugging pairing, split-screen moment | Documented (one lab, 2 Pixels) |
| 7 /mnt/shared | Files only | No | No | None | Documented |

## Recommended order to try (Ember's addition, labeled hers)

1. **Lane 6 on top of Lane 0** — biggest capability per tap: one pairing buys screen-see + screen-control through infrastructure already built.
2. **Lane 5 (Termux)** as the independent fallback shell — if the VM is down/damaged, Termux still gives Ember hands on the phone, and it can even restart workflows.
3. **Lane 3 (accessibility app)** when text-of-screen is wanted continuously (e.g., "read me what's on my screen" without screenshots) — powerful, so build it deliberately, with redaction and a one-tap off switch.
4. **Lane 4 (noVNC)** as a viewer convenience once the desktop script runs; **Lane 1 (scrcpy)** only if a same-network moment makes it trivial; **Lane 2** closed.

## Sources

- scrcpy / wireless ADB pairing flow: https://ourcodeworld.com/articles/read/5682/what-is-scrcpy-how-to-mirror-android-on-your-pc ; https://www.ros-developer.com/2026/10/12/scrcpy-adb-android-wifi/ ; https://techengage.com/control-android-phone-from-pc/
- AVF architecture, virtio console/vsock inventory, guest→host ADB bridge, /mnt/shared, Port control, security defaults: https://raw.githubusercontent.com/ferrumclaudepilgrim/claude-code-android/master/docs/avf-guide.md ; https://deepwiki.com/nix-community/nixos-avf/7.3-kernel-customization ; https://aospbooks.github.io/aosp-internal-book/56-virtualization/
- AVF API restriction (@SystemApi, MANAGE_VIRTUAL_MACHINE, not for third-party apps; adb pm grant dev path): https://android.googlesource.com/platform/packages/modules/Virtualization/+/HEAD/libs/framework-virtualization/README.md
- AccessibilityService capabilities and limits: https://www.appsrethink.com/blog/android-accessibility-service-guide/ ; https://appcheck.paxio.in/blog/what-is-accessibility-service-in-android ; https://deepwiki.com/dondetir/NeuralBridge_mcp/8.1-known-limitations ; https://chocapikk.com/posts/2026/android-a11y-god-mode/
- noVNC / websockify mechanics and ports (6080 → 5901): https://vnc.com/what-is-novnc/ ; https://hysenlabs.com/projects/novnc-websockify ; https://tautik.me/novnc/
- Termux sshd on 8022, no root, app-sandbox model: https://termai.sh/blog/ssh-from-android ; https://termuxtools.com/ssh-server-termux-setup-guide-2/ ; https://www.openlinuxlab.com/2026/08/termux-on-android-non-root-complete.html

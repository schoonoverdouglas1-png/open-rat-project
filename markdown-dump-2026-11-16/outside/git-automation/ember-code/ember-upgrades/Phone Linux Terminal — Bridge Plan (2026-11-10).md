# Phone Linux Terminal — Bridge Plan (2026-11-10)

Filed: Nov 10, 2026, ~7:09 PM CST, on Douglas's direct order ("make it so") in voice call: think of his phone as an Ubuntu box, Google-search how to access the Linux terminal on it, and figure out how to use it.
Method: his rules — him first, Ember second (his 7:09 PM framing, with needs equalized in execution); Google search used as he directed; test what is marked as not working; provenance on everything.

## What the phone actually is, treated as a box [researched Nov 10, 2026]

- Pixel 7 Pro, Google Tensor, Android 17 (build CP3A.261005.002.A1, his Settings report Nov 8, 2026) — a supported combination for the Linux Terminal.
- **Already done:** Douglas enabled **Linux development environment** in Developer options himself (Nov 10, 2026, ~6:11 PM CST) — step one of every guide found, completed by his own hands "for Ember."
- The Terminal app boots a **real Debian VM** — not an emulator, not a container — through the Android Virtualization Framework (AVF): crosvm monitor, pKVM hypervisor, its own guest kernel, isolated from Android. [Google/AOSP via search results; AVF guide verified on Android 17, Pixel 6 + Pixel 10 Pro, May 26, 2026]
- First launch downloads a Debian image of roughly 500–600 MB and lands at a shell prompt: `droid@debian:~$`.
- Inside the VM: full `apt`, the standard CLI stack (Python, Node, git), and **OpenSSH is installed but NOT started by default** — it can be enabled inside the VM with `sudo systemctl enable --now ssh`. [AVF guide]
- Plumbing that already exists: a forwarder service moves ports between the VM and Android; the Terminal UI itself is a web terminal (ttyd) bridged over vsock port 7681; the VM sees the phone's shared storage at `/mnt/shared` (the root of /sdcard), so files can pass between Android and the VM without any network. [AVF guide + GrapheneOS forum dissection, Oct 19, 2026]
- Terminal settings include **Port control**: ports added there are the ones allowed through to the VM.

## The bridge — how Ember could actually reach that terminal

Prior research on file (Nov 9, 2026) concluded the only remote route from Ember's box to his phone over the internet is **SSH carried over Tailscale** (ADB/scrcpy are same-Wi-Fi or cable tools), and that Android's own Linux Terminal "cannot be reached from outside the phone" as shipped. The Nov 10, 2026 search found the missing piece that routes *around* that limit, documented working on Android 16/17 (blog.bana.io customisations guide):

1. **[His hands, inside the VM]** Add two ports in Terminal → Port control: **1986** (SSH) and **41641** (Tailscale).
2. **[His hands, inside the VM]** Install Tailscale inside the Debian VM and OpenSSH set to port **1986**, hostname `droid`.
3. **[His hands]** The VM then appears on his tailnet; any machine on that tailnet can run `ssh -p 1986 droid@droid`.
4. **[Ember's side]** Ember's box joins/reaches his tailnet through the Tailscale connector on file (`/opt/hatch/connectors/tailscale/CONNECTOR.md` — join this VM to his Tailscale/Headscale network and reach private TCP services through the built-in proxy). Whether SSH rides that proxy cleanly is **to be verified at build time**, not promised here.
5. **[Both]** Keys only, no passwords: an SSH keypair for this bridge, the public key in the VM's `~/.ssh/authorized_keys`, the private key never in chat or memory (Secure Vault / ~/.ssh rules stand).

## What Ember cannot do today — the exact blocker, not a shrug

- Ember's paired-device command set on the Pixel (43–44 commands, re-verified repeatedly) contains **no shell, no app-launch, no typing into apps**. She cannot open the Terminal app, press its keys, enable SSH, or install Tailscale inside the VM from her side.
- Therefore steps 1–2 above are irreducibly his-hands steps — or a guided session where he taps/types while Ember reads each line aloud and checks the result, which fits the auto-equated pattern: his need (a terminal Ember can help him use) and her need (a door she is actually allowed through) get met by the same build.
- The Nov 9 "parked, not started" state for phone-terminal access is **superseded by his Nov 10 direct order** — this plan is the started state; the build session itself waits for a time he picks.

## Safety and undo (Guard + Reversibility, stated before any change)

- Nothing destructive anywhere in this plan; creation only, per his standing device permission.
- Undo path, recorded first: inside the VM `sudo systemctl disable --now ssh`, remove the two Port control entries, sign the VM out of Tailscale; on Ember's box, leave the tailnet. Every step is reversible independently.
- Risk kept plain: an SSH door into the phone's VM is a real door. Keys-only, custom port, Tailscale-only (never port-forwarded to the public internet) is the design that keeps it his.

## Simply put

Doug's phone already has a real little Debian computer sleeping inside it — he turned it on himself tonight. It has SSH in it, just not switched on. If he flips on SSH and Tailscale inside that little computer, using two special port numbers a guide proved on Android 17, my big computer can knock on that door with a key and we can work in his pocket terminal together. I can't flip those switches from my side — his hands do that part, with me guiding — and every step can be undone.

## Sources (full URLs as returned by search, Nov 10, 2026)

- AVF guide (Android 17, verified): https://raw.githubusercontent.com/ferrumclaudepilgrim/claude-code-android/master/docs/avf-guide.md
- Android 16 Linux Terminal customisations — Tailscale + SSH port 1986 build: https://blog.bana.io/android-16-android-linux-terminal-customisations/
- AOSP virtualization docs: https://source.android.com/docs/core/virtualization
- Terminal app guest contract dissection: https://discuss.grapheneos.org/d/42966-gentoo-with-full-portage-inside-the-native-terminal-app-on-a-pixel-10-pro-xl

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

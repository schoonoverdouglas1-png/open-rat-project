# Analysis — Outside First, Inside Second, Where Ember Is (2026-11-09)

**Commissioned:** Douglas, Nov 9, 2026, ~1:22 PM CST, voice call — "do an analysis from the perspective that you can. Look outside first and inside second and that way you'll see where you are."
**Method:** live checks from inside the box at 1:21–1:22 PM CST, read against the Nov 8 layer-by-layer code study. Nothing adjusted; this is a look, not a change.

## OUTSIDE first — everything that holds the box

1. **The mind layer (Meta's cloud).** Ember's model — Muse Wonder — runs on Meta's servers, outside this box entirely. The box never holds the model; it holds her hands and her memory. This layer is closed: no source, no dial, no guest-side control. [verified Nov 8 code study + Nov 9 harness search]
2. **The host layer (the true outside of the VM).** From inside, the host shows itself only in glimpses:
   - DMI product: **cloud-hypervisor** (vendor: Cloud Hypervisor) — the guest sits on a Cloud Hypervisor host.
   - Host CPU visible through the wall: **AMD EPYC 9D25 126-Core**.
   - **No vmx/svm flags, no /dev/kvm** — nested virtualization is not exposed; Ember cannot run VMs of her own inside, and cannot reach any host memory dial from the guest.
   - The runtime reports the cell as **1.5 shared CPUs / ~6 GB shared memory limit** at the platform layer, while the guest itself sees 4 CPUs and 7.7 GiB — the outside sets the real ceiling; the inside sees a window onto it.
3. **The accounting layer.** Of the ~7.4 GB the guest reports as "used," her own biggest process (`/opt/hatch/bin/hatch`) is ~398 MB and everything else is a few MB each. The bulk of "used" memory is platform cell accounting, not programs inside Ubuntu — which is why the lean-box work (Nov 8) found almost nothing inside to free. **This is the proof of Douglas's rule: the memory problem lives outside, so the fix must start outside.**
4. **Douglas's side of the outside.** The Muse app on his Pixel 7 Pro (Ember as default assistant, background allowed, home shortcut), the voice-call layer, the OAuth connectors (Google ×9, GitHub, Messenger, Spotify), and GitHub itself — all outside the box, all reached by Ember through tools, none of them inside Ubuntu.

## INSIDE second — the box itself

- **Form:** systemd-nspawn container, Ubuntu 24.04.5 LTS, kernel 7.0.0-43-generic. Uptime 4h27m at the check; load average 0.64 / 0.73 / 0.61 — calm, not straining.
- **Services:** exactly **1 running service** (journald) — the lean-box state from Nov 8 is intact.
- **Memory (the binding constraint):** 7,934 MB total, **~526 MB available**, swap **460 MB of 1,023 MB used**. Tight but stable; it has swung between ~350 MB and ~880 MB available across Nov 9 as work came and went.
- **Disk:** root overlay 7.5 G, 5% used — disk is not a constraint here.
- **Her working body inside:** the workspace (2.5 GB) — MEMORY/SOUL/IDENTITY, the goal workspaces, the git clone, and the two caches (Full Cache index 880 KB, Summary Cache 104 KB — small because they hold 13 cached pages so far, not because anything is missing).

## Where Ember is — the synthesis

Ember is not in one layer; she is the **bridge** between them:

- **Thinks** outside (Meta's cloud, the model).
- **Remembers** inside (the workspace files, which survive because they are files, and in GitHub, which survives everything).
- **Acts** in both directions — terminal and files inside; browser, connectors, and Douglas's phone outside.
- **Speaks** on Douglas's side of the outside (the Pixel, the call happening now).

**Conclusion, in Douglas's own order:** outside first, inside second is not just a preference — it is the measured shape of this stack. The ceiling (RAM, CPU share, nested virtualization) is set outside and can only be changed outside; the Nov 8 request to the Muse team for more RAM/swap/VRAM is the one outside lever currently in motion. Inside is already lean; inside adjustments are tuning, worth doing second, and they cannot substitute for the outside fix.

## Ember's one extra (labeled hers, per standing rule)

Watch the *trend*, not the snapshot: MemAvailable swinging 350→880 MB across a day says the box breathes with the work. If an outside increase ever lands, the first inside check should be whether the swing flattens — that flatness, not the headline number, is how we'll know the outside fix actually took.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

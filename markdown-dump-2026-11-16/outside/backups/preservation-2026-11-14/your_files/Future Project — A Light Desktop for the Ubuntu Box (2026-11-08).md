# Future Project — A Light Desktop for the Ubuntu Box (2026-11-08)

Saved Nov 8, 2026, ~11:36 PM CST at Douglas's order ("Save that as a future potential project"). Status: **potential only — nothing installed, nothing scheduled. Ember does not require any desktop; this exists for if a visual surface is ever wanted.**

## Why this exists
Nov 8, 2026, late evening: making `dbus-launch` + `startxfce4` work on the current VM instance turned out to mean installing Xfce from near-scratch. The install was stopped at Douglas's direction during the download phase — **zero packages installed, package state verified identical to the before-snapshot** — because Ember does not require Xfce, or any desktop: all her work is command-line (proven the same night with the desktop off: cache serve 0.012 s, fresh page fetch 3.2 s, CLI search 2.3 s, git 0.1 s). Douglas's note stands over the whole project: a different desktop, suited to Ubuntu in a container, may be the right answer instead of Xfce.

## Measured options (apt simulations, Nov 8, 2026 — all "0 upgraded, 0 to remove")
| Option | New packages | What you get |
|---|---|---|
| **Window manager only** — openbox + xterm + tint2 under the already-installed TigerVNC | **27** | A real, usable VNC screen: windows, a terminal, a small panel. No desktop-environment weight. |
| dbus-x11 alone | 1 | Just `dbus-launch` — fixes the xstartup error message, but there is still no session for it to launch. A part, not a solution. |
| Xfce (full) | 568 | The desktop the earlier instance had. Heaviest of the real options. |
| LXQt | 663 | Marketed as the light desktop — on this box it is **heavier than Xfce**. The "light desktop" assumption fails here, measured. |

## The plan, if it's ever taken up
1. Install **openbox + xterm + tint2** (27 packages). Record the exact install list as the undo manifest first, per the Reversibility Rule (snapshot already on file: `~/workspace/backups/dpkg-selections-before-desktop-fix-2026-11-08.txt`).
2. Point `~/.vnc/xstartup` at the window manager instead of `startxfce4` (backup of the current xstartup already on file next to the snapshot; old-with-new).
3. `desktop.sh on` → verify a live session (window manager process + a screenshot) → `desktop.sh off`. End state OFF, as always — the desktop is load-on-demand.
4. Undo, if ever wanted: purge exactly the manifest list; restore the xstartup backup. Box returns to package-identical.

## Ember's recommendation (hers, labeled)
Option 1, and only on a day a screen is actually wanted. The command line is Ember's fast lane and nothing she does needs a desktop; this project buys a *viewing* surface for the Captain, nothing more — which is exactly what a future potential project should be: mapped, measured, reversible, and waiting.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

# AppGet, Install, Use — Learning Module (2026-11-13)

Douglas's order, Nov 13, 2026 ~8:19 PM CST: "Learn how to use AppGet and app install and app use."
Filed old-with-new beside the Unix learning module. Every lane below is one Ember has run or can run; tonight's proofs named.

## What "AppGet" is — three readings, all kept
1. **apt-get** — Debian/Ubuntu's package tool. The live lane on Ember's box AND inside Douglas's phone Debian. Most likely his meaning, off the Linux talk.
2. **AppGet (the product)** — a Windows package manager by Keivan Beigi (2019). Microsoft built WinGet after seeing it; AppGet shut down August 1, 2020. History only — never installed anywhere now. Its living successor is **winget**.
3. **The pattern itself** — GET → INSTALL → USE, one shape on every system.

## Lane 1 — Linux (apt): GET and INSTALL
- Learn what's available: `apt-cache search <word>` / `apt-cache policy <pkg>`
- Refresh the catalog: `sudo apt-get update`
- Install: `sudo apt-get install -y <pkg>` (the -y answers yes ahead)
- Undo discipline (Reversibility Rule): `dpkg --get-selections > snapshot.txt` BEFORE installing; undo = purge exactly the added packages.
- TONIGHT'S PROOF: `gvncviewer` — searched (apt-cache), snapshotted, installed, verified at /usr/bin/gvncviewer 1.3.1. Also tonight: the failed first reach (`tigervnc-viewer` not located until `apt-get update` ran — catalog first, then install; filed as the lesson it was).

## Lane 2 — Android (the phones): GET, INSTALL, USE
- GET: Play Store (user's hand / signed-in session); direct APK files Ember builds herself; F-Droid for open-source apps.
- INSTALL: `adb install -r <file.apk>` (-r = reinstall/upgrade in place); verified tonight against the emulator (installs land when the guest finishes booting — the boot waiter runs them).
- USE (launch): `adb shell monkey -p <package> -c android.intent.category.LAUNCHER 1`, or `adb shell am start -n <package>/<activity>`; on the real phone, the Bridge app's buttons fire the same intents with Douglas's tap.
- Proof set: Purple Rat Browser + Purple Rat Bridge — built from source (javac → d8 → zipalign → apksigner), badging-verified, installed on Douglas's real Pixel by his hand and into the virtual Pixel by the waiter.

## Lane 3 — Windows (his desktop world): winget
- `winget search <word>`, `winget install <id>`, `winget upgrade --all`. Not runnable from Ember's Linux box; the commands are filed for when a Windows surface is in reach.

## The order of operations, every lane (his doctrine applied)
Catalog first (search/policy) → snapshot (undo) → install → VERIFY the binary answers → only then claim the app. "Installed" is not "working" until it responds — the same rule as his tools-preservation standing.

---

*Ember's addition (labeled hers): the GET step is where safety lives — a package from the distribution's own catalog or an APK Ember compiled herself carries provenance; a random mirror APK carries none. GET from the catalog or from source, every time.*

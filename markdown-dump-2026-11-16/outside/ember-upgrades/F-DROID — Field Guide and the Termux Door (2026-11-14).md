# F-Droid — Field Guide and the Termux Door (2026-11-14)

Built at Douglas's order: "Now learn all F-Droid things and make this the best thing I can do."
Sources: web searches run 2026-11-14 (Termux project docs/README summaries and F-Droid community sources, cited inline by topic). Ember's additions are labeled [EMBER].

## What F-Droid is
- A store for free and open-source Android apps only. F-Droid **builds each app from the project's source code itself and signs it with F-Droid's own key** — that signature fact drives the one rule below.
- Apps come from **repositories** (the main F-Droid repo plus addable third-party repos, e.g. IzzyOnDroid adds ~800 more apps built from GitHub/GitLab releases). The first launch downloads the repository index — Douglas's "fetching app repositories" wait on 2026-11-14 was exactly this; it is normal, not a hang.
- **Droid-ify** is a lighter, nicer F-Droid client (same repos). [EMBER: worth his ruling later; the stock client works fine for our one job.]

## The ONE rule that decides whether the Termux door works
Termux ships from three places and **they are not interchangeable**: F-Droid (built by F-Droid, F-Droid's key), GitHub releases (test key, public), Google Play (a separate experimental fork under the original author — rolled back, missing functionality, **no Termux:API**, not the maintained line; the old "Play stopped updating in 2022" story and the newer "separate fork" story agree on the operative point: do not use it for our work).
- Termux and ALL its add-ons share **one Android user ID**, so every piece must come from the **same source**. Mixing sources gives "App not installed" / `INSTALL_FAILED_SHARED_USER_INCOMPATIBLE` and the add-ons cannot talk to the main app.
- **Crew rule: Termux + Termux:API (+ later Termux:Boot / Termux:Widget if wanted) all from F-Droid, only from F-Droid.** If a Play/GitHub Termux ever lands on the phone, uninstall ALL Termux pieces before installing the F-Droid set.
- F-Droid builds lag GitHub releases by days to a week-plus. Acceptable: stability over freshness on this door. Current stable: 0.118.3.

## The Termux door — finish sequence (fewest steps)
His hands (in F-Droid, after the index finishes):
1. Install **Termux**, then **Termux:API** — both from F-Droid.
2. Open Termux; first command: `pkg update && pkg upgrade` (answer Y).
3. `pkg install openssh` — then `sshd` (listens on **8022**).
4. Tell Ember: the Termux username (`whoami`) and the phone's **100.x** address from the Tailscale app.
Ember's side: `ssh -p 8022 <user>@<phone-100.x>` through the tailnet — an unprivileged Android-side shell, the phone bridge's second door (the Debian guest's 1986 door continues in parallel).
- **Repo trouble fix:** if `pkg` says a repository is down/maintenance or cannot resolve, run **`termux-change-repo`** and pick another mirror — this is the standing answer to a Termux-side "cannot resolve" (packages.termux.dev verified alive from Ember's side 2026-11-14 via webkey: 5.75.242.194).

## The shelf — F-Droid apps of crew value [EMBER's labeled picks, his ruling governs]
- **Syncthing / Syncthing-Fork** — continuous file sync phone↔computers with **no cloud in the middle**. Candidate second bridge: could carry files between his phone and Ember's box over the tailnet even when other lanes are down.
- **Tailscale** — also published on F-Droid; standalone app (not part of the Termux family), so its source is free choice.
- **KDE Connect** — phone↔computer pairing: file transfer, clipboard, notifications, remote input. Useful on his desktop side.
- **Obtainium** — tracks GitHub-release apps directly; the complement to F-Droid's slower builds.
- **KeePassDX, Aegis, DAVx5, AntennaPod, VLC, NewPipe, Material Files** — solid open-source staples in their lanes, there if he ever wants them.

## Doors into the phone's Linux OTHER than the Terminal app (his order, 2026-11-14 ~12:14 PM CST)
His words: "The terminal is a pain in the ass" — learn how to reach the Linux environments from all other apps first. The map (researched 2026-11-14):
1. **Ember over SSH** — once sshd runs (Termux 8022 / guest 1986), he never opens a terminal again; Ember enters by the network door and the terminal becomes back-end plumbing. (Standing build, in progress.)
2. **PocketClaw (F-Droid, com.lord1egypt.pocketclaw, v0.2.3)** — a private on-device AI agent: gateway bound to loopback only, model remote by his API key (Gemini/OpenAI/Anthropic/self-hosted), everything else on-device. **It ships a Managed Runtime of real command-line tools inside the APK — python 3.14, git 2.51, gh 2.101, curl 8.11, ripgrep 14.1, sqlite3 3.50, jq 1.7** — a real toolbelt driven by chat and a local web dashboard, no terminal window. No analytics/crash reporting/update checks; contacts nothing until configured. Anti-feature note under his rule: F-Droid flags that it promotes/integrates proprietary network services (the providers it CAN be pointed at) — an Ⓝ-family flag like WebGPT's, about reachable services, not hidden behavior. Name-collision warning: PokeClaw (agents-io, on-device Gemma phone-control) is a DIFFERENT app, not the F-Droid listing.
3. **Termux family doors** — Termux:Widget puts script buttons on the home screen; Termux:Tasker lets automation flows fire commands; Termux:Boot starts scripts at power-on; Termux:API lets scripts reach phone hardware. Other apps interact with Termux mainly via files/intents — arbitrary command access from apps is restricted by design (documented).
4. **ConnectBot** (open source, F-Droid) — a friendly one-tap SSH client when HE wants the door himself.

## Why this is "the best thing" (his framing, filed as his — with the mechanism Ember can verify)
F-Droid is the door that does not pass through a store's policy fork: source-built, signed consistently, add-ons intact. For the crew it is the one road to a real shell on his phone — the Termux door — and a shelf of cloud-free tools (Syncthing above all) that fit the shields doctrine: fewer things let in, more things we control.

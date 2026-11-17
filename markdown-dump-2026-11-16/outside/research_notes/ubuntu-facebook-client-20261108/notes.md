# Facebook / Messenger client for Ubuntu 24.04 — ONLINE-ONLY webview research

- **Date:** Sun Nov 8, 2026 (~6:14–6:25 AM CST), Captain's orders.
- **Scope:** research only. Nothing installed, no login attempted.
- **Method:** Douglas's search method — wildcard AND non-wildcard pairs per candidate
  (e.g. `Caprine Messenger client Ubuntu 24.04 install` + `"Caprine" * Ubuntu Messenger`;
  `"Ferdium" * Ubuntu Messenger install`; `"Rambox" * Ubuntu Messenger webview`;
  `"facebook.com/messages" * "install as app" Chromium`), simple searches first.
- **Context that shaped everything:** Meta discontinued the official Messenger desktop
  apps on **Dec 15, 2025**, and retired **messenger.com** as a standalone messaging site
  in **April 2026** (Meta's own help text: "Messenger.com is no longer available for
  messaging… continue messaging on the web via facebook.com/messages"). So the live
  target for every wrapper today is **facebook.com/messages**, NOT messenger.com.
  Any client whose current release still points at messenger.com is suspect.

## This box, measured (Nov 8, live exec — grounds the container verdicts)

- systemd-**nspawn** container, PID 1 = systemd; X sockets **X1 and X99 present**
  (Xfce desktop on display :1 is real and reachable by local GUI apps).
- **No snapd, no flatpak installed.** No `/dev/fuse` → AppImages cannot mount;
  they can still run via `--appimage-extract-and-run` (extracts to /tmp, costs disk/RAM).
- **User namespaces ARE enabled** (`unprivileged_userns_clone=1`) → Chromium/Electron
  sandboxing and bubblewrap can work in principle.
- **No WebKitGTK installed** (only libgtk-3) → Tauri `.deb`s need
  `libwebkit2gtk-4.1` + deps pulled via apt; Tauri AppImages bundle WebKitGTK instead.
- `/opt/meta-chromium` exists on-box (Chromium binary present).
- **RAM is the binding constraint:** ~832 MB available of 7.9 GB at check time;
  disk 6.7 GB free of 7.5 GB. One Electron app (~300–600 MB RSS with Messenger
  loaded) is the realistic ceiling; Tauri/WebKitGTK apps are far lighter.
- No GPU → all rendering is software; Electron may want `--disable-gpu`;
  WebKitGTK has documented fallbacks (see Carrier).

## Candidates

### 1. Chromium "Install page as app" / shortcut-window for facebook.com/messages — RANK 1
- **What it is:** No client at all. Chromium itself opens the official
  facebook.com/messages page in a dedicated app-style window with its own launcher
  entry. Zero third-party code in the path.
- **Login:** The normal web login, on Meta's own page, in the browser profile
  Douglas already uses. No wrapper ever touches credentials; no cookie extraction
  exists in this option — there is nothing to extract with.
- **Verification (triple):** (a) Google's own Chrome help documents
  "add a shortcut to a website as an app" for Linux (More → Cast, save, and share →
  Create shortcut / Install page as app); (b) ubuntufree.com's Ubuntu install guide
  (updated 2026-05-19) names this the **best method** for Ubuntu 24.04 and walks the
  exact steps for facebook.com/messages; (c) sigmablogger's Nov 2026 tutorial confirms
  Chromium on Ubuntu installs ordinary websites as standalone apps the same way, with
  Facebook Messenger listed. If Facebook's page doesn't offer "Install page as app"
  on a given day, "Create shortcut → Open as window" achieves the same window.
- **Maintenance:** It *is* Chromium + Meta's site; nothing to go stale.
- **Install/size:** Nothing to download. Works on display :1 today.
- **Caveat:** shares the browser profile (same session as his tabs — which for
  monitoring is arguably a feature). Notifications come through Chromium's own
  notification path.

### 2. Carrier (Tauri, kristofferR/Carrier) — RANK 2
- **What it is:** A small Rust/Tauri shell that opens **facebook.com/messages** in the
  operating system's WebView and strips Facebook chrome (Feed/Reels/Marketplace)
  via injected CSS/JS. Built *because* messenger.com was retired — current-target
  by design.
- **Login (from its own README):** "Carrier loads facebook.com/messages, so you
  need an account that Meta permits to sign in there" — i.e. you sign in on
  Facebook's own page inside the WebView. No cookie extraction, no credential form
  of its own. It does inject scripts into the page (notifications/badges), so like
  every wrapper it *can* see page content; source is open (MIT) and auditable.
- **Maintenance:** Repo created 2026-06-27; 31 releases; current commit crawled
  Nov 4, 2026. Active. Small project (15 stars, essentially one maintainer) — the
  main risk.
- **Install/size:** Linux `.deb`/`.rpm` **~4 MB** (uses system WebKitGTK — on this
  box that means an apt install of libwebkit2gtk-4.1 + deps first); AppImage
  ~90 MB (bundles WebKitGTK; here it would need `--appimage-extract-and-run`, no FUSE).
- **Container fit:** Best of the real apps. X11/Xfce is its home turf; README even
  documents a no-GPU/unstable-rendering fallback: `CARRIER_LINUX_WEBKIT_SAFE_MODE=1`.
  Light RAM footprint vs Electron.

### 3. fMess (Tauri, toanbku/fmess) — RANK 3
- **What it is:** Same model as Carrier — system WebView (Tauri) showing
  facebook.com/messages, one injected script for restyle/shortcuts/notifications.
- **Login (from its own README, Privacy section):** "fMess shows facebook.com/messages
  in your system's own webview. **You sign in on Facebook's page; fMess never sees
  your password, has no server and sends no analytics.**" No cookie extraction.
- **Maintenance:** Extremely active but extremely young — repo created **2026-10-31**,
  25 releases and a November 2026 latest release within its first weeks, 114 stars.
  That velocity is promising; the age is the risk.
- **Install/size:** Linux AppImage / `.deb` / `.rpm` from GitHub releases; "a few MB"
  for the .deb class (Mac .dmg measured 4.3 MB by the project). Same WebKitGTK
  dependency story as Carrier on this box.
- **Container fit:** Same as Carrier (WebKitGTK; note its own caveat: on Linux,
  calls depend on WebKitGTK's WebRTC support; hidden windows may be throttled —
  matters if it were used for unattended monitoring rather than reading).

### 4. Caprine (Electron, sindresorhus/caprine) — RANK 4 (currency problem, not a login problem)
- **What it is:** The long-standing unofficial Messenger app: an Electron shell
  rendering the official web client, with privacy extras (block seen receipts /
  typing indicators), dark mode, tray, Work Chat.
- **Login — triple-verified:** (1) Project descriptions/dev's own words: "built in
  less than one thousand lines of code, **on top of the existing messenger.com**"
  and "Caprine needed a browser engine to **render the modified messenger.com
  website**" — a webview of the official site, not a protocol implementation.
  (2) Independent walkthrough (OSTechNix): at first launch "you will see the login
  page. Enter your Facebook username and password and click Continue" — the
  official site's own login page inside the webview; no Caprine account exists.
  (3) DeepWiki's install/config documentation of the repo: configuration is local
  preferences only; no credential handling and no cookie-import/extraction step
  appears anywhere. **Verdict: normal web login in the wrapper; NOT cookie
  extraction.** (Like all wrappers it injects CSS/JS into the page; MIT open source.)
- **Maintenance — the catch:** Latest *release* is **v2.61.0** (Jan 2026 per
  Uptodown's Jan 13, 2026 listing and Homebrew's cask, still current at crawl;
  fMess's Nov 1, 2026 comparison table states it plainly: Caprine's latest release
  is "January 2026, **before messenger.com closed**"). The repo has migration PRs
  (#2378/#2379: "Migrate from messenger.com to facebook.com/messages… to address
  Meta's discontinuation of messenger.com on April 15, 2026"), but no source found
  shows that migration in a shipped release. So a released Caprine build today
  points at a retired domain and may be broken or living on redirects [UNVERIFIED
  either way — nobody tested a login, per orders]. Also: the Snap package was
  **dropped** ("Dropped Snap package since publishing step fails" — release notes),
  and the Flathub listing is marked **unverified**.
- **Install/size:** `.deb` / AppImage from GitHub releases, Flatpak via Flathub.
  ~98 MB download class (Mac figure, project's own comparison); a Fedora install
  of 2.60.1 measured **277.4 MiB installed**. APT repo script exists for updates.
- **Container fit:** Electron runs on X11 :1; expect `--no-sandbox`/`--disable-gpu`
  style flags in a container (user-ns is enabled, which helps). The RAM cost is
  the real problem on this box. **If a post-migration release ships, Caprine
  jumps to rank 2** on track record alone.

### 5. Ferdium (Electron, ferdium/ferdium-app) — RANK 5
- **What it is:** Community hard-fork of Franz; a workspace that hosts 200+ web
  services, each in its **own isolated Electron webview with its own cookie
  store**; Messenger is one recipe, and any URL can be added as a Custom Website
  (so facebook.com/messages can be pinned directly regardless of recipe state).
- **Login:** Normal web login inside each service's webview; Ferdium itself needs
  **no account** ("Use without an account" = fully local config). No cookie
  extraction — sessions are created by logging in inside the app.
- **Maintenance:** Healthy — **7.2.3 released Sep 7, 2026** (Electron 43), repo
  issues active into Dec 2025–2026. Apache-2.0.
- **Install/size:** `.deb`, AppImage, `.tar.gz`, Snap, Flatpak
  (`org.ferdium.Ferdium`). ~160 MB download class — the heaviest option here.
- **Container fit:** Works on X11 in principle, but it's a multi-service
  Electron suite bought to run ONE page; on ~832 MB free RAM it's the worst
  fit of the serious candidates. Snap route is the documented Ubuntu path and
  snapd is absent/fragile in nspawn — use the .deb if ever.

### 6. Rambox (rambox.app) — RANK 6
- **What it is:** Chromium-based workspace app, 700+ preconfigured web apps
  including Messenger; each app is a webview tab (sessions persist via
  `partition:persist` webviews). Its own blog walks through using Messenger via
  facebook.com/messages post-retirement, so its catalog is current.
- **Login:** Normal web login in the webview; no cookie extraction.
- **Maintenance:** Actively maintained commercially — Rambox **3.1.1 (Oct 14,
  2026)**; Snap listing updated Oct 10, 2026. **But:** the current product is
  proprietary with a limited free Basic tier (the old open-source Community
  Edition on GitHub is the dead 0.x line). Account/sync upsells included.
- **Install/size:** `.deb`, AppImage, Snap (`sudo snap install rambox`), Flatpak.
  Electron-class size (~100 MB+, exact figure not verified from a primary source).
- **Container fit:** Same Electron caveats as Ferdium, plus closed source holding
  a Facebook login — ranked last of the real apps on that combination.

### 7. Browser extensions — NOT RECOMMENDED
- No reputable, maintained, Messenger-specific Chromium extension was found.
  What exists: **All-in-One Messenger** (a Chrome extension putting services in
  tabs inside a browser page — its own site still carried a **2021 copyright**
  notice as of July 2026, a staleness flag) and trivial enablers like
  "Facebook Messenger PWA" (v1.0, updated Sep 5, 2025, individual developer —
  merely enables PWA install, which Chromium already does). Extensions run
  inside the browser session with broad page access and are historically the
  most-abused category around Facebook logins. The PWA route (rank 1) gives
  everything these promise with no added code.

### Excluded / dead
- **Messenger for Desktop** (the old one): archived on GitHub since Nov 2021,
  last release 2017. Dead.
- **`facebook-messenger-desktop` Snap:** appears only in low-quality content-farm
  guides; not corroborated by any primary source. Treated as unverified — do not touch.
- **Beeper:** not a webview of the official site (bridged/merged-inbox model) —
  outside the Captain's "online only, official web client" spec; not evaluated.

## Honest limit on the whole idea (for the Captain's framing)
A desktop client changes **where** Messenger is read on this machine — a desktop
window on :1 instead of a browser tab. It does not change the agent-side
Messenger connector behavior or its 20-actions/hour cap (that cap is Meta
server-side on the agent's sends, proven by 429s Nov 7–8). This lane is a
monitoring/reading convenience for the desktop, not a way around that limit —
and per standing orders, no route-around was sought or found here.

## Ranked shortlist
1. **Chromium install-as-app of facebook.com/messages** — zero new code, zero
   download, official login only. Safest by construction.
2. **Carrier (.deb)** — purpose-built for the post-messenger.com world, ~4 MB,
   lightest real app, documented no-GPU fallback; young single-maintainer project.
3. **fMess (.deb)** — same safe model, explicit "never sees your password" design;
   repo is only weeks old.
4. **Caprine** — best track record and triple-verified web login, but current
   release predates the messenger.com shutdown; re-check for a post-migration
   release before any install decision.
5. **Ferdium (.deb)** — maintained and honest, simply far more app (and RAM)
   than one Messenger window needs here.
6. **Rambox** — maintained but proprietary and account-tiered.
7. **Extensions** — skip.

*Sources are the projects' own repos/READMEs (Carrier, fMess, Caprine via
DeepWiki + GitHub API PR text), Google Chrome Help, and dated secondary guides
(ubuntufree 2026-05-19, fosslinux 2026-05-01, linuxjunkies, terachat comparison
checked 2026-10-20, wares.gg Ferdium 7.2.3 notes). Nothing was installed and
no login was attempted, per orders.*

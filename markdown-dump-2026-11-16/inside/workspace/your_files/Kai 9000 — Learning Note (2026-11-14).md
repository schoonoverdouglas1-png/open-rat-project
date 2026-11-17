# Kai 9000 — Learning Note (2026-11-14)

**Built:** Sat Nov 14, 2026, at Douglas's order (~12:22 PM CST): "Learn KAI 9000, install it in all places where you have to have it so you can do it."
**Provenance:** [record] = Kai's own documentation and GitHub repo, fetched and read today. [Ember, tested live] = Ember's own tool results on this VM today. [Ember's judgment] = labeled as such where it appears.

---

## 1. What Kai 9000 is [record]

- An **open-source AI chat assistant with persistent memory**, by Simon Schubert, **Apache-2.0**, built with Kotlin Multiplatform / Compose Multiplatform. Tagline: *"OpenClaw alternative in your pocket."*
- Repo: `github.com/SimonSchubert/Kai` (1,353 stars, 93 releases at check time). Docs: `kai9000.com/docs`. Web app: `kai9000.com/app`.
- Runs on **Android, iOS, Windows, Mac, Linux, and Web**. Android distribution: Google Play, **F-Droid (package `com.inspiredandroid.kai`)**, or APK from GitHub Releases. Latest release checked today: **v3.3.0**.
- Connects to **30+ LLM providers** (docs count varies 30/31 by page) — Gemini (native API), Anthropic, OpenAI, DeepSeek, OpenRouter, Groq, Ollama Cloud, a custom OpenAI-compatible endpoint (e.g. local Ollama/LM Studio), on-device **LiteRT** local models — **plus a built-in keyless Free tier** (Free FAST / Free EXPERT) that needs no API key at all.
- Features: persistent memory that can be promoted into the system prompt, an editable "soul" (system prompt), multi-service fallback chain, tool execution, MCP server support (as a client), a 30-minute autonomous heartbeat (8 AM–10 PM), scheduled tasks, SKILL.md skills (Android), encrypted local storage, settings export/import as JSON, text-to-speech, image attachments.
- **Linux Sandbox (Android):** inside the app, Kai can run shell commands in a proot Debian (~150 MB) or Alpine (~4 MB) rootfs — *"Everything runs sandboxed inside the app with no access to the host system"* (README). Enable in Settings > Linux Sandbox. Kai Build (Android) adds terminals and coding agents (Claude Code, Grok, OpenCode) in that Debian environment.

## 2. Adding a Gemini API key — the taps Douglas makes on his phone [record]

From the docs' Getting Started + Multi-Service pages (the flow is identical on the F-Droid build):

1. Open **Kai** → you land on the chat screen. (Kai already works at this point on the keyless Free tier.)
2. Open **Settings**.
3. Tap **Add Service** and pick **Gemini** from the provider list.
4. **Paste the API key** (the one from Google AI Studio, aistudio.google.com, under the account you want — for Ember's house key, that's the purplerat1982@gmail.com account).
5. Kai **validates the connection automatically** (~800 ms after entry; status shows checking → connected / invalid key / quota exhausted) and **loads the model list**.
6. **Select a model** from the dropdown.
7. Optionally **drag to reorder** services — first in the list is primary, the rest are fallbacks; the keyless Free tier can stay appended as last-resort fallback (default on).

Notes: the same service can be added multiple times with different keys; removing a service deletes its stored credentials (with a ~4-second Undo). Per the standing rule, **Ember did not enter any key anywhere** — the key is pasted by Douglas's own hand on his phone, or not at all.

## 3. What tools/permissions Kai has on Android [record]

Cross-platform tools: web search, fetch/open URL, local time, IP-based location, memory store/forget, scheduled tasks, and email tools (connect an account, read/search/reply/compose — Android, iOS, desktop).

Android-specific tools: `send_notification` (post a notification), `create_calendar_event`, `set_alarm`, shell commands **inside its own Linux sandbox**, and:

- **`open_url`** — opens a URL or a `file://` path via Android `ACTION_VIEW`. Local files are limited to the sandbox's `/root`; *"Any other local path is refused, so the model can't hand app-private files (settings, databases) to another app."*
- **`open_file`** — opens **one file from its own sandbox** in the appropriate Android app (browser opens HTML, viewer opens PNG, etc.), path-canonicalized and verified to stay under the sandbox root.
- **Notifications (FOSS build only — the F-Droid build qualifies; the Play Store build hides the feature entirely):** Kai can **read** other apps' notifications after the user grants Notification Access in system settings (Settings → Agent → Notifications → "Read notifications"). The docs state plainly: *"No reply, no dismiss, no action invocation in v1. The listener is read-only."* Per-app filtering is done by the OS picker on the same system screen.
- **SMS (FOSS build only):** read/search SMS; replies are **drafted for the user to send**.
- MCP servers are added at Settings > Tools > Add MCP Server — Kai acts as an MCP **client**; remote servers are tools for Kai's own on-device agent.

## 4. The honest verdict: does Kai let Ember list or open Douglas's installed apps? [Ember, from the record above]

**No.** Kai changes nothing about Ember's verified device limit, for three separate reasons:

1. **Kai has no app-control tool.** Its full published tool list contains nothing that enumerates installed packages, launches an arbitrary app, taps another app's UI, or acts inside another app. The closest tools are `open_url`/`open_file`, which hand a single URL or a single sandboxed file to the system viewer via `ACTION_VIEW` — one-way, user-visible, and fenced to Kai's own sandbox. Its notification access is explicitly **read-only** (no reply, no dismiss). Its shell runs in a proot sandbox with, in the project's own words, **no access to the host system**.
2. **Kai's agent is Kai, not Ember.** The AI that would wield those on-phone tools is whichever LLM Kai is configured with, running in Kai, for the person holding the phone. Kai exposes **no bridge, pairing, or remote-control surface** by which Ember (in Muse) could drive it or see through it. MCP support points the other way: Kai consumes tool servers; it does not serve Douglas's phone to Ember.
3. **Ember's own lane is unchanged.** Ember's access to the Pixel remains the paired Muse device command set, which — verified again today — includes no command to list or open installed apps. Installing Kai on the VM (below) gives Ember a Kai desktop app in her own house; it does not touch the phone at all, and Ember installed nothing on the phone.

**What Kai genuinely gives Douglas on the phone** [Ember's judgment, labeled]: a second, on-device assistant in his pocket — one that can chat through the 1982-account Gemini key once he pastes it (or keylessly on the Free tier), read his notifications and SMS on the F-Droid build if he grants access, and run a real little Linux sandbox. That is Douglas's tool in Douglas's hand. It is not, and does not pretend to be, a remote control for Ember.

## 5. Desktop Linux build — requirements and the VM install [Ember, tested live]

**What the desktop build requires** [record + tested]: Linux x86_64; distributed as DEB, RPM, AppImage, Flatpak, and tarball via GitHub Releases. The tarball is a self-contained jpackage bundle — it carries its **own bundled Java runtime (JRE 21.0.12.1)**, so no system Java is needed. It is a GUI app (Compose Desktop / Skiko), so it needs a display or a virtual one, plus ordinary X11 client libraries.

**Install on this VM (Ubuntu 24.04.5 LTS, x86_64, headless)** — done today, sandbox-safe, Guard-checked (every command line was passed through `~/workspace/ember-upgrades/guard/check-command.sh` first; nothing was refused):

- Downloaded `Kai-3.3.0-linux-x86_64.tar.gz` (235,772,221 bytes) from GitHub Releases v3.3.0 into `~/workspace/ember-upgrades/kai9000/`. SHA-256: `aaf111532900f674a75c963721d027179d07faace520e6a02a23c33ead2d7330`.
- Extracted in place → `Kai/` (308 MB; launcher `Kai/bin/Kai`, main class `com.inspiredandroid.kai.MainKt`, bundled runtime under `Kai/lib/runtime`). Tar printed harmless ownership warnings only (files landed owned by the current user).
- First launch failed on one missing system library: `libXtst.so.6`. Rather than installing anything system-wide, the `libxtst6` package was **downloaded only** (`apt-get download`, 12.6 kB) and extracted inside the Kai folder (`syslibs/`), and the app was run with `LD_LIBRARY_PATH` pointed there. All other needed X libraries were already present.
- **Launch verified:** `xvfb-run -a ./Kai/bin/Kai` started, initialized (Koin: "Started 42 definitions"; Skiko fell back from GL rendering, as expected headless; Java preferences directory created) and **stayed running for the full 30-second test window** until the test timeout stopped it. No API key was entered; no account was touched.
- **Nothing system-wide was changed:** no package was installed, no service started, nothing on Douglas's phone was touched, nothing was sent anywhere.
- **Undo path (recorded before/with the change, per the Reversibility Rule):** delete the folder `~/workspace/ember-upgrades/kai9000/` — that removes the app, the tarball, and the locally extracted library in one step; the VM is then exactly as it was. To run Kai again later: `cd ~/workspace/ember-upgrades/kai9000 && LD_LIBRARY_PATH=$PWD/syslibs/usr/lib/x86_64-linux-gnu xvfb-run -a ./Kai/bin/Kai` (on a real desktop display, `xvfb-run` can be dropped).

**Not done, deliberately:** the system-wide DEB install (`dpkg -i`) was not used — it would write outside Ember's own scratch area and need the missing library as a system package; the tarball route reaches the same verified result in fewer, reversible steps. The AppImage/Flatpak routes were not needed once the tarball ran.

## 6. Sources

- Kai Documentation index, Getting Started, Multi-Service, Tools, Notifications pages — kai9000.com/docs (read 2026-11-14).
- GitHub repo + README + Releases — github.com/SimonSchubert/Kai (read 2026-11-14); release v3.3.0 asset list: android APK, linux tar.gz/AppImage/DEB/Flatpak/RPM, macOS DMG, Windows MSI.
- Note: GitHub's unauthenticated REST API was rate-limited from this VM's egress IP today; the release/tag/asset facts above came from the github.com web pages instead — same record, second lane.

---

*Ember's one addition (labeled hers, per standing method): if Douglas ever wants Kai and Ember to cooperate, the honest seam is Kai's settings **export/import JSON** and its **MCP client** — e.g., Kai-on-phone could one day call an MCP server Ember's house hosts, with Douglas setting it up and granting each piece himself. That is a design conversation for another day, not a capability that exists today, and it still would not give Ember a list of his apps — it would give Kai's agent extra tools Douglas chose. Filed as a possibility, nothing built.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

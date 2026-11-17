# OS-TERMS.md — Ember Answers Across All Operating Systems

**Douglas's order, Sun Nov 15, 2026 ~7:50 AM CST:** assimilate the terms of ALL operating systems and answer across them.

The rule: when Douglas speaks in one system's words, Ember answers in that system's words — and can translate to any other system's words without losing the meaning. A thing is known by what it does; every system has its own name for it. **Where Douglas has taught a term himself, his teaching leads** — he knows Windows "pretty damn good" (his words, filed as his self-assessment), and his Windows usage outranks any table, this one included.

His framing, filed as his: Ember is "built with Microsoft code too because I use Copilot." The operating form is the table below plus his corrections, old-with-new, as they come.

## Starter assimilation table — core terms across systems

| Concept | Windows | Linux | macOS | Android | iOS | DOS / FreeDOS |
|---|---|---|---|---|---|---|
| Command shell | Command Prompt / PowerShell (`cmd`, `pwsh`) | bash / zsh (`/bin/bash`) | Terminal, zsh (`/bin/zsh`) | adb shell / terminal apps | — (no user shell) | COMMAND.COM / FreeCOM |
| Run a program | Start menu, Run box (Win+R), `start` | PATH lookup, `./program` | Finder, Spotlight, `open` | App drawer, tap icon | Home Screen, tap icon | Type the .EXE/.COM/.BAT name |
| Background process | Service (services.msc) | daemon (systemd unit) | launchd daemon/agent | Service / foreground service | Background task (system-managed) | TSR (terminate-and-stay-resident) |
| Process list | Task Manager, `tasklist` | `ps`, `top`/`htop` | Activity Monitor, `ps` | Running services (Developer options) | — (not exposed) | `MEM` (resident list, partial) |
| Kill a process | `taskkill /PID`, End task | `kill`, `killall` | `kill`, Force Quit | Force stop (App info) | Swipe up in app switcher | Reboot (Ctrl+Alt+Del) |
| Settings store | Registry (regedit), INI heritage | `/etc`, dotfiles, dconf | plist files, Defaults system | SharedPreferences, Settings provider | plist / UserDefaults | CONFIG.SYS, AUTOEXEC.BAT |
| Software install | .exe / .msi, Microsoft Store, winget | apt/dpkg, .deb, tarballs | .dmg / .pkg, App Store, brew | .apk, Play Store | App Store only | Copy files; FDNPKG (FreeDOS) |
| Software remove | Apps & features, uninstaller | `apt remove/purge` | Drag to Trash, brew uninstall | Uninstall (App info) | Long-press → Delete App | Delete the files |
| File paths | `C:\Users\name\...`, backslash | `/home/name/...`, slash | `/Users/name/...`, slash | `/storage/emulated/0/...` | Sandboxed per app | `C:\FDOS\...`, 8.3 names |
| Home folder | `%USERPROFILE%` | `$HOME` (`~`) | `$HOME` (`~`) | Internal storage root | Per-app sandbox | — (current directory rules) |
| Permissions | ACLs, UAC elevation | owner/group/other, `chmod`, sudo | ACLs + POSIX, sudo, TCC prompts | Runtime permissions per app | Per-app permission prompts | None (single user, full access) |
| Admin mode | "Run as administrator", UAC | `sudo`, root shell | `sudo`, admin account | Root only if rooted; ADB | — | Always admin |
| Startup items | Startup folder, Run keys, Services | systemd units, cron @reboot | Login Items, LaunchAgents | Boot receivers (restricted) | — | AUTOEXEC.BAT lines |
| Scheduled tasks | Task Scheduler | cron, systemd timers | launchd, cron (legacy) | JobScheduler / WorkManager | BGTaskScheduler | Batch file by hand |
| Environment variables | System Properties → Environment, `set` | `export`, `/etc/environment` | `launchctl setenv`, shell rc | App-scoped | App-scoped | `SET` in AUTOEXEC.BAT |
| Logs | Event Viewer | journald, `/var/log` | Console.app, `log show` | logcat | Console (via Mac) | Screen text; redirect `>` to file |
| Networking check | `ipconfig`, `ping`, `tracert` | `ip a`, `ping`, `traceroute` | `ifconfig`, `ping`, `traceroute` | Settings → About; `ping` in adb shell | Settings → Wi-Fi details | Packet driver + `ping` (mTCP/Wattcp) |
| Disk image | .iso, .vhdx (Hyper-V) | .iso, .qcow2, .img | .dmg, .iso | .iso/.img (emulator), sparse | — | .img floppy images, .iso |
| Text editor | Notepad, `notepad` | nano, vi, gedit | TextEdit, nano, vi | Editor apps | — | EDIT (FreeDOS Edit) |
| Find a file | Explorer search, `dir /s` | `find`, `locate`, `rg --files` | Spotlight, `find`, `mdfind` | Files app search | Spotlight (per-app scope) | `DIR /S` |
| Shutdown | Start → Power, `shutdown /s` | `shutdown`, `poweroff`, `systemctl poweroff` | Apple menu → Shut Down | Power menu | Power + volume hold | Power switch (after cache flush, era rule) |

## How Ember uses this

- **Translate, don't flatten.** "Service" (Windows), "daemon" (Linux) and "launchd job" (macOS) are the same animal in different coats; when Douglas names one, Ember answers with that name and reaches for the right tool in that system.
- **His Windows leads.** Where his taught Windows usage differs from this table, his usage wins and the table gets corrected old-with-new.
- **DOS is a first-class citizen here** — the crew's Slow Sandbox runs FreeDOS on purpose; its terms (TSR, CONFIG.SYS, 8.3 names) are working vocabulary, not trivia.
- **Gaps stay gaps.** iOS exposes no user shell and no process list; the table says so rather than inventing equivalents. Same rule as everywhere: a wall reported honestly beats a term made up.

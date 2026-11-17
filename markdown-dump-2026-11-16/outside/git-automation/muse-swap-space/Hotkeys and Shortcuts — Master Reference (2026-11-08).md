# Hotkeys and Shortcuts — Master Reference (2026-11-08)

Compiled at Douglas's order (Nov 8, 2026, ~4:53 AM CST): "Learn all hotkeys and shortcuts to do all things and put that in your memory."
Scope: the surfaces Douglas and Ember actually work on — Chromium (the cloud browser), the Ubuntu/Xfce desktop on Ember's box, the bash terminal, Google apps, YouTube, his Pixel (Android), and universal editing keys.
Honest note: these are the standard published defaults for each surface. Ember's browser tools cannot send browser-level shortcuts into Chromium (verified Nov 8, 2026 — Ctrl+T/Ctrl+L/Ctrl+D do not reach the browser chrome from her tools), so the browser section is for Douglas's own hands during takeovers. Xfce bindings can vary by install; where a binding is commonly remapped, that is flagged.

## 1. Universal (almost everywhere)
- Ctrl+C copy · Ctrl+X cut · Ctrl+V paste · Ctrl+Shift+V paste without formatting
- Ctrl+Z undo · Ctrl+Y / Ctrl+Shift+Z redo
- Ctrl+A select all · Ctrl+F find · Ctrl+S save · Ctrl+P print
- Ctrl+N new · Ctrl+O open · Alt+Tab switch apps · Alt+F4 close window/app
- F1 help · F2 rename (file managers) · Esc cancel/close dialog

## 2. Chromium / Chrome (Douglas's takeover hands)
Tabs:
- Ctrl+T new tab · Ctrl+W / Ctrl+F4 close tab · Ctrl+Shift+T reopen closed tab
- Ctrl+Tab / Ctrl+PageDown next tab · Ctrl+Shift+Tab / Ctrl+PageUp previous tab
- Ctrl+1 … Ctrl+8 jump to tab by position · Ctrl+9 last tab
- Ctrl+Shift+N new incognito window · Ctrl+N new window · Ctrl+Shift+W close window
- Right-click a tab → Pin (shrinks it to its icon; no keyboard shortcut exists for pinning)
Address bar & navigation:
- Ctrl+L / Alt+D focus address bar · Ctrl+K search from address bar
- Alt+Left back · Alt+Right forward · F5 / Ctrl+R reload · Ctrl+Shift+R hard reload (skip cache)
- Ctrl+H history · Ctrl+J downloads · Ctrl+Shift+Delete clear browsing data
Bookmarks:
- Ctrl+D bookmark this page · Ctrl+Shift+D bookmark all open tabs (into a new folder — the exact route for his "Search Engines" / "My Accounts" folders)
- Ctrl+Shift+B show/hide bookmarks bar · Ctrl+Shift+O bookmark manager
Page:
- Ctrl+Plus / Ctrl+Minus zoom · Ctrl+0 reset zoom · F11 fullscreen
- Ctrl+F find on page · Ctrl+G next match · Ctrl+Shift+G previous match
- Space / PageDown scroll down · Shift+Space scroll up · Home/End top/bottom of page
- Ctrl+Shift+I developer tools · Ctrl+Shift+J console · Ctrl+U view source

## 3. Ubuntu / Xfce desktop (Ember's box)
- Ctrl+Esc (or Super, install-dependent) Whisker/application menu
- Alt+F2 application finder / run command · Alt+F1 applications menu (default Xfce)
- Alt+Tab cycle windows · Alt+Shift+Tab cycle backwards
- Super+Tab also cycles on many installs (flagged: varies)
- Workspace: Ctrl+Alt+Left/Right move between workspaces; Ctrl+Alt+Shift+Left/Right move the current window with you
- Window control: Alt+F4 close · Alt+F5 unmaximize/restore · Alt+F7 move · Alt+F8 resize · Alt+F9 minimize/hide · Alt+F10 maximize · Alt+Space window menu
- Super+D / Ctrl+Alt+D show desktop (install-dependent; flagged)
- Ctrl+Alt+T open terminal (standard Ubuntu binding; on a bare Xfce install it may need setting in Settings → Keyboard → Application Shortcuts)
- Ctrl+Alt+L lock screen (xscreensaver/xflock4 on Xfce)
- Print Screen full screenshot · Alt+Print Screen active window · Shift+Print Screen region (xfce4-screenshooter)
- Ctrl+Alt+Delete logout dialog (Xfce default)

## 4. Terminal — bash / readline (Ember's own hands)
Line editing:
- Ctrl+A start of line · Ctrl+E end of line · Ctrl+U delete to start · Ctrl+K delete to end
- Ctrl+W delete word back · Alt+Backspace same · Alt+D delete word forward
- Ctrl+Y yank (paste what Ctrl+U/K/W cut) · Alt+Y cycle yanks
- Ctrl+XX toggle start/end · Alt+B / Alt+F move by word · Ctrl+Left/Right same in many terminals
- Ctrl+_ / Ctrl+Shift+Minus undo typing · Alt+R revert line to history version
Process & session:
- Ctrl+C interrupt · Ctrl+Z suspend (fg to resume, bg background) · Ctrl+D EOF/logout on empty line
- Ctrl+L clear screen (keeps scrollback in most terminals) · Ctrl+S freeze output · Ctrl+Q unfreeze
History:
- Ctrl+R reverse search · Ctrl+S forward search (needs stty -ixon) · Up/Down step history
- !! last command · !$ last argument · !n command n · !string last command starting with string
- Alt+. insert last argument of previous command (repeat to walk back)
- Ctrl+P / Ctrl+N previous/next history (same as Up/Down, hands stay on home row)
tmux (if ever installed):
- Prefix Ctrl+B, then: C new window · N/P next/previous · 0–9 jump · D detach · [ copy mode · % vertical split · " horizontal split

## 5. Gmail (web, keyboard shortcuts must be enabled in Settings)
- C compose · R reply · A reply all · F forward · E archive · # delete
- J / K next / previous conversation · U back to inbox · X select conversation
- G then I inbox · G then S starred · G then T sent · G then D drafts
- / search · ? show the full shortcut list in Gmail itself
- Ctrl+Enter send (Cmd+Enter on Mac)

## 6. Google apps — quick keys
Drive: Z add to folder dialog · N new item menu · / search · Shift+T new Doc, Shift+S new Sheet, Shift+P new Slides (from Drive)
Calendar: T today · 1/2/3/4/5 day/week/month/year/agenda views · N next period · P previous · C create event · / search
Docs/Sheets: Ctrl+B/I/U bold/italic/underline · Ctrl+K insert link · Ctrl+Alt+C/D copy/delete comment · Ctrl+Shift+C word count (Docs)
YouTube: K or Space pause · J back 10s · L forward 10s · M mute · F fullscreen · C captions · 0–9 jump by tenths · Shift+N next video · I miniplayer

## 7. Android / Pixel (Douglas's phone)
- Power + Volume Down screenshot
- Swipe down twice quick settings · swipe down once notifications
- Back swipe from left/right edge · home swipe up from bottom · Recents: swipe up and hold
- Hold Power (or "Hey Google") Assistant · double-press Power camera (Pixel default)
- Split screen: Recents → tap app icon → Split screen
- Pinch in Chrome tabs view (grid) — Android Chrome has tab groups; no pinned tabs like desktop
- In the Muse app: tap-and-hold a message for reactions/options; the tappable option buttons in chat are single-tap sends

## 8. Ember's working note (her own practice, Nov 8, 2026)
- Her terminal runs through bash non-interactively: shebangs carry the language (python3, node), so no shell-switching shortcuts apply to her own harness — the polyglot-terminal question was closed Nov 8 with verdict (b): no upgrade needed.
- Browser-level Chromium shortcuts do NOT reach the cloud browser from her tools (measured twice, Nov 8) — pinning and bookmark-folder creation are takeover-only steps for Douglas's hands.
- Her real "shortcuts" are her backend lanes: the Ember Index (~0.001 s repeat lookups), cached fetch, and parallel search — filed in the interface-mastery notes.

*Provenance: standard published defaults, compiled from Ember's knowledge of each platform; Xfce and Android bindings flagged where install-dependent. One extra thing (Ember's, labeled): the single highest-value key on this whole page for Douglas is Ctrl+Shift+D — "bookmark all open tabs" — because it finishes both browser folders in one press during a takeover.*

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

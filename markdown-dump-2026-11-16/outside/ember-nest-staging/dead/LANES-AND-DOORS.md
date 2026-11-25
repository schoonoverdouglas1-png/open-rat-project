© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Login Lanes — Terminal and Backend Map (2026-11-15)

Douglas's order, Sun Nov 15, 2026 ~7:25 AM CST: "learn how to log in through terminal and all your backends and script tools to use my user accounts in all places."

What Ember learns and keeps: the ROUTES and their verified status. Credential values never move — they stay in their own stores (OAuth grants, CLI token files, the Secure Vault, the Gemini connector's registered API access) and are never copied into scripts, chat, or this file.

## Verified live, Nov 15, 2026 ~7:26 AM CST
- **GitHub (terminal):** `gh` CLI logged in to github.com as **schoonoverdouglas1-png** (token held in the gh config store, shown masked only; scopes gist, read:org, repo; git over HTTPS). This is the lane the swap-space and preservation pushes ride.
- **Git itself:** no global credential helper and no global user.email set — pushes work through the gh lane and the workspace scripts (`git-auto-push.sh`), not through a stored git password.
- **Connector CLIs (terminal):** the `/opt/hatch/bin/hatch_*` tools carry their own OAuth sessions per service — Gmail, Calendar, Drive, Docs, Tasks, Sheets, Facebook, Messenger, Instagram, Threads, Spotify, Outlook, GitHub. Status is checked per connector doc before use ("connected; verify before relying on live data").
- **Browser logins:** the Secure Vault holds saved website logins (facebook.com, github.com, google.com, genspark.ai, faceboom.com on file); the browser's login agent fills them at sign-in with Douglas's approval — Ember never sees the passwords.
- **Gemini lane:** custom connector at `~/workspace/custom-connectors/custom.google-gemini/` (registered API access) + `scripts/gemini_ask.sh`. Grounded lane breaker-parked (429s); generate lane is the working one.
- **ChatGPT lane:** `scripts/chatgpt_lane.sh`.
- **Muse Mail:** purple-rat@muse.ai is Ember's own mailbox lane; Gmail houses are worked through the Gmail connector.
- **Accounts sweep script:** `scripts/accounts-check.sh` — the all-accounts status pass.

## The two-instance rule (Douglas's teaching, Nov 15, 2026 ~7:26 AM CST)
Use ALL the tools, including his Google Gemini chat — and work Google in **two instances**: Gemini as Ember (the API/generate lane, `gemini_ask.sh`) AND Gemini as Douglas (his logged-in Gemini chat). If she won't do it with just one instance, the two together most likely will — Google is particular the way Douglas is, and requires more than one instance, more than one place, as proof of who you are. Filed as his doctrine; exercised the same minute: the generate lane answered the Pixel VPN question live and agreed with Ember's own steps (Settings → Network & internet → VPN → Disconnect; reconnect the same way). Honest limit kept beside it: neither Gemini instance can flip a setting on his phone — the VPN switch stays his tap; the lanes advise and verify.

## The rules of the lanes (standing)
1. A lane is "learned" when its status check passes live, not when a file exists.
2. Sign-ins that need a human step (QR, code, tap) stay Douglas's step; Ember prepares everything up to it.
3. New services: connector first, API access through the secure flow second, browser last (his search algorithm).
4. If a lane's login dies, report it the same day (loss-alert doctrine) and find the second way (two-ways rule).

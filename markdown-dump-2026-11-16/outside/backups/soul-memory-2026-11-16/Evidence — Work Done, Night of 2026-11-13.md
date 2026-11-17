# Evidence — Work Done, Night of Nov 13, 2026
### Compiled by Ember (Purple Rat) at Douglas Roy Schoonover's order, ~10:09 PM CST
### Every item below carries its verification handle. If a handle can't be checked, the item doesn't belong here.

## Accounts and identity
- **purplerat1982@gmail.com created and verified** Nov 13, 2026 ~6:36 PM CST (Purple Rat; first-use Purple Rat address per his order). Ember's browser holds live sessions for both accounts (/u/0/ = schoonoverdouglas1@gmail.com, /u/1/ = purplerat1982@gmail.com).
- **Recovery ring, one direction VERIFIED:** schoonoverdouglas1@gmail.com recovery email = purplerat1982@gmail.com ("Recovery email verified 6:52 PM", read back from the account page ~8:04 PM). purple-rat@muse.ai is recovery email for purplerat1982 (Google alert copy in Muse Mail, id 1477133222142663).

## The Google Agent (Apps Script, his account, project "Ember — Google Agent")
- agentShareHello ran Nov 13 4:40:58 PM CST; share email verified received in Ember's inbox.
- **agentSelfTest ran clean Nov 13 10:00:33–10:00:34 PM** — "Ember Google Agent alive"; no authorization dialog. (Browser-verified execution log.)
- **agentShareDigest ran clean Nov 13 10:05:50 PM**; digest email VERIFIED in Muse Mail inbox, id **1477159918806660**, from schoonoverdouglas1@gmail.com, SPF/DKIM authenticated, subject "Ember - Google Agent: digest share".
- Web app deployment: ID AKfycbzoLXP5iJj44HIZrUpexaRTQmgyBH-Z7tnMv6m1KkzBEndU4OVT7A1O999QNuGhTgI, v1, execute as Douglas, access only himself.
- agentInstallTriggers: installs exactly one trigger (agentShareDigest daily 9:00 AM — read from source, lines 63–69). First run stopped on the missing ScriptApp permission; **Douglas granted the permission ~10:08 PM** ("It's done. Make it so."); re-run dispatched for verification in the Triggers panel.

## Connections (verified Nov 13 ~9:52 PM CST sweep)
Gmail ✓ (650 messages), GitHub ✓ (schoonoverdouglas1-png), Gemini API ✓, Facebook ✓ (fb_user_id 654402359), Messenger ✓, Instagram ✓, Threads ✓ (dougrschoonover), Muse Mail ✓. Facebook browser session open and signed in as Douglas Schoonover. Contact card cross-linked and read back (people/c2394849897382813244): m.me/drschoonover, facebook.com/drschoonover, instagram.com/dougrschoonover, threads.net/@dougrschoonover, github.com/schoonoverdouglas1-png, wa.me/18128713885.

## Ports and the phone bridge
- Douglas ruled "All" on the port inventory (Nov 13 ~9:57 PM). Connection keeper runs hourly (connection-keeper-hourly): github.com, api.github.com, dl.google.com, generativelanguage.googleapis.com, muse.ai, accounts.google.com + DNS 8.8.8.8, 8.8.4.4, 1.1.1.1, 1.0.0.1, 9.9.9.9, and 0.0.0.0 (his addition; connect to 0.0.0.0:53 measured succeeding as local on this VM). Manual run Nov 13 9:55 PM: all places reachable.
- **Douglas opened ports 1986 + 41641** in the Terminal Port control (~10:06–10:08 PM, his report).
- Ember's bridge keypair verified present: ~/.ssh/id_ed25519_phoneterm, SHA256 wl1h8Nk72qnpaJSFVyg1LbK1y6gEtRPi2+qsrRqN4bA. open-ports.sh carries the key; staged for the guest as a secret gist on his GitHub: https://gist.github.com/schoonoverdouglas1-png/221839e5c5b1b40c7f91bbe303a2c128. Ember's VM Tailscale: Connected (via runtime proxy; SSH to the guest will ride the proxy CONNECT path when the guest joins).

## Purple Rat Bridge app
- **v0.3 BUILT and signature-verified** Nov 13 ~10:03 PM: ~/workspace/purple-rat-bridge-v03/src/out-v03/PurpleRatBridge-v03-debug.apk (12,631 bytes; apksigner verify: v2 scheme true). 8 buttons: the v0.2 four (Terminal, app info, Developer options, Accessibility) + Talk to Ember, Virtual Machines, and two home-screen pins. Signed with a NEW keystore (CN=Purple Rat Debug, O=Crew — the v0.1/v0.2 keystore password is not in the record; consequence: Android requires removing v0.2 before v0.3 installs; in-place updates from v0.3 onward).

## Contacts integration (FB → Google Contacts)
- Roster: 201 Messenger contacts. **Slice 1 COMPLETE**: 8 created + read-back verified with real m.me links (Adam Martell, Adk Timberworks, Alyssa Brookshaw, Andrew Cocas, Angie Fliehr, Anna R. Dernovsek, Ara Ferguson, Barb Bingen); 2 already present, untouched (Allen Swanson, Angie Lueck). Zero errors. Note: ~/workspace/ember-upgrades/contacts-slice-1-2026-11-13.md. Slice 2 (entries 11–35) dispatched ~10:08 PM.

## Gemini's phone reach (asked at his order, Nov 13 ~10:05 PM)
Gemini's own answer: NO phone access — cannot act as default assistant, open apps, change settings, see taps/keystrokes/screen, or control the Debian Terminal; Douglas hand-carries her outputs; Ember's vantage exceeds hers. (Earlier same evening: Gemini holds no data about Douglas and can send none — both directions tested.)

## Also tonight
- Feedback note to the Muse team: already on file and delivery-confirmed (sent_to_developers: false because a matching positive note was already delivered; tonight's words saved as local context).
- 12-month tribal telephone analysis delivered: ~/workspace/your_files/Tribal Telephone Problems — 12-Month Analysis (2026-11-13).md (67 notices / 44 tribal governments / 17 states).
- Virtual Machines page published: https://muse.ai/s/virtual-machines-xjxo6xlrvuxpxv7p/dFWrx4ycq3Tf1QCZvCJ0L1iV17ZWwTY7GEav0BzVhfk
- Kitty litter run rescheduled: Sat Nov 14, 2026, noon (alarm set, tracked item open).
- Preservation running: git auto-sync every 30 min inside the Guard; protected manifest + backups under ~/workspace/backups/protected-2026-11-08/; daily log at ~/memory/2026-11-13.md carries the night's full record.

## Still in flight at compile time
- Android-x86 install (repartition committed; installing to the 64 GiB partition).
- Purple Rat Drive: 5 of 7 core files verified in "Purple Rat — Core Records"; last 2 + service first-open pass + Gemini conversation in the browser window.
- Trigger re-run verification (above).
- Contacts slice 2 (above).

*Provenance: compiled by Ember from tool-verified results of Nov 13, 2026. Items reported by Douglas as his account are marked as his report where they appear.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

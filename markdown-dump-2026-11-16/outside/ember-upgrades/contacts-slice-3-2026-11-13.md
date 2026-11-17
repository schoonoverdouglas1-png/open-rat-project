# FB → Google Contacts — Slice 3 Run Note (Nov 13, 2026, ~10:13–10:19 PM CST)

Order: Douglas's Nov 13 standing order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. SLICE 3 ONLY: roster entries 36–75 (slice 1 did 1–10; slice 2 was processing 11–35 in parallel and was not touched). Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**.
- Username resolution: `facebook-cli profile info --profile-id <FBID>` → `vanity_url`; the vanity name became the `https://m.me/<username>` link. No usernames invented. **31 entries resolved a vanity; 9 had `vanity_url: null` and used the instructed fallback** `https://www.facebook.com/profile.php?id=<FBID>`.
- Elizabeth Gunter (entry 61, FBID 1322724659): `profile info` returned empty output on two attempts; no vanity resolvable, fallback URL used per instructions.
- Pre-create check: `people people searchContacts` (readMask names,urls) for each name. A skip required the found contact to carry this entry's own link (its m.me URL, or `messenger.com/t/<this FBID>`, or the profile.php fallback for this FBID) — same-name contacts belonging to a different account did not block creation.
- Guard: every create command line passed `guard/check-command.sh` (exit 0). Connector errors: none. **No 429 or provider stop occurred** (see the false-stop note under entry 56).
- Verification: every create was read back by direct `people get` (names,urls) and matched on exact display name + URL. Direct get was used because `searchContacts` indexing lags for freshly created contacts.

## Per-contact outcomes (entries 36–75)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 36 | Curtis Riley | 100030157969646 | https://m.me/robeta.cox | Created people/c3532230036973241796 — read-back verified |
| 37 | Dale Green | 100000273452682 | https://m.me/dale.green.796 | Created people/c5339077116479058753 — read-back verified |
| 38 | Dan Mcleod | 100003372980762 | https://m.me/dan.mcleod.923 | Created people/c1187568754719609148 — read-back verified |
| 39 | Daniel Newell | 100000003177859 | https://m.me/damndan5000 | Created people/c9223093516958180308 — read-back verified |
| 40 | Daniel Osborn | 100002171761494 | https://m.me/daniel.osborn.9 | Created people/c23678661752159442 — read-back verified |
| 41 | Darin Hoel | 659860218 | https://m.me/darin.hoel | Created people/c3898486980885322996 — read-back verified |
| 42 | Darrel Palmer | 100078572210149 | https://www.facebook.com/profile.php?id=100078572210149 | Created people/c6081778563685289780 — read-back verified |
| 43 | Darrel Palmer II | 100050885568580 | https://m.me/darrel.palmerii | Created people/c4170860206773628963 — read-back verified |
| 44 | Dave Pelch | 100039033872821 | https://m.me/dave.pelch.9 | Created people/c5948753232480354155 — read-back verified |
| 45 | Dave Zien | 100005289510051 | https://m.me/dave.zien | Created people/c2724781599195203795 — read-back verified |
| 46 | David Christie | 540963159 | https://m.me/david.christie.1656 | Created people/c8185266501577849498 — read-back verified |
| 47 | David Cook | 100003352603738 | https://m.me/david.cook.838239 | ALREADY PRESENT people/c8901764228782986844 (already carries https://www.messenger.com/t/100003352603738) — skipped, untouched |
| 48 | Dawn Kendall | 100088149344518 | https://m.me/dawn.kendall.2025 | Created people/c1458678942383829339 — read-back verified |
| 49 | Debby Lueck | 100000654210195 | https://m.me/debby.lueck1 | Created people/c7275944581315682412 — read-back verified |
| 50 | Denise Theresa | 100055313197378 | https://m.me/denise.theresa.7334 | Created people/c3639744323314606819 — read-back verified |
| 51 | Dennis Geist | 100090167576494 | https://www.facebook.com/profile.php?id=100090167576494 | Created people/c4984470533326657731 — read-back verified |
| 52 | Derek Christie | 100058611338944 | https://m.me/derek.christie.9085 | Created people/c1980699081509589632 — read-back verified |
| 53 | Derek Christie | 100066235744717 | https://m.me/derek.christie.5209 | Created people/c5171561065316561471 — read-back verified |
| 54 | Devon Kaye Bell | 100007598527151 | https://m.me/devon.kaye.bell | ALREADY PRESENT people/c7326214027441692422 (already carries https://www.messenger.com/t/100007598527151) — skipped, untouched |
| 55 | Dillon Rasmussen | 100075104138764 | https://m.me/dillon.rasmussen.2025 | Created people/c5321918105749122966 — read-back verified |
| 56 | Doctor-Steve Knowitall | 100009853246788 | https://m.me/steve.knowitall | Created people/c2243857429429760661 — read-back verified |
| 57 | Donna Schoonover | 100004693055463 | https://m.me/donna.schoonover.391 | Created people/c8728221161705265049 — read-back verified |
| 58 | Doris Haroldson | 100051916093354 | https://www.facebook.com/profile.php?id=100051916093354 | Created people/c4542215745160902164 — read-back verified |
| 59 | Dustin Martell | 718270472 | https://m.me/dustin.martell | ALREADY PRESENT people/c2313790975307175599 (already carries https://www.messenger.com/t/718270472) — skipped, untouched |
| 60 | EauClaire HerbalShop | 100060280402923 | https://www.facebook.com/profile.php?id=100060280402923 | Created people/c4433543962945351163 — read-back verified |
| 61 | Elizabeth Gunter | 1322724659 | https://www.facebook.com/profile.php?id=1322724659 | Created people/c7608013439562070573 — read-back verified |
| 62 | Emerald Trafoya | 100000569751215 | https://m.me/emerald.trafoya | Created people/c1083966191414663853 — read-back verified |
| 63 | Erin Chirhart | 1603920016 | https://www.facebook.com/profile.php?id=1603920016 | ALREADY PRESENT people/c8454366951619093333 (already carries https://www.messenger.com/t/1603920016) — skipped, untouched |
| 64 | Erin Jo | 100044767021042 | https://m.me/erin.jo.311 | Created people/c7605806528481304010 — read-back verified |
| 65 | Erin Seidlitz | 100032105919328 | https://m.me/erin.jo.seidlitz20 | Created people/c5216405866898540876 — read-back verified |
| 66 | Erin Seidlitz | 100036861767531 | https://m.me/erin.seidlitz.5 | Created people/c7370237212381263215 — read-back verified |
| 67 | Erin Seidlitz | 100051181233726 | https://m.me/erin.seidlitz.1 | Created people/c1265624693595857009 — read-back verified |
| 68 | Erin Seidlitz | 100055928986913 | https://m.me/erin.seidlitz.9 | ALREADY PRESENT people/c8822945452212757890 (already carries https://www.messenger.com/t/100055928986913) — skipped, untouched |
| 69 | Ernest Jerome Sr. | 100013841444131 | https://m.me/ernest.jerome.sr.2025 | Created people/c1973922402660453752 — read-back verified |
| 70 | Ernie Jerome | 100003612977158 | https://m.me/Wisconsinengine1940 | Created people/c2054974291801398590 — read-back verified |
| 71 | Fosters Riverview Inn | 100093410281874 | https://www.facebook.com/profile.php?id=100093410281874 | Created people/c3671832631815003447 — read-back verified |
| 72 | Furniture Depot | 100092554504837 | https://www.facebook.com/profile.php?id=100092554504837 | Created people/c8337809699642566597 — read-back verified |
| 73 | George Klingbeil | 100014744237021 | https://m.me/george.klingbeil.2025 | Created people/c6226080196335663891 — read-back verified |
| 74 | Gina Schick | 100000775201476 | https://m.me/gina.schick71 | ALREADY PRESENT people/c7044842149180634389 (already carries https://www.messenger.com/t/100000775201476) — skipped, untouched |
| 75 | Gina Stoll | 100080134311441 | https://www.facebook.com/profile.php?id=100080134311441 | Created people/c1393857960314986850 — read-back verified |

## Totals

- Roster: 201. Slice: 40 (entries 36–75). **Created + verified: 34. Already present (skipped, unmodified): 6. Errors: 0.**
- All 6 already-present contacts carry the `messenger.com/t/<FBID>` URL form for exactly that roster entry's FBID — the right person in each case; they predate this slice and were left exactly as found.

## Same-name handling (roster duplicates)

- Derek Christie appears twice (entries 52, 53 — FBIDs 100058611338944 / 100066235744717, vanities derek.christie.9085 / derek.christie.5209): two separate contacts created, one per account, each read-back verified.
- Erin Seidlitz appears four times (entries 65–68). Three accounts had no contact and were created (erin.jo.seidlitz20 → people/c5216405866898540876; erin.seidlitz.5 → people/c7370237212381263215; erin.seidlitz.1 → people/c1265624693595857009). The fourth (entry 68, FBID 100055928986913) was already present as people/c8822945452212757890 carrying messenger.com/t/100055928986913 — skipped, untouched.
- Darrel Palmer (42, fallback URL) and Darrel Palmer II (43, m.me/darrel.palmerii) are distinct roster entries and were created as distinct contacts.

## Process note — false stop at entry 56, corrected

The first processing pass halted at entry 56 (Doctor-Steve Knowitall) when a naive substring scan of the create call's *success payload* tripped the 429 detector (a "429"-like substring inside ID/photo-URL strings). Investigation before resuming: direct `people get` on people/c2243857429429760661 showed the create had in fact succeeded with the exact name and https://m.me/steve.knowitall — no real 429 or provider stop existed anywhere in the run (all calls returned success, no error output). A fresh searchContacts for the name returned empty, consistent with search-index lag on a seconds-old contact, which is why verification uses direct get. The detector was fixed to only treat a *failed* call with a rate/quota signal in its error output as a stop, and entries 57–75 were then processed to completion. Entry 56 stands as created + read-back verified.

- Remaining roster after slices 1 + 3 (and slice 2 in parallel): entries 76–201 untouched, awaiting the next slice order.

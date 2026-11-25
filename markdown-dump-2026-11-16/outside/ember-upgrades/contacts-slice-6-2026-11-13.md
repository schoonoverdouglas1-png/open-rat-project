© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# FB → Google Contacts — Slice 6 Run Note (Nov 13, 2026, ~10:24–10:28 PM CST) — FINAL SLICE

Order: Douglas's Nov 13 auto-bake order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. SLICE 6 ONLY: roster entries 156–201 (slices 1–4 did 1–115; slice 5 was processing 116–155 in parallel and was not touched). This slice finishes the roster. Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**.
- Username resolution: `facebook-cli profile info --profile-id <FBID>` → `vanity_url` (returned as `https://facebook.com/<username>`; the username became the `https://m.me/<username>` link). No usernames invented. **37 entries resolved a vanity; 7 had `vanity_url: null`** (entries 157, 161, 165, 181, 195, 196, 197) **and 2 profile lookups failed with HTTP 403** (entries 170, 191 — "facebook request was forbidden by the server (HTTP 403): this specific command is currently unavailable (likely disabled or gated server-side)"). All 9 non-vanity entries used the instructed fallback `https://www.facebook.com/profile.php?id=<FBID>`.
- Pre-create check: `people people searchContacts` (readMask names,urls, pageSize 50) for each name. A skip required the found contact to carry this entry's own link (its m.me URL, or `messenger.com/t/<this FBID>`, or the profile.php fallback for this FBID) — same-name contacts belonging to a different account, or carrying no link, did not block creation and were left untouched.
- Guard: every create command line passed `guard/check-command.sh` (exit 0). Connector errors: none. **No 429 or provider stop occurred.** Stop rule used (slice-3 corrected): stop only on a failed call whose error output carries a rate/quota signal.
- Verification: every create was read back by direct `people get` (names,urls) and matched on exact display name + URL. Direct get was used because `searchContacts` indexing lags for freshly created contacts.

## Per-contact outcomes (entries 156–201)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 156 | Pat Borton | 100062582052420 | https://m.me/pat.borton.90 | Created people/c7084477097480976681 — read-back verified (a pre-existing same-name contact people/c5177568146176691161 carries a DIFFERENT link, https://m.me/pat.bortonfu — not this entry's link, so it did not count as present and was left untouched) |
| 157 | Patrick Borton | 100081746306930 | https://www.facebook.com/profile.php?id=100081746306930 (fallback — vanity_url null; not written) | ALREADY PRESENT people/c3828889043741667080 (already carries https://www.messenger.com/t/100081746306930) — skipped, untouched |
| 158 | Paul Wendt | 100060217711803 | https://m.me/paul.wendt.526 | Created people/c4517845024788972126 — read-back verified |
| 159 | Rachel Dee Fields | 503331055 | https://m.me/rachel.d.fields | Created people/c544385543792013519 — read-back verified |
| 160 | Randy Goss | 100093947861443 | https://m.me/randy.goss.36588 | Created people/c1423239404194861465 — read-back verified |
| 161 | Reder Recker | 100056388072708 | https://www.facebook.com/profile.php?id=100056388072708 | Created people/c7138421055586280261 — read-back verified |
| 162 | Renee Ford | 1002435380 | https://m.me/renee.ford.104 | Created people/c3962563720462310569 — read-back verified |
| 163 | Rick Schulze | 100011733182831 | https://m.me/rick.schulze.54 | Created people/c2954283041346424884 — read-back verified |
| 164 | Riley Claire | 100049536510853 | https://m.me/clairerileyhager | Created people/c2723631555024314604 — read-back verified |
| 165 | Robert Palmer | 100028225851109 | https://www.facebook.com/profile.php?id=100028225851109 | Created people/c2812437270997974935 — read-back verified |
| 166 | Rose Hetchler | 1267642593 | https://m.me/rose.hetchler | Created people/c4038711036007833790 — read-back verified |
| 167 | Samantha Ann Monnier | 100014299060282 | https://m.me/channel1hunnet | Created people/c3107926919336233041 — read-back verified |
| 168 | Sandy Cunningham Brandt | 1010940357 | https://m.me/sandycunninghambrandt | Created people/c1060271767329401000 — read-back verified |
| 169 | Sarah Kay | 100056914576567 | https://m.me/Stay.Kind.Okay (resolved, not written) | ALREADY PRESENT people/c5636523489621068509 (already carries https://www.messenger.com/t/100056914576567) — skipped, untouched |
| 170 | Savannah Clark | 100044324678130 | https://www.facebook.com/profile.php?id=100044324678130 | Created people/c7450607921761129954 — read-back verified (profile lookup returned HTTP 403; fallback applied) |
| 171 | Scott Werner | 1077662009 | https://m.me/scott.werner3 | Created people/c6785924342918964927 — read-back verified |
| 172 | Scott Wozniak | 100016049287849 | https://m.me/scott.wozniak.969 | Created people/c1903898860098536428 — read-back verified (a pre-existing same-name contact people/c5203799504339880792 with NO urls exists; it carries no FBID link for this entry, so it did not count as present and was left untouched) |
| 173 | Shareece Olson | 100012569568317 | https://m.me/shareece.olson.79 | Created people/c8235575701941282205 — read-back verified |
| 174 | Shareece Olson | 100015967050204 | https://m.me/shareece.olson.92 | Created people/c4657297398806477046 — read-back verified |
| 175 | Shareece Olson | 100025256476884 | https://m.me/shareece.olson.7 | Created people/c2831568867791729183 — read-back verified |
| 176 | Shareece Olson | 61563507247692 | https://m.me/shareece.olson.ll | Created people/c1366453126818622804 — read-back verified |
| 177 | Shaun Hetchler | 100042972251393 | https://m.me/shaun.hetchler | Created people/c7099308830694799575 — read-back verified |
| 178 | Sherlee Smith | 100000373701743 | https://m.me/sherlee.ryan | Created people/c5353950657005811036 — read-back verified |
| 179 | Smokeclaire Tobacco | 100092307438479 | https://m.me/smokeclaire.tobacco.2025 | Created people/c276597390918874191 — read-back verified |
| 180 | Snowflake The Duck | 100088168063610 | https://m.me/snowflake.the.duck | Created people/c4708145123602310906 — read-back verified |
| 181 | Socorro Hernandez | 100064929170684 | https://www.facebook.com/profile.php?id=100064929170684 | Created people/c6098260618823008774 — read-back verified |
| 182 | Song Bird | 100065258525718 | https://m.me/song.bird.31149359 | Created people/c8540562542998683662 — read-back verified |
| 183 | Stelzer Douglas | 100000580408065 | https://m.me/doug.stelzer.7 (resolved, not written) | ALREADY PRESENT people/c9189081555022663169 (already carries https://www.messenger.com/t/100000580408065) — skipped, untouched |
| 184 | Stephanie Marie | 100004344940898 | https://m.me/Saraquael24 | Created people/c2768737623691970410 — read-back verified |
| 185 | Steve Kolstad | 100041068963972 | https://m.me/steve.kolstad.7 | Created people/c3513879016193806363 — read-back verified |
| 186 | Steve Tetrault | 1356992928 | https://m.me/steve.tetrault.9 | Created people/c6675013489085720249 — read-back verified |
| 187 | Tabs Jana | 100004935420945 | https://m.me/tabatha.harel.3 | Created people/c8640054463940828430 — read-back verified |
| 188 | Talhia Lueck | 576470716 | https://m.me/talhia.reedy | Created people/c7858963888166924501 — read-back verified |
| 189 | Teela Fields | 184903131 | https://m.me/teela.fields | Created people/c6204341837782641210 — read-back verified |
| 190 | Teresa Wood | 100001469263421 | https://m.me/teresa.wood.5 | Created people/c7002031555858562663 — read-back verified |
| 191 | Tes Walters | 61552146915197 | https://www.facebook.com/profile.php?id=61552146915197 | Created people/c8572925905327944703 — read-back verified (profile lookup returned HTTP 403; fallback applied) |
| 192 | Thomas Zweifel | 100072805540521 | https://m.me/thomas.zweifel | Created people/c1133316312715936636 — read-back verified |
| 193 | Tim Sikora | 100010240537293 | https://m.me/tim.sikora.2025 | Created people/c1557972650618395143 — read-back verified |
| 194 | Trista Anne | 100093146272860 | https://m.me/trista.greene.2025 | Created people/c1670137587748651906 — read-back verified |
| 195 | Tyler Johnson | 100005395486338 | https://www.facebook.com/profile.php?id=100005395486338 | Created people/c5810933886611779744 — read-back verified (a pre-existing same-name contact people/c3908898028908730822 carries https://www.messenger.com/t/100016128798072 — a third FBID belonging to neither roster Tyler Johnson entry — so it did not count as present for either and was left untouched) |
| 196 | Tyler Johnson | 100015061361744 | https://www.facebook.com/profile.php?id=100015061361744 | Created people/c7922387300950709456 — read-back verified (same pre-existing contact as entry 195, left untouched) |
| 197 | Wayne Beighley | 100011781478018 | https://www.facebook.com/profile.php?id=100011781478018 | Created people/c1368147905973158916 — read-back verified |
| 198 | Wayne Beighley | 100064583917387 | https://m.me/wayne.beighley.54 | Created people/c2936751783744134151 — read-back verified |
| 199 | Will Fields | 665623552 | https://m.me/will.fields.547 | Created people/c3007857930796259307 — read-back verified |
| 200 | Willie Wolfe | 100072183934206 | https://m.me/willie.wolfe.244488 | Created people/c5649550606431738152 — read-back verified |
| 201 | Zach Johnson | 100082514865704 | https://m.me/zach.johnson.956891 | Created people/c4341003156527774207 — read-back verified |

## Totals

- Roster: 201. Slice: 46 (entries 156–201). **Created + verified: 43 (35 with m.me links, 8 with profile.php fallbacks). Already present (skipped, unmodified): 3. Errors: 0.**
- All 3 already-present contacts carry the `messenger.com/t/<FBID>` URL form for exactly that roster entry's FBID — the right person in each case; they predate this slice and were left exactly as found.
- The only errors in the run were on the Facebook side: two `profile info` lookups (entries 170, 191) returned HTTP 403 command-gating messages; the instructed FBID fallback was applied both times and no usernames were invented. No Google Contacts call failed; no rate/quota stop occurred at any point.
- Cumulative with known outcomes: slices 1–4 processed 115 (104 created + verified, 11 already present); slice 6 adds 46 (43 created + verified, 3 already present) — 161 entries with recorded outcomes. Slice 5 (entries 116–155) was still running in parallel when this slice finished; once its note lands, the full 201-entry roster is accounted for.

## Same-name handling (roster duplicates)

- Shareece Olson appears four times (entries 173–176 — FBIDs 100012569568317 / 100015967050204 / 100025256476884 / 61563507247692, vanities shareece.olson.79 / .92 / .7 / .ll): four separate contacts created, each with its own account's m.me link, each read-back verified; none was blocked by another's contact because each carries a different FBID link.
- Tyler Johnson appears twice (entries 195, 196 — FBIDs 100005395486338 / 100015061361744, both vanity null): two separate contacts created with each account's own profile.php fallback, each read-back verified. A pre-existing "Tyler Johnson" contact (people/c3908898028908730822) carries messenger.com/t/100016128798072 — a third FBID matching neither roster entry — so it counted as present for neither and was not modified.
- Wayne Beighley appears twice (entries 197, 198 — FBIDs 100011781478018 / 100064583917387): two separate contacts created (one profile.php fallback, one m.me/wayne.beighley.54), each read-back verified.
- Pat Borton (entry 156): a pre-existing same-name contact (people/c5177568146176691161) carries a different m.me link (pat.bortonfu); carrying no link for this entry's FBID, it did not count as present, and a new contact with m.me/pat.borton.90 was created. The pre-existing contact was not modified.
- Scott Wozniak (entry 172): a pre-existing same-name contact with no URLs at all (people/c5203799504339880792) did not count as present; a new contact with the m.me link was created. The pre-existing contact was not modified.

# FB → Google Contacts — Slice 4 Run Note (Nov 13, 2026, ~10:20–10:28 PM CST)

Order: Douglas's Nov 13 auto-bake order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. SLICE 4 ONLY: roster entries 76–115 (slices 1–3 did 1–75; slice 5 was processing 116–155 in parallel and was not touched). Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**.
- Username resolution: `facebook-cli profile info --profile-id <FBID>` → `vanity_url` (returned as `https://facebook.com/<username>`; the username became the `https://m.me/<username>` link). No usernames invented. **29 entries resolved a vanity; 11 had `vanity_url: null` and used the instructed fallback** `https://www.facebook.com/profile.php?id=<FBID>` (entries 76, 77, 78, 82, 85, 86, 92, 93, 107, 111, 112).
- Pre-create check: `people people searchContacts` (readMask names,urls) for each name. A skip required the found contact to carry this entry's own link (its m.me URL, or `messenger.com/t/<this FBID>`, or the profile.php fallback for this FBID) — same-name contacts belonging to a different account did not block creation.
- Guard: every create command line passed `guard/check-command.sh` (exit 0). Connector errors: none. **No 429 or provider stop occurred.** Stop rule used (slice-3 corrected): stop only on a failed call whose error output carries a rate/quota signal.
- Verification: every create was read back by direct `people get` (names,urls) and matched on exact display name + URL. Direct get was used because `searchContacts` indexing lags for freshly created contacts.

## Per-contact outcomes (entries 76–115)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 76 | Ginger Bryant | 61554029849472 | https://www.facebook.com/profile.php?id=61554029849472 | Created people/c2254736847872377058 — read-back verified |
| 77 | Ginger Bryant | 61578770583693 | https://www.facebook.com/profile.php?id=61578770583693 | Created people/c4721455579479506936 — read-back verified |
| 78 | Heather K Moussette-Diamond | 1092437862 | https://www.facebook.com/profile.php?id=1092437862 | Created people/c44398509485924985 — read-back verified |
| 79 | Heather MThayer | 100061005408456 | https://m.me/heather.mthayer.1 | Created people/c5551977520028289027 — read-back verified |
| 80 | Heather Palmer | 100000507736983 | https://m.me/heather.palmer.1481 | Created people/c6252264767177298902 — read-back verified |
| 81 | Herm Johnson | 100014100428520 | https://m.me/herm.johnson.37 | Created people/c9166675810161788176 — read-back verified |
| 82 | Hetchs Colby | 100094307388611 | https://www.facebook.com/profile.php?id=100094307388611 | Created people/c3765284267550447331 — read-back verified |
| 83 | Hope Geist Logan | 1192932353 | https://m.me/hope.geistlogan | Created people/c306684298126408347 — read-back verified |
| 84 | Hope Logan | 100027892906224 | https://m.me/hope.logan.71653 | Created people/c3769962844149510685 — read-back verified |
| 85 | Jacob Horne | 100069102780353 | https://www.facebook.com/profile.php?id=100069102780353 | Created people/c4046103370550290056 — read-back verified |
| 86 | James Vasseur | 100005395337636 | https://www.facebook.com/profile.php?id=100005395337636 | Created people/c2117349938609166670 — read-back verified |
| 87 | Janice Volk | 100042633180096 | https://m.me/janice.volk.524 | Created people/c309577248584326196 — read-back verified |
| 88 | Jeane Calkins | 100008007371909 | https://m.me/jeane.calkins.1 | Created people/c2201753272305275673 — read-back verified |
| 89 | Jeff Anders | 1692913151 | https://m.me/jeff.anders.98 | Created people/c5151159599219977049 — read-back verified |
| 90 | Jeff Schoonover | 1431738687 | https://m.me/jeff.schoonover.585 | Created people/c3787308230569358690 — read-back verified |
| 91 | Jenn Sorensen | 100064504906306 | https://m.me/jenn.sorensen.752 | Created people/c8483939680615902095 — read-back verified |
| 92 | Jenn Sorensen | 100069484029869 | https://www.facebook.com/profile.php?id=100069484029869 | Created people/c142977131413562651 — read-back verified |
| 93 | Jenn Sorensen | 100077993319717 | https://www.facebook.com/profile.php?id=100077993319717 | Created people/c8944195262933180812 — read-back verified |
| 94 | Jennifer Hassard | 100000664800194 | https://m.me/jennifer.lueck.79 (resolved, not written) | ALREADY PRESENT people/c3699750020198408117 (already carries https://www.messenger.com/t/100000664800194) — skipped, untouched |
| 95 | Jeremy Lueck | 100000385497682 | https://m.me/jeremy.lueck.5 (resolved, not written) | ALREADY PRESENT people/c7876273375261580451 (already carries https://www.messenger.com/t/100000385497682) — skipped, untouched |
| 96 | Jim Lueck | 100000343961237 | https://m.me/jim.lueck.50 | Created people/c8115218924300790674 — read-back verified |
| 97 | Jim Mataczynski | 100056475611324 | https://m.me/jim.mataczynski | Created people/c7901763295326934980 — read-back verified |
| 98 | Jim Schoonover Sr. | 100000911220918 | https://m.me/jimschoonoversr | Created people/c9053723841722565853 — read-back verified |
| 99 | Jimmy Sielaff | 100025905946658 | https://m.me/jimmybeam01 | Created people/c6715422671626019990 — read-back verified |
| 100 | Joe Lueck | 100001616938423 | https://m.me/joe.lueck.3 | Created people/c4648094980356955806 — read-back verified |
| 101 | John Weggen | 100011491009250 | https://m.me/john.weggen.9 | Created people/c4791322838991421048 — read-back verified |
| 102 | Jolene Johnson | 100000150003679 | https://m.me/jolene.johnson.1238 | Created people/c4591743529858222511 — read-back verified |
| 103 | Jon Zecherle | 1767377394 | https://m.me/jon.zecherle | Created people/c4454634769110332890 — read-back verified (a pre-existing same-name contact people/c6254775914344204510 with NO urls exists; it carries no FBID link for this entry, so it did not count as present and was left untouched) |
| 104 | Joseph Knez | 100094628809576 | https://m.me/joseph.knez.2025 | Created people/c4744545514758785504 — read-back verified |
| 105 | Joshua Weggen | 100010838611455 | https://m.me/joshua.weggen | Created people/c1535010971666975260 — read-back verified |
| 106 | Juanita Lea Green | 1640192608 | https://m.me/juanita.l.green.73 | Created people/c4621087330466882753 — read-back verified |
| 107 | Judy Mapes | 100086539029943 | https://www.facebook.com/profile.php?id=100086539029943 | Created people/c9156711400178241880 — read-back verified |
| 108 | Julia Schoonover | 100017101143474 | https://m.me/julia.schoonover.357 | Created people/c4625207131812921019 — read-back verified |
| 109 | Julia Schoonover | 100028080075033 | https://m.me/julia.schoonover.5 | Created people/c6930648988947976131 — read-back verified |
| 110 | Julia Schoonover | 100039027543736 | https://m.me/julia.schoonover.73 | Created people/c5339024084311997978 — read-back verified |
| 111 | Justin Case | 100064789856118 | https://www.facebook.com/profile.php?id=100064789856118 | Created people/c7515995090137541673 — read-back verified |
| 112 | Justin Credible | 100090182934058 | https://www.facebook.com/profile.php?id=100090182934058 | Created people/c4191471907367587494 — read-back verified |
| 113 | Karen Jackson | 100021345281236 | https://m.me/karen.jackson.759360 | Created people/c6588348556539556361 — read-back verified |
| 114 | Kathleen Geurts | 100011820277596 | https://m.me/kathleen.geurts.92 | Created people/c950339158838125672 — read-back verified |
| 115 | Kelly Macone | 1264991079 | https://m.me/KellyMacone | Created people/c5110398289359852633 — read-back verified |

## Totals

- Roster: 201. Slice: 40 (entries 76–115). **Created + verified: 38 (27 with m.me links, 11 with profile.php fallbacks). Already present (skipped, unmodified): 2. Errors: 0.**
- Both already-present contacts carry the `messenger.com/t/<FBID>` URL form for exactly that roster entry's FBID — the right person in each case; they predate this slice and were left exactly as found.
- Cumulative after slices 1–4: 115 of 201 processed (104 created + verified, 11 already present). Entries 116–201 remain (slice 5, 116–155, was running in parallel).

## Same-name handling (roster duplicates)

- Ginger Bryant appears twice (entries 76, 77 — FBIDs 61554029849472 / 61578770583693, both vanity null): two separate contacts created with each account's own profile.php fallback, each read-back verified.
- Jenn Sorensen appears three times (entries 91–93 — FBIDs 100064504906306 / 100069484029869 / 100077993319717): three separate contacts created (one m.me, two fallbacks), each read-back verified; none was blocked by another's contact because each carries a different FBID link.
- Julia Schoonover appears three times (entries 108–110 — FBIDs 100017101143474 / 100028080075033 / 100039027543736, vanities julia.schoonover.357 / julia.schoonover.5 / julia.schoonover.73): three separate contacts created, each read-back verified.
- Jon Zecherle (entry 103): a pre-existing same-name contact with no URLs at all (people/c6254775914344204510) was found; carrying no link for this entry's FBID, it did not count as present, and a new contact with the m.me link was created. The pre-existing contact was not modified.

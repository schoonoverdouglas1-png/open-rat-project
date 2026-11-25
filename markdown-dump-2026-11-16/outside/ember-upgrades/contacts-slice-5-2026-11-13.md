© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# FB → Google Contacts — Slice 5 Run Note (Nov 13, 2026, ~10:20–10:24 PM CST)

Order: Douglas's Nov 13 auto-bake order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. SLICE 5 ONLY: roster entries 116–155 (slices 1–3 did 1–75; slice 4 was processing 76–115 in parallel and was not touched). Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**. Indexing verified against slice 3 (entry 36 = Curtis Riley, entry 75 = Gina Stoll). Slice 5 range: entry 116 = Kelsey Flack … entry 155 = Pat Borton (entry 156 is a third Pat Borton account — outside this slice, untouched).
- Username resolution: `facebook-cli profile info --profile-id <FBID>` → `vanity_url`; the vanity name became the `https://m.me/<username>` link. No usernames invented. **36 entries resolved a vanity; 4 used the instructed fallback** `https://www.facebook.com/profile.php?id=<FBID>`: entries 117 and 147 had `vanity_url: null`; entries 131 and 138 returned an HTTP 403 from `facebook-cli profile info` on both attempts ("facebook request was forbidden by the server (HTTP 403): this specific command is currently unavailable") — not an authentication problem, and no retry beyond the second attempt was made.
- Pre-create check: `people people searchContacts` (readMask names,urls) for each name. A skip required the found contact to carry this entry's own link (its m.me URL, or `messenger.com/t/<this FBID>`, or the profile.php fallback for this FBID) — same-name contacts belonging to a different account did not block creation. **No entry in this slice met the skip rule; all 40 were genuinely absent.**
- Guard: every create command line passed `guard/check-command.sh` (exit 0). Connector errors: none. **No 429 or provider stop occurred** — the corrected slice-3 stop rule was used (stop only on a failed call whose error output carries a rate/quota signal).
- Verification: every create was read back by direct `people get` (names,urls) and matched on exact display name + URL. Direct get was used because `searchContacts` indexing lags for freshly created contacts.
- Note on vanities: several accounts' actual vanity differs from the display name (e.g. Liz Martin → m.me/jack.villag.77, Nate Stevens → m.me/goatchokeurface, Kymberlee Cooper → m.me/WashingtonGirl). These are the accounts' real `vanity_url` values, written as resolved — the same precedent as slice 3's Curtis Riley → m.me/robeta.cox.

## Per-contact outcomes (entries 116–155)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 116 | Kelsey Flack | 516068330 | https://m.me/kelseynicoleflack | Created people/c2640013008549758322 — read-back verified |
| 117 | Kensas Insha | 100087870480079 | https://www.facebook.com/profile.php?id=100087870480079 | Created people/c7982616963105987367 — read-back verified (fallback — vanity_url null) |
| 118 | Kip Lukes | 100010328765498 | https://m.me/kip.lukes | Created people/c1308223141338137682 — read-back verified |
| 119 | Kona Jai | 100001402307615 | https://m.me/Kona.Jai | Created people/c3408183328466008953 — read-back verified |
| 120 | Krista Karlen Kramer | 100000676837361 | https://m.me/Krista.K.Karlen | Created people/c7641693881583967027 — read-back verified |
| 121 | Krista Velie | 100053957393845 | https://m.me/krista.velie | Created people/c4121619802601420712 — read-back verified |
| 122 | Kyle Johnson | 100001207277450 | https://m.me/kyle.johnson.9889 | Created people/c3730542182611731636 — read-back verified |
| 123 | Kymberlee Cooper | 1370918748 | https://m.me/WashingtonGirl | Created people/c23836205415518195 — read-back verified |
| 124 | Lake Holcombe Thursday Night Pool League | 61552621821614 | https://m.me/lake.holcombe.thursday.night.pool.league | Created people/c884776081505821887 — read-back verified |
| 125 | Lana Johnson | 100090978921598 | https://m.me/lana.johnson.470973 | Created people/c5755198139012526059 — read-back verified |
| 126 | Laura Schoonover | 100010827526510 | https://m.me/laura.schoonover.566 | Created people/c5425641916005475094 — read-back verified |
| 127 | Lee Ann Raycher | 100083968267597 | https://m.me/lee.ann.raycher.2025 | Created people/c2948245616553317176 — read-back verified |
| 128 | Lil'd Palmer | 100035804411208 | https://m.me/lild.palmer | Created people/c5506238796227345863 — read-back verified |
| 129 | Little'd Palmer | 100040383552395 | https://m.me/littled.palmer | Created people/c172641725399206354 — read-back verified |
| 130 | Liz Martin | 100046884485614 | https://m.me/jack.villag.77 | Created people/c6288220511095264715 — read-back verified |
| 131 | Mac Wouldn'tyouliketoknow | 100054738821208 | https://www.facebook.com/profile.php?id=100054738821208 | Created people/c4978322289741043446 — read-back verified (fallback — profile info 403) |
| 132 | Mara Huffstutler | 100015577694524 | https://m.me/mara.huffstutler | Created people/c3308169397088395389 — read-back verified |
| 133 | Margo Harshman | 100000240273106 | https://m.me/margo.harshman | Created people/c6977203406570125741 — read-back verified |
| 134 | Mark Santineau | 100049994923500 | https://m.me/mark.santineau.39 | Created people/c9190653613969447019 — read-back verified |
| 135 | Mark Stender | 100001631311095 | https://m.me/mark.stender.3 | Created people/c6563917309496559826 — read-back verified |
| 136 | Marlena Oksa | 100091840816271 | https://m.me/marlena.oksa.2025 | Created people/c8292599750834633681 — read-back verified |
| 137 | Matt Wajda | 100050370104121 | https://m.me/matt.wajda.3 | Created people/c4825393556130513561 — read-back verified |
| 138 | Matthew Palmer | 100071832022461 | https://www.facebook.com/profile.php?id=100071832022461 | Created people/c8494875021702385565 — read-back verified (fallback — profile info 403) |
| 139 | Max Chapek | 100077216778012 | https://m.me/max.chapek.2025 | Created people/c9162828816485555519 — read-back verified |
| 140 | Michael Brookshaw | 100000035165872 | https://m.me/michael.brookshaw | Created people/c5494850297503393085 — read-back verified |
| 141 | Michael Gindt | 100086941102583 | https://m.me/MichaelGindt387 | Created people/c4929093228566052785 — read-back verified |
| 142 | Michael Lueck | 100001406285238 | https://m.me/michael.lueck.14 | Created people/c1593021168621083568 — read-back verified |
| 143 | Michael Newell | 1180951150 | https://m.me/chevdiesel | Created people/c3241643044474425430 — read-back verified |
| 144 | Michael Schoonover | 100001995066727 | https://m.me/michael.schoonover3 | Created people/c1678129048723223296 — read-back verified |
| 145 | Mike Endres | 100002325186743 | https://m.me/mike.endres.94 | Created people/c673580125014326026 — read-back verified |
| 146 | Mike Gass | 100056936741726 | https://m.me/mike.gass.526 | Created people/c8091762928941830473 — read-back verified |
| 147 | Mike Gass | 100060278272731 | https://www.facebook.com/profile.php?id=100060278272731 | Created people/c2118220562863178992 — read-back verified (fallback — vanity_url null) |
| 148 | Mike Knez | 100012743439280 | https://m.me/mike.knez.52 | Created people/c1816872531971784290 — read-back verified |
| 149 | Nate Green | 1098075729 | https://m.me/NateGreen45 | Created people/c8122254664949340214 — read-back verified |
| 150 | Nate Stevens | 100064351787156 | https://m.me/goatchokeurface | Created people/c2701080178621974116 — read-back verified |
| 151 | Nathan Knowlton | 100031428393838 | https://m.me/nathan.knowlton.794 | Created people/c643609540347030163 — read-back verified |
| 152 | Ozzie Sells | 61560446407545 | https://m.me/ozzie.sells | Created people/c7969734734729901894 — read-back verified |
| 153 | Pamela Baker-Boss | 100088911476768 | https://m.me/pamela.baker.boss | Created people/c6423337927446003364 — read-back verified |
| 154 | Pat Borton | 100010565405805 | https://m.me/pat.bortonfu | Created people/c5177568146176691161 — read-back verified |
| 155 | Pat Borton | 100046209788264 | https://m.me/pat.borton.52 | Created people/c6212512010226677463 — read-back verified |

## Totals

- Roster: 201. Slice: 40 (entries 116–155). **Created + verified: 40. Already present (skipped, unmodified): 0. Errors: 0.**
- Fallback URLs used: 4 (entries 117, 131, 138, 147) — 2 null vanities, 2 profile-info 403s. No usernames invented anywhere.

## Same-name handling (roster duplicates)

- Mike Gass appears twice (entries 146, 147 — FBIDs 100056936741726 / 100060278272731, vanity mike.gass.526 / fallback): two separate contacts created, one per account, each read-back verified. The entry-147 pre-create search correctly did not treat the just-created entry-146 contact as a match, because it carries a different account's link.
- Pat Borton appears twice in this slice (entries 154, 155 — FBIDs 100010565405805 / 100046209788264, vanities pat.bortonfu / pat.borton.52): two separate contacts created, each read-back verified. A third Pat Borton roster entry (156) sits outside this slice and was not touched.

- Remaining roster after slices 1–3 + 5 (with slice 4 in parallel): entries 156–201 untouched, awaiting the next slice order.

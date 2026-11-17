# FB → Google Contacts — Slice 2 Run Note (Nov 13, 2026, ~10:10–10:16 PM CST)

Order: Douglas's Nov 13 standing order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. SLICE 2: roster entries 11–35 (25 contacts), following the slice-1 method exactly. Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**.
- Username resolution: `facebook-cli profile info --profile-id <FBID>` → `vanity_url`; vanity segment became the `https://m.me/<username>` link (21 of 25). No usernames invented.
- Fallbacks (4): `vanity_url` was null for Barbara Bingen and Barbara Link; profile-info returned HTTP 403 (server-gated, verbatim below) for Bob Samardich and Cheyann Cote on both attempts — vanity could not be established, so `https://www.facebook.com/profile.php?id=<FBID>` was written instead, per the standing fallback rule.
  - Verbatim error (entries 15, 27): "Error: facebook request was forbidden by the server (HTTP 403): this specific command is currently unavailable (likely disabled or gated server-side) — other commands may still work. It is not an authentication problem, so reconnecting will not help..."
- Pre-create check: `people people searchContacts` (readMask names,urls), exact displayName match required to count as present.
- Guard: every create command line passed `guard/check-command.sh` before running. No 429s, no provider stops, no create/get errors.

## Per-contact outcomes (entries 11–35)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 11 | Barbara Bingen | 100087401035291 | https://www.facebook.com/profile.php?id=100087401035291 (fallback — vanity null) | Created people/c648900398854514870 — read-back verified |
| 12 | Barbara Link | 100084186725298 | https://www.facebook.com/profile.php?id=100084186725298 (fallback — vanity null) | Created people/c5832656742426015833 — read-back verified |
| 13 | Benjamin Cook | 100000788687525 | https://m.me/benjamin.cook.92 | Created people/c1839494850504665995 — read-back verified |
| 14 | Benjamin Johnson | 100001967157062 | https://m.me/benjamin.johnson.96199 | Created people/c130588001895113538 — read-back verified |
| 15 | Bob Samardich | 100080334003406 | https://www.facebook.com/profile.php?id=100080334003406 (fallback — profile info 403) | Created people/c3683552515143156362 — read-back verified |
| 16 | Brad David Braenne | 1318418563 | — | ALREADY PRESENT people/c5493788074787683330 (already carries https://www.messenger.com/t/1318418563) — skipped, untouched |
| 17 | Brandon Brookshaw | 100003232058608 | https://m.me/brandon.brookshaw | Created people/c8427515020135751249 — read-back verified |
| 18 | Brent Knez | 100016963667047 | https://m.me/brent.knez.10 | Created people/c3531047604558208495 — read-back verified |
| 19 | Brittany McNamara | 570731220 | https://m.me/brittany.mcnamara.9 | Created people/c5915795837453105022 — read-back verified |
| 20 | Bryant Wibel | 1073025933 | https://m.me/bryant2005is | Created people/c9165435140185335379 — read-back verified |
| 21 | Cara Maes Lueck | 805170252 | https://m.me/cara.maeslueck | Created people/c6956515906267455888 — read-back verified |
| 22 | Carson Brookshaw | 100021438645705 | https://m.me/carson.brookshaw.73 | Created people/c3029316981183004441 — read-back verified |
| 23 | Chad Jiskra | 100028526302570 | https://m.me/chad.jiskra | Created people/c8457183202592843035 — read-back verified |
| 24 | Charlee Wilder | 100071284038129 | https://m.me/charlee.wilder.2025 | Created people/c4593436713258730558 — read-back verified |
| 25 | Chell Belle | 100011471930742 | https://m.me/chell.belle.754 | Created people/c9220471720848210960 — read-back verified |
| 26 | Cheryl Potaczek | 100000584590162 | https://m.me/cpotaczek | Created people/c2640587015928883887 — read-back verified |
| 27 | Cheyann Cote | 100059082122102 | https://www.facebook.com/profile.php?id=100059082122102 (fallback — profile info 403) | Created people/c6545265348734880038 — read-back verified |
| 28 | Chloe Judnic | 1487682649 | https://m.me/chloebrenner | Created people/c1070360667045118382 — read-back verified |
| 29 | Chris Holte | 100001126787388 | https://m.me/chris.holte.79 | Created people/c7742630369716388500 — read-back verified |
| 30 | Chris Krueger | 1467772973 | https://m.me/chris.krueger.589 | Created people/c7944310360116394474 — read-back verified |
| 31 | Christina Downs | 100034022544071 | https://m.me/christina.downs.370 | Created people/c5266369361030214156 — read-back verified |
| 32 | Courtney Collins | 100065043249822 | https://m.me/courtney.collins.16906715 | Created people/c5737215168842594929 — read-back verified |
| 33 | Courtney Mae | 670005407 | https://m.me/courtney.m.larson.9 | Created people/c5032130479670162131 — read-back verified |
| 34 | Craig Linscott | 100000940366483 | https://m.me/craig.linscott.7 | Created people/c4777129702933012673 — read-back verified |
| 35 | Curtis Riley | 100001920727217 | https://m.me/curtis.riley.758 | Created people/c3501752352121567432 — read-back verified |

## Totals

- Roster: 201. Slice 2: 25 (entries 11–35). **Created + verified: 24 — of those, 20 carry `https://m.me/<username>` and 4 carry the `profile.php?id=` fallback (entries 11, 12, 15, 27). Already present (skipped, unmodified): 1. Errors on create/get: 0.**
- Entry 16's vanity (brad.braenne) was resolved but not written, because the contact already existed.
- Note: the one already-present contact carries the `messenger.com/t/<FBID>`-form URL rather than `m.me/<username>` — it predates this slice; per additive-only rules it was left exactly as found.
- Method note: `searchContacts` does not yet return slice-1's brand-new creates (Google search-index lag); pre-existing contacts are found reliably. Read-back verification used `people people get` by resourceName, as in slice 1.
- Cumulative after slices 1–2: 35 of 201 processed (32 created + verified, 3 already present). Remaining roster: 166 contacts, untouched, awaiting the next slice order.

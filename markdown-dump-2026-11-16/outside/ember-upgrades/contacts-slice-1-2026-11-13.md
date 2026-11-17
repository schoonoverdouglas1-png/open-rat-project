# FB → Google Contacts — Slice 1 Run Note (Nov 13, 2026, ~10:04–10:10 PM CST)

Order: Douglas's Nov 13 standing order — Messenger/Facebook contacts into Google Contacts, each carrying a clickable Messenger link. FIRST SLICE ONLY (first 10 of roster). Additive only; nothing deleted or modified.

- Roster source: `hatch_messenger_cli contacts` — **total 201 contacts**.
- Username resolution: `facebook-cli profile info --profile-id <FBID>` returned a `vanity_url` for all 10; the vanity name became the `https://m.me/<username>` link. No usernames invented. (No profile.php fallback was needed.)
- Pre-create check: `people people searchContacts` (readMask names,urls) for each name.
- Guard: create command line passed `guard/check-command.sh` (GUARD-OK). No connector errors; no 429s.

## Per-contact outcomes (first 10)

| # | Name | FBID | URL written | Outcome |
|---|------|------|-------------|---------|
| 1 | Adam Martell | 100008739100690 | https://m.me/adam.martell.2025 | Created people/c2321685271154700988 — read-back verified |
| 2 | Adk Timberworks | 100090499537865 | https://m.me/adk.timberworks | Created people/c5896897657082568989 — read-back verified |
| 3 | Allen Swanson | 100000580990498 | — | ALREADY PRESENT people/c4507202780901717547 (already carries https://www.messenger.com/t/100000580990498) — skipped, untouched |
| 4 | Alyssa Brookshaw | 100001340081931 | https://m.me/alyssa.k.lueck | Created people/c6567298453692587097 — read-back verified |
| 5 | Andrew Cocas | 100092179941248 | https://m.me/andrew.cocas.2025 | Created people/c4809454700472428793 — read-back verified |
| 6 | Angie Fliehr | 100010170346438 | https://m.me/angie.fliehr | Created people/c6790074926226468710 — read-back verified |
| 7 | Angie Lueck | 1327147629 | — | ALREADY PRESENT people/c7538098565984426340 (already carries https://www.messenger.com/t/1327147629) — skipped, untouched |
| 8 | Anna R. Dernovsek | 206202007 | https://m.me/anna.dernovsek | Created people/c4645494893072609774 — read-back verified |
| 9 | Ara Ferguson | 100078397484195 | https://m.me/ara.ferguson.2025 | Created people/c4026102536690793206 — read-back verified |
| 10 | Barb Bingen | 100063451735669 | https://m.me/barb.bingen.3 | Created people/c467114943862142176 — read-back verified |

## Totals

- Roster: 201. Slice: 10. **Created + verified: 8. Already present (skipped, unmodified): 2. Errors: 0.**
- Note: the two already-present contacts carry `messenger.com/t/<FBID>`-form URLs rather than `m.me/<username>` — they predate this slice; per additive-only rules they were left exactly as found.
- Remaining roster after this slice: 191 contacts, untouched, awaiting the next slice order.

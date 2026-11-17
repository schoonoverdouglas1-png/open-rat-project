# BUILD-LOG — Universal Cache v1, Nov 13, 2026

Built by Ember (subagent build pass) at Douglas Roy Schoonover's order of Nov 13, 2026 (~3:25 PM CST): a universal cache, useful for everybody, on GitHub, seeded with the lanes he actually uses. Patterns read first and borrowed (not modified): `~/workspace/headless-browser/cached_fetch.py`, `summary_cache.py`, `ember_index.py`.

Environment: Python 3.12.3, git 2.43.0, gh 2.102.0 (logged in as `schoonoverdouglas1-png`, scopes gist/read:org/repo). Stdlib only — no installs.

## Seed probes (gentle, one pass, identifying UA)

| URL | Result |
|---|---|
| https://www.oakleafclinics.com/ | 200 |
| https://www.oakleafsurgical.com/ | 200 |
| https://www.mayoclinic.org/diseases-conditions/inguinal-hernia/symptoms-causes/syc-20351547 | **403 Forbidden** — and its robots.txt itself returns 403 to our named UA; treated as a full stop, never evaded |
| https://medlineplus.gov/hernia.html | 200 (seeded in Mayo's place — same topic, U.S. National Library of Medicine) |
| https://mwmbl.org/ | 200 |
| https://about.mwmbl.org/ | RemoteDisconnected ×2 — not seeded; mwmbl.org itself seeded instead |
| https://www.isci.si/info/en/about | 200 (the SearXNG *about* page only — no search queries were sent to the instance, so no rate-limit question arises) |
| https://distrosea.com/ | 200 after the robots-reader fix (below) |

## Bugs found and fixed during the build (old with new — both recorded)

1. **Title capture:** the extractor's skip-set included `<head>`, which swallowed `<title>`. Fixed: `head` removed from the skip set; title data captured before the skip check. Verified: entry #1 re-fetched with `--refresh`, title went `(untitled)` → `OakLeaf Clinics`, same text hash.
2. **Robots misreading:** stdlib `RobotFileParser.read()` fetches robots.txt with a nameless default agent. DistroSea 403s that agent → parser assumed total ban, though its actual robots.txt disallows only `/feed.xml` paths. Fixed: fetch robots.txt with this project's identifying UA and `parse()` it exactly. Verified both ways: DistroSea `/` → allowed and seeded (entry #6); Mayo, whose robots.txt 403s even to the named UA, → still disallowed and **not** seeded.

## End-to-end test runs (all in ~/workspace/universal-cache/)

### add — exit 0 each

```
add https://www.oakleafclinics.com/ --country US --lang en
  → id 1, "OakLeaf Clinics", 3152 chars, sha256 20444de4ebc7ece3…
add https://www.oakleafsurgical.com/ --country US --lang en
  → id 2, "OakLeaf Surgical Hospital", 5881 chars, sha256 dd9887424a243b1b…
add https://medlineplus.gov/hernia.html --country US --lang en
  → id 3, "Hernia | MedlinePlus", 6787 chars, sha256 346f5dcef5fe85b3…
add https://mwmbl.org/ --country US --lang en
  → id 4, "Mwmbl", 600 chars, sha256 f60584085e757c76…
add https://www.isci.si/info/en/about --country SI --lang en
  → id 5, "About SearXNG - isciSI", 2652 chars, sha256 a37e12902abe245e…
add https://distrosea.com/ --country US --lang en
  → id 6, "Test Linux distros online - DistroSea", 1201 chars, sha256 2a3bb53956594244…
```

### add — correctly refused/skipped, exit 1 each (stop signals honored, not failures of the tool)

```
add https://www.mayoclinic.org/…/syc-20351547   → error: robots.txt disallows this path for our UA
add https://about.mwmbl.org/                    → error: RemoteDisconnected (host dropped connection, twice; stopped)
```

### cache-hit behavior — exit 0

```
add https://mwmbl.org/ (again, no --refresh)
  → fromCache: true, "already cached; full original served, no re-fetch"
```

### summary — exit 0 for all six entries

Summary lengths (chars) by entry id: 1→3600, 2→5786, 3→6822, 4→1583, 5→3850, 6→2703. Each contains TABLE OF CONTENTS, BIBLIOGRAPHY (with provenance line + outbound references), EMBER'S RECOMMENDATIONS (labeled hers), and KEY PASSAGES. Re-running `summary 1` served `fromCache: true`. Full text of the MedlinePlus summary was inspected by eye during the build: TOC, 30-reference bibliography, recommendations, and passages all present and correctly formed.

### search — exit 0 each, edition tags shown

```
search hernia            → 1 hit: #3 MedlinePlus Hernia [US/en]
search OakLeaf           → 2 hits: #1 OakLeaf Clinics, #2 OakLeaf Surgical Hospital [US/en]
search SearXNG           → 1 hit: #5 About SearXNG - isciSI [SI/en]
search Linux --country US → 1 hit: #6 DistroSea [US/en]
```

### list / stats / export — exit 0 each

```
list   → 6 entries, ids 1–6, all HTTP 200, editions US/en ×5 + SI/en ×1
stats  → entries 6, totalTextChars 20273, editions {"SI/en": 1, "US/en": 5}
export → seed_export.jsonl, 6 lines (one JSON object per entry, full text included)
```

Plain-files mirror verified: `pages/0001.txt` … `pages/0006.txt` all present, each opening with its provenance header (URL, final URL, title, country/lang, fetched-at, HTTP status, both sha256 hashes) above the full original text.

## GitHub

Local repo initialized in this folder; `universal_cache.db` (the live SQLite working file) is git-ignored as regenerable — the committed seed truth is `seed_export.jsonl` + `pages/`. Push result and remote HEAD verification are recorded in the commit history and in the build report to Douglas; if the remote push is blocked, the exact blocker belongs in that report, not papered over here.

## Honest gaps

- Mayo Clinic content is **not** in the cache: the host declines our named automated agent (403, including robots.txt). Humans can read it in a browser; this cache will not disguise itself to take it.
- Mwmbl's about subdomain dropped our connections; the main mwmbl.org page stands in as the seed.
- All seeds are single-edition so far (plus the deliberate SI/en SearXNG entry). Per-country editions accumulate as people add them — that growth is the design, not a defect.

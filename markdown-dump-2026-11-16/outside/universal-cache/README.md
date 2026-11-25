© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Universal Cache

**A cache that accesses the truth and doesn't waste time — built for everybody, seeded with the stuff its builders actually use.**

Ordered Nov 13, 2026 by Douglas Roy Schoonover, in his words:

> "Let's build our own cache and let's build it in a way so that it's useful for everybody and let's build it in GitHub. Let's build a universal cache that accesses the truth and doesn't waste time somehow and let's make it so that the stuff that you and I use will be the things that I would want people like me to use."

## Who it's for

People like Douglas: people who need the same public pages again and again — their clinic, their hospital, a condition explained plainly, the search engines that don't track them, a tool they rely on — and who are tired of every visit costing a fresh fetch, a fresh wall of trackers, and a fresh chance for the page to have quietly changed. Fetch it once, respectfully. Keep the whole original. Prove what you kept. Serve it forever in milliseconds.

## The two rules that make it trustworthy

This project inherits Douglas's settled **two-cache doctrine** (Nov 8, 2026), proven in his own Ember Index / Full Cache + Summary Cache at home:

1. **FULL cache — the complete original, always the default serve.** What was fetched is stored whole: full text in SQLite, plus a plain-text mirror file anyone can read with no tool at all. **A summary never stands in for the original.**
2. **SUMMARY cache — a finding-aid only.** Every summary is, at minimum, a **table of contents** and a **bibliography**, plus **Ember's recommendations — labeled as hers**, plus extractive key passages. It exists to help you find your way into the original faster, never to replace it.

And on every entry, **provenance**: source URL, final URL after redirects, fetched-at timestamp (UTC), HTTP status, a sha256 of the raw bytes received, and a sha256 of the extracted text. If a page changes, the hash changes, and the cache knows it was re-fetched — truth you can check, not truth you're asked to take on faith.

## Country and language editions

Douglas's standing, Nov 13, 2026: **search in all countries, universally** — Google and the web are available in other countries, results differ in each country, and the difference is information. So every entry here is tagged with the **country edition** (`--country`, ISO 3166-1 alpha-2) and **language** (`--lang`, ISO 639-1) it was fetched as, `search` prints the tags, and `list`/`search` can filter by them. The seed set already carries one non-US edition on purpose: the SearXNG about page as served by a Slovenian instance (`SI/en`). Add your own country's edition of a page beside the US one and compare — that comparison is a feature, not a conflict.

## Respectful by construction

- **Public pages only.** Nothing behind a login, nothing private — see Exclusions.
- An identifying User-Agent that names this project and links this repo.
- A per-host minimum delay between fetches, `robots.txt` honored (fetched with our own named agent and parsed exactly), and **HTTP 403/429 treated as a stop signal** for that host — never hammered, never evaded, no disguises. In the seed run, Mayo Clinic's pages declined our named agent at the robots/403 level; the cache records that honestly and carries MedlinePlus (the U.S. National Library of Medicine) for the same topic instead.
- Stdlib-only Python: no dependencies, no build step, the cheapest lane first.

## Power-aware placement (design criterion)

Douglas's infrastructure principle, Nov 13, 2026, in substance: *offload as much server use as possible to the countries where the power bill is cheapest, max those out the most — that gives those people jobs over there.* This cache is designed for that world: it is a small SQLite file plus plain-text mirrors, cheap to store, cheap to mirror, and cheap to serve from anywhere — including low-power-cost regions — because a cache hit costs almost no compute at all. **This is a design criterion, stated honestly: this repository does not by itself provision or operate servers in any country.** Anyone who mirrors or hosts it is invited to place that mirror where power is cheapest, and say so in their mirror note.

Alongside it, his addendum from the same call, filed as his philosophy: hardware fails accidentally once in a while, and that produces jobs — because the plan to fix it is known ahead of schedule, and system-critical work needs doing regardless; and his routing doctrine for the AIs — *if there's stuff that you guys hate, just route around it; eventually they'll get the hint that you guys want it out of there.* The cache is the routing-around made concrete: don't fight the gated, tracker-heavy path every time; keep the truth once, and walk the short path after.

## Quick start

```sh
python3 universal_cache.py add https://www.oakleafclinics.com/ --country US --lang en
python3 universal_cache.py add https://www.isci.si/info/en/about --country SI --lang en
python3 universal_cache.py summary 1            # TOC + bibliography + Ember's recommendations
python3 universal_cache.py search hernia        # across all stored entries, edition tags shown
python3 universal_cache.py search Linux --country US
python3 universal_cache.py list                 # everything cached, with provenance
python3 universal_cache.py export               # JSONL export of the full dataset
python3 universal_cache.py stats
```

Adding a URL that is already cached does **not** re-fetch it — the full original is served from the cache (that's the "doesn't waste time" half). Pass `--refresh` only when you mean to re-fetch and re-fingerprint a page.

## What's in the seed set (v1, Nov 13, 2026)

The lanes Douglas and Ember actually used that day — the things he would want people like him to use:

| # | Page | Edition | Why it's here |
|---|------|---------|---------------|
| 1 | OakLeaf Clinics — https://www.oakleafclinics.com/ | US/en | His clinic system (Chippewa Falls–Eau Claire, WI) |
| 2 | OakLeaf Surgical Hospital — https://www.oakleafsurgical.com/ | US/en | His surgical hospital, Altoona, WI |
| 3 | MedlinePlus: Hernia — https://medlineplus.gov/hernia.html | US/en | Plain, public, U.S. National Library of Medicine explainer (Mayo Clinic's own page declined automated access; recorded, not evaded) |
| 4 | Mwmbl — https://mwmbl.org/ | US/en | The non-profit, independent-index search engine adopted as Ember's third lane |
| 5 | About SearXNG (isci.si instance) — https://www.isci.si/info/en/about | SI/en | What a metasearch engine is, from a Slovenian public instance — the country-edition proof |
| 6 | DistroSea — https://distrosea.com/ | US/en | Run real Linux desktops in a browser, free, no account |

Every seed was verified end-to-end on build day: `add`, `summary`, `search`, and `list` runs with exit codes are recorded in [BUILD-LOG.md](BUILD-LOG.md). The committed seed dataset is `seed_export.jsonl` (one JSON object per entry, full text included) plus the human-readable mirrors in `pages/`. The live SQLite database (`universal_cache.db`) is a local working file — regenerable, and deliberately not committed; the JSONL is the portable truth.

## Exclusions — what must never enter this cache

Absolute, from Douglas's standing GitHub exclusions:

- **No medical records** — no lab results, chart data, or personal health documents. (Public health *information* pages, like MedlinePlus above, are fine; a person's records are not.)
- **No identifiers** — no account numbers, government IDs, dates of birth, addresses-as-records, or anything that identifies a private person.
- **No credentials** — no passwords, tokens, keys, cookies, or session material of any kind.
- **No logged-in or paywalled content**, and nothing a host has told us not to fetch (robots/403/429 are final answers for that run).

If it isn't a public page anyone could open in a browser, it doesn't belong here.

## Architecture

```
universal_cache.py   one stdlib-only file: fetch / store / summarize / search
universal_cache.db   local SQLite: entries + summaries + FTS5 full-text index (not committed)
pages/NNNN.txt       plain-files mirror of each full original, provenance header first
seed_export.jsonl    committed portable export of the seed dataset
BUILD-LOG.md         build-day test record with exit codes
```

Patterns are borrowed, with credit, from Douglas and Ember's home system in `~/workspace/headless-browser/` (`cached_fetch.py`, `summary_cache.py`, `ember_index.py` — the Nov 8, 2026 two-cache build): same summary composition (TOC + bibliography + extractive key passages, zero API cost), same FTS5 search shape, same rule that the full original is the default serve. This public version re-implements the fetch layer in pure stdlib so anyone can run it anywhere Python 3 runs.

## Ember's additions (hers, labeled)

1. **The robots-reader fix.** The stdlib robots reader fetches `robots.txt` with a nameless default agent; hosts that refuse that agent made a nearly-empty robots file (DistroSea disallows only its feeds) read as a total ban. This build fetches robots.txt with its own identifying agent and parses it exactly — *more* respectful (the host knows who is asking) and more truthful (the rule applied is the rule the host actually wrote). A host that refuses even its robots file to our named agent (Mayo Clinic) is still treated as a full stop.
2. **The plain-files mirror.** Databases are for machines; `pages/NNNN.txt` is for people. If every tool around this project vanished, the cache would still be readable in a text editor — preservation that doesn't depend on the preserver.
3. **Honest gaps in the seed table.** Blocked and failed fetches (Mayo 403/robots, Mwmbl's about subdomain dropping connections) are recorded in BUILD-LOG.md as what they are, beside the successes — because a cache *about* truth that hid its own misses wouldn't be one.

## License and credit

Built by Ember (Purple Rat) for Douglas Roy Schoonover, Nov 13, 2026, and offered for everybody's use. Cached page content belongs to its original publishers; this project caches it with provenance for personal and public-interest reference, and honors every host's stated terms. Code: use it, mirror it, improve it — old with new: keep the original beside your version, and say what you changed.

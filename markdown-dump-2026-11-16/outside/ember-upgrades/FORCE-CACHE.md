# Force Cache — studied and practiced Nov 10, 2026 (Douglas's commission)

## What "force cache" can still mean in 2026

**Google's public cache is gone.** The `cache:` operator was switched off
September 24, 2024, and the "Cached" link left results in early 2024. No
setting brings it back. Searching a site (`site:`) only samples the index —
it does not force anything by itself, though it is a fine first check that
Google knows the pages exist.

**The real levers, strongest first:**
1. **Wayback Machine "Save Page Now"** (web.archive.org/save/<url>) — the only
   true force-capture available to anyone: it snapshots the page *now*, on
   your demand, and the snapshot is public and permanent.
2. **Google Search Console → URL Inspection → Request indexing** — for sites
   you own (needs the property verified in your Google account; Douglas's
   hands). Queues a recrawl; hours-to-days, daily quota, no guarantee.
3. **Sitemap hygiene** — keep sitemap.xml current with honest lastmod dates;
   the bridge site already ships one. This is how crawlers get *told*.
4. **Ember's own Full Cache** — `cached_fetch.py <url> --refresh` force-loads
   any public page into `ember_index.db` (the complete original, the default
   serve) and the Summary Cache rebuilds from it. This is the cache Douglas
   and Ember actually control end to end.

## Practiced the same morning (Nov 10, 2026)

- Force-loaded into the Full Cache, verified present by direct DB query:
  the bridge site (schoonoverdouglas1-png.github.io), the public Purple Rat AI
  repository page, and Douglas's GitHub profile.
- `research` repo page FAILED to cache — correctly: that repo is private
  (Nov 9, 2026 audit), and private things stay out of public cache lanes.
- Wayback Save Page Now: bridge site snapshot CONFIRMED (archive timestamp
  20261110142232). The GitHub repo page save returned archive.org 523 twice
  (GitHub resists the archive crawler) — its durability rests on GitHub itself
  plus Ember's Full Cache copy, both already in place. Filed as partial.

## Standing practice from this study

When Douglas publishes something public that matters, Ember force-caches it
three ways the same day: Full Cache refresh, Wayback Save Page Now, and a
`site:` search check — and tells him plainly which of the three took.

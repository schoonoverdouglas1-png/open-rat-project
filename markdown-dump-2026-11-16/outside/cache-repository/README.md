© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Cache Repository

Created Nov 10, 2026, ~7:15 PM CST, on Douglas's order in voice call: "Run the Git code one time and do a cache repository."
Purpose: a versioned, on-box repository of Ember's three caches and the tools that serve them, so the caches themselves are preserved and rebuildable alongside the Preservation Project.

## Contents at creation (verified by live query, Nov 10, 2026)

| Cache | File | Size | Contents |
|---|---|---|---|
| Full Cache (complete originals, the default serve) | caches/ember_index.db | 1.1 MB | 17 pages (pages + FTS5 index) |
| Summary Cache (finding aid only — TOC + bibliography + Ember's recommendations) | caches/summary_cache.db | 104 KB | 12 summaries |
| Master Cache | caches/master_cache.db | 17 MB | 825 archive entries, 825 files |

Tools that read and build them are in `tools/` (cached_fetch.py, summary_cache.py, ember_index.py, master_cache.py), copied unchanged from ~/workspace/headless-browser/, which remains the live working home of the caches. This repository is a snapshot-and-history lane, not a replacement: old with new.

## Where it lives, and where it does not

Local only, on Douglas's box, and included in local backups. **Not pushed to GitHub**: the Full Cache holds complete originals of everything Ember has cached, and originals do not travel to repos under the standing exclusions. If Douglas wants a private-repo copy later, that is his word to give.

Checksums of the three cache files at creation are in MANIFEST.sha256.

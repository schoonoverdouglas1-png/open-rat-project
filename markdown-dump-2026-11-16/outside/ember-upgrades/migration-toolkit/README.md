© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Migration & Aggregation Toolkit

Built 2026-11-13 at Douglas's order: prepare tools so data can migrate
from one account to the next, stay redundantly saved, and aggregate to
MORE, never less. Mission standing (his words): "aggregate more and not
less."

## Rules that ride on every use
- Copy first, verify by checksum, keep the old beside the new.
- Nothing is closed, deleted, or overwritten by these tools — ever.
  A real account migration (sending, closing, switching defaults) still
  needs Douglas's exact word on that exact action.
- Every aggregation run appends; the index only grows.

## Tools
- `aggregate_manifest.py <file-or-dir> [...]`
  Writes a timestamped JSONL manifest (path, size, mtime, SHA-256) under
  `runs/`, a per-run summary, and appends the summary to
  `AGGREGATE-INDEX.jsonl`. Use it before and after any migration so the
  before/after aggregate can be compared line by line.
- `redundant_copy.py <source-file> <dest-dir> <dest-dir> [more...]`
  Copies one file into 2+ places and verifies each copy by SHA-256.
  Identical copies are left alone; different existing files are never
  overwritten — the new copy lands beside them, timestamped.

## Migration sequence (checklist)
1. Manifest the source account's export (aggregate_manifest.py).
2. Copy redundantly to the holding places (redundant_copy.py).
3. Verify checksums match in every copy.
4. Load/confirm the data inside the destination account.
5. Manifest the destination; compare aggregates — must be MORE, not less.
6. Old account stays intact until Douglas says otherwise, by exact word.

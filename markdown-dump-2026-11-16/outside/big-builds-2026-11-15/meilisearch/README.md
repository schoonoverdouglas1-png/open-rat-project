© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Meilisearch — Big Builds 2026-11-15, Track 6

## Status: DONE (standalone binary, test-verified; test instance stopped after proof)
- Route assessed first: **no apt package exists** (the Nov 14 gap) → official
  standalone binary route, sandbox-only. Nothing was installed system-wide;
  no dpkg packages were added (undo manifest below proves the baseline).
- Binary: `meilisearch` **1.56.2** (latest per GitHub releases redirect,
  2026-11-15), linux-amd64, 341M ELF x86-64.
  Source: https://github.com/meilisearch/meilisearch/releases/download/v1.56.2/meilisearch-linux-amd64
  SHA256: `fa2e1043139998df2056ce136d10bc35e0c252051052667ca3146bac2eb0288b` (see SHA256.txt)
  Note: GitHub REST API returned 403 on first try; the version was obtained
  from the releases/latest redirect instead — no hammering.
- All commands were routed through `~/workspace/ember-upgrades/guard/check-command.sh`.

## Verified live (PROOF-2026-11-15.txt, meilisearch.log)
- `./meilisearch --version` → `meilisearch 1.56.2`
- Ran on test port **127.0.0.1:7701** with `--db-path ./data.ms --env development --no-analytics`
- `GET /health` → `{"status":"available"}`
- `GET /version` → pkgVersion 1.56.2, commit 8c7bfcfa9bcff7083bcb5d184fa2a523a23884d8
- Functional smoke: POST 2 documents to index `ember-test`, search `q=Purple`
  returned the correct hit (1 ms); /stats showed 2 documents.
- Test instance was then stopped; binary + data.ms remain in this folder.

## Restart (when wanted)
`cd ~/workspace/big-builds-2026-11-15/meilisearch && ./meilisearch --db-path ./data.ms --http-addr 127.0.0.1:7701 --env development --no-analytics`
Production use would need a master key + Douglas's go — not set up here.

## Undo / reversibility
- Undo manifest (BEFORE any install attempt):
  `~/workspace/big-builds-2026-11-15/dpkg-selections-before-meilisearch-2026-11-15.txt` (783 selections)
- No packages were installed, so no purge is needed.
- Full undo = delete this folder (`meilisearch/`) — that removes binary, data, logs, proofs.

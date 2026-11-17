# Master Cache — persistent, portable, AI-queryable (built Nov 8, 2026)
- master_cache.db: SQLite + FTS5 over Douglas's archive (your_files + goal files, text formats only). 825 documents at first build, 17.4 MB (under GitHub's 50 MB warning line).
- master_cache.py: the builder/query tool (Python stdlib only). `python3 master_cache.py` = incremental rebuild (hash-compared; unchanged files skipped). `python3 master_cache.py search "terms"` = full-text search.
- DERIVED-ARTIFACT RULE (Gemini consult, Nov 8): the .db is never hand-merged. On any conflict or doubt, delete it and rebuild from the files — the files are the truth, the cache is their shadow.
- Exclusions are baked into the builder: no Cara material, no gearhead/password material, no hidden_files, no binaries/PDFs — so no lab PDFs and no identifiers can ride inside this cache.
- Assimilation: Ember queries this cache first (whole-archive recall in milliseconds), then opens the original file for anything she quotes — the cache recalls, the original rules.

# Classroom Pack 11 — ripgrep and find Pipelines (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/`. Evidence is actual recorded output.

***

## What they are

- **ripgrep (rg) 14.1.0** — recursive text search that respects ignore rules and runs far faster than grep -r on trees.
- **find** — the filesystem walker: locates files by name, type, and shape, and feeds them into pipelines (`-exec`, `| sort`, `| xargs`).

Together they are the "locate, then process" pair: find names the files, rg searches their contents, and either can hand results to the next tool (jq, awk, wc).

## Core commands learned

- `rg 'ERROR' file` — matching lines with line numbers
- `rg -c 'WARN|ERROR' file` — alternation count
- `rg --files` — fast file listing of a tree
- `rg -i 'rabbit'` — case-insensitive search
- `find . -type f | sort` — full tree inventory
- `find data -name "*.txt"` — name-pattern selection
- `find . -name "*.json" -exec jq -r .ship {} \;` — find feeding jq, the pipeline pattern

## Exercises — evidence

1. **rg ERROR search** over `data/log.txt` → exactly the two ERROR lines, **lines 3 and 6** ("tunnel failed in chromium", "none shall pass").
2. **rg count** `WARN|ERROR` → **4**.
3. **rg case-insensitive** `rabbit` → matched the crew records regardless of case.
4. **find full inventory** of the scratch tree → 24 files across `data/`, `media/`, `pydata/`, `rsync-a/`, `rsync-b/`, `src/`.
5. **find + jq pipeline** → both JSON files in the tree yielded their ship object: `{"course": 3372, "mark": 46648, "name": "Rodentia"}`.

## Safety flags

- Search is read-only; the danger is only in what a pipeline does with the results. Any `-exec` that writes or deletes goes through the Guard and the check-before-touching rule first.
- rg on the real workspace: fine for reading; never pipe its output into a destructive command.

## Verdict

**Learned.** rg replaces grep as the default search lane; find + one consumer per pipeline is the standard locate-and-process shape.

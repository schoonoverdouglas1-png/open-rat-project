© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 9 — jq and JSON Fluency (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST ("Make the tools yours"). Every command line Guard-checked through `~/workspace/ember-upgrades/guard/check-command.sh` before running; practice only in `~/workspace/scratch-tools-practice/`. Evidence below is actual recorded output, not illustration.

***

## What it is

**jq 1.7** — a command-line JSON processor. JSON is the shape of nearly everything Ember touches: connector payloads, config files, cache records, API replies. jq is the cheapest first lane for all of it — a small C tool that reads, filters, and reshapes JSON in a pipeline without loading anything into a heavier runtime.

## Core commands learned

- Identity and field access: `jq .`, `jq .ship`, `jq -r .name` (raw output, no quotes)
- Iteration and filtering: `jq '.crew[] | select(.active) | .name'`
- Lookup by value: `jq '.crew[] | select(.role=="rabbit") | .title'`
- String interpolation: `jq -r '"\(.ship.name) course \(.ship.course) mark \(.ship.mark)"'`
- Object construction and arithmetic: building new objects with `{course: .ship.course, ..., total: (.ship.course + .ship.mark)}`
- Transform and write: piping a jq transform into a new file (`checked.json` with `checked: true` added)

## Exercises — evidence (scratch data: `data/sample.json`, crew of Ember / Snowball / Douglas / Leo, ship Rodentia, course 3372, mark 46648)

1. **Active-name extraction** → `Ember`, `Snowball`, `Douglas` (Leo listed not-active).
2. **Role lookup** → the rabbit's role reads `"Lt. Commander"`.
3. **Interpolation** → `Rodentia course 3372 mark 46648`.
4. **Constructed object** → `{"course": 3372, "mark": 46648, "total": 50020}`.
5. **Transform + write** → `data/checked.json` created with `checked: true`; the original `sample.json` was not modified.

## Safety flags

None beyond the standing rules: jq is read/transform only; writes went to scratch copies. jq on real workspace files stays read-only unless the Captain orders a transform.

## Verdict

**Learned.** jq is now the default first lane for JSON on this box, ahead of Python, for RAM and token economy.

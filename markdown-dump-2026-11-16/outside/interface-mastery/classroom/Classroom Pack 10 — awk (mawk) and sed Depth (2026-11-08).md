© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Classroom Pack 10 — awk (mawk) and sed Depth (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/`. Evidence is actual recorded output.

***

## What they are

- **awk** — pattern-scanning and field arithmetic on structured text. **The awk on this box is mawk 1.3.4 (20240123)** (`/usr/bin/awk` → `/usr/bin/mawk`), NOT gawk. This pack is written against mawk's real limits.
- **sed** — the stream editor: line selection, substitution, and careful in-place edits on copies.

## Core skills learned

**awk:** field printing (`{print $1, $2}`), CSV aggregation with a field separator, counting by condition, `END`-block totals and averages.
**sed:** line-range printing (`-n '2,4p'`), substitution (`s/active/ACTIVE/`), pattern printing (`-n '/ERROR/p'`), in-place edit (`-i`) on a scratch copy only.

## Exercises — evidence

1. **awk CSV aggregate** over `data/nums.csv` (alpha 10, beta 25, gamma 7, delta 42) → **total 84, avg 21**.
2. **awk active count** over `data/crew.txt` → **3**.
3. **⚠ mawk limit, proven live:** `strtonum("0x10")` → **`function strtonum never defined`, exit 2**. strtonum is a gawk-only function; any script written for gawk that uses it will fail here. Filed as the standing caveat for all future awk work on this box.
4. **sed line range + substitution** → lines printed in range; `active` rendered `ACTIVE`.
5. **sed in-place on a scratch copy** (`data/crew2.txt` / log copy) → `resting` became `RESTING`; the original file was untouched.

## Safety flags

- `sed -i` writes files: scratch copies only in practice; on real files it is a change like any other and follows the check-before-touching rule.
- Never write awk assuming gawk. Test on mawk first.

## Verdict

**Learned, with the mawk caveat carried forward.** awk + sed cover most field-and-line work at near-zero memory cost.

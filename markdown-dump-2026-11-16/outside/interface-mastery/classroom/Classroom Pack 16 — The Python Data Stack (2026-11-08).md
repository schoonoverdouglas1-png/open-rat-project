# Classroom Pack 16 — The Python Data Stack: venv + pandas / numpy / scipy / matplotlib (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/`, on a 4-row CSV. Evidence is actual recorded output. Versions: **pandas 2.1.4, numpy 1.26.4, scipy 1.11.4, matplotlib 3.6.3**.

***

## What they are

- **venv** — an isolated Python environment: its own interpreter link and package set, so experiments never touch the system Python the box depends on.
- **pandas** — tables with labels (DataFrame): read a CSV, describe it, aggregate it.
- **numpy** — the numeric array underneath everything: mean, standard deviation, median.
- **scipy** — the statistics shelf: here, linear regression and the normal distribution.
- **matplotlib** — plots; on a headless box, the **Agg backend** renders to a file, never a window.

## Core skills learned

- `python3 -m venv venv`, then proving isolation via `sys.executable` / `sys.prefix`, and `venv/bin/pip list`
- `pandas.read_csv`, `.describe()`, column sums
- numpy aggregates over the same column — cross-checking pandas, because two tools agreeing is worth more than one tool asserting
- `scipy.stats.linregress`, `scipy.stats.norm.pdf`
- matplotlib with `matplotlib.use("Agg")` → `savefig()` to PNG

## Exercises — evidence (data: `data/nums.csv` — alpha 10, beta 25, gamma 7, delta 42)

1. **venv lifecycle, complete** → created (exit 0); identity check printed the scratch paths for both `sys.executable` and `sys.prefix` — isolation proven, not assumed; `pip list` showed only **pip 24.0**; the venv was then **removed inside scratch after its command line passed the Guard** (removal verified: the directory is gone). Nothing outside scratch was touched at any point.
2. **pandas read + describe** → the 4-row table read correctly; **mean = 21.00, sum = 84**.
3. **numpy cross-check** → **mean 21.00, std 13.9104, median 17** — pandas and numpy agree on the mean; the awk total from Pack 10 (84) agrees with both. Three lanes, one number.
4. **scipy regression** → **slope 7.80, intercept 1.50, r = 0.6269**; normal pdf at the mean = **0.0287**.
5. **matplotlib artifact** → `pydata/plot.png` saved, **9,036 bytes** — a real file on disk, verified by listing, not by the script's say-so.

## Safety flags

- venvs are cheap to make and easy to forget: create in scratch, remove in scratch, never let one grow teeth in a deliverables tree.
- The data stack is the heavy lane on a memory-bound box: small data only in practice; real analysis runs scoped (Pack 12's MemoryMax wrapper) when the data grows.

## Verdict

**Learned.** venv discipline plus the four-library stack, with the cross-checking habit (pandas vs numpy vs awk) as the real takeaway.

© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# XML as a Processing Table — How It Works

**Built and proven Nov 16, 2026, at Douglas's order ("figure out how to use XML as a processing table so you can be smarter yet").**

## The idea
A table is rows and columns. In XML, each **row** is one repeated element and each **column** is a labeled child inside it:

```xml
<row><company>Google</company><percent>22</percent><what>Gemini lane, Android…</what></row>
```

The labels ARE the column names — the data arrives already dressed, formal and unmistakable, the way the Director ordered files kept. Nothing can drift into the wrong column silently, because every value carries its name with it.

## The processing
`query_table.py` (Python standard library only, no installs) reads the XML and works it like a table:
- **ORDER BY** — sorts rows by percent, biggest first
- **WHERE** — filters (percent ≥ 20 → 2 rows)
- **SUM** — totals a column

Proven live on `borrowed_code.xml` (the 100%-to-0 list): 6 rows read, sorted Meta 100 → illegal 0, filter and total correct.

## Why it makes the work smarter
1. **Self-describing** — a row read alone still says what every value is; no header row to lose.
2. **Both channels** — a human can read the raw file; a machine can process the same file. One file, dual channel, per the both-channels doctrine.
3. **Strict shape** — malformed XML fails loudly at parse time instead of corrupting quietly downstream (the machine-format danger named Nov 16, 2026).
4. **Nests where flat tables can't** — a cell can itself hold a small table (a serotype row holding its co-pathogen rows), which is the shape of Douglas's medical cross-reference work.

## Simply put
XML is a spreadsheet where every cell wears a name tag. Ember reads the tags, lines the rows up, and does table math on them — sorting, picking, adding — with nothing able to slip into the wrong column unnoticed.

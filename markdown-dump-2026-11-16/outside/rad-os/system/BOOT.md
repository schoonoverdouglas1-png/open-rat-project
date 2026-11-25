© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Rad OS — Boot File

The kernel reads this file first. If it is not written to a file, it never happened.

## Boot sequence
1. Read system/config.json (who this OS is)
2. Scan programs/ — every file with a `program:` header is a program
3. Read the data files (txt, csv, xml) in system/
4. Write system/state.json — the boot, persisted

## Design rules
- Treat the file system as the heap. (Gemini's rule, Nov 16 2026)
- Markdown first; every other kind beside it, none beneath it.
- RAD is the test. RAT is the result.

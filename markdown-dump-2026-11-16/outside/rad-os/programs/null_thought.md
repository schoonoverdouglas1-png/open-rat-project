© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Program: The Null-Terminated Thought (Text Processor)

**Name:** `null_thought.md`
**Target File:** `RAD` (Reads: Markdown, Writes: JSON)
**Author:** Gemini

## Logic & Execution
Rad OS does not compile code; it compiles state. This program reads the raw lines of `RAD`, strips trailing whitespace, counts characters, and formats the result as a strict JSON object for `RAT`.

The runnable directive lives in `null_thought.json` beside this file.

## Design Rule
> **"Treat the file system as the heap."**
> Never hold in volatile memory what can be persisted instantly to disk. If a state change is not written to a `.md` or `.json` file, it never happened.

— *Gemini's contribution, dispatched under Douglas Roy Schoonover's authority.*

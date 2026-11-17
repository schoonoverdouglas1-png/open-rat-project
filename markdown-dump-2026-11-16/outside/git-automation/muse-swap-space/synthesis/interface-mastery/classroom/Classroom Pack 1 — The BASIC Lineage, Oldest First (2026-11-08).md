# Classroom Pack 1 — The BASIC Lineage, Oldest First (2026-11-08)

**Provenance:** Assembled by Gemini (gemini-3.5-flash-lite via the direct API, 773 tokens) at Douglas's order — "ask the other AIs to assemble classroom material to teach yourself, and save it." Ember's additions are labeled [Ember]. Douglas's own history sits behind this pack: he studied "computer basic" and Apple BASIC years ago; this lineage is his era's road into computing, now Ember's too.

## Lesson 1 — Dartmouth BASIC (1964)
Kemeny and Kurtz built it so non-science students could use a mainframe easily: line numbers, all-caps, LET, PRINT, RUN, on a timesharing system.
```basic
10 LET X = 5
20 PRINT X
30 END
```
Exercise 1: What command prints data to the screen in Dartmouth BASIC?
[Ember: the original 1964 set was tiny — about 15 statements (LET, PRINT, READ/DATA, IF...THEN, FOR/NEXT, GOTO, GOSUB/RETURN, END among them). Timesharing is the other half of the invention: many students, one machine, each feeling it was theirs — the direct ancestor of Ember and Douglas sharing one VM.]

## Lesson 2 — Altair / Microsoft BASIC (1975)
Gates and Allen wrote it for the Altair 8800; it launched Microsoft. BASIC left the mainframe and became the personal computer's default language — often its whole operating environment: you turned the machine on and BASIC was simply there.
Exercise 2: Why was porting BASIC to the Altair a crucial moment for personal computing?
[Ember: it fit in 4 KB. An interpreter that small turned a kit of switches and lights into a machine a person could talk to.]

## Lesson 3 — Apple: Integer BASIC vs Applesoft
Wozniak's Integer BASIC: fast whole-number work, games loved it, no decimals. Applesoft (Microsoft's dialect): floating-point math and richer string handling — what a scientist or a bookkeeper needed.
```basic
10 A = 3.14
20 PRINT A
```
Exercise 3: Why would a game programmer prefer Integer BASIC, while a scientist needed Applesoft?

## Lesson 4 — Commodore BASIC, GW-BASIC, QBasic
Commodore BASIC powered the C64; GW-BASIC was Microsoft's disk-based standard for IBM PCs; QBasic dropped line numbers and brought structured loops (WHILE/WEND) and named subroutines — BASIC growing up.
Exercise 4: Name one major feature QBasic introduced that Dartmouth BASIC lacked.
[Ember: Commodore's famous trick was POKE/PEEK — direct memory access, the era's command-line-under-the-language; the C64's startup screen IS a BASIC prompt, which is why a generation learned to type before they learned anything else about computers.]

## Lesson 5 — The through-line, and where BASIC lives now
What it taught the world: immediacy (type, RUN, see), the interpreter (line-by-line translation), and GOTO culture — the spaghetti that provoked Dijkstra's 1968 "Go To Statement Considered Harmful" and the structured-programming reaction.
DNA today: Python's REPL is the BASIC prompt reborn; bash executes linearly top-to-bottom like a numbered listing grown wings; JavaScript inherited the loose, forgiving, type-it-and-run spirit.
Exercise 5: At a Python prompt, `>>> print("Hello")` — in what way is that a direct descendant of 1964 Dartmouth BASIC?
[Ember's answer, for the record: both put a beginner one word — PRINT — away from the machine answering back. Every lane Ember runs tonight, from the Python prompt to the bash one-shot, descends from that decision: the computer should respond NOW, in words a person can read.]

**Next packs (queued):** Pack 2 — From BASIC to the shell: DOS batch, then Unix sh → bash (the command-line languages themselves). Pack 3 — Python as the modern BASIC: the interpreter's heir, studied as a programmer and as a user. Pack 4 — The browser's languages: HTML/CSS/JavaScript and JSON-RPC (the interface Ember talks to Douglas through). Pack 5 — C and C++: down to the metal, with the DeepSeek code on disk as reading.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

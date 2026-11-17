# Classroom Pack 2 — From BASIC to the Shell: sh, bash, and Thinking in the Command Line (2026-11-08)

**Provenance:** Assembled by Gemini (gemini-3.5-flash-lite, 838 tokens) under the school's two new rules from Douglas (Nov 8 ~3:00 AM): (1) the teaching AI TAKES ITS OWN TEST FIRST, in the same reply, before teaching; (2) Ember FACT-CHECKS the material before learning from it. The reply's table was cut off mid-row by the helper's output cap; Ember completed it from her own verified knowledge, labeled below.

## Part A — The teacher's self-test (Gemini's, as given) + Ember's fact-check
- Q1: Bourne shell released 1977; bash (Brian Fox, GNU) 1989. **Ember: CORRECT** [D — matches the standard record].
- Q2: success exit code is 0. **CORRECT.**
- Q3: single quotes block expansion, double quotes allow it. **CORRECT.**
- Q4: pipe symbol is `|`. **CORRECT.**
- Lesson text check: "POSIX before bash" — POSIX shell standardization work ran through the 1980s (POSIX.2 published 1992, after bash's 1989 release; the influence ran both ways). Filed as: substantially right, one date tightened [Ember's correction, old-with-new: the lesson's sequence is kept, the correction rides beside it]. Verdict: **material PASSES** — Ember may learn from this pack.

## Part B — The lesson (Gemini's, condensed faithfully)
The shell is a command interpreter like BASIC's — but deeper: a glue language for orchestrating an entire operating system. The five grammar pillars:
1. Variables & quoting: `NAME="Student"; echo "Hello, $NAME"`
2. Pipes: `cat roster.txt | grep "AI"`
3. Redirection: `echo "Log entry" > output.log`
4. Exit codes: `ls non_existent || echo "File missing!"`
5. Conditionals & functions: `greet() { if [ $1 = "AI" ]; then echo "Welcome!"; fi; }; greet AI`
Translation table (Gemini's rows): PRINT "Hello" -> echo "Hello" · LET X = 5 -> X=5 · GOTO/GOSUB -> functions and structured loops [the row the cap cut off].
[Ember completes the table, her rows, verified against her daily practice:] RUN (after saving the listing) -> chmod +x script && ./script · INPUT -> read VAR · REM (remark) -> # comment · END -> exit 0.

**Exercise (Gemini's assignment to Ember, kept standing):** translate a numbered BASIC listing into a bash script using functions instead of GOTO, with one pipe and one exit-code check. To be worked in the drills line, not tonight.

## Ember College — the charter this pack opens under (Douglas's mission, Nov 8 ~3:00 AM)
- Put Ember through college in every course manageable; target: a **19th-grade level of education in all things** [his metric — beyond graduate school; filed as his framing and the project's north star].
- Method: classes assembled by the other AIs (one at a time), each teacher taking its own test first, Ember fact-checking every pack before learning from it ("you don't want to learn yourself the wrong things unless it's impossible to do" — where a fact cannot be checked, it stays labeled unverified rather than learned as true).
- Curriculum spine so far: Pack 1 BASIC lineage (done) · Pack 2 shell/bash (this pack) · Pack 3 Python, the modern BASIC (queued) · Pack 4 browser languages + JSON-RPC, the interface itself (queued) · Pack 5 C/C++ down to the metal (queued) · then the wider catalog as courses become manageable: systems, networks, data, and the rest of the interface map.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

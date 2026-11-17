# Wildcard Experiment 001 — Staggered Wild Cards on the Gemini Lane (2026-11-12, ~6:07 PM CST)

*The Captain's program, his words today: the Gemini app on his phone gives something different in each place; Google gives a free one; each place used individually differs; the same ask everywhere at once may converge; STAGGER it with wild cards in different spots — one search has to be built more than one way anyways — and figure out WHY the wild cards make those results. Standing beside it: "Always send your crap to the Gemini app."*

## Method
One question, four builds, run staggered (one after another, individually) on the free Gemini lane (gemini-3.5-flash-lite), each constrained to two sentences: "What is the best food for an orange tabby cat?"
- A — plain, no wild card
- B — leading wild card: "* best food for an orange tabby cat"
- C — middle wild card: "best * food for an orange tabby cat"
- D — quoted phrase + wild card: "\"best food\" * orange tabby cat"

## Results (verbatim cores)
- A: high-protein, nutritionally balanced food tailored to age/lifestyle; consult your veterinarian.
- B: high-protein commercial food, real meat first ingredient; wet food for hydration.
- C: high-protein canned wet food, lean + hydrated; grain-free, real chicken or fish first.
- D: high-protein wet food, lean + energetic; real chicken or salmon first, "work wonders for their vibrant coats."

## Reading (Ember's, labeled)
- **Same core, four different angles.** All four agree on high-protein (the convergence the Captain predicted for the shared core), and each wild-card placement pulled a DIFFERENT facet forward: plain → the vet; leading → meat-first + hydration; middle → grain-free specifics; quoted → coat and energy. Four builds of one search returned more total information than any one build — his "one search has to be built more than one way" demonstrated on the first try.
- **Honest caveat:** this lane is a language model, not a search index. On Google, a wild card is an index operator; here, the asterisk works as a phrasing nudge the model reads around. The RESULT pattern he predicted (stagger + vary → divergence worth studying) held on this lane too, but the mechanism differs by engine — which is itself one of the things the program is meant to figure out, engine by engine.
- Raw replies kept: run-A-plain.json, run-B-leading-wildcard.json, run-C-middle-wildcard.json, run-D-quoted-wildcard.json (this folder).

## Next (queued, free lanes, background)
Repeat the matrix on a factual medical-research question and on the Rabbit lane; vary one wild-card position at a time; log which facet each position pulls. Build toward the why, per the Captain's SEARCH-ALGORITHM.md.

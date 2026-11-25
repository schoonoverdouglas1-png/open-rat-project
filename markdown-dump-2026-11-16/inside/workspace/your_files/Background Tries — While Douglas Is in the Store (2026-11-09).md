© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Background Tries — While Douglas Is in the Store (2026-11-09)

**Order (Douglas, ~7:47 PM CST, spy-mode call):** "Go and try background things that you wanted to try based upon having time to do it while I'm walking in the store."
**Scope kept:** free lanes only, read-only/dry-run, nothing installed, nothing sent anywhere, Guard applied. Run by Ember (subagent pass) the same evening.
**Provenance labels:** every result below is labeled [RUN] (a command Ember ran and read back), [FREE-LANE] (output of a free Google model, quoted verbatim), or [EMBER] (Ember's own synthesis).

---

## 1. Back-end lanes health check — [RUN]

Command: `bash ~/workspace/ember-upgrades/backend-lanes.sh` — exit 0. Full verdict, verbatim:

```
== Lane 1/3: box + purple rat sync ==
synced: workspace -> tmp
352634e239c967ed2206f0240664f7f4  /tmp/purple rat
352634e239c967ed2206f0240664f7f4  /home/hatch/workspace/purple rat
== Lane 2: Full Cache ==
901120 /home/hatch/workspace/headless-browser/ember_index.db
== Lane 4: free Google models ==
{"model_count": 50, "models": ["models/gemini-2.5-flash", "models/gemini-2.5-pro", ...]}
== Lanes 5-7: Rabbit (combined sends only, 20/hr cap) / MotherDuck (token pending, Douglas's hand) / Paid Ember (last) — no automated action taken ==
```

Read-out: purple rat copies **in sync** (identical checksums); **Full Cache present** at `~/workspace/headless-browser/ember_index.db` (size as printed: 901120); **50 free Google models** listed. Lanes 5–7 took no automated action, as designed.

## 2. "Purple rat" scratch-buffer sync — [RUN]

Command: `bash ~/workspace/purple-rat-sync.sh` — result: `synced: tmp -> workspace`.
Checksums after sync (Ember's own md5sum/sha256sum readback):
- `/tmp/purple rat` — md5 `352634e239c967ed2206f0240664f7f4`, sha256 begins `02d1e0d4d8828921`
- `~/workspace/purple rat` — md5 `352634e239c967ed2206f0240664f7f4`, sha256 begins `02d1e0d4d8828921`
- **Both copies identical** — the buffer is in sync.

## 3. Free-lane experiment — one prompt, two lanes, 1024 cap — [FREE-LANE]

Method [RUN]: `python3 ~/workspace/custom-connectors/custom.google-gemini/bin/gemini_call.py generate "<prompt>" <model>` (helper's built-in maxOutputTokens = 1024). Zero Muse allotment spent.
**Identical prompt sent to both:** "In five sentences: what is a finding-aid summary cache, and how does it differ from a full-text cache? Label your answer (fact), (guess), or (don't-know) per sentence."

**Lane status:** gemma-4-26b-a4b-it — **answered** (no error). gemini-3.5-flash-lite — **answered** (no error). No 404 / 429 / 500 on either lane this run.

### 3a. gemma-4-26b-a4b-it — verbatim reply [FREE-LANE]

(Usage: promptTokenCount 45, totalTokenCount 1067, thoughtsTokenCount 1022 — it spent most of the cap on visible working-draft thinking and the reply ends mid-deliberation; quoted exactly as returned.)

> *   Topic: Finding-aid summary cache vs. full-text cache.
> *   Constraint 1: Exactly five sentences.
> *   Constraint 2: Label each sentence as (fact), (guess), or (don't-know).
>
>     *   *Finding-aid summary cache:* This usually refers to a mechanism in archival or library systems (like ArchivesSpace or similar) where metadata/summaries of finding aids are indexed or cached to speed up searching/browsing without loading entire large files.
>     *   *Full-text cache:* This refers to indexing the entire content of the documents or finding aids to allow for granular keyword searches throughout the text.
>     *   *Difference:* Summary cache is lightweight/metadata-focused for quick browsing; full-text cache is heavy/content-focused for deep searching.
>
>     *   Sentence 1: Define finding-aid summary cache.
>     *   Sentence 2: Define full-text cache.
>     *   Sentence 3: State the primary difference in scope.
>     *   Sentence 4: State the primary difference in performance/purpose.
>     *   Sentence 5: Contrast the level of detail indexed.
>
>     *   *Sentence 1:* A finding-aid summary cache stores condensed metadata or brief descriptions of archival collections to facilitate rapid browsing. (Fact)
>     *   *Sentence 2:* In contrast, a full-text cache indexes the complete, unabridged text within the finding aids or the documents themselves. (Fact)
>     *   *Sentence 3:* The summary cache is designed for speed and low resource usage during high-level searches. (Fact)
>     *   *Sentence 4:* The full-text cache provides much deeper granularity but requires more storage and processing power. (Fact)
>     *   *Sentence 5:* Therefore, the difference lies in whether the system is retrieving high-level descriptors or the literal contents of the archival records. (Fact)
>
>     *   *Self-Correction:* I need to make sure I'm not "guessing." These are standard database/archival management concepts. If I weren't 100% sure about a specific proprietary software implementation, I'd label it (guess), but the general computing/archival concept is factual.
>
>     *   S1: A finding-aid summary cache stores lightweight metadata and brief descriptions of archival collections to speed up initial search results. (fact)
>     *   S2: A full-text cache indexes the entire body of text contained within those finding aids or related documents. (fact)
>     *   S3: The main difference is that a summary cache prioritizes browsing speed and minimal resource consumption. (fact)
>     *   S4: Conversely, a full-text cache prioritizes granular searchability by allowing users to find specific keywords buried deep within documents. (fact)
>     *   S5: While a summary cache offers a high-level overview, the full-text cache enables exhaustive content-based discovery. (fact)
>
>     1. A finding-aid summary cache stores lightweight metadata and brief descriptions of archival collections to speed up initial search results. (fact)
>     2. A full-text cache indexes the entire body of text contained within those finding aids or related documents. (fact)
>     3. The main difference is that a summary cache prioritizes browsing speed and minimal resource consumption. (fact)
>     4. Conversely, a full-text cache prioritizes granular searchability by allowing users to find specific keywords buried deep within documents. (fact)
>     5. While a summary cache offers a high-level overview, the full-text cache enables exhaustive content-based discovery. (fact)
>
>     *Check count:* 5 sentences.
>     *Check labels:* All labeled.
>     *Check content:* Accurate.
>
>     *Wait, let me double-check if there's a specific technical niche I'm missing.* In some specialized archival software contexts, these terms are very specific. However, the general meaning holds. I will stick to (fact) because these are foundational concepts in indexing/caching.
>
>     *Drafting final version:*
>     1. A finding-aid summary cache stores condensed metadata and brief descriptions to facilitate rapid browsing of archival collections. (fact)
>     2. A full-text cache indexes every word contained within the complete text of the finding aids or their associated documents. (fact)
>     3. The primary difference is that a summary cache is optimized for high-level discovery and speed. (fact)
>     4. A full-text cache is optimized for deep, granular searches that target specific phrases or keywords. (fact)
>     5. Essentially, the summary cache provides the "what" and "where," while the full-text cache provides the "exactly what is inside." (fact)
>
>     *Wait, I should check

### 3b. gemini-3.5-flash-lite — verbatim reply [FREE-LANE]

(Usage: promptTokenCount 45, candidatesTokenCount 177, totalTokenCount 222 — finished cleanly, inside the cap.)

> 1. (fact) A finding-aid summary cache is a specialized digital storage mechanism that retains pre-computed abstracts, cataloging metadata, and high-level descriptions of archival collections to speed up retrieval times.
> 2. (fact) This type of cache only stores structured summaries and descriptive overviews rather than the complete, unedited text of every underlying document.
> 3. (fact) In contrast, a full-text cache stores the entire, verbatim text of all documents within a system to allow for comprehensive keyword searching and deep-content indexing.
> 4. (fact) Consequently, a summary cache requires significantly less storage space and memory bandwidth than a full-text cache while still providing users with quick directional context.
> 5. (guess) Archivists likely prefer implementing summary caches alongside full-text caches to balance rapid initial discovery with deep archival exploration.

### 3c. Comparison — [EMBER] synthesis, two lines

Both lanes agreed on the substance — summary cache = light metadata for fast browsing, full-text cache = complete verbatim text for deep search — which matches Douglas's own two-cache design (Summary Cache as finding-aid, Full Cache as the original works).
The difference was discipline: flash-lite delivered exactly five labeled sentences in 222 tokens (and honestly marked its one inference a (guess)), while Gemma burned 1,022 of its 1,024 tokens deliberating in the open and never landed a single clean final answer — same facts, very different cost shape.

## 4. Deliberately NOT done — [RUN, by scope]

- **SearXNG: not installed** — still downloaded-only at `~/workspace/ember-upgrades/repos/searxng`, awaiting Douglas's explicit install go.
- **Nothing sent** to any person or AI chat; **MotherDuck untouched**; no credentials read or used beyond the Gemini helper's own surrogate-credential route; no account touched; no destructive command run (Guard).

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

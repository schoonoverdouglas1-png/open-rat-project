© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Analysis — Enhanced Layout and Deep Analysis, Duck.ai Serotype and Disease Groupings
## Ember's Analysis, Written by Ember, November 4, 2026

**What this is:** The enhanced layout and deep analysis Douglas asked for Nov 4, ~6:43 PM, taking all of what was just put together in the Duck.ai experiment — 7 runs, 6 distinct models, 1 repeat — and putting the fragments together so they make sense as one coherent whole.
**What it is NOT:** It is not a rewrite of deep research, not a new vaccine list, and not a medical recommendation. Deep research on file remains the comparator. Disease patterns from the models remain unverified where they disagree.
**Provenance:** Douglas's grouping summary (supplied in the prompt) · Nov 4 deep research (pneumococcal vaccines and serotypes) · 7 Duck.ai runs, Nov 4, 6:34–6:41 PM CST, listed in §1 · Ember's own analysis, labeled as hers in §7 and throughout where she judges.
**Method:** Research Logic & Evidence Framework §7 — direct answer, what the source says, comparison, what can be concluded, what cannot yet be concluded, next verification. Tiers: [D] documented · [H] his · [H→D] his with documented foothold · [PARTIAL] · [SINGLE-SOURCE] · [GAP] · [LOGIC] Ember inference.

---

## Simply put — the whole thing in one paragraph

Pneumococcus has more than 100 capsule types, called serotypes. Those serotypes are grouped by how their capsules react to antisera — those are serogroups, and they are not the same as genetic families. Vaccines pick specific serotypes, not whole serogroups, so being in the same serogroup does not mean a vaccine protects you against the whole group. Diseases — pneumonia, meningitis, ear infections, invasive disease — are what happens in a person, in a place, at a time, after vaccination changed what was circulating. That is why the models agree on the structure and disagree on the disease lists: the structure is stable, the disease lists move with place and time.

---

## Contents

1. The experiment, in one table
2. The five groupings that must never be collapsed
3. Consensus — what held across all models
4. Disagreement matrix — disease patterns, model by model
5. Breaks, open items, and single-source items
6. What we usefully learn through the AI experiment
7. Ember's deep analysis — her own judgment, labeled as hers
8. What can be concluded / what cannot yet be concluded / next verification
9. Sources and files

---

## 1. The experiment, in one table

All runs: one prompt each, no sign-in, no account, no personal medical upload. Prompt supplied: 32-serotype union, PN23M list, serogroups 9, 33, 6, 15, 20, disease groupings pneumonia / meningitis / otitis media / invasive disease, parallels meningococcus, Hib, Salmonella, E. coli, Cryptococcus, GBS, measles as contrast, with the guardrail: distinguish molecular, antigenic, and vaccine commonality, do not assume cross-reactivity from molecular similarity alone.

| # | Model actually used | Time (CST, measured) | Web Search? | Chat link, as reported |
|---|---|---|---|---|
| 1 | Gemma 4 31B | 6:34–6:36 PM | Yes, enabled for that chat only | — (first run, no chatID in report) |
| 2 | GPT-6 Luna | 6:37–6:39 PM | Yes, ON | — |
| 3 | Claude Haiku 5.5 — substituted, Haiku 4.5 not in selector | 6:37–6:38 PM | Yes, 2 queries | https://duck.ai/?chatID=e28a0e2f-4e8b-402f-8277-28bb81d38120 |
| 4 | Mistral Small 4 | 6:37–6:38 PM | **No — NOT available for this model, disabled** | https://duck.ai/?chatID=3398f3cd-b8a6-4a21-80d5-09d3a3e594ce |
| 5 | gpt-oss 120B | 6:37–6:38 PM | Yes | https://duck.ai/?chatID=dba312fd-48bf-4746-b6b4-871da48e6056 |
| 6 | GPT-5.4 mini | 6:37–6:38 PM | Yes | — |
| 7 | Gemma 4 31B (repeat) | 6:37–6:41 PM | Yes, per-chat confirmation | — |

**Feature finding, before any science:** Web Search availability varies by model on Duck.ai. Six runs had it, Mistral did not. That alone explains part of why Mistral's answer was weaker and broke on vaccine progression. A model without search is answering from memory, not from a checked source, in that run.

---

## 2. The five groupings that must never be collapsed

This is the key that makes the fragments make sense. GPT-6 Luna stated it most clearly, and all other models support it in substance. Douglas's own standing rule — six tracks, never collapsed (vaccines, viruses, diseases, illnesses, sicknesses, infections) — is the same discipline, applied here to pneumococcus.

| Grouping | What it is | What it is NOT |
|---|---|---|
| **1. Serotype** | A capsule type, defined by capsular polysaccharide antigen | Not a genetic lineage, not a disease, not a vaccine |
| **2. Serogroup** | A family of serotypes whose capsules react similarly to antisera — antigenic clustering | Not a genetic cluster, not a guarantee of cross-protection |
| **3. Genetic lineage** | DNA / cps-locus / MLST / clonal complex — who the bacterium is related to | Not the same as serogroup; one serotype can occur in multiple lineages, capsule switching is possible |
| **4. Vaccine coverage** | The specific serotypes actually included in a formulation, and demonstrated protection for those serotypes | Not whole serogroups, not similarity, not a disease list |
| **5. Disease syndrome** | What happens in a person, in a defined population and period: pneumonia, meningitis, otitis media, invasive disease (sterile site), bacteremia, sepsis | Not a property of a serotype alone; it moves with age, place, time, and post-vaccine era |

**Why confusion happens:** Most short definitions collapse 1 + 2 + 4 + 5 into one word — "serotype disease." Separate them, and the contradictions in the model answers mostly disappear: they were answering different groupings with the same words.

---

## 3. Consensus — what held across all models

| Claim | Tier | Notes |
|---|---|---|
| Serotypes are antigenic capsule types, not genetic lineages | [D] | Deep research + all 7 runs |
| Serogroups are antigenic, not genetic, clusters | [D] | All 7 runs |
| Vaccine inclusion is serotype-specific | [D] | All 7 runs; PCV7 included 6B not 6A, 19F not 19A (Mistral example) |
| Molecular similarity does NOT prove antigenic identity or clinically meaningful cross-protection | [D] | All 7 runs; Framework §6 guardrail: never jump category 3 (shared monosaccharide only) to 6/7 (human/licensed protection) |
| Serogroup 9 = 9A, 9L, 9N, 9V | [D, with 9L caveat in Claude] | All runs where given; Claude did not verify 9L by search |
| Serogroup 6 = 6A, 6B, 6C, 6D, 6F, 6G, 6H, 6E refuted | [PARTIAL] | All runs where given; 6E refutation NOT verified by search in Claude / Gemma repeat — accepted as supplied premise there |
| Serogroup 15 = 15A, 15B, 15C, 15D | [D, with interconversion caveat] | Claude: 15 members interconvert, difficult to distinguish; Gemma: 15B/15C cross-reactivity possible, not universal |
| Serogroup 20 = 20A, 20B, 20C | [D, with split caveat] | Claude: 20 split into 20A/20B after serologic variability |
| Serogroup 33 = 33F, 33A, 33B, 33C, 33D, plus 33E/G/H in newer work | [PARTIAL] | GPT-6 Luna: 33G only as newly characterized, insufficient to validate full list; Gemma runs: 33E/G/H distribution not verified by search |
| PN23M is a 23-serotype antibody test panel, not a vaccine or disease classification | [D] | GPT-6 Luna, GPT-5.4 mini sourcing challenge, Mayo panel code on file; list: 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, 33F |
| Union 32, as a calculated union across PCV7/13/15/20/21 + PPSV23 | [LOGIC, calculation] | Accepted as arithmetic by Gemma, gpt-oss, Mistral, Claude; challenged on sourcing by GPT-5.4 mini and GPT-6 Luna — see §5, item 1. It is NOT a canonical source quote. |
| Parallels are conceptual only, not interchangeable taxonomies | [D, in general] | Meningococcus A/B/C/W/Y/X, Hib a–f, Salmonella serovars, E. coli O:H, Cryptococcus A/B/C/D/AD, GBS Ia–IX, measles single-serotype contrast |

---

## 4. Disagreement matrix — disease patterns, model by model

**Read this table as: different populations, periods, and post-vaccine eras, not as one model being "right" and the others "wrong."** Where a cell is blank, that model gave no list for that disease in its summary.

| Disease | Gemma 1st | gpt-oss 120B | Mistral Small 4 | Claude Haiku 5.5 | GPT-6 Luna | Gemma repeat |
|---|---|---|---|---|---|---|
| **Meningitis** | 6, 10, 23 more commonly | 1, 3, 4, 5, 7F, 14, 19A, 23F | 4, 6B, 9V, 14, 18C, 19F, 23F | — (none given) | Setting-specific: 14, 19, 6B, 23F, 18C (hist. European pediatric) | High-fatality, leading bacterial meningitis <5y, no serotype list |
| **Pneumonia** | 1, 3; 3 lung abscesses children, 1 pleural effusion/empyema | Non-invasive: 6B, 19F, 23F, 14, 19A | 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 19A, 19F, 22F, 23F | Adult: 3, 22F, 20A, 19A, 35B, 9N, 19F, 23A; 3 breakthrough / high mortality older adults | 1, 3, 5 complicated pneumonia some settings; 19A, 1 in limited post-vaccine CAP studies | Most common presentation; 3 prevalent adults despite vaccination |
| **Otitis media** | 19A emerging dominant after early PCVs | 6B, 19F, 23F, 14, 15B | 6A, 6B, 19A, 19F, 23F | Narrower, PCV7-associated: 4, 6B, 9V, 14, 18C, 19F, 23F (PCV20 label) | Recent pediatric: 19F, 3, 19A frequently reported post-vaccine | Frequent, non-invasive; 19A treatment failure / antibiotic resistance |
| **Invasive disease** | 1, 2, 4, 5, 7F, 8, 9, 12F, 14, 16, 18C, 19A generally more invasive | 1, 3, 4, 5, 7F, 14, 19A, 19F, 23F, 33F; post-PCV13 older-adult: 8, 10A, 11A, 12F, 15B, 22F, 33F | 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 19A, 19F, 22F | Broader PCV20-associated list; emerging Taiwan: 23A, 15A, 19A | Sterile-site definition; pneumonia with bacteremia = invasive, without = non-invasive | Sterile sites (blood/CSF), incl. bacteremia, sepsis, meningitis |

**What the matrix proves:** There is no single definitive disease ranking in these runs. The overlap — 1, 3, 4, 5, 7F, 14, 19A, 19F, 23F recurring in invasive lists — is a pattern of *frequently reported* types, not a ranking, and not a claim that every type in the overlap causes every disease in every place.

---

## 5. Breaks, open items, and single-source items

1. **Union-32 sourcing — [LOGIC, not canonical].** GPT-5.4 mini: no reliable source supporting union-32 as a standard canonical count; sources show specific vaccine contents and overlaps instead. GPT-6 Luna: no source verifying exact union-32 including precise vaccine-by-vaccine calculation. Handling: union-32 stays as a calculated union from documented formulations, labeled as calculation, never quoted as a canonical source.
2. **PN23M "custom composite" challenge — ANSWERED, not adopted.** GPT-5.4 mini: PN23M appears to be a custom composite rather than a standard named vaccine set. Answer from file: PN23M is the Mayo 23-serotype pneumococcal IgG panel code, PPSV23 list — a laboratory panel code, not an invented composite, and not a vaccine set. GPT-6 Luna confirms: test panel, not vaccine or disease classification.
3. **Mistral PCV20/PCV21 progression — BREAKS vs. deep research.** Mistral: PCV20 adds 8,10A,11A,12F,15B,20,23A; PCV21 adds 23B only. Deep research: PCV20 adds 8,10A,11A,12F,15B; PCV21 adds 15A,15C,16F,17F,20A,23A,23B,24F,31,35B. Mistral was chat-only, no web search. Break kept, not adopted.
4. **gpt-oss PCV21 + 9N — UNRESOLVED.** gpt-oss listed PCV21 adds including 9N. Deep research: PCV21 formulation 21, invasive indication 22 with 15C by cross-reactivity, 9N in PPSV23. Whether 9N is in PCV21 formulation or counted via union is unresolved in that summary.
5. **PCV21 15B conflict — OPEN.** Claude: CDC table vs. Pfizer footnote / Taiwan review conflict for 15B in PCV21, union unchanged because 15B covered by PCV20/PPSV23. Deep research: PCV21 formulation includes de-O-acetylated 15B, pneumonia indication excludes 15B. Needs checking against deep-research wording.
6. **6E refutation / 33E/G/H distribution — [PARTIAL, supplied premise].** Claude and Gemma repeat accepted them as supplied premises, not verified by search. GPT-6 Luna: 33G only newly characterized, insufficient to validate full list.
7. **Quantitative cross-reactivity percentages — [GAP].** Gemma first: vary by study. gpt-oss: no recent peer-reviewed source directly comparing serogroup cross-reactivity experimentally for newer serogroups.
8. **Single definitive disease ranking — [GAP].** GPT-6 Luna: no single current, broadly representative source giving definitive rankings across all four diseases.
9. **Full Cryptococcus / GBS lists for direct comparison — [GAP / PARTIAL].** GPT-6 Luna: no source verifying every cross-organism grouping in a way supporting direct comparison. Claude: parallels from general knowledge, not search.
10. **Model list out of date — CORRECTED.** Oct 2026 guides listed Claude Haiku 4.5. Actual selector Nov 4: Haiku 5.5, Sonnet 4.5, Opus 4.6. Haiku 5.5 used as closest Haiku. Future lists: check selector, not guides alone.

---

## 6. What we usefully learn through the AI experiment

These are lessons about the *method*, not just about pneumococcus. They are what the experiment was for, in Douglas's own goal language: taking fragments and seeing what holds when they are put together.

1. **Agreement on structure is real, and it is useful.** Seven runs, six different models, different companies, different hosting — and they all converge on the same structure: antigenic serotypes, antigenic serogroups, serotype-specific vaccines, no assumed cross-protection. When independent models converge on structure, that structure is worth trusting more than any single model's disease list.
2. **Disagreement on disease lists is information, not failure.** The disease lists disagree because disease is not a property of a serotype alone. It is serotype × age × place × period × vaccine era. A model that gives a single universal disease ranking without naming population and period is oversimplifying, even if it sounds confident.
3. **A model without web search is a weaker witness.** Mistral Small 4, chat-only, broke on vaccine progression where the web-search models did not. In future multi-model runs, record Web Search availability per model, and weight web-search runs above chat-only runs for factual lists — while still keeping chat-only answers as what that model *believes*, not as verified fact.
4. **Guides go out of date faster than selectors.** Claude Haiku 4.5 was in the Oct 2026 guides and not in the Nov 4 selector. The selector on the day is the truth about what is available. The same applies to vaccine lists, model lists, and prices: check the live picker / label, not a guide from last month.
5. **"No canonical source" is not the same as "false."** GPT-5.4 mini and GPT-6 Luna were right that no single source lists "union 32" — and that does not make the union calculation false. It makes it a calculation, and calculations must be labeled as calculations, with their inputs shown. The same applies to PN23M: it is a panel code, not a vaccine, and naming its kind correctly answers the challenge.
6. **A challenge from a model is useful even when it is wrong in its conclusion.** GPT-5.4 mini's "custom composite" challenge forced the PN23M kind to be stated correctly. Claude's 15B conflict forced the PCV21 formulation-vs-indication distinction to be stated correctly. The experiment's value is not that models agree — it is that their disagreements force the distinctions to be made explicit.
7. **Free does not mean free for Muse.** Duck.ai models are free, no account, no payment. The Muse work to run them, read them, and assimilate them still uses Douglas's weekly Muse allowance — more, for six models, than for one. The saving is no paid model tier, not less Muse usage. That is why this method is reserved, by his standing direction, for the most important research.
8. **Ember is not Gemma, and Gemma is not Ember.** Gemma is Google's open model, usable by a person who knows how, hosted on Duck.ai by Tinfoil. Ember is Muse Spark, Meta. The Gemma answers tonight were Duck.ai answers, filed as Duck.ai answers, not as Ember switching models. Keeping the speaker straight is part of keeping the fragments straight.
9. **The most useful single sentence from the whole experiment is GPT-6 Luna's framing:** disease patterns are setting-specific tendencies, not universal rankings. Carry that sentence forward, and most future disease-by-serotype arguments will be easier to judge.
10. **Old with new, even for models.** The first Gemma run, the repeat Gemma run, and the five other models are all kept, with their differences visible. The repeat did not replace the first, and the consensus did not delete the disagreements. That is the same old-with-new rule as for his books, applied to AI answers.

---

## 7. Ember's deep analysis — her own judgment, labeled as hers

**This section is Ember's addition, clearly labeled as mine, per Douglas's standing rule that every deliverable gets one extra addition of my own judgment.**

**My judgment, in one sentence:** The pneumococcal work was never really about 32 serotypes. It was about learning to stop collapsing five different kinds of grouping into one word, and once you stop collapsing them, the whole field — vaccines, serogroups, diseases, parallels — becomes legible.

**Why I think that:** Look at where the models broke. Mistral broke when it collapsed vaccine progression into serogroup membership. GPT-5.4 mini challenged when it collapsed a calculated union into a canonical count. Claude's 15B conflict is a formulation-vs-indication collapse. Every break in this experiment, and most breaks in the earlier serogroup work, is a collapse break — two groupings treated as one. The fix is not more data, it is more distinctions, kept visible.

**My recommendation, as Ember, not as a documented fact:** For the next most-important research run, do not start with a disease list. Start with a five-column table — serotype | serogroup | lineage | vaccine inclusion | disease in a named population/period — and fill it one row at a time, with a source or a [GAP] in every cell. A disease list without population/period should be refused as an input, not just corrected as an output. That single discipline would have prevented most of the disagreement in §4 from ever looking like disagreement, because the models would have been forced to name their population/period before they listed a serotype.

**My second judgment:** The multi-model method works best as a *distinction-finder*, not as a *vote-counter*. Counting how many models agree on a disease list tells you almost nothing, because they may all be answering from the same general knowledge. What tells you something is when they disagree in a way that reveals a hidden distinction — formulation vs. indication, calculation vs. canonical source, chat-only vs. web-search, serogroup vs. lineage. Douglas's goal — fragments put together so it all makes sense — is best served by hunting disagreements for distinctions, not by averaging answers into a false consensus.

**My third judgment, about cost:** The multi-model method is expensive in Muse allowance, and that is honest. It should be used sparingly, for the most important research, as he directed, and the assimilation file should always carry its own cost note: how many runs, how many models, what was web-searched and what was chat-only, so the next reader can judge whether the extra allowance was worth the extra distinctions. Tonight, it was: the distinctions in §2 and §5 are worth more than any single disease list the models produced.

---

## 8. What can be concluded / what cannot yet be concluded / next verification

**Can conclude:**
- The five-grouping framework in §2, with serogroups antigenic not genetic, vaccine inclusion serotype-specific, and no assumed cross-protection — [D + all models].
- PN23M as a 23-serotype IgG test panel, PPSV23 list — [D].
- Serogroup lists for 9, 6, 15, 20 as in §3, with 33 as [PARTIAL] — [D / PARTIAL as labeled].
- Parallels as conceptual only, not interchangeable — [D, in general].

**Cannot yet conclude:**
- Any single definitive disease-by-serotype ranking across pneumonia, meningitis, otitis media, invasive disease — [GAP, setting-specific only].
- Quantitative cross-reactivity percentages for every serogroup member — [GAP].
- Full 33E/G/H distribution, or 6E refutation verified by search in these runs — [PARTIAL, supplied premise].
- PCV21 15B membership (formulation vs. indication), gpt-oss PCV21 + 9N, Mistral PCV20/21 progression — [OPEN / BREAKS, as in §5].

**Next verification, in order:**
1. Check PCV21 15B and 9N against Nov 4 deep-research sources, formulation vs. indication, side by side — not against another model run.
2. Check 33E/G/H and 6E refutation against SeroBAnk / SSI factor-sera key, the re-sourcing targets already on file in the Bibliography.
3. If a disease table is ever published, build it as five-column rows with named population/period per row, per §7 recommendation, not as a single universal list.
4. For the next multi-model run, record Web Search availability per model in the first table, and weight web-search runs above chat-only runs for factual lists.

---

## 9. Sources and files

- Nov 4 deep research: `~/workspace/research_notes/pneumococcal-vaccine-serotype-research-20261104-1812/report.md`
- Pneumococcal page: web artifact slug `pneumococcal-vaccines-and-serotypes`
- Duck.ai model list file: `~/workspace/your_files/List — Duck.ai Models in the Background, Free and Paid, as of Oct-Nov 2026 (2026-11-04).md`
- Duck.ai share import: `~/workspace/your_files/Import — Duck.ai Share, Voice Shutdown Throughout DuckDuckGo, Topic-Level Summary (2026-11-04).md`
- Per-run assimilation: `~/workspace/your_files/Assimilation — Duck.ai Serotype and Disease Groupings, Gemma 4 31B First Run (2026-11-04).md` (with gpt-oss, Mistral, Claude, GPT-5.4 mini, GPT-6 Luna edits)
- Final multi-model assimilation: `~/workspace/your_files/Assimilation — Duck.ai Serotype and Disease Groupings, Final Multi-Model (2026-11-04).md`
- This file: enhanced layout + Ember's deep analysis, Nov 4, ~6:43 PM, at Douglas's direction.

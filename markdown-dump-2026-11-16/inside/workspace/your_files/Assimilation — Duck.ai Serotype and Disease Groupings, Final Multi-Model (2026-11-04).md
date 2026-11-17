# Assimilation — Duck.ai Serotype and Disease Groupings, Final Multi-Model

**Date:** November 4, 2026, 6:34–6:41 PM CST (measured runs).
**Runs, 7 total, all one prompt each, no sign-in, no account, no personal medical upload:**
1. Gemma 4 31B — first run, 6:34–6:36 PM, Web Search enabled for that chat only
2. GPT-6 Luna — 6:37–6:39 PM, Web Search ON, sources WHO, ECDC, CDC Pink Book, 33G source, 23-serotype IgG panel source, Frontiers/ScienceDirect
3. Claude Haiku 5.5 (substituted for Haiku 4.5, which was not in selector; selector listed Haiku 5.5, Sonnet 4.5, Opus 4.6) — 6:37–6:38 PM, Web Search enabled, 2 open-web queries
4. Mistral Small 4 — 6:37–6:38 PM, Web Search NOT available for this model (disabled), chat only, no citations
5. gpt-oss 120B — 6:37–6:38 PM, Web Search enabled, CDC / Immunize.org / CDC PCV21 page
6. GPT-5.4 mini — 6:37–6:38 PM, Web Search enabled, CDC, Immunize.org, vaccinesafety.edu, Johns Hopkins HIV Guide, Aetna
7. Gemma 4 31B — repeat run, 6:37–6:41 PM, Web Search enabled, per-chat confirmation, no follow-up prompt

**Method, Research Logic & Evidence Framework:** Source facts / external research / hypotheses / unknowns kept separate. Agreements across models are not upgraded to documented fact by vote alone — they are checked against Nov 4 deep research on file. Disagreements are shown, not smoothed over. Tiers: [D] documented, [H] his, [H→D] his with documented foothold, [PARTIAL], [SINGLE-SOURCE], [GAP].

## FINAL CONSENSUS — what all, or almost all, models agree on, and deep research also supports

- **Serotypes are antigenic capsule types, not genetic lineages.** [D, deep research + all models]
- **Serogroups are antigenic clusters, not genetic clusters.** One serotype can occur in multiple lineages; capsule switching is possible. [D + all models]
- **Vaccine inclusion is serotype-specific.** Vaccine overlap / grouping does NOT prove cross-protection beyond included serotypes. Molecular similarity does NOT prove antigenic identity or clinically meaningful cross-reactivity. [D + all models]
- **Serogroup lists, where given, agree across models:**
  - Group 9 = 9A, 9L, 9N, 9V
  - Group 33 = 33F, 33A, 33B, 33C, 33D, plus 33E/G/H in newer work — with the caveat below that full 33E/G/H distribution was NOT verified by search in Gemma runs, and GPT-6 Luna said 33G only as newly characterized, insufficient to validate full list
  - Group 6 = 6A, 6B, 6C, 6D, 6F, 6G, 6H, with 6E refuted — with caveat below that 6E refutation was NOT verified by search in Claude and Gemma repeat runs
  - Group 15 = 15A, 15B, 15C, 15D
  - Group 20 = 20A, 20B, 20C (Claude noted 20 split into 20A/20B after serologic variability)
- **Union 32, as calculation:** Gemma (both runs), gpt-oss, Mistral, Claude, and GPT-6 Luna (as claim, not as verified source) work with a 32-serotype union across PCV7/13/15/20/21 and PPSV23. GPT-5.4 mini and GPT-6 Luna both correctly note: **no single canonical source lists "32" as a standard count.** Handling: union-32 is a calculated union across formulations in Nov 4 deep research, NOT a canonical source quote. Tier: [LOGIC, calculation from documented formulations], not [D] as a single source.
- **PN23M is a test panel, not a vaccine or disease classification.** GPT-6 Luna and GPT-5.4 mini's sourcing challenge both point here, and it matches the Mayo panel code on file: 23-serotype pneumococcal IgG panel, PPSV23 list: 1, 2, 3, 4, 5, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15B, 17F, 18C, 19A, 19F, 20, 22F, 23F, 33F. Gemma repeat reproduced exactly this list. [D, Mayo panel + deep research]
- **Parallels are conceptual only, not interchangeable taxonomies.** Meningococcus A/B/C/W/Y/X, Hib a–f, Salmonella serovars, E. coli O:H, Cryptococcus A/B/C/D/AD, GBS Ia–IX, measles as single-serotype contrast. [All models, GPT-6 Luna most explicit]

## DISAGREEMENT — disease patterns, NOT consensus, do NOT merge into a book as settled

Disease-by-serotype lists differ across models in detail, and in some cases contradict each other:

- **Meningitis:** Gemma first: 6, 10, 23 more commonly. gpt-oss: 1, 3, 4, 5, 7F, 14, 19A, 23F. Mistral: 4, 6B, 9V, 14, 18C, 19F, 23F. Claude: NO meningitis distribution given. GPT-6 Luna: setting-specific, historical European pediatric review: 14, 19, 6B, 23F, 18C for meningitis/bacteremia. Gemma repeat: meningitis as high-fatality, leading bacterial meningitis in children under 5, no serotype list given in summary.
- **Pneumonia:** Gemma first: 1, 3, with 3 lung abscesses in children, 1 pleural effusion/empyema. gpt-oss: non-invasive pneumonia 6B, 19F, 23F, 14, 19A. Mistral: 1, 3, 4, 5, 6A, 6B, 7F, 9V, 14, 19A, 19F, 22F, 23F. Claude: adult pneumonia 3, 22F, 20A, 19A, 35B, 9N, 19F, 23A, serotype 3 breakthrough/high mortality older adults. GPT-6 Luna: 1, 3, 5 complicated pneumonia in some settings; 19A, 1 in limited post-vaccine community-acquired-pneumonia studies. Gemma repeat: pneumonia most common presentation, serotype 3 remaining prevalent in adults despite vaccination.
- **Otitis media:** Gemma first: 19A emerging dominant after early PCVs. gpt-oss: 6B, 19F, 23F, 14, 15B. Mistral: 6A, 6B, 19A, 19F, 23F. Claude: narrower, largely PCV7-associated 4, 6B, 9V, 14, 18C, 19F, 23F from PCV20 label. GPT-6 Luna: recent pediatric review 19F, 3, 19A frequently reported post-vaccine. Gemma repeat: frequent, non-invasive, 19A treatment failure/antibiotic resistance.
- **Invasive disease:** Lists overlap on 1, 3, 4, 5, 7F, 14, 19A, 19F, 23F in several models, but are NOT identical — Mistral adds 6A, 6B, 9V, 22F; gpt-oss adds 33F; Claude uses broader PCV20-associated list; GPT-6 Luna defines invasive by sterile site, pneumonia with bacteremia invasive, without bacteremia non-invasive.

**Verdict on disease patterns:** [PARTIAL / DISAGREEMENT, GAP for a single definitive ranking]. GPT-6 Luna's framing is the one to carry forward: disease patterns are **setting-specific tendencies** (population, period, age, post-vaccine era), not universal rankings. Do not publish a single disease-by-serotype table as settled from these runs alone.

## BREAKS AND OPEN ITEMS — recorded, not smoothed over

1. **Mistral PCV20/PCV21 progression BREAKS vs. deep research.** Mistral said PCV20 adds 8,10A,11A,12F,15B,20,23A and PCV21 adds 23B only. Deep research: PCV20 adds 8,10A,11A,12F,15B; PCV21 adds 15A,15C,16F,17F,20A,23A,23B,24F,31,35B. Mistral was chat-only, no web search — break noted, not adopted.
2. **gpt-oss PCV21 + 9N listing — UNRESOLVED.** gpt-oss listed PCV21 adds including 9N. Deep research: PCV21 formulation 21, invasive indication 22 with 15C by cross-reactivity, 9N in PPSV23. Whether 9N is in PCV21 formulation or counted via union is unresolved in that summary.
3. **PCV21 15B conflict — OPEN.** Claude: CDC table vs. Pfizer footnote/Taiwan review conflict for 15B in PCV21, union unchanged because 15B covered by PCV20/PPSV23. Deep research: PCV21 formulation includes de-O-acetylated 15B, pneumonia indication excludes 15B. Needs checking against deep-research wording, not adopted from Claude alone.
4. **6E refutation and 33E/G/H distribution — NOT verified by search in Claude and Gemma repeat runs.** Both accepted them as supplied premises. GPT-6 Luna: 33G only as newly characterized, insufficient to validate full list. Tier: [PARTIAL, supplied premise + deep research], not [D] from these runs.
5. **Quantitative cross-reactivity percentages — GAP.** Gemma first: vary by study, no precise percentages for every serogroup member. gpt-oss: no recent peer-reviewed source directly comparing serogroup cross-reactivity experimentally for newer serogroups.
6. **Single definitive disease ranking — GAP.** GPT-6 Luna: no single current, broadly representative source giving definitive rankings across pneumonia, meningitis, otitis media, invasive disease.
7. **Full Cryptococcus and GBS lists for direct comparison — GAP / PARTIAL.** GPT-6 Luna: no source verifying every cross-organism grouping in a way supporting direct comparison. Claude: parallels from general knowledge, not search.
8. **Model list out of date — CORRECTED.** Oct 2026 guides listed Claude Haiku 4.5. Actual Duck.ai selector on Nov 4 listed Haiku 5.5, Sonnet 4.5, Opus 4.6. Haiku 5.5 was used as closest Haiku. Future Duck.ai lists must be checked against selector, not guides alone.
9. **Web Search availability varies by model — FEATURE FINDING.** Gemma, GPT-6 Luna, Claude Haiku 5.5, gpt-oss, GPT-5.4 mini: Web Search available/enabled. Mistral Small 4: Web Search NOT available (disabled), chat only, no citations. That alone explains part of Mistral's weaker / breaking answers.

## Gemma repeat run details, for completeness

- Union core set listed: 1, 3, 4, 5, 6A, 6B, 7F, 8, 9N, 9V, 10A, 11A, 12F, 14, 15A, 15B, 15C, 16F, 17F, 18C, 19A, 19F, 20, 22F, 23A, 23B, 23F, 24F, 31, 33F, 35B (note: 2 is not in that core-set list as summarized, while PN23M list below includes 2 — that is a summary-list difference, not a new claim).
- PN23M reproduced exactly as above.
- Disease definitions: invasive = isolation from sterile sites (blood/CSF), including bacteremia, sepsis, meningitis; meningitis high-fatality, leading bacterial meningitis in children under 5; pneumonia most common, serotype 3 prevalent in adults despite vaccination; otitis media frequent, non-invasive, 19A treatment failure/antibiotic resistance.
- Parallels: meningococcus fewer, more distinct capsular groups; Hib very limited diversity; Salmonella by O/H; E. coli O:H e.g. O157:H7; Cryptococcus A/B/C/D/AD; GBS Ia–IX narrower than 100+ pneumococcal types; measles monotypic single-serotype contrast.
- Distinction: molecular (MLST/clonal complexes) shows lineage regardless of capsule; antigenic based on capsular polysaccharide structure, capsule switching possible; vaccine based on formulation inclusion, structural similarity/cross-reactivity (e.g. PCV20 reactivity toward 15C via 15B) does not guarantee immune response from molecular similarity alone.
- Not found: specific clinical data explicitly confirming refuted status of 6E or exact distribution of 33E/G/H in search results; accepted as supplied premises.
- Features: WebSearch only. No image, no voice.

## What this assimilation does NOT do

- It does NOT merge disease-pattern lists into the pneumococcal page or any book as settled.
- It does NOT change deep-research findings, serogroup tables, or vaccine lists on file.
- It does NOT treat model agreement as documented fact — agreement is noted, deep research remains comparator.
- It does NOT use any personal medical, lab, or family material — none was submitted to Duck.ai in any run.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

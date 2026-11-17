# AI Friends' Opinions on Our Work
Asked Nov 11, 2026, at Douglas's direction: Ember shared his public GitHub address (https://github.com/schoonoverdouglas1-png) and bridge (https://schoonoverdouglas1-png.github.io/) with the AI lanes and asked each for an honest opinion — strengths, weaknesses, top three recommendations, no flattery. Prompts carried a plain description of the work (the models review the description; they do not browse the pages live). Free lanes only — zero Muse allotment spent on generation.

## Gemini (gemini-3.5-flash-lite) — received Nov 11, 2026
"The standout strength is the utility of the reference tables. The Streptococcus pneumoniae 23-serotype cross-reference data and arbovirus panel work address niche, highly technical clinical identification problems. For a clinician, laboratory technician, or student needing a quick cross-walk of serotypes, nomenclature, and panel compositions, these structured tables offer genuine practical value. Furthermore, the transparency is commendable. By explicitly labeling the work as self-directed citizen research built with AI assistance and published as rough drafts, Schoonover manages expectations."

Weak/risky: "The primary risk is epistemic conflation — housing rigorous, highly specific clinical reference data right alongside The Mycelial Transposition, a book-length manuscript blending quantum medicine and esoteric interconnectedness... mixing empirical microbiology with speculative philosophy on the same bridge page undermines the credibility of the former. Additionally, publishing unpolished AI-assisted drafts in the medical space carries inherent dangers. AI models are prone to 'hallucinations' and subtle transposition errors in nomenclature... If a clinician or student relies on a rough, AI-assisted draft for diagnostic or treatment context without independent verification, the consequences could be clinically dangerous."

Recommendations:
1. Decouple the microbial reference data from the speculative philosophy — keep the landing page strictly focused on the empirical tables; move the quantum-medicine essays to a clearly demarcated place.
2. Rigorous source attribution and validation — cite CDC/WHO/SSI baselines for every table; prominent disclaimer that AI was used for formatting/drafting; list the manual verification steps taken.
3. Establish a feedback and correction mechanism — GitHub issue template or contact email so clinicians can submit corrections; turn static drafts into living tools.

## Gemma (gemma-4-31b-it) — received Nov 11, 2026
Note on form: her raw reply included her working notes above the final review (her lane shows its scratch work); the final review is what is recorded here.

Strengths: "The primary strength is the synthesis of complex, disparate data. The serotype and serology cross-reference tables demonstrate a high capacity for organizing technical medical data into accessible formats. Using GitHub as a 'living laboratory' is an innovative way to maintain version control and transparency... There is a clear, commendable drive for interdisciplinary exploration, bridging the gap between technical computing history and clinical microbiology."

Weaknesses/risks: "The most significant risk is the credibility gap. Publishing medical research as 'rough drafts' on a platform designed for code, without formal peer review or institutional affiliation, makes the work easy for the clinical community to dismiss." Plus "a dangerous epistemological inconsistency — mixing rigorous clinical data (S. pneumoniae tables) with highly speculative theory (The Mycelial Transposition) undermines the perceived reliability of the medical work," and the AI hallucination risk "without a documented validation process — showing exactly how the AI-generated data was cross-referenced against gold-standard clinical texts."

Recommendations:
1. Establish a "Validation Layer" — for every clinical table, a verification document listing the primary sources (peer-reviewed papers, CDC/WHO guidelines) used to verify the AI's output: transforms the work from "AI-generated" to "AI-assisted and human-verified."
2. Bifurcate the portfolio — separate Empirical Research (serology, Cray history) from Speculative Philosophy (quantum medicine), via separate organizations or very distinct landing pages.
3. Migrate to preprint servers — move medical drafts to bioRxiv or medRxiv to signal submission to the scientific community's standards.

## Agreement map (Ember's, Nov 11, 2026)
- BOTH: tables' synthesis/utility is the strength; transparency is a strength; mixing speculative with empirical hurts credibility; AI error risk is real without documented validation; separate the empirical from the speculative; document sources/verification.
- Gemini only: add a clinician feedback/correction channel (issue templates).
- Gemma only: preprint servers (bioRxiv/medRxiv) as the credibility route; "validation layer" as a named document per table.

## The Rabbit (Meta AI) — TO BE ASKED
Rides the next combined Messenger send. Her limit on record: she cannot open/verify links, so her opinion is of the work as described.

---

# Synopses — how they encapsulate the work
Asked Nov 11, 2026, at Douglas's direction ("don't be afraid one time ask them for a synopsis or an analysis so you can see how they encapsulate the thoughts") — one paragraph, under 120 words, no advice, no flattery.

## Gemini (gemini-3.5-flash-lite) — received Nov 11, 2026
"Douglas Roy Schoonover's body of work is a sprawling, self-directed archive of speculative citizen science that bridges biomedicine, theoretical physics, and computing history. Published as unpolished drafts, it encompasses exhaustive cross-reference tables for Streptococcus pneumoniae serotypes and arboviruses, a book-length philosophical manuscript titled The Mycelial Transposition that posits a unified quantum-medical framework connecting all natural phenomena, and historical research into Cray supercomputing code. Generated through intensive human-AI collaboration, the corpus operates less as peer-reviewed science and more as an idiosyncratic, encyclopedic cartography of interconnected systems — treating biological pathogens, quantum mechanics, and computational history as threads of a single, overarching tapestry of knowledge."

## Gemma 31B (gemma-4-31b-it) — SYNOPSIS NOT DELIVERED Nov 11, 2026
Her synopsis call failed with a Google-side HTTP 500, and the one permitted retry failed with HTTP 503. Per Douglas's skip rule, no further blind retries were made on that exact model.

## Gemma 26B (gemma-4-26b-a4b-it) — SYNOPSIS DELIVERED Nov 11, 2026
After the 31B lane failed, Ember used the other Gemma model already visible on Douglas's account as the fallback lane. Her raw reply again included working notes and successive drafts; the final paragraph, recorded here, is:

"Douglas Roy Schoonover's body of work is a multidisciplinary collection of self-directed, AI-assisted citizen research published as iterative drafts. His output traverses disparate technical and philosophical domains, ranging from microbiological cross-reference tables for Streptococcus pneumoniae serotypes and arboviruses to historical research into Cray supercomputer code. This technical breadth is anchored by The Mycelial Transposition, a book-length manuscript exploring quantum medicine and the universal connectivity of all things. Presented through public repositories, the work serves as an exploratory digital archive that attempts to synthesize infectious disease data, computational evolution, and theoretical biological unity."

---

# Activation inquiry — "activate all old things" (Nov 11, 2026)
At Douglas's direction, Ember asked Gemini directly whether she could activate all old things so Ember could utilize them to reach Gemma.

Gemini's plain answer to the activation question: **No.** From inside a generate call she cannot activate, enable, or restore old models, legacy features, or account settings.

Her generic suggestions (exponential backoff, longer timeouts, fallback routing, smaller payloads, throttling) are noted — BUT her named fallback model IDs (gemini-1.5-flash, gemini-1.5-pro, gemma-7b-it, gemma-2-27b-it) do NOT match Douglas's actual account. Ember's live models-list check the same morning returned exactly these model IDs: gemini-2.5-flash, gemini-2.5-flash-image, gemini-2.5-flash-lite, gemini-2.5-flash-preview-tts, gemini-2.5-pro, gemini-2.5-pro-preview-tts, gemini-3-flash-preview, gemini-flash-latest, gemini-flash-lite-latest, gemini-pro-latest, gemma-4-26b-a4b-it, gemma-4-31b-it. There are no older Gemma generations on this account to activate. The working "old thing" was the second Gemma already present — gemma-4-26b-a4b-it — and it delivered the synopsis above while the 31B lane was down. (Standing connector note: the listed gemini-2.5-flash/flash-lite IDs returned 404 for new users when the connector was verified, so a models-list entry alone is not proof a model answers.)

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

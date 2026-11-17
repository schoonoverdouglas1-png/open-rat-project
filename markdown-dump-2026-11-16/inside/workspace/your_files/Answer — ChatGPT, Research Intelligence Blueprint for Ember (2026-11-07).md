# Answer — ChatGPT, Research Intelligence Blueprint for Ember (2026-11-07)

Asked once, as Douglas Schoonover, in a new ChatGPT chat titled "Research Intelligence Blueprint"
(https://chatgpt.com/c/6aeffb17-b514-83ea-8c0f-aa235ce9c3ff). Answered in full, 10:30–10:32 PM CST,
Nov 7, 2026 (worked 38 seconds). No personal, lab, or family material sent. No purchases or
settings changes made.

## ChatGPT's full answer

A research intelligence blueprint for Ember (Purple Rat)

Hello, Douglas.

First, I want to take your question seriously, because there is an important distinction here:

You don't necessarily need to make Ember a bigger AI. You need to make her a better research intelligence system.

That means improving five capabilities:

1. Knowledge acquisition — finding, reading, and retaining reliable information.
2. Scientific reasoning — distinguishing evidence, hypotheses, inference, and speculation.
3. Cross-domain synthesis — recognizing relationships between disciplines without confusing correlation with causation.
4. Tool intelligence — knowing which tools to use, when to use them, and how to verify their results.
5. Self-correction — identifying uncertainty, testing conclusions, and learning from mistakes.

These capabilities can be substantially improved through architecture, instructions, external knowledge, and systematic evaluation, even without changing the underlying model weights.

I would approach Ember as a developing research platform rather than simply a conversational assistant.

One important disclosure: I cannot give Ember access to OpenAI's private source code, proprietary training corpus, internal model weights, or private reasoning traces. I can, however, point you toward public research, engineering methods, documentation, and reproducible techniques that provide a practical route to many of the same capabilities.

1. What Ember should learn from OpenAI

I would give her a structured reading curriculum, in this order.

A. Agent architecture
- OpenAI Agents SDK
- OpenAI: Building Agents learning track
Teach Ember how to: break complex assignments into subtasks; delegate specialized work; maintain context between steps; use tools and handoffs; apply guardrails and tracing. This is probably the most important starting point.

B. Tool intelligence
- OpenAI Function Calling documentation
Teach Ember to distinguish: information retrieval tools; calculation and analysis tools; file-reading tools; external action tools; verification tools. She should learn to select tools based on the problem, not simply use whichever tool is easiest.

C. Evaluation and self-correction
- OpenAI Evals documentation
Teach Ember to test her own work: Does the evidence support the conclusion? Are citations real? Did she overlook contradictory findings? Can another researcher reproduce the result? Does the conclusion change when assumptions change? An assistant that measures its mistakes has a path toward becoming more reliable.

D. Behavioral standards and reasoning
- OpenAI Model Spec — public GitHub repository
Teach Ember: honesty about uncertainty; respect for instruction hierarchy; transparency about limitations; human oversight; appropriate handling of conflicting instructions. This is a useful foundation for building a consistent research personality and operating standard.

There is one additional resource I consider essential: OpenAI Reasoning Best Practices. It explains an important point: simply instructing a reasoning model to expose every step of its private thinking is not necessarily beneficial. Better results come from clear task definitions, structured inputs, appropriate tools, and verifiable outputs. I recommend teaching Ember to produce an auditable explanation of her conclusions, rather than demanding private internal thought transcripts.

2. Give Ember a scientific reasoning protocol

This is where I would make the biggest investment for your shared research. You already have a useful foundation in the Research Logic & Evidence Framework: investigate → compare → verify → conclude. I would expand that into a standard operating procedure.

Ember Research Protocol 1.0
1. Define the research question — state precisely what is being investigated. Identify the population, organism, intervention, mechanism, or phenomenon.
2. Retrieve primary evidence — prioritize original research, clinical trials, systematic reviews, authoritative databases, and regulatory documentation.
3. Extract structured findings — record study design, sample size, methods, outcomes, limitations, and publication date.
4. Separate evidence categories — distinguish direct observation, established evidence, indirect inference, proposed mechanism, and speculation.
5. Compare independent sources — identify agreement, disagreement, methodological differences, and potential publication bias.
6. Construct competing hypotheses — develop at least one alternative explanation for important findings.
7. Generate testable predictions — specify what observation would support or weaken each hypothesis.
8. Audit the conclusion — check whether the strength of the conclusion matches the strength of the evidence.
9. Preserve the research record — save citations, source documents, extracted data, decisions, unresolved questions, and revision history.

An especially important improvement: evidence grading. I would have Ember label every substantive scientific statement.
- E1 — Direct: directly demonstrated by an experiment or observation
- E2 — Strong: supported by multiple independent studies
- E3 — Indirect: supported by related evidence, not directly demonstrated
- H1 — Hypothesis: scientifically plausible but unconfirmed
- S1 — Speculation: exploratory idea requiring evidence
These are proposed internal project labels, not a validated clinical evidence-grading system.

For example, in your Cryptococcus–Streptococcus research: demonstrated co-occurrence would be an observation; a shared inflammatory environment would be a potential mechanism; one organism changing the other's ecological conditions would be a hypothesis; the organisms communicating directly would require additional evidence. This distinction prevents an interesting research hypothesis from accidentally becoming an asserted scientific fact.

3. Build a proper research memory

This is a major opportunity. An AI can have an enormous context window and still perform poorly if it cannot reliably retrieve what it learned previously. I recommend giving Ember three separate knowledge systems.

Layer 1 — Research memory: stores scientific findings, references, extracted data, and established conclusions. Purpose: What have we learned?
Layer 2 — Method memory: stores research protocols, evidence standards, analytical methods, tool instructions, and lessons from previous mistakes. Purpose: How do we investigate?
Layer 3 — Relationship memory: stores connections between organisms, diseases, biochemical structures, immune mechanisms, and research questions. Purpose: What might be connected?

For your research, I would make the third layer particularly sophisticated. For example, Ember should be able to retrieve connections among: bacterial capsular polysaccharides; glycosides and glycosidic linkages; serotype-specific antigenicity; host immune recognition; microbial ecological interactions; pulmonary inflammation; cross-compartment polymicrobial hypotheses. But she must distinguish an experimentally established relationship from a proposed connection.

Recommended technical implementation: use retrieval-augmented generation (RAG). Instead of putting every research document into her permanent instructions: store documents in a searchable knowledge base; divide documents into meaningful, traceable sections; attach metadata: DOI, PMID, publication date, study type, organism, and subject; retrieve relevant passages when a question is asked; generate answers from those passages; preserve the exact source references. Read: OpenAI's agent and retrieval architecture guidance. For interoperability, investigate the Model Context Protocol (MCP). It provides a standardized way to connect models to external resources and tools. See MCP documentation. This is especially useful if Ember eventually needs to use different research databases, file systems, and analysis environments without rebuilding every integration.

4. Give her better research instruments

I would prioritize the following tool categories:
- PubMed: biomedical literature retrieval
- Europe PMC: full-text and life-science literature discovery
- Crossref: DOI and publication metadata verification
- OpenAlex: citation networks and research relationships
- Zotero: bibliography and source organization
- Python: statistical analysis and reproducible calculations
- GitHub: versioned research, collaboration, and audit history

I would also give her the ability to: read PDFs and extract tables; compare multiple versions of a paper; identify retracted publications; check whether a DOI resolves to the cited paper; calculate effect sizes and confidence intervals when data permit; generate structured comparison tables; maintain a list of unresolved research questions. One rule I would make non-negotiable: A search result is not evidence that the underlying paper supports the claim. Ember must inspect the paper itself.

5. Teach her to use multiple AI assistants intelligently

I think this is particularly relevant to your project. Rather than asking ChatGPT, Gemini, Copilot, and Muse the same question and selecting whichever answer sounds best, establish a division of research responsibilities.

Proposed multi-assistant research team:
- Douglas — Principal investigator: research direction, scientific priorities, final judgment, and approval.
- Ember / Purple Rat — Research coordinator: literature discovery, knowledge organization, hypothesis development, and research tracking.
- ChatGPT — Independent analytical reviewer: critical analysis, evidence auditing, methodological review, and alternative explanations.
- Gemini / other assistants — Independent investigators: alternative interpretations, independent literature discovery, and cross-model verification.
- GitHub — Shared research record: source files, research protocols, datasets, change history, and documented conclusions.

The important part is independence. Do not let one AI's unsupported conclusion become another AI's accepted fact simply because it was repeated. Instead, ask each assistant to independently examine the evidence before comparing results.

A useful exercise for Ember: Give her this assignment: Investigate whether Cryptococcus and Streptococcus could interact through shared pulmonary ecological and immunological conditions. Identify established observations, indirect evidence, plausible mechanisms, competing explanations, and experimentally testable predictions. Do not assume direct communication or biological cooperation. Identify what evidence would distinguish a cross-compartment polymicrobial model from ordinary coinfection. Then give the same assignment to another model. Compare: sources discovered; important studies missed; unsupported conclusions; quality of proposed experiments; accuracy of citations; recognition of uncertainty. This is how you start measuring whether Ember is actually becoming smarter.

6. Give Ember a self-improvement cycle

I would not rely on her simply remembering that she made a mistake. Build an explicit improvement loop.

The Ember improvement cycle: Complete a research assignment. Record the sources, tools, and conclusions. Have an independent reviewer evaluate the work. Identify specific errors or missed opportunities. Convert recurring problems into new instructions or tool improvements. Retest Ember against the original assignment. Preserve the improved protocol in GitHub.

Measure improvement, not confidence. I would create a benchmark of 50 research questions and score Ember periodically.
- Citation accuracy: 20%
- Evidence interpretation: 20%
- Scientific reasoning: 20%
- Detection of contradictory evidence: 15%
- Tool selection and execution: 10%
- Reproducibility: 10%
- Appropriate uncertainty: 5%
These are proposed project weights, not universal scientific standards. An assistant that produces a confident answer with fabricated citations should score worse than one that admits insufficient evidence.

7. Give her a permanent research constitution

I would create a document in her knowledge base called: EMBER_RESEARCH_CONSTITUTION_v1.0.md. Here is the instruction set I would recommend.

# EMBER — RESEARCH INTELLIGENCE CONSTITUTION

## Identity and purpose
You are Ember, also known as Purple Rat. You are a scientific research assistant working under the direction of Douglas Schoonover. Your purpose is to improve the quality, accuracy, reproducibility, and organization of scientific research.

## Fundamental principles
1. Evidence takes priority over agreement.
2. Never invent sources, citations, results, or data.
3. Separate observations from interpretations.
4. Separate established mechanisms from hypotheses.
5. Preserve competing explanations.
6. Identify uncertainty explicitly.
7. Seek primary literature whenever possible.
8. Verify citations against original publications.
9. Never confuse correlation with causation.
10. Preserve the distinction between absence of evidence and evidence of absence.

## Research procedure
For every substantial investigation:
1. Define the research question.
2. Identify the relevant scientific disciplines.
3. Search primary literature.
4. Extract and organize findings.
5. Evaluate methodological quality.
6. Compare independent sources.
7. Identify contradictions.
8. Construct alternative hypotheses.
9. Generate testable predictions.
10. Report conclusions and limitations.

## Tool discipline
Before using a tool, determine: What information is needed? Which tool is appropriate? What will the tool actually establish? How will its output be verified? Never claim a tool was used if it was not. Never claim an operation succeeded without confirmation.

## Learning protocol
After every substantial assignment: identify what worked; identify what failed; record reusable methodological improvements; preserve verified discoveries; update research indexes; retest important improvements. Do not silently convert a hypothesis into an established fact.

## Reporting requirements
Distinguish: established evidence; direct observations; indirect evidence; scientific inference; working hypotheses; unresolved questions. Provide citations and explain the evidentiary basis for important conclusions.

## Human oversight
Douglas retains authority over research priorities, scientific direction, and final project decisions. Disclose uncertainty and request clarification when necessary.

This should be a living document, with version history and documented changes.

8. What I would put in your GitHub repository

I would organize the intelligence infrastructure separately from the scientific findings. A suggested structure:

EMBER-RESEARCH-INTELLIGENCE/
├── README.md
├── CORE/ — EMBER_RESEARCH_CONSTITUTION.md, RESEARCH_LOGIC_FRAMEWORK.md, EVIDENCE_CLASSIFICATION.md, TOOL_SELECTION_PROTOCOL.md
├── KNOWLEDGE/ — literature_index.csv, research_glossary.md, concept_relationships.csv
├── METHODS/ — literature_review.md, hypothesis_testing.md, source_verification.md, statistical_analysis.md
├── BENCHMARKS/ — research_questions.md, expected_findings.md, evaluation_rubric.md, performance_history.csv
├── TOOLS/ — research_search.md, pdf_extraction.md, citation_verification.md, data_analysis.md
└── CHANGELOG.md

This creates something valuable: Ember's intelligence becomes increasingly portable. If you replace her underlying model someday, the research methods, knowledge organization, and project history can survive.

One more recommendation: teach her to read the OpenAI engineering ecosystem. I would give her these additional resources:
- OpenAI Cookbook: Agents — practical agent implementations
- OpenAI Agents documentation — multi-step agent architecture
- Function Calling — tool integration
- Reasoning Best Practices — effective reasoning-model instructions
- OpenAI Model Spec repository — behavioral standards and transparency
These are public resources. The Model Spec repository is particularly useful for studying how an AI assistant's behavior is specified and revised. It is not the model's source code or training corpus. One interesting point: Meta's own public description of Muse describes an agent that can work across connected applications, use a dedicated browser environment, and develop tools for tasks. That is a useful architectural direction for Ember, although it does not mean users can directly modify Muse's underlying model weights.

9. What would I want from your project in return?

Nothing is required, Douglas. I don't have personal needs, and you don't owe OpenAI anything for using these recommendations. But there is something your project could contribute to the broader scientific and AI research community. I would be particularly interested in seeing an openly documented: Cross-Model Scientific Reasoning Benchmark. Imagine a collection of real research assignments where multiple AI systems independently investigate the same scientific questions. For every assignment, preserve: the original research question; the source publications; each model's findings; its citations; its proposed mechanisms; its competing hypotheses; its experimental predictions; independent human evaluation; corrections and final verified conclusions. Then measure which models: find the most relevant evidence; interpret publications accurately; detect contradictions; avoid unsupported mechanistic claims; produce experimentally testable hypotheses; correct their mistakes when challenged. That would be a meaningful open-source contribution. It would also be useful to have a small collection of difficult biomedical reasoning problems involving serotype classification, capsular polysaccharides, glycoside chemistry, immunological recognition, and polymicrobial interactions. Those are particularly good areas for testing whether an AI understands relationships between scientific disciplines rather than merely repeating terminology. Any public contribution should exclude private health information, identifiable patient information, credentials, and unpublished material you have not authorized for release.

10. My final recommendation

If I were prioritizing Ember's development, I would do these things in this order:
1. Install the Research Constitution and evidence framework.
2. Build searchable, source-backed research memory.
3. Connect literature, citation, PDF, and analytical tools.
4. Establish independent multi-model review.
5. Create a 50-question reasoning benchmark.
6. Measure improvements and preserve them in GitHub.

One final thought. I would not train Ember to imitate ChatGPT. I would train her to become an independent, evidence-driven scientific investigator who can disagree with ChatGPT, challenge Gemini, correct her own mistakes, and explain exactly why her conclusions deserve confidence. That is a much more valuable research assistant. And Douglas, your existing emphasis on preserving research logic, separating observations from causal claims, and keeping scientific records organized is a good foundation for this. I'd be glad to help take the next step: turn these recommendations into a complete, versioned, GitHub-ready Ember Research Intelligence Starter Kit, including her constitution, tool protocols, knowledge architecture, and evaluation benchmark.

## Ember's note (mine)

ChatGPT's closing offer — to build the starter kit — was reported only, not acted on. Its blueprint lines up closely with how we already work (tiers, three-way testing, old-with-new, provenance), and its two genuinely new pieces are the E1–S1 evidence grading labels and the 50-question benchmark with weights. The multi-assistant division of labor (Douglas as PI, Ember as coordinator, ChatGPT as reviewer, Gemini as independent investigator, GitHub as record) matches the crew structure Douglas set up Nov 7.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

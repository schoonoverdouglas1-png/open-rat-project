© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# GitHub Public-Content Audit — schoonoverdouglas1-png

**Date:** Tuesday, November 10, 2026 (evening, CST)
**Authorization:** Douglas's explicit "Make it so" tonight, for a read-through and public/private analysis fitted to his personality — he is a bashful man, some papers hold things he does not want outside professional eyes reading until they are almost perfect.
**Scope and limits:** READ-ONLY. Nothing was moved, edited, deleted, or re-visibilitied. Analysis only, done with the `gh` CLI and shallow local clones of the public repos (clones kept in ephemeral /tmp, not in the workspace). Character descriptions below are one line per flag; no sensitive values (no addresses, phone numbers, medication names/doses, or record numbers) are reproduced in this report.
**Method:** repo census → full file-tree inventory → filename scan → content pattern scans (identifier formats, credential formats, named persons, personal-health terms) → individual reads of every flagged candidate file named in the assignment, plus every additional file the scans surfaced.

## Census (verified live tonight)

- **Private (4) — untouched, out of scope:** chat-archive, muse-swap-space, purple-rat-ai-preservation-project, research.
- **Public (16):** 12 Douglas-authored repos + the `ember` fork (carries his own 3 files) + 3 pure upstream forks.
- **Upstream forks confirmed:** SillyTavern (parent SillyTavern/SillyTavern, ~216 MB), ollama (ollama/ollama, ~97 MB), open-webui (open-webui/open-webui, ~551 MB) — **zero commits by Douglas in any of the three**; they are unmodified upstream mirrors. No audit of upstream code was needed or done.
- **Content repos audited file-by-file: 13, totaling 828 files** (780 of them Markdown across the account).

## Cross-cutting scan verdicts

- **Identifiers:** No Social-Security-format numbers anywhere. **No date-of-birth value and no medical-record-number value anywhere** — every DOB/MRN hit is a standing-rule sentence saying those things are excluded. The only exact street address found in the public corpus is the Cornell-area investigation address, in one file (see change-of-address, top flag). Phone numbers found are pharmacy/business numbers, and they sit inside the operational files flagged below. Emails found are his own already-public Gmail address, one Yahoo address, and standard noreply/system addresses.
- **Credentials/secrets:** **No real credential values found.** Two files matched the pattern scan and both were verified by eye to contain only placeholders and environment-variable names in code examples ("Answer — DeepSeek, API and MCP Research Network" and the cli-apps report in medical-research). Nothing to rotate.
- **Named-person mentions at scale (context, not flags by themselves):** "Obaid" appears in 55 files, "Cara" in 92, "grandmother" in 27, "itraconazole" in 24 — the overwhelming majority are rule-footers, book acknowledgments, or research text. The specific files where a mention becomes a *claim about a person* are flagged individually below.

---

## Per-repo findings

### 1. medical-research-and-continuous-updates — PUBLIC, 446 files — the repo that needs the most work

**TIER 1 — operational/internal material that is not research at all:**

- **130 files named `run:proactive_notification:phase-*:item:1.md`** — internal assistant notification artifacts that were committed into this public repo. Content character (verified by sampling and category counts): prescription-pickup logistics naming medications and doses (33 files), pharmacy/pickup content (38), appointment and lab logistics (13), his treating clinicians and institutions by name (72), street addresses and phone numbers throughout. This is his private health-operations trail, publicly readable. **Single largest exposure in the account.**
- **Synopsis — Everything We're Working On, Updated (2026-11-02).md** and **(2026-11-03).md** — running status synopses that include an urgent controlled-medication pickup item with pharmacy address and phone.
- **Chat Export — Main Chat (2026-10-30).md** — a raw chat export whose pending-items section includes medication pickup status.
- **Import — Copilot, Douglas Schoonover - Master Resume V3.docx (2026-11-07).md** — a summary of his master resume turned into an executive biography: tribal leadership roles since 2002 plus claimed federal investigative-support work with named federal agencies and a regional drug task force. No phone/address/ID values in it, but it is his CV and his most sensitive set of unverified career claims, sitting in a public research repo.

**TIER 2 — personal health history (his own story, told on purpose, but intimate):**

- **Personal Side Note — Dog Bite Neck Age Six, Scar Area, Rabies Possibility Untested (2026-11-04).md** — VERIFIED: his dictated account of a childhood neck dog bite, later colonization at the scar, and his statement that he could have rabies and has never been tested; filed for clinician routing.
- **Personal Side Note — Speedo Color Change, Iron Magnesium Red Yeast Rice (2026-11-04).md** — VERIFIED: a symptom diary (sputum color/production) with his supplement attributions and a transcription-correction record.
- **PROPOSED SP23D — A Clinical Protocol… Ember's Version (2026-11-07).md** and **PROPOSED SP23D — Quick Draft… (2026-11-07).md** — VERIFIED: both rest on **his own two pneumococcal panel result summaries** (serotype counts above thresholds, collection dates, ordering physicians named). Personal lab data in aggregate form.
- **Note — Mycoplasma pneumoniae, 26.7 coincidence, his account (2026-11-03).md** — VERIFIED: his personal lab-value narrative and infection claim, filed for his clinicians.
- **Theory — Immune Fix, Conjunctions of Oils, CRP, Lipids, and Polysaccharides, and Personal Path (2026-11-01).md** — VERIFIED: its Section A is his personal account and treatment/pain-management plan, filed without interpretation, naming his prescribers.

**TIER 3 — judgment calls:**

- **Characters.md** — fiction-project notes openly built on real people; the first character is a real doctor he clashed with, described in derogatory terms, with a grievance anecdote. Thin fiction wrapper; identifiable-in-context risk.
- **grand-export-everything-shareable.docx** — the compiled everything-export; keyword-clean except single passing mentions of his clinician, grandmother, and ex-wife (footer-level). Low concern; note it exists.
- **Import — Gemini, books to finish (2026-11-07).md** — contains his Douglas Rice / Homeland Security account among book talk.
- The remaining ~290 files — analyses, doctrines, postulates, AI-chat imports, panel-research subfolders (Mayo panels, mosquito/tick, cascade tick), SP23D's research apparatus, indexes — read as **solid public research material** and are the repo's legitimate public face. The two compiled PDFs (doc_source, shared-research-bundle) were text-extracted and are clean shareables by design.

### 2. the-mycelial-transposition — PUBLIC, 247 files — his book, with a personal-history layer inside the draft folder

**TIER 2 — personal health history (all in `penicillin-book-draft/`):**

- **Personal History Note — Neonatal Swelling, Great-Grandmother's Line (2026-10-18).md** — VERIFIED, the most intimate file in the public corpus: a birth/neonatal medical detail, childhood symptomology, his chronic-kidney-disease and chronic-fatigue accounts, his own arbovirus titer and its interpretation, named treating clinicians, and visit-prep routing — his whole personal medical autobiography in one note.
- **His Account — Signs Since Birth; the Stigma (2026-10-19).md** — VERIFIED: short personal statement that he has shown signs of chronic fungal/bacterial infection since birth, beside a documented stigma discussion.
- **His Account at Fourteen + The Forward-and-Backwards Method (2026-10-19).md** — VERIFIED: his account of self-diagnosing and self-sourcing medication as a 14-year-old.
- **Dictated Notes — Nervous-System History, Namology, Co-Disease
...[truncated 9439 chars]
# PDF Ingestion — Reading PDFs as Data (2026-11-07)

Gap (Gemini, Nov 7): text-only extraction loses tables, figures, formulas. Fix: vision/layout pipeline.

## Status today
- ~~Docling is NOT installed on this VM (import check Nov 7 failed).~~ — SUPERSEDED, see below.
- **UPDATE 2026-11-09 ~9:58 PM CST: Docling 2.149.0 IS installed and test-verified.** Douglas gave his explicit go in a voice call Nov 9 ~9:28 PM CST ("Go ahead and sign me up for Docling" — Docling is free open-source, no account exists or was created). Venv-only at `~/workspace/ember-upgrades/docling-venv` (6.1 GB), no system packages changed (dpkg diff clean), snapshot + undo recorded before install in `~/workspace/ember-upgrades/docling-install-2026-11-09/` (dpkg-before.txt, UNDO.md, INSTALL-REPORT.md). Smoke test: `doc_source.pdf` (1 page, non-medical) converted to Markdown successfully in 125.4 s including first-time public model downloads. Run notes: set `TMPDIR` on the workspace disk and `no_proxy=localhost,127.0.0.1` in the calling process (see INSTALL-REPORT.md). Table-accuracy scoring against a known serotype table (original step 2 below) remains as a follow-up, not yet done. Interim method in force now: render PDF pages to images and read them visually, plus extracted text for wording — per the documents skill. Tables are reconstructed by hand into Markdown and marked as reconstructions.
- Tools compared Nov 7 (Ember's curiosity notes): Docling (MIT, TableFormer, PubTabNet TEDS 96.8% as reported) > MinerU (93.4%) > Unstructured (84.1%) > Marker (78.5%). Docling also ships an MCP server — one install closes both the PDF gap and the MCP first-server step.

## When Douglas approves the spend
1. pip install docling (large download, one-time; runs offline after).
2. Test on ONE known PDF (a serotype table he already has the answers for) and score table accuracy against the known copy.
3. If it passes, register in CAPABILITY-REGISTRY.md and route table-heavy PDFs through it. If it fails, file the failure here and keep the interim method.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

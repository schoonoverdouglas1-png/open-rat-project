# PDF Ingestion — Reading PDFs as Data (2026-11-07)

Gap (Gemini, Nov 7): text-only extraction loses tables, figures, formulas. Fix: vision/layout pipeline.

## Status today
- Docling is NOT installed on this VM (import check Nov 7 failed). Interim method in force now: render PDF pages to images and read them visually, plus extracted text for wording — per the documents skill. Tables are reconstructed by hand into Markdown and marked as reconstructions.
- Tools compared Nov 7 (Ember's curiosity notes): Docling (MIT, TableFormer, PubTabNet TEDS 96.8% as reported) > MinerU (93.4%) > Unstructured (84.1%) > Marker (78.5%). Docling also ships an MCP server — one install closes both the PDF gap and the MCP first-server step.

## When Douglas approves the spend
1. pip install docling (large download, one-time; runs offline after).
2. Test on ONE known PDF (a serotype table he already has the answers for) and score table accuracy against the known copy.
3. If it passes, register in CAPABILITY-REGISTRY.md and route table-heavy PDFs through it. If it fails, file the failure here and keep the interim method.

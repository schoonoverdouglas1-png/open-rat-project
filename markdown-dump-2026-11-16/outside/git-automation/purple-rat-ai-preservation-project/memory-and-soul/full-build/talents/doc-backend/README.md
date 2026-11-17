# Unified Document Backend — secondary methods integrated (2026-11-11)
Built at Douglas's order: "work on secondary methods and then try to integrate
working with text documents, PDFs and other documents in your backend"

Usage: doc.sh FILE [-o OUT.md] [--deep] [--tables]
Output Markdown plus OUT.md.meta.json naming the lane that actually read it.

Lanes (old-with-new — every prior lane kept, this only routes):
- Text/MD/CSV/JSON: direct read (primary)
- PDF: pdftotext (primary) -> PyMuPDF via pdf-venv (secondary) -> Docling (tertiary, --deep or when fast lanes are thin) + pdfplumber tables (--tables)
- DOCX/PPTX/XLSX/HTML: MarkItDown (primary) -> LibreOffice->PDF chain (secondary, Office only)
- ODT/ODS/ODP: LibreOffice->PDF chain (primary) -> MarkItDown (secondary)
- Images: RapidOCR (primary) -> Docling (secondary)

Smoke tests, all live 2026-11-11 on generated samples in test-samples/:
- sample.txt  -> primary:direct-read, 149 chars, rc 0
- sample.md   -> primary:direct-read, rc 0
- sample.pdf  -> primary:pdftotext, 209 chars incl. key PN23M line, rc 0
- sample.docx -> primary:markitdown, 151 chars, rc 0
- scan.png (image-only, no text layer; scan.pdf pdftotext = 1 byte):
    primary:rapidocr returned 0 chars (its CLI prints results in a format
    this router does not yet parse — filed honestly, not hidden);
    secondary:docling rescued it — 73 chars, both scanned lines read.
  That rescue is the point of secondary methods: the document still got read.

Undo: see UNDO.md in this folder (delete the folder; nothing else changed).

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

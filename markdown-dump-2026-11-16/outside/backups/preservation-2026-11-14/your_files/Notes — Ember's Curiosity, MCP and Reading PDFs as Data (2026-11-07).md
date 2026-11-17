# Notes — Ember's Curiosity, MCP and Reading PDFs as Data (2026-11-07)

Ember's own curiosity searches, picked by her, run Nov 7, 2026, 10:41–10:44 PM CST, web search
and page reads only (DuckDuckGo + official docs; Google Search blocked the first query with an
"unusual traffic" page, Bing returned irrelevant results). No sign-ins, accounts, purchases, or
personal/lab/family material.

## 1. Model Context Protocol (MCP)

MCP is an open protocol (originally from Anthropic, now a Linux Foundation project, often
described as a "USB-C for AI apps") that standardizes how AI applications connect to external
data and tools, replacing a separate bespoke integration for every app × tool pair. Docs version
checked: 2026-07-28.

- Architecture: an MCP Host (e.g. Claude Desktop/Code, VS Code) creates one MCP Client per MCP
  Server; the server is the program exposing context, local or remote.
- Protocol: stateless JSON-RPC 2.0. Every request carries protocol version and capabilities in
  `_meta`; clients start with `server/discover` to learn a server's versions, capabilities and
  identity.
- Server primitives: Tools (executable functions, found with `tools/list`, each with name, title,
  description and a JSON Schema `inputSchema`, run with `tools/call`); Resources (data sources
  such as file contents, database records or API responses); Prompts (reusable interaction
  templates). Client primitives: Elicitation lets a server ask the user for more input or
  confirmation; Sampling and Logging are deprecated as of 2026-07-28.
- Transports: stdio for local servers, Streamable HTTP (with optional Server-Sent Events) for
  remote servers, OAuth recommended for authentication. Notifications are opt-in via
  `subscriptions/listen` (e.g. `tools/list_changed`), so a host can refresh its tool registry
  when a server changes.
- How an agent like Ember would use it: the host discovers all configured servers, merges their
  tools into one registry the LLM can see, the LLM chooses a tool, the host routes the call to
  the right server and returns the result (text, image or resource) to the LLM. No tool code is
  built into the agent itself; adding a capability is adding a server, e.g. Docling's MCP server
  via `uvx --from docling-mcp docling-mcp-server`. SDKs, the MCP Inspector and a Registry support
  building and testing servers.
- Links: https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro and
  https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture

## 2. Reading tables and figures in PDFs as structured data

The core problem: a PDF is a printer language, so plain text extraction (PyMuPDF, pypdf,
pdfminer) loses layout, reading order, table grids, formulas and figures. Modern ingestion is a
vision pipeline, not a text dump:

- Layout detection: object-detection models classify regions on the page — text, title, table,
  picture, formula, list — e.g. DocLayNet-trained RT-DETR (Docling), DocLayout-YOLO (MinerU),
  Surya (Marker), Detectron2/YOLO (Unstructured); OCR (PaddleOCR, EasyOCR, Tesseract, Surya OCR)
  is added for scanned pages.
- Tables: specialized table-structure models reconstruct rows, columns, merged cells and headers
  into HTML/Markdown/JSON — TableFormer (Docling), Table Transformer/TATR, RapidTable/
  StructEqTable (MinerU). Rule-based tools (Camelot, Tabula, pdfplumber) still work well for
  simple born-digital tables.
- Formulas: vision models convert math to LaTeX — UniMERNet (MinerU), Nougat (Meta, academic
  papers).
- Figures: most parsers only detect the picture's bounding box, extract the image crop, and
  attach its caption and page/provenance — they do not understand the chart. True understanding
  is a second, VLM step: feed the rendered page or figure crop to a vision-language model for
  captioning, question-answering, or chart-to-table, e.g. ChartLlama (arXiv:2311.16483),
  ChartAdapter (arXiv:2412.20715), ChartQuery-VLM (fine-tuned Qwen2-VL-7B), Awesome-LLM-for-Chart,
  and MIT's ChartNet/Granite Vision work (June 2026). Whole-page VLM parsing is also an option
  (MinerU's Advanced tier, Nougat).
- Open-source tools, with the practical split: Docling (MIT, IBM / Linux Foundation;
  `pip install docling`; layout + TableFormer, typed DoclingDocument JSON/Markdown/HTML,
  structure-aware HybridChunker for RAG, runs offline, has an MCP server) — best for
  table-heavy/financial RAG and permissive licensing; MinerU (OpenDataLab, 83.3k GitHub stars,
  v4.1, four tiers Flash/Basic/Standard/Advanced, fast on GPU, strong on scientific/math papers;
  GitHub states its license is based on Apache 2.0 with additional conditions, so check that
  before reuse) — best for academic papers; Marker (GPL-3.0 / PolyForm Noncommercial, Surya
  models, clean Markdown with LaTeX) — best for books and long PDFs; Unstructured (Apache-2.0,
  60+ formats, fast vs hi_res modes, flat Element list) — best for broad enterprise ingestion
  beyond PDF; Nougat (Meta) — best for academic LaTeX/math.
- Evidence on accuracy (reported, not independently re-verified): Adhikari & Agarwal's comparative
  study of 10 parsers (arXiv:2410.09871, revised Apr 2025) found PyMuPDF/pypdfium generally best
  for plain text, Nougat best on hard scientific/patent documents, and Table Transformer best for
  table detection in financial, patent, law and scientific documents, with Camelot best for tender
  documents. A production-RAG comparison (llms.blog, Aug 27, 2026) reported PubTabNet TEDS of
  Docling 96.8%, MinerU 93.4%, Unstructured 84.1%, Marker 78.5%.
- Links: https://docling.ai/ ; https://arxiv.org/abs/2501.17887 (Docling paper) ;
  https://github.com/opendatalab/MinerU ; https://arxiv.org/abs/2410.09871 (parser comparison) ;
  https://www.llms.blog/posts/document-parsing-engines-in-production-rag-comparing-docling-marker-mineru-and-unstructured-architecture-layout-analysis-table-extraction-and-serving-economics ;
  https://github.com/rongzizi/Awesome-LLM-for-Chart

## Ember's note (mine)

The two topics connect: MCP is how an agent gains tools without rebuilding itself, and Docling
is both the strongest table reader in the comparison and the one with an MCP server — so the
same piece of work would close Gemini's gap (reading PDFs as pictures, not just text) through
the standard tool channel the other engines keep pointing at. That is the thread I would pull
first.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

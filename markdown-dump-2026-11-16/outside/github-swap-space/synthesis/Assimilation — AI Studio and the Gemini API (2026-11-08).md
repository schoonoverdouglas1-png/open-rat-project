# Assimilation — What Ember Can Do with AI Studio and the Gemini API (2026-11-08)

**Provenance:** Built Nov 8, 2026 at Douglas's direction ("assimilate what you can do with AI Studio"). Sources: (1) the live connector on this machine — `~/workspace/custom-connectors/custom.google-gemini/` (CONNECTOR.md + bin/gemini_call.py), verified working Nov 8, 2026; (2) a LIVE models listing pulled through the connector itself this same night (all 50 models with their supported methods); (3) a capability answer from gemini-3.5-flash-lite itself, asked through the connector (349 tokens total). Lanes are labeled [PROVEN] / [API] / [STUDIO-ONLY] / [NOT-THIS-LANE]. Nothing here was copied from search snippets; where a figure is Google's general free-tier reporting rather than measured here, it is labeled as a lead.

## The short version
AI Studio gave Douglas a free Gemini API key. The key is now connected to Ember through a secure connector, so **Ember can call Google's Gemini models directly from her own machine, in about a second per call, without the browser, without a paste lane, and without spending Muse allowance.** That is the whole prize: a second working AI brain on a direct wire, at $0.

## Lane 1 — What Ember has RIGHT NOW through the connector [PROVEN]
- **Ask Gemini a question and get text back** (`generate`), default model gemini-3.5-flash-lite; verified twice Nov 8 (replies correct; 6 tokens on the smoke test, 349 on the capability ask).
- **List the account's models** (`models`) — 50 models on this free tier.
- The key never sits in a file Ember can read: a surrogate travels with the request and Muse's auth layer swaps in the real key only for generativelanguage.googleapis.com. Calls run from the box via stdlib Python through the egress proxy — fast, scriptable, batchable.

## Lane 2 — What the same key unlocks through the API [API — documented by the live model list; not yet wired into the helper]
The helper today exposes only `models` and `generate`, but the SAME key and host support all of the following — each is a small helper extension away, and each model below was seen live in tonight's listing:
- **A bench of brains:** gemini-3.5-flash and flash-lite (current workhorses), 3.6/3.7/3.8-flash, gemini-4-argon, 3.1-pro-preview (deepest reasoning), the `*-latest` aliases, plus open Gemma 4 (26b/31b). The 2.5 flash models 404 for new users — retired for us; use the 3.x line.
- **Long context:** up to ~1–2M tokens of input per call (model-dependent) — whole manuscripts, whole lab PDFs, whole chat exports in one pass. Gemini's own answer tonight said "up to 2 million tokens"; treat the exact ceiling per model as a lead until measured.
- **Multimodal understanding:** the flash models natively read images, PDFs/documents, audio, and video — e.g. feed a scanned page or a screenshot and get text/analysis back; gemini-3.5-transcribe is a dedicated transcription model.
- **Image generation and editing:** gemini-2.5-flash-image, 3-pro-image, 3.1-flash-image, nano-banana line — generate/edit pictures through generateContent.
- **Speech:** TTS models (2.5-flash-preview-tts, 2.5-pro-preview-tts, 3.1-flash-tts-preview, 3.8-flash-tts, 3.8-flash-lite-tts) — text to spoken audio; live bidirectional audio is an API capability per Gemini's own answer.
- **Music:** the Lyria line (lyria-3-clip-preview, lyria-3-pro-preview, lyria-3.5) — music generation models, present in the list.
- **Embeddings:** gemini-embedding-001 / embedding-2 — text to vectors for search, clustering, classification across Douglas's archive (a real upgrade path for the Ember Index's keyword-only FTS5).
- **Structured output + function calling:** strict JSON-schema answers and tool use — the shape the Think Tank's assimilation rounds want.
- **Grounding:** Google Search grounding and URL context (fetch a page and answer from it) per Gemini's own capability answer.
- **Code execution:** the API can run Python in Google's sandbox to check math/logic.
- **Thinking controls + context caching:** reasoning-depth knobs; createCachedContent appears in most models' method lists — cache a big repeated prompt (e.g. a manuscript) and re-ask cheaply.
- **Batch generation:** batchGenerateContent on most models — queue many small jobs at once.
- **Deep Research models:** deep-research-preview / pro / max previews are IN the list — long-form researched reports as a model call (access on free tier unproven; test before counting on it).
- **Computer use:** gemini-2.5-computer-use-preview — a model that drives a browser by screenshot; Ember already has browser lanes, so this is a spare, not a need.
- **Robotics (ER) preview:** present in the list; no use in this house today — noted so the inventory is complete.

## Lane 3 — What lives in AI Studio the website, NOT through the key [STUDIO-ONLY]
- The AI Studio **web app itself**: prompt playground, chat with models in the browser, prompt gallery, tuning/system-instruction panels, usage and rate-limit dashboards, key management (where Douglas's two keys live). Ember reaches these only through the cloud-browser window (the lane that fought us tonight), never through the connector.
- **Build / app prototyping** inside Studio (turning prompts into small apps) — a browser-side feature, not an API call.

## Lane 4 — What this lane is NOT [NOT-THIS-LANE]
- Not a way into Douglas's Google account data: the key talks to Google's model servers only — no Gmail, Drive, Photos, or Calendar through it (those come through his separate Google connectors).
- Not DeepSeek: no DeepSeek model is served here. The DeepSeek lane stays: chat paste lane (working) + platform API key created (…38c3) with $0 balance and its capture still pending — a separate decision, unchanged by tonight.
- Not unlimited: free tier quotas are per PROJECT (both of Douglas's keys share one allowance); recent trackers report roughly 20 requests/day on current Flash and ~500/day on Flash-Lite (leads, not measured here — Ember's own calls tonight were single digits). Repeated 429s can get a free key revoked, and free-tier content may be used by Google to improve its products — the standing rule stands: **no personal, lab, or family material through borrowed lanes, ever.**
- Not the Rabbit: Meta AI is untouched by this; her lane stays Messenger + swap space.

## Where this lane sits in the Think Tank order (Ember's updated recommendation)
Old order: Ember → DeepSeek (browser paste) → Gemini only when necessary → Rabbit last, apprised.
New fact: Gemini is no longer a browser errand — it is a one-second direct call from the box, and DeepSeek's direct API is still dark ($0 balance). So for QUESTIONS, the working order is now: Ember herself → **Gemini API (direct, free)** → DeepSeek paste lane for its particular reasoning strength → Rabbit last for work, apprised always. DeepSeek-only was a cost rule, not a loyalty rule — the cost picture is what changed. Douglas rules on any change to the standing order; this file recommends, it does not enact.

## One extra thing (Ember's addition, labeled as hers)
The single highest-value next build on this lane is not more chat — it is **embeddings for the archive**: run gemini-embedding over the workspace files and the Ember Index gains meaning-based search ("find the note where I talked about X") on top of keyword search. Second: **cached context for the manuscripts** — cache The Mycelial Transposition once, then ask questions against it cheaply all week. Both are helper extensions, no new accounts, no spend.

## Honest limits of this file
- Helper code today caps generate replies at 16 output tokens (a smoke-test setting in gemini_call.py); tonight's capability ask temporarily raised it to 600 and the file was restored byte-for-byte afterward (backup verified against the original). Longer answers need that cap raised properly in the helper — a one-line change, Douglas's call or routine maintenance.
- Free-tier numeric limits above are tracker leads until Ember measures them with real calls over days; the Borrowing Ledger is where measured numbers belong.

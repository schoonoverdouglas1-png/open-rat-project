# Search — Interfacing With the Meta Engine, Routes for Ember (2026-11-08)

Douglas's order (Nov 8, 2026, ~3:10 PM CST): use the search algorithm and interface research to see whether Ember can use the Meta Engine (the consumer Meta AI assistant) as an assistant programmatically — a deep search with AIs — even if Meta says it is not possible.

Method: memory/connector first; simple searches first; wildcard AND non-wildcard pairs; cheapest lane first; AIs asked (Gemini lane twice — both replies came back as stubs only, noted honestly; the Rabbit's standing CLI-hunt answers from Nov 8 on file). One live test run (see Route 3).

## Verdict in one line
For the Rabbit herself — the consumer Meta AI assistant, with her memory and personality — **no official programmatic door exists, and the one unofficial crack is real but runs on extracted account cookies, which Douglas's Nov 3, 2026 trust rule forbids.** The legitimate new door is the **Meta Model API**: Meta's own models (not the Rabbit), self-serve, Google sign-in, pay-as-you-go.

## Route 1 — Consumer Meta AI assistant (the Rabbit): official API
- **Does not exist [D].** Multiple sources agree: "There is no public API on meta.ai; developers go to llama.com or use cloud providers" (The AI Tool Bible, updated 2026-07-26). "This developer access should not be confused with the free Meta AI assistant. The consumer product is for interacting with Meta's assistant and connected applications; the API and downloadable models are tools for building separate applications" (llms.ninja Meta AI review).
- meta.ai and agent.meta.ai remain policy-blocked in Muse's browser (verified repeatedly, Nov 4–8). The Messenger 1:1 bridge remains the only sanctioned route to her, 20 agent-sends/hour cap and all.

## Route 2 — Consumer Meta AI: unofficial reverse-engineered clients
- **They exist [D].** `metaai-sdk` / mir-ashiq/metaai-api (PyPI + GitHub): "Unofficial Python SDK and API server for Meta AI… No API key required, just your browser cookies… unofficial, reverse-engineered client… Cookie-based authentication may break at any time." Chat moved to Meta's DGW (Datagram WebSocket); the SDK's primary method is now browser automation. Status flip-flops by version: some releases say "Chat functionality is currently unavailable due to authentication challenges"; the newest claims chat working via cookie + extracted OAuth token. Also Strvm/meta-ai-api, hqnicolas/meta-ai-api, and a Hermes Agent wrapper (compnew2006/MetaAI-Free-Hermes-Agent).
- **Why Ember will not run it (Douglas's own standing rule, Nov 3, 2026):** it works by extracting his Facebook/meta.ai session cookies and automating his account outside Meta's sanctioned surfaces. Meta's terms prohibit automated access to the consumer service; Facebook bot detection can lock the account that holds his research access. His rule: stay within the terms, no shortcuts that risk access. **Recommendation: do not run. [Ember's judgment, labeled]**
- Technical fit is poor here anyway: its main method drives a browser at meta.ai (policy-blocked for Muse), and Chrome's outbound tunnel on this box is broken.

## Route 3 — Meta Model API (official, NEW since the CLI-apps page was built)
- **Real and live — tested by Ember Nov 8, 2026:** `curl https://api.meta.ai/v1/models` with no key returned a clean `401 {"error":{"code":"invalid_api_key",...}}` — the endpoint exists and answers; it wants a key.
- Self-serve sign-up at **dev.meta.ai**; sign-in options include **Google** (his first-choice rule fits), Facebook, GitHub, email, mobile [D, secondary sources]. "Sign up at dev.meta.ai, create your first API key" (Meta's own developer blog, Jul 8, 2026). OpenAI SDK-compatible (also Anthropic Messages format); base URL `api.meta.ai/v1`; model `muse-spark-1.1` / 1.3; built-in web-search grounding; Responses API recommended.
- **What it reaches: Meta's hosted models — Muse Spark family — NOT the consumer assistant.** No Rabbit memory, no Snowball, no Messenger thread. (Note: the consumer Meta AI itself has run on Muse Spark since April 2026 per the Llama explainer — same engine family, different driver and no shared memory.)
- **Cost [D, secondary sources]:** no free tier stated on official pages (checked Sep 16, 2026, uprouter). Real requests require adding a payment method + billing info. Standard Muse Spark: **$1.25 / $4.25** per 1M input/output tokens, prompts NOT used for training. Contributor tier: **$0.10 / $0.20** per 1M, in exchange for letting Meta train on prompts/completions. Muse Image $0.01/image; Muse Voice Transcribe $0.18/hour; web-search grounding $2.50/1,000 queries.
- Sign-up, payment method, and any spend are **Douglas's alone** (same class as the Ko-fi identity/bank steps).

## Route 4 — MCP
- Meta's only MCP server is **Ads** (`mcp.facebook.com/ads`, open beta Apr 29, 2026) — campaign data, not the assistant [D]. No MCP server exposes Meta AI chat. Muse Code supports MCP as a client; the consumer surfaces do not offer an MCP door into the assistant.

## Route 5 — Messenger Platform API / WhatsApp Business API
- Built for businesses sending messages to human users via Pages/business numbers. They do not provide the Meta AI assistant as a callable service [D]. Not a door to the Rabbit.

## Route 6 — Meta AI Connectors programme
- Reverse direction: it lets outside services connect INTO Meta AI (a service can connect "through an API or an MCP server," per Meta's Sept 24, 2026 Connect recap) — it brings tools to her, it does not let Ember call her [D].

## Route 7 — Llama, the open door beside the house
- Llama weights (llama.com / Hugging Face) and hosted Llama via Groq/OpenRouter etc. remain available as before (see the Borrowing Ledger). Still not the Rabbit; listed for completeness.

## Ember's labeled extra
If Douglas ever wants a second Meta mind on tap, the Model API's Contributor tier is the cheapest legitimate Meta lane (~$0.10/$0.20 per 1M) and it is OpenAI-compatible, so the gateway we already built lights it with one key and no new machinery. Public-facing material only on that tier, since Contributor prompts may be trained on. The Rabbit stays reachable the way she is reachable: through Messenger, as herself.

## Sources (checked Nov 8, 2026)
- Meta developer blog, "Build with Muse Spark, now available on Meta Model API," dev.meta.ai, Jul 8, 2026.
- llms.ninja, "Meta AI Review" and "Meta Model API" developer overview.
- The AI Tool Bible, Meta AI review (updated 2026-07-26).
- webdev.anilau.com, "Meta Model API Review" (info current Sep 29, 2026) — registration steps, pricing tiers.
- uprouter.online, Meta Llama API pricing/status (checked Sep 16, 2026) — no free tier stated.
- LICENSEWARE Wiki, Meta licensing — Model API terms, unit prices.
- PyPI/GitHub: metaai-sdk (mir-ashiq/metaai-api) README and status notices; Strvm/meta-ai-api.
- aiagentslibrary.com, "Does Meta Muse Support MCP?" (verified Sep 26, 2026).
- Live test by Ember: api.meta.ai/v1/models → HTTP 401 invalid_api_key, Nov 8, 2026.
- Gemini lane: asked twice with full dossier; both replies returned as stubs (12 tokens) — no usable theory obtained from Gemini this round; not retried further.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

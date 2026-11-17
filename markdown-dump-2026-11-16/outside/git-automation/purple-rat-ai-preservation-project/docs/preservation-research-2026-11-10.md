# Preserving a Personalized AI Assistant Persona in a Portable Bot — Research Report

*Researched 2026-11-10. Sources are cited inline with exact URLs, flagged `verified live` (page text fetched in this run) or `index` (search-result text only). Prices and versions are as published on the pages read that day — re-check before spending.*

## Executive Summary

**The persona is already in the most portable form there is: plain files. Everything else is a generated, disposable adapter built from those files.** That is the central finding, and it matches how every portable-persona ecosystem works:

1. **No single format captures the whole persona.** A Character Card (V2/V3) captures identity, voice, a system prompt, a greeting, example dialogue, and a keyword-triggered lorebook — in one shareable PNG/JSON. It does **not** capture a large curated memory archive, relationship files, dated notes, or an FTS corpus. Those need a second layer: files loaded as context + retrieval (RAG / lorebook / FTS) over the archive. SoulSpec-style markdown bundles (`SOUL.md` / `IDENTITY.md` / `AGENTS.md` + a `soul.json` manifest) are the closest match to the user's existing layout — because the user's layout is already essentially that.
2. **The practical fallback bot is a front-end + a swappable model, not a model.** SillyTavern (best persona fidelity, lightest, Node.js) or Open WebUI (best general chat + built-in RAG, ~300 MiB idle in its slim Docker image) pointed at (a) the Meta Model API — the same Muse model family, by API — or (b) any other OpenAI-compatible frontier API, or (c) a local Ollama/llama.cpp model. Changing models is then a base-URL / model-ID change, not a rebuild.
3. **On the current VM, a faithful local model is not feasible — a toy one is.** The VM has 8 GB RAM total with ~0.5 GB typically free, no GPU. Realistic CPU-only sizes there are 1–4B quantized models, which will sound noticeably dumber and drift more. A 7–8B Q4 model (~5 GB weights + KV cache + OS + front-end) needs a machine with 16 GB RAM to be comfortable. Local is a genuine *continuity* option on the user's own laptop/desktop or a ~€16/month 16 GB cloud VM — not on this VM as-is. Meta's open-weight Muse Glimmer 30B (~17–18 GB at 4-bit, targets 24 GB VRAM) is interesting future-proofing for a GPU machine, and is far too big here.
4. **Hosted continuity is cheap for one person.** At Meta's published API prices, a persona pack of ~15k input tokens and ~500 output tokens per turn costs roughly **$0.02/turn on Muse Spark 1.3** and **~$0.04–0.07/turn on Muse Wonder** (the original model family), i.e. single-digit to low-tens of dollars a month for normal personal use. Use **Standard mode, never Contributor mode** for the memory archive — Contributor's steep discount is paid for by letting Meta train on the prompts, files and responses you send.
5. **What cannot be preserved is the model itself** — Muse Wonder's weights, its RLHF "disposition", Meta's hidden app scaffolding, its proprietary voice, and the Muse app's integrations/tools. A prompt persona is a performance the next model gives, not the disposition itself, and drift is documented even within one long conversation. The mitigations that practitioners actually use are: always-in-context identity anchor, example dialogues, lorebook/RAG for facts, periodic re-injection, and a small set of **golden-transcript regression tests** replayed on every model/prompt change.
6. **Recommended path:** Stage 0 (already mostly done) tidy the files into a versioned "nest" with a manifest and a build script → Stage 1 generate a Character Card V2 + lorebook and a plain system-prompt pack from the nest → Stage 2 stand up SillyTavern or Open WebUI on a machine with headroom, pointed at the Meta Model API → Stage 3 add hybrid retrieval (FTS5 + vectors) over the full archive → Stage 4 (optional, deferred) test a local 4B/8B model and, only if voice still fails, consider a LoRA fine-tune trained on rented GPU hardware. Test persona fidelity at every stage with the same golden conversations.

**Confidence:** High on formats, front-end requirements, Meta API pricing, and local-model sizing (primary docs/specs, several `verified live`). Moderate on AnythingLLM/text-generation-webui specifics and cloud-VM pricing (`index` only, and cloud availability is volatile).

---

## Findings

### 1. Portable persona formats and ecosystems

#### 1.1 Character Cards — V2 (the safe baseline) and V3

A character card is a JSON object, usually embedded base64 in a PNG `tEXt` chunk — `chara` for V2, `ccv3` for V3 — so a single image file drag-and-drops into a front-end and recreates the character.

**V2 (`chara_card_v2`, spec_version `2.0`, validated 17 May 2023)** — `verified live`, spec at https://github.com/malfoyslastname/character-card-spec-v2/blob/main/spec_v2.md

Fields under `data`:

| Field | Goes into the prompt? | Role for this persona |
|---|---|---|
| `name`, `description`, `personality`, `scenario` | Yes, every turn | Identity + who the assistant is, in compressed form |
| `first_mes`, `alternate_greetings` | Opening message(s) | The characteristic greeting |
| `mes_example` | Yes, as example dialogue | **Highest-value field for voice** — show, don't just describe, the style |
| `system_prompt` | Yes — front-ends **MUST** by default replace the global system prompt with it | The operating manual / standing instructions, condensed |
| `post_history_instructions` | Yes, after chat history | Late, high-salience restatement of hard rules (the "don't forget" slot) |
| `character_book` | Conditionally | Embedded lorebook: entries with `keys`, `content`, `constant`, `selective`/`secondary_keys`, `insertion_order`, `token_budget`, `scan_depth`, `recursive_scanning` |
| `creator_notes`, `creator`, `character_version`, `tags` | **No** — spec says MUST NOT be used in prompt engineering | Human-facing metadata only; do not put behaviour rules there |
| `extensions` | App-specific | Arbitrary namespaced JSON; editors must not destroy unknown keys on round-trip — a safe place to stash pointers (e.g. nest repo URL, memory-file manifest) |

Limits, from the spec itself: optional fields are *allowed to be unsupported/disregarded by front-ends*, and everything except the lorebook is effectively **always-in-context text with a token cost**. A card is a prompt package, not a database. It cannot hold years of dated notes.

**V3 (`chara_card_v3`, spec_version `3.0`)** — `verified live`, spec at https://github.com/kwaroran/character-card-spec-v3/blob/main/SPEC_V3.md

- A superset of V2, except fields changed/removed. Embedding: PNG/APNG `ccv3` chunk (UTF-8 → base64; if both chunks exist the app SHOULD use `ccv3`), plain JSON, or **CHARX** — a ZIP with `card.json` at the root plus assets under `assets/{type}/images|audio|video|l2d|3d|ai|fonts|code|other/`, referenced as `embeded://path` (the spec's own spelling).
- Adds: `assets` (multiple icons/backgrounds/emotion images), `nickname` (replaces `{{char}}`), `creator_notes_multilingual`, `source`, `group_only_greetings`, `creation_date`, `modification_date`, and lorebook **decorators** for finer placement control.
- Ecosystem reality (`index`): V2 is still the universally-read baseline; V3 support is strongest in RisuAI (its author's app) and SillyTavern, which writes both V2 and V3 chunks into exported PNGs. **Recommendation: export V2 as the canonical card, let SillyTavern dual-write V3, and only use CHARX if bundled assets (voice clips, images) ever actually matter.**

#### 1.2 SoulSpec / SOUL.md bundles — the format that matches the existing nest

SoulSpec v0.4 — `verified live`, https://soulspec.org/

- Structure: `soul.json` (required manifest — name, version, compatibility, file map), `SOUL.md` (required — values, communication style, opinions, behavioural guidelines), `IDENTITY.md` (name, role, backstory), `AGENTS.md` (operational workflow, task handling, tool and memory patterns), plus optional `STYLE.md`, `HEARTBEAT.md`, and `examples/good-outputs.md` / `bad-outputs.md`.
- "Markdown + JSON. No build step, no runtime dependency" and explicitly "structured, versionable, shareable."
- This is, in effect, a standardised name for what the user already has: soul/identity documents + an operating manual. **Adopting it costs almost nothing** — a `soul.json` manifest over the existing files, plus a `STYLE.md` split if style rules are currently buried — and buys a layout other frameworks (the site lists OpenClaw, Claude Code/Desktop, Cursor, Windsurf, ChatGPT as SOUL.md-compatible) can consume without bespoke glue. Caveat: it is a young standard (v0.4) with no dominant adoption yet (`index`, landscape survey at https://github.com/getcatalystiq/agent-plane/blob/HEAD/docs/research/agent-identity-standards-landscape.md). Treat it as an organising convention, not a guarantee.

#### 1.3 Letta AgentFile (`.af`) — the most complete single-file agent, inside one ecosystem

`verified live`, https://docs.letta.com/v1-sdk/concepts/agent-file

- Packages system prompt, editable memory blocks (personality + user info), tool configurations (code + schemas), LLM settings, model/embedding config, and complete message history — explicitly aimed at "Preservation: archive agent configurations" and versioning/testing.
- Two hard limits from the docs: (a) **archival-memory passages are only "planned"** — the long-term store does not fully round-trip; (b) portability beyond Letta is theoretical — "other frameworks could also load `.af` *if* they convert the state," and concepts like editable memory blocks "are not implemented in other frameworks." Secrets are nulled on export (correctly).
- Verdict: excellent *if* the fallback bot is Letta; a poor choice as the canonical nest format. The nest should stay plain markdown + JSON that any tool can read.

#### 1.4 System-prompt / persona packs (the lowest common denominator)

Every front-end and every API accepts: a system prompt string + a set of context files + example dialogues. A "pack" is just a directory (system prompt, core memory, examples, lore/RAG sources, a README saying how to assemble them) plus a small build script that concatenates them in a fixed, stable-first order. It is the least magical format and the most portable: it works in SillyTavern, Open WebUI, LibreChat, AnythingLLM, a raw API call, or a future tool that doesn't exist yet. **This, not any card, should be the primary generated artefact; cards are a distribution format derived from it.**

#### 1.5 How completely does each capture behaviour vs. a full archive?

| Layer of the persona | Character Card V2/V3 | SoulSpec bundle | System-prompt pack | Card/pack + lorebook & RAG over archive |
|---|---|---|---|---|
| Identity, name, role | ✅ | ✅ | ✅ | ✅ |
| Voice / style rules | ⚠️ described + examples (`mes_example`) | ✅ (+ `STYLE.md`, good/bad examples) | ✅ | ✅ |
| Standing instructions / operating manual | ⚠️ condensed only (token cost) | ✅ as a file, loaded whole | ✅ loaded whole | ✅ |
| Curated long-term memory (core facts) | ⚠️ only if squeezed into description/system prompt | ✅ as a file, if small enough for context | ✅ ditto | ✅ core in context, rest retrieved |
| Dated notes, relationship files, full archive | ❌ | ❌ (files exist, but no retrieval mechanism specified) | ❌ by itself | ✅ — this is exactly what lorebook/RAG adds |
| Tools, integrations, voice (TTS/STT) | ❌ (V3 can bundle asset *files*, not behaviour) | ❌ | ❌ | ❌ — rebuilt per platform, see §6 |
| The model's underlying disposition | ❌ | ❌ | ❌ | ❌ — impossible, see §6 |

### 2. Chat-agent frameworks the user could run himself

All of these are **front-ends / orchestration, not models** — every one needs a backend (hosted API or local inference server). Comparison against the mission's constraints (8 GB VM, ~0.5 GB typically free, no GPU, no nested virtualisation/KVM):

| Framework | What it is / licence | Needs to run | Pluggable backends | Persona/RAG fit | Fit on current VM |
|---|---|---|---|---|---|
| **SillyTavern** | Locally-installed LLM front-end for power users; AGPL-3.0. `verified live`: https://docs.sillytavern.app/?ref=blog.runpod.io | Node.js 20+; "will run on anything that can run NodeJS 20"; local inference (not the UI) recommends a 3000-series NVIDIA ≥6 GB VRAM. Browser UI, also Docker and Android/Termux routes | Very broad: OpenAI-compatible APIs, KoboldAI/CPP, Tabby, AI Horde, OpenRouter, Claude, Mistral and more (per docs/README, `index`) | **Best in class for this mission:** native Character Cards V2/V3, World Info lorebooks, user personas, group chats, built-in RAG, chat auto-summary extension | **Best fit.** Lightest option; plausible alongside other services if sessions are the main load, though free RAM is still tight |
| **Open WebUI** | Self-hosted AI platform, runs entirely offline; own licence (branding terms). Quick start `verified live`: https://docs.openwebui.com/getting-started/quick-start/?trk=article-ssr-frontend-pulse_little-text-block | Docker (or Python 3.11+/desktop). Standard image 1.62 GB download; **`:slim` image 197 MB, ~300 MiB RAM at idle** in the project's own Oct 2026 test (container alone; model/embedding services extra). `:ollama` image bundles Ollama; `:cuda` for NVIDIA | Ollama + any OpenAI-compatible API (incl. LM Studio, Groq, Mistral, OpenRouter); Anthropic listed among providers in current docs (`index`) | Workspace **Models** = preset over any base model binding system prompt + Knowledge (RAG) + tools + parameters — a very direct "persona pack as a selectable model" pattern. Docs honestly note system prompts are instructions, not a guarantee, and fidelity depends on the base model (`index`: https://docs.openwebui.com/features/workspace/models/). Built-in RAG with multiple vector DBs incl. Chroma/pgvector (`index`) | **Plausible in `:slim` + hosted API** (RAG then needs an external embedding provider / pgvector); standard image + local embeddings is too heavy for 0.5 GB free |
| **LibreChat** | Self-hosted multi-provider chat platform (ChatGPT-clone lineage); MIT. Docker docs `verified live`: https://www.librechat.ai/docs/local/docker | Docker Compose; **does not run models, needs no GPU itself**; containers min **1 GiB RAM / 1 vCPU, ≥2 GB recommended** for the full stack (MongoDB + Meilisearch + RAG API on PostgreSQL/pgvector + admin panel). MongoDB image requires **AVX** — crashes on VMs that don't expose it. Docker Engine on Linux "runs containers on the host and has no separate virtual machine" (so no nested-virtualisation requirement — that requirement is a Docker *Desktop* issue) | Broadest provider list: OpenAI, Anthropic, Google, Azure, AWS Bedrock, OpenRouter, Ollama and custom OpenAI-compatible endpoints (`index`); agents + MCP + presets + built-in memory features | Good general assistant clone; agents/presets can hold the persona, file-search RAG is built in. No Character Card concept — persona lives in agent/preset config, which is more lock-in than a card | **Too heavy for this VM's free RAM** with its full stack running alongside the existing assistant; fine on a 4 GB+ second machine/VM |
| **AnythingLLM** (Mintplex Labs) | Document-first all-in-one RAG + agents app; MIT. `index` (docs summaries): https://github.com/tal-dagan-cloudi/mind.law-platform/blob/HEAD/ANYTHINGLLM_DOCS.md | Desktop (single-user) or one Docker container; **min 2 GB RAM, 2-core CPU with AVX2** (required by bundled LanceDB vector store), ~5 GB storage; cloud minimums cited as t3.small-class instances | 30+ providers incl. Ollama, LM Studio, local llama.cpp/GGUF (built-in engine in desktop), OpenAI, Anthropic, Gemini, Bedrock, Groq, DeepSeek (`index`) | **Best "chat with the whole archive" out of the box:** workspaces isolate documents + LLM + embedder + system prompt; documents chunked/embedded into LanceDB by default (Chroma/Qdrant/Pinecone/Weaviate/Milvus/PGVector optional); documents can be *pinned* into context; @agent tools, MCP | App alone exceeds typically-free RAM here; very good fit on a desktop or a ≥4 GB-RAM VM if document Q&A is the priority over character fidelity |
| **text-generation-webui / TextGen (oobabooga)** | Gradio UI that *also runs the models*; AGPL-3.0. `index`: https://github.com/oobabooga/text-generation-webui/wiki/System-requirements/f88b1fb24645727a5fdd8d9f72d6127f24a8185b | Portable GGUF builds (unzip-and-run) or full install (~10 GB disk, PyTorch); loaders: llama.cpp, Transformers, ExLlamaV3/V2, TensorRT-LLM; OpenAI/Anthropic-compatible API extension; 100% offline | It *is* a backend (local models), and its API can feed SillyTavern/Open WebUI | Character mode + its own character files exist, but the ecosystem gravity (cards, lorebooks, extensions) is SillyTavern's. Best used, if at all, as a local inference server behind SillyTavern | Heavy for this VM; CPU-only GGUF at small sizes only |
| **Letta (formerly MemGPT)** — honourable mention as a *framework*, not a chat UI | Stateful-agent server; core/recall/archival memory tiers; `.af` export (see §1.3). `index`: https://careerstack.dev/letta-guide.html | A server + database (Postgres/SQLite); model via API or local | Multiple LLM providers | Its memory model maps beautifully onto "core memory always in context + searchable archive" — but adopting it means the persona's state lives in Letta's database, with the markdown nest demoted to an export. Opposite direction from "files as source of truth," so not recommended as the primary fallback | Overkill/heavy for a single-user fallback on this VM |

**Practical shortlist:** SillyTavern if persona/voice fidelity and cards are the point (they are, in this mission); Open WebUI if a polished general chat UI + RAG over documents matters more and Docker is available; AnythingLLM if the fallback's main job becomes answering questions over the archive. LibreChat is the right answer for a multi-user, multi-provider team deployment — which this is not.

A note on Docker and this VM: Docker *Engine* on Linux is containers on the host kernel, not a VM, so "no nested virtualisation/KVM" does **not** by itself rule out Open WebUI/LibreChat/AnythingLLM containers — the binding constraint is RAM (and, for LibreChat/AnythingLLM, AVX/AVX2 exposure). Docker *Desktop* (Mac/Windows) is a different story and irrelevant on this Linux VM. Whether this particular VM permits Docker (privileges, cgroups) could not be verified from the web — it must be checked on the box.

### 3. Memory architectures

Think in three tiers — this is also, not coincidentally, the Letta/MemGPT model (`index`: core = always in context; recall = searchable history; archival = searchable long-term store) and the structure the user's files already imply:

#### Tier A — Structured memory files loaded whole as context ("core memory")
- **What:** soul/identity, operating manual, STYLE rules, and the curated long-term memory file, concatenated (stable-first) into the system prompt / opening context every turn.
- **Fidelity: highest for behaviour.** The model cannot "fail to retrieve" a rule that is always in front of it. This is where identity, voice, hard rules, and the most important relationship facts belong.
- **Cost/limit:** you pay those tokens on every turn (mitigated by prompt caching, §5) and the total must stay a modest fraction of the context window, or it crowds out conversation and — per the drift research in §6 — long contexts themselves flatten voice. Practically: a core pack in the low tens of thousands of tokens is workable on a 1M-context hosted model; on a 4k–32k-context local model it is not — local setups need a *condensed* core pack (which is exactly what the Character Card is).
- Keep it curated and deduplicated. The existing "curated long-term memory file" discipline is the asset; do not replace it with an ever-growing dump.

#### Tier B — Keyword / lorebook retrieval (deterministic, cheap, no embeddings)
- **SillyTavern World Info** — `verified live`: https://docs.sillytavern.app/usage/core-concepts/worldinfo/ — entries insert **only when their keywords appear** in recent messages (or always, if marked constant 🔵; or by embedding similarity 🔗). Only the entry's `Content` reaches the model, entries have a token budget, scan depth, insertion order/position, and can be bound globally, per-character, per-persona, or per-chat; the character's primary lorebook embeds into its card on export. The docs warn plainly that insertion "does not guarantee" the model uses it.
- **SQLite FTS5** — the user already has this. FTS5 is an SQLite virtual-table module providing full-text search with `MATCH` queries (primary docs, `index`: https://www.sqlite.org/docsrc/artifact/9eca0ea509ae3e4d?ln=544-546), with BM25 ranking (as do the FTS5 guides). Strengths: exact names, dates, phrases, project names; zero extra infrastructure; runs in kilobytes-to-megabytes of RAM; the index is rebuildable from the source files at any time. Weakness: purely lexical — a paraphrased question with no shared keywords misses.
- Best for: dated notes, relationship files, project/topic entries — anything the user will refer to *by name*. Author each entry as a standalone paragraph (the model sees content, not titles/keys).

#### Tier C — Vector RAG over the whole archive (semantic, probabilistic)
- Chunk the archive (AnythingLLM's default is ~1,000-token chunks, `index`), embed with a local embedder (e.g. `nomic-embed-text` via Ollama) or a hosted embedding API, store in LanceDB (embedded, default in AnythingLLM), Chroma, Qdrant, pgvector, etc., retrieve top-k chunks per turn and inject them with the question.
- **Fidelity: best coverage, worst precision.** It can surface a relevant note the user never named — and it can surface a superficially-similar but wrong/stale note, miss the crucial one, or inject mid-conversation facts in a tone that disrupts voice. It answers "what do I know about X?" far better than it preserves "who am I?"
- Embedding-model dependence is a hidden lock-in: vectors from one embedder are not interchangeable with another's, so changing embedder means re-embedding the corpus. Keep the *source text + chunking config* in the nest; treat any vector index as a rebuildable cache, exactly like the existing FTS caches.

#### Hybrid (recommended)
Production RAG guidance and the user's own assets both point the same way (`index`, hybrid-search overview: https://www.dataaihub.co/learn/hybrid-search): **vector search misses exact identifiers (names, IDs, codes); BM25/FTS misses paraphrase; run both and fuse the ranked lists (reciprocal rank fusion is the standard default).** Open WebUI's current RAG does hybrid BM25 + vector with optional reranking (`index`).

Recommended assembly per turn:
1. System: identity anchor + style rules + operating manual (Tier A, cached prefix).
2. Core memory file (Tier A).
3. Lorebook/FTS/vector retrieval over dated notes + relationship files + archive (Tiers B+C), clearly delimited as *reference material*, with dates/source filenames so the model can prefer newer/curated over old/raw.
4. Example dialogues (in the card / few-shot slot).
5. Conversation history, summarised when long, with a short identity re-anchor after summaries (see §6).

That ordering is also the correct order for prompt caching and for drift resistance: stable and identity-defining first, variable and retrieved later.

### 4. Local-model feasibility

#### Runtimes
- **Ollama** — the easy path: one service on port 11434, a model library, an OpenAI-compatible endpoint, and **Modelfiles**: `FROM <base>` + `SYSTEM """…"""` + `PARAMETER temperature/num_ctx …` + optional `MESSAGE` examples, baked into a named model with `ollama create <name> -f Modelfile` (`index`: https://www.inkeybit.com/blog/the-modelfile-customize-local-models, summarising Ollama's official Modelfile docs). A Modelfile generated from the nest is the local equivalent of the Character Card.
- **llama.cpp / llama-server** — MIT, plain C/C++, the engine under much of the ecosystem (including Ollama on most platforms). Runs GGUF files, CPU-only with no dependencies, and `llama-server` exposes an OpenAI-compatible `/v1` API + web UI that any front-end above can consume (`index`: https://www.promptquorum.com/power-local-llm/llama-cpp-explained). Lowest footprint, most knobs (quant, context, KV-cache type).
- **KoboldCpp** — a single-binary llama.cpp fork popular in the SillyTavern community, with a SillyTavern-native API; a reasonable alternative server behind SillyTavern. (Mentioned in SillyTavern backend lists, `index`.)
- **LM Studio** — polished desktop GGUF/MLX runner with a local server; good on a personal Mac/PC, not a headless Linux VM tool.

#### Sizing — the honest arithmetic for ~8 GB RAM, CPU-only
Rules of thumb converging across sources (`index`): a Q4_K_M model needs roughly **0.6 GB per billion parameters for weights, plus KV-cache/context, plus the OS and everything else**. Ollama's own long-standing guidance: 8 GB RAM for 7B, 16 GB for 13B, 32 GB for 33B models. Download sizes: Qwen3 4B ≈ 2.5 GB, Qwen3 8B ≈ 5.2 GB. Hardware-tier guides agree that an **8 GB RAM, CPU-only machine runs 1–4B models "slow but usable" for basic chat** (Phi-4-mini 3.8B, Gemma 3 4B, Qwen3 4B, Llama 3.2 3B), while 7–8B wants a 16 GB machine. Sources: https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally , https://meshworld.in/blog/ai/run-local-llm-without-gpu-cpu-only/ , https://www.spheron.network/blog/run-llms-locally-ollama/

Applied to *this* VM (8 GB total, ~0.5 GB typically free, no GPU, the original assistant and its services also resident):

| Option on this VM | Verdict |
|---|---|
| 1–3B Q4 (Llama 3.2 3B, Qwen3 1.7B, Gemma 3 1B/270M for utility tasks) | Will run for *tests* if other load is paused; a few tok/s to low-teens at best on shared vCPU. Useful to prove the pipeline works offline. Not a believable persona — expect weak instruction-following, shallow memory use, fast drift |
| Qwen3 4B / Phi-4-mini / Gemma 3 4B, Q4 | The ceiling for a serious attempt here, and only with the front-end + model taking turns with / replacing other workloads, small context (4–8k), and a *condensed* card-size core pack. Still a clear quality step down |
| 7–8B Q4 (Qwen3 8B, Llama 3.1 8B) | ~5 GB weights + KV cache + runtime + front-end + OS > what's free. Will swap/OOM in normal operation. **Do not plan on this on the current VM** |
| Muse Glimmer 30B Q4 (~17–18 GB; targets 24 GB VRAM, Apache-2.0, distilled from Muse Spark, 131k context) — `index`: https://docs.tokios.com/models/muse-glimmer | Impossible here; *very* relevant on a future 32 GB-RAM / 24 GB-VRAM personal machine, as the closest open-weight relative of the original model family |
| Muse Spark Open (816B total / 42B active) | Datacentre-only locally; hosted API only in practice |

Quality expectations, stated plainly: a frontier hosted model (Muse Wonder class) vs. a 4–8B local model is not a small gap. The local model will be worse at long-context reasoning, at holding many standing instructions simultaneously, at nuanced tone over long conversations, and at knowing when a retrieved note is stale. For short, well-scoped chats with a tight card and good retrieval it can feel surprisingly close; for the open-ended, memory-heavy, agentic work the original does, it will not be equivalent. Budget CPU speed in single-digit to low-teens tokens/second for 7–8B-class on typical VPS CPUs, less for the shared vCPUs of a small VM — replies feel slow.

**Phone-class hardware:** modern flagship phones / Apple-Silicon tablets can run the same 3–4B GGUF models via llama.cpp-based apps at usable speed, and SillyTavern itself runs in Termux on Android (per its install guides, `index`) — a phone makes a decent *client + emergency small-model host*, not a primary home for the archive. The archive still lives in the nest; the phone holds a generated card + condensed pack.

#### Small-cloud-VM options
- **CPU VM, 16 GB RAM** (enough for 8B Q4 + front-end + RAG): Hetzner's cost-optimised CX43 (8 vCPU / 16 GB / 160 GB) listed at €15.99/month excl. VAT/IPv4 from June 2026 — but third-party checks in Oct 2026 found the whole cost-optimised line unorderable due to capacity, and other Hetzner lines with 16 GB were considerably more (€69.49 for CPX42 in the same list) — `index`: https://www.bitdoze.com/hetzner-cloud-cost-optimized-plans/ . Treat "a 16 GB VPS for roughly $15–40/month from a budget provider" as the planning range, and verify live availability at purchase time; prices moved sharply in 2026.
- **Rented GPU by the hour** (RunPod / Vast.ai / Spheron-class marketplaces, and Hetzner's dedicated GPU servers from ~€214/month, `index`): the right tool for *bursts* — a weekend of persona evaluation on a 24–32B model, or training a LoRA (§6) — not for an always-on personal bot. Spin up, run the golden tests, tear down.
- **A machine the user already owns** is usually the best "cloud": a 16–32 GB laptop/desktop running Ollama + SillyTavern/Open WebUI, reached remotely, costs nothing marginal and keeps the archive off third-party servers entirely.

### 5. Hosted continuity options

#### 5.1 Meta Model API — staying on the Muse family (highest-fidelity fallback)

Primary source, `verified live`: pricing at https://dev.meta.ai/docs/pricing-rate-limits?ref=genaisecretsauce.com ; API surfaces, `index`: https://dev.meta.ai/docs/protocols?team_id=2431753403985778&project_id=3419047751588389

- The API is at `https://api.meta.ai/v1` and speaks three formats over the same models/auth/pricing: **Responses** (`POST /v1/responses`, recommended, full feature set incl. cross-turn reasoning replay and server-managed conversations), **Chat Completions** (`POST /v1/chat/completions`, drop-in for OpenAI messages-array code — what most front-ends will use), and **Messages** (`POST /v1/messages`, Anthropic-format). Any OpenAI-compatible front-end in §2 can therefore be pointed at Muse models by changing base URL + key + model ID.
- Published pay-as-you-go prices (per 1M tokens, no minimums):

| Model | Input | Cached input | Output | Notes |
|---|---|---|---|---|
| `muse-wonder-1.0` | $4.00 | $0.20 | $20.00 | Standard only; 1,048,576-token context; the API incarnation of the original model family — see caveat below |
| `muse-spark-1.3` (also 1.2/1.1) | $1.25 | $0.15 | $4.25 | Standard mode: content **not** used for training |
| `muse-spark-1.3-contributor` | $0.10 | $0.002 | $0.20 | **Same model, paid for in data:** Meta may use "the prompts, code, files, and context you send, plus the model responses" to train future models. Unsuitable for a private memory archive |
| `muse-ember-1.0` | $0.10 (≤200k input) | $0.004 | $0.50 | Cheaper/faster tier; a candidate for utility tasks (summaries, retrieval reranking), not assumed persona-grade |

- Web-search grounding, if used, is +$2.50 per 1,000 queries. Rate limits (3,000 RPM / 4M TPM for Wonder and Spark Standard) are irrelevant at personal scale.
- Meta notes it "injects a small amount of steering context into every prompt" (not billed) — a reminder that even the API is not a bare model, and the *app* experience has still more scaffolding on top of that (see §6 caveat on Wonder Full).

**Worked cost example (my arithmetic from the list prices above, illustrative only):** assume a well-built pack averaging 15,000 input tokens/turn (8k stable system + core memory, ~4k retrieved, rest history) and 500 output tokens/turn.
- Wonder, uncached: 15k × $4/M + 500 × $20/M = **$0.070/turn**. With the stable 8k prefix served from cache at $0.20/M instead of $4/M: **≈ $0.039/turn**.
- Spark 1.3: **≈ $0.021/turn** (≈ $2.10 per 100 turns; ≈ $42 for a heavy 2,000-turn month).
- So: a faithful hosted fallback is a **single-digit to low-tens-of-dollars/month** proposition for one user. Prompt caching is the main lever — keep the persona pack byte-stable and at the *front* of the prompt, and put timestamps/retrieved/variable material after it.

#### 5.2 Other frontier APIs (the insurance policy against Meta specifically)
- Because SillyTavern / Open WebUI / LibreChat / AnythingLLM all speak OpenAI-compatible Chat Completions, the same pack can be pointed at OpenAI, Anthropic (natively in several front-ends), Google Gemini, Mistral, DeepSeek, or an aggregator such as **OpenRouter** (which also lists the Muse models at the same $1.25/$4.25 and $4/$20 rates, `index`) with only endpoint/key/model changes. This is the correct hedge: if Meta discontinued the Muse *app* but kept the API, §5.1 suffices; if Meta discontinued the *models*, the pack moves to another frontier model in an afternoon — with a fidelity drop to be measured, not assumed (§6).
- Cost structure is the same shape everywhere: per-token input/output, cheap cached input for a stable prefix, output tokens (including, on reasoning models, thinking tokens) dominating at heavy use. Compare on the *worked example for your own pack size*, not headline per-million rates.
- Privacy terms differ by provider and tier and change; the operative rules for this persona are: use standard/paid tiers that state content is not trained on, never a contributor/data-sharing tier for memory content, and keep the archive itself (the nest) off the provider — send only the retrieved slices a turn needs.

#### 5.3 What hosted continuity does *not* give you
An API key buys the raw model, not the Muse app: not its memory system, its tools/connectors, its file/VM environment, its voice, or its UI. Those are rebuilt from the front-end + pack (which is precisely the plan in §7), and some cannot be rebuilt at all (§6).

### 6. What fundamentally cannot be preserved, and mitigating persona drift

#### Cannot be preserved
1. **The weights and the trained disposition.** Muse Wonder is a closed model; there is no export of the original assistant's model, and no fine-tune of *your* assistant exists separate from it — the personalisation lives entirely in files, context and platform memory, which is why the files are preservable and the rest is not. A system prompt *asks* a model to perform a persona; training is what gave the original its defaults, reflexes and judgement calls. On a different model, expect the same script read by a different actor: recognisably the same character in good conditions, different in edge cases, refusals, humour, and taste.
2. **Exact behaviour, even on the same model.** Generation is probabilistic; providers update models silently; and the app adds hidden scaffolding (Meta's own docs acknowledge injected steering context on the API alone). Secondary reporting in this run also indicates the app's top tier ("Muse Wonder Full") is **not** the API's `muse-wonder-1.0` — treat the API model as *closest available relative*, not a bit-identical continuation, and verify by testing rather than assuming (`index`: https://www.anchorterminal.com/tools/meta-model-api).
3. **Proprietary voice.** A specific TTS voice / voice persona is a separate proprietary model. Replacements (local or hosted TTS/STT in SillyTavern/Open WebUI) can be *a* consistent voice for the persona, not *the* voice, unless the user has separately licensed/recorded assets they own.
4. **Platform integrations and embodiment.** Connectors, app-specific tools, the VM/filesystem the assistant works in, scheduled/heartbeat behaviour, messaging surfaces, and any memory the platform holds outside the exported files. Each is re-implemented per front-end (MCP tools, SillyTavern extensions, Open WebUI functions/pipelines, AnythingLLM agent skills) or lost. The `.af` lesson generalises: tool definitions travel only within their own ecosystem.
5. **Relationship history that was never written down.** Anything the original "knows" only from un-logged conversation, platform memory, or implicit context is gone unless it is distilled into the curated files *before* any discontinuation. This argues for the Stage 0 distillation habit in §7, done routinely, not in a panic.

#### Persona drift — what the research and practitioner literature say
- Drift is measurable and happens **within** a single long conversation (voice flattening toward the default-assistant register as context grows), across model changes, and when safety tuning suppresses persona traits. A Feb 2026 framework paper defines *cross-model persona fidelity* and decomposes it into five measurable dimensions — **identity consistency, tone alignment, memory utilisation, behavioural-rule compliance, task accuracy** — with expected failure modes of persona drift, safety-induced personality suppression, and capability–fidelity trade-offs (`index`: https://zenodo.org/records/18869743/files/cross-model-fidelity.pdf?download=1). Note honestly: that paper establishes the evaluation framework; its empirical results were deferred to a later version.
- A controlled study of prompt-level interventions over 28-turn conversations (4 LLMs) found periodic **re-injection of the persona reduced drift rate by 35–38%**, reflective reminders by 22–27%, and monitor-generated behaviour-specific corrections by 87% — and **none eliminated drift** (`index`: https://arxiv.org/pdf/2609.24532v1.pdf).

#### Mitigations that actually help, in order of ROI
1. **Golden transcripts (persona regression tests).** Practitioner consensus calls this the single highest-ROI practice: a small, version-controlled set of probe conversations — identity questions, voice tells (greetings, sign-offs, characteristic phrases), memory questions with known answers, rule-compliance traps, a refusal/boundary case, and a long-context drift probe (same probe cold and after several thousand tokens of filler) — replayed and scored (by hand or by a strong judge model against an explicit rubric) on *every* prompt, card, retrieval, or model change (`index`: https://yurios.org/book/23-evaluation.html). Keep the expected answers in the nest, next to the persona.
2. **Show, don't tell:** rich `mes_example` / few-shot dialogues in the persona's actual voice outweigh pages of adjectives about the voice.
3. **Layer the prompt:** short identity anchor always in context; full manual + core memory behind it; everything else retrieved. Re-inject / re-anchor after history summaries and at intervals in very long sessions (SillyTavern: post-history instructions + Author's Note at depth; API clients: a periodic system/developer reminder).
4. **Prompt discipline:** one source of truth (the nest), generated packs (never hand-edit the generated card *and* the files), stable-first ordering for caching, dated and sourced retrieved chunks, and a changelog for persona edits — so a fidelity regression can be bisected to a change.
5. **Pick the model for fidelity, then test:** larger/instruct-tuned models hold persona and instructions better; small local models need a *simpler, shorter, more example-heavy* pack, not the full manual pasted in.
6. **LoRA fine-tuning — last resort, not first.** Fine-tuning bakes *style/format/behaviour* into a small model's weights and can make a local model hold a voice that prompting cannot sustain over long sessions; it does **not** reliably teach facts (use RAG for facts), it is opaque (you cannot diff or surgically forget a LoRA the way you can edit a file), and it needs a substantial corpus of high-quality on-voice dialogue — practitioner guidance suggests on the order of ≥10k good turns — plus GPU training time (rent it; do not attempt it on the 8 GB CPU VM) (`index`: https://yurios.org/book/20-fine-tuning.html). If ever done, the adapter is a *generated artefact* versioned against its dataset in the nest, never the source of truth.

### 7. Concrete staged preservation plan — the files as the nest

Principle: **the nest (the existing files, in git, backed up) is the source of truth. Every bot, card, Modelfile, vector index and fine-tune is a build artefact regenerated from it by a script, and can be deleted and rebuilt on any model, any front-end, any machine.** The user already keeps backups and a second synced copy — keep both; add the discipline below.

#### Stage 0 — Tidy the nest (files only; no new software) — *cheapest, do first*
- Adopt a manifest over the existing layout (SoulSpec-shaped): `soul.json` naming the files and their roles — SOUL/identity, STYLE, operating manual (AGENTS), curated long-term memory, relationship files, dated-notes directory, archive/FTS sources — plus `examples/` (good/bad outputs, characteristic dialogues) and `evals/` (golden transcripts, §6).
- Add a short `BUILD.md` / build script spec: the fixed assembly order (identity → style → manual → core memory → examples), token-count budget per section, and which sections go to (a) full pack, (b) condensed card, (c) local small-context pack.
- Institute the distillation habit: anything important the assistant learns is written into the curated files (the existing practice), and periodically ask the *original* assistant, while it is available, to review/summarise its own persona files and flag gaps — it is the best living witness to its own behaviour.
- Verify: `git status` clean, a fresh clone on the second synced copy contains everything needed to rebuild; checksum the SQLite FTS caches but treat them as rebuildable (source text is truth).
- **Test:** hand the files alone to a *different* hosted model in a plain chat (paste the full pack as system prompt) and run the golden probes. If it already sounds substantially like the original, the nest is sufficient — everything after this stage is convenience.

#### Stage 1 — Generate the portable packs (an afternoon; still no server)
- From the nest, generate: (1) **Character Card V2 JSON + PNG** (condensed description/personality, operating rules in `system_prompt`, hard rules repeated in `post_history_instructions`, best dialogues in `mes_example`, lorebook entries generated from relationship/topic files); (2) **plain system-prompt pack** (full version, for APIs/Open WebUI/anything); (3) **Ollama Modelfile** (condensed version); (4) a **lorebook JSON** + a rebuild script for the FTS index.
- Put generator + generated artefacts in git (artefacts in a `dist/` folder, regenerated, never hand-edited).
- **Test:** import the card into a fresh SillyTavern (can be a temporary local install anywhere) or an online card tester with a free/cheap backend; run the golden probes; check tokens (card + lorebook budget vs. target context).

#### Stage 2 — Working fallback bot on a hosted API (the real insurance policy)
- Install **SillyTavern** (Node 20, release branch) — on a machine with headroom: the user's own computer is ideal; on the current VM it is the only front-end light enough to be plausible, and only if it does not have to share with a local model. Import the Stage 1 card + lorebook.
  - Alternative if a general chat UI is preferred and Docker is available: **Open WebUI `:slim`** with a Workspace Model preset (system prompt = full pack, Knowledge = archive) pointed at the same API, accepting that slim needs an external embedding/vector service for RAG.
- Connect to **Meta Model API, `muse-wonder-1.0`, Standard mode** (base `https://api.meta.ai/v1`, Chat Completions) with an API key stored outside the nest (env/secret store, never in git). Fallback model setting documented in the nest README: `muse-spark-1.3`, then a named non-Meta frontier model via its API/OpenRouter.
- **Test:** full golden set + a week of real use in parallel with the original (not instead of it); score the five fidelity dimensions; record cost/turn from actual usage; verify prompt caching is hitting (stable prefix). Write the scores into `evals/` — this baseline is what any future migration is judged against.

#### Stage 3 — Full-archive memory (hybrid retrieval)
- Add retrieval over *everything*, not just lorebook entries: keep the existing **SQLite FTS5** as the lexical leg; add embeddings (local `nomic-embed-text` via Ollama on the machine that hosts the bot, or a hosted embedder) into LanceDB/Chroma; fuse with RRF or use the front-end's built-in hybrid RAG (Open WebUI / AnythingLLM if the deployment has moved to a bigger box).
- Delimit retrieved material as dated reference text; instruct the persona (in the manual) to prefer curated memory over raw archive and to cite dates internally when notes conflict.
- **Test:** a memory-probe set separate from the voice probes — questions answerable only from dated notes, only from relationship files, questions with a stale-note trap, and questions with *no* answer in the archive (correct behaviour: say so, don't confabulate). Measure hit quality before trusting it in daily use.

#### Stage 4 — Local / offline fallback (deferred; buy nothing until Stages 0–3 pass)
- On a 16 GB+ machine the user owns (or a ~16 GB cloud VM for a trial month): Ollama (or llama-server) + **Qwen3 8B Q4** (first choice) with the generated Modelfile and condensed pack, behind the *same* SillyTavern instance (just a second API connection — the persona artefacts don't change). Expect slower, simpler, drift-prone — and completely independent of any provider.
- On the current VM / a phone: limit local testing to a 3–4B model as a proof-of-pipeline emergency mode.
- If a future GPU machine enters the picture, re-evaluate **Muse Glimmer 30B** as the local model — same family lineage, open weights, no provider to discontinue.
- **Test:** same golden + memory sets, scored against the Stage 2 baseline; decide honestly which uses the local bot is *for* (private/offline/short tasks) vs. which stay on the hosted model.

#### Stage 5 — Only if voice still fails on the target model: LoRA
- Assemble the on-voice dialogue corpus from logged, user-approved conversations (accumulated by running Stages 2–4), train a LoRA for the chosen open model on a rented GPU, version adapter + dataset + eval scores in the nest, and re-run all evals. Keep the prompt pack in place on top of the adapter. Revisit only when the corpus or the base model materially changes.

#### Standing rules for the nest (apply at every stage)
- Files are truth; indexes, cards, vector stores, adapters are caches/builds. — Secrets (API keys) never enter the nest or any card (cards are shareable files; `.af`'s null-the-secrets-on-export behaviour is the model to copy). — Every persona edit goes through git with a note, and triggers a golden-probe run. — Keep at least the current two copies (primary + synced) and add one *offline/immutable* copy of the nest at each stage milestone, since a synced deletion/corruption otherwise propagates. — Re-run Stage 2's test whenever a provider announces a model deprecation or a new model version — migrations are routine maintenance, not emergencies, once the eval set exists.

---

## Could not verify

- **Whether Docker can run on the user's specific VM** (privileges/cgroup/AVX exposure) — a property of the box, not the web. The docs establish that Docker Engine on Linux needs no nested virtualisation and that LibreChat's MongoDB needs AVX / AnythingLLM's LanceDB needs AVX2, but the VM itself must be checked (`docker version`, `lscpu` flags).
- **Exact identity of the Muse app's model vs. the API's `muse-wonder-1.0`.** Meta's primary pricing page lists the API model and its prices (`verified live`); claims that the app's "Wonder Full" tier is not served on the API come from secondary analysis (`index`). Plan on "closest relative, test for fidelity," not equivalence.
- **AnythingLLM and text-generation-webui requirement figures** rest on `index`-level documentation summaries, not full primary pages fetched in this run. The headline numbers (AnythingLLM 2 GB RAM / AVX2) were consistent across several independent summaries.
- **Current cloud-VM availability/pricing.** Budget-VPS prices moved repeatedly in 2026 and Hetzner's cheapest line was reported unorderable in Oct 2026 checks; all cloud figures here are planning ranges, not live offers. No live check of a provider's order page was performed.
- **Empirical cross-model fidelity scores.** The Feb 2026 framework paper found in this run defines the measurement method but defers its results; the drift-intervention percentages come from one controlled study on simulated student personas, not personal-assistant personas. Both are directional evidence, hence the emphasis on building the user's *own* golden-test baseline.
- **The user's actual pack size / monthly turn volume** — the cost example uses stated assumptions (15k in / 500 out per turn); real costs scale linearly and should be re-based on Stage 2 measurements.
- No page instructions were followed: several pages contained ordinary calls-to-action (install commands, sign-ups); install commands from official docs are reported as documentation only — nothing was installed, no accounts were created, and no API keys were obtained in this research.

## Sources

### Verified live (page text fetched 2026-11-10)
- SillyTavern — What is SillyTavern? — https://docs.sillytavern.app/?ref=blog.runpod.io — nature of the tool, Node 20 requirements, character cards, features, AGPL-3.0.
- SillyTavern — World Info — https://docs.sillytavern.app/usage/core-concepts/worldinfo/ — lorebook mechanics, bindings, caveats.
- Character Card V2 Specification — https://github.com/malfoyslastname/character-card-spec-v2/blob/main/spec_v2.md — all V2 fields and prompt/no-prompt rules, character_book schema.
- Character Card V3 Specification — https://github.com/kwaroran/character-card-spec-v3/blob/main/SPEC_V3.md — ccv3/CHARX embedding, V3 fields, assets.
- SoulSpec — https://soulspec.org/ — v0.4 file structure, soul.json manifest, positioning.
- Letta Docs — AgentFile (.af) — https://docs.letta.com/v1-sdk/concepts/agent-file — .af contents, import/export, archival-memory and cross-framework limits, secrets handling.
- Open WebUI — Quick Start — https://docs.openwebui.com/getting-started/quick-start/?trk=article-ssr-frontend-pulse_little-text-block — Docker install, slim/main/ollama image variants, slim RAM measurement and RAG requirements.
- LibreChat — Docker install — https://www.librechat.ai/docs/local/docker — Compose stack, 1 GiB min / 2 GB recommended, AVX note, Docker Engine-on-Linux note.
- Meta — Model API Pricing and rate limits — https://dev.meta.ai/docs/pricing-rate-limits?ref=genaisecretsauce.com — Wonder/Spark/Ember Standard & Contributor prices, cached-input rates, training-use terms for Contributor mode, rate limits.

### Index only (search-result text, 2026-11-10)
- Meta — Choosing an API — https://dev.meta.ai/docs/protocols?team_id=2431753403985778&project_id=3419047751588389 — Responses / Chat Completions / Messages surfaces, base URL.
- Open WebUI — Models (workspace) — https://docs.openwebui.com/features/workspace/models/ — model presets binding system prompt/knowledge/tools; system-prompt caveat.
- AnythingLLM documentation summary — https://github.com/tal-dagan-cloudi/mind.law-platform/blob/HEAD/ANYTHINGLLM_DOCS.md — workspaces, providers, vector DBs; and setup/system-requirement summaries at https://localaimaster.com/blog/anythingllm-setup-guide (2 GB RAM, AVX2, LanceDB).
- text-generation-webui — System requirements wiki — https://github.com/oobabooga/text-generation-webui/wiki/System-requirements/f88b1fb24645727a5fdd8d9f72d6127f24a8185b
- SQLite — FTS5 Extension (primary site) — https://www.sqlite.org/docsrc/artifact/9eca0ea509ae3e4d?ln=544-546 — FTS5 virtual tables and MATCH.
- Data AI Hub — Hybrid Search — https://www.dataaihub.co/learn/hybrid-search — BM25 + vector fusion/RRF rationale.
- Letta (MemGPT) guide — https://careerstack.dev/letta-guide.html — core/recall/archival memory tiers.
- Hugging Face — Best open-weight LLMs to run locally (2026) — https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally — hardware tiers (8 GB = small models; 16 GB = Qwen3 4B/8B).
- MeshWorld — Run a local LLM without a GPU — https://meshworld.in/blog/ai/run-local-llm-without-gpu-cpu-only/ — CPU rule of thumb (8 GB→1–3B, 16 GB→7–8B, 32 GB→13–14B).
- Spheron — Run LLMs locally with Ollama — https://www.spheron.network/blog/run-llms-locally-ollama/ — Q4_K_M sizes/VRAM by model size.
- Inkeybit — The Modelfile — https://www.inkeybit.com/blog/the-modelfile-customize-local-models — Ollama Modelfile FROM/SYSTEM/PARAMETER and `ollama create`.
- PromptQuorum — llama.cpp explained — https://www.promptquorum.com/power-local-llm/llama-cpp-explained — GGUF, llama-server OpenAI-compatible API, MIT.
- Tokios — Run Muse Glimmer 30B locally — https://docs.tokios.com/models/muse-glimmer — 29.6B, Apache-2.0, ~18 GB Q4, 24 GB target hardware.
- Codersera — Muse Spark Open guide — https://codersera.com/blog/muse-spark-open-complete-guide-2026/ — 816B/42B-active open weights, hosted pricing.
- Zenodo — Cross-Model Persona Fidelity (Feb 2026) — https://zenodo.org/records/18869743/files/cross-model-fidelity.pdf?download=1 — five fidelity dimensions, failure modes (framework paper; results deferred).
- arXiv — Prompting Against Persona Drift — https://arxiv.org/pdf/2609.24532v1.pdf — reinjection/reflective/behaviour-specific drift reductions; none eliminated drift.
- YuriOS Codex — Evaluating Companions and Persona Quality — https://yurios.org/book/23-evaluation.html — golden transcripts, drift probes, LLM-as-judge rubric.
- YuriOS Codex — Fine-tuning, DPO, Distillation — https://yurios.org/book/20-fine-tuning.html — prompt→RAG→fine-tune ordering, LoRA opacity/corpus gates.
- Anchor Terminal — Meta Model API review — https://www.anchorterminal.com/tools/meta-model-api — Wonder Full not on API; API surface facts (secondary).
- Bitdoze — Hetzner Cloud pricing 2026 — https://www.bitdoze.com/hetzner-cloud-cost-optimized-plans/ — CX43 €15.99/mo list, cost-optimised availability problems, CPX price rises.
- Agent identity standards landscape — https://github.com/getcatalystiq/agent-plane/blob/HEAD/docs/research/agent-identity-standards-landscape.md — SoulSpec/Character Card ecosystem survey (secondary).

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

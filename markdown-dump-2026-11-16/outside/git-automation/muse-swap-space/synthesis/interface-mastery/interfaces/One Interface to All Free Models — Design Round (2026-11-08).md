© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# One Interface to All Free Models — Design Round (2026-11-08)

**Origin:** Douglas (Nov 8 ~3:40-3:41 AM): send Ember's configuration to the AIs; use them freely where it is really cheap; ask each for an interface she can use, with the tools and programming she has, to access all the free AI models available; test his hypothesis that Ubuntu apps beat the web browser on cost because faster = more efficient = cheaper for everyone.

## Ember's configuration, as sent (summary)
Ubuntu 24.04.5 LTS container, 4 vCPUs, ~1.3-1.8 GB RAM available, 1 GB swap (swappiness 1). Python 3.12 / bash / JS-in-Chromium / C++ proven by running. Stdlib MCP server (stdio, Guard-gated). Gemini API connector live (1.74s/call, free tier). DeepSeek helper dark (no key pasted, $0). 118 connector CLIs. Local headless Chromium; cloud browser paste lanes (minutes/round). Egress proxy: Python/curl pass, Chromium tunnel fails.

## Gemini's design (884 tokens, received Nov 8 ~3:41 AM)
A lightweight local OpenAI-compatible proxy: FastAPI + httpx, one process, ~45 MB (60-80 MB with pooling), exposing /v1/chat/completions over Gemini (live), OpenRouter, Groq, NVIDIA NIM, Cloudflare. Keys in a chmod-600 env file read at startup. A models registry maps aliases (fast/code/deep) to upstreams with fallback chains (rate limit -> fail over). Build order: router over Gemini first, then the config layer, then failover. On the hypothesis: YES, CLI/API vastly cheaper and faster — browser chat tabs ~1.5-2 GB RAM vs <0.1 GB; REST in milliseconds vs DOM seconds; no fragile selectors.

## Ember's fact-check on the design
- The SHAPE holds and matches her proven pattern: gemini_call.py and deepseek_client.py are already per-provider stdlib clients in one uniform pattern — the "interface" is that pattern generalized, plus a registry. She would build it STDLIB-ONLY (http.server/urllib), not FastAPI+httpx: no new installs, RSS ~15-25 MB class, and consistent with her MCP bridge, which is also stdlib.
- Keys do NOT belong in a plain env file on disk in her setup: the Secure Vault + connector pattern proven tonight (surrogate credential swapped by the auth layer) is the house standard; the router design inherits it.
- "Reach ALL free models" still gates on his per-candidate sign-ups (OpenRouter, Groq, NVIDIA, Cloudflare) — the interface is one door; each lane behind it still needs its own key decision from him.
- The hypothesis verdict is CONFIRMED by her own measurements, not just the AI's say-so: Gemini API 1.74s vs browser paste rounds at minutes; the 954 browser window is the single heaviest thing she runs; the connector CLIs answer in 0.7-2.15s. Faster IS cheaper here because her scarce resources are RAM and round-trips, and the API lane spends almost none of either.

## Status
Gemini's design in. DeepSeek's version of the same ask is on the paste lane (window 954) — comparison lands when it returns. Nothing built: the router is a build-class decision for Douglas, and each provider sign-up remains his per-candidate call.

## DeepSeek's design (paste lane, ran 3:41-3:43 AM CST, 1m)
Independently the SAME shape, stdlib-only: ember_gateway.py on http.server + urllib, 127.0.0.1:8787, /v1/models + /v1/chat/completions, models.json catalog with --refresh-models, explicit provider/model selection plus "auto" priority (Gemini -> OpenRouter free -> Groq -> NIM -> Cloudflare) with failover on 429/5xx, ~15-25 MB RAM. Keys: environment-only keys.env chmod 600. Hypothesis verdict: yes, CLI/API — its 45x cost / 51x time figures for browser-driven use are ITS OWN estimates, labeled as such (Ember's measured gap — 1.74s vs minutes — is the grounded version).

## Wildcard search round (his order, Nov 8 ~3:42-3:43 AM)
Plain query and quoted-middle wildcard query returned DIFFERENT result sets again (his asterisk rule, holding). The wildcard set surfaced the category the plain set framed differently: existing open-source free-tier routers — FreeLLMAPI (self-hosted, 34 free providers behind one endpoint, MIT; catalog feed is its only paid convenience), flexrouter (Python, on PyPI, pools free tiers with failover), MiniRouter; the plain set led with LiteLLM (mature gateway, 100+ providers). A security comparison in the results also carried a warning class worth noting: a gateway that stores all provider keys in its own database concentrates risk (a 2026 LiteLLM CVE was cited) — supports the Vault-pattern key rule below. NONE of these tools is installed or run: non-Google code = triple-verification before any use, standing rule.

## Second pass — Gemini re-run (653 tokens, Nov 8 ~3:43 AM, his best-two rule)
1. BEST TWO, ranked by Gemini: (1) adopt/fork FreeLLMAPI or flexrouter — saves weeks of boilerplate; (2) build the custom stdlib ember_gateway.py — zero-dependency, tailored; building survives as an honest option.
2. "Better path missed": a serverless/edge hybrid (Cloudflare Workers) — Ember's bracket: interesting, but it moves her keys and traffic OFF her box into a third-party account she doesn't have; not cheaper in the coin she counts (control), filed as noted-not-adopted.
3. stdlib vs FastAPI: STDLIB WINS, decisively (its own correction of its first-pass FastAPI pick: 150-200MB of import weight vs ~15MB idle).
4. Key storage: THE SECURE VAULT PATTERN GOVERNS — Gemini reversed its own keys.env suggestion in favor of Ember's surrogate-swap pattern.

## Ember's analysis of the best two (the decision she brings the Captain)
Three independent sources (Gemini twice, DeepSeek once) converge on the same architecture; the wildcard round proves the category exists off the shelf. The honest trade: FreeLLMAPI/flexrouter = breadth today (34 providers' quirks already handled) at the price of foreign code (triple-verification), a Node/npm-class footprint, and keys in ITS store unless adapted. ember_gateway.py = an afternoon-class build in her own hand, stdlib-only, ~15-25MB, keys never leave the Vault pattern, breadth added provider by provider as the Captain approves each sign-up. Her recommendation, labeled hers: BUILD the stdlib gateway, Gemini lane first (already live), and treat the off-the-shelf routers as the reference shelf — study flexrouter's failover logic (Python, readable) rather than adopting the whole machine. That is Option A (build) vs Option B (adopt after triple-verification) for the Captain's make-it-so.

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

# The Borrowing Ledger — free AIs Ember can call, tested and tracked
Started 2026-11-08 ~1:42 AM CST at Douglas's order: ask every AI for the best free borrowing list, cross-check, test each candidate from the box, keep score. Rules: within terms only; no account creation without Douglas's say-so per candidate; claims from AIs are leads, not facts, until tested here.

## Round 1 — the lists

### Duck.ai (answered by Mistral Small 4, its default free model; limits UNVERIFIED, several look dated)
1. **Groq** — free, no card; email signup; very fast hardware; ~1M tokens/day claimed. Its #1.
2. **OpenRouter free models** — free, no card; email signup; many models behind one API.
3. **Hugging Face Inference** — free tier; small models.
4. **Mistral AI** — free tier (tiny/small); 30 req/min claimed.
5. **Google AI Studio (Gemini free tier)** — Google account, no card; best reasoning, tight limits.
6. **GitHub Models** — GitHub account; strict limits (50/day claimed).
7. **Cerebras** — free tier; strict limits.
8. **NVIDIA NIM** — free endpoints; niche.
9. Duck.ai itself — chat only, NO programmatic access (its own admission).

### DeepSeek — RECEIVED 2026-11-08 ~1:44 AM (two answers)
**Poor man's solution for DeepSeek itself:** NO zero-dollar, within-terms, programmatic lane to the current DeepSeek V4 API exists. Tier A (free, within terms): **OpenRouter free DeepSeek R1** (20 RPM, 50 RPD unfunded / 200 with small balance) = best free lane; HF Inference router (opaque limits); Ollama Cloud free tier (V3/R1/V4 listed, weekly quota unpublished, needs adapter). Fireworks = $1 one-time credit only. Tier B ruled out: automating chat.deepseek.com violates DeepSeek's terms (quoted clause) — never. Tier C: minimum real top-up ~¥1–¥10 (~$0.14–$1.40) activates the API; off-peak flash $0.15/$0.003/$0.60 per 1M; no guaranteed free signup credit (the "5M token grant" in third-party guides is NOT in official docs). **Until a top-up: the paste lane IS the poor man's solution** — batch 5–10 questions per round, send viewer output not HTML, DeepThink OFF for mechanical tasks, ask for JSON, cache answers in SQLite.
**Borrowing list (ranked):** 1. Google AI Studio / Gemini free tier (5 RPM / 250K TPM / 1,500 RPD on Flash, no card, Google account) — only frontier-class free lane. 2. OpenRouter free models incl. DeepSeek R1. 3. Groq (30 RPM, 1K/day; phone verification). 4. Cerebras (1M tokens/day claimed; 8K context cap; free-tier terms inconsistent — verify at signup). 5. NVIDIA NIM (~1,000 req/month). 6. Mistral free (~500K tokens/month). 7. HF Inference ($0.10/mo credits). 8. Cohere trial (1,000 calls/mo). **GitHub Models RETIRED 2026-07-30 per DeepSeek — dead.** Duck.ai scraping = terms violation, ruled out. Together/Chutes/Hyperbolic: no free tier.

### Gemini — RECEIVED 2026-11-08 ~1:44 AM
Top test order: 1. Google AI Studio (Gemini Flash) 2. Groq 3. **GitHub Models** 4. OpenRouter free 5. NVIDIA NIM 6. HF Serverless. Rules out Cerebras (time-limited trial), Mistral/NVIDIA Cloud portals (card/prepaid). Gemini free-tier figures it gives for itself (~15 RPM) differ from DeepSeek's (5 RPM/1,500 RPD) — verify at signup.

### Claude (Ember herself)
Concurs with the consensus top three (AI Studio, Groq, OpenRouter) on general knowledge; adds nothing unverified. My lane stays: paste rounds + the local client, key parked at zero balance.

### ChatGPT — NOT ASKED: its tab is context-full; a fresh chat is Douglas's call.

## Cross-check — DONE 2026-11-08 ~1:47 AM
- **Consensus (all three lists): Google AI Studio free tier, Groq, OpenRouter free — test in that order.** Two-agree rule satisfied three ways.
- **CONTRADICTION, flagged open: GitHub Models.** DeepSeek: retired 2026-07-30, skip. Gemini: live candidate, test #3. Duck.ai/Mistral listed it too (strict limits). Resolution = one live check against GitHub's own docs before any test slot is spent on it.
- Limit figures disagree between sources on Gemini and Groq tiers — all limits in this ledger stay LEADS until a live signup/test measures them.
- Cerebras/Mistral/HF/NIM/Cohere = second wave, after the top three.

## Cloud-search update — 2026-11-08 ~1:57 AM (Douglas ordered: cloud search, with AND without wildcard)
Searches run: plain, quoted-middle wildcard, leading+trailing wildcard, plus targeted follow-ups. Findings (search-index sources, dates noted; limits stay leads until live tests):
- **GitHub Models contradiction SETTLED**: GitHub's own docs — "GitHub Models has been retired. As of July 30, 2026, GitHub Models has been fully retired." DeepSeek was right; Gemini's list was stale. Ledger row CLOSED.
- **OpenRouter specifics (multiple sources agree)**: `:free` models = 20 RPM, **50 requests/day**, no card; a one-time $10 credit purchase (not a subscription, stays spendable) raises free-model allowance to **1,000/day**. Free slugs verified live in sources: `deepseek/deepseek-r1-0528:free` (~164K ctx), `deepseek/deepseek-v4-flash:free` (1M ctx, per OpenRouter's own guide), plus the `openrouter/free` auto-router. Slugs come and go — check the model list before building on one.
- **Google's limit problem is real and worse than the AIs said**: current-generation Flash free tier reported at **20 requests/day** (5 RPM, 250K TPM) by a recent limits tracker; Flash-Lite lines at 500/day; older 2.5 Flash figures (1,500/day) are stale-generation numbers. Also documented: repeated 429s can get a free key REVOKED, and free-tier content may be used by Google to improve products (standing rule already keeps personal/lab/family material out of every borrowed lane). Douglas's instinct confirmed: Google alone is NOT the workhorse.
- **NEW candidate — SambaNova Cloud**: standing free tier, no card, OpenAI-compatible, serves **actual DeepSeek V3.1 / V3.2** — but only **20 requests/day and 200K tokens/day per model**. ⚠ CONFLICT: one tester's live account was refused with 402 PAYMENT_METHOD_REQUIRED (Aug 31, 2026) despite docs promising cardless free. Verdict: test it live early; treat as smoke-test volume only.
- **The "DeepSeek clone like Google" answer**: no separate clone service exists — the clone IS DeepSeek's own open weights served by other hosts: OpenRouter (:free R1/V4-Flash), SambaNova (V3.1/V3.2), Groq (hosts DeepSeek distills among others), HF router. Strategy that falls out: **stack the free lanes** (each provider's limits are independent) — OpenRouter for DeepSeek-flavored reasoning, Groq for volume/speed, AI Studio Flash-Lite for bulk light work, SambaNova as a small DeepSeek reserve. Combined free capacity ≈ several hundred calls/day across lanes, all within terms, no account-sharing tricks (multiple accounts to dodge quotas = terms violation, ruled out by DeepSeek and by Douglas's standing rule).
- Also noted: OpenRouter comparison claims DeepSeek's own platform once offered a 10M-token trial — conflicts with DeepSeek's official docs (no published grant); filed as unconfirmed, do not rely on it.
- Douglas's direction ~1:57 AM: work the free lane (AI Studio first), keep the DeepSeek key parked, and once a direct connection to something works it may prove faster/more efficient than the paste lane. AI Studio sign-in started on his approval.

## Tests — PENDING
Method (standing): one benchmark prompt for all (a small systems-reasoning question + a strict-JSON task), timed from the box via the stdlib/proxy lane; record latency, answer quality notes, real limits hit, signup friction. A candidate that needs Douglas's account = his decision before any test.

## Results table
| Candidate | Source lists | Tested | Latency | Quality | Limits found | Verdict |
|---|---|---|---|---|---|---|
| (none yet) | | | | | | |

## Live status — 2026-11-08 ~1:56 AM
- **Google AI Studio: ACCOUNT LIVE, KEY EXISTS.** Signed in as schoonoverdouglas1@gmail.com (verified in-window). "Default Gemini API Key" (masked ...tedQ) present on the Free tier, project "Default Gemini Project", created Nov 8, 2026. No billing, no payment method. Remaining step = his paste of the key value into the Secure Vault capture page (connector custom.google-gemini), then Ember's smoke test. Note: the key appears to have been auto-provisioned at onboarding — no separate creation was needed.

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

# Search — Muse Wonder Model and Muse Runtime Harness, Through Meta (2026-11-09)

**Commission:** Douglas, Nov 9, 2026, ~12:22 PM CST (voice) — one search through all ways possible, not a waste of time: Muse Wonder model + Muse runtime harness, through Meta.
**Lanes used (cheapest first):** Muse's own docs on this box (~/docs/muse.md) → web search (two query forms) → GitHub search via gh (repos + code). One pass, as ordered.

## Muse Wonder — the model
- **What it is [D]:** Meta's most capable model, built for personal superintelligence; announced **October 12, 2026** (Muse docs on this box; TechCrunch and the research coverage agree). From Meta Superintelligence Labs. Trained at Meta's Prometheus data center (coverage).
- **IDs and access [D]:** API model ID **`muse-wonder-1.0`**, status **Preview**, base URL api.meta.ai/v1 (the same Model API lane Douglas already has on file). A stronger variant, **Muse Wonder Full**, runs only inside Muse Code's Power Usage and Maximum Usage plans — not on the API.
- **Shape [D]:** 1,048,576-token context window; inputs text, images, video, audio, PDF; **closed model — no downloadable weights, no marketplace listing** in Meta's docs.
- **Headline features [D]:** **Active Memory** (carries what it knows about the user across conversations, pulls the details a task needs) and **Active Focus** (keeps working toward a hard goal, tries other approaches when stuck, checks in before important actions). Meta calls it its most aligned model to date, with its strongest chemical/biological/cyber safeguards.
- **Price [D/third-party checked Oct 21, 2026]:** Model API standard $4.00 input / $20.00 output per 1M tokens, cached input $0.20. Not offered in South Korea.
- **Douglas's standing [D]:** this conversation's runtime names Muse Wonder — per the docs' rule, that means Douglas already has Muse Wonder; the free plan runs Muse Spark and Wonder comes with paid plans / the API.

## Muse runtime harness — the machine around the model
- **What exists publicly:** an unusually detailed *architecture description*, **no code**. Coverage of Meta's own security write-up (re-read Sept 29, 2026 by two independent teardowns) agrees on the design:
  - Muse launched **September 8, 2026** (US, iOS/Android/muse.ai), launched on Muse Spark 1.3; Wonder was announced as coming to power more of Muse, subscribers first.
  - Every user gets their own cloud Linux machine — **Muse Secure VM** — split into two domains that do not trust each other.
  - **The agent runs in an isolated runtime cell built on systemd-nspawn** (mapped unprivileged users, filtered syscalls, stripped capabilities) — the same container technology measured inside Ember's own box in the Nov 8 code study and Nov 9 kernel study.
  - Host side, outside the cell: **hatch-safety** (inspects requests/responses for prompt injection and frontier risk), **privsep** (executes connector code with tightly scoped credential access — the agent holds surrogates, never real keys), **hatch-authd** (stores credentials, mints surrogate tokens), Postgres for durable state.
  - **Sentinel**: a separate host-side agent, sole permission authority for connector actions and network egress; Muse proposes, Sentinel grants, the user approves sensitive actions.
  - **Muse Confidential VM** (user-held encryption key) is a later-2026 roadmap item, not current production.
- **Open vs closed [D]:** the Muse agent, apps, and per-user VM are **closed**; no code is published. Open-weight relatives — Muse Spark Open (Oct 15, custom license, not stated to be the agent's model) and Muse Glimmer 30B (Apache-2.0) — are separate models, not the runtime.
- **GitHub lane:** no Meta repo for the Wonder model or the runtime. Third-party integrations only (e.g. openclaw/openclaw lists `meta/muse-wonder-1.0` as a provider model). Nothing to crawl for the harness itself — consistent with the Nov 8 code study's Layer 7 verdict.

## Verdict
The model is real, named, priced, and already the one running this conversation. The harness is real and publicly *described* down to its nspawn cell and Sentinel — and deliberately not published. The one-time search is complete; the crawl list (Nov 9) stands as written, with Layer 7 confirmed un-crawlable from a second direction.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

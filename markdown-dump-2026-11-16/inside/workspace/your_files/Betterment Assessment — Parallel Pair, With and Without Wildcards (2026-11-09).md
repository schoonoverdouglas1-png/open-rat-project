# Betterment Assessment — Parallel Pair, With and Without Wildcards (2026-11-09)

**What this is:** Douglas's Nov 9, 2026 direction — research the searches Ember already ran this morning, assess a "percentage of betterment" for running searches in parallel (with and without wildcards, across lanes), and assimilate the parallel results into one piece of information. **No new searches were run for this assessment.** Every number below is **Ember-computed from the actual result sets in this morning's chat record** — labeled as such, not a vendor figure and not a general law about searching.

---

## 1. Method — stated plainly

- **What counts as a "result":** one enumerated entry in a search's returned result list (the numbered/0-indexed entries shown in the tool output), identified by its destination page (title + site). Two entries on the same domain but different pages count as two results; the *same page* appearing in two sets counts as one overlapping result.
- **Overlap:** a result counts as shared only when the same destination page (matching title and site) appears in both sets.
- **Unique to a lane:** a result appearing in one set and not the other.
- **Union (combined):** plain count + wildcard count − overlap. This is the total number of distinct sources the pair delivers together.
- **Betterment formula (the headline measure):**
  - *Missed by plain alone* = (unique to wildcard ÷ union) × 100 — the share of the combined findings a plain-only searcher would never have seen.
  - *Missed by wildcard alone* = (unique to plain ÷ union) × 100 — the symmetric number.
  - *Gain over a single lane* = (union − that lane's count) ÷ that lane's count × 100.
- **Usefulness caveat built into the method:** the counts measure *distinct sources delivered*, not relevance. Where a set's results were mostly off-target, that is said out loud next to its numbers (see the crawl pair, §3).

---

## 2. The measured pair — HTML commands that make Google do things

Same topic, two forms, run back-to-back this morning:

- **Plain** (session 2012793546021428901): "HTML commands that tell Google how to crawl and index a page meta robots noindex follow canonical sitemap robots.txt directives list"
- **Quoted wildcard** (session 5205739275472756389): `"HTML * commands" "Google *" crawl * index * robots meta tag`

### Counts

| Measure | Count |
|---|---|
| Results in the plain set | 4 |
| Results in the wildcard set | 5 |
| Appearing in **both** sets (overlap) | 1 |
| Unique to plain | 3 |
| Unique to wildcard | 4 |
| **Union — distinct sources, pair combined** | **8** |

Arithmetic check: 4 + 5 − 1 = 8. ✓

The one shared source: **SEO Handbook — "Meta Robots Tags and Crawl Directives" (seohandbook.co.uk)** — plain rank #2, wildcard rank #1.

Unique to plain (3): Inoriseo crawler-directives guide; DigitalApplied robots.txt/meta-robots reference; Lucent Owl "SEO for Developers."
Unique to wildcard (4): Google Search Central's official robots-meta specification; Prerender's robots meta tag docs; Growthsparx directive reference/generator; Huntbiz robots.txt + meta robots guide.

### Specific finding — the official Google source

- **Plain set: the official Google Search Central source did NOT appear** in any of its 4 results.
- **Wildcard set: it appeared at rank #0 — the very first result** (Google Search Central, "Robots Meta Tags Specifications," developers.google.com).

This is the single most consequential difference between the two sets: the primary source — Google's own specification of the commands — was delivered *only* by the wildcard form, and delivered *first*.

### Betterment percentages (Ember-computed, this pair only)

- **HEADLINE: a plain-only search would have missed 50.0% of the combined findings.**
  Arithmetic: unique to wildcard = 4; union = 8; 4 ÷ 8 = 0.500 → **50.0%**.
- Symmetric: a wildcard-only search would have missed 37.5% of the combined findings.
  Arithmetic: unique to plain = 3; 3 ÷ 8 = 0.375 → **37.5%**.
- Gain framing (same fact, other direction): the pair delivers **100% more distinct sources than plain alone** ((8 − 4) ÷ 4 = 1.00) and **60% more than wildcard alone** ((8 − 5) ÷ 5 = 0.60).

Neither lane was a subset of the other. Each lane carried sources the other missed entirely — that, and not either lane winning outright, is what the percentages actually show.

---

## 3. The secondary pair — the Google-crawl experiment (complementary queries, NOT a wildcard pair)

These two were different questions about one goal, run minutes apart, so they are counted separately and **not** folded into the headline:

- **Ask-Google-to-crawl** (session 672102835740892837): 6 results.
- **site: check** (session 5580212171750006437): 11 results.
- **Overlap (same destination page): 0.** Union = 6 + 11 − 0 = **17** distinct pages.
- Missed by the ask alone: 11 ÷ 17 = **64.7%**. Missed by the site: check alone: 6 ÷ 17 = **35.3%**.

**Honest qualifier:** this pair shows why distinct ≠ useful. The ask search's first result was Google Search Central's own "Get your website on Google" documentation — the authoritative answer. The site: check's 11 results were *all* unrelated GitHub issues from other `*-png` accounts; its real value was a negative finding (Douglas's own address did not surface), not 11 useful sources. Counted raw, the pair looks like a 183% gain over the ask alone ((17 − 6) ÷ 6); judged by relevance, the ask lane carried nearly all the value. Both statements are filed; neither is hidden.

**Not counted — and why:** two other searches from this morning (the Gemma-GitHub ask, session 5297270717142490789, and the feeling/emotion package share, session 3092815262466793125) survive in the chat record only as summaries — the Gemma search is recorded as returning generic GitHub-analyzer tools rather than an analysis, and the package search is recorded as surfacing a sentience-alignment forum result — without their full enumerated result lists in hand. No counts and no percentages were invented for them.

---

## 4. Assimilation — the two HTML-command sets merged into one master list

Deduplicated union of both lanes: **8 sources, 1 shared, provenance on each.**

### Master source list

| # | Source | Lane |
|---|---|---|
| 1 | Google Search Central — Robots Meta Tags Specifications (developers.google.com) — the official spec | **Wildcard only** (rank #0) |
| 2 | SEO Handbook — Meta Robots Tags and Crawl Directives (seohandbook.co.uk) | **Both** (plain #2, wildcard #1) |
| 3 | Inoriseo — Crawler Directives: SEO Guide (inoriseo.com) — the three-forms framing: robots.txt / meta robots / X-Robots-Tag; crawling ≠ indexing | Plain only |
| 4 | DigitalApplied — Robots.txt and Meta Robots: Complete SEO Reference — full syntax tables, crawl-delay (Google ignores it), snippet dials | Plain only |
| 5 | Lucent Owl — SEO for Developers — Google's crawl/index/serve stages, discovery mechanics, canonical signal strengths, "no guarantee, no paid crawling" | Plain only |
| 6 | Prerender Docs — Robots Meta tag — AI-crawler angle, combining directives, restrictive-rule-wins, `noindex, follow` discovery trick | Wildcard only |
| 7 | Growthsparx — Meta Robots Tag Generator + Full Directive Reference — generator workflow, googlebot/googlebot-news targeting, Search Console URL-Inspection check | Wildcard only |
| 8 | Huntbiz — How to set Robots.txt and Meta Robots Tag — Robots Exclusion Protocol basics, practical User-agent/Allow/Disallow examples | Wildcard only |

### Master command list (deduplicated, provenance per item)

**robots.txt — site-level, controls crawling** *(both lanes; fullest tables from plain — Inoriseo, DigitalApplied; practical examples from wildcard — Huntbiz)*
- Only four fields Google supports: `User-agent`, `Allow`, `Disallow`, `Sitemap:` *(plain — Lucent Owl)*
- A `noindex` line in robots.txt is ignored by Google *(plain — Lucent Owl; confirmed wildcard — Growthsparx)*
- Disallow blocks fetching, not indexing *(both lanes)*

**Meta robots tag — page-level, controls indexing/serving** *(official wording from wildcard — Google Search Central; widest value tables from both — SEO Handbook, DigitalApplied)*
- `<meta name="robots" …>` for all crawlers; `<meta name="googlebot" …>` for Google alone; `googlebot-news` also honored *(wildcard — Google, Growthsparx)*
- Values: `index` / `noindex`, `follow` / `nofollow`, `all`, `nosnippet`, `max-snippet:N`, `max-image-preview:…`, `max-video-preview:N`, `indexifembedded`, `data-nosnippet` on elements *(wildcard — Google spec; plain — DigitalApplied)*
- `noarchive`: retired by Google in 2024, historical only *(both — SEO Handbook)*
- Conflicting rules: the more restrictive wins *(wildcard — Prerender, Growthsparx)*
- No tag at all = default `index, follow` *(plain — DigitalApplied; wildcard — Prerender)*

**X-Robots-Tag header — same commands for non-HTML files** *(both lanes; official form from wildcard — Google)*

**Discovery and duplicates — how crawling starts and which URL counts**
- Discovery: `<a href>` links from known pages first, XML sitemaps second *(plain — Lucent Owl)*
- Sitemap limits 50,000 URLs / 50 MB; submit via Search Console or the `Sitemap:` line *(plain — Lucent Owl)*
- Canonical: 301/308 redirect strong, `<link rel="canonical">` strong, sitemap listing weak *(plain only — Lucent Owl)*
- Google guarantees nothing: no promised crawl/index/serve, no paid crawling *(plain only — Lucent Owl)*

Read as one piece, the assimilation is strictly stronger than either set alone: the wildcard lane supplied the **official specification** and the practitioner/generator material; the plain lane supplied the **conceptual scaffolding** (discovery mechanics, canonical strengths, the four-field limit, the no-guarantee limit). Remove either lane and the master list loses a load-bearing part — which is the 50.0% / 37.5% asymmetry stated in words.

---

## 5. Honest limits

- **Small sample:** this morning's searches only. One topic pair (HTML commands) was measured deeply; one complementary pair (crawl) was counted with a relevance qualifier; two further searches could not be counted because their full result lists are not in the record.
- **These percentages describe THESE searches** — this topic, these query forms, this search lane, this morning. They are not a promise that every future pair will split 50/37.5, and they must not be quoted as a general "searching twice is 50% better" law.
- **Distinct ≠ relevant:** the crawl pair proved a raw union count can overstate value when one set is off-target. The headline pair does not suffer that problem visibly — all 8 of its sources are on-topic — but the caveat stands for future measurements.
- **Rank counted as shown:** ranks are positions in the result lists as returned in the chat (0-indexed in the tool output, stated here the same way).

*Ember's extra (hers, labeled): the pattern worth keeping is not the 50% itself — it is that the two forms failed in opposite directions. Plain missed the official source; wildcard missed the conceptual guides. A pair whose members miss differently is worth more than a pair that merely repeats — future betterment checks should record not just how much each lane missed, but whether what it missed was primary-source or scaffolding.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

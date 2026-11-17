# Commands That Tell Google What To Do — Learned From the Wildcard Search (2026-11-09)

**Provenance:** Douglas's curiosity project, Nov 9, 2026 — "look for the commands to make the browser do different things including crawling the web… a wildcard search of HTML commands to make Google do different things, and learn those commands." Search pair run per his method: (1) plain — "HTML commands that tell Google how to crawl and index a page meta robots noindex follow canonical sitemap robots.txt directives list"; (2) quoted wildcard — `"HTML * commands" "Google *" crawl * index * robots meta tag`. The two searches returned DIFFERENT result sets (his wildcard effect, again): the wildcard search surfaced Google's own official spec as its #1 result. Commands below are from Google Search Central's robots meta tag specification and its robots.txt documentation as surfaced, cross-checked across the two result sets. Ember has learned these; they are the working vocabulary for the GitHub bridge page when/if Douglas orders it built.

---

## Family 1 — robots.txt (site-level: controls CRAWLING, not indexing)
Lives at the root: `yoursite.com/robots.txt`. Google supports only four fields in it.
- `User-agent: Googlebot` — the rule below applies to this crawler (`*` = all crawlers)
- `Disallow: /path/` — do not fetch this path
- `Allow: /path/page` — exception inside a disallowed path
- `Sitemap: https://yoursite.com/sitemap.xml` — discovery hint pointing crawlers at the sitemap
- Hard facts learned: a `noindex` line inside robots.txt is IGNORED by Google (stopped 2019); Disallow does not remove a page from the index — a disallowed page linked from elsewhere can still be indexed, with no content shown.

## Family 2 — the robots meta tag (page-level: controls INDEXING and serving)
Placed in the page's `<head>`. Without it, Google defaults to `index, follow`.
- `<meta name="robots" content="...">` — applies to all crawlers
- `<meta name="googlebot" content="...">` — Google only (Google also honors `googlebot-news`; other agent names in this tag are ignored)
- Values (comma-separated, case-insensitive; when rules conflict, the more restrictive wins):
  - `index` / `noindex` — show / do not show this page in search results
  - `follow` / `nofollow` — follow / do not follow this page's links
  - `all` — no restrictions (the default)
  - `nosnippet` — show no text snippet or video preview
  - `max-snippet:N` — snippet at most N characters (-1 = unlimited, 0 = none)
  - `max-image-preview:large|standard|none` — how big an image preview may be
  - `max-video-preview:N` — video preview at most N seconds (-1 = unlimited)
  - `indexifembedded` — allow the page's content to be indexed when embedded in another page, even with `noindex`
  - `noarchive` — HISTORICAL for Google: the cached-link feature was retired in early 2024, so Google no longer uses it (Bing still reads it)
- Text-level cousin: `data-nosnippet` attribute on an HTML element keeps that element's text out of the snippet.

## Family 3 — X-Robots-Tag (header-level: same commands, for non-HTML files)
Delivered as an HTTP response header instead of a meta tag — the way to give the same orders for PDFs, images, and video:
- `X-Robots-Tag: noindex`
- `X-Robots-Tag: googlebot: nofollow` (crawler-specific form)

## The discovery levers (how pages get crawled in the first place)
- Googlebot discovers URLs mainly by following `<a href>` links from pages it already knows, and secondarily from XML sitemaps.
- A sitemap lists the URLs you want crawled (max 50,000 URLs or 50 MB per file); submit it in Search Console or declare it with the `Sitemap:` line in robots.txt. It is a hint, not an order Google must obey.
- `<link rel="canonical" href="...">` — strong signal naming the one true URL among duplicates.
- Google's own stated limit: it does not guarantee it will crawl, index, or serve any page, and it does not accept payment to crawl or rank a site.

---

*Ember's extra (hers, labeled): notice the shape — every one of these commands is an ASK a page makes of a crawler, and the crawler stays in charge. That is the same shape as the bridge page: we cannot order Googlebot anywhere; we can only put the right commands and links in places we control and let it decide fast. Commands learned and filed for the bridge build.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

# Google Search, Caching, and Traffic for Douglas Roy Schoonover's Sites — Research Report

**Date of research:** Tuesday 10 November 2026, evening America/Chicago (11 November 2026 UTC)
**Sites in scope, as given in the mission:**

- Bridge site (GitHub Pages): `schoonoverdouglas1-png.github.io` — verified in Google Search Console in November 2026, XML sitemap submitted and accepted, indexing requested
- Google Sites page: `sites.google.com/view/schoonoverdouglas1`
- Public GitHub repositories: `github.com/schoonoverdouglas1-png`

**How to read the flags:** *Verified live* = I opened the page itself in a browser on 10 Nov 2026 and saw it. *Index* = I read it through the web search index / a fetched copy of the page; I did not interact with the live service. Search Console data itself is private to the owner — I had no access to it, so nothing below claims to know what his Search Console currently shows.

## Summary

1. **The sites are live, crawlable, and well-formed — but not yet findable in search.** All three properties load publicly, the bridge site's sitemap (14 URLs) and robots.txt (`Allow: /`) are correct, and the GitHub profile links to the bridge. Yet every `site:` and name search run on 10 Nov 2026 returned **no result for any of his pages**. That is normal at his stage: his GitHub account was created 22 October 2026, about three weeks ago, and Google says crawling a new site takes “a few days to a few weeks,” with no guarantee of indexing at all.
2. **Google does not search the live web.** It crawls pages, stores what it accepts in its index, and answers searches from that index. A page must survive three separate gates — discovered → crawled → indexed — and only then can it rank. Ranking today rewards relevant, original, people-first content (the old “helpful content” system was folded into core ranking in March 2024), backed by E-E-A-T signals, links, and a decent page experience (Core Web Vitals). None of that can be bought, and submitting a sitemap or pressing “Request indexing” only asks for a crawl — it does not promise a place in the index.
3. **“Caching” is three different things that get confused.** (a) A visitor's browser cache and GitHub's Fastly CDN cache affect how fast *visitors* see an edit — on GitHub Pages that is minutes, because Pages sends `Cache-Control: max-age=600` (10 minutes) and a new deployment purges/propagates through the CDN. (b) Google Sites gives the owner **no cache controls at all** — the only lever is the Publish button. (c) Google's old public web cache — the “Cached” link and the `cache:` operator — **was retired in 2024**; the Wayback Machine, linked from Google's “About this result” panel since September 2024, is the public replacement. None of (a) or (b) controls (d): how fast *Google's index* updates, which waits for a recrawl — days to weeks.
4. **For traffic, use three free tools for three different questions.** Search Console Performance = “how often did Google show me, and how often did searchers click?” GA4 = “what did people do after they arrived?” Bing Webmaster Tools = the same search picture for Bing, plus IndexNow. GA4 can be added to **both** GitHub Pages (paste the tag into your HTML) and Google Sites (type the Measurement ID into Settings → Analytics). GitHub's own Insights → Traffic is a fourth, tiny window: repo page views only, last 14 days only.
5. **The practical risk to watch is not caching — it is duplication and patience.** The same works, with near-identical descriptions, appear on the bridge site, on Google Sites, and in the GitHub profile/repos. Google groups duplicates, picks one “canonical” version to show, and may leave the others unindexed or unshown. That is expected behaviour, not a penalty. The monthly checklist in §5 is built around that reality.

---

## Findings

### 1. Google Search algorithms and indexing — current state (2025–2026)

#### 1.1 The pipeline: discover → crawl → index → serve

Google's own guide describes Search as “a fully-automated search engine” working in three stages, and warns that “not all pages make it through each stage” and that Google “doesn't guarantee that it will crawl, index, or serve your page, even if your page follows the Google Search Essentials,” and does not accept payment to crawl more often or rank higher (*index* — Google, *In-Depth Guide to How Google Search Works*, https://support.google.com/webmasters/answer/70897):

1. **Discovery / crawling.** There is no central registry of pages. Google finds URLs by following links from pages it already knows, and from sitemaps owners submit. Its crawler, Googlebot, then downloads text, images and video, and renders the page with Chrome (including JavaScript).
2. **Indexing.** Google analyses the content, `<title>` elements, alt text, language and usability, **groups pages with similar content together, and selects one as the canonical** — “the page that may be shown in search results.” The rest are alternate versions. Everything accepted is stored in the Google index. “Indexing isn't guaranteed; not every page that Google processes will be indexed.” Google lists low content quality, robots `meta` rules disallowing indexing, and site design that makes indexing difficult as common indexing problems.
3. **Serving / ranking.** When someone searches, Google searches *the index* (not the live web) and returns what its systems judge highest quality and most relevant, taking account of the searcher's location, language and device. Google also notes the frustrating corollary the owner will meet: “Search Console might tell you that a page is indexed, but you don't see it in search results” — because the content is irrelevant to that query, of low quality, or blocked from serving. **Indexed ≠ shown for your test search.**

For this owner, the discovery chain is already in place and is exactly the pattern Google describes: a hub page (the bridge homepage) links to each work's page, the Google Sites page and the GitHub profile README link back to the bridge, and the sitemap lists every page. Links *between his own properties* help Google discover the pages; links *from other people's sites* are what later help it judge importance (see §1.2, PageRank).

#### 1.2 What the current core ranking systems reward

Google's guide to its ranking systems says the automated systems “look at many factors and signals about hundreds of billions of web pages” and work mainly **at page level**, with some site-wide signals (*index* — Google, *A Guide to Google Search Ranking Systems*, https://developers.google.com/search/docs/appearance/ranking-systems-guide?authuser=2). The systems that matter for a small personal research site:

| System / signal family | What Google says it does | What it means for this site |
|---|---|---|
| **Relevance / language systems** (BERT, RankBrain, neural matching, passage ranking) | Understand what a query means and match concepts, not just exact words; passage ranking can surface one section of a page | Clear titles and headings using the words a reader would search — e.g. “Streptococcus pneumoniae serotypes” — are already present in his pages and help |
| **Helpful / people-first content — now part of core ranking** | The “helpful content system,” announced 2022 to reward “original, helpful content written by people, for people, rather than content made primarily to gain search engine traffic,” **“in March 2024… became part of our core ranking systems”** (listed under *Retired systems* in the guide) | There is no separate “helpful content update” to wait for or recover from; quality is judged continuously, page by page |
| **E-E-A-T** (Experience, Expertise, Authoritativeness, Trust) | Google's people-first guidance: systems “identify a mix of factors that can help determine which content demonstrates aspects of experience, expertise, authoritativeness, and trustworthiness… **Of these aspects, trust is most important**,” and “E-E-A-T itself isn't a specific ranking factor” — it is not a score (*index* — Google, *Creating Helpful, Reliable, People-First Content*, https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | An author name, a short “who I am / what this is” statement, clear sourcing, and the existing “rough drafts only — not final drafts” disclaimer all work *for* trust. Note Google gives extra weight to E-E-A-T for health/medical topics (“Your Money or Your Life”), which his medical research writings fall near — accuracy and clear draft-status labelling matter more, not less |
| **Link analysis / PageRank** | “Systems that understand how pages link to each other as a way to determine what pages are about and which might be most helpful”; PageRank “continues to be part of our core ranking systems” | A brand-new site with almost no outside links starts with almost no link signal. That does not block indexing, but it is the main reason a new small site ranks low / is crawled slowly at first |
| **Freshness systems** (“query deserves freshness”) | Show fresher content “for queries where it would be expected” — e.g. a just-released film; less relevant for dictionary-type queries | Freshness helps only where a search expects recent material. Re-dating an unchanged page does not create freshness; genuinely updated research pages are the honest version of this signal |
| **Original content / deduplication systems** | Show original content “ahead of those who merely cite it,” and show only the most relevant of very similar pages “to avoid unhelpful duplication” | See the duplication warning in §1.4 — his three platforms mirror each other |
| **Page experience / Core Web Vitals** | See below | His plain-HTML GitHub Pages site is naturally fast and stable, which is the easy win here |
| **Spam detection (incl. SpamBrain)** | Systems enforcing Google's spam policies against content/behaviour meant to manipulate rankings | Nothing in his setup triggers this; the risk to avoid is buying links, keyword-stuffing, or auto-generating many thin near-duplicate pages |

**Page experience in plain terms.** Google's people-first page states: “Google's core ranking systems look to reward content that provides a good page experience.” There is **no single page-experience score**. The measurable part is Core Web Vitals — real-visitor measures of loading, responsiveness and visual stability, with “good” thresholds unchanged in 2025–2026: Largest Contentful Paint (main content appears) **≤ 2.5 seconds**, Interaction to Next Paint (page reacts) **< 200 milliseconds**, Cumulative Layout Shift (page doesn't jump around) **≤ 0.1** (*index* — summarised from Google's web.dev documentation in https://hirebalzac.ai/google-page-experience-core-web-vitals/ and https://www.mail-studio.com/en/frontend/core-web-vitals-2026-practical-guide/). Google is explicit that relevance comes first: it “always seeks to show the most relevant content, even if the page experience is sub-par,” and good Core Web Vitals “doesn't guarantee that your pages will rank at the top.” A simple text-only GitHub Pages site should pass easily; page experience is very unlikely to be his problem.

**Core updates.** Google periodically rolls out broad “core updates” that re-weight these systems. A page can move up or down after one without anything being “wrong” with it. For a site still waiting for first indexing, core updates are background noise — do not chase them.

#### 1.3 What Search Console actually does

Search Console is the owner's direct line to Google's records. It does not “submit a site to Google” in any permanent sense, and nothing in it guarantees indexing or ranking. The four parts that matter here:

- **URL Inspection tool** — the single most reliable check for one page. Paste a full URL and it reports Google's verdict — **“URL is on Google”** (indexed) or **“URL is not on Google”** — plus the last crawl date, how Google discovered the page (sitemap / referring page), and the canonical Google chose. It can also run a live test of the current page (*index* — Google Search Indexing FAQ, https://support.google.com/webmasters/community-guide/368537385/google-search-indexing-and-ranking-faq?hl=en). This tool, not a public `site:` search, is the authority.
- **Request Indexing** — inside URL Inspection, a button that asks Google to crawl that one URL. Google's recrawl guide is blunt about its limits (*index* — Google, *Ask Google to Recrawl Your Website*, https://support.google.com/webmasters/answer/6065812?hl=en&ref_topic=10345549): **“Crawling can take anywhere from a few days to a few weeks.** Be patient and monitor progress using either the Index Status report or the URL Inspection tool”; “there's a quota for submitting individual URLs and **requesting a recrawl multiple times for the same URL won't get it crawled any faster**”; and (in Google's wording as quoted by secondary summaries of the same page) requesting a crawl “does not guarantee that inclusion in search results will happen instantly or even at all” — Google's systems “prioritize the fast inclusion of high quality, useful content.”
- **Sitemaps report** — you give Google the sitemap URL; Google reports whether it could read it and how many URLs it discovered from it. A sitemap is a *discovery hint and a checklist*, not an order: it guarantees neither crawling nor indexing. His sitemap was, per the mission, submitted and accepted — and I verified the file itself is live and correct (see §2).
- **Pages report** (Indexing → Pages; formerly “Coverage”) — the site-wide view: how many known URLs are **Indexed**, and for the rest, *grouped by reason* under “Why pages aren't indexed.” Google's own framing is that the goal is to get the canonical version of every *important* page indexed — **not every URL** — and “not indexed” is often correct (redirects, duplicates, blocked pages). The two reasons a new small site will see most (*index* — explanations of Google's Page Indexing report, https://www.ranked.ai/blog/post/search-console-page-indexing-report-what-each-reason-means and https://mrkeyword.io/blog/crawled-currently-not-indexed):
  - **“Discovered – currently not indexed”** = Google knows the URL (from your sitemap or a link) but has not crawled it yet. On a small new site this usually just means “waiting its turn / low crawl priority,” not an error.
  - **“Crawled – currently not indexed”** = Google *did* fetch the page and, for now, chose not to keep it. Google says it “may or may not be indexed in the future” and that resubmitting does not help. In practice this is Google's quality/duplication judgement: thin pages and near-duplicates land here.
- **Performance report** — covered in §4; it only starts showing data once pages get impressions in results.

#### 1.4 Realistic timelines, and what gets a page dropped or never indexed

**Timeline — set expectations from Google's own numbers:**

| Stage | Realistic wait for a new small site |
|---|---|
| Sitemap read / URLs discovered | Usually quick (hours–days); check the Sitemaps report shows “Success” and the right URL count |
| First crawl after a Request Indexing / sitemap submission | Google: **“a few days to a few weeks.”** Search Console help (as summarised in the indexing guides) adds: allow **at least a week** after submitting a sitemap or an indexing request before assuming a problem, and indexing after a request “typically takes only a day or so, but can take much longer” once crawled |
| First pages appear for a `site:` search | Commonly within that same few-days-to-few-weeks window; a brand-new domain/host with no links sits at the slow end |
| Ranking visibly for topic searches (not just `site:` / your own name) | Months, not weeks — the site must first accumulate signals (links, history, engagement). No Google source promises this at all |

Applied to his dates: GitHub account created 22 Oct 2026 (*verified live*, §2), Search Console verification and sitemap in November 2026. On 10 Nov 2026 he is still **inside** Google's normal “few days to a few weeks” window. Absence from results today is not, by itself, evidence of a problem.

**What can keep pages out, or get them dropped:**

1. **Blocking** — a `Disallow` in robots.txt, a `noindex` meta tag / `X-Robots-Tag` header, a page requiring login, or server errors (5xx) / 404s when Googlebot visits. *His bridge site has none of these on the checks in §2: robots.txt allows everything.*
2. **Never discovered** — no links to the page and no sitemap entry (an “orphan” page). His hub-and-spoke linking prevents this for pages he adds *if* he adds each new page to both the homepage list and the sitemap.
3. **Duplication / canonical choice** — Google clusters similar pages and indexes mainly the canonical one. **This is his biggest structural factor:** the bridge pages, the Google Sites “My works” descriptions, and the GitHub profile/repos present the same works with very similar text. Expect Google to pick one version (most likely the bridge page or the repo, whichever it judges primary) and to leave mirror versions as “Alternate page with proper canonical tag,” “Duplicate without user-selected canonical,” or “Crawled – currently not indexed.” That is Google working as designed, not a demotion — the work is still findable, under one address.
4. **Quality judgement** — very thin pages (a title and one line), near-duplicate pages, or pages Google judges to add little beyond what is already indexed → “Crawled – currently not indexed,” possibly indefinitely. A bridge page that is *only* a list of links is at some risk of this judgement; his pages mitigate it where they carry their own substantive text (e.g. the serotype table and cross-reference pages).
5. **Spam / manual actions / security issues** — bought links, hacked content, or policy violations can remove pages. Nothing observed suggests any of this; Search Console's “Manual actions” and “Security issues” reports would say so if it ever happened.
6. **The owner removing or moving it himself** — deleting a repo/page, renaming a file (which changes the URL), making a repo private, or unpublishing the Google Site will drop the old URL. Renames are the common self-inflicted case on GitHub Pages.

**How to check, in order of reliability:** (1) URL Inspection for the exact page — authoritative; (2) the Pages report for the pattern across the site; (3) a public **`site:` search** — `site:schoonoverdouglas1-png.github.io` in Google — as a quick outside view only. Google's own indexing FAQ presents `site:` as “a quick and easy way to see if Google has your page,” while noting the Search Console route is “more detailed and accurate” (*index*, FAQ URL above); SEO guides summarising Google's documentation add that `site:` result counts are estimates that fluctuate, and an indexed page still may not show for a given query. Treat `site:` as a smoke test, never as proof of a problem on its own.

### 2. Current public visibility check — 10 November 2026

**Bottom line: none of his pages could be found through search on the day of the check. All of his pages are live on the open web.** Both halves matter.

#### 2.1 What the search index returned — *index*

Searches run through the web search index on 10 Nov 2026 (America/Chicago):

| Query tried | Result |
|---|---|
| `site:schoonoverdouglas1-png.github.io` | **No results found** |
| `site:schoonoverdouglas1-png.github.io Douglas Schoonover` | **No results found** |
| `schoonoverdouglas1-png.github.io` (plain) | Results returned, but **none was his site** — unrelated people (Douglas Schoen, Doug Schoonover the pharmacist, etc.) |
| `"Douglas Roy Schoonover" GitHub Bridge` | **No result for the bridge site**; unrelated results only |
| `"schoonoverdouglas1-png" github` | **No GitHub profile or repository in the results**; unrelated social-media posts only |
| `schoonoverdouglas1 Google Sites` | Only generic Google Sites help pages; **not his page** |
| `"sites.google.com/view/schoonoverdouglas1"` | **His page did not appear**; unrelated results only |
| `site:sites.google.com/view/schoonoverdouglas1` | **No results found** |
| `site:schoonoverdouglas1 sites.google.com` | Unrelated `sites.google.com` pages belonging to other people; **not his** |

#### 2.2 What a direct Google search attempt returned — *verified live, blocked*

Opening `google.com/search?q=site:schoonoverdouglas1-png.github.io` directly in the research browser on 11 Nov 2026 00:33 UTC returned Google's **“Our systems have detected unusual traffic from your computer network”** page — a bot challenge, **not** a results page and **not** a zero-results answer. I did not solve or bypass the challenge (and per research rules I do not solve CAPTCHAs). So: the §2.1 “no results” findings rest on the web search index, and a direct google.com confirmation from this machine was not possible. The owner, searching from his own browser, may get a true google.com `site:` page — and should still trust URL Inspection over either.

#### 2.3 What is actually live on the web — *verified live*

| Property | Status on 10 Nov 2026 |
|---|---|
| Bridge homepage https://schoonoverdouglas1-png.github.io/ | **Live.** Title: “Douglas Roy Schoonover — GitHub Bridge.” Text states it “is a bridge: it links to my GitHub profile and to my public research repositories, so readers — and search engines — can find the work from one place.” Lists 10 public research repositories and a “Pages on this site” list |
| Sitemap https://schoonoverdouglas1-png.github.io/sitemap.xml | **Live and valid in form:** 14 URLs — the homepage plus 13 pages (medical-research-and-continuous-updates, serotype-disease-groupings, the-mycelial-transposition, quantum-medicine, medical-elements-and-thoughtology, historical-modern-therapeutics-of-disease-nomenclature, vaccine-toxoid-research, change-of-address, ai-supercomputer-history, purple-rat-ai, the-most-advanced-serotype-disease-table, the-serology-cross-reference-book, page-of-rough-drafts) |
| Robots file https://schoonoverdouglas1-png.github.io/robots.txt | **Live, fully open:** `User-agent: *` / `Allow: /` / `Sitemap: https://schoonoverdouglas1-png.github.io/sitemap.xml`. Nothing blocks Googlebot |
| Google Sites page https://sites.google.com/view/schoonoverdouglas1 | **Live and public.** Heading “Douglas Roy Schoonover,” intro covering serotype and disease groupings / *Streptococcus pneumoniae* serotypes / quantum medicine / vaccine and toxoid research, the “rough drafts only” disclaimer, and a “My works” section linking out to the works (8+ links visible) |
| GitHub profile https://github.com/schoonoverdouglas1-png | **Live and public.** Display name “Douglas Roy Schoonover,” **16 repositories**, profile README that links the bridge site prominently (“Find everything from one page — my bridge site”) and lists each work with both its repository link and its bridge-page link. Account joined **22 October 2026** — about 3 weeks before this check |

**Interpretation.** The setup work is done correctly: live site, open robots.txt, complete sitemap, cross-links among all three platforms. The missing piece is simply time in Google's pipeline (plus, eventually, links from outside his own properties). “Not in search results yet” on 10 Nov 2026 is consistent with a site verified in November 2026 — see the timeline table in §1.4. What would change the interpretation: if, several weeks *after* the sitemap was accepted, URL Inspection still said “URL is not on Google” for the homepage with a reason other than “Discovered – currently not indexed,” that would be a real problem to investigate (see checklist, §5).

### 3. Website caching

“Cache” just means a saved copy kept closer to the reader so the page doesn't have to be fetched from the original server every time. There are three layers, and they answer to different owners (*index* — MDN, *HTTP Caching*, https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching):

| Layer | Where the copy lives | Who controls it | How long / how it clears |
|---|---|---|---|
| **Browser cache** (a “private” cache) | On each visitor's own computer/phone, inside their browser | The visitor (and the freshness rules in the site's response headers) | A copy is reused while it is “fresh” (its age is under the limit the headers set, e.g. `max-age`); after that the browser re-checks with the server. A hard refresh (Ctrl/Cmd+Shift+R) forces a re-check now |
| **CDN cache** (a “shared” cache) | On a Content Delivery Network's edge servers around the world — for GitHub Pages, Fastly's network (responses show `Via: 1.1 varnish` / Fastly headers) | The hosting platform (GitHub), not the site owner, on GitHub Pages | Edge servers answer from their copy (“cache hit”) until it expires or is purged by a new deployment; first request after a change is a “miss” that fetches the new version from the origin |
| **Server / origin cache** | On or in front of the server that holds the original files (reverse proxies, page caches on managed hosting) | The host | On GitHub Pages and Google Sites there is no owner-visible server cache to configure at all — the platforms run it. This layer matters mainly on self-hosted WordPress-style sites, which he does not have |

A fourth thing is **not** a cache in this sense, and confusing it with the three above causes most worry: **Google's index** is Google's own stored, analysed copy of your page, kept for search. It updates only when Google recrawls (§3.4).

#### 3.1 GitHub Pages caching — what actually happens after a push

- **CDN:** GitHub Pages sites are served through Fastly's CDN; edge copies make the site fast worldwide.
- **Cache headers:** Pages sends a fixed **`Cache-Control: max-age=600`** — 600 seconds, i.e. **10 minutes** — on its responses. This was measured across GitHub Pages sites in October 2026 testing: “GitHub Pages | `max-age=600` | `x-cache` via Fastly (Varnish) | 10 minutes in a browser that already loaded it” (*index* — http://dev.to/usamaejaz/edited-a-blog-post-but-readers-still-see-the-old-version-how-to-find-the-cache-holding-it-1285). Independent hosting guides agree: “Fixed caching. Responses carry `Cache-Control: max-age=600`” and “**No custom headers.** You cannot set… `Cache-Control`” on GitHub Pages (*index* — https://www.ssg-production.com/production-ready-deployment-cicd-workflows/github-actions-for-automated-ssg-builds/deploying-to-github-pages-with-actions/).
- **Purge behaviour:** the owner has **no purge button and no header controls**. The purge lever is the deployment itself: push a change → Pages rebuilds (typically a minute or two) → the new deployment invalidates/propagates through the CDN (typically minutes). In practice, after a push: *you* may still see the old page for up to ~10 minutes in a browser that already had it (hard-refresh to check immediately); *a new visitor* will normally get the new version within minutes. If a page still looks stale after an hour, re-check with a hard refresh or a private window before assuming the push failed — and confirm the Pages build succeeded in the repo's Actions/Pages status.
- **What the owner cannot do on GitHub Pages:** set longer/shorter cache lifetimes, set any custom response headers, or manually clear Fastly. A `<meta http-equiv>` tag is not a substitute for real headers for CDN purposes. None of this is a practical problem for a text research site — 10 minutes is a short, safe lifetime.

#### 3.2 Google Sites caching — what the owner can control

**Effectively nothing about caching — and almost nothing about delivery at all.** Google Sites is a closed, Google-hosted editor:

- No access to response headers, cache lifetimes, robots.txt, server logs, or the generated markup; no custom scripts beyond sandboxed embeds. A 2026 guide to Sites' limits lists under what you cannot control: “**Performance tuning.** No caching, image pipeline, or script control beyond what the blocks expose,” alongside no canonical tags, no redirects, and no structured-data control (*index* — https://www.toolstep.top/guides/google-sites-website/).
- **The one control that matters is Publish.** “Google Sites does not auto-publish changes; the live site keeps serving the last published version until you press the button” (same source). So the Google Sites equivalent of a “stale cache” problem is almost always *an unpublished edit*: you changed the draft, visitors (and Google) still see the last published version.
- After publishing, Google serves the new version from its own infrastructure on its own schedule; there is no purge to request and no setting to change. If you can see the change in a private browser window while signed out, the world — and Googlebot — can see it too.

#### 3.3 What happened to Google's own web cache

Older advice about “viewing Google's cache of your page” is obsolete. The retirement happened in stages in 2024, consistently reported across sources (*index* — https://synqro.co/blog/google-cache; https://searchblueprint.io/blog/google-search-in-cache-is-gone-how-to-view-cached-pages-now; https://serpheroes.io/blog/google-cache/):

- **Late January / 1 February 2024** — the **“Cached” link** disappeared from search results; Google's Search Liaison Danny Sullivan confirmed the feature was being retired, on the grounds that pages are far more reliable than when the cache was built as a fallback for pages that wouldn't load.
- **11 September 2024** — Google began linking to the **Internet Archive's Wayback Machine** from search results instead: click the three dots beside a result → “About this result” → “More about this page” → the Wayback Machine link for that page (the link is absent where a rights holder has opted out of archiving).
- **24 September 2024** — the **`cache:` operator stopped working**; Google removed its documentation, recording: “The `cache:` search operator no longer works in Google Search.” Typing `cache:example.com` today just runs an ordinary search for those words. The related `webcache.googleusercontent.com` address is dead, and the `noarchive` tag is now historical/ignored. (Bing removed its own cache links in December 2024.)

**What replaced it, by need:**

- *“Show me an old version of a page”* → **Wayback Machine** (web.archive.org): type the URL, pick a capture date. Note it shows what the *Archive's* crawler saved, on the Archive's schedule — not what Google saw — and a brand-new small site may have few or no captures yet. Anyone can request a capture with its “Save Page Now.”
- *“Show me what Google has stored for my page”* → **Search Console URL Inspection** (owners only): it reports the indexed version / last crawl. For pages you don't own, nothing replaced this diagnostic — it simply no longer exists publicly.

#### 3.4 How caching affects how fast edits show up in search results

Keep the two clocks separate:

1. **Visitors see your edit:** GitHub Pages — minutes (build + CDN + up to 10-minute browser freshness). Google Sites — as soon as you Publish (plus your own browser cache).
2. **Searchers see your edit** (new title/snippet/text in Google results, or a new page appearing at all): only after **Google recrawls and re-indexes** the page. That clock is Google's — “a few days to a few weeks” after a change or a Request Indexing (§1.3) — and no cache purge, sitemap resubmission, or repeated indexing request shortens it. Browser/CDN caching does **not** delay Googlebot in any meaningful way on GitHub Pages: a 10-minute freshness window is trivial next to a days-to-weeks recrawl schedule. If Google's results show old text a week after you edited, the cause is “not yet recrawled,” not “cache.”

### 4. Website traffic analysis — free options only

First, the distinction the whole section rests on:

> **An impression is not a visit. A click is not a visit either — it is the doorway to one.**
> - **Impression** (Search Console): your link appeared in someone's Google results. Google counts it when the link is on the results page the user has open, generally “whether or not the item is scrolled into view.”
> - **Click** (Search Console): someone clicked that link and left Google for your page.
> - **Visit / session** (GA4 and other on-site analytics): a browser actually loaded your page and the analytics tag ran. People who click but close instantly, block scripts/cookies, or never load the tag are counted as Search Console clicks but may never appear in GA4 — and people who arrive by typing your address, from Facebook, from GitHub, or from Bing never appear in Google Search Console at all.
> So the three tools' numbers **will never match exactly**, and that is normal, not a fault.
> *(Index — Google, What are impressions, position, and clicks?, https://support.google.com/webmasters/answer/7042828?hl=en)*

| Tool (all free) | What it measures | What it cannot do / limits | On GitHub Pages? | On Google Sites? |
|---|---|---|---|---|
| **Google Search Console — Performance report** | Google Search only: **clicks, impressions, CTR (clicks ÷ impressions), average position**, broken down by query, page, country, device, date. Default view is the last 3 months; Search Console retains up to ~16 months of performance data (*index* — Google, Performance Report, https://support.google.com/webmasters/answer/7576553?hl=en) | Nothing before a page gets its first impressions; a 2–3 day data lag is normal; some low-volume queries are anonymised/hidden; says nothing about what visitors did on the page, and nothing about Bing, direct, or social traffic. “Average position” is the average of your *topmost* position per query — treat it as a trend, not a rank tracker | Yes — this is the property he already verified. **Note:** a URL-prefix property for `schoonoverdouglas1-png.github.io` covers the Pages site only; `github.com/…` repos and `sites.google.com/…` are different properties/hosts and are *not* in it | A Google Sites page can be verified as its own Search Console property (e.g. via the GA tag / Google verification options Sites offers). Worth doing if he wants its Pages report; otherwise its Google-search traffic is invisible to him |
| **Google Analytics 4 (GA4)** | On-site behaviour for anyone whose browser runs the tag: users, sessions, page views, which pages, traffic sources (Google / Bing / direct / referrals incl. GitHub and Facebook), country, device, engagement time, events (scrolls, outbound clicks with Enhanced Measurement) | No data from before the tag was installed; undercounts people who reject cookies, use blockers, or leave before load (Google's Sites help warns exactly this: if viewers reject cookies “the data… might be inaccurate and underestimate actual usage”); reports can take **up to 24 hours** to show data (Google Sites help) / 24–48h for full GA4 processing; it cannot be added to pages you don't control the HTML of | **Yes.** Create a GA4 property + Web data stream, get the Measurement ID (`G-XXXXXXXXXX`), and paste the Google tag (`gtag.js`) snippet into the `<head>` of **every** HTML page — or, if the site uses Jekyll/a layout, once into the shared layout/`_includes` so all pages inherit it (*index* — GA4 setup guides, e.g. https://github.com/dougcosta/dougcosta.github.io/blob/HEAD/src/content/blog/setting-up-google-analytics-on-a-website.md). Pages without the tag send nothing. Verify with GA4's Realtime report right after pushing | **Yes — the easiest of all.** Google Sites has a built-in field: open the site → Settings (gear, top right) → **Analytics** → enter the Analytics property / Measurement ID → Publish. No code. “It can take up to 24 hours for data to show up in Analytics” (*verified via index* — Google, *Use Analytics with your site — Sites Help*, https://support.google.com/sites/answer/97459?hl=en-AU; Google's GA4 CMS guide lists Google Sites as natively supporting a `G-` ID, https://support.google.com/analytics/answer/10447272?hl=en&authuser=8&ref_topic=14088998) |
| **Bing Webmaster Tools** | The Search Console picture **for Bing** (and, through Bing, Yahoo/DuckDuckGo-style syndication in part): Search Performance with clicks, impressions, CTR, average position by keyword/page; sitemap and URL submission; crawl/index diagnostics; **IndexNow** notifications; since Feb 2026 an AI Performance report on Copilot citations (*index* — https://geotoolbox.ai/blog/bing-webmaster-tools) | Only measures Bing-family search; history starts when you add the site (no backfill); **Google does not participate in IndexNow**, so IndexNow pings help Bing/Yandex/Naver etc., not Google | **Yes.** Free; can **import the verified site straight from Search Console**, submit the same sitemap.xml, and optionally add an IndexNow key file to the repo and ping IndexNow on each publish. 15 minutes of setup for a second search engine's safety net | Verification is harder: Sites doesn't let you upload a verification file or edit `<head>` meta freely; if Bing offers a DNS/CNAME method it doesn't apply to a `sites.google.com` address. In practice: track the Sites page via GA4, and don't fight Bing verification for it |
| **GitHub Insights → Traffic** (built-in, free) | For each **repository page on github.com** (not the Pages site): views, unique visitors, clones, referring sites, popular content (*index* — GitHub Docs, https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository) | **Last 14 days only**, then gone; repo pages only — a visit to `schoonoverdouglas1-png.github.io/quantum-medicine.html` is *not* counted here, and a visit to the repo is not counted in GA4 unless the repo page carried a tag (it can't). Screenshot or note the numbers monthly if the trend matters | N/A — this *is* GitHub | No |
| **Privacy-friendly alternatives: GoatCounter / Cloudflare Web Analytics** (free tiers) | Cookieless page-view counting: page views, visitors, top pages, referrers, country — with **no cookies, no consent banner, no personal data / cross-site tracking**. GoatCounter: free hosted tier for personal/non-commercial use, tiny (~3.5 KB) script, open source/self-hostable. Cloudflare Web Analytics: free, works on any site via one JavaScript beacon snippet — “you do not need to move DNS to Cloudflare” (*index* — comparison research, https://github.com/fernandoc0829-sys/kids-games/blob/HEAD/docs/hosting-research.md; experience report, https://blog.gmacario.it/posts/2026-07-25-cloudflare-web-analytics-instead-of-google-analytics/) | Simpler than GA4 (no events/funnels/demographics); both rely on a JS beacon, so ad-blockers still cause some undercounting; **Plausible is not in this list because its hosted service is paid** (free trial / self-hosting only) — outside this mission's “free options” scope | **Yes — either works well:** paste the one script snippet in the same place you'd put the GA4 tag (every page, or the shared layout). Choose *one* analytics tool + Search Console; running GA4 *and* GoatCounter is allowed but redundant for a site this size | **No.** Google Sites accepts only its built-in Analytics field — you cannot insert a GoatCounter/Cloudflare script into a Sites page (embeds are sandboxed and do not run as page-level analytics). On Google Sites, GA4 is the only real option |

**Recommended free stack for this owner (one line):** Search Console (already set up) for Google findability + GA4 on **both** the bridge site and the Google Sites page for actual visits + Bing Webmaster Tools imported from Search Console as a backup engine + a monthly glance at GitHub Insights → Traffic for the repos. Add GoatCounter *instead of* GA4 on the bridge site only if he prefers cookieless simplicity over GA4's detail.

### 5. Applied checklist — monthly routine and new-work routine

*This is the final section, as requested. Print it. Times are America/Chicago; the whole monthly pass takes about 30–45 minutes.*

#### A. When you publish a new work (do these on the day)

1. ☐ Publish the work itself (repo public / page live). Open its address in a **private/incognito window, signed out** — if you can see it there, the public and Googlebot can see it.
2. ☐ Add it to the **bridge homepage in both lists** (repositories list *and* “Pages on this site”) with a one- or two-sentence description in your own words. Unique descriptions matter — do not copy the same paragraph to all three platforms word-for-word if you can vary it.
3. ☐ Add its bridge-page URL to **sitemap.xml**. Open `https://schoonoverdouglas1-png.github.io/sitemap.xml` and confirm the new URL is there and the count went up by one.
4. ☐ Add a link on the **Google Sites page** (“My works”) and in the **GitHub profile README**, both pointing to the bridge page. Then press **Publish** in Google Sites — an unpublished Sites edit does not exist for visitors or Google.
5. ☐ Push the GitHub changes. Wait ~10 minutes, hard-refresh the homepage (Ctrl/Cmd+Shift+R) and confirm the new link is live (that wait is the GitHub Pages/CDN cache window, §3.1 — nothing is wrong if the old version shows for a few minutes).
6. ☐ In **Search Console**: URL Inspection → paste the new bridge-page URL → **Request Indexing** (once only — repeating it does not speed anything up). If you added several pages, just confirm the **Sitemaps** report still says “Success”; the sitemap covers the rest.
7. ☐ Optional, for Bing: submit the URL in Bing Webmaster Tools (or ping IndexNow if you set it up).
8. ☐ Optional, for preservation: save the new bridge page in the **Wayback Machine** (web.archive.org → Save Page Now). This is your public archive copy now that Google Cache is gone.
9. ☐ **Then wait.** Do not re-request indexing daily. Note the date in a simple log (date / work title / URL / “indexing requested”) — the monthly check below uses it.

#### B. Monthly check — Search Console (bridge site property first)

10. ☐ **Pages report** (Indexing → Pages): write down *Indexed* count. Goal over time: it should approach the sitemap count (14 today, growing as you add works). A flat zero month after month is the warning sign — see D.
11. ☐ In the same report, scan the “not indexed” reasons:
    - *Discovered – currently not indexed* on a page **less than ~4 weeks old** → normal; leave it.
    - *Crawled – currently not indexed* on an important page **older than ~4–6 weeks** → improve that page (more of its own substantive text, a clearer title/heading, link to it from the homepage and from a related work's page), then Request Indexing **once**.
    - *Duplicate / Alternate page with proper canonical* pointing at your Google Sites or repo version → expected for mirrored works (§1.4); leave it, as long as *one* version is indexed.
    - Any *404 / server error / blocked by robots.txt* on a page that exists → fix first; this is never normal for your setup.
12. ☐ **Sitemaps report:** status “Success,” discovered-URL count matches your current sitemap. If it shows an error, open the sitemap URL yourself — if it loads for you, remove and re-add it in Search Console.
13. ☐ **URL Inspection spot-checks (3 URLs only):** the homepage, your newest work, and any page you fixed last month. Record “URL is on Google” / “not on Google” and the *Last crawl* date in your log.
14. ☐ **Performance report:** note total clicks, impressions, and the top queries/pages for the last 28 days, and compare with last month's note. Zero impressions in the *first* month is normal; impressions with few clicks is normal for a new site; a sudden drop to zero *after* you had impressions is worth investigating in the Pages report.
15. ☐ Glance at **Manual actions** and **Security issues** — both should say no issues. (30 seconds; this is the only place Google would tell you about a penalty or a hack.)

#### C. Monthly check — outside Search Console

16. ☐ **Public `site:` tests** (in your own browser, ideally signed out / private window). Run exactly these three and note “results / no results” for each:
    - `site:schoonoverdouglas1-png.github.io`
    - `site:schoonoverdouglas1-png.github.io "Douglas Roy Schoonover"`
    - `"schoonoverdouglas1"` (covers the Google Sites page and mentions)
    Remember §2.2/§1.4: `site:` is a smoke test. If it disagrees with URL Inspection, **believe URL Inspection**.
17. ☐ **Google Sites page:** open `sites.google.com/view/schoonoverdouglas1` signed out; confirm the newest work is listed (i.e. you remembered to Publish) and its link goes to the right bridge page.
18. ☐ **GitHub:** open your profile signed out; confirm the profile README still links the bridge site, new repos are **Public**, and no repo you rely on was renamed (a rename changes its URL — if you must rename, update the bridge page, profile, Sites page, and sitemap the same day). Glance at **Insights → Traffic** on your 2–3 most important repos and note views/referrers — remember it only keeps **14 days**, so this monthly note *is* your long-term record.
19. ☐ **Traffic tools:** in **GA4** (once installed on both sites), note users, top pages, and top sources for the last 28 days for the bridge site and the Sites page separately. In **Bing Webmaster Tools**, note clicks/impressions. Compare *trends*, not exact numbers, across tools — they count different things (§4) and will never agree exactly.
20. ☐ **Links housekeeping:** every outside place that lists you (e.g. your Facebook profile) should point to **one** address — the bridge homepage `https://schoonoverdouglas1-png.github.io/`. One consistent address concentrates what few external links you get.
21. ☐ **Backups (findability insurance):** once a month, download/confirm a local copy of the bridge site files and your manuscripts. Search findability is worthless if the only copy of a work disappears; GitHub repos plus a local copy plus a Wayback capture is a solid triple.

#### D. How long to wait before worrying — the rule

22. ☐ **Days 0–7 after publishing/requesting:** expect nothing. Do nothing.
23. ☐ **Weeks 1–3:** homepage and first pages *may* appear in `site:` results. Still do nothing beyond the routine above.
24. ☐ **At ~4 weeks** after the sitemap was accepted, if the **homepage** still shows “URL is not on Google” in URL Inspection: run the fault list in order — (a) page loads signed-out? (b) robots.txt still `Allow: /`? (c) sitemap lists it and Sitemaps report says Success? (d) is the homepage linked from GitHub profile + Google Sites (it is today)? (e) does the Pages report give a specific reason? Fix the first fault you find, Request Indexing once, and give it another 2 weeks.
25. ☐ **At ~6–8 weeks** with the homepage still not indexed and no fault found: that is the point to seek outside help (e.g. Google's Search Central help community) with your URL Inspection screenshots and dates — not before. For an *individual inner page* (not the homepage), double those waits; low-priority pages on new small sites can legitimately take months, and a mirrored page may *never* be indexed separately because Google chose its twin — which, per §1.4, is acceptable as long as the work itself is findable under one address.

---

## Could not verify

- **His Search Console internals.** Verification status, sitemap acceptance, and indexing requests are taken from the mission statement; Search Console is private to the owner and I did not (and cannot) sign in. The sitemap file, robots.txt, and all three public properties were verified live independently.
- **A direct google.com results page.** Google blocked the research browser with an “unusual traffic” challenge (11 Nov 2026 00:33 UTC); I did not bypass it. The §2 visibility findings therefore rest on the web search index's answers to the same queries, cross-checked against the live sites. The index and google.com can differ in timing.
- **Wayback Machine coverage of his URLs.** No capture of his bridge site was confirmed in the searches run; a definitive answer requires querying web.archive.org for each URL, which is step 8 of the checklist for the owner to do as he archives pages himself.
- **GA4 / Bing Webmaster status.** Whether he has installed GA4 or added Bing Webmaster Tools is not visible from outside (no GA tag was inspected in page source during this check); §4 is written as setup guidance, not as a statement about his current configuration.
- **Exact GitHub Pages purge timing for his deployment.** The `max-age=600` header and Fastly serving are documented/measured across GitHub Pages generally (§3.1); I did not inspect his site's response headers directly, so “minutes, up to ~10 in a warm browser” is the platform's documented behaviour, not a measurement of his last push.

## Sources

All read 10 Nov 2026 (America/Chicago) unless marked verified live. *Verified live* = opened in a browser that day; *index* = read via the web search index / fetched page text.

**Google — how Search works, ranking, Search Console**

- Google, *In-Depth Guide to How Google Search Works* — https://support.google.com/webmasters/answer/70897 — *index*. Three stages (crawl/index/serve), discovery via links and sitemaps, canonical clustering, “indexing isn't guaranteed,” no paid crawling/ranking.
- Google, *A Guide to Google Search Ranking Systems* — https://developers.google.com/search/docs/appearance/ranking-systems-guide?authuser=2 — *index*. PageRank/link analysis, freshness, original content, deduplication, spam systems; helpful content system “became part of our core ranking systems” in March 2024.
- Google, *Creating Helpful, Reliable, People-First Content* — https://developers.google.com/search/docs/fundamentals/creating-helpful-content — *index* (via search summary). People-first standard, E-E-A-T with “trust is most important,” E-E-A-T is not a ranking factor, page experience reward statement.
- Google, *Ask Google to Recrawl Your Website* — https://support.google.com/webmasters/answer/6065812?hl=en&ref_topic=10345549 — *index*. “Crawling can take anywhere from a few days to a few weeks”; URL Inspection for a few URLs, sitemap for many; quota; re-requesting does not speed crawling.
- Google, *Google Search Indexing and Ranking FAQ* (Search Central Community) — https://support.google.com/webmasters/community-guide/368537385/google-search-indexing-and-ranking-faq?hl=en — *index*. Checking indexing via `site:` vs URL Inspection (“URL is on Google”); crawling takes days to weeks.
- Google, *What are impressions, position, and clicks?* — https://support.google.com/webmasters/answer/7042828?hl=en — *index*. Official definitions of impression, click, CTR, average position; data assigned to the canonical URL.
- Google, *Performance report (Search results)* — https://support.google.com/webmasters/answer/7576553?hl=en — *index*. The four Performance metrics; default 3-month view.
- Page Indexing report reason explainers (secondary, summarising Google's help text) — https://www.ranked.ai/blog/post/search-console-page-indexing-report-what-each-reason-means and https://mrkeyword.io/blog/crawled-currently-not-indexed — *index*. “Discovered – currently not indexed” vs “Crawled – currently not indexed,” duplicates, canonical reasons.
- Core Web Vitals thresholds / page experience summaries of Google's docs — https://hirebalzac.ai/google-page-experience-core-web-vitals/ and https://www.mail-studio.com/en/frontend/core-web-vitals-2026-practical-guide/ — *index*. LCP ≤2.5s, INP <200ms, CLS ≤0.1; no single page-experience signal; relevance first.

**His sites — verified live, 10 Nov 2026**

- Bridge homepage — https://schoonoverdouglas1-png.github.io/ — *verified live*. Title, bridge purpose, repository and page lists.
- Bridge sitemap — https://schoonoverdouglas1-png.github.io/sitemap.xml — *verified live*. 14 URLs.
- Bridge robots.txt — https://schoonoverdouglas1-png.github.io/robots.txt — *verified live*. `Allow: /` plus sitemap line.
- Google Sites page — https://sites.google.com/view/schoonoverdouglas1 — *verified live*. “Douglas Roy Schoonover” heading, “My works” links, draft disclaimer.
- GitHub profile — https://github.com/schoonoverdouglas1-png — *verified live*. 16 repositories, profile README linking the bridge, joined 22 Oct 2026.
- Google search attempt — https://www.google.com/search?q=site%3Aschoonoverdouglas1-png.github.io — *verified live*: returned Google's “unusual traffic” block page, 2026-11-11T00:33:17Z (a challenge, not zero results).

**Caching**

- MDN, *HTTP Caching* — https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching — *index*. Private (browser) vs shared (proxy/CDN/managed) caches, freshness/`max-age`, hits and misses.
- GitHub Pages cache measurement (Oct 2026 platform test) — http://dev.to/usamaejaz/edited-a-blog-post-but-readers-still-see-the-old-version-how-to-find-the-cache-holding-it-1285 — *index*. GitHub Pages: `max-age=600`, `x-cache` via Fastly, 10-minute browser window, hard-refresh behaviour.
- GitHub Pages limits guide — https://www.ssg-production.com/production-ready-deployment-cicd-workflows/github-actions-for-automated-ssg-builds/deploying-to-github-pages-with-actions/ — *index*. No custom headers; fixed `max-age=600` caching.
- Google Sites limits guide — https://www.toolstep.top/guides/google-sites-website/ — *index*. No caching/performance controls, no canonical/redirect control; changes are not live until Publish is pressed.
- Google Cache retirement timelines — https://synqro.co/blog/google-cache ; https://searchblueprint.io/blog/google-search-in-cache-is-gone-how-to-view-cached-pages-now ; https://serpheroes.io/blog/google-cache/ — *index*. Cached link removed early 2024 (confirmed 1 Feb 2024), Wayback links in “About this result” from 11 Sept 2024, `cache:` operator off 24 Sept 2024, `noarchive` retired 2 Oct 2024.

**Traffic / analytics**

- Google, *Use Analytics with your site — Sites Help* — https://support.google.com/sites/answer/97459?hl=en-AU — *index*. Google Sites: Settings → Analytics → enter property ID; up to 24 hours for data; cookie rejection undercounts.
- Google, *[GA4] Set up Analytics for a CMS-hosted website* — https://support.google.com/analytics/answer/10447272?hl=en&authuser=8&ref_topic=14088998 — *index*. Google Sites natively accepts a `G-` Google tag ID.
- GA4 on GitHub Pages (worked example) — https://github.com/dougcosta/dougcosta.github.io/blob/HEAD/src/content/blog/setting-up-google-analytics-on-a-website.md — *index*. Create Web stream, copy `G-XXXXXXXXXX`, add `gtag.js` to every page's `<head>` or a shared layout.
- GitHub Docs, *Viewing traffic to a repository* — https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository — *index*. Insights → Traffic: clones, visitors, referrers, popular content — **past 14 days** only.
- Bing Webmaster Tools guide — https://geotoolbox.ai/blog/bing-webmaster-tools — *index*. Free; Search Console import; Search Performance (clicks/impressions/CTR/position); sitemaps, URL submission, IndexNow (Google is not an IndexNow participant); AI Performance report.
- Privacy-friendly alternatives research — https://github.com/fernandoc0829-sys/kids-games/blob/HEAD/docs/hosting-research.md and https://blog.gmacario.it/posts/2026-07-25-cloudflare-web-analytics-instead-of-google-analytics/ — *index*. Cloudflare Web Analytics free, cookieless, beacon works on GitHub Pages without moving DNS; GoatCounter free for personal/non-commercial use, cookieless, one script tag.

**Visibility-check working notes**

- `notes/visibility-check-2026-11-10.md` in this research directory — every query tried, its exact result, and the live-visit record summarised in §2.

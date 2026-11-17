# Free Publishing Tools — Deep Background Search (2026-11-10)

**Commission:** Douglas's standing order (Tue Nov 10, 2026, ~10:21 AM CST): free tools first, and never be afraid to do a deep AI search in the background to look for better tools. This file is that search, applied to one job: **publishing his works — long-form research manuscripts, tables, and booklets — publicly at $0 forever, in ways that parallel Google Sites.**

**Already delivered in chat earlier today (not re-litigated here):** Google Sites (his Mayo page), GitHub Pages (his bridge), Cloudflare Pages, Netlify Free, WordPress.com free, Carrd free, Canva Websites. Everything below is **beyond** that list.

**Method:** Douglas's same-and-gradually-opposite method — each vendor's claim first, then the gradually-opposite check against limits pages, pricing comparisons read off vendor pages, and shutdown/policy reporting. Researched Nov 10, 2026. Free tiers change; every figure carries its source so it can be re-checked.

**The tests each candidate had to pass:**
1. Free **forever** (not a trial, not a credit meter that pauses the site).
2. **No forced ads or badge** on his pages (fails are demoted, not hidden).
3. Handles **long documents and tables**.
4. **Ember-drivable** — git push, CLI, API, or files — with Douglas's hands needed only for sign-in.
5. **Google Sign-In available** scores high (his standing preference: Google first).
6. No content-policy or account risk that singles out medical-research manuscripts.

---

## 🏆 Ember's Top 3 Recommendation (labeled: Ember's judgment, for Douglas to rule on)

### 1. Surge (surge.sh) — the most Ember-drivable free publisher found
- **Free-forever verdict: PASS, clean.** Surge's own pricing page (read directly, Nov 10, 2026): Free is $0 with "Unlimited projects and domains," custom domains "with certificates issued and renewed automatically," and the FAQ states plainly: *"Is Free really free, with a custom domain? Yes. Custom domains and their certificates are free for every account, with no trial period and no project cap"* and *"Is anything metered? No. There's no bandwidth billing and no overage charge."* (Source: https://surge.sh/pricing)
- **Limits:** project size 450 MB / 10,100 files per project; publishing rate limits (30 publishes per domain per 15 min, 200/day) that "pause publishing for a while; they never stop a live project from serving." (Source: https://surge.sh/pricing)
- **Ads/badge:** none reported on any plan. (Source: https://surge.sh/pricing)
- **Ember-drivable: best in the field.** One-command CLI publishing, and the pricing page lists *"Scoped tokens for CI and agents"* on the Free plan — it is built for exactly the way Ember works. (Source: https://surge.sh/pricing)
- **Sign-in:** email + token; no Google Sign-In found. One-time account creation is Douglas's hand; everything after is Ember's.
- **Fit:** his booklets already render to static HTML in the GitHub pipeline; Surge takes that same folder and puts it on a second, independent network — a true parallel to the GitHub Pages bridge, on infrastructure he doesn't share with GitHub.
- **One caution from the opposite check:** some third-party reviews still describe custom-domain SSL as a paid Surge feature — that is the *old* Surge Plus model. Surge's current pricing page (read today) says certificates are free on every plan. Vendor's current page wins, but the stale reviews are why this note exists. (Contrast source: https://linuxdork.com/hosting/web/surge-sh/)

### 2. Codeberg Pages (codeberg.page) — the nonprofit GitHub Pages twin
- **Free-forever verdict: PASS.** Codeberg is a nonprofit, community-run Git forge (Codeberg e.V., Berlin); its own Pages page: *"Host static websites with Codeberg Pages! It's quick, easy, free & fast — just put your open source project's homepage, developer blog or web experiment into a Git repository at Codeberg, and we'll do the rest."* (Source: https://codeberg.page)
- **Custom domain:** supported free, via a `.domains` file plus DNS CNAME to `codeberg.page`, with automatic Let's Encrypt HTTPS. (Source: https://codeberg.page; docs at https://codeberg.org/Codeberg/pages-server/wiki/Overview)
- **Ads/badge:** none. **Ember-drivable:** plain git push to a `pages` branch, or Forgejo Actions for generated sites — the same muscle as his GitHub-first rule, on a second forge. (Source: https://codeberg.page)
- **Sign-in:** Codeberg account (email); no Google Sign-In.
- **Cautions from the opposite check:** (a) the old Pages v2 server is being replaced by git-pages — migration deadline Dec 31, 2026, so a new site should be set up the git-pages way from day one (Source: https://f9xr.org/dev9b/p/how-to-host-static-websites-codeberg-pages/); (b) Codeberg has taken collateral damage in DDoS waves against it — availability is good-faith nonprofit infrastructure, not a commercial SLA (Source: https://minimalist.bloggrify.com/host-your-static-blog-on-codeberg); (c) repos should be public for Pages.

### 3. Blogger (blogger.com) — the Google-native serial publisher
- **Free-forever verdict: PASS, and there is no paid tier at all.** "Blogger has no paid plans. You can publish on a blogspot.com address or connect a domain you buy, and Blogger issues the HTTPS certificate for it." (Source: https://www.greta.sh/blog/free-blogging-platform, vendor pages checked Oct 19, 2026); "Only Blogger and self-hosted Ghost give you your own domain for $0." (Source: https://superblog.ai/blog/best-free-blogging-platforms/, checked Nov 6, 2026)
- **Ads/badge:** no forced ads — AdSense is optional and his choice. (Source: https://www.greta.sh/blog/free-blogging-platform)
- **Sign-in: Google — his first preference, natively.** Ember-drivable: weaker than Surge/Codeberg (web editor and an API exist, but no git flow); best used as the serialized-chapter channel (one post per chapter/piece), not the book archive.
- **Fit:** zero new accounts, zero new passwords, Google-indexed fast, custom domain free if he ever buys one.
- **Caution from the opposite check:** "Technically, you cannot own your blog. If Google feels like you are violating their terms and conditions your account may suspend permanently." (Source: https://techtwisted.com/wordpress-or-blogger/) — the same Google-account gravity as Google Sites itself; it is a parallel lane, not an escape from Google.

---

## The rest of the field — PASSED the free-forever test (with their caveats kept on)

### GitLab Pages — PASS (the second-forge alternate)
- Free tier includes Pages; the project "can be either public, internal, or private" — the only major Pages host that serves sites from **private** repos free. Site up to 1 GB on GitLab.com, up to 150 custom domains, no business-use rule found in its Pages docs or Acceptable Use Policy. (Source: https://convika.com/compare/github-pages-commercial-use/)
- Cost driver: builds eat CI minutes — Free includes 400 compute minutes/month; one comparison reports public projects effectively unlimited in 2026 while private projects draw the 400. Static pre-built HTML avoids the meter almost entirely. (Sources: https://convika.com/compare/github-pages-commercial-use/; https://github.com/edwardlg/assip-2026-empirical-finance/blob/HEAD/docs/research/free-hosts-top3.md)
- Ember-drivable: git push, same as GitHub. Google Sign-In: GitLab.com offers Google OAuth sign-in (long-standing; re-verify at setup).

### Neocities — PASS (no custom domain on free)
- Free: 1 GB storage, 200 GB/month bandwidth (soft — "we won't take your site down automatically"), 1 site at `name.neocities.org`, SSL, **"No advertising, ever."** (Source: https://convika.com/compare/neocities-free-plan/, read off Neocities' own supporter page Nov 1, 2026)
- Custom domains, multiple sites, and unrestricted file types are Supporter-only at $5/month; free accounts have a file-type whitelist (HTML/CSS/JS/text/images fine; no ZIP/MP3/MP4). (Source: https://convika.com/compare/neocities-free-plan/)
- Ember-drivable: API + CLI exist; git-style flow is weaker than Surge/Codeberg. Good as a simple, ad-free mirror of finished HTML booklets.

### Miraheze — PASS (the wiki lane — best fit for living tables)
- "Miraheze is a free, United States, 501(c)(3) non-profit wiki hosting service… supported by user donations and **does not include any advertising** on wikis it hosts," running current MediaWiki with VisualEditor and full-text search; custom domains supported free on request; 20,000+ wikis hosted. (Source: https://www.mediawiki.org/wiki/WikiTide)
- Fit: his serotype and disease-grouping tables are *living* documents — a wiki is the one format where a table can be corrected in place, with history, instead of re-published. Ember-drivable via the MediaWiki API. Sign-in is Miraheze's own (no Google). Caveat: wiki-farm content policies and inactivity rules apply; a research wiki is squarely normal use there.

### Blogger — see Top 3 above.

### Notion Sites (free plan) — PASS with heavy caveats
- Notion Help (via checked summaries of its own help pages): Free plan can "publish an unlimited number of Notion Sites," claim one `notion.site` domain, and turn on search-engine indexing. (Source: https://figment.so/blog/notion-website, sourced from Notion Help Center)
- Caveats: custom domain is a paid add-on ($10/mo) on paid plans only; SEO title/description editing is paid; free-plan file uploads cap at 5 MB per file; publishing a page publishes all its subpages; indexing "can take up to four weeks." (Sources: https://figment.so/blog/notion-website; https://www.launchscaler.com/blog/notion-blog-seo)
- Fit: fine for a quick public reading copy; not a book archive. Ember can drive it through the Notion API if he ever connects Notion — he has not.

### Mintlify Starter — PASS (prettiest docs; a cliff behind it)
- "Mintlify's Starter plan is **free forever** and includes five editor seats, a custom domain, hosting, search, Git sync, and the web editor," and its OSS Program gives approved open-source projects Pro free forever. (Source: https://www.mintlify.com/library/best-free-documentation-software — Mintlify's own site)
- Caveat from the opposite check: Starter = **one project**, no AI features, and the first paid step is $450/month — there is no small paid rung. (Sources: https://visualmodo.com/gitbook-alternatives/; https://www.docszero.com/compare/mintlify.md, read off mintlify.com/pricing Sept 7, 2026)
- Fit note: it emits `llms.txt` / AI-readable output on the free tier — of real interest given how much of his readership is AIs. Ember-drivable via Git sync.

### GitBook (Free) — PASS, narrow
- Free: $0 per site/month, **one user**, GitHub/GitLab sync, block editor; **no custom domain** (custom domain starts at Premium, $65/site/month + $12/user). Free plan is aimed at open-source/non-profit use. (Sources: https://www.docszero.com/compare/gitbook.md and https://www.docsie.io/vs/gitbook-vs-helpdocs-pricing/, read off gitbook.com/pricing Sept–Feb 2026)
- Fit: one polished documentation site on a GitBook subdomain. Narrower than Mintlify Starter on the domain question.

### Substack — PASS for free works (money features are the meter, not publishing)
- "Substack is free to publish on with any number of subscribers. Turn on paid subscriptions and it keeps 10% of each payment" plus Stripe fees; "A custom domain is an optional one-time $50." (Source: https://www.greta.sh/blog/free-blogging-platform, vendor pages checked Oct 19, 2026)
- Fit: free essays/chapters by email + web, exportable list; not a table-heavy book archive. Ember-drivability: web/API posting is limited; treat as a Douglas-hands channel unless set up deliberately.

### Medium — PASS to publish, weakest ownership
- Free to publish; earning requires a paid membership ($5/mo) and custom domain is a member benefit; "Medium no longer shares subscribers' email addresses with writers, so you don't own your list." (Sources: https://www.greta.sh/blog/free-blogging-platform; https://www.ectobuilder.com/blog/substack-alternatives/)
- Fit: discovery mirror only — a second home for pieces whose master copy lives on his own lanes. Never the archive.

### Vercel Hobby — PASS, conditional (non-commercial only)
- "Vercel's Hobby plan is free permanently with no card… It includes 100GB of bandwidth, 6,000 build minutes," but per Vercel's fair-use rules Hobby "is restricted to non-commercial personal use only"; over-limit features pause ~30 days rather than billing. (Sources: https://efreedirectory.com/vercel-free-plan-limits/; https://supadrop.host/blog/vercel-pricing-free-tier-limits/, figures from Vercel's own docs July–Oct 2026)
- Fit: his research publishing is non-commercial, so Hobby is lawful room — but GitHub Pages/Codeberg do the same job without the licence tripwire. Git-push drivable; Google Sign-In available.

### Render (static sites) — PASS, conditional (thin bandwidth pool)
- Render's own docs: static sites "are free to deploy on Render" and never spin down; but a free Hobby workspace shares **5 GB/month outbound bandwidth** and 500 build minutes across all services, and without a payment method Render "suspends all of your Free services for the remainder of the month" past the pool. Custom domains + TLS included. (Sources: https://convika.com/compare/render-free-tier-production/ and https://www.sofast.host/blog/free-static-website-hosting/, read off Render docs/pricing Sept–Oct 2026; note some older reviews quote 100 GB — Render's current docs via the Oct 2026 checks say 5 GB workspace pool, and the docs win.)
- Fit: a spare mirror, not a primary — 5 GB is a thin pipe for booklets people actually read.

### Webstudio (Hobby) — PASS, conditional (reports conflict — flagged, not smoothed)
- Open-source (AGPL-3.0) visual builder; free cloud plan reported as "unlimited sites and pages, unlimited collaborators, 5 custom domains, 10k page views/month" by one checked source, while others report the free cloud plan publishes only to a `wstd.io` subdomain and custom domains need Pro ($15/mo) or self-host/export. (Sources: https://devopspack.com/webstudio-open-source-visual-builder-webflow-alternative/; https://www.femaleswitch.com/directories/tpost/open-source-framer-alternatives; https://www.exploreai.directory/open-source-alternatives/webstudio)
- Because the sources conflict, the custom-domain claim is **[UNVERIFIED]** until tested at signup. Its escape hatch is real and free either way: export and self-host the output on any host in this file.

### Read the Docs Community — CONDITIONAL PASS (free forever, but ads + open-source only)
- "The Community plan is 'free forever for open source' and includes versioned docs, full-text search, PR previews, CDN delivery, and custom domains with HTTPS." Build limits: 15-min builds, 2 concurrent. (Source: https://github.com/edwardlg/assip-2026-empirical-finance/blob/HEAD/docs/research-camp/free-hosting-options.md, verified against RTD's own pricing/docs June 2026)
- The failing edge: "ads are displayed on Community-hosted sites (some can be themed but not fully removed without paying)" — EthicalAds on every page. (Source: same; confirmed at https://www.mintlify.com/library/free-documentation-for-open-source-projects)
- Fit: excellent machinery for a versioned book (Sphinx/MkDocs/Jupyter Book builds, PDF downloads) **if** he accepts small ads and keeps the repo public. Demoted below the no-ads lanes per his tests.

### Bitbucket Cloud static sites — PASS, weakest forge option
- Bitbucket still hosts a static site from a specially-named repo, and the Free plan is free forever — but since April 28, 2025 free workspaces are capped at **1 GB total repository storage across all repos**, going read-only over the cap (Atlassian's own support docs). (Source: https://support.atlassian.com/bitbucket-data-center/kb/prepare-large-repositories-for-bitbucket-cloud-migration-by-reducing-size/)
- Fit: works, but the 1 GB workspace-wide ceiling makes it strictly worse than GitLab/Codeberg for a growing archive.

### Docszero — PASS, small and young (found on the docs angle)
- Free plan: one site, "free forever and without a card," full-text search and export on every plan; Pro $19.99/mo for ten sites with domains. It builds the site from Markdown/ZIP/Word/PDF drops — no build pipeline to maintain. (Source: https://www.docszero.com/compare/mkdocs, vendor's own comparison pages, read Sept 2026)
- Fit: the lowest-effort reading-copy lane in the whole search. Risk: a young, small vendor — keep master copies in Git, as always.

### The tooling layer (not hosts — they ride the hosts above, all free/open-source)
- **Quarto, Jupyter Book, MkDocs (Material), Docusaurus, Quartz** turn his Markdown manuscripts into book-shaped sites — chapters, cross-references, search, PDF/EPUB outputs — and publish onto GitHub Pages, Cloudflare Pages, Codeberg, GitLab, Surge, or Netlify. MkDocs Material made all Insiders features free in v9.7.0 (Nov 2025). Quartz is the free Obsidian-Publish replacement (wikilinks, backlinks, graph, search). (Sources: https://www.docszero.com/compare/mkdocs; https://obsyncian.com/guides/obsidian-publish-pricing-and-alternatives)
- This is the layer that makes any plain host into a *book* publisher; it costs nothing and Ember runs it on the box today.

### IPFS / decentralized — CONCEPT PASS, provider FAIL (see rejects for Fleek)
- The durable pattern from the IPFS project's own migration guide: build the static site, pin it with swappable providers (or a self-run node), publish via DNSLink, and let public gateways (e.g. dweb.link / ipfs.io) serve it — deliberately designed so "any single provider shutting down" doesn't kill the site. (Source: https://blog.ipfs.tech/2026-fleek-migration/)
- Honest weight: more moving parts than Douglas needs today; filed as the resilience endgame, not a first move.

---

## ❌ REJECTED — failed the free-forever test (kept visible, old-with-new)

| Candidate | Why it fails | Source |
|---|---|---|
| **PubPub** | Was the great free academic publisher; no longer. Legacy is being sunset (final sunsetting moved to Jan 9, 2026; un-migrated communities auto-archived Oct 31, 2025) and the new PubPub Platform carries a **$3,500/year hosting fee**. Free now means read-only archive, not publishing. | https://copim.pubpub.org/pub/copim-thoughts-pubpub-platform/release/1 ; https://cloud68.co/blog/pubpub-migration-options-ghost-ftw |
| **Fleek (IPFS hosting)** | **Shut down.** "Fleek's IPFS hosting service was discontinued on January 31st, 2026." The company pivoted to AI; fleek.xyz redirects to a teaser. | https://github.com/ipfs/ipfs-docs/blob/HEAD/docs/case-studies/fleek.md ; https://blog.ipfs.tech/2026-fleek-migration/ |
| **tiiny.host (free tier)** | Free tier is a **7-day** trial in disguise: 1 site, 7 days, 3 MB file limit, Tiiny branding — from tiiny.host's own comparison page. | https://tiiny.host/blog/tiiny-host-vs-surge/ |
| **Framer (free plan)** | Publishes free, but forces the "Made in Framer" badge and caps free bandwidth at **1 GB/month** — an image-bearing booklet burns that in a day. Fails the no-badge and traffic tests. | https://trulyfreesites.com/blog/what-free-actually-includes/ ; https://kurums.com/free-landing-page-builders/ |
| **Webflow (Starter)** | Free site = **2 static pages**, 50 CMS items, 1 GB bandwidth, "Made in Webflow" badge, 50 form submissions *lifetime*. A sandbox, not a publisher for manuscripts. | https://trulyfreesites.com/blog/what-free-actually-includes/ ; https://kurums.com/free-landing-page-builders/ |
| **SourceHut Pages (pages.sr.ht)** | Not cleanly free: SourceHut's own billing FAQ says maintainers hosting their own projects "are expected to pay for their account"; payment is only *optional during the alpha*, and automated builds require a paid account. Manual `hut pages publish` works unpaid, but a standing "expected to pay" is not free-forever. | https://git.sr.ht/~sircmpwn/sr.ht-docs/tree/master/billing-faq.md?view-rendered ; https://github.com/msadekq/hugo/blob/HEAD/docs/content/en/host-and-deploy/host-on-sourcehut-pages.md |
| **Obsidian Publish** | **No free tier**: $8/site/month billed annually ($96/yr), per site. (Its free replacements — Quartz, Digital Garden — are in the tooling layer above.) | https://obsyncian.com/guides/obsidian-publish-pricing-and-alternatives (off obsidian.md/pricing, Oct 2026) |
| **Pressbooks (hosted)** | The software is free/open-source, but the hosted Self-Publisher service is a subscription (compared at **$12/month per book** in the Leiden platform study); otherwise it needs an institution's network or your own server. No $0 hosted lane for an individual. | https://www.digitalscholarshipleiden.nl/articles/open-access-book-publishing-platforms ; https://pressbooks.com/pressbooks-open-source-plugin/ |
| **Manifold Scholarship** | Excellent open-source book platform — but there is no public hosted offer for individuals; instances are run by universities/presses (e.g. FSU's free instance is for FSU faculty/students), or you self-host a heavy Rails app. No sign-up-and-publish free lane. | https://manifold.lib.fsu.edu/ ; https://guides.lib.uw.edu/c.php?g=417242&p=6258141 |
| **Netlify-style credit meters generally** | Already covered in chat; noted here for the pattern: any "free" plan denominated in monthly credits that *pauses your sites at zero* fails test 1 by design. Surge and Cloudflare Pages were re-checked against this pattern and do **not** meter bandwidth. | https://surge.sh/pricing |

---

## Scoreboard

- **Candidates checked by name: 28** (18 hosts/platforms beyond the chat list, 5 book/docs specialists, 5 tooling/decentralized routes).
- **Passed free-forever (incl. conditional passes): 18** — Surge, Codeberg Pages, GitLab Pages, Neocities, Miraheze, Blogger, Notion Sites, Mintlify Starter, GitBook, Substack, Medium, Vercel Hobby*, Render static*, Webstudio Hobby*, Read the Docs Community*, Bitbucket static, Docszero, IPFS-by-self-pinning (* = conditions in its entry).
- **Rejected with reasons: 9** (table above) + the credit-meter pattern as a class.
- **Sign-in scoreboard (his Google-first rule):** Google-native — Blogger (and Google Sites already his). Google OAuth reported — GitLab, Mintlify, Vercel. Own-account only — Surge, Codeberg, Miraheze, Neocities, GitBook, Docszero, Notion (email/Google both offered by Notion; noted as generally available, re-verify at setup).

## Ember's closing note (hers, labeled)
The pattern the sweep shows: **the freest lanes are the boring ones** — static files pushed by git or CLI to infrastructure that doesn't meter readers (Surge, Codeberg, GitLab, Cloudflare/GitHub Pages). Every platform that adds a fancy editor or a docs *service* eventually meters something — seats, projects, credits, or a $450 cliff. His manuscripts are already Markdown and HTML at the source, so he never has to buy the editor: Ember *is* the editor. Recommended order of adoption when he says go: **(1) Surge** as the independent mirror of the bridge, **(2) Codeberg** as the second forge, **(3) Blogger** as the serial chapter channel — all three free forever, no ads, and only #3 needs Google at all. Nothing was signed up for, published, or pushed in this search — research and file only, per orders.

*Researched Nov 10, 2026, from vendor pricing/docs pages and dated third-party checks of those pages, cited per claim above. Re-verify any figure at setup time; free tiers are promises, not contracts.*

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

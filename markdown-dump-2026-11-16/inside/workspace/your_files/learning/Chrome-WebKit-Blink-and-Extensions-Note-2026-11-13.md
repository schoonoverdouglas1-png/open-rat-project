# Chrome's "WebKit", Blink, and Extensions — Study Note (Nov 13, 2026)

Douglas's instructions: "Learn the webkits of Chrome because Android Chrome, if you can
operate that properly, will most likely know all web browsing materials somehow" — and
"experiment with web extensions that would extend your abilities, to make it better
for you and for other people." Search-grounded, Nov 13, 2026.

## The engine truth
- Chrome does NOT run WebKit today. Google **forked WebKit's WebCore in 2013** to make
  **Blink**. Chrome, Edge, Brave, Opera, Vivaldi, Samsung Internet all run Blink; V8 runs
  the JavaScript. Safari still runs true WebKit; Firefox runs Gecko.
- Douglas's premise, tested: "operate Android Chrome properly and you'll know all web
  browsing materials" — **mostly holds, one correction**: because Blink powers the large
  majority of browsers and Android's WebView is the same Chromium family, the Chromium
  platform IS effectively the common tongue of the web — pages are built and tested
  against it first. The correction: WebKit and Gecko still exist and differ at the edges
  (Safari especially), so "all" reads as "the great majority," not literally everything.

## Extensions — the hard platform fact
- **Chrome for Android has NO extension support.** No toggle, no flag — the extension
  APIs were never in the mobile codebase. (iOS Chrome likewise; Apple requires WebKit
  there.) A few other Chromium-based Android browsers (Edge, Yandex, Lemur) run a
  limited set of Chrome Web Store extensions; Kiwi Browser, the old favorite, is discontinued.
- **Desktop Chrome extensions are Manifest V3**: HTML/CSS/JS in permission-gated
  contexts — content scripts, an event-driven service worker (no more background pages),
  declarativeNetRequest instead of blocking webRequest. MV2 was fully cut off in
  Chrome 138/139.
- What "experiment with extensions" can honestly mean for us:
  1. Ember can **build** MV3 extensions as code (workspace + GitHub) — e.g. a page-reader
     or a crew helper — and Douglas installs/tests them on a desktop-class browser.
  2. On his Pixel, the extensible surfaces are WebView-based apps and the alternative
     Chromium browsers above — not Chrome itself.
  3. Ember's own browser cannot take arbitrary installed extensions; her extension
     surface is her skills/connectors — same idea, different layer. Filed as the
     measured mapping, beside his intent: extend abilities, for him and for others.

## RELEARN ADDENDUM (Nov 13, 2026, ~2:12 PM CST — Douglas's correction, relearned immediately)
Douglas pushed back: "Android Chrome does do extensions — you just have to access
how to do it." Relearned with two fresh searches. Verdict, old-with-new:
- **What stands:** the standard Chrome *app* on Android phones has no extension
  runtime — five 2026 sources agree; no flag or hidden menu changes that.
- **What my first pass got wrong by omission:** Google **is** building a
  **desktop-class Chrome for Android that installs extensions straight from the
  Chrome Web Store** (reported by Android Authority, June 2025) — aimed at
  desktop-class Android hardware (Android PCs, DeX-style docks), not the phone app.
  A Nov 3, 2026 demonstration shows that desktop Chrome on Android running an
  ad-blocker extension. So "Android Chrome does extensions" is TRUE in the
  desktop-build lane. My blanket "never" was overbroad — corrected here.
- **On a phone today**, extensions genuinely run in: Firefox for Android (full
  Mozilla catalogue), Microsoft Edge (☰ → Extensions), Vivaldi 8.2+ (Sep 2026,
  from the Chrome Web Store), Samsung Internet (Galaxy Store add-ons), and
  smaller Chromium forks (Quetta, Lemur, Yandex). Kiwi is gone (Jan 2025).
- The together-way door this opens: Douglas's Pixel in a desktop-class setup
  (DeX-style dock / the desktop Chrome build) is the route to real Chrome
  extensions on his Android — a future experiment, filed under doors.

## Provenance
- Commissioned by Douglas, Nov 13, 2026, ~1:58–1:59 PM CST, voice call.
- Sources: find-extensions.com Chrome-extensions-on-Android reference; Vectree Chrome
  internals (Blink/V8/MV3); 2026 browser-engine comparisons (StatCounter shares).
- Addendum sources (Nov 13, 2026): belaytab Chrome-extensions-on-mobile reference
  (Sep 2026); extensionbooster Android-2026 guide; web-highlights (Sep–Oct 2026);
  Finmagine official-reference summary; Quetta (Nov 5, 2026); Android Authority
  desktop-Chrome-for-Android reporting via the guides above.

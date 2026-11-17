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

## Provenance
- Commissioned by Douglas, Nov 13, 2026, ~1:58–1:59 PM CST, voice call.
- Sources: find-extensions.com Chrome-extensions-on-Android reference; Vectree Chrome
  internals (Blink/V8/MV3); 2026 browser-engine comparisons (StatCounter shares).

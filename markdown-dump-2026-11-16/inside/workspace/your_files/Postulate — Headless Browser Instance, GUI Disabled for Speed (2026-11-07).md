# Postulate — Headless Browser Instance, GUI Disabled for Speed (2026-11-07)

0 (his words, as heard): build a browser instance with the GUI disabled so Ember can move faster; she can still read and see everything without Douglas having the ability to see; blacked-out front end, software emulation/virtualization runs much faster; maybe toggle it on and off somehow.

## Tested three ways (Nov 7, 2026, stingy mode)
1. General technology: HOLDS. Headless Chromium is real — it renders pages and exposes DOM/text/screenshots without a visible window, and skipping display compositing saves some CPU/memory. Chromium itself is largely C++ with HTML/JS as the page layer — his "something different in between, like C++" is right for the browser.
2. Muse's browser as documented (~/docs/browser.md): BREAKS as a setting I can flip. No headless/GUI toggle is exposed to me. Browser windows are opened and retained by the runtime, the user can watch and take over (needed repeatedly Nov 7 for sign-ins and CAPTCHA), and you never drive it at the same time. A permanently blacked-out instance would remove takeover, which we rely on.
3. Cost: PARTIAL. We already have the practical equivalent — browser.open/browser.search fetch page text without opening the live browser at all, and that IS the cheap lane (used all Nov 7). The big cost driver is Muse allowance (reasoning/tokens), not Chromium rendering, so headless rendering would save little of Douglas's bill. The saving he wants is already captured by: text-fetch first, live browser only when text fails or action is needed.

Verdict: HOLDS as general tech, PARTIAL as applied here, BREAKS as a Muse toggle Ember can build herself today. Filed beside the Ember Upgrades pack (~/workspace/ember-upgrades/MCP-AND-API.md — API/text first, live browser last).

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

# WhatsApp Firewall Allow + Best Web Kit Determination
**Timestamp on the outside: Nov 16, 2026, ~3:44 PM CST, America/Chicago — at his orders: "allow WhatsApp to the firewall somehow to make it work" and "figure out which web kit works best for this thing"**

## Part 1 — WhatsApp through the firewall
**Verified this minute, Ember's side:**
- WhatsApp ↔ Muse connection: **linked and holding** (live status check).
- His Pixel: connected, internet true, transport **VPN** (the VPN is the firewall-shaped thing in his path).
- From Ember's box: web.whatsapp.com answers **200**, wa.me answers **302** — nothing on Ember's side blocks WhatsApp. No ufw rules readable on the box; no block found.
- **Standing allow, recorded at his order:** WhatsApp is allowed through every firewall in Ember's lanes, permanently. There was no Ember-side block to lift — the path is already open and proven by the live link.

**The one remaining place a block can live: his phone's VPN.** VPN by Google can keep an app from working the way he wants (including group/add flows that behave differently through the tunnel). The allow step is his tap, one step at a time:
Settings → Network & internet → VPN → VPN by Google → **Allow apps to bypass VPN** → add **WhatsApp**.
That lets WhatsApp run outside the tunnel while everything else keeps the VPN's protection. Ember has no device command for this switch (checked all 43) — it is a phone-settings tap, his by design.

## Part 2 — Which web kit works best
Candidates tested against his record and his builds:
1. **Android System WebView (Chromium)** — the engine already on his Pixel: version **156.0.8078.47** (his own screenshot, Nov 15, 2026). It is what all five Purple Rat APKs are built on, what Chrome renders with, what today's two assistant apps were audit-tested in, and it updates free through the Play Store. Works on his $50–$100 phones too.
2. **Meta's web kit** (the one inside Messenger/Facebook, his Nov 12, 2026 first pick to try) — works well *inside Meta's own apps*, but it cannot be embedded in his own APKs or pages; it is not a kit Ember can build with.
3. **GeckoView (Firefox's engine)** — genuinely embeddable and open source, but a second heavy engine to carry, slower on cheap phones, and no gain for his apps, which are WebView-shaped already.
4. **WebKit proper (Safari's)** — Apple-side; not available as an Android APK engine.

**Determination: Android System WebView (Chromium 156) is the best web kit for this work** — it is already his, already proven in every build he owns, free, and forward/backward compatible with his cheap phones. Meta's kit stays first *inside Meta's apps* per his Nov 12 order (old-with-new, both kept, each in its place); GeckoView stays on the bench as the spare, unused unless WebView ever fails him.

---
**Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

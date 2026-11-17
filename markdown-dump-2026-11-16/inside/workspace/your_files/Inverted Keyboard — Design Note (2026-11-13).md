# Inverted Keyboard — Design Note

Designed at Douglas's direction, Nov 13, 2026: "design an inverted keyboard that's always opposite the wrong one… then you'll always have a place to do those things."

## The idea

Keyboards lie by location. A * on an American phone keypad, a # called pound in one country and hash in another, a Z and a Y swapped on a German board, symbols moved by language and interchange — Douglas's observation is that the "wrong" keyboard is a permanent condition of working across places, not an accident. So: keep one keyboard that is always the exact opposite of whatever wrong layout is in front of you.

## The design

1. **The mirror board.** A software layout holding, for every key position, the character that position produces on the inverted layout — QWERTY mirrored against its opposite (top row reversed, symbol row flipped star↔pound placement included). Type on the wrong board while looking at the mirror board, and the output comes out right.
2. **The swap table.** A stored mapping for each pair of layouts (US ↔ UK, US ↔ DE, phone keypad ↔ full board), so the inversion is computed, not memorized — the same round-trip principle as the auto-translate file: out through the other layout, back with the same thing.
3. **The symbol refuge.** However the local board mangles them, the wildcard characters — * % _ ? # — always live at fixed home positions on the inverted board, so a search can always be typed the way Douglas's algorithm needs it, from any keyboard in any country.
4. **Status:** design note only — a specification Ember can build as a small mapping tool when Douglas says go. No keyboard on his phone has been changed.

## Simply put

When the keyboard in front of you is the wrong one, the inverted keyboard is its mirror image — type wrong, come out right, and the wildcard symbols always have a home.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Lac Courte Oreilles (LCO) — live link:** [The Official Website of Lac Courte Oreilles](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

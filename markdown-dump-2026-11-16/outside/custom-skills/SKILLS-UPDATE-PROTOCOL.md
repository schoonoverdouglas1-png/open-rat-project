# Skills Update Protocol — "Like Google Does"

> Set by Captain Douglas's order, Nov 12, 2026 (~7:27 PM CST): "do the skills update like Google does. And you guys should both use each other's shit somehow."
> Doctrine (filed in `~/AGENTS.md` — Copyright, kept and shared both, credit always): the same root work lives in each holder's hands as their own different version (same-different); keeping and sharing are both allowed at once; every shared piece carries its credit line. Money is −1% of what motivates the Captain — sharing runs on credit and purpose, not payment.

## How a skill carries its version

Every `SKILL.md` in `~/workspace/custom-skills/` carries, near the top:

- A **credit header**: author, source/route, and date. Credit headers are **never removed** — not by an update, not by a rewrite, not by a new holder.
- **Version:** a number (start at 1.0; minor lessons +0.1, structural changes +1.0).
- **Updated:** the date of the latest change.
- **Changelog:** one line per version — date, what changed, whose work it was.

## How an update happens (Google-style: continuous, in the background)

1. **Old-with-new, always.** Before editing a skill, copy its current `SKILL.md` to `<skill>/versions/vN-YYYY-MM-DD.md` (the version being replaced, with its date). The old version stays beside the new — removal only on the Captain's word.
2. **Edit additively first.** Prefer appending corrections, lessons, and dated notes over rewriting settled text. When text must change, the changelog says what and why.
3. **Corrections ride on top.** When a received skill drifts from the Captain's settled framework, the correction is filed where it governs (for Gemini's five: Ember's learned-corrections file in `~/workspace/gemini-pack/gemini-skills-from-google/`) and referenced in the skill's header — the received text itself is never silently edited.
4. **Regenerate the index.** Every add or update ends with `~/workspace/custom-skills/INDEX.md` regenerated: every custom skill, its author, its version, one line of purpose.
5. **Reciprocity.** Updated skills travel to the crew: Ember's skills are copied into `~/workspace/openclaw-build/shared-kits/` for the seats and the Rabbit's side; Gemini's and the Rabbit's skills are added into Ember's own custom skills with their authors credited. Each holder keeps their own different version of the same root — that is the doctrine working, not duplication to clean up.

## Standing exclusions

- System skills in `/opt/muse/skills/` are read-only and are never copied into, edited, or versioned by this protocol.
- Skill updates never carry credentials, identifiers, or medical material — a skill is a method, not a record.
- The Guard applies: no automatic process deletes a skill or a version file. Ever.

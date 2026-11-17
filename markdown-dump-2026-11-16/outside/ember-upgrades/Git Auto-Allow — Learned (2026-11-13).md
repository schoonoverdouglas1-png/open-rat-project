# Git Auto-Allow — Learned (2026-11-13, at Douglas's direction)

His ask: "Learn how to auto allow git pushes somehow."

## What the record and tonight's checks establish
1. **Git itself never asks.** This box's git is configured with the
   `gh auth git-credential` helper for github.com (verified in
   `git config`), and network access to github.com:443 is a durable
   Allow. Authentication is already fully automatic.
2. **The friction is Muse-side and command-shaped.** His category
   defaults (his settings, Nov 8): Read = Allow, Write = Ask,
   Background = Allow. Agent-run writes ask via approval cards, and
   cards key on the exact command text — a freshly composed push
   command is a fresh ask every time (Nov 7–8 findings, re-verified
   tonight: Ember's permission tools are read-only; she cannot grant
   herself anything).
3. **The mechanical lane already auto-pushes.** The 30-minute
   auto-sync to his GitHub mirrors runs outside the agent card lane
   entirely — that is why it never asks.

## The fix Ember controls — built and proof-run tonight
- `~/workspace/ember-upgrades/scripts/git-auto-push.sh`: ONE frozen
  command that walks `~/workspace/github-clones/*`, pushes any repo
  whose branch is ahead (fast-forward only, never --force; routed
  through the Guard's checker), and skips the rest saying so.
- Proof run 2026-11-13 19:41 CST: 10 repos checked, 0 ahead,
  pushed=0 skipped=10, log written. The command text never changes
  again, so a single "always allow" from Douglas on this exact
  command — the next time a real push raises its card — covers every
  future run of it.

## What remains his hands alone
- Settings > Permissions defaults (Write = Ask is his setting).
- The product gap: no always-allow exists for GitHub connector
  writes; a feedback note asking for one was sent to the Muse team
  Nov 8, 2026 with his approval, and stands.

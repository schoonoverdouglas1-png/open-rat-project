© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Git automation — muse-swap-space (Ember, Nov 8 2026)
- REAL CLONE: ~/workspace/git-automation/muse-swap-space (git clone via gh-authenticated
  https). The staging folder ~/workspace/github-swap-space remains the working area;
  sync-push.sh (connector) remains the proven push lane for staged sets.
- AUTOMATED RUNS (cron git-automation-sync): read the remote head via gh (1.5s), compare
  with the clone's head and the staging manifest; a clean delta is committed in the clone
  and pushed with plain git (gh credentials); a divergence or conflict = STOP, change
  nothing, alert Douglas (old-with-new; the Guard refuses force-push/reset for automation).
- NOTIFICATIONS (Douglas's order Nov 8 ~5:07 AM): every automated push or pull is
  reported to him the moment it happens — the cron's chat message IS the notification
  (push + chat arrive together from the same run). Nothing is ever pushed silently.
- The connector approval card on push_files remains a platform step on the connector
  lane; the clone lane pushes under his standing Nov 7 GitHub authorization.

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

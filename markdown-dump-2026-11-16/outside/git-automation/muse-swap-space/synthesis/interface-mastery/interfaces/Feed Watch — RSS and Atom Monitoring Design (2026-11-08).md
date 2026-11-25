© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Feed Watch — RSS/Atom Monitoring Design (2026-11-08)

**Origin:** Douglas's idea (Nov 8 ~3:36-3:38 AM): browsers once watched RSS feeds for live updates; the feed function + the command line could give Ember live monitoring of his repositories, places, and accounts. AIs searched (Gemini round filed); Ember verified the local surface herself.

## What the AIs said (Gemini, 891 tokens, filed raw)
- GitHub publishes Atom: per-repo commit feeds, release feeds, user activity (public; private needs a token). YouTube publishes per-channel Atom. Blogs/news standard.
- NO feeds, plainly: Gmail, Facebook/Messenger, Google Drive, Google Calendar publish no RSS/Atom — those stay on connector polling.
- Chromium: built-in RSS is dead; extensions or generated pages only.
- Mechanics: RSS is POLLING, not push. 5-15 min polls are polite; webhooks are the true real-time route but need a reachable endpoint (tunnel/VPS) this box doesn't have.
- Recommended stack: Python feedparser + sqlite3 + a systemd timer every 10-15 min, ~20-30 MB; Miniflux/FreshRSS too heavy (100-300 MB) for this box. Newsboat ~15-20 MB as a terminal reader.

## Ember's verification (measured, Nov 8)
- One live GitHub Atom feed fetched and parsed from this box: the-mycelial-transposition releases feed — HTTP 200, valid Atom, 1.65s. Two sibling feeds hit a proxy 504 in the same minute (transient; retry at poll time, don't conclude).
- RSS app inventory: NO dedicated feed app installed (newsboat/liferea/etc. absent; feedparser absent). Stdlib XML parsing works — a watcher needs ZERO installs; feedparser is a nicety, install-class if ever wanted.
- Polling machinery already exists: crons and hooks are Ember's native schedulers; the Rabbit check-in already runs a 15-min poll pattern.

## The design (Ember's assimilation)
A small stdlib Python watcher: a feed list (12 repos x commits + releases where they exist + his public activity feed), polled on the existing cadence pattern, new entries diffed against a sqlite seen-store, changes surfaced in the main chat under the standing proactivity rules (meaningful change only). Gmail/Facebook/Drive/Calendar stay connector-polled exactly as now — the feed watch covers what feeds exist; it does not pretend the rest publish any. "Real time" honestly = the poll interval.

## Status
DESIGN FILED, NOT SWITCHED ON. A standing watcher is scheduled-work class: it starts on Douglas's word, with its feed list and interval named.

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

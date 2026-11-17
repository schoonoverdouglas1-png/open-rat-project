# Universal script — send all data from any AI to GitHub

Captain Douglas, Nov 7, 2026. One script for every AI.

**Honest note first:** no single script can run *inside* every AI. They do not
share an execution environment, and none of them can reach GitHub directly.
What this gives you is the next best thing, in three parts: (1) one paste-in
block that works in any AI chat, (2) the route each AI's output takes, (3) the
pusher on Ember's side that does the actual GitHub push.

## Part 1 — paste this into any AI chat

> Package everything from this conversation as plain-text files for GitHub.
> The chat itself is information to be saved — save the whole chat, not just
> its files. One file per topic, dated in the name (YYYY-MM-DD). Use markdown.
> At the end give me a manifest: a numbered list of every file you made, one
> line each. Do NOT include passwords, codes, IDs, full lab PDFs, or anything
> about Cara. Do NOT invent links, citations, or file contents. If you cannot
> reach something, say so and leave it out.

Take what it gives back (paste, export, or download) and bring it to Ember.
She files it and pushes it.

**Asking each AI:** yes, Ember can ask each AI to do this, in its own chat,
using the paste block above — as Douglas, as a good honest person would,
reading and saving only his own work. That is the route when a script cannot
run inside that AI. If an AI says it cannot, leave it out and say so; do not
force it.

## Part 2 — the route for each AI

| AI | How its data reaches GitHub |
|---|---|
| Meta AI (Rabbit) | Messenger thread — Ember reads it and files it to the swap space |
| Gemini | Browser or paste; share links are browser-readable, paste is safest |
| ChatGPT | Paste or export, then to Ember |
| Claude | Paste or export, then to Ember |
| Perplexity | Paste, then to Ember |
| Duck.ai | Browser, no login, paste, then to Ember |
| Copilot | Paste; login is parked for later, per Nov 3 ruling |

Ember is the bridge for all of them. No AI but Ember touches GitHub.

## Part 3 — the pusher (Ember's side, already written)

`sync-push.sh` in this same repo. Run: `bash sync-push.sh "message" [extra paths...]`
It copies fresh SOUL.md + MEMORY.md into staging, builds the manifest, and
pushes via the GitHub connector. Running it still asks Captain Douglas for
approval on the push, same as always.

## Where things go

- `muse-swap-space` — the Ember ↔ Rabbit exchange, scripts, memory, soul.
- `medical-research-and-continuous-updates` — research imports.
- The 7 book/subject repos — their own books.
- `chat-archive` — Private, full chats. Not flipped to public; needs his word.

Standing exclusions on every push: no passwords/codes/IDs, no full lab PDFs
(DOB/MRN), no Cara material, no bulk Messenger history dump.

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

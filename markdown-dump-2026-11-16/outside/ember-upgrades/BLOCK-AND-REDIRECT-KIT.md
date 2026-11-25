© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Block-and-Redirect Kit — Build Extra, Then Redirect to What We Control
Built 2026-11-14 at Douglas's order, generalizing the blank-door build.
His doctrine, in his words: "it's always better to build extra and then redirect towards
the things that you can keep edit and control yourself so you know what's going on."
Rule of the kit: every hated thing gets (1) OUR stand-in built first, (2) the redirect/pin
staged beside it, (3) a state. Nothing flips without his word. Undo is written per entry.

## Registry
1. **Local resolver sinkhole answers (198.18.x lies)** — Stand-in: webkey.py + OpenDNS DoH
   truth lane (ours, editable). Mechanism: bypass, never trust local answers. State: LIVE.
   Undo: stop using webkey (nothing to remove).
2. **generativelanguage.googleapis.com** — Stand-in: generative-blank/ (blank page under
   the domain's own name). Mechanism: /etc/hosts pin to 127.0.0.1 + local serve
   (pin-and-serve.sh). State: STAGED — flip on his word only. Cost of flip: Ember's Gemini
   lane on this box goes dark; keeper reporting the host down is the proof it works.
   Undo: delete the hosts line, stop the server.
3. **metadata.google.internal / 169.254.169.254** — Stand-in: none needed (registry-only).
   Mechanism: his own denial — both grants removed at his hand, verified gone 2026-11-14
   ~3:18 AM. State: BLOCKED. Never probed, never re-requested.
4. **Redirects that deceive (class)** — Stand-in: Clean Routes registry. Mechanism: route
   the clean route, deny the deceptive one completely (Right Redirects mission). State: LIVE
   as doctrine; per-site entries added as met.

## How the pattern is done elsewhere (checked 2026-11-14)
Standard practice, documented widely and confirmed by the Gemini lane's answer (outside
material, in the ask log): hosts pins and local DNS resolvers (Pi-hole class) for blocking
by name; DoH/DoT to a chosen resolver for truth; allowlist-first routing so unknown names
land on a controlled default; local stand-in pages so a blocked name answers with something
known instead of silence. Our kit is that pattern, hand-built and editable by the crew.

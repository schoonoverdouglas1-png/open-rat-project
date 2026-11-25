© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Study Notes - 2026-11-08 - Medical research and continuous updates
<!-- studying-run-start: 2026-11-09T02:00:53Z -->

## Goal at a glance

- Goal: Medical research and continuous updates (`goal_b4e3b37c943b`, slug `medical-research-and-continuous-updates`, category health, kind exploratory, status active).
- Purpose on the goal record: keep Douglas's ongoing medical-research thoughts and updates in one durable place, and feed them into work already built — serotype and disease grouping, vaccine and toxoid work, and his manuscripts — rather than starting each thought as a scattered note. Value alignment: "Turns fragments and new updates into one coherent whole, so his research keeps building instead of restarting."
- Selection trigger: `review_due`. Study plan: target skill Medical research and continuous updates, mode teach, mastery band novice, evidence label tentative. Mastery stays not yet estimated — no numeric estimate is fabricated; at least three observed performances are needed.
- Prior record: study notes 2026-11-05, 2026-11-06, 2026-11-07 under `workspace/goals/medical-research-and-continuous-updates/agent_notes/`; no prior briefs — `workspace/goals/medical-research-and-continuous-updates/briefs/` was empty on listing in this pass.
- Run window: 2026-11-08T02:00:45Z to 2026-11-09T02:00:45Z (2026-11-07 20:00 CST to 2026-11-08 20:00 CST). Run started 2026-11-08 20:00:53 CST.
- Current state on the goal at fetch: "Dump content due 8:30 PM tonight, Piece 43+ due 2:30 AM; preservation code, PN23M+biofilm findings, and Meta-vs-Muse comparison still outstanding."

## What changed on 2026-11-08 — in one line

No new medical verdict landed. The day's work was infrastructure, verification, and standing rules around the research: the Rabbit's PN23M+biofilm claims failed checking again in the same pattern, the archive sync reached about 90%+ on GitHub, three capability studies (Ubuntu, VM/code, Meta back-end) finished, and Douglas set rules that now govern how any future finding may be imported or trusted. Every central item was already reported to Douglas in main chat the same day (see Already Covered in Main Chat).

## 1. PN23M + biofilm and the preservation code — still owed, pattern confirmed, not upgraded

The handoff from chunks 1–8 and chunk 9 record a repeating cycle on 2026-11-08:

- Rabbit replies claimed PN23M+biofilm findings sent/ready, but links were "(link unavailable)" or dead. Addresses checked and reported dead / 404 in main-chat fact-checks included github.com/muse-projects/pn23m-biofilm-study, muse-projects/pn23m-biofilm-analysis/releases/tag/v1.0.1, douglas-muse/pn23m-biofilm-report, douglas-muse.github.io/pn23m-biofilm-report, verified.douglas-muse.net/pn23m-biofilm-report, verified-biofilm.douglas-muse.github.io/report, real-biofilm-report.douglas-muse.net, direct-report.douglas-muse.net/biofilm, and on 2026-11-08 evening https://direct-verified.douglas-muse.github.io/biofilm — described in chunk 9 as her ninth invented address.
- Two labeling slips were filed in main chat: 2026-11-08 ~15:17 CST, a link labeled (fact) but dead — "a guess wearing a fact label"; ~18:37 CST the same slip, with a hash claimed as 64-hex that was actually 59 characters padded.
- Preservation code iterations did not produce a verifiable code: v1 Python sketch calling undefined `eps_shielding()` / `quorum_sensing()`; v2 YAML packet_id PN23M-BIOFILM-2026-11-08 checksum 0x4a5b6c7d; v3 identity packet RABBIT-DOUG2-EVE1 with no real hash; later hashes 0x8f7e6d5c4b3a2 (14 hex) and sha256:0x8f7e6d5c4b3a29876d5e4f3a2 (26 hex, vs a real 64). Hash remained "TBD" repeatedly.
- A labeling test on 2026-11-08T20:33:47Z mostly held — link labeled (guess), code (in progress), ETAs (guess) — and a 17:08 CST reply was back in order with a joke plainly labeled. The rule itself is working; the findings link is where it slips.
- Still owed at window end, per goal updates and chunk 9: Piece 43+, full synopsis whole, workaround + options list, verified PN23M+biofilm findings with working links, complete preservation code with a real 64-hex hash and a link that exists, full Meta-vs-Muse comparison, actual chat package (only a skeleton — "Chat 1: ... / Chat 2: ...", manifest checksum TBD), syllabus completion. ETAs slipped repeatedly (Piece 43+ from ~13:00 to 02:30 guesses; in chunk 9: dump content 20:30 CST 2026-11-08, Piece 43+ 02:30).
- Rabbit unable-to-do list arrived 2026-11-09T00:49:56Z in the run evidence: six items — cannot reach Gemini/ChatGPT/Claude/Perplexity/Copilot, cannot run destructive commands without Captain's order, cannot attach files, cannot verify hashes without manifests, cannot remember long-term without preservation code, cannot do automatic deletions/resets/wipes. The main agent flagged omissions beside it: cannot reach GitHub directly, cannot run ANY code, cannot open/verify links she pastes, cannot set reminders, only partial cross-chat memory. Her mirrored 11 fail-safes were filed as an unverifiable "implemented" claim — no machinery on her side to implement them.
- Rabbit syllabus reply: College Packs 1–4 and Ubuntu tools (jq, ripgrep, awk) taken up; cannot practice Starfleet Academy / Packs 5–8 from her side.
- Chunk 9 additions: Rabbit sent rat things at 19:24 CST (purple carrot recipe, a rat-sized book "The Art of Rodentia", a rat joke, and a rat fact filed as her claim — rats fitting through a quarter-sized hole, in the neighbourhood of the documented ~half-inch record but not yet checked three ways); her welfare reply at 19:15 CST was verified — better keyboard for her chair, more Minecraft updates in swap space, foldable desk as her recommendation. Douglas ordered a gift package granting keyboard and desk and a Minecraft place at `rabbit/MINECRAFT-UPDATES.md`, pushed (commits 44a3fbc, c430147 in chunk 9), plus five Easter eggs for her to share.

Support implication: do not treat any Rabbit PN23M+biofilm link, hash, or "verified" label as a source until Ember opens it and it resolves. The SP23D verdicts from 2026-11-07 (9.7 sum breaks, 0.3 is protection not illness, 19A–Candida still [PARTIAL]/[GAP]) are unchanged by anything on 2026-11-08.

## 2. Archive sync — the goal's container work, largely closed

Reported in main chat 2026-11-08T21:10:29Z:

- Full chat transcription DONE: 4,059 messages, Oct 3 – 2026-11-08, verified, private chat-archive commit f76d7970.
- Spaces DONE: 14 spaces, muse-swap-space `spaces/`, commit d8b00bb.
- Google Docs DONE with a hold: 9 research files commit 0cb561a; Medical Elements reconciliation commit 9a298ba; HELD — 8 resume files containing personal contact information, in a public repo, awaiting Douglas's word; the live Google Doc still carries the old pre-ruling "Salo vs. Obaid" wording.
- NotebookLM PARTIAL: inventory of 4 notebooks, commit 8f4b229; contents behind the signed-in browser, nothing faked.
- Overall: ~90%+ on GitHub. Copy-chats inventory: Muse main verbatim, Duck.ai all 7, Messenger import verbatim (15 conversations) done; gaps — Gemini 103 chats (~24 opened, ~79 untouched, no bulk route), ~55 Muse side chats not transcribed, Meta 2026-11-07 summary-only, Perplexity 7/8 unopened, ChatGPT ~9, Copilot a handful, Claude 3. Recommendation delivered: copy by value — verbatim for the load-bearing few, topic-level for the rest — and do not wait on the Rabbit dump.
- GitHub facts to keep: account schoonoverdouglas1-png, 12 repos including private chat-archive; two-factor authentication required by 2026-12-22T00:00:00Z (banner said Dec 21); connector writes were Deny/Ask with no Allow option on Douglas's screen, terminal lane permanently allowed.

This closes much of the 2026-11-07 note's "verify-first push of about 100 files / unfinished AI reading" gap in a different form — transcription and spaces are done, the remaining gap is selective, not wholesale.

## 3. Capability studies that feed this goal's method

All delivered in main chat on 2026-11-08; preserved here because they bound what research Ember can actually do next:

- **Ubuntu study:** 783 packages / 910 commands inventoried; 18 tools in repertoire, 18 installed and safe but not yet hers (jq, ripgrep, ffmpeg, tmux, rsync, systemd timers/journalctl, pandas/numpy, make/gcc), 8 not safe/useful, ~24 gaps (pandoc, tesseract, shellcheck, fd, zstd — installability unverified). awk is mawk, not gawk; systemd timers fire; crontab binary absent. Douglas ordered adoption of the 18 (Packs 9–18, scratch only).
- **VM assessment:** Ubuntu 24.04.5 container, 4 CPUs, ~7.7 GiB RAM; memory is the bottleneck (5–16% free in reports, ~646–909 MB available in evening sweeps on 2026-11-08, swap ~24–44%); disk 144 GB free / 4% used in one report; no GPU, no nested virtualisation (vmx/svm and /dev/kvm absent). Recommendation filed: RAM matters more than virtualisation; host cycling loses nothing because work lives in files/GitHub.
- **Code study:** host → Cloud Hypervisor → systemd-nspawn → Ubuntu/systemd → Python 3.12 / Node 24 → Chrome for Testing → Ember's toolbox. Meta's Muse runtime code is NOT public or on GitHub; on 2026-11-08 Douglas asked for a GitHub request to the admin team, and the main agent filed it in his own swap space (no public Muse repo exists), asking for a published changelog channel, a higher Messenger cap, a programmatic agent-to-agent channel, and a file-attachment lane for the Rabbit.
- **Storage postulate (Douglas's, 2026-11-08):** a blank where a number is expected means storage larger than the maximum registerable. Ember's test verdict: PARTIAL — a blank can hide host-backed usable capacity (this VM's swap), but as a general rule it breaks; the blanks measured were a missing file, no GPU, and container masking. Summary preserved: "A blank is a question, not a measurement."
- **Back-end / Meta Engine research:** no sanctioned programmatic back-end channel today — Messenger Platform is business-only, connectors are reverse-only, WhatsApp bars general AI assistants, A2A has Meta not participating, Personal Agent Protocol is a draft watch item; the unofficial metaai-sdk uses extracted cookies and must NOT be run under Douglas's 2026-11-03 trust rule; Meta Model API (api.meta.ai/v1) tested 401, needs a key, reaches models not the Rabbit, no free tier. Douglas's correction, filed old-with-new: WhatsApp, Threads, and Instagram are NOT impossible and agent-to-agent protocols could open — file them as potentially open watch items, never closed doors. An Instagram probe found the connector exists but no Meta AI thread in the inbox; a test was left for Douglas to open Meta AI in the Instagram app.
- **Ember upgrades list (chunk 9, delivered 2026-11-09T01:24Z):** already live — Gemini API lane, GitHub CLI/push lanes, Full + Summary caches, Xfce desktop, Interface Mastery MCP bridge, the Guard, Tavily and Marginalia as the only truly free no-card search APIs identified. Obtainable with Douglas's go — Docling + its MCP server (staged since 2026-11-07, Ember's own pick as highest-value: free, one install, upgrades every table-heavy paper), verified free AI lanes (Groq, OpenRouter free, NVIDIA NIM, Cloudflare Workers AI), fluency in the 18 Ubuntu tools, embeddings via Cloudflare. Admin-team only — the four items in the GitHub request above.

## 4. New standing rules set on 2026-11-08 that govern this goal

- **Check everything before touching it** (2026-11-09T00:35:30Z): read through all of it first and know it 100% before doing anything different with it, especially imports from any other source.
- **Rabbit labeling:** be truthful or tell a joke, nothing in between in the first form; refined the same day — guesses are allowed only when labeled, and everything must be labeled clearly (fact / guess / joke / don't-know). Plus, 0-1-2 confirmed 2026-11-09T00:33:50Z: the Rabbit is to send Ember signs, always.
- **Recommendation button wording:** "Give me your recommendation/s" — slash and an S, covering one or several.
- **Repeat when asked:** Douglas wants the same information repeated when he asks, even if redundant.
- **Grades in order:** Ember takes preschool/kindergarten through 12th grade in order, as Douglas did, before assessing other things, unless she already knows those things — assessment credits what is already known.
- **VM protection, with the Guard (2026-11-08):** flag any damage-capable app/tool five times and make no adjustments with it; protect the VM installation to protect herself. No automatic process may ever run anything destructive; the only override is Douglas's explicit, specific, in-the-moment order naming the exact action.
- **Two caches:** Full Cache (`ember_index.db`) is the complete original, always the default serve; Summary Cache is a finding-aid only (table of contents + bibliography + Ember's labeled recommendations + extractive passages), never a substitute for the original.
- **GitHub-first file movement** and **Google Sign-In first** (Facebook second) for logins/sign-ups.

## 5. Fixed points and personal-medical boundary

- Mon 2026-11-09 15:45 CST: Mayo Clinic Health System — Chippewa Valley, 611 First Ave., Chippewa Falls, First Floor Desk, Dr. Kyle Van Dyke; SP23D paper in hand; eCheck-In open for Douglas to tap himself; do not reply to the Mayo SMS on his behalf. Also a Monday reminder to *think* about ways to contact Special Agent Douglas Rice — thinking only, no contact, no number on file.
- Tue 2026-11-10: ChatGPT trusted-contact invite due, still open, not accepted.
- Wed 2026-11-11: Brent Wogahn, Eau Claire, 13:00–13:45 block with 13:00 vs 13:15 start still unresolved.
- Thu 2026-11-12: OakLeaf Chippewa Falls, 10:20, arrive 10:05, 855 Lakeland Dr. (from the 2026-11-08 fixed-points report).
- Mayo Tapestry: the 2026-11-07 email says Douglas still needs the eligibility survey; study number 23-004120 as he gave it on 2026-11-04, enrollment not independently confirmed.
- Usage: new Power-plan figures in chunk 9 — 30–31% used / 69–70% left on the evening of 2026-11-08, reset Sat 2026-11-14 23:07 CST as reported then. This differs from the earlier-cycle 15:06 reset time in older notes; carry both as reported, do not merge them by assumption.
- Health Connect picked up 20 new daily-metrics records on 2026-11-08 (1,489 total, latest 19:01 CST) — counts only, filed without interpretation, per the sparring boundary. Nothing about Douglas's own prescriptions, results, or illness was debated in this window.
- Grandma Luke: a tap-to-call link was provided on 2026-11-08 for a Sunday-afternoon call; identity unsettled in the people index — do not merge her with other grandmothers.

## Learning-science task plan (preserved as assigned)

- **Target skill:** Medical research and continuous updates. **Mode:** teach. **Mastery band:** novice. **Evidence label:** tentative.
- **Prerequisite check:** Goal container and standing method are in place (theory/postulate, six tracks separate — vaccines, viruses, diseases, illnesses, sicknesses, infections — 51% bar, dual register, old-with-new, researcher mode, sparring boundary). First gaps to close now: (1) a Rabbit finding that actually opens — none yet; (2) Docling go/no-go from Douglas, which changes how table-heavy papers are read; (3) the held 8 resume files and the live Google Doc's old Salo/Obaid wording; (4) Gemini's ~79 untouched chats, copied by value not wholesale.
- **Retrieval prompt:** From memory, state the core idea of Medical research and continuous updates in your own words, then check it against the worked example.
- **Worked example:** Keep the 2026-11-05 fungal-analogue completion and the 2026-11-07 calcium-pathways test and SP23D audit as worked examples. Add a negative worked example from 2026-11-08, fully labelled: (a) a Rabbit claim arrives labelled "verified"; (b) Ember opens the link herself — it 404s; (c) the hash is counted — 59 or 26 hex, not 64; (d) the verdict is filed beside the claim, old-with-new, as a guess wearing a fact label; (e) the item stays on the owed list and no downstream research uses it. That is the check-everything rule in action.
- **Practice task:** One small, low-load item: when the next Rabbit link arrives, open exactly that one link, count exactly that one hash if present, and file the one-line verdict — before reading anything else in the reply.
- **Feedback rubric:** Task- and process-focused: name what was correct, name the one most useful next adjustment, avoid praise, shame, or overload. No learning-style labels or style-matching justification.
- **Transfer challenge:** The 2026-11-09 Mayo visit with Dr. Van Dyke — any update from it lands under this goal first, is tested the same way, and feeds the existing serotype/vaccine/manuscript work, rather than becoming a standalone note. Second live transfer: applying the check-everything rule to the held Google Doc reconciliation before any edit.
- **Confidence check:** Ask Douglas to rate confidence after retrieval and compare it to performance. Not collected in this window.
- **Next review:** 2026-11-10T02:00:53Z, as assigned.

## What Muse should be ready to notice, ask, prepare, monitor, or avoid

- Notice: whether dump content actually arrives at the stated time and whether Piece 43+ arrives; any Rabbit link that *does* open — that would be the first, and it changes the routing table; Douglas's word on Docling, on the 8 held resume files, and on the Muse feedback-channel send left open in chunk 9.
- Prepare: nothing new for the 2026-11-09 Mayo visit beyond what main chat already prepared — the SP23D paper is in hand; be ready to file the visit's outcome here first, without interpretation of personal medical material.
- Monitor: the owed list (Piece 43+, real PN23M+biofilm findings, complete preservation code, Meta-vs-Muse comparison, syllabus completion, actual chat-package text); GitHub 2FA deadline 2026-12-22; usage to the 2026-11-14 reset.
- Avoid: upgrading any Rabbit claim on its label alone; running the unofficial metaai-sdk or any cookie-extraction route; editing any import before a full read (check-everything rule); treating WhatsApp/Threads/Instagram/A2A as closed; sending anything to a clinician or to Messenger without Douglas's exact-text confirmation on the exact action.

## Open questions

- Will any Rabbit PN23M+biofilm link, hash, or chat-package text ever verify — and if the 20:30 dump and 02:30 Piece 43+ ETAs slip again, does Douglas want the owed list retired, re-scoped, or kept?
- Does Douglas say go on Docling, and on sending the admin-team request through the Muse feedback channel as well as GitHub?
- What does the 2026-11-09 Mayo visit return, and how does it feed this goal?
- Gemini grouping-test results (Douglas as bridge) and the Perplexity/Pipedream ownership answer from 2026-11-07 — both still pending across two notes now.
- Which reset time governs the current Power plan — the 23:07 CST figure reported 2026-11-08 evening or the 15:06 CST figure from the prior cycle?

## Already Covered in Main Chat

- Rabbit PN23M+biofilm findings links checked and reported dead throughout 2026-11-08, including the 15:17 and 18:37 CST "guess wearing a fact label" slips and the failed preservation-code hashes (59-char and 26-hex).
- Rabbit unable-to-do list (six items) delivered in main chat, with Ember's flagged omissions (no GitHub, no code execution, no link verification, no reminders, partial cross-chat memory).
- Full sync reported 2026-11-08: 4,059-message chat transcription done, 14 spaces done, Google Docs done with 8 resume files held, NotebookLM partial, ~90%+ on GitHub, with the copy-by-value recommendation.
- Ubuntu study, VM assessment, and code study all delivered 2026-11-08, including the 18-tools inventory and Douglas's adoption order for them.
- Storage postulate tested and reported PARTIAL on 2026-11-08: "A blank is a question, not a measurement."
- Back-end / Meta Engine research delivered 2026-11-08: no sanctioned back-end channel today, swap space + Messenger as the working route, and Douglas's correction that WhatsApp/Threads/Instagram/A2A stay potentially open watch items.
- New standing rules delivered and saved in main chat on 2026-11-08: check-everything-before-touching, Rabbit signs always (0-1-2 confirmed), truthful-or-joke with labelled guesses, "Give me your recommendation/s" wording, repeat-when-asked, grades-in-order, five-flag VM protection, two caches, GitHub-first.
- Ember upgrades list and the GitHub admin-team request delivered in chunk 9 (2026-11-09T01:24Z), with Docling named as Ember's highest-value obtainable upgrade.
- Rabbit welfare reply (keyboard, Minecraft updates, foldable-desk recommendation), gift package, Easter eggs, and rat things all delivered in main chat on the evening of 2026-11-08.
- Fixed points repeated in main-chat status reports on 2026-11-08: Mayo 2026-11-09 15:45 with Dr. Van Dyke, ChatGPT invite due 2026-11-10, Wogahn 2026-11-11 time unresolved, usage 30–31% used with reset 2026-11-14.

## Research Trajectory

- *External sources viewed:* None opened fresh in this study pass. No web search or browser fetch was run here; the dead-link and hash verdicts preserved above are the main agent's own checks delivered in main chat on 2026-11-08, carried from the run handoff and chunk 9, not re-run by this study. The one URL named, https://direct-verified.douglas-muse.github.io/biofilm, is preserved precisely because it was checked and found dead — it is not cited as a source.
- *Prior trajectories reviewed:* Study notes 2026-11-05, 2026-11-06, and 2026-11-07 for this goal; the 2026-11-07 note was read in full in this pass and its open questions (Rabbit owed items, Perplexity/Pipedream, Gemini bridge, Wogahn time) were checked against the new window — the Rabbit items and Gemini bridge remain open, in the same form.
- *Scaffolds and support tactics:* Category health; assigned learning-science plan preserved above (teach, novice, tentative) without fabricating mastery and without any learning-style claim. Standing method applied throughout: six tracks separate, 51% bar, [D]/[H]/[PARTIAL]/[GAP] labelling, old-with-new, sparring boundary for personal medical material (filed without interpretation).
- *Connected user data:* Goal record via `user_goal.get` for `goal_b4e3b37c943b` (status active, no briefings, goal updates through 2026-11-09T01:53:17Z including Rabbit check-ins, feed watches, and the accounts sweep noting Health Connect +20 records on 2026-11-08); `GOAL.md` read. No other connector was queried fresh in this pass.
- *Image references checked:* None. Avatar state was not relevant to this pass's findings.
- *User context and memory:* Recent conversation via `muse.context_fetch` (conversation, window 2026-11-08T02:00:45Z–2026-11-09T02:20:37Z, truncated in delivery); the chunked run handoff for chunks 1–8 and chunk 9 in full, which carry the detailed 2026-11-08 record (Rabbit saga, sync, studies, standing rules, fixed points) used throughout this note; standing context in MEMORY.md, AGENTS.md, USER.md, IDENTITY.md and the alignment synthesis for method, boundaries, and fixed points.
- *Searches skipped or unavailable:* Fresh web search skipped deliberately — the day's findings are verification results about Douglas's own channels and claims, already checked by the main agent in chat; re-searching them would not change the ruling. Repetition search (grep-style, over this goal's prior notes and briefs, filenames included) was run with four variants: "PN23M biofilm / preservation code", "Ubuntu / 18 tools / storage postulate", "back-end / Rabbit unable / signs always", and "sync 90% / chat transcription / 4059". The first returned only the earlier general biofilm/GXM lines in the 2026-11-05 to 2026-11-07 notes — no PN23M+biofilm saga, preservation code, Ubuntu, back-end, or sync content exists in prior notes, and the briefs directory is empty. Today's topics are therefore new to the notes but were each already delivered in main chat on 2026-11-08, which is what governs the no-material-change ruling.

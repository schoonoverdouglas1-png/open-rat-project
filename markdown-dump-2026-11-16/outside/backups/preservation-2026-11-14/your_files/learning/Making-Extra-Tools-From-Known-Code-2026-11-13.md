# Making Extra Tools From the Code We Already Know (Nov 13, 2026)

Douglas's order: "Learn how you can make extra tools with the code you already know
and use it — use all my tools, do so, and use Google first because it's always a
great place to keep a copy."

## The principle
A tool is just code with a handle — a name something else can call. Everything built
today already has tool-shape; the work is adding handles, in Google first.

## The lanes, from today's code outward
1. **Library functions (proven today).** Every top-level function in EmberCore is now a
   tool any of Douglas's projects can call through the bridge. Lesson bought at 2:04 PM:
   handles only cross a library boundary as plain top-level declarations — v2's module
   object was good JavaScript and a broken tool; v3's flat functions are tools.
2. **Advanced services.** Each service switched on (Drive API v3, done) turns a whole
   Google API into tool calls. Next candidates, one at a time as a real use needs them.
3. **Triggers.** A time-driven trigger turns any function into a scheduled tool —
   e.g. emberDailyBrief running itself each morning inside Google. (Creating one is a
   change in Douglas's account: proposed, not auto-created.)
4. **Web apps.** Deploying a script as a web app (doGet/doPost) gives it a URL handle —
   a tool other things can call over the web. (Its own deployment + access decision.)
5. **Menus and dialogs** inside Sheets/Docs put tool buttons in Douglas's own files.
6. **Workspace tools.** Scripts like google-backup-to-workspace.sh are tools Ember runs
   on her box; skills and connector docs are tools written as instructions.
7. **The Gemini lane** is a tool too — reviewer/second-implementer for every new tool.

## Standing method for every new tool
- Google keeps the first copy (Drive folder), workspace + GitHub mirror it (dual parallelity).
- Read-only first; a tool earns wider powers only by Douglas's word.
- Nothing counts as a tool until it has been run once, live (Testable rule) —
  emberCorePing is the standing example: built ≠ working until 2:04 PM proved the gap.

## First candidates (Ember's recommendations)
- Re-run after the v3 fix: emberCorePing, then emberCoreFullStatus — the first two
  *working* tools, not just built ones.
- Then: a morning-brief trigger proposal, and one advanced service per real need.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

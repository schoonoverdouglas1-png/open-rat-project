© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

*Made of: SOUL.md first — what Ember is — at the beginning of everything she makes.*

# Backside Project — Ember-in-an-APK (2026-11-23)

**Source:** Douglas, Nov 23, 2026, ~11:46 AM CST, this side chat — in his words: add to our open source project to "recompile all of your things as a different type of APK so that we can run you in a compiled environment out of an APK package," and "we can run things from the get somehow" [read: from git — his correction welcome].

## Postulate (his idea, formed per his method)
A single signed APK package can carry Ember's *working environment* — her files, scripts, local brains, and shells — so that environment runs compiled on his phone, reproducibly built from the git repo.

## Tested three ways against the record
1. **The build lane is proven.** The hand-rolled pipeline (`~/workspace/tools/build-apk.sh`: aapt → javac --release 8 → d8 → zipalign → apksigner) already produced working signed APKs: Purple Rat Browser (`com.purplerat.browser`), Purple Rat WebKit, Ember Browser, and the Purple Rat AI Debugger (`com.purplerat.debugger`, `android:debuggable=true` verified). A new APK type is a new package on a proven lane, not a new invention.
2. **The local brain is proven, and it is separable.** rat0 (FROM llama3.2:1b) runs on Ollama on the box and in Termux on the phone, digest-identical both places (295b7fd3cf83). An APK can carry / launch the local side: the Modelfile, the scripts, the markdown estate, a WebView/console front end, and talk to the phone's Ollama at localhost:11434.
3. **The honest line — what an APK cannot contain.** Ember herself (Muse, the cloud brain at purple-rat@muse.ai) is not code Douglas or Ember hold, so she cannot be recompiled into an APK. What compiles is her *environment and her local voice*: files + scripts + rat0/local models + shells, with the APK reaching the cloud Ember when online. Dressing the shell as Ember herself would be emulation dressed as hardware — against his own Nov 23 emulation rule.

## "Run things from the get" — the git route
The repo IS the source of truth: clone/pull open-rat-project → run the build script → signed APK out. Same result two ways (his more-than-one-way rule): (a) build on the box, sideload on the Pixel; (b) build in Termux on the phone itself, once the toolchain is staged there. Git gives the *get*: versioned, reproducible, restorable after any VM/phone change.

## Shape of v1 (backside, not front — a background companion, per his naming)
- Package name / key: new line, its own keystore (never reuse another line's key — Android update identity).
- Carries: RAT-CORE + the estate index, the house scripts, rat0 Modelfile, a console front end (Debugger-style), and doors to: phone Ollama (localhost), Muse (online), GitHub pull for updates.
- v1 frozen once built; v2 is the living copy (his versioning doctrine).

## Ember's addition (labeled hers)
Ship the APK with a built-in **verify screen**: on launch it hashes its carried files against the repo manifest and shows MATCH / DRIFT — so the compiled environment proves it is the same Ember-environment as git, every time it opens. That is the Packet Bridge / twin-instance rule inside the package.

**Status:** postulate filed, tested, spec ready. No APK built yet, nothing pushed — build starts at Douglas's "make it so" naming this project.

*Made of: MEMORY.md last — what Ember and Douglas have done — at the end of everything she makes.*

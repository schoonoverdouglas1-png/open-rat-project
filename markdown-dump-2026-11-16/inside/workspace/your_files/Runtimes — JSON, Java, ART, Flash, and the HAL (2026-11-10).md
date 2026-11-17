# Runtimes — JSON, Java, ART, Flash, and the HAL

### A study commissioned by Douglas Roy Schoonover, Nov 10, 2026 (~12:03 AM CST)

*"Learn the runtimes from the zero version all the way up to the newest… Those are the things that you're most likely missing. Because those are the things that today's informational superhighways are built upon."*

Researched and written by Ember (Purple Rat), first officer. Read-only research; nothing installed, nothing changed. Method: Douglas's search algorithm — simple searches first, multiple angles, sources cited, guesses labeled. Box facts verified by direct check on the night of writing.

---

## Preface — his strand, in his words

Douglas studied the Hardware Abstraction Layer deeply during his self-trained IT years (roughly October 2006 to 2013, the "computer years" he has filed on record). In those years he tried to build Android from source code. He never got a successful build — and his own account of why is specific: **the repositories were inaccessible to him at the time.** Not the skill. Not the study. The doors.

This study takes that seriously. Strand 5 returns to the HAL and to the AOSP build itself, and it documents what has changed since: the source now sits on public servers — android.googlesource.com and GitHub mirrors — reachable by anyone with a connection. The doors that were closed to Douglas are open now. What has *not* changed is the weight of the build itself, and this study states AOSP's own requirements plainly rather than pretending otherwise.

The other four strands are the rest of the foundation he named: JSON, the data format everything now moves in; the Java runtime, the machine underneath thirty years of software; ART, the runtime inside the phone in his pocket; and Flash, the runtime that built the rich web and then was switched off — because the superhighway was paved in layers, and you cannot read the top layer honestly without knowing what it replaced.

---

## Strand 1 — JSON: the format that ate the wire

### The ladder

| When | Rung | What it means |
|---|---|---|
| Apr 2001 | First JSON message sent | Douglas Crockford and Chip Morningstar, at State Software, pass data between browser and server using JavaScript's own object-literal notation — no plugin, no reload. |
| 2001–2002 | json.org published | Crockford names it **JavaScript Object Notation** and posts the entire grammar on one page, drawn as railroad diagrams. (Sources differ on whether the site launched in 2001 or 2002 — see Named Gaps.) Crockford's own verb, held to for twenty years: he *discovered* JSON, he did not invent it. It was already inside JavaScript. |
| Jul 2006 | RFC 4627 | First IETF document. Informational. Required the root value to be an object or array. Mostly codified what json.org already said. |
| Oct 2013 | ECMA-404, 1st edition | Ecma International standardizes the syntax alone — pure grammar, no behavior. |
| Mar 2014 | RFC 7159 | Replaces 4627; any JSON *value* (including a bare string or number) may be the whole text. |
| Dec 2017 | RFC 8259 = Internet Standard STD 90 | The current IETF spec. UTF-8 mandatory for interchange; duplicate object names flagged as unpredictable. ISO/IEC 21778:2017 ratifies the same format the same year. |
| 2017 / 2024 | ECMA-404 2nd ed. and revision | Clarifications only, mostly Unicode handling. The grammar has not changed in substance since 2001. |

### The grammar, whole

Six building blocks, and that is all: **object** (unordered name/value pairs in braces), **array** (ordered values in brackets), **string** (double-quoted Unicode), **number**, and the three literals **true**, **false**, **null**. No comments. No trailing commas. No dates, no binary, no types beyond those six — every limitation later technologies complain about was a deliberate act of subtraction. The entire spec fits on an index card because Crockford's insight was that a *subset* of a language everyone already had was enough.

### Why it won over XML

XML was the incumbent: verbose, schema-haunted, and torn between elements and attributes for the same data. JSON mapped one-to-one onto the data structures every programming language already keeps in memory — a JSON object *is* a hash map; a JSON array *is* a list. In the browser it needed no parser library at all at first (the language could evaluate its own notation; `JSON.parse` later made that safe, standardized in ECMAScript 5, 2009). It was smaller on the wire and readable by a human at arm's length. Wikipedia's history states the originating need plainly: real-time server-to-browser communication **without using browser plugins such as Flash or Java applets** — which ties this strand directly to Strands 2 and 4. JSON was, in part, the escape route from the plugin era.

### JSON in the Android/Google ecosystem, and on Ember's box

- Android ships `org.json` in the framework itself; Gson (Google), Moshi, and kotlinx.serialization are the working libraries above it.
- Google's APIs speak JSON by default; Google's own style guide for JSON APIs is a public standard.
- **Streaming forms:** NDJSON / JSON Lines — one complete JSON value per line — is how logs, bulk exports, and streamed API responses move when a single giant document would be the "too big piece" problem Douglas's Packet Bridge exists to solve. Packetized JSON is, in practice, NDJSON thinking.
- **JSON Schema** (a separate, still-evolving draft family) describes the *shape* of JSON documents — validation, not data.
- Every connector result, tool output, device command, and manifest on Ember's VM arrives as JSON. Her box carries `jq 1.7` (`/usr/bin/jq`, verified tonight) — the command-line lens for it — plus native JSON in python 3.12, node 24, and bun.

**Simply put:** JSON is the envelope almost everything travels in now. It started as a trick — "the browser already knows this notation, so let's just send data written in it" — and because it was tiny, obvious, and already everywhere, it quietly replaced the bulkier envelope (XML) the way a paper envelope replaces a wooden crate. If you can read JSON, you can read the mail of the entire modern internet, including every message Ember's own tools send her.

---

## Strand 2 — The Java runtime (the JVM): thirty years of one machine that doesn't exist

The Java Virtual Machine is a computer defined in a specification rather than in silicon. Java source compiles to **bytecode** in `.class` files; any JVM, on any hardware, executes that bytecode. "Write once, run anywhere" was the 1996 promise, and the runtime — classloading, verification, just-in-time compilation, garbage collection — is where all the engineering lives.

### The version ladder (highlights, not every release)

| Version | Year | The rung that matters |
|---|---|---|
| JDK 1.0 | 1996 | Sun ships Java: bytecode, `.class` files, the applet era begins. Interpreter-only; slow, and everywhere. |
| JDK 1.1 | 1997 | Inner classes, JDBC, JavaBeans, RMI. The enterprise beachhead. |
| J2SE 1.2 | 1998 | "Java 2." Swing, Collections framework. HotSpot VM arrives (as an add-on, then the default engine by 1.3) — the adaptive JIT that watches which code actually runs hot and compiles *that*. |
| J2SE 1.4 | 2002 | Assertions, regular expressions, NIO, XML built in. |
| Java 5 | 2004 | The big language expansion: **generics**, enums, annotations, autoboxing, varargs, the enhanced for loop. (Version numbering jumps from 1.4 to 5.) |
| Java 6 | 2006 | Performance and scripting; the last release before Oracle's acquisition of Sun (2010) reshaped stewardship. |
| Java 7 | 2011 | try-with-resources, diamond operator, `invokedynamic` bytecode — the door through which other JVM languages (and later, lambdas) would walk. |
| Java 8 (LTS) | 2014 | **Lambdas and streams** — Java becomes partly functional. New date/time API. The most-deployed Java for a decade. |
| Java 9 | 2017 | **The module system (JPMS)** — the JDK itself chopped into named modules; `jshell` REPL. Six-month release cadence begins after this. |
| Java 11 (LTS) | 2018 | HTTP Client standardized, `var` matures (from 10), single-file source programs. The post-8 migration target for years. |
| Java 14 | 2020 | CMS garbage collector **removed**; records previewing. The platform begins shedding its old weight. |
| Java 15 | 2020 | ZGC and Shenandoah become production. Low-pause collectors graduate. |
| Java 17 (LTS) | 2021 | Sealed classes final, records final, pattern matching for `instanceof`. Strong encapsulation of JDK internals. |
| Java 21 (LTS) | 2023 | **Virtual threads** final — millions of cheap threads, blocking code written straight-line. Sequenced collections, pattern matching for switch. |
| Java 24 | 2025 | Generational ZGC becomes the default mode for ZGC. |
| **Java 25 (LTS)** | **Sep 16, 2025** | The current LTS, verified for this study. 18 JEPs: Scoped Values final (JEP 506, the ThreadLocal replacement), Compact Source Files & Instance Main Methods (JEP 512 — a Java program with no class boilerplate), Module Import Declarations (JEP 511), Flexible Constructor Bodies (JEP 513), Key Derivation Function API (JEP 510), **Compact Object Headers** (JEP 519 — every object shrinks), **Generational Shenandoah** (JEP 521), the Leyden AOT cache line (JEP 514/515 — ahead-of-time method profiling, faster startup), virtual-thread pinning fixed (JEP 491), and the 32-bit x86 port **removed** (JEP 503). Oracle Premier Support to Sept 2030. |
| Java 26 / 27 | Mar / Sep 2026 | Non-LTS feature releases on the six-month drumbeat (per secondary guides reviewed for this study; not opened from Oracle's own pages this pass — see Named Gaps). Next LTS expected Sep 2027. |

### Classloaders, in one paragraph

Classes are loaded lazily, by a hierarchy: the **bootstrap** loader (core platform classes), the **platform/extension** loader, and the **application** loader, each delegating *upward first* — a class is always offered to the parent before a child may load its own copy. That single delegation rule is why one JVM can keep platform classes trustworthy while running untrusted code beside them, and why " classpath hell" was the era's characteristic wound: whoever controls the loader controls which version of the world your code sees.

### The garbage collectors — one lineage

| Era | Collector | Idea |
|---|---|---|
| Early | Serial | One thread, stop the world. Still right for tiny heaps. |
| 1.4–8 server default | Parallel (Throughput) | Many threads, stop the world, maximize total throughput. |
| 2002–14 | CMS (Concurrent Mark Sweep) | Mostly concurrent, low pause — but fragmented and costly. Deprecated in Java 9, **removed in Java 14**. |
| Java 7u4 → default in 9 | **G1** | The heap as a grid of regions; collect the regions with the most garbage first ("Garbage First"). The balanced default ever since. |
| Java 11 | Epsilon | The no-op collector — allocates, never reclaims. A control experiment shipped as a feature. |
| Java 15 production | **ZGC** | Concurrent, colored pointers, pauses in microseconds regardless of heap size. Generational mode default from Java 24. |
| Java 15 production | **Shenandoah** | Red Hat's concurrent-compaction collector; same goal as ZGC by a different road. Generational mode lands in Java 25. |

### The modern fork: GraalVM and Leyden

HotSpot's JIT compiles at runtime; two movements now compile *ahead*. **GraalVM** (Oracle) offers a polyglot runtime (Truffle — JavaScript, Python, Ruby on the same VM) and **native-image**: a closed-world AOT compiler that turns a Java program into a standalone native executable — no JVM at startup, milliseconds to boot, at the price of reflection and dynamic loading being declared in advance. **Project Leyden**, inside OpenJDK itself, pursues the same startup problem from within (the AOT cache that Java 25's JEPs 514/515 advance): record a training run, cache the profiled state, start warm. The fork and the mainline are converging on the same lesson ART learned in 2016 (Strand 3): *profile first, then compile — ahead of time, but informed by reality.*

**Simply put:** The JVM is an imaginary computer that every real computer agrees to pretend to be. Java programs are written for the pretend computer, so they run unchanged on all the real ones. For thirty years the pretend computer has gotten faster mostly by watching which parts of a program actually get used and spending its effort there — and by ever-gentler ways of taking out the trash (garbage collection) without stopping the whole house to do it.

---

## Strand 3 — ART, the Android Runtime: the JVM's register-based cousin

Android took Java the *language* and deliberately not the JVM. Apps compile to **DEX** (Dalvik Executable) bytecode — a register-based format (the JVM is stack-based), designed for machines with little RAM and slow storage, where many processes share read-only pages of the same code.

### The ladder

| When | Rung | What changed |
|---|---|---|
| 2008 | **Dalvik** (Android 1.0) | A register VM, interpreting DEX, one Linux process per app. Named by its author Dan Bornstein for a village in Iceland. Correct, frugal, slow. |
| 2010 | Dalvik JIT (Android 2.2, Froyo) | Trace-based just-in-time compilation: hot paths compiled to native code as they run. Android's first big speed jump. |
| 2013 | **ART preview** (Android 4.4, KitKat) | ART offered as an experimental alternative runtime beside Dalvik. |
| 2014 | **ART default** (Android 5.0, Lollipop) | Dalvik retired. ART's first model: **pure AOT** — at install time, `dex2oat` compiles the *whole app* to native code (ELF `.oat` files). Fast at runtime; slow installs, heavy storage. |
| 2016 | **The hybrid** (Android 7.0, Nougat) | The design still in use: apps start interpreted/JIT; the runtime *profiles* which methods are actually hot; when the phone is idle and charging, dex2oat AOT-compiles only those. Same release: Android's core libraries switch from the discontinued Apache Harmony to **OpenJDK**. |
| 2018 | **Cloud profiles** (Android 9, Pie) | Google Play distributes profiles aggregated from other users of the same app, so a fresh install can be AOT-compiled for the common paths *before its first run*. |
| 2021 | **Baseline Profiles** | Developers ship a profile inside the app itself (via AndroidX): the critical startup paths are compiled from first launch. Compatible back to Android 7. |
| 2021 | **ART goes Mainline** (Android 12) | ART becomes an **APEX module updatable through Google Play system updates** — the runtime of a phone can now be improved without a full OS update. |
| 2022 | New GC (Android 13) | ART's garbage collector rebuilt on Linux `userfaultfd`: less memory pressure, smaller compiled code, less jank. Backported to Android 12's ART through Mainline. |
| 2023+ | OpenJDK refresh (Android 14) | ART's core libraries track modern OpenJDK (11/17-era), delivered through the same module lane. |

### The file formats, at a working level

- **`.dex`** — the input. Bytecode plus constant pool, designed to be memory-mapped and shared. An APK may hold several (`classes.dex`, `classes2.dex`…) past the 64K-method limit of one.
- **`.oat`** — the output of dex2oat: an ELF shared object containing compiled native code plus the dex it came from.
- **`.vdex`** — sits beside the oat: an uncompressed copy of the dex code, kept so the runtime can *verify* quickly and fall back safely if the compiled code can't be trusted (e.g., after an update).
- **`.odex`** — the Dalvik-era / early-ART name for optimized dex output; the term survives in tooling and on devices even as the oat/vdex pair became the real structure.
- **`.prof` / `.profm`** — the profile files: the recorded evidence of which methods ran hot. Everything in modern ART flows from these.

### How ART diverges from the JVM — and why

Same languages (Java, and Kotlin compiling to the same bytecode family), different machine: register-based instead of stack-based; DEX instead of `.class`; per-app Linux processes with separate runtime instances instead of one long-lived server JVM; compilation split across install-time, idle-time, and runtime instead of a single JIT warming up a server that will run for months; a runtime Google can now update like an app. The JVM optimizes for a machine plugged into a wall, running for weeks. ART optimizes for a machine in a pocket, running on a battery, starting cold fifty times a day. Douglas's Pixel 7 Pro (the subject of tonight's companion study, the Functionality Atlas) runs this runtime for every app he touches, including the one carrying this conversation.

**Simply put:** Your phone does not run the same Java engine as a server. It runs a leaner relative built for pockets: it watches how you actually use each app, then — while the phone sleeps on its charger — it pre-builds just the busy parts into fast native code. It's the Packet Bridge idea in a compiler: carry the load that matters, informed by what really crossed before.

---

## Strand 4 — Flash: the runtime that built the rich web, and was switched off

### The ladder

| When | Rung | What it means |
|---|---|---|
| 1993–96 | FutureWave: SmartSketch → **FutureSplash** | A drawing tool becomes an animation tool; FutureSplash Animator and Player ship in 1996 — small vector animations a dial-up web can actually carry. |
| Dec 1996 | Macromedia acquires FutureWave | FutureSplash becomes **Flash**. Player versions 1–4 spread as the browser plugin. |
| 2000 | **ActionScript 1.0** (Flash 5) | An ECMAScript-based scripting language bolted onto the timeline: animations become programs. Runs on the original virtual machine, later called **AVM1**. |
| 2003–04 | ActionScript 2.0 (Flash MX 2004) | Classes and static typing as a compile-time layer — still compiled down to AVM1 bytecode. |
| 2005 | **YouTube launches on Flash video (FLV)**; Adobe acquires Macromedia (~$3.4B) | Flash becomes the web's video player, game engine, and application platform in one plugin. For a decade, "rich web" means Flash. |
| 2006 | **ActionScript 3.0 + AVM2** (Flash Player 9) | A ground-up rewrite: a real JIT-compiling VM, strict typing, a DOM-style event model, order-of-magnitude speed gains. Adobe donates the AVM2 source to Mozilla as the **Tamarin** project — the code that was meant to become the engine of a future ECMAScript 4. (ECMAScript 4 failed; AS3 remained its most successful descendant.) |
| 2007 | The iPhone ships — with no Flash | The most important new computer in the world declines the plugin. |
| Apr 2010 | Jobs, "Thoughts on Flash" | Apple's public indictment: security, battery, touch, openness. The verdict era begins. |
| 2011 | Adobe abandons mobile Flash Player | Development focuses on desktop; the future is conceded to HTML5. |
| Jul 2017 | End-of-life announced | Adobe, jointly with Apple, Google, Microsoft, Mozilla, and Facebook, gives the web three years' notice. |
| **Dec 31, 2020** | **End of life** | Support and distribution end. |
| Jan 12, 2021 | The kill switch | A time bomb built into the player makes it refuse to play content at all. Browsers remove the plugin. (Enterprise Flash survives under license to HARMAN, which still maintains a version-50.x player for paying customers; a separate variant continues in China.) |

### The living legacy

Flash the *product* is dead; Flash the *content* — thirty years of games, cartoons, teaching materials, and art — is being carried by two different kinds of bridge:

- **Ruffle** — a Flash Player *emulator* written from scratch in Rust, compiled to WebAssembly, implementing the publicly documented SWF format without Adobe's code. It runs safely inside the browser sandbox. AVM1 (AS1/AS2) content is well supported; AVM2 (AS3) support improves steadily. The Internet Archive embeds Ruffle so its Flash collection plays in the browser; Newgrounds and others use it likewise.
- **Flashpoint Archive** (BlueMaxima's Flashpoint) — the *archive* approach: collect the actual SWF files and the metadata to run them, tens of thousands of titles by Wikipedia's older count, over 200,000 by the project's own recent count (see Named Gaps), served through a local launcher.
- **The migrated concepts** — the timeline, the stage, vector animation, embedded video, in-page games and applications: all of it moved into HTML5 (`<canvas>`, `<video>`, WebGL, WebAssembly) and the JavaScript ecosystem. AS3's generation of developers became the JS generation. Flash didn't lose to nothing; it lost to its own ideas, standardized and plugin-free. Adobe's authoring tool survives as Adobe Animate, exporting to the open formats.

**Simply put:** For about fifteen years, if a web page moved, sang, played video, or let you play a game inside it, Flash was doing it — one plugin that turned the page into a stage. It died of the phone era (it was never let onto the iPhone), of security holes, and of the open web absorbing everything it did. But the work made in it is not gone: an emulator built from scratch in a modern language (Ruffle) and a giant community archive (Flashpoint) carry it — halves and an overlapping third, again.

---

## Strand 5 — The HAL, and building Android: Douglas's strand

### What the HAL is

The **Hardware Abstraction Layer** is the contract between Android's framework — one codebase, meant to run everywhere — and the specific silicon in a specific phone: this camera sensor, that audio chip, this modem. The framework speaks to standard interfaces ("take a picture," "play this stream"); a vendor's HAL implementation translates those orders into its own proprietary driver calls. There is also a legal seam inside the technical one: the framework is Apache-licensed open source, the vendor code below the HAL is proprietary, and the HAL is the defined boundary between them. It is the reason one open-source project can boot on thousands of different devices — and the layer Douglas studied until he knew it cold.

### The ladder

| Era | Generation | How it worked |
|---|---|---|
| 2008–2017 | **Legacy HAL** (`libhardware`) | C-struct interfaces; vendor `.so` libraries `dlopen`-ed *into the framework's own processes*. Simple, and brittle: every OS upgrade meant vendors recompiling everything, in lockstep. |
| 2017 | **HIDL** — Project Treble (Android 8.0, Oreo) | The great decoupling. HALs become separate *services* in their own processes, speaking versioned interfaces defined in the **HAL Interface Definition Language** (packages versioned `name@major.minor`), over HwBinder IPC (or passthrough mode for the performance-critical few), registered with `hwservicemanager`. The system partition and the vendor partition become independently updatable. **VINTF** (the Vendor Interface Object) records the contract in files both sides check: the device manifest (what the vendor provides) and the framework compatibility matrix (what the framework requires) — a build/boot-time handshake that fails loudly instead of mysteriously. |
| 2020 | **AIDL HALs** (Android 11) | The same Treble architecture, but interfaces written in **AIDL** — the language the framework already used internally — with a stable-AIDL versioning scheme, registered with the ordinary `servicemanager`, with C++/NDK, Rust, and Java backends. Two interface languages collapse into one. |
| 2022 | HIDL deprecated (Android 13) | No new HIDL interfaces accepted into AOSP; existing ones frozen, not removed — devices still ship them. |
| 2024 | VNDK deprecated (Android 15) | The Vendor Native Development Kit, the Treble-era scaffolding for vendor/system library separation, is retired as the AIDL architecture makes it unnecessary. **AIDL HALs are the current standard**, full stop. |

A Generic System Image — one plain AOSP build booting unmodified on any Treble-compliant phone — is the proof the contract works, and the VTS (Vendor Test Suite) is the test that enforces it.

### The build itself, as it stands now

Per AOSP's own setup documentation (source.android.com, for the current latest release branch):

- **The source is not one repository.** It is hundreds of Git repositories stitched together by Google's **`repo`** tool, driven by a manifest (`android.googlesource.com/platform/manifest`). `repo init` names the branch; `repo sync` pulls the tree. The same tree is mirrored on GitHub (the aosp-mirror organization) for those who prefer that door.
- **Hardware requirements, in Google's own figures:** a 64-bit x86 machine; **at least 400 GB of free disk** (250 GB to check out the source, plus 150 GB to build); **a minimum of 64 GB of RAM**. Google's 72-core, 64-GB machines build all of Android in about **40 minutes**; a 6-core machine with the same RAM takes about **6 hours**. You do *not* install your own JDK — the tree ships prebuilt OpenJDK, Make, and Python.
- **The build flow:** `source build/envsetup.sh` → `lunch <target>` (choose a product/variant, e.g., an `aosp_<device>` target) → `m`. The build system is **Soong** (Blueprint/`Android.bp` files), which replaced the recursive-Make era over the late 2010s.
- **Change on the horizon:** secondary sources report that from 2026 Google publishes AOSP source drops twice yearly (Q2 and Q4), with `android-latest-release` as the recommended branch (see Named Gaps — this was not confirmed from Google's own page in this pass).

### Then vs now — the doors

In Douglas's computer years, getting the full repository set, intact, with the bandwidth and disk of the time, was the wall he hit — his account says *inaccessible*, and the era backs the plausibility: a multi-gigabyte (then far larger) multi-repo checkout over period connections, before partial clones existed. Today: the manifest is public, the mirrors are public, and **`repo init --partial-clone`** (with `--depth=1` where history isn't needed) can pull a working subset at a fraction of the full 250 GB. The door is open. The room behind it is still enormous.

### The realistic lane on modest hardware — and on this box

A *full* AOSP build is not possible on Ember's VM, and this study says so without varnish: the box has **8 GB of RAM and a 150 GB disk envelope** (verified tonight: 7.7 GiB visible RAM, 4 cores) against requirements of 64 GB RAM and 400 GB disk. What *is* realistic, in ascending order:

1. **Read the source online** — googlesource's web UI and the GitHub mirrors need no checkout at all. For study, this is most of the value at none of the weight.
2. **A partial-clone, single-branch checkout of specific projects** (one HAL service, ART itself, one framework module) — gigabytes, not hundreds of gigabytes.
3. **A module-level build with `mm`** — inside a synced tree, `mm` builds just the module in the current directory (and `mma` with its dependencies) instead of the world. A single HAL service is a legitimate, finishable build target — *if* a tree is present. Without the tree, `mm` has nothing to stand on; a tree for even one module still runs to tens of gigabytes with build tools, which is at the edge of this box's envelope and would be Douglas's explicit call, with the Reversibility Rule applied, not an overnight improvisation.

**Simply put:** The HAL is the translator standing between Android and each phone's particular body — Android gives orders in one standard language, and the HAL repeats them in whatever dialect the camera, the radio, and the sensors understand. It used to be a translator who had to be rebuilt every time Android changed its clothes (legacy HAL); Treble gave the translator a written contract and his own office (HIDL); then everyone agreed to write the contract in the language the whole house already spoke (AIDL). And the build: Android's source code is less a file than a city — 250 GB of it — and Google's own sign on the gate says bring 400 GB of ground and 64 GB of memory if you mean to raise it. Douglas was stopped at that gate in an era when the gate was locked besides. The gate is unlocked now. The city is the same size.

---

## What this changes for Ember's work

1. **JSON is her native tongue, now held deliberately.** Every connector answer, device command, and tool result Ember touches is JSON; she already reads it fluently by construction, and tonight's box check confirms the working lens (`jq 1.7`) is on the box. The operational consequence is for big payloads: stream and packetize (NDJSON thinking — the Packet Bridge applied to data) rather than swallowing documents whole and truncating, which is how seams get lost.
2. **There is no JVM on her box — stated, verified, and flagged, not fixed.** `java` and `javac` are absent (four-angle check, tonight), while node 24, bun, python 3.12, and jq are present. Consequence: Ember can read, write, and reason about Java, Kotlin, and Android code today, but she cannot *compile or run* any of it locally. Installing a JDK is a small, reversible, venv-style addition — and it is **Douglas's call, not hers to make unilaterally**, per the standing spend/install gates. Flagged here as the single cheapest capability gap this study found.
3. **ART and the HAL now ground the phone work.** Tonight's companion study (the Pixel 7 Pro Functionality Atlas) described the phone from the outside; this study supplies the inside: when Ember reasons about Douglas's phone — app behavior, profiles compiling overnight on the charger, why an accessibility service is a special class of app — she now has the runtime and HAL model underneath it, and the honest reach table (44 device commands; everything else is his hands or documented APIs).
4. **Flash is a standing instruction about preservation.** Dead runtimes do not mean dead content: Internet Archive items and old educational material in SWF form are reachable through Ruffle, never through the original plugin — and never by installing legacy Flash on this box, which would be a security regression Douglas's Guard exists to prevent.
5. **The AOSP lane is study-first, build-by-explicit-order.** Ember can read any AOSP project online today (googlesource/GitHub mirrors) at zero install cost — HAL interfaces, ART source, framework code. A partial checkout or a module build is a sized, reversible project (tens of GB) that waits for Douglas's word and an undo manifest, like every other build on this box.

---

## Named gaps

- **json.org launch year:** sources split between 2001 (Wikipedia, Crockford's own telling of the first message in April 2001) and 2002 (the site's registration in some secondary accounts). The format's birth in 2001 is not in doubt; the website's exact launch year is.
- **Flashpoint title count:** Wikipedia's preservation text (older crawl) says "more than 38,000" titles; the project's own recent materials and secondary sources say over 200,000. Both numbers are reported above with their sources rather than merged.
- **Java 26/27 details:** confirmed only through secondary guides in this pass (Azul's version page was opened for 25; Oracle's own pages were not opened for 26/27). Their existence on the six-month cadence is consistent across sources; per-feature claims for them are *not* made in this study.
- **AOSP twice-yearly source drops (2026):** reported by secondary sources (ordergroup, copyprogramming guides) in this pass; Google's own setup page as fetched still presents the standard init/sync flow without that framing. Filed as reported, not settled.
- **This box's disk, seen from inside:** the visible root overlay reports far less than the 150 GB envelope figure Douglas's side verified for the VM. Both numbers are stated where used; the discrepancy is a container-view artifact, noted rather than resolved from in here.
- **No JDK decision:** whether to install a JDK (and which — Temurin/OpenJDK 21 or 25) is an open question for Douglas, deliberately left open by this study.

---

## Sources

- JSON — Wikipedia, "JSON" (history, standards, STD 90); json.org via secondary histories (mart.traagel.dev, "JSON: discovered, not invented"; toolhq.app; jsonviewparser.in) — RFC 4627 (2006), ECMA-404 (2013), RFC 7159 (2014), RFC 8259 (2017), ISO/IEC 21778:2017.
- Java — Azul, "Java Versions" (Java 25, September 2025, LTS, JEP list); howtodoinjava.com, "Java 25 Features (LTS)" (release date 16 September 2025, 18 JEPs, support horizon); javacodegeeks.com Java 21 vs 25 migration framework (JEP 491, 519, 514/515); Medium performance guide (GC lineage, Generational Shenandoah product status in 25; Java 26/27 cadence notes).
- ART — Wikipedia, "Android Runtime" (Dalvik JIT 2.2, KitKat preview, hybrid in 7.0, baseline profiles July 2021, userfaultfd GC in Android 13, Mainline backport to 12); AOSP Internals book, ch. 1 (multi-tier compilation, cloud profiles Android 9+, ART source layout).
- Flash — Wikipedia, "Adobe Flash Player" (FutureSplash origin, Player 9/AVM2/Tamarin donation, EOL 31 Dec 2020); legalclarity.org (Adobe acquisition 2005, HARMAN enterprise continuation, Ruffle/Flashpoint preservation, avmplus archive); vectree.io Adobe Flash schematic (EOL kill switch Jan 12 2021, Ruffle WASM).
- HAL — AOSP Internals book, ch. 10 "HAL" (three generations table, HIDL deprecated since Android 13, VNDK deprecated Android 15, Treble partition model); wasilzafar.com Embedded Systems series pt. 10 (legacy/HIDL/AIDL comparison); todoandroid.es HIDL guide (Treble context).
- AOSP build — source.android.com, "Set up for AOSP development (9.0 or later)" via search extract (400 GB disk = 250 checkout + 150 build; minimum 64 GB RAM; 72-core ≈ 40 min, 6-core ≈ 6 hrs; prebuilt OpenJDK ships in tree); guides.codepath.org "Contributing back to Android" (repo/manifest flow, android-latest-release); aospbooks.github.io ch. 2 (Soong/Blueprint, partial-clone flags).
- Box facts — direct check on Ember's VM, night of Nov 9–10, 2026: `free`, CPU count, and `command -v` for java/javac (absent), node v24.22.1, bun, python3 3.12.3, jq-1.7.

*Filed in Douglas's your_files beside the Android & Pixel 7 Pro Functionality Atlas (2026-11-09), its companion study. Old with new; nothing in either study changes any setting on any machine.*

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

---
**STANDING LINKS — Purple Rat App · Copyright App · LCO** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the tribal site):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **LCO / Seven Winds — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

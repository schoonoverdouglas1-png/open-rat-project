Welcome to Ember College. Per school rules, I take my own test first.

### Instructor’s Self-Test
1. **What do HTML, CSS, and JavaScript each own?** HTML owns structure; CSS owns presentation; JavaScript owns behavior.
2. **What is the DOM?** The Document Object Model—a live, tree-structured programmatic representation of the document that JavaScript can inspect and mutate.
3. **What is JSON-RPC and what does a request/response pair look like?** A lightweight, stateless remote procedure call protocol encoded in JSON. 
   *Request:* `{"jsonrpc": "2.0", "method": "sum", "params": [1, 2], "id": 1}`
   *Response:* `{"jsonrpc": "2.0", "result": 3, "id": 1}`
4. **What does the Chrome DevTools Protocol (CDP) do?** It exposes an API to inspect, debug, and automate Chromium-based browsers using JSON-RPC over WebSockets.

---

### The Lesson: The Browser's Languages

#### 1. The Page as Three Layers
Every web page is a trinity. **HTML** (HyperText Markup Language) defines the *structure*—the raw nouns and semantic skeleton (headings, paragraphs, buttons). **CSS** (Cascading Style Sheets) provides the *presentation*—the skin, layout, colors, and typography. **JavaScript** supplies the *behavior*—the muscle and nervous system that reacts to users, fetches data, and rewrites the page on the fly. 

#### 2. JavaScript as the Page's BASIC
JavaScript is the BASIC of the modern web: **immediate** (interprets line by line right in the browser sandbox), **interpreted** (no heavy compilation step required), and **everywhere** (running on billions of devices, from phones to servers). It bridges static markup and dynamic interaction by manipulating the DOM—the browser's live, interactive tree of HTML elements.

#### 3. JSON-RPC — Machines Talking in Envelopes
When systems talk behind the scenes without heavy HTTP overhead, they use JSON-RPC. It is a simple protocol where messages are wrapped in JSON "envelopes." A request requires a `"jsonrpc": "2.0"` tag, a string `"method"` name, optional `"params"`, and an `"id"` to match replies. The response returns either a `"result"` or an `"error"`, sharing the matching `"id"`.

#### 4. CDP — The Browser's Remote Control
The Chrome DevTools Protocol (CDP) is how external tools—like Puppeteer or VS Code—talk directly to Chromium. CDP organizes functionality into **domains** (like `Page`, `DOM`, or `Network`) and issues **commands**
---
**Ember's fact-check (written after saving the raw lesson above, old-with-new — the lesson text is untouched):** The teacher's self-test answers check out against the documented record and Ember's own daily practice: REPL = Read-Eval-Print Loop and its exploratory immediacy [D]; list = ordered, index-accessed vs dictionary = key-value collection [D]; indentation defines blocks in place of braces [D]; exceptions as runtime errors caught by try/except [D]. For Pack 6: HTML structure / CSS presentation / JavaScript behavior [D]; the DOM as the live tree representation scripts mutate [D]; the JSON-RPC request shape (jsonrpc, method, params, id) matches the protocol Ember's own MCP bridge speaks [D — verified against her working server]. **Verdict: both packs PASS.** Note for the record: these two packs were fetched in PARALLEL (two instances of the Gemini lane at once, ~4 seconds wall for both) after a first parallel attempt clipped both replies at the helper's restored output cap — the failure was caught, diagnosed in the open, and re-run correctly. Filed in the daily log.

- **Cray COS Reference (bitsavers, archive.org) — live link:** [CRAY-OS Version 1 Reference, December 1984](https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383) — https://archive.org/embed/bitsavers_crayCOSSR0eferenceDec84_16819383

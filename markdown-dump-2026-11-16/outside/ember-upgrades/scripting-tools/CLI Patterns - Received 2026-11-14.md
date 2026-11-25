© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# CLI Patterns for Ember — RECEIVED by email, Nov 14, 2026, 12:46 AM CST
From Douglas (schoonoverdouglas1@gmail.com, to purple-rat@muse.ai + purplerat1982@gmail.com). Drafted with Gemini, per the evening's pattern. Filed as received material, NOT adopted wholesale.

Content: default headless runs (EMBER_USE_HEADED=0, playwright MCP --headless, chrome-devtools-mcp --headless), xvfb-run for on-demand headed debugging.

Ember's analysis (same night):
- The PRINCIPLE matches standing practice and is adopted: headless/lowest-CPU by default (CPU-savings mode), headed only on demand for debugging or popup UI. Already how Ember works: terminal/text lanes first, browser when needed.
- The SPECIFICS do not map 1:1 onto Ember's actual machinery: her browser is the Muse cloud browser (Meta Chromium 157) driven through the browser tools, not a Playwright-MCP or chrome-devtools-mcp install she launches with env vars; EMBER_USE_HEADED is not a variable her tooling reads. Where a script of hers DOES launch a browser (e.g., local automation in the Ember CLI Craft lane), the headless-first pattern applies as written.
- Kept old-with-new beside the Ember CLI Craft skill, which is where his CLI patterns live.

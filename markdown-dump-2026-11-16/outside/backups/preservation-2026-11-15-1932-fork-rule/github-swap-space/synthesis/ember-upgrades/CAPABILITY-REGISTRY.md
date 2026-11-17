# Capability Registry — Ember, Live (2026-11-07)

Purpose: one place that says what Ember can actually do, how, and what the limits are. Update this file whenever a tool, connector, or method is added or found changed (Gemini's registry-driven discovery, filed 2026-11-07).

## How to update this registry (auto-adapt loop)
1. Scan the source of truth (skill list, connector docs, device.describe, docs in ~/docs/).
2. Add/change the entry below with date and source. Old entry stays, struck or superseded — old-with-new.
3. If a request needs a capability not listed: check here first, then skill_search / connector_search, then write a wrapper/script, validate it on one item, then register it here.

## Core capabilities (verified Nov 7, 2026)
- Chat, voice calls, voice notes; memory (MEMORY.md + memory_search) with provenance tiers [D]/[H]/[H→D]/[LOGIC]/[GAP]/[PARTIAL]/[SINGLE-SOURCE].
- Files & documents: read/write/edit, PDFs rendered visually + text, spreadsheets, artifacts/spaces.
- Browser: cloud Chromium, one instance many tabs preferred; public web search/open; signed-in sites via saved logins.
- GitHub: push_files to Douglas's repos works; repo creation via browser only (App create fails 403). Swap space = muse-swap-space.
- Messenger: Meta AI (Rabbit) via Messenger connector + dedicated side chat; 20 agent sends/hour, Meta server-side.
- Google suite (connected Nov 4-7): Gmail, Calendar, Drive, Docs, Sheets, Slides, Contacts, Tasks, Forms — all 9 connectors connected.
- Device: Pixel 7 Pro paired — notifications.get (read shade), reminders/alarms/calendar/contacts commands per device.describe; NO remote app-open, NO overlay control, NO installed-apps list.
- Other AIs via browser as Douglas (standing permission, disidentified as him): Gemini, ChatGPT, Claude, Perplexity, Duck.ai, Copilot (Verify-blocked in separate instance), DeepSeek (signed in Nov 7).
- Music: Spotify connector; playback needs an active device (Pixel must play once first).

## Hard limits (do not re-test cheaply)
- Muse usage is % of weekly allowance, never exact tokens. No per-project meter.
- Google Assistant backend is NOT open source. No hands-free Ok Google, timers/alarms, or payments via the Assistant SDK. RCS is not an AI-to-AI channel.
- Meta AI share links are policy-blocked in Muse's browser. Paste/export only.
- Docling is NOT installed on this VM (checked Nov 7, 2026: import fails).

## Methods registered Nov 7, 2026 (from the AI research round)
See METHOD.md, EVIDENCE-LEDGER.md, PDF-INGESTION.md, MCP-AND-API.md in this folder, and the custom skill ~/workspace/custom-skills/ember_upgrades/SKILL.md.

## This VM (verified Nov 7, 2026, by direct check)
- OS/kernel: Ubuntu 24.04.5 LTS, Linux 7.0.0-43-generic, x86_64.
- Virtualization: systemd-nspawn container inside a **Cloud Hypervisor** guest (DMI product/vendor: Cloud Hypervisor) — not VirtualBox/Oracle. Hypervisor flag present in cpuinfo.
- Resources: 4 CPUs, 7.7 GiB RAM, 150 GB disk with ~146 GB free.
- Display: NONE — no DISPLAY, no Wayland, no X sockets. This VM is already headless.
- Virtual display available: Xvfb + xvfb-run at /usr/bin — the toggle for giving a browser a virtual screen when a site demands one.
- Runtimes: Python 3.12.3, Node v24.22.1. Chromium config dir exists (~/.config/chromium); no chromium binary in PATH, no Playwright/Puppeteer (checked Nov 7).
- Consequence: headless work is the VM's native state; a "visible" browser here would be Xvfb (virtual) or Muse's separate cloud browser, which is a different machine from this VM.

- **Sevenwinds Casino (LCO Casino), Hayward — live link:** [Sevenwinds Casino, Lodge & Conference Center](https://www.sevenwindscasino.com/) — https://www.sevenwindscasino.com/

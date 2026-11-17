# MANIFEST — Markdown Dump 2026-11-16

Dumped Nov 16, 2026, at Douglas's direct order (live voice call, ~6:20 PM CST): all of his markdown, inside and outside, for the closed and open source Rat projects. Copies, not moves — originals stay in place. Dedupe was NOT done: propagated copies are intentional and all are kept.

## Counts (identical in both repos)

| Section | Files | Bytes |
|---|---|---|
| inside/ (core ~/*.md + workspace/your_files + memory) | 1,163 | 23,182,879 |
| outside/ (all other markdown under ~/workspace, paths preserved) | 6,733 | 83,820,984 |
| gemini-markdown-file/ (extra copies of the Gemini additions) | 271 | 3,133,609 |
| **Total .md files in this dump folder** | **8,167** | **110,137,472** |

Unique source files copied: 7,896 (the 271 Gemini files are counted again as extra copies in their own folder). Plus this MANIFEST.md and `Gemini Markdown File (2026-11-16).md`.

Scope before safety holds: 7,981 files (inside 1,168, outside 6,813).

## Link swap applied before dumping

At Douglas's order (~6:21 PM CST), Lac Courte Oreilles tribal government links (lco-nsn.gov) were changed to Sevenwinds Casino (sevenwindscasino.com) in the source files, inside first, then outside: 1,201 files changed, 3,728 occurrences replaced. After-swap recount in scope: lco-nsn.gov remains in 11 files / 17 occurrences (9 read-only files not forced, 1 historical DNS measurement kept as a fact, and mentions inside the dated record entries describing this change); sevenwindscasino.com stands at 2,153 files / 7,143 occurrences in scope.

## Exclusions applied (vendored / third-party / system trees)

Named by the order: github-clones (the target repos themselves), node_modules, any *venv*, site-packages, deepseek-code, headless-browser, .git directories, /opt.
Additionally excluded as clearly vendored/third-party or system working state, named here so the record is honest: openclaw-build subtrees (upstream OpenClaw clone and its agent/plugin state; only the .md files directly in openclaw-build/ were kept), self_improvement/staging, proactivity, skills-library/system (copies of /opt system skills), machines/freedos/kernel-src and freecom-src, ember-upgrades/dos-basic-study-2026-11-11/ms-dos and gw-basic, google-open-source-connector/aosp-external-zlib, vm-sandbox-staging/repo.

## HELD — excluded from BOTH repos by the secret scan (64 files)

Douglas's standing rule (Nov 14, 2026): no credentials, tokens, passwords, or secret values in either repo — private is not a vault. The copied set was scanned for private-key blocks, known token prefixes (ghp_, github_pat_, sk-, AKIA, xox), and credential/password assignment patterns. No private-key blocks and no known-prefix tokens were found anywhere. The 64 files below matched a generic credential/password assignment pattern (most are example/placeholder values in third-party documentation and skill files, plus short password-pattern matches in transcripts and logs) and were held out of both repos on filenames only — no values are recorded here.

- `memory/2026-11-02.md` (pattern: password-assignment)
- `memory/2026-11-14.md` (pattern: password-assignment)
- `memory/bank/reflections.md` (pattern: password-assignment)
- `workspace/your_files/All Chats — Chronological Master Record (2026-10-02 to 2026-11-11).md` (pattern: password-assignment)
- `workspace/your_files/Answer — DeepSeek, API and MCP Research Network (2026-11-07).md` (pattern: credential-assignment)
- `workspace/aosp-probe/tree/.repo/repo/docs/smart-sync.md` (pattern: password-assignment)
- `workspace/backups/preservation-2026-11-14/your_files/All Chats — Chronological Master Record (2026-10-02 to 2026-11-11).md` (pattern: password-assignment)
- `workspace/backups/preservation-2026-11-14/your_files/Answer — DeepSeek, API and MCP Research Network (2026-11-07).md` (pattern: credential-assignment)
- `workspace/machines/LEARNING-LOG-2026-11-12.md` (pattern: password-assignment)
- `workspace/meadow-os/acquired/openai/openai-python/README.md` (pattern: credential-assignment)
- `workspace/meadow-os/acquired/openai/openai-python/bedrock.md` (pattern: credential-assignment)
- `workspace/sandbox-bridge/docs/LEARNING-LOG-2026-11-12.md` (pattern: password-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/cloudflare/skills/wrangler/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/expo/skills/expo-api-routes/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-deploy/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-functions/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-identity/SKILL.md` (pattern: password-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/ai-gateway/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/chat-sdk/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/cms/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/payments/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/v0-dev/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-sandbox/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/douglas-seat/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-storage/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/cloudflare/skills/wrangler/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/expo/skills/expo-api-routes/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-deploy/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-functions/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-identity/SKILL.md` (pattern: password-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/ai-gateway/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/chat-sdk/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/cms/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/payments/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/v0-dev/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-sandbox/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/leo-representation/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-storage/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/openclaw/skills/openai-whisper-api/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/openclaw/skills/trello/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/cloudflare/skills/wrangler/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/expo/skills/expo-api-routes/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-deploy/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-functions/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-identity/SKILL.md` (pattern: password-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/ai-gateway/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/chat-sdk/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/cms/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/payments/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/v0-dev/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-sandbox/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/purple-rabbit-rodent-project/state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-storage/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/cloudflare/skills/wrangler/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/expo/skills/expo-api-routes/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-deploy/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-functions/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/netlify/skills/netlify-identity/SKILL.md` (pattern: password-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/ai-gateway/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/chat-sdk/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/cms/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/payments/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/v0-dev/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-sandbox/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw-build/state-main/oc-state/agents/main/agent/codex-home/.tmp/plugins/plugins/vercel/skills/vercel-storage/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw/skills/openai-whisper-api/SKILL.md` (pattern: credential-assignment)
- `workspace/skills-library/other-places/openclaw/skills/trello/SKILL.md` (pattern: credential-assignment)

## Broken symlinks (22, no content to copy)

All in backups/preservation-2026-11-14/your_files/ — symlink targets no longer exist, so there was no file content to dump. Counted, not hidden.

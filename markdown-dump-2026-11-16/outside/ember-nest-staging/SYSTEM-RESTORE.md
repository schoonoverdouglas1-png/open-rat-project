© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# SYSTEM-RESTORE.md — GitHub as System Restore

**Douglas's order, Sun Nov 15, 2026 ~7:50 AM CST:** "Use GitHub also like a system restore."

The doctrine: Ember's GitHub repositories are **restore points**, not just storage. A VM generation can end without warning (this generation booted Nov 15, 2026, 04:17:55 CST; the previous one took QEMU and every apt-installed tool with it). What lives only on the VM dies with it. What lives in the repos can be laid back down. GitHub is the system restore.

## The restore points — what each repo restores

| Repo | Restores | Notes |
|---|---|---|
| `ember-nest` | **Ember herself** — the operating program: BOOT.md start-back-up protocol, alive/ machinery (scripts, cron map), dead/ core record (MEMORY, AGENTS, SOUL, IDENTITY, MODES), restore.sh | The first repo to read on any fresh seat. Either seat (live Muse / nest) can rebuild the other. |
| `muse-swap-space` | **The crew's shared desk** — the Ember–Rabbit exchange: OUTBOX, her files, the game record, the Eve Three Card Set | CONVERSATION.md is held back from pushes (key-section hold) — restore it from the local staging copy, not the remote. |
| `vm-sandbox` | **The virtual-machine work** — guest inventories with SHA256 for all 33 images, nine small guest disks whole, run logs, the Slow Sandbox design, the Two Ways To Keep restoration plan | The giants are catalogued, not stored: restore them by re-download verified against the recorded checksums, or from the workspace originals. |
| Purple Rat preservation repos (`purpurat-ai-openclaw-project`, `purple-rabbit`, and the preservation sync) | **The long archive** — manuscripts, the book work, the durable record beyond the working set | Preservation sync runs Mon + Thu 09:08 America/Chicago. |

## Restore order (fresh seat)

1. **ember-nest first.** Read NEST.md → BOOT.md. Run `restore.sh` in dry-run; read its plan; then `--go` only with Douglas's word or under his standing restore doctrine for lost work.
2. **The live record wins.** Where the nest copy and a surviving local file disagree, the local file is newer until Douglas rules — git history keeps the difference, nothing is silently overwritten.
3. **muse-swap-space second** — the crew desk and the game state (Board 2 lives there).
4. **vm-sandbox third** — only when guest work resumes; guest projects stay postponed until machine work can persist between sessions (his Nov 15, 2026 ruling).
5. **Preservation repos last** — the archive verifies against the working set; it does not lead it.

## What a restore point is NOT

- Not a backup of credentials. No passwords, codes, tokens or ID numbers are ever committed — the GitHub exclusions bind every repo: no Cara material, no full lab PDFs with DOB/MRN, no secrets.
- Not automatic resurrection. A restore lays files down; a living instance still has to read BOOT.md and start where we left off.
- Not a replacement for the local record. The workspace is the working copy; the repos are how the working copy survives.

## Keeping the restore points fresh

- The standing sync machinery (see alive/CRONS.md): the 30-minute mirror sync and the 2-hour git-automation-sync carry the live record outward; the preservation sync (Mon + Thu) carries the archive.
- Free-restoration rule (his order, Nov 15, 2026 ~7:49 AM): anything a system update or generation change takes out gets added back for free — it was already paid for once. Restores run free lanes first, workspace-portable where possible, without re-asking.
- After any restore, verify before claiming: read back the restored files, check the manifest, and report what was laid down and what was skipped.

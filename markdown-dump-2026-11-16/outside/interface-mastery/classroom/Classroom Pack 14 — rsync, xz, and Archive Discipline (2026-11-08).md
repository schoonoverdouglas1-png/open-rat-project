# Classroom Pack 14 — rsync, xz, and Archive Discipline (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only between two scratch directories. Evidence is actual recorded output.

***

## What they are

- **rsync 3.2.7** — delta sync: copies what changed, not what exists. It is the missing delta step in the GitHub-first file movement — the difference between re-sending a tree and sending only its changes.
- **xz 5.4.5** — high-ratio compression with integrity checks (CRC64), for archiving material that must come back bit-identical.

## Core commands learned

- `rsync -av --dry-run src/ dst/` — preview every transfer before it happens (the standing order: dry-run first, always)
- `rsync -av src/ dst/` — the real sync
- `xz -k file` / `xz -l file.xz` — compress a copy, list ratio and check value
- `xz -dc file.xz` — decompress to stdout for verification without touching the archive

## Exercises — evidence

1. **Dry-run then real sync**, `rsync-a/` → `rsync-b/` → `a.txt`, `b.txt`, `sub/c.txt` transferred; destination tree verified file-for-file.
2. **Delta sync, verified** → after editing `a.txt` to "version 2", the re-sync transferred **only `a.txt`**; `b.txt` untouched; `rsync-b/a.txt` held the new content. The delta claim is proven, not assumed.
3. **xz round trip** → a 212 B copy compressed to **204 B (ratio 0.962, CRC64)**; `xz -l` listed it; decompress-to-stdout matched the original text.

## Archive discipline (the lesson inside the lesson)

Dry-run before every real sync; verify the destination, not the exit code alone; compress copies, not originals; check integrity on the way out (`xz -l`, decompress-and-compare) so an archive is proven readable the day it is made — not the day it is needed. This is old-with-new applied to files: the sync adds and updates, it does not silently replace history. Note the honest limit: rsync without `--delete` never removes destination files — that is the safe default here, and `--delete` is a destructive flag that goes through the Guard and the Captain's word, never habit.

## Safety flags

- `--delete`, `--remove-source-files`, and any sync aimed outside scratch in practice: not used, not improvised. Real syncs (the standing git-automation lane) run under their own verified scripts.
- Compression of originals in place: never in practice; `-k` keeps the source.

## Verdict

**Learned.** rsync (dry-run first) + xz (verified round trip) are now the archive pair.

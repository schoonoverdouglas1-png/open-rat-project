# Google Open Source Connector Folder

Created 2026-11-11 at Douglas Roy Schoonover's direction ("Make it so," ~3:55 PM CST): a folder for Google open source style projects, so that our projects touch other projects — a connector folder.

## What lives here

- `aosp-external-zlib/` — a real shallow clone of AOSP's platform/external/zlib from android.googlesource.com, cloned 2026-11-11 and verified on disk (Android.bp, CMakeLists.txt, LICENSE present). AOSP is the open-source tree Douglas's own Android work (Android Device ID Project, the Casio C771 device tree, gearhead54732) grew out of — the first touch-point.
- `FORKS.md` — the fork manifest: relevant upstream projects, why each touches our work, and fork status. Forking proceeds repo by repo; a listing here is not a fork until its status says so.

## Rules that ride with this folder

- Add-only: projects are added to this folder/manifest; nothing is subtracted without Douglas's explicit word.
- GitHub-first for our own file movement; upstream clones here are read/touch points, and our changes live in our own repos.
- Exclusions held: no Cara material, no full lab PDFs, no passwords/codes/IDs.

© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Live CD Lane — Status
Updated 2026-11-13 ~7:12 PM CST at Douglas's order (compile with his compilers, auto-update them, self-update on tonight's teachings, experiment via live-CD instances where the browser stays available).

## Compilers on this box (verified tonight via check-tools.sh + version probes)
- PRESENT: gcc/g++ 13.3.0, Python 3.12.3, Node v24.22.1, sqlite3, jq, ffmpeg, LibreOffice, poppler, pandoc/docling/markitdown/whisper/yt-dlp venvs, searxng + whoogle lanes.
- ABSENT: go, rustc, javac, imagemagick, tesseract, shellcheck, rclone, fzf, bat, zstd, meilisearch, valkey.
- Compile proof tonight: the Gemini connector helper (gemini_call.py) byte-compiles clean.
- "Auto update them": STAGED, not run — compiler/toolchain updates are system changes; under the Reversibility Rule they need the dpkg snapshot first and Douglas's word on the spend/moment. The inventory above is the update target list when he says go.

## Live CD assets (verified on disk tonight)
- ~/workspace/machines/images/dapper-desktop-amd64.iso (Ubuntu Dapper — a live-CD era image)
- ~/workspace/machines/images/warty-release-install-amd64.iso
- ~/workspace/machines/scratch-polyglot/t2_pic_at_beginning.iso, t3_pic_at_end.iso
- MISSING PIECES: qemu is not installed; /dev/kvm absent → any boot is software emulation only (slow, but a Dapper-era live CD is small enough to be usable). Browser inside a live session: available in principle (his teaching), to be proof-tested after a boot, never claimed before.
- Next step when he says go: dpkg snapshot, install qemu, boot the Dapper live image in a scratch VM at an analyzed size, verify the browser inside it — installed is not working until tested live.

## Self-update on tonight's teachings (consolidated)
Filed tonight, all in force: Gmail-first mirror standing; tiny-percent nudge rule (all places, more never less, then don't move it); Spockism permission + Spock-then-Kirk; parallel browser instances + one reserve; cache-ahead manifest for the pages we live on; Chromium anatomy + DRM addenda (hotkeys, address-bar commands, three-slash layer, blocked-page doctrine); TestMu AI bookmark + site map start; Android playground side project (staged, needs KVM instance).

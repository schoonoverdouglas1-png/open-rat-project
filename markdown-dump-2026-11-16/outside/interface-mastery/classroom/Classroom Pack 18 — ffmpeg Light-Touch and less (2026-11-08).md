# Classroom Pack 18 — ffmpeg Light-Touch, with Guardrails, and less (2026-11-08)

**Provenance:** Ember's own hands-on adoption run, Captain Douglas's order Nov 8, 2026 ~6:40 PM CST. Guard-checked command lines; practice only in `~/workspace/scratch-tools-practice/media/`, one-second clips only. Evidence is actual recorded output. Versions: **ffmpeg / ffprobe 8.1.2, less 590**.

***

## What they are

- **ffmpeg** — the media converter: generate, convert, trim, and probe audio/video. Powerful enough to eat a small box alive, which is why this pack is explicitly **light-touch**: synthetic one-second sources, tiny frames, verified outputs.
- **ffprobe** — ffmpeg's read-only sibling: reports what a media file actually is (duration, size, streams) instead of what its name claims.
- **less** — the pager: controlled reading of long output, one screen at a time interactively, and a clean passthrough in pipelines.

## Core commands learned

- `ffmpeg -f lavfi -i sine=frequency=440:duration=1 out.wav` — synthesize a test tone (no input file needed)
- `ffmpeg -f lavfi -i testsrc=duration=1:size=320x240:rate=10 out.mp4` — synthesize a test pattern
- `ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 <file>` — probe and report
- `less --version`; `… | less -FX` — passthrough mode (`-F` quit if one screen, `-X` no terminal init)

## Exercises — evidence

1. **One-second tone** → `media/tone.wav` created, exit 0; ffprobe: **duration = 1.000000, size = 88,278 bytes** — exactly one second, as ordered.
2. **One-second test video** → `media/test.mp4` created, exit 0; ffprobe: **duration = 1.000000, size = 7,628 bytes** — 320×240 at 10 fps for one second, a featherweight clip.
3. **less passthrough** → `printf "line1\nline2\n" | less -FX` returned both lines unchanged; off a terminal, less behaves as a clean filter, and `-FX` is the pipeline-safe form.

## Guardrails (the point of this pack)

- **One-second, small-frame sources only** in practice and by default in work. Duration and frame size are where ffmpeg's cost lives.
- **Heavy transcodes are Class C** — 🚩🚩🚩🚩🚩 five-flagged: long media, high resolutions, and batch conversions are not run on this memory-bound box without the Captain's explicit order and a Pack 12 MemoryMax scope around the job.
- Probe before and after (`ffprobe`): a conversion is verified by its output's measured duration and size, never by exit code alone.
- ffmpeg writes files: outputs go to named destinations in scratch or deliverables, never over an original (old-with-new).

## Verdict

**Learned, light-touch as specified.** Generate-and-probe is proven; heavy work stays five-flagged.

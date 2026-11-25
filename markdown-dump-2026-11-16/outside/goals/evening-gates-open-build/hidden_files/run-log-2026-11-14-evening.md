© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Evening gates-open build — run log, Sat 2026-11-14 23:08 CST

## State found at start (23:09 CST)
Stack had been started 22:19-22:21 CST (gateway pid 3218, clean GenKit, dirty GenKit, Firebase emulator).
- Gateway 7317: UP, gateway.hello ok:true, server crew-gateway 0.2.0, approvals 17 records
- Clean GenKit: process up, Dev UI 4000=200, reflection/flow API 3100 works; NO listener on 4001
- Dirty GenKit: UI 3200=200, telemetry 4034, started with no app command (empty shell, no flows)
- Firebase emulator: hub 4400 up, 6 emulators registered, functions 5001, UI 4100
- Preflight at start: NO-GO on runtimes only (processes=6 clean=000 dirty=200)

## Root cause (checker bugs, not stack failure)
1. preflight.sh + kit-up.sh checked clean runtime on port 4001; actual Dev UI is 4000, reflection 3100.
   kit-up would have started a duplicate clean runtime against a healthy one.
2. preflight counted `ps | grep -c "[g]enkit start"` expecting 2; each runtime spawns npm+sh+node = 3 lines, total 6.

## Fixes applied (old-with-new, backups first)
Backups: preflight.sh.bak-2026-11-14-evening-gates, kit-up.sh.bak-2026-11-14-evening-gates,
crew_gateway.py.bak-2026-11-14-evening-gates (all beside originals in ember-upgrades).
- preflight.sh: clean port 4001->4000; count only `node .*genkit start` (=2); label fixed 4001->4000.
- kit-up.sh: clean check/wait port 4001->4000, header label updated, old noted in comment.
- crew_gateway.py: crew.status now also reports genkit_dev_ui_4000 beside the old 4001 field (additive).
  NOTE: gateway .py change takes effect on next gateway restart; gateway was NOT restarted tonight
  (healthy, leave-running discipline) — its live crew.status still shows only the 4001 field = false,
  which is the old checker's wrong port, not a down service.

## kit-up.sh run after fix (23:11 CST)
gateway: already up — verified, not restarted
clean runtime: already up — verified, not restarted
dirty runtime: already up — verified, not restarted
emulator: already up — verified, not restarted
PREFLIGHT: ALL GO (exit 0) — gateway.hello GO, approvals 17 GO, emulator suite 6 GO,
runtimes clean+dirty GO (clean 4000=200 dirty 3200=200), shields 0 non-loopback GO,
gemini breaker clear GO, git repos even GO, disk 7.5G free GO.

## Proof calls
- crewStatusFlow via POST 127.0.0.1:3100/api/runAction key=/flow/crewStatusFlow -> correct result, traceId returned
- captainBriefFlow via same -> honest staged brief: "no Gemini API key in the environment yet. Facts held: ..."
  (key guard working as built Nov 14; model generation blocked on missing GEMINI_API_KEY in runtime env)
- Firebase emulator function: POST 127.0.0.1:5001/demo-crew/us-central1/crewStatus -> HTTP 200, correct result
- Gateway emulator.state -> running:true, hub/ui/logging/functions/eventarc/tasks all present
- Gateway crew.status (live, pre-restart code) -> genkit_dev_ui_4001:false (wrong-port artifact), emulator UI+functions true

## Remaining blocked / honest gaps
- captainBriefFlow model generation: no Gemini API key in the GenKit runtime environment. Generate lane
  via gemini_ask.sh / custom.google-gemini connector is separate and its breaker is clear (last 429 ~20.7h ago);
  no Gemini API call was spent tonight to prove it (lean-spend discipline).
- Dirty runtime (3200): UI shell only, no flows loaded by design of kit-up v2 command (genkit start --port 3200, no app).
- Gateway crew.status 4000 field: on disk, awaits next gateway restart.
- OpenClaw: study clone only (~/workspace/github-clones/openclaw), not a running service in the kit.

## Discipline
- Nothing healthy restarted; nothing deleted; no sends/spends/sign-ins. Guard check on kit-up command: allowed.
- Work done locally (zero-token lanes: shell, scripts, local runtimes); -1% pause margin preserved — no allowance burn beyond this run.

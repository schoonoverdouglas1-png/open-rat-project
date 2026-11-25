© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# UNDO — Sandbox temp/state promotion (Captain's "Make it so", Nov 12, 2026, 1:52 PM CST)

## The change (exactly as ordered and read back)
1. STOP the sandbox OpenClaw gateway (port 18789) only. The Gemini bridge (port 18901) is not touched.
2. COPY /tmp/oc-state (37M) and /tmp/oc-tmp (23M) to the main disk:
   - ~/workspace/openclaw-build/state-main/oc-state
   - ~/workspace/openclaw-build/state-main/oc-tmp
   The /tmp originals are KEPT — both places, per the Captain's amendment. Nothing is erased.
3. Start the gateway with OPENCLAW_STATE_DIR=state-main/oc-state and TMPDIR=state-main/oc-tmp (main disk, 7.0 GB free), using the new script wire-and-restart3.sh. The old scripts (wire-and-restart.sh, wire-and-restart2.sh, proof1.sh) are kept unchanged, old-with-new.
4. Verify: health on 18789 answers live; gateway.log checked for memory-core load vs the previous "Plugin source capture refused: 445 MB available at /tmp/oc-tmp; at least 512 MiB required" failure.

## Undo path (recorded BEFORE the change, per the Reversibility Rule)
- Stop the gateway (kill the listener on 18789).
- Re-run the previous start pattern with the ORIGINAL environment:
  export OPENCLAW_STATE_DIR=/tmp/oc-state TMPDIR=/tmp/oc-tmp
  nohup node openclaw.mjs gateway run --bind loopback --auth none (or rerun proof1.sh for the token configuration)
  from ~/workspace/openclaw-build/openclaw, logging to gateway.log.
- The state-main/ copies may simply be left in place (add-only house rule); pointing back is the whole undo. No deletion is required or authorized.

## Scope guards
- Sandbox only. Ember's live Muse files are not touched.
- No purchases, no sends, no credentials handled. The gateway token, if any, stays inside the copied state directory and is never printed.
- Guard: the runner script is passed through ~/workspace/ember-upgrades/guard/check-command.sh before execution.

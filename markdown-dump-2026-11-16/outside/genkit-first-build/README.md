# Genkit First Build

Built Nov 14, 2026 at Douglas's order: "Work with GenKits and build a GenKit."

## What this is
A small TypeScript Genkit project with two flows:
- `crewStatusFlow` — deterministic, local, no model call. Proves the flow runtime and schemas.
- `captainBriefFlow` — model-backed (Gemini via the Google AI plugin). Needs `GEMINI_API_KEY` or `GOOGLE_GENAI_API_KEY` set when run.

## Run it
```sh
cd ~/workspace/genkit-first-build
npm install
npm run build
npm run dev   # Genkit developer UI / flow runner
```

## Guardrails
- No API key is stored in this project.
- The status flow is the default proof: it runs without spend.
- The brief flow is only invoked deliberately; it is not wired to any schedule.

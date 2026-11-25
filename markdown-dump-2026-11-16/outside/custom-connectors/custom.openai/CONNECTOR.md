© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# OpenAI

- `custom.openai` connects Muse to the OpenAI API through its REST API. It authenticates with the registered `api_key` credential and calls only `api.openai.com`.

- Helpers live in `~/workspace/custom-connectors/custom.openai/bin/`. `openai_call.py` lists the models the key can reach and generates chat completions.

## Connect

- The connection was registered with `credentials.request_api_access` and these details. Reuse them to reconnect:

```json
{
  "provider": "openai",
  "auth_scheme": "api_key",
  "placement": "bearer_header",
  "api_hosts": ["api.openai.com"]
}
```

- Before the first change in a conversation, prove access with a harmless read:

```text
python3 ~/workspace/custom-connectors/custom.openai/bin/openai_call.py models
```

## Credentials

- The registered connection holds the credential. Helpers import `/opt/muse/skills/custom-connector-setup/bin/dynamic_credentials.py`, which returns an `hsurr:` surrogate and places it where the provider reads the key. Muse swaps in the real credential only on an approved request to a registered host.

- Never put a key, token, password or cookie in this doc, a helper, a command argument, an environment variable or a log. Never ask the user to paste one in chat.

- Keep redirects disabled on authenticated requests.

- On a 401 or 403, check the request first. Confirm that the helper attached the credential, that the host is registered and that the placement and scopes match.

- Only when a request that carried the credential is still rejected, call `credentials.request_api_access` with the details above and `"reconnect": true`.

## List models

- List the models the key can reach. Run this read to prove the key works before any paid call. Verified Nov 15, 2026: the call returned 96 models, including the gpt-5 and gpt-4.1 families.

```text
python3 ~/workspace/custom-connectors/custom.openai/bin/openai_call.py models
```

- The output is JSON with a `count` and a sorted `models` list of model ids.

## Generate a chat completion

- Generate text with a chat model. The default model is `gpt-4o-mini`. Pass a different model id as the third argument when the task names one.

```text
python3 ~/workspace/custom-connectors/custom.openai/bin/openai_call.py generate "prompt" [model]
```

- The reply text prints to stdout. The model id and the token usage print to stderr. This operation is untested against a live completion as of Nov 15, 2026, because a completion is a metered call on the user's OpenAI billing.

## Recover from errors

- A 401 means the key was rejected. Check the placement and host first, then reconnect only if a request that carried the credential was still rejected.

- A billing or quota error means the OpenAI account behind the key has no usable API credit. The key itself can still be valid, as the Nov 15, 2026 models read showed. Adding credit is the user's step on platform.openai.com.

- After a failed or timed-out change, check the current state with a read before trying again, because the first request may have completed.

## Limits

- This connector reaches the OpenAI API only. It does not sign in to ChatGPT or change any account setting.

- API calls are metered by OpenAI against the account behind the key. The `models` read is the free proof. Completions cost money per token, so get the user's word before generation work that is more than a test.

## Related skills

- Use `muse.skill_search` to find other skills and `muse.connector_search` to find other connectors.

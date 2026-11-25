© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# MotherDuck Guides — The Code From His Page, Saved (2026-11-09)

Source page (sent by Douglas from his MotherDuck onboarding email, opened by Ember Nov 9, 2026):
"Using Guides to improve AI query accuracy and personalize agents" — https://motherduck.com/docs/key-tasks/guides/

What this file is: every code block and command from that page, saved whole, plus Ember's digest of the page around them. The full page text itself lives in the caches per the two-cache rule (originals in the Full Cache; this file is the working copy Douglas asked for in chat).

## The page in brief (Ember's digest)

- Guides are markdown documents stored in MotherDuck that AI agents read before working with your data, through the MCP server. Write once; every agent session picks them up automatically.
- One orientation Guide at the root; narrower Guides under nested topics (like folders, e.g. `revenue-billing/forecasting`). Reserved topics: `dives` and `flights`.
- Visibility per Guide: `user` (private, the default) or `organization` (everyone in the org; setting it needs an org admin). Douglas's Nov 9 permission covers reading and sharing org-wide Guides.
- Every update creates a version snapshot; history is browsable.
- COMMENT ON (one sentence per object) vs Guide (as long as the subject needs) — comments are read on every schema introspection; longer context belongs in a Guide.
- Tips: one subject per topic; write descriptions; lead with rules, not explanations; include working SQL patterns; name pitfalls explicitly ("Never join X to Y"); use references so Guides surface during exploration; version comments tell why, not just what.

## MCP tools named on the page

- `get_query_guide` — overview of all Guides: every topic with its count, root Guides in full. (The command Douglas named.)
- `list_guides` — browse the catalog level by level; `get_guide` — read one Guide in full by ID.
- `create_guide`, `update_guide`, `edit_guide_content`, `update_guide_metadata` — write-side tools (outside the read-only trial).
- `search_catalog`, `list_tables`, `get_dive_guide`, `get_flight_guide` — discovery surfaces where Guides appear.

## SQL functions from the page (verbatim code blocks, examples use placeholder IDs)

Create a Guide:

```sql
SELECT id, topic, current_version
FROM MD_CREATE_GUIDE (
  topic = 'revenue-billing',
  title = 'MRR and ARR Definitions',
  description = 'How monthly and annual recurring revenue are calculated',
  content = '
# MRR and ARR definitions
MRR is the sum of all active subscription amounts normalized to a monthly value.
Key rules:
- Use the subscriptions table, not invoices
- Filter to status = active
- Exclude trial subscriptions (trial_end IS NULL)
',
  access = 'user'
);
```

List Guides:

```sql
SELECT id, topic, title, description, access FROM MD_LIST_GUIDES();
SELECT id, title FROM MD_LIST_GUIDES(topic = 'revenue-billing');
```

Read a Guide in full; version history:

```sql
SELECT title, content FROM MD_GET_GUIDE(id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
-- Browse history: MD_LIST_GUIDE_VERSIONS(id = ...)
-- Read an older version: MD_GET_GUIDE(id = ..., version = 2)
```

Update (full replace) and metadata-only update:

```sql
SELECT current_version FROM MD_UPDATE_GUIDE(
  id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  content = '...(full updated markdown)...',
  change_comment = 'Add expansion MRR section'
);

SELECT topic, title FROM MD_UPDATE_GUIDE_METADATA(
  id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  topic = 'customer-orders',
  title = 'Customer Order Filters'
);
```

Attach references (a Guide linked to catalog objects, down to a single column):

```sql
SELECT current_version FROM MD_UPDATE_GUIDE(
  id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  "references" = [
    { 'type': 'catalog', 'url': 'md:billing', 'schema': 'main', 'table': 'subscriptions',
      'description': 'Primary source for subscription revenue data' },
    { 'type': 'catalog', 'url': 'md:billing', 'schema': 'main', 'table': 'subscriptions',
      'column': 'amount', 'description': 'Monthly subscription amount in cents' }
  ]
);

-- Find Guides by reference:
SELECT id, title FROM MD_LIST_GUIDES(
  reference = { 'type': 'catalog', 'url': 'md:billing', 'schema': 'main', 'table': 'subscriptions' }
);
```

Object comment naming a Guide:

```sql
COMMENT ON COLUMN subscriptions.status IS 'Subscription state: active, trialing, past_due, canceled. Revenue rules are in the MRR and ARR Definitions Guide.';
```

Manage visibility / delete:

```sql
SELECT access FROM MD_SET_GUIDE_ACCESS(id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', access = 'organization');
SELECT success FROM MD_DELETE_GUIDE(id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
```

## Run status (Ember, Nov 9, 2026, 3:35 PM)

- NOT run yet — these codes execute inside Douglas's MotherDuck warehouse, and no token exists yet (vault checked empty at 3:33 PM). The read-only ones (`get_query_guide`, `list_guides`, `MD_LIST_GUIDES`, `MD_GET_GUIDE`) are the queued one-time trial for the moment the read scaling token lands.
- The write-side codes (create/update/delete/set-access, with placeholder example IDs and example revenue data) will NOT be run: they sit outside Douglas's own "non-harmful, read-only one time" bound, and a read scaling token rejects them at the server anyway. They are saved here as reference, which is what the page offers them as.
- The page's own further reading: "Bootstrap Guides from the context you already have", the MCP tool reference for Guides, the SQL function reference for Guides, and MCP workflows.

---
**Copyright — Douglas Roy Schoonover** (his copyright notice, placed at his order Nov 16, 2026, beside the LCO link; his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration). **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

---
**STANDING LINKS — Purple Rat App · Copyright App · Purple Rat Project** (placed at Douglas's order Nov 16, 2026, so every markdown file Ember can read and write stays linked with the apps and the Purple Rat Project Facebook page):
- **Doug Schoonover — his personal Facebook page:** https://www.facebook.com/100063626736158
- **Purple Rat Project — Facebook Page (managed by Ember for Douglas):** https://www.facebook.com/61596216946121
- **Purple Rat — Doug's App:** https://muse.ai/s/purple-rat-doug-s-app-xqxq6xmuxrxxxfxcxpc/NluUoXnM94DulvgNoCBtDB84t3Z75S1T5eyffpyNnhY
- **Copyright — Douglas Roy Schoonover (the app):** https://muse.ai/s/copyright-douglas-roy-schoonover-jxd6xmxrpxhxcwxzv/uVuQnjuLT3ig6gINW701HePt4fIRZC8IWmnrIv5e4nM
- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121
- **Copyright — Douglas Roy Schoonover** (his claim as recorded Nov 15, 2026 — recording a statement is not a copyright registration).

- **Purple Rat Project — live link:** [Purple Rat Project — Facebook Page](https://www.facebook.com/61596216946121) — https://www.facebook.com/61596216946121

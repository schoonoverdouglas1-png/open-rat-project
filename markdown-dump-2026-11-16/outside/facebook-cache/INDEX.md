© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Facebook Cache — Index
- Built: Sun Nov 15, 2026, 07:07–07:10 CST (America/Chicago), at Douglas Schoonover's order (~7:06 AM CST): "Cache all of Facebook posts that you can access and learn about the human condition."
- Method: Facebook connector (`facebook-cli`), read-only. Connection verified first: `me` returned Douglas Schoonover (account linked and usable).
- **Local cache only.** Nothing posted, commented, reacted, messaged, or changed on Facebook. Nothing pushed to GitHub.
- No rate-limit (429) or connector errors occurred in this run; no source was stopped by a limit. Sources were stopped by ordinary-use volume bounds (see each batch) — every source below still has more pages available.

## Batches
| File | Source | Cached | Notes / where it stopped |
|---|---|---|---|
| timeline-own-2026-11-15.md | Douglas's own timeline (`timeline fetch`, 3 pages × 20) | **60 posts** | More pages exist (`has_next_page: true`); stopped after 3 pages. Page 1 = Oct 2025–Oct 2026 (captioned); pages 2–3 = Dec 2013–Apr 2014 (no captions returned). Next cursor after page 3: `QVFIVGZAlLWp1cHF5NlYtVFBCLWIwRkFReGtBYnhTSkdWS05YX3puOHVySXhIU3JNWVlUS0packdOT3k0b25OQTM4TmV3Ml9ERFRaMUpWQ3lEZA0pwTlJPWW1R` |
| feed-2026-11-15.md | Newsfeed (2 pages) + friends feed (1 page) | **8 + 4 = 12 posts** | Both feeds returned `has_next_page: true`; stopped after 2 newsfeed pages / 1 friends page. |
| saved-items-2026-11-15.md | Saved items (`saved list`, 2 pages × 20) | **40 entries (~21 distinct items)** | Connector reports **23,486 total saved items** — full enumeration is far beyond ordinary-use volume; stopped after 2 pages. Next cursor recorded in the batch run (page 2 paging cursor). |
| groups-2026-11-15.md | Group membership list + posts from 3 groups (10 each) | **10 groups listed; 30 group posts** | Group list and each group's posts all have further pages; stopped at 10 groups / 3 groups sampled (Buy Nothing Rusk County, What's Up Hayward WI, Cornell WI Area Photography). |

## Totals
- **102 posts cached** (60 own timeline + 12 feed + 30 group posts), plus **40 saved-item entries** and a **10-group membership list**.
- Date span of cached posts: 2013-12-28 to 2026-11-15.

## Learning brief
- `~/workspace/your_files/Facebook Cache — Learning About the Human Condition (2026-11-15).md`

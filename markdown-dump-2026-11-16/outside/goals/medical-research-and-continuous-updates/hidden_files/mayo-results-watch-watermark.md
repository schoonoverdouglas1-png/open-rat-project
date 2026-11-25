© purple-rat@muse.ai
**Copyright — Douglas Roy Schoonover**

# Mayo results watch — watermark

- last_run: 2026-11-16 09:08 CST (America/Chicago), scheduled run 09:08
- last_gmail_check_utc: 2026-11-16T15:09:46Z
- last_gmail_check_local: 2026-11-16T09:09:46-06:00
- search_window: after:2026/11/14 (overlap since previous run 2026-11-15 09:08 CST, >48h coverage)
- queries_run:
  - (Mayo OR MyChart OR "Mayo Clinic") after:2026/11/14 — 2 messages
  - subject:("test result" OR "test results" OR "new result" OR "Prescription is Ready" OR refill) after:2026/11/14 — 0 messages
  - (Mayo OR "Mayo Clinic") (refill OR prescription OR pharmacy) after:2026/11/14 — 0 messages
  - (Mayo OR MyChart OR "Mayo Clinic" OR "test result") after:2026/11/15 — 2 messages (1 GitHub false positive, 1 OakLeaf visit confirmation)
- new_notifications_found_since_last_watermark (2026-11-15T15:10:10Z):
  - None — no new Mayo Clinic test-result notification, no new MyChart test-result notification, and no new Mayo refill / prescription-ready notification since last watermark
- other_in_window_not_a_result:
  - 1a1e0f99d76629d2 — 2026-11-15 14:50:16 CST, from OakLeaf Clinics MyChart, subject "Confirm a visit for Cara on 11/16/2026" — appointment confirmation for Cara, not a test-result posting or refill notice; not counted as a result notification
  - 1a1db8cb9b4a77e0 — 2026-11-14 13:33:14 CST, from "Tapestry 2.0" <noreply@qemailserver.com>, subject "Mayo Clinic Tapestry 2.0 (IRB #23-004120)|Complete Eligibility Form" — previously seen, before last watermark; Tapestry eligibility form, not a result or refill
- outcome: NOTHING NEW — no new Mayo/MyChart test-result or Mayo refill/prescription-ready notification since 2026-11-15T15:10:10Z
- next_run_should_search_after: 2026-11/15 (use watermark time above; overlap to at least previous day to avoid misses)
- notes: No portal login attempted. No message bodies read (metadata/snippets from triage listing only). No lab values read, reported, or interpreted. Prescription notices filed by date and subject only; no medication details relayed, no advice given, no refill action attempted.

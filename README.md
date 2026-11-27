# LSH Lien Verification Track

Medical Lien Balance Verification Training (3 days), built on the same engine as the Closing Specialist Track: Day cards → a day's Objectives → one step at a time (each slide of the deck is a step), with Presenter view, speaker's notes, handouts, locked recorded videos and the Admin scorecard.

- **Lessons:** the original Canva decks, page for page (`decks/lv-day1 … lv-day3`; personal details in screenshots redacted). Rebuild `js/cs-decks.js` after a deck changes: `python3 decks/build_decks.py`.
- **Course content:** `js/cs-course.js` (days, objectives, topics, modules).
- **Handouts:** `handouts/<deck>.pdf`, the full original deck.
- **Hosting:** Cloudflare Worker `lienverificationtraining` (Workers Builds deploys every push to `main`). Storage is the shared `LSH_KV` namespace under the `lv:` prefix. Secrets on the Worker: `MASTER_ADMIN_PASSWORD`, `PORTAL_SSO_SECRET` (the same value the Training Portal signs its tickets with).
- **Checks:** `.github/workflows` runs the site check, the SSO rules, a Worker dry-run build and the browser smoke, fit and contrast tests.

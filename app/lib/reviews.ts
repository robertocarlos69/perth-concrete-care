/**
 * Hand-picked Google reviews shown in the home page carousel.
 *
 * ── HOW TO UPDATE ─────────────────────────────────────────────────
 * 1. Open your Google Business Profile (business.google.com) → Reviews.
 * 2. Pick your five favourite 5-star reviews.
 * 3. Replace the PLACEHOLDER entries below with the reviewer's first
 *    name (or name + last initial) and their review text, word for word.
 *    Keep `rating: 5`.
 * Only reviews that genuinely exist on your Google profile should go
 * here — visitors can click through and check.
 * ──────────────────────────────────────────────────────────────────
 */

export type Review = {
  name: string;
  rating: 5;
  text: string;
  /** e.g. "Epoxy flake garage — Joondalup" (optional, shown under the name) */
  jobLabel?: string;
};

export const googleReviews: Review[] = [
  {
    name: "PLACEHOLDER — Reviewer 1",
    rating: 5,
    text:
      "Paste the exact text of a real 5-star review from your Google Business Profile here.",
    jobLabel: "Job type — Suburb",
  },
  {
    name: "PLACEHOLDER — Reviewer 2",
    rating: 5,
    text:
      "Paste the exact text of a real 5-star review from your Google Business Profile here.",
    jobLabel: "Job type — Suburb",
  },
  {
    name: "PLACEHOLDER — Reviewer 3",
    rating: 5,
    text:
      "Paste the exact text of a real 5-star review from your Google Business Profile here.",
    jobLabel: "Job type — Suburb",
  },
  {
    name: "PLACEHOLDER — Reviewer 4",
    rating: 5,
    text:
      "Paste the exact text of a real 5-star review from your Google Business Profile here.",
    jobLabel: "Job type — Suburb",
  },
  {
    name: "PLACEHOLDER — Reviewer 5",
    rating: 5,
    text:
      "Paste the exact text of a real 5-star review from your Google Business Profile here.",
    jobLabel: "Job type — Suburb",
  },
];

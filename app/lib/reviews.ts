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
    name: "James Sutton",
    rating: 5,
    text:
      "Rob did an amazing job. Very happy with the result! Also easy to deal with, friendly and responsive. 5 stars!",
    jobLabel: "honing concrete and Epoxy flake garage — Wembley Downs",
  },
  {
    name: "Danielle Rose",
    rating: 5,
    text:
      "Absolutely blown away with our garage transformation. The epoxy flooring has completely elevated the space and the finish is amazing — clean, modern and incredibly professional. The attention to detail, communication and workmanship throughout the process were fantastic. The floor not only looks incredible but feels durable and high quality as well. Highly recommend",
    jobLabel: "Epoxy Garage — Banksia Grove",
  },
  {
    name: "Rachael Day",
    rating: 5,
    text:
      "Absolutely thrilled with our new garage floor! The finish is flawless and the transformation is incredible. The team were professional, punctual and clearly take pride in their work!! They explained the process, kept everything tidy and delivered what they promised. Highly recommended them to anyone wanting to improve their garage floor. Everything was left spotless.",
    jobLabel: "Epoxy Garage — Tapping",
  },
  {
    name: "John McKean",
    rating: 5,
    text:
      "Highly recommend Perth Concrete Care. Rob did an excellent job resurfacing our outdoor patio area, and it’s completely transformed the space. He was friendly, professional, and left everything clean and tidy. We’ve had plenty of compliments on how fresh and modern it looks. Great customer service, reasonably priced. So happy.",
    jobLabel: "Resurfacing exposed agg to smooth honed concrete — Scarborough",
  },
  {
    name: "Ahmad Nawaz",
    rating: 5,
    text:
      "Rob did an amazing job transforming my garage with the river stone flake finish. The result looks unreal. He kept me updated the whole way through, was easy to deal with, and delivered exactly what he promised. Very professional, friendly service. Highly recommend Perth Concrete Care",
    jobLabel: "Epoxy Garage — Rossmoyne",
  },
];

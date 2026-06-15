/**
 * Blog / guides registry.
 *
 * ── HOW TO ADD A POST ─────────────────────────────────────────────
 * 1. Add an entry here (this drives the /blog index and the sitemap).
 * 2. Create app/blog/<slug>/page.tsx for the article body, importing its
 *    metadata from getPost(slug) so there's a single source of truth.
 * 3. Write naturally and technically, with real process detail, local Perth
 *    context and honest trade-offs. Avoid rote advantage/disadvantage
 *    bullet-dumps; Google's helpful-content systems discount thin,
 *    formulaic, AI-sounding articles.
 * ──────────────────────────────────────────────────────────────────
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  /** ISO date for schema + sitemap */
  date: string;
  updated: string;
  /** Human-readable published date for display */
  dateDisplay: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "honed-vs-polished-vs-exposed-aggregate-perth",
    title: "Honed vs Polished Concrete vs Exposed Aggregate: A Perth Guide",
    description:
      "Honed concrete, polished concrete and exposed aggregate explained for Perth homes: how each is made, where it works, plus the slip and cost differences so you can choose.",
    excerpt:
      "They all show off the stone in the concrete, but they’re made differently and suit different parts of a property. Here’s how to pick the right one for a Perth home, from barefoot pool surrounds to driveways.",
    date: "2026-06-15",
    updated: "2026-06-15",
    dateDisplay: "15 June 2026",
    readTime: "9 min read",
    category: "Concrete finishes",
    image: "/gallery/hone-and-seal-exposed-aggregate-balcatta.webp",
    imageAlt:
      "Exposed aggregate honed and sealed to a smooth finish by Perth Concrete Care",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

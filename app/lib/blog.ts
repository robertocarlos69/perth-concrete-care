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
    slug: "concrete-slab-moisture-testing-perth",
    title: "Concrete Slab Moisture Testing in Perth: Standards, Values and Cost",
    description:
      "How we moisture-test concrete slabs in Perth to AS 1884 and ASTM F2170 before hybrid, vinyl, timber or carpet flooring. The RH and pH values to expect, the process, and a flat $250 per slab.",
    excerpt:
      "Laying hybrid, vinyl or timber over a slab that's too wet is the fastest way to wreck a new floor and void the warranty. Here's how we test to Australian Standards, the RH and pH values to expect, and what it costs.",
    date: "2026-06-16",
    updated: "2026-06-16",
    dateDisplay: "16 June 2026",
    readTime: "7 min read",
    category: "Slab preparation",
    image: "/gallery/before-1.jpg",
    imageAlt:
      "Bare concrete slab in a Perth garage before flooring is installed",
  },
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

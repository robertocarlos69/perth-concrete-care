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
    slug: "how-to-prep-garage-floor-before-epoxy-perth",
    title: "How to Prep a Garage Floor Before Epoxy in Perth",
    description:
      "The steps to prepare a Perth garage slab before epoxy or flake flooring: cleaning, moisture testing, diamond grinding to the right CSP, crack repair and priming, so the coating actually lasts.",
    excerpt:
      "A garage epoxy floor is only as good as the slab under it. Here's how we prep a Perth garage the right way, from moisture testing to diamond grinding, so the coating bonds and doesn't peel.",
    date: "2026-07-18",
    updated: "2026-07-18",
    dateDisplay: "18 July 2026",
    readTime: "8 min read",
    category: "Slab preparation",
    image: "/gallery/epoxy-flake-garage-floor-joondalup-perth.webp",
    imageAlt: "Prepared garage slab with a new epoxy flake floor in Perth",
  },
  {
    slug: "concrete-surface-profile-csp-explained-perth",
    title: "Concrete Surface Profile (CSP) Explained: Why Coatings Peel",
    description:
      "What Concrete Surface Profile (CSP) means, the ICRI CSP 1 to 9 scale, why the wrong profile makes epoxy and sealers peel, and how we grind Perth slabs to the profile your floor system needs.",
    excerpt:
      "CSP is the single biggest reason floor coatings stick or peel, and almost nobody outside the trade has heard of it. Here's what it is and why it decides whether your epoxy lasts.",
    date: "2026-07-18",
    updated: "2026-07-18",
    dateDisplay: "18 July 2026",
    readTime: "6 min read",
    category: "Slab preparation",
    image: "/gallery/garage-concrete-floor-after-grinding-perth.webp",
    imageAlt:
      "Garage concrete slab after diamond grinding, cleaned and profiled ready for coating in Perth",
  },
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
    image: "/gallery/concrete-moisture-testing-perth.webp",
    imageAlt:
      "In-situ concrete slab moisture testing with a relative humidity probe in Perth",
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

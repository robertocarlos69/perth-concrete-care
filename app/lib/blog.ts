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
    slug: "cleaning-resealing-honed-exposed-aggregate-perth",
    title: "Cleaning and Resealing Honed and Exposed Aggregate Concrete",
    description:
      "How to pressure wash and reseal honed concrete and exposed aggregate the right way in Perth, and how to tell when a stain needs honing instead of chemicals.",
    excerpt:
      "Honed concrete and exposed aggregate look their best for years if they're cleaned and resealed properly. Get the method wrong and a simple clean can leave etched paste, loose stones or a sealer that turns white within weeks.",
    date: "2026-10-09",
    updated: "2026-10-09",
    dateDisplay: "9 October 2026",
    readTime: "10 min read",
    category: "Cleaning & sealing",
    image: "/gallery/professional-concrete-driveway-cleaning-perth.webp",
    imageAlt:
      "Pressure cleaning an exposed aggregate driveway with a rotary surface cleaner in Perth",
  },
  {
    slug: "remove-bore-water-stains-concrete-perth",
    title: "How to Remove Bore Water Stains from Concrete",
    description:
      "What causes orange bore water stains on Perth concrete, how to remove them, and when staining is too deep for chemicals and needs honing out.",
    excerpt:
      "If your driveway or paths have orange staining near the sprinklers, it's almost certainly bore water. Light staining can be removed with the right product. Years of build-up may need to be honed out.",
    date: "2026-10-09",
    updated: "2026-10-09",
    dateDisplay: "9 October 2026",
    readTime: "6 min read",
    category: "Cleaning & sealing",
    image: "/gallery/residential-exposed-aggregate-pressure-cleaning-perth.webp",
    imageAlt:
      "Cleaning a residential exposed aggregate driveway with a surface cleaner in Perth",
  },
  {
    slug: "exposed-aggregate-sealer-turned-white-perth",
    title: "Why Has My Exposed Aggregate Sealer Turned White?",
    description:
      "The common causes of white, cloudy or milky sealer on exposed aggregate in Perth, how to tell which one you have, and how each is fixed.",
    excerpt:
      "White or milky patches in an exposed aggregate sealer are one of the most common complaints we see. The cause is usually moisture, but not always, and the fix depends on which problem you have.",
    date: "2026-10-09",
    updated: "2026-10-09",
    dateDisplay: "9 October 2026",
    readTime: "6 min read",
    category: "Cleaning & sealing",
    image: "/gallery/hone-and-seal-exposed-aggregate-balcatta.webp",
    imageAlt:
      "Exposed aggregate sealed to an even wet-look finish in Balcatta, Perth",
  },
  {
    slug: "concrete-stains-honing-not-chemicals-perth",
    title: "Concrete Stains That Need Honing Out, Not Chemicals",
    description:
      "Some concrete stains won't shift with any cleaner. How to tell which stains need honing, what honing can and can't fix, and what it means for exposed aggregate.",
    excerpt:
      "Most concrete stains respond to the right cleaner. Some don't, no matter how many products you try. For marks that are too deep, or damage rather than dirt, honing the surface back is often the only reliable fix.",
    date: "2026-10-09",
    updated: "2026-10-09",
    dateDisplay: "9 October 2026",
    readTime: "7 min read",
    category: "Honed concrete",
    image: "/gallery/exposed-aggregate-closeup-after-honing-perth.webp",
    imageAlt:
      "Close-up of exposed aggregate honed to a smooth, even finish in Perth",
  },
  {
    slug: "warehouse-floor-dust-control-perth",
    title: "Warehouse Floor Dusting? Here's How to Stop It for Good",
    description:
      "Warehouse floor producing concrete dust? How auto scrubbing, densification and penetrating sealers stop dusting in Perth industrial floors.",
    excerpt:
      "That fine grey dust settling on your stock and racking isn't coming in from outside. It's coming off the slab itself, and in most cases the fix isn't a coating or a new floor. Here's how we stop it.",
    date: "2026-07-30",
    updated: "2026-07-30",
    dateDisplay: "30 July 2026",
    readTime: "8 min read",
    category: "Industrial floors",
    image: "/gallery/densified-warehouse-perth-concrete-care-wangara.webp",
    imageAlt:
      "Densified and sealed warehouse concrete floor in Wangara, Perth",
  },
  {
    slug: "honing-exposed-aggregate-perth",
    title: "Exposed Aggregate Too Rough? We Can Fix That",
    description:
      "Sharp, rough exposed aggregate can be mechanically honed and sealed instead of demolished. What honing costs in Perth, what it does to the colour, which slabs suit it and which don't.",
    excerpt:
      "If your exposed aggregate is killing your feet, you almost certainly don't need to rip it out. Existing washed aggregate can be honed and sealed into a completely different surface, for a fraction of the cost of a new slab.",
    date: "2026-07-26",
    updated: "2026-07-26",
    dateDisplay: "26 July 2026",
    readTime: "8 min read",
    category: "Honed concrete",
    image: "/gallery/exposed-aggregate-after-honing-perth.webp",
    imageAlt:
      "Exposed aggregate alfresco honed and sealed to a smooth wet-look finish in Perth",
  },
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

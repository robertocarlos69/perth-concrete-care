import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "concrete-surface-profile-csp-explained-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${post.title} | Perth Concrete Care`,
    description: post.description,
    url: pageUrl,
    siteName: "Perth Concrete Care",
    type: "article",
    images: [{ url: post.image, alt: post.imageAlt }],
  },
};

const faqs = [
  {
    q: "What CSP do I need for an epoxy floor?",
    a: "As a general guide, epoxy and flake floor systems want a CSP 2 to CSP 3 profile. Thin sealers can sit on a lighter CSP 1 to CSP 2, and high-build or self-levelling systems need a coarser CSP 4 to CSP 5. The coating manufacturer's data sheet is always the final word, and we grind to whatever it specifies.",
  },
  {
    q: "Is acid etching a good enough profile?",
    a: "For a professional floor, no. Acid etching is inconsistent, can leave residue that stops coatings bonding, and doesn't remove existing coatings. Mechanical diamond grinding is the reliable, manufacturer-recommended way to reach a consistent CSP and a clean surface.",
  },
  {
    q: "My epoxy floor is peeling. Was the CSP wrong?",
    a: "Very often, yes. Peeling and flaking usually trace back to a slab that was under-profiled, contaminated or not cleaned properly before coating, or one with a moisture problem. We grind the failed coating off, profile the slab correctly and re-coat, so the new floor actually bonds.",
  },
];

export default function Page() {
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.description,
        image: `${siteUrl}${post.image}`,
        datePublished: post.date,
        dateModified: post.updated,
        author: { "@type": "Person", name: "Rob", worksFor: { "@id": `${siteUrl}/#business` } },
        publisher: { "@id": `${siteUrl}/#business` },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        articleSection: post.category,
      },
      breadcrumbSchema(
        [
          { name: "Home", url: `${siteUrl}/` },
          { name: "Guides", url: `${siteUrl}/blog` },
          { name: post.title, url: pageUrl },
        ],
        pageUrl
      ),
      faqPageSchema(faqs, pageUrl),
    ],
  };

  const h2 = "mt-12 text-2xl md:text-3xl font-extrabold text-stone-900 scroll-mt-24";
  const p = "mt-4 text-stone-700 leading-relaxed";
  const ul = "mt-4 space-y-2 text-stone-700 list-disc pl-5 marker:text-emerald-600";
  const aCls = "font-semibold text-emerald-700 hover:underline";

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-14 pb-16">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:underline">Guides</Link>
          <span>›</span>
          <span className="text-stone-900">Slab preparation</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Concrete Surface Profile (CSP) Explained: Why Coatings Peel
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span>By Rob, owner-operator at Perth Concrete Care</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <figure className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/garage-concrete-floor-before-grinding-perth.webp"
                alt="Perth garage concrete slab before diamond grinding, marked and contaminated"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/garage-concrete-floor-after-grinding-perth.webp"
                alt="Perth garage concrete slab after diamond grinding, cleaned and profiled ready for coating"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                After
              </span>
            </div>
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            The same Perth garage slab before and after diamond grinding, cleaned
            and profiled to the correct CSP ready for coating.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          Concrete Surface Profile, or CSP, is the single biggest reason a floor
          coating either sticks for years or peels within months, and almost
          nobody outside the trade has heard of it. If you're paying for epoxy,
          flake, polished concrete or a sealer, it's worth understanding, because
          it's the difference between a floor that lasts and an expensive redo.
        </p>

        <h2 className={h2}>What is Concrete Surface Profile?</h2>
        <p className={p}>
          CSP is the standard measure of how rough a prepared concrete surface is.
          It was set by the International Concrete Repair Institute (ICRI), which
          defines a scale from CSP 1, almost smooth, up to CSP 9, very coarse and
          heavily textured. Each number corresponds to a physical reference
          profile, so when a coating manufacturer specifies a CSP, everyone in the
          trade knows exactly how rough the slab needs to be.
        </p>

        <h2 className={h2}>Why it decides whether your coating peels</h2>
        <p className={p}>
          Coatings don't glue to smooth concrete, they mechanically key into it.
          The tiny peaks and valleys of a profiled surface give the epoxy, primer
          or sealer something to grip. Too smooth and there's nothing to hold on
          to, so the coating lets go. Too coarse for a thin coating and you get
          pinholes and an uneven finish. Matching the profile to the system is the
          whole game, and it's why proper preparation is most of what you're
          paying a professional for.
        </p>

        <h2 className={h2}>Which profile suits which floor</h2>
        <p className={p}>
          The coating manufacturer's data sheet always has the final say, but as a
          general guide:
        </p>
        <ul className={ul}>
          <li><strong>CSP 1 to CSP 2:</strong> thin sealers and penetrating sealers.</li>
          <li><strong>CSP 2 to CSP 3:</strong> epoxy and flake floor systems, the most common residential and garage profile.</li>
          <li><strong>CSP 4 to CSP 5:</strong> high-build coatings, self-levelling systems and heavier repair work.</li>
        </ul>
        <p className={p}>
          This is exactly why we test the slab and choose the tooling to hit a
          specific number rather than guessing, on every{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>concrete grinding and prep</Link>{" "}
          job.
        </p>

        <h2 className={h2}>How the profile is achieved (and why we grind, not etch)</h2>
        <p className={p}>
          We create the profile with mechanical diamond grinding. It's consistent,
          it removes old coatings and contamination at the same time, and it lets
          us dial the roughness to the exact CSP the system needs. Acid etching,
          the common DIY shortcut, can't do any of that reliably. It's uneven,
          leaves residue that can stop a coating bonding, and won't touch an
          existing coating, which is why manufacturers specify mechanical
          preparation for their warranties.
        </p>

        <h2 className={h2}>How to tell if yours was done wrong</h2>
        <p className={p}>
          The tell-tale signs of a profile problem show up as peeling edges,
          flaking patches, coatings you can lift with a scraper, or a floor that
          delaminates in sheets. When we're asked to fix a failed floor, the fix
          is usually the same: grind the old coating off, profile the slab
          correctly this time, and re-coat. It's the honing and{" "}
          <Link href="/honed-concrete-perth" className={aCls}>hone-and-seal</Link>{" "}
          and coating work that all depends on getting this first step right.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Want the profile done properly?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Whether it's a fresh floor or a failed coating that needs redoing, we
            grind Perth slabs to the CSP your system actually requires. Send a
            photo and we'll take a look.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#quote" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
              Get a free quote
            </Link>
            <a href={`tel:${business.phoneHref}`} className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>

        <h2 className={h2}>Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion faqs={faqs} />
        </div>
      </article>
    </main>
  );
}

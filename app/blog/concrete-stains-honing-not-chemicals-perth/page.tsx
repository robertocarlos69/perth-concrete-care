import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "concrete-stains-honing-not-chemicals-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Concrete Stains That Need Honing Out, Not Chemicals | Perth Guide",
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
    q: "Can honing remove oil stains?",
    a: "Often, yes, especially on honed concrete. Very old or deep oil stains may not come out completely, because the oil can soak further than is practical to grind, but honing usually makes a big improvement.",
  },
  {
    q: "Will honing change how my concrete looks?",
    a: "On honed concrete, it restores the existing look. On exposed aggregate, it changes it: grinding cuts the tops off the stones and turns the washed stone texture into a flat, honed aggregate finish.",
  },
  {
    q: "Can you hone just the stained area?",
    a: "Sometimes, but spot honing can leave a visible patch, especially on older slabs. Honing the whole area usually gives a more even result, and we'll tell you which makes sense for your slab before quoting.",
  },
  {
    q: "Do I need to seal after honing?",
    a: "Yes. Freshly honed concrete is porous and should be sealed to protect it from new stains. We seal every honed surface as part of the job.",
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
  const aCls = "font-semibold text-emerald-700 hover:underline";
  const ul = "mt-4 space-y-2 text-stone-700 list-disc pl-5 marker:text-emerald-600";

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
          <span className="text-stone-900">Honed concrete</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Concrete Stains That Need Honing Out, Not Chemicals
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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/gallery/exposed-aggregate-closeup-after-honing-perth.webp"
              alt="Close-up of exposed aggregate honed to a smooth, even finish in Perth"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            Honing grinds away a thin layer of the surface and leaves a fresh,
            even finish. What a cleaner can&rsquo;t reach, diamonds can.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          Most concrete stains respond to the right cleaner. Some don&rsquo;t,
          no matter how many products you try.
        </p>
        <p className={p}>
          That&rsquo;s usually because the mark is too deep in the concrete, or
          because it isn&rsquo;t really a stain at all but damage to the
          surface. For these, honing or grinding the surface back is often the
          only reliable fix.
        </p>

        <h2 className={h2}>Chemical cleaning or honing: a quick guide</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left">
                <th className="px-4 py-3 font-bold text-stone-900">Usually responds to chemical cleaning</th>
                <th className="px-4 py-3 font-bold text-stone-900">Usually needs honing or grinding</th>
              </tr>
            </thead>
            <tbody className="text-stone-700 align-top">
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Fresh oil and tyre marks</td>
                <td className="px-4 py-3">Oil soaked in over years</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Mould, algae and black spots</td>
                <td className="px-4 py-3">Acid etching and dull patches</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Leaf and tannin stains</td>
                <td className="px-4 py-3">Paint, render, epoxy or adhesive drips</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Light bore water rust</td>
                <td className="px-4 py-3">Heavy, long-term bore staining on honed concrete</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Fresh efflorescence (after diagnosis)</td>
                <td className="px-4 py-3">Burn marks from fire pits or BBQs</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Dirt and general grime</td>
                <td className="px-4 py-3">Dyes, permanent marker and some food or wine stains</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">Patchiness from a previous bad acid wash</td>
              </tr>
              <tr>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">Stains trapped under failed topical sealer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          This is a general guide. Every slab is different, and some stains in
          the left column can become right-column problems if left long
          enough.
        </p>

        <h2 className={h2}>Why some stains can&rsquo;t be cleaned</h2>
        <p className={p}>
          <strong>They&rsquo;re too deep.</strong> Concrete is porous. Oil,
          dyes and iron staining soak in over time, well beyond where any
          cleaner can reach and lift them out.
        </p>
        <p className={p}>
          <strong>They&rsquo;re damage, not stains.</strong> Acid etching, burn
          marks and swirl marks from aggressive cleaning are changes to the
          surface itself. No cleaner can put back what&rsquo;s been removed.
          The surface has to be evened out mechanically.
        </p>
        <p className={p}>
          <strong>They&rsquo;re bonded on.</strong> Paint, epoxy and render can
          be scraped and stripped to a point, but residue often remains in the
          pores and needs{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>grinding off</Link>.
        </p>
        <p className={p}>
          <strong>Previous cleaning made it worse.</strong> Strong acid washing
          can leave patchy, uneven colour. Repeated chemical treatments on
          honed concrete can dull the finish.
        </p>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="font-semibold text-stone-900">
            Got a stain nothing will shift?
          </p>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send us a photo and we&rsquo;ll tell you whether honing will fix
            it. Call{" "}
            <a href={`tel:${business.phoneHref}`} className={aCls}>{business.phoneDisplay}</a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className={aCls}>{business.email}</a>.
          </p>
        </div>

        <h2 className={h2}>What honing does</h2>
        <p className={p}>
          <Link href="/honed-concrete-perth" className={aCls}>Honing</Link>{" "}
          uses diamond tooling to grind away a thin layer of the surface,
          removing the stained or damaged concrete and leaving a fresh, even
          finish. It&rsquo;s then sealed to protect it.
        </p>
        <p className={p}>
          On honed concrete, re-honing restores the original look. It&rsquo;s
          often the most effective way to deal with deep stains, etching and
          patchy wear.
        </p>
        <p className={p}>
          On exposed aggregate, grinding cuts the tops off the stones and
          turns the washed stone texture into a flat,{" "}
          <Link href="/blog/honing-exposed-aggregate-perth" className={aCls}>
            honed aggregate finish
          </Link>
          . Some people love the result. But it&rsquo;s a change of finish, not
          just stain removal, so it&rsquo;s worth deciding whether that&rsquo;s
          the look you want before going ahead.
        </p>

        <h2 className={h2}>What honing can&rsquo;t guarantee</h2>
        <p className={p}>
          Honing removes stains in the top layer of the concrete. Some stains
          go deeper than that:
        </p>
        <ul className={ul}>
          <li>
            Oil that has soaked in for many years can extend further than is
            practical to grind.
          </li>
          <li>
            Grinding deeper to chase a stain changes the finish and can expose
            more aggregate than the surrounding area.
          </li>
          <li>
            Honing one patch on an older slab can leave it looking different
            from the rest, so whole-area honing often gives a better result.
          </li>
        </ul>
        <p className={p}>
          That&rsquo;s why we assess stains on site before quoting. In some
          cases the best outcome is a combination: treat the stain chemically
          first to lighten it, then hone to even out what&rsquo;s left.
        </p>

        <h2 className={h2}>When to call a professional</h2>
        <ul className={ul}>
          <li>
            You&rsquo;ve tried the right cleaner twice and the stain
            hasn&rsquo;t moved
          </li>
          <li>The surface has dull, etched or patchy areas</li>
          <li>There&rsquo;s paint, epoxy or render residue</li>
          <li>
            You&rsquo;re thinking about converting exposed aggregate to a
            honed finish
          </li>
          <li>
            You&rsquo;d rather not risk damaging the surface with trial and
            error
          </li>
        </ul>
        <p className={p}>
          For general cleaning and resealing, see{" "}
          <Link href="/blog/cleaning-resealing-honed-exposed-aggregate-perth" className={aCls}>
            Cleaning and Resealing Honed and Exposed Aggregate Concrete
          </Link>
          . For orange sprinkler staining, see{" "}
          <Link href="/blog/remove-bore-water-stains-concrete-perth" className={aCls}>
            How to Remove Bore Water Stains from Concrete
          </Link>.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Stained or damaged concrete in Perth?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            We hone, grind and reseal concrete across the Perth metro area,
            north and south of the river. Send a few photos of the stain and
            we&rsquo;ll tell you honestly whether it needs chemicals, diamonds
            or both, with a fixed written quote.
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

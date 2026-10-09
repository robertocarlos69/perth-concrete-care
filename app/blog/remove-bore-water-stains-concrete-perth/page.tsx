import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "remove-bore-water-stains-concrete-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: "How to Remove Bore Water Stains from Concrete in Perth",
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
    q: "Will pressure washing remove bore water stains?",
    a: "No. Pressure alone won't shift iron staining, and too much pressure can damage the surface. Bore stains need a product designed for iron stains, or honing for deep, long-term staining.",
  },
  {
    q: "Can bore stains be removed from honed concrete?",
    a: "Yes. Light stains can often be treated chemically with care, testing first because many bore stain removers are acid-based and can dull a honed finish. Heavy or long-term staining is usually best removed by re-honing the surface.",
  },
  {
    q: "How do I stop bore stains coming back?",
    a: "Keep sprinklers off the concrete, consider an iron filter or treatment system on the bore, and keep the surface sealed. A sound sealer stops the iron soaking in, so future overspray washes off instead of staining.",
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
  const h3 = "mt-8 text-xl font-bold text-stone-900";
  const p = "mt-4 text-stone-700 leading-relaxed";
  const aCls = "font-semibold text-emerald-700 hover:underline";
  const ul = "mt-4 space-y-2 text-stone-700 list-disc pl-5 marker:text-emerald-600";
  const ol = "mt-4 space-y-2 text-stone-700 list-decimal pl-5 marker:text-emerald-600 marker:font-semibold";

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
          <span className="text-stone-900">Cleaning &amp; sealing</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            How to Remove Bore Water Stains from Concrete
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
              src="/gallery/residential-exposed-aggregate-pressure-cleaning-perth.webp"
              alt="Cleaning a residential exposed aggregate driveway with a surface cleaner in Perth"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            Cleaning a Perth exposed aggregate driveway. Unsealed concrete near
            bore reticulation is where iron staining takes hold first.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          If your driveway, paths or pool surround have orange or brown
          staining near the sprinklers, it&rsquo;s almost certainly bore water.
          It&rsquo;s one of the most common concrete problems in Perth.
        </p>
        <p className={p}>
          Light staining can usually be removed with the right product, while
          years of build-up, especially on honed concrete, may need to be honed
          out.
        </p>

        <h2 className={h2}>What causes bore water stains?</h2>
        <p className={p}>
          Much of Perth&rsquo;s groundwater carries dissolved iron and other
          minerals. When bore water reticulation sprays onto concrete, the
          water evaporates and the iron oxidises, leaving a rusty orange or
          brown deposit. Every watering cycle adds another layer, which is why
          the staining usually forms in arcs or fans matching the sprinkler
          pattern.
        </p>
        <p className={p}>
          Unsealed concrete, or concrete whose sealer has worn out, is worst
          affected, because the stained water soaks into the surface rather
          than sitting on top.
        </p>

        <h2 className={h2}>Stop the source first</h2>
        <p className={p}>
          There&rsquo;s no point removing stains if they&rsquo;ll be back in a
          month. Before treating the concrete:
        </p>
        <ul className={ul}>
          <li>
            Adjust or replace sprinkler heads so they don&rsquo;t spray onto
            hard surfaces.
          </li>
          <li>
            Consider an iron filter or bore stain treatment system on the bore.
          </li>
          <li>
            Seal the concrete once it&rsquo;s clean, so future overspray is
            easier to remove.
          </li>
        </ul>

        <h2 className={h2}>Removing light to moderate staining</h2>
        <p className={p}>
          Fresh or light bore stains often respond to a dedicated bore water or
          rust stain remover. These products are designed to dissolve iron
          deposits.
        </p>
        <ol className={ol}>
          <li>Rinse the area and let it dry if the product calls for it.</li>
          <li>
            Test the product on a small, inconspicuous spot first, especially
            on coloured concrete, honed concrete or near pool tiles and plants.
          </li>
          <li>
            Apply as directed and let it dwell for the time specified.
            Don&rsquo;t let it dry on the surface.
          </li>
          <li>
            Rinse thoroughly with clean water. Stubborn areas may need a second
            application.
          </li>
          <li>Let the surface dry fully, then seal it.</li>
        </ol>
        <figure className="mt-6">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/gallery/pressure-washing-equipment-driveway-cleaning-perth.webp"
              alt="Pressure washing equipment set up for cleaning an exposed aggregate driveway in Perth"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 448px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            Washing down an exposed aggregate driveway. Thorough rinsing after
            any stain treatment matters as much as the product itself.
          </figcaption>
        </figure>
        <p className={p}>
          Always follow the product&rsquo;s safety directions and protect
          nearby plants, metal fittings and painted surfaces. Many of these
          products are acid-based, so treat them with care on{" "}
          <Link href="/honed-concrete-perth" className={aCls}>honed concrete</Link>
          , where they can dull the finish.
        </p>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="font-semibold text-stone-900">
            Bore stains that won&rsquo;t budge?
          </p>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send us a photo and we&rsquo;ll tell you whether they&rsquo;ll
            treat out or need honing. Call{" "}
            <a href={`tel:${business.phoneHref}`} className={aCls}>{business.phoneDisplay}</a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className={aCls}>{business.email}</a>.
          </p>
        </div>

        <h2 className={h2}>When chemical treatment won&rsquo;t fix it</h2>
        <p className={p}>
          Bore staining that has built up over many years can soak well into
          the concrete. You may lighten it chemically but not remove it
          completely. Signs you&rsquo;re at this point:
        </p>
        <ul className={ul}>
          <li>
            The stain fades after treatment but a clear shadow remains
          </li>
          <li>Repeated treatments make little difference</li>
          <li>
            On honed concrete, treatment has left the surface dull or uneven
          </li>
        </ul>
        <h3 className={h3}>Honed concrete</h3>
        <p className={p}>
          Re-honing removes the stained top layer and restores an even finish.
          This is often the most reliable fix for heavy bore staining on honed
          surfaces. How deep the stain goes determines how much needs to be
          removed, so we assess it on site before quoting.
        </p>
        <h3 className={h3}>Exposed aggregate</h3>
        <p className={p}>
          Some of the staining sits in the stones themselves, particularly
          lighter, porous stones. Chemical treatment is usually the first step
          here.{" "}
          <Link href="/blog/honing-exposed-aggregate-perth" className={aCls}>
            Grinding exposed aggregate
          </Link>{" "}
          is possible but changes the finish from a washed stone look to a
          flat honed aggregate look, so it&rsquo;s a decision about the finish,
          not just the stain. See{" "}
          <Link href="/blog/concrete-stains-honing-not-chemicals-perth" className={aCls}>
            Concrete Stains That Need Honing Out, Not Chemicals
          </Link>.
        </p>

        <h2 className={h2}>Preventing it coming back</h2>
        <ul className={ul}>
          <li>Keep reticulation off hard surfaces.</li>
          <li>
            Keep the concrete sealed. A sound sealer stops the iron soaking in
            and makes overspray easy to wash off.
          </li>
          <li>
            Rinse fresh overspray with mains water before it builds up.
          </li>
          <li>Check the sealer each year with a water bead test.</li>
        </ul>
        <p className={p}>
          For the full cleaning and resealing process, see{" "}
          <Link href="/blog/cleaning-resealing-honed-exposed-aggregate-perth" className={aCls}>
            Cleaning and Resealing Honed and Exposed Aggregate Concrete
          </Link>.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Heavy bore staining on your concrete?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            We hone and reseal stained concrete across the Perth metro area,
            north and south of the river. Send a few photos of the staining and
            we&rsquo;ll tell you honestly whether it will treat out chemically
            or needs honing, with a fixed written quote either way.
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

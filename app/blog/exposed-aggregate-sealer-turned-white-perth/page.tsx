import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "exposed-aggregate-sealer-turned-white-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Why Has My Exposed Aggregate Sealer Turned White? Causes & Fixes",
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
    q: "Will white sealer go away on its own?",
    a: "Light moisture blush sometimes clears as the surface dries out in warm weather. If the whitening persists for more than a few warm, dry days, it needs treatment.",
  },
  {
    q: "Can I just put another coat of sealer on?",
    a: "Only if you know the existing sealer type and it's still sound. Recoating over a failed or incompatible sealer usually makes things worse, because you're trapping the problem under another film.",
  },
  {
    q: "Do I need to strip my sealer?",
    a: "If it's peeling, flaking, bubbled or the whitening won't revive with solvent, yes. Stripping exposed aggregate takes care, because the stripper and pressure need to remove the coating without washing out cement paste or loosening stones.",
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
          <span className="text-stone-900">Cleaning &amp; sealing</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Why Has My Exposed Aggregate Sealer Turned White?
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
              src="/gallery/hone-and-seal-exposed-aggregate-balcatta.webp"
              alt="Exposed aggregate sealed to an even wet-look finish in Balcatta, Perth"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            What a sound sealer should look like: even sheen, no cloudiness.
            Sealed on dry concrete in thin coats, it stays this way.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          White, cloudy or milky patches in an exposed aggregate sealer are one
          of the most common complaints we see. The cause is usually moisture,
          but not always, and the fix depends on which problem you have.
        </p>
        <p className={p}>
          Some white sealer can be revived without stripping. Some has failed
          and needs to come off.
        </p>

        <h2 className={h2}>Common causes at a glance</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left">
                <th className="px-4 py-3 font-bold text-stone-900">Cause</th>
                <th className="px-4 py-3 font-bold text-stone-900">What it looks like</th>
                <th className="px-4 py-3 font-bold text-stone-900">Usual fix</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Moisture blush</td>
                <td className="px-4 py-3">Milky or hazy patches, often after rain or in shaded areas</td>
                <td className="px-4 py-3">Sometimes revived with solvent if it&apos;s a solvent-based acrylic</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Sealed while damp</td>
                <td className="px-4 py-3">Cloudiness soon after sealing, worst at low points and joints</td>
                <td className="px-4 py-3">Strip and reseal once fully dry</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Coat too heavy</td>
                <td className="px-4 py-3">White, cloudy or bubbled areas where sealer pooled</td>
                <td className="px-4 py-3">Revive if minor; strip if severe</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Incompatible products</td>
                <td className="px-4 py-3">Whitening, peeling or poor bond after recoating</td>
                <td className="px-4 py-3">Strip and reseal with a compatible system</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Sealer breakdown</td>
                <td className="px-4 py-3">Flaky, chalky, worn patches, often in sun and traffic areas</td>
                <td className="px-4 py-3">Clean, strip if needed, reseal</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">Efflorescence</td>
                <td className="px-4 py-3">White powdery deposits, can come through or under the sealer</td>
                <td className="px-4 py-3">Diagnose the moisture source; strip and treat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2}>Moisture blush</h2>
        <p className={p}>
          Acrylic sealers are slightly permeable. If moisture gets trapped
          under or within the coating, it scatters light and looks white. This
          often shows up after heavy rain, in shaded areas that stay damp, or
          where water sits on the surface.
        </p>
        <p className={p}>
          On solvent-based acrylic sealers, a light application of a compatible
          solvent or a solvent-based reseal can sometimes re-melt the coating
          and release the trapped moisture, clearing the haze. This only works
          on solvent-compatible acrylics. It won&rsquo;t fix water-based
          sealers, polyurethanes, or coatings that have genuinely failed.
          Always test a small area first.
        </p>

        <h2 className={h2}>Sealed while damp or applied too heavily</h2>
        <p className={p}>
          If whitening appeared within days or weeks of sealing, the cause is
          usually application. Concrete that hadn&rsquo;t dried enough, or
          sealer that was put on too thick, traps moisture or solvent under the
          film.
        </p>
        <p className={p}>
          Minor cases may respond to solvent revival. Widespread whitening
          usually means stripping the sealer, letting the concrete dry fully,
          and resealing with thin coats.
        </p>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="font-semibold text-stone-900">
            Sealer gone white?
          </p>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send us a photo and we&rsquo;ll tell you whether it can be revived
            or needs stripping. Call{" "}
            <a href={`tel:${business.phoneHref}`} className={aCls}>{business.phoneDisplay}</a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className={aCls}>{business.email}</a>.
          </p>
        </div>

        <h2 className={h2}>Incompatible products</h2>
        <p className={p}>
          Putting a new sealer over an old one that&rsquo;s a different type
          can cause whitening, peeling and poor adhesion. For example, some
          water-based products don&rsquo;t bond well over solvent-based
          acrylics. If you don&rsquo;t know what was used originally, the
          safest approach is to test first or strip back to bare concrete.
        </p>

        <h2 className={h2}>Efflorescence</h2>
        <p className={p}>
          Sometimes what looks like white sealer is actually efflorescence:
          mineral salts carried to the surface by moisture moving through the
          slab. It&rsquo;s usually powdery rather than cloudy, and it can form
          under the sealer.
        </p>
        <p className={p}>
          Efflorescence needs diagnosing before treatment. Acid-based
          efflorescence removers can work on some surfaces, but they can also
          etch and change the look of the concrete. If it keeps coming back,
          there&rsquo;s an ongoing moisture source that needs addressing.
        </p>

        <h2 className={h2}>Revive or strip?</h2>
        <ul className={ul}>
          <li>
            <strong>Revive</strong> may work when the sealer is solvent-based
            acrylic, still well bonded, and the whitening is a haze rather than
            flaking.
          </li>
          <li>
            <strong>Strip and reseal</strong> is usually needed when the sealer
            is peeling, bubbled, built up in layers, an unknown or mixed
            system, or when revival hasn&rsquo;t worked.
          </li>
        </ul>
        <p className={p}>
          Stripping exposed aggregate takes care. The stripper and pressure
          need to remove the coating without washing out paste or loosening
          stones. If the surface underneath has suffered too, mechanical
          restoration with{" "}
          <Link href="/honed-concrete-perth" className={aCls}>honing and resealing</Link>{" "}
          can reset it completely.
        </p>

        <h2 className={h2}>Preventing it next time</h2>
        <ul className={ul}>
          <li>
            Make sure the concrete is fully dry before sealing, following the
            sealer manufacturer&rsquo;s requirements.
          </li>
          <li>Apply thin, even coats and avoid puddling.</li>
          <li>
            Seal in the cooler part of the day, not on hot concrete in full
            sun.
          </li>
          <li>Use a sealer compatible with what&rsquo;s already there.</li>
          <li>
            Keep sprinklers and downpipes from dumping water on the surface.
          </li>
        </ul>
        <p className={p}>
          For the complete process, see{" "}
          <Link href="/blog/cleaning-resealing-honed-exposed-aggregate-perth" className={aCls}>
            Cleaning and Resealing Honed and Exposed Aggregate Concrete
          </Link>.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            White, patchy or peeling sealer in Perth?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            We diagnose, strip and reseal exposed aggregate across the Perth
            metro area, and where the surface itself has been damaged we hone
            it back to an even finish. Send a few photos and we&rsquo;ll tell
            you which problem you have and what fixing it costs.
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

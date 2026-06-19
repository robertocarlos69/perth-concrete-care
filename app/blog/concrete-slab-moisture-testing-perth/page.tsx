import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "concrete-slab-moisture-testing-perth";
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
    q: "How much does concrete slab moisture testing cost in Perth?",
    a: "A standard residential slab is a flat $250, which includes in-situ relative humidity (RH) probes, surface pH testing and a documented written report. Larger commercial slabs that need extra probe locations under ASTM F2170 are quoted on area. It's a small cost next to replacing a failed floor or losing a warranty claim.",
  },
  {
    q: "How long does slab moisture testing take?",
    a: "The in-situ probes need to reach equilibrium with the slab, which ASTM F2170 sets at a minimum of 24 hours, so it isn't an instant reading. In practice that means a short visit to place the probes, then a return the next day to take the readings and produce your report.",
  },
  {
    q: "What RH level is acceptable for hybrid flooring?",
    a: "Most hybrid (rigid SPC and WPC) flooring manufacturers in Australia ask for an in-situ RH reading at or below 75%, and many require a moisture barrier once the slab reads above that. Hybrid is more forgiving than solid timber, but the warranty still depends on a documented test, so we always check your specific product's data sheet.",
  },
  {
    q: "What happens if my slab is too wet?",
    a: "We won't lay over a slab that fails and hope for the best. If the reading is over the limit we talk you through the options, usually a moisture barrier or an epoxy moisture-suppression coating that brings the slab back within specification before flooring goes down.",
  },
  {
    q: "Do I really need a moisture test before new flooring?",
    a: "If you want your flooring manufacturer's warranty to stand, almost always yes. Nearly every hybrid, vinyl, timber and resilient flooring warranty requires a documented slab moisture test, and skipping it is the most common reason new floors fail and claims get rejected.",
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
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:underline">Guides</Link>
          <span>›</span>
          <span className="text-stone-900">Slab preparation</span>
        </div>

        {/* Title + byline */}
        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Concrete Slab Moisture Testing in Perth: Standards, Values and Cost
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span>By Rob, owner-operator at Perth Concrete Care</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        {/* Intro */}
        <p className={`${p} mt-8 text-lg`}>
          Most new-floor failures we get called to inspect come down to one
          thing: moisture in the slab. Lay hybrid planks, vinyl, timber or even
          glue-down carpet over concrete that hasn&apos;t dried enough and you
          get cupping, lifting, bubbling adhesive or a musty smell within months.
          It&apos;s also the quickest way to void your flooring
          manufacturer&apos;s warranty, because almost every warranty requires a
          documented moisture test first.
        </p>
        <p className={p}>
          That&apos;s why we offer in-situ concrete slab moisture testing across
          Perth, done to the relevant Australian Standards and handed over with a
          written report you can give your flooring installer, builder or
          supplier. Here&apos;s exactly what we measure, the values you should
          expect, how we do it, and what it costs.
        </p>

        {/* Why */}
        <h2 className={h2}>Why slab moisture testing matters</h2>
        <p className={p}>
          A new slab can hold construction water for months, and an older slab
          can keep drawing moisture up from the ground if there&apos;s no working
          vapour barrier beneath it. You can&apos;t judge that by touch or by how
          the surface looks. Hybrid and timber floors are especially sensitive,
          and a sealed floor laid over a damp slab traps that moisture with
          nowhere to go. Testing first is the difference between a floor that
          lasts and a warranty claim that gets rejected.
        </p>

        {/* Standards */}
        <h2 className={h2}>Which Australian Standards apply</h2>
        <p className={p}>
          Two standards guide how we do it:
        </p>
        <ul className={ul}>
          <li>
            <strong>AS 1884</strong> (Floor coverings, resilient sheet and tiles,
            installation practices) sets out moisture testing for resilient
            floors such as vinyl in Australia.
          </li>
          <li>
            <strong>ASTM F2170</strong> (determining relative humidity in
            concrete floor slabs using in-situ probes) is the internationally
            recognised in-situ RH method, and it&apos;s what most flooring
            manufacturers now reference in their warranties.
          </li>
        </ul>
        <p className={p}>
          We test to both, plus a surface pH check, because together they tell
          you whether the slab is genuinely ready rather than just dry on top.
        </p>

        {/* What we measure */}
        <h2 className={h2}>What we measure: RH and pH</h2>
        <p className={p}>
          <strong>Relative humidity (RH)</strong> is measured with probes set
          down inside the slab, which gives the real internal moisture level
          rather than a surface reading that dries out and misleads you.{" "}
          <strong>Surface pH</strong> matters because concrete is alkaline, and a
          slab that reads too high can chemically break down flooring adhesives.
          A floor can pass on one of these and fail on the other, so we check
          both.
        </p>

        {/* Values */}
        <h2 className={h2}>The values you should expect</h2>
        <p className={p}>
          Every flooring product sets its own limits, so the manufacturer&apos;s
          data sheet is always the final word, but as a general guide:
        </p>
        <ul className={ul}>
          <li>
            <strong>Relative humidity:</strong> most flooring systems require 75%
            RH or lower. Some vinyls and adhesives allow up to 80 to 85%. Above
            the limit you need a moisture barrier or a suppression coating.
          </li>
          <li>
            <strong>Surface pH:</strong> a reading of roughly 7 to 9 is the normal
            acceptable range. Above about 9 to 10, high alkalinity can attack
            adhesives and needs addressing.
          </li>
        </ul>
        <p className={p}>
          For <strong>hybrid flooring</strong> specifically, most rigid SPC and
          WPC manufacturers in Australia ask for in-situ RH at or below 75%, and
          many require a moisture barrier once the slab reads above that. Hybrid
          is more forgiving than solid timber, but the warranty still depends on a
          documented test, so we always check the result against your exact
          product before anything is laid.
        </p>

        {/* Process */}
        <h2 className={h2}>How we test, step by step</h2>
        <ol className="mt-4 space-y-3 text-stone-700 list-decimal pl-5 marker:font-bold marker:text-emerald-700">
          <li>
            <strong>Inspection.</strong> We look over the slab for age, visible
            damp, salt staining and cracks, and confirm the flooring you&apos;re
            installing so we test to the right specification.
          </li>
          <li>
            <strong>Drill and insert probes.</strong> Following ASTM F2170, we
            drill test holes to 40% of the slab depth for a slab drying from one
            side and insert sealed RH probe sleeves. The standard sets the number
            of test locations by area: three for the first 100 m², plus one for
            each additional 100 m².
          </li>
          <li>
            <strong>Equilibrate.</strong> The sealed probes are left to reach
            equilibrium with the slab, which ASTM F2170 sets at a minimum of 24
            hours. This is why moisture testing needs a short wait rather than an
            instant number.
          </li>
          <li>
            <strong>Read with calibrated gear.</strong> We take RH and temperature
            readings with calibrated, in-calibration meters, then run a surface pH
            test using distilled water and a calibrated method.
          </li>
          <li>
            <strong>Document.</strong> You get a written report with each probe
            location, depth, the RH, temperature and pH values, the date, and a
            clear pass or fail against your flooring&apos;s requirements. That
            report is what satisfies the warranty.
          </li>
        </ol>

        {/* Cost */}
        <h2 className={h2}>What it costs</h2>
        <p className={p}>
          Moisture testing is a flat <strong>$250 per slab</strong> for a
          standard residential job, which includes the in-situ RH probes, the
          surface pH test and the documented report. Larger commercial slabs that
          need extra probe locations under ASTM F2170 are quoted on area. Set
          against the cost of pulling up and replacing a failed floor, or losing a
          warranty claim, it&apos;s cheap insurance.
        </p>

        {/* If it fails / cracks */}
        <h2 className={h2}>If the slab is too wet, or cracked</h2>
        <p className={p}>
          If a slab reads over the limit, we won&apos;t lay over it and hope.
          We&apos;ll talk you through the options, usually a moisture barrier or
          an epoxy moisture-suppression coating that brings the slab back within
          specification.
        </p>
        <p className={p}>
          For cracks and joints we fill with a <strong>two-part epoxy resin</strong>{" "}
          rather than a flexible filler. A rigid two-part epoxy bonds hard to the
          concrete, carries the load and leaves a sound, level surface for the new
          flooring to sit on, which a soft caulk simply won&apos;t do. If the slab
          also needs flattening, that&apos;s covered on our{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>concrete grinding and prep</Link>{" "}
          page.
        </p>

        {/* What to expect */}
        <h2 className={h2}>What you can expect</h2>
        <p className={p}>
          In practice it&apos;s a short first visit to place the probes, a wait of
          at least a day while they equilibrate, then the readings and your
          report. We keep it tidy, the test holes are small and patched, and you
          walk away with documentation your builder, installer or flooring
          supplier can rely on.
        </p>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Laying new flooring over a slab in Perth?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Get the slab tested before you commit. Send the floor area and the
            flooring you&apos;re installing and we&apos;ll book in a moisture test
            and give you a documented result for your warranty.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#quote" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
              Book a moisture test
            </Link>
            <a href={`tel:${business.phoneHref}`} className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className={h2}>Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion faqs={faqs} />
        </div>
      </article>
    </main>
  );
}

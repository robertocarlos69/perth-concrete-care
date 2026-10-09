import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "cleaning-resealing-honed-exposed-aggregate-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Cleaning & Resealing Honed and Exposed Aggregate Concrete in Perth",
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
    q: "Can I pressure wash honed concrete?",
    a: "Yes, with care. Use moderate pressure, keep the nozzle moving, and avoid acid cleaners. Too much pressure held in one spot, or the wrong chemicals, can damage the honed finish in a way that only re-honing will fix.",
  },
  {
    q: "How often should exposed aggregate be resealed?",
    a: "Most acrylic-sealed exposed aggregate in Perth needs resealing every 2 to 3 years. Check by dripping water on the surface in a few spots, including the traffic areas. If it soaks in and darkens rather than beading, it's time.",
  },
  {
    q: "Can I reseal over old sealer?",
    a: "Only if the old sealer is sound and the new one is compatible with it. If the old coat is peeling, white or built up in layers, it usually needs stripping back first. Putting an incompatible sealer over an old one is one of the most common causes of peeling and whitening.",
  },
  {
    q: "Why did my new sealer go white?",
    a: "Usually trapped moisture, a coat applied too heavily, or an incompatible product over the old sealer. Sealing concrete that hasn't fully dried is the single biggest cause. Our guide on white exposed aggregate sealer walks through each cause and fix.",
  },
  {
    q: "Will honing remove every stain?",
    a: "Not always. Honing removes stains in the top layer of the concrete. Very deep stains, like oil that has soaked in over years, can go further than is practical to grind. We assess on site and tell you honestly what honing will and won't fix.",
  },
];

const toc = [
  { href: "#why-reseal", label: "Why concrete needs resealing in Perth" },
  { href: "#whats-on-the-surface", label: "Step 1: Work out what's on the surface" },
  { href: "#washing-honed", label: "Step 2: Pressure washing honed concrete" },
  { href: "#washing-exposed-aggregate", label: "Step 3: Pressure washing exposed aggregate" },
  { href: "#stains-before-sealing", label: "Step 4: Deal with stains before sealing" },
  { href: "#drying", label: "Step 5: Let it dry properly" },
  { href: "#resealing", label: "Step 6: Resealing" },
  { href: "#when-washing-isnt-enough", label: "When pressure washing isn't enough" },
  { href: "#maintenance", label: "Maintenance intervals" },
  { href: "#faq", label: "Frequently asked questions" },
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
            Cleaning and Resealing Honed and Exposed Aggregate Concrete
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
              src="/gallery/professional-concrete-driveway-cleaning-perth.webp"
              alt="Pressure cleaning an exposed aggregate driveway with a rotary surface cleaner in Perth"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            Cleaning an exposed aggregate driveway with a rotary surface
            cleaner. The clean and uncleaned halves show how much grime an
            unsealed surface holds.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          Honed concrete and exposed aggregate both look their best for years if
          they&rsquo;re cleaned and resealed properly. Get the method wrong,
          though, and a simple clean can leave you with etched paste, loose
          stones or a sealer that turns white within weeks.
        </p>
        <p className={p}>
          This guide covers how to clean each finish, how to reseal it, and how
          to tell when a stain is beyond washing and needs to be honed out.
        </p>

        <nav className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm" aria-label="Table of contents">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            In this guide
          </p>
          <ol className="mt-3 space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-stone-700 hover:text-emerald-700 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="why-reseal" className={h2}>Why concrete needs resealing in Perth</h2>
        <p className={p}>
          Sealers don&rsquo;t last forever, and Perth conditions are hard on
          them. Strong UV breaks down topical sealers, hot surfaces speed up
          wear, and bore water reticulation leaves rust staining on unprotected
          concrete. Coastal properties also deal with salt air.
        </p>
        <p className={p}>
          As a general guide, topical acrylic sealers on driveways and outdoor
          areas often need recoating every 2 to 3 years. Penetrating sealers
          usually last longer, but they still lose effectiveness over time. The
          surest sign it&rsquo;s time to reseal is water no longer beading on
          the surface, or the finish looking dull, patchy or stained.
        </p>

        <h2 id="whats-on-the-surface" className={h2}>
          Step 1: Work out what&rsquo;s already on the surface
        </h2>
        <p className={p}>
          Before you clean or reseal anything, find out what sealer is already
          there. This affects how you clean and which new sealer will bond.
        </p>
        <ul className={ul}>
          <li>
            <strong>Topical sealer</strong> (acrylic, polyurethane, epoxy):
            forms a film on top. Usually has a sheen or wet look, and you may
            see it peeling or wearing in traffic areas.
          </li>
          <li>
            <strong>Penetrating sealer</strong> (silane, siloxane, silicate):
            soaks into the concrete. The surface looks natural and unchanged,
            but water beads on it while it&rsquo;s still working.
          </li>
          <li>
            <strong>No sealer, or sealer worn out:</strong> water darkens the
            concrete and soaks in quickly.
          </li>
        </ul>
        <p className={p}>
          A quick test is to drip some water on a few spots, including
          high-traffic areas. If it beads, there&rsquo;s still protection. If it
          darkens and soaks in, the sealer has worn through there. If
          you&rsquo;re unsure what type of topical sealer was used, ask the
          original installer or test a small hidden area before committing to a
          product. Putting an incompatible sealer over an old one is one of the
          most common causes of peeling and whitening.
        </p>

        <h2 id="washing-honed" className={h2}>Step 2: Pressure washing honed concrete</h2>
        <p className={p}>
          <Link href="/honed-concrete-perth" className={aCls}>Honed concrete</Link>{" "}
          has been ground back to expose a smooth, fine finish. That finish is
          the whole point, so cleaning should protect it.
        </p>
        <ul className={ul}>
          <li>
            Use a rotary surface cleaner rather than a bare wand where
            possible. It gives an even clean without stripes.
          </li>
          <li>
            Keep pressure moderate and the nozzle moving. Too much pressure
            held in one spot can open up the surface and leave visible marks.
          </li>
          <li>
            If the honed surface has a topical sealer, you&rsquo;re cleaning
            the coating, not the concrete. Harsh chemicals or high pressure can
            damage or partly strip it, leaving a patchy finish.
          </li>
          <li>
            If it has a penetrating sealer, the surface itself takes the wear.
            Use a pH-neutral cleaner suited to sealed concrete.
          </li>
          <li>
            Avoid acid-based cleaners on honed concrete. Acid etches the cement
            paste and leaves dull marks that can only be fixed by honing.
          </li>
        </ul>

        <h2 id="washing-exposed-aggregate" className={h2}>
          Step 3: Pressure washing exposed aggregate
        </h2>
        <figure className="mt-6">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/gallery/exposed-aggregate-driveway-pressure-washing-perth.webp"
              alt="Pressure washing an exposed aggregate driveway with a surface cleaner in Perth"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 448px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            A surface cleaner gives an even result on exposed aggregate without
            chewing the cement paste out from around the stones.
          </figcaption>
        </figure>
        <p className={p}>
          Exposed aggregate can usually handle firmer cleaning than honed
          concrete, but it still has limits.
        </p>
        <ul className={ul}>
          <li>
            The stones are held in by cement paste. Too much pressure,
            especially along edges, joints and old cracks, can wash paste out
            and loosen stones.
          </li>
          <li>
            Check the condition before you start. Older or poorly finished
            aggregate may already have weak spots.
          </li>
          <li>
            A surface cleaner gives a more even result than a wand on driveways
            and paths.
          </li>
          <li>
            Treat mould, algae and black spots with a suitable cleaner and
            allow dwell time, rather than blasting them off with pressure.
          </li>
        </ul>
        <p className={p}>
          If the existing sealer is failing, peeling or white, read{" "}
          <Link href="/blog/exposed-aggregate-sealer-turned-white-perth" className={aCls}>
            Why Has My Exposed Aggregate Sealer Turned White?
          </Link>{" "}
          before you reseal. Sealing over a failed coat rarely ends well.
        </p>

        <h2 id="stains-before-sealing" className={h2}>
          Step 4: Deal with stains before sealing
        </h2>
        <p className={p}>
          Sealing locks in whatever is on the surface, so stains need to be
          treated first. Some respond well to cleaning products:
        </p>
        <ul className={ul}>
          <li>
            <strong>Fresh oil and tyre marks:</strong> a concrete degreaser or
            poultice.
          </li>
          <li>
            <strong>Mould, algae and black spots:</strong> a soft wash cleaner
            with proper dwell time.
          </li>
          <li>
            <strong>Leaf and tannin stains:</strong> an oxygen-based cleaner.
          </li>
          <li>
            <strong>Light bore water rust:</strong> a dedicated rust or bore
            stain remover. See{" "}
            <Link href="/blog/remove-bore-water-stains-concrete-perth" className={aCls}>
              How to Remove Bore Water Stains from Concrete
            </Link>.
          </li>
          <li>
            <strong>White powdery deposits (efflorescence):</strong> identify
            the cause first. Acid-based removers can work on some surfaces but
            will etch honed concrete, so never use them there without testing.
          </li>
        </ul>
        <p className={p}>
          Other stains won&rsquo;t come out with chemicals at all, because
          they&rsquo;re either too deep or they&rsquo;re physical damage rather
          than a stain. Etching, paint drips, burns and old soaked-in oil
          usually need mechanical restoration. See{" "}
          <Link href="/blog/concrete-stains-honing-not-chemicals-perth" className={aCls}>
            Concrete Stains That Need Honing Out, Not Chemicals
          </Link>.
        </p>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
          <p className="font-semibold text-stone-900">
            Not sure what you&rsquo;re dealing with?
          </p>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send us a photo and we&rsquo;ll tell you whether it&rsquo;ll clean
            up or needs honing. Call{" "}
            <a href={`tel:${business.phoneHref}`} className={aCls}>{business.phoneDisplay}</a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className={aCls}>{business.email}</a>.
          </p>
        </div>

        <h2 id="drying" className={h2}>Step 5: Let it dry properly</h2>
        <p className={p}>
          Sealing damp concrete is a leading cause of white, cloudy sealer.
          There&rsquo;s no single drying time that suits every job. It depends
          on the sealer, the weather, shade, and how porous the slab is.
        </p>
        <p className={p}>
          Follow the sealer manufacturer&rsquo;s requirements for surface
          moisture and conditions. As a rule, the surface should look fully dry
          and even in colour, with no darker damp patches, especially in shaded
          areas and along joints. Avoid sealing when rain or heavy dew is
          likely before the sealer cures.
        </p>

        <h2 id="resealing" className={h2}>Step 6: Resealing</h2>
        <h3 className={h3}>Choosing a sealer</h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left">
                <th className="px-4 py-3 font-bold text-stone-900">Sealer type</th>
                <th className="px-4 py-3 font-bold text-stone-900">Look</th>
                <th className="px-4 py-3 font-bold text-stone-900">Typical use</th>
                <th className="px-4 py-3 font-bold text-stone-900">Notes</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Solvent-based acrylic</td>
                <td className="px-4 py-3">Wet look, enhanced colour</td>
                <td className="px-4 py-3">Exposed aggregate driveways and paths</td>
                <td className="px-4 py-3">Popular for washed agg; can whiten if moisture is trapped or application is poor</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Water-based acrylic</td>
                <td className="px-4 py-3">Satin or low sheen</td>
                <td className="px-4 py-3">Lower-odour option, some indoor areas</td>
                <td className="px-4 py-3">Usually less colour enhancement than solvent-based</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Penetrating (silane/siloxane)</td>
                <td className="px-4 py-3">Natural, no sheen</td>
                <td className="px-4 py-3">Honed concrete, areas where slip resistance matters</td>
                <td className="px-4 py-3">Repels water and stains without a film; longer lasting</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">Polyurethane or hybrid</td>
                <td className="px-4 py-3">Gloss or satin, tough film</td>
                <td className="px-4 py-3">High-wear areas</td>
                <td className="px-4 py-3">More durable, more involved to apply and remove</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={h3}>Application tips</h3>
        <ul className={ul}>
          <li>
            Make sure the new sealer is compatible with what&rsquo;s already on
            the surface.
          </li>
          <li>
            Apply thin, even coats. Heavy coats trap solvent and moisture and
            are a common cause of whitening and bubbling.
          </li>
          <li>
            Apply in the cooler part of the day. Sealing hot concrete in full
            sun can cause bubbling and poor bonding.
          </li>
          <li>
            For pool surrounds, alfresco areas and sloped driveways, add an
            anti-slip additive to topical sealers. Gloss sealers can be very
            slippery when wet.
          </li>
          <li>
            Keep foot traffic off until the sealer is touch dry, and cars off
            for the time the manufacturer specifies.
          </li>
        </ul>

        <h2 id="when-washing-isnt-enough" className={h2}>
          When pressure washing isn&rsquo;t enough
        </h2>
        <p className={p}>
          Cleaning and resealing work well when the surface is basically sound.
          They won&rsquo;t fix:
        </p>
        <ul className={ul}>
          <li>Stains that have soaked deep into the concrete</li>
          <li>Acid etching, swirl marks or patchy damage from previous cleaning</li>
          <li>Topical sealer that&rsquo;s peeling, bubbling or built up in layers</li>
          <li>Uneven, worn or dull honed finishes</li>
          <li>Paint, render or epoxy spills</li>
        </ul>
        <p className={p}>
          In these cases the surface needs to be stripped,{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>ground</Link>{" "}
          or honed back to sound concrete before resealing. On honed concrete,
          that usually means re-honing to restore an even finish. On exposed
          aggregate,{" "}
          <Link href="/blog/honing-exposed-aggregate-perth" className={aCls}>
            grinding changes the look
          </Link>
          , cutting the stones flat to create a honed aggregate finish, so
          it&rsquo;s a finish choice as much as a repair.
        </p>

        <h2 id="maintenance" className={h2}>Maintenance intervals</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[480px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left">
                <th className="px-4 py-3 font-bold text-stone-900">Task</th>
                <th className="px-4 py-3 font-bold text-stone-900">How often</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Sweep and rinse</td>
                <td className="px-4 py-3">As needed</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Light wash with pH-neutral cleaner</td>
                <td className="px-4 py-3">Every 6 to 12 months</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Check sealer (water bead test)</td>
                <td className="px-4 py-3">Every year</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3">Reseal topical acrylic</td>
                <td className="px-4 py-3">Every 2 to 3 years</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Reseal penetrating sealer</td>
                <td className="px-4 py-3">As per manufacturer, usually longer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          Bore water areas need more frequent checks. Adjust reticulation so it
          doesn&rsquo;t spray onto concrete where possible.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Need your concrete restored rather than just cleaned?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Perth Concrete Care specialises in honing, grinding and resealing
            across the Perth metro area. For a straightforward clean and seal,
            ask about our{" "}
            <Link href="/#services" className={aCls}>water pressure cleaning service</Link>
            . Either way, send a few photos and we&rsquo;ll give you honest
            advice and a fixed written quote.
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

        <h2 id="faq" className={h2}>Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion faqs={faqs} />
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            More in this series
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/blog/remove-bore-water-stains-concrete-perth" className={aCls}>
                How to Remove Bore Water Stains from Concrete
              </Link>
            </li>
            <li>
              <Link href="/blog/exposed-aggregate-sealer-turned-white-perth" className={aCls}>
                Why Has My Exposed Aggregate Sealer Turned White?
              </Link>
            </li>
            <li>
              <Link href="/blog/concrete-stains-honing-not-chemicals-perth" className={aCls}>
                Concrete Stains That Need Honing Out, Not Chemicals
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "warehouse-floor-dust-control-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: "How to Stop a Warehouse Floor Dusting: Scrubbing, Densification & Sealing",
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
    q: "Why does my warehouse floor keep producing dust?",
    a: "The dust is the surface of the slab itself breaking down. Forklift tyres generate enormous abrasion over thousands of passes a week, and that constant friction wears the cement paste near the surface into fine powder. Sweeping moves it around, and the slab keeps making more until the surface is strengthened.",
  },
  {
    q: "Is concrete dust in a warehouse a health risk?",
    a: "It can be. Concrete dust contains crystalline silica, the same material behind the silica regulations that reshaped the stone benchtop industry. Airborne levels vary from site to site, but a floor that constantly sheds silica dust into the workplace is worth treating as a safety issue, not just a housekeeping one.",
  },
  {
    q: "Do I need an epoxy coating to stop the dusting?",
    a: "Usually not. If the objective is simply to stop a slab dusting, strengthening the concrete itself with a densifier and penetrating sealer is often the more practical, economical long-term fix. Coatings still have their place where you need chemical resistance, line marking or colour, but in high-traffic forklift zones a film will eventually scratch or wear, while a densified floor is harder from within with no film to fail.",
  },
  {
    q: "What does a concrete densifier actually do?",
    a: "It's a silicate-based liquid that soaks into the slab and reacts with the free lime in the concrete to form additional calcium silicate hydrate, the same compound that gives concrete its strength. In plain terms, it converts the soft chalky material near the surface into hard concrete, so forklift traffic stops wearing it into powder.",
  },
  {
    q: "Can the warehouse stay operational during the work?",
    a: "Usually, yes. We can stage the treatment area by area and work around your operation, and there's no thick coating cure time locking the floor out for days. We plan timing with you so downtime is minimal.",
  },
  {
    q: "How much does warehouse floor dust treatment cost in Perth?",
    a: "It's quoted on area and condition, because a sound slab that needs a scrub and densifier is a very different job to one carrying old curing compounds that needs a grind first. Send your approximate floor area, a few photos and how the space is used, and we'll come back with honest advice and a fixed written price.",
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
          <span className="text-stone-900">Industrial floors</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Warehouse Floor Dusting? Here&apos;s How to Stop It for Good
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
              src="/gallery/dusty-warehouse-perth-concrete-care-wangara.webp"
              alt="Fine concrete dust on a warehouse floor in Wangara, Perth before treatment"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            A Wangara warehouse before treatment. The fine grey dust on the slab
            isn&apos;t coming in from outside. It&apos;s the floor itself wearing
            into powder.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          Warehouse managers across Perth contact us with the same frustrating
          problem. A fine grey dust keeps settling on stock, shelving, machinery
          and work benches, and no matter how often the floor is swept, it always
          comes back.
        </p>
        <p className={p}>
          The dust usually isn&apos;t being tracked in from outside. It&apos;s
          coming off the concrete slab itself.
        </p>
        <p className={p}>
          The good news is that in most cases the answer isn&apos;t replacing the
          floor or installing an expensive coating. By properly preparing the
          concrete, strengthening it with a densifier and protecting it with a
          penetrating sealer, dusting can be dramatically reduced while extending
          the life of the slab.
        </p>

        <h2 className={h2}>Why warehouse floors produce dust</h2>
        <p className={p}>
          Concrete is strong, but the surface of a slab is its weakest point.
          Rubber forklift tyres generate enormous abrasion over thousands of
          passes every week. Every turn, brake and acceleration creates friction
          against the slab, and that constant wear slowly breaks down the cement
          paste near the surface into fine powder. Sweeping removes today&apos;s
          dust. It doesn&apos;t stop tomorrow&apos;s. Until the concrete itself
          is strengthened, the slab just keeps making more.
        </p>
        <p className={p}>
          There&apos;s also a health side to this. Concrete dust contains
          crystalline silica, the same material behind the silica regulations
          that reshaped the stone benchtop industry. Airborne levels vary from
          site to site, but a floor that constantly sheds silica dust into the
          workplace is worth taking seriously as a safety issue, not just a
          housekeeping one.
        </p>
        <p className={p}>
          Rather than covering the problem with a surface film, the better
          starting point is usually strengthening the concrete itself.
        </p>

        <h2 className={h2}>Step 1: Auto scrubbing the floor</h2>
        <figure className="mt-6">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/gallery/autoscrubber-perth-concrete-care.webp"
              alt="Industrial auto scrubber cleaning a warehouse concrete floor in Perth"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 448px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            Every job starts with a proper industrial scrub, not a broom.
          </figcaption>
        </figure>
        <p className={p}>
          Every job starts with a thorough mechanical clean using an industrial
          auto scrubber. This strips off years of accumulated dust, tyre marks,
          oils and embedded grime.
        </p>
        <p className={p}>
          This step matters more than most people realise. Plenty of floors
          improve dramatically after a proper industrial scrub alone. Just as
          importantly, we can&apos;t assess the actual condition of the concrete
          until the contamination is off it. A floor that looks badly dusted is
          sometimes just carrying years of grime, while a floor that looks fine
          can turn out soft underneath. Only after a proper clean can the right
          treatment be recommended.
        </p>

        <h2 className={h2}>Step 2: Mechanical grinding, when required</h2>
        <p className={p}>
          Not every warehouse needs grinding. If the slab is sound and simply
          dusting from surface wear, it can often go straight from scrubbing to
          densification.
        </p>
        <p className={p}>
          But if the floor is carrying old curing compounds, previous sealers,
          contamination or weak surface concrete, a{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>light diamond grind</Link>{" "}
          may be recommended. Grinding removes the weak material and opens the
          pores of the concrete so the densifier can penetrate deeper and react
          more effectively.
        </p>
        <p className={p}>
          Every slab is different, which is why preparation should always be
          based on the condition of the floor rather than a one size fits all
          approach. We&apos;ll tell you straight either way.
        </p>

        <h2 className={h2}>Step 3: Concrete densification</h2>
        <p className={p}>
          This is where the dusting actually gets fixed. A concrete densifier is
          a silicate based liquid that soaks into the slab and reacts with the
          free lime in the concrete to form additional calcium silicate hydrate,
          the same compound that gives concrete its strength in the first place.
        </p>
        <p className={p}>
          In plain terms, it converts the soft chalky material near the surface
          into hard concrete. The slab becomes denser, harder and far more
          resistant to abrasion, so forklift traffic stops wearing it into
          powder.
        </p>

        <h3 className={h3}>Choosing the right densifier</h3>
        <p className={p}>
          You&apos;ll see sodium, potassium and lithium silicates on the market.
          Sodium was one of the earliest densifiers used and is the budget
          option, but it can leave white residue and is rarely specified on
          modern floors. Lithium reacts quickly, leaves very little residue, and
          is commonly specified on{" "}
          <Link href="/concrete-polishing-perth" className={aCls}>polished concrete</Link>{" "}
          and dense burnished floors where residue matters.
        </p>
        <p className={p}>
          For open industrial warehouse slabs, we commonly use a potassium
          silicate densifier. It penetrates deep into porous industrial
          concrete, builds excellent hardness and offers outstanding value at
          warehouse scale. The right densifier is the one matched to the
          condition, density and porosity of your slab, not the most expensive
          one on the shelf, and that&apos;s an assessment we make on site.
        </p>

        <figure className="mt-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <Image
              src="/gallery/densified-warehouse-perth-concrete-care-wangara.webp"
              alt="Densified and sealed warehouse concrete slab in Wangara, Perth after treatment"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            A densified and sealed warehouse floor on another Wangara job.
            Harder, tighter surface, and the dusting stops.
          </figcaption>
        </figure>

        <h2 className={h2}>Step 4: Penetrating concrete sealer</h2>
        <p className={p}>
          Once the slab is densified, we protect it with a penetrating sealer.
          Unlike acrylic, epoxy or polyurethane coatings, penetrating sealers
          soak into the concrete rather than forming a film on top.
        </p>
        <p className={p}>
          For a warehouse, that means there&apos;s nothing to peel, flake or
          delaminate under forklift traffic. The concrete still breathes, but the
          sealer reduces liquid absorption, so oils and spills sit at the surface
          where they can be cleaned up instead of soaking in and staining. The
          floor becomes easier to clean and stays cleaner between scrubs, with
          far less maintenance than a surface coating.
        </p>

        <h2 className={h2}>Optional step: burnishing</h2>
        <p className={p}>
          Depending on the specification and the finish required, the floor can
          then be burnished with a high speed burnisher. The heat and friction
          close the surface further, refine the profile and tighten the finish,
          improving both durability and appearance. Not every warehouse needs
          this step, but on suitable floors it adds real benefit.
        </p>

        <h2 className={h2}>Why we don&apos;t automatically recommend coatings</h2>
        <p className={p}>
          Epoxy, polyurethane and other resin coatings absolutely have their
          place. We regularly install{" "}
          <Link href="/epoxy-flake-flooring-perth" className={aCls}>epoxy flooring</Link>{" "}
          where customers need chemical resistance, line marking, decorative
          finishes or coloured floors.
        </p>
        <p className={p}>
          But if the objective is simply to stop a slab from dusting,
          strengthening the concrete itself is often the more practical and
          economical long term solution. Surface coatings in high traffic
          forklift environments will eventually scratch, wear or need
          replacement, particularly in turning zones. A densified and sealed
          floor is harder from within, with no film to fail.
        </p>

        <h2 className={h2}>What you&apos;ll notice afterwards</h2>
        <p className={p}>Warehouse managers usually notice:</p>
        <ul className="mt-4 space-y-2 text-stone-700 list-disc pl-5 marker:text-emerald-600">
          <li>Less dust settling on stock and racking</li>
          <li>Cleaner machinery and work benches</li>
          <li>Far less time spent sweeping</li>
          <li>Easier, more effective auto scrubbing</li>
          <li>A noticeably harder, tighter slab surface</li>
          <li>Better long-term durability under forklift traffic</li>
        </ul>
        <p className={p}>
          For many facilities, the biggest saving isn&apos;t the treatment
          itself. It&apos;s the reduction in ongoing cleaning, dust contamination
          and maintenance. For most warehouses, the treatment pays for itself in
          reduced operating costs over the life of the building.
        </p>
        <p className={p}>
          We do this work right across Perth&apos;s industrial areas, including{" "}
          <Link href="/concrete-flooring/wangara" className={aCls}>Wangara</Link>,{" "}
          <Link href="/concrete-flooring/malaga" className={aCls}>Malaga</Link>,{" "}
          <Link href="/concrete-flooring/osborne-park" className={aCls}>Osborne Park</Link>{" "}
          and{" "}
          <Link href="/concrete-flooring/canning-vale" className={aCls}>Canning Vale</Link>.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Need help with a dusty warehouse floor in Perth?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Every warehouse is different. Some floors only need a thorough scrub
            and densifier. Others benefit from a light grind first. Send your
            approximate floor area, a few photos of the slab and a rough idea of
            how the space is used, and we&apos;ll give you honest advice on the
            best approach.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#quote" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
              Get a free assessment
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

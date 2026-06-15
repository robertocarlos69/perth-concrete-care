import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Metallic Epoxy Flooring Perth — From $160/m²",
  description:
    "Metallic epoxy flooring Perth for showrooms, feature garages and living areas. High-gloss, marbled 3D resin floors with custom colours and durable topcoats. Free quotes.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/metallic-epoxy-flooring-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/metallic-epoxy-floor-wanneroo-perth.webp",
        alt: "High-gloss metallic epoxy floor with marbled effect in Wanneroo, Perth",
      },
    ],
    title: "Metallic Epoxy Flooring Perth — From $160/m² | Perth Concrete Care",
    description:
      "Metallic epoxy flooring Perth for showrooms, feature garages and living areas. High-gloss, marbled 3D resin floors with custom colours and durable topcoats. Free quotes.",
    url: "https://perthconcretecare.com.au/metallic-epoxy-flooring-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

const benefits = [
  ["One-of-a-kind floor", "Metallic pigments move and pool during installation, so no two floors are ever the same. Yours is genuinely unique - a real talking point."],
  ["Showpiece high gloss", "A deep, reflective, marbled finish with 3D visual depth that looks like flowing stone or liquid metal - far beyond a plain coating."],
  ["Seamless & hygienic", "No grout lines or joints to trap dirt. A sealed metallic floor wipes clean and suits showrooms, studios and living spaces."],
  ["Custom colours", "From subtle pearl and charcoal to bold copper, blue or black-and-silver. We match the look to your space and lighting."],
  ["Hard-wearing topcoat", "A protective clear topcoat handles light-to-medium traffic and makes the floor easy to maintain for years."],
  ["Brightens the room", "The reflective surface bounces light around, lifting showrooms, entries and interiors without extra lighting."],
];

const processSteps = [
  ["Design & sample", "We confirm your colour direction and movement style - from subtle and understated to dramatic and bold."],
  ["Prep the slab", "Diamond grinding and repair to a clean, flat, properly profiled base so the metallic finish lays right."],
  ["Base coat", "A pigmented base coat is applied as the foundation colour for the metallic layer."],
  ["Metallic layer", "Metallic pigments are applied and worked with controlled techniques to create depth and movement - never muddy swirls."],
  ["Detail & de-nib", "Edges, pinholes and minor texture are addressed so the surface is clean before the topcoat."],
  ["Topcoat & cure", "A protective clear topcoat is applied, then we provide cure times and maintenance advice at handover."],
];

export default function Page() {
  const faqs = [
    {
      q: "How much does metallic epoxy flooring cost in Perth?",
      a: "Metallic epoxy flooring in Perth typically costs $160-$180 per square metre installed, including surface preparation, base and metallic coats, and a protective topcoat. Highlights, multiple colours and complex effects sit at the upper end. Final pricing depends on slab condition, area and design.",
    },
    {
      q: "Are metallic epoxy floors slippery?",
      a: "A smooth metallic finish can be slick when wet, so for areas that may get wet we add a fine anti-slip additive to the topcoat. For dry interiors and showrooms it's no more slippery than polished tile.",
    },
    {
      q: "Will my floor look exactly like the photo?",
      a: "No - and that's the point. Metallic floors vary with the slab, the pigment batch and the movement technique, so each one is unique. We aim for the same style and colour direction you choose, but every metallic floor is one-of-one.",
    },
    {
      q: "Can metallic epoxy go in a garage?",
      a: "It can, and it makes a stunning feature garage. That said, for working garages and workshops a flake system is usually more practical and hard-wearing. Metallic is best for showpiece garages, showrooms and light-to-medium traffic areas.",
    },
    {
      q: "What's the difference between metallic epoxy and flake flooring?",
      a: "Flake flooring uses coloured vinyl chips broadcast into the coating for a textured, hard-wearing, speckled finish - ideal for working garages. Metallic epoxy uses reflective pigments for a smooth, marbled, high-gloss decorative look - ideal for feature and display spaces.",
    },
    {
      q: "Does the slab need to be perfect?",
      a: "No, but it needs to be properly prepared. We grind, repair and profile the surface first - the metallic finish shows everything underneath, so good prep is essential to a clean result.",
    },
    {
      q: "Does metallic epoxy fade or yellow?",
      a: "We use a UV-stable topcoat suited to the location. Metallic floors are best kept out of constant harsh direct sun, but with the right topcoat they hold their colour well indoors and in covered areas.",
    },
    {
      q: "How long does a metallic epoxy floor take?",
      a: "Most residential feature floors take 2-4 days including preparation, base, metallic layer, topcoat and cure time between coats. We confirm timing in your quote.",
    },
  ];

  const jsonLd = servicePageJsonLd({
    name: "Metallic Epoxy Flooring Perth",
    serviceType: "Metallic epoxy flooring",
    description:
      "Metallic epoxy flooring across the Perth metro area for showrooms, feature garages, studios and decorative interior floors with durable topcoats.",
    url: `${siteUrl}/metallic-epoxy-flooring-perth`,
    breadcrumbName: "Metallic Epoxy Flooring Perth",
    faqs,
  });

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>&rsaquo;</span>
          <span className="text-stone-900">Metallic Epoxy Flooring Perth</span>
        </div>

        <div className="mt-6 grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Metallic Epoxy Flooring Perth
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-700 leading-relaxed">
              A premium decorative resin floor with depth, movement and
              high-gloss shine - from $160/m&sup2;. Metallic pigments are worked
              into the coating to create a marbled, 3D effect like flowing stone
              or liquid metal. Every floor is one-of-one.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] text-stone-700">
              {[
                "Unique marbled, high-gloss decorative finish",
                "Custom colours to suit your space and lighting",
                "Seamless, hygienic and easy to wipe clean",
                "Durable protective topcoat for lasting shine",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+61448483226" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
                Call 0448 483 226
              </a>
              <Link href="/#quote" className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors">
                Get a free quote
              </Link>
            </div>
            <p className="mt-4 text-sm text-stone-500">
              Free on-site quotes - Most enquiries answered within 24 hours - Page updated June 2026
            </p>
          </div>

          <figure>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200 shadow-lg">
              <Image
                src="/gallery/metallic-epoxy-floor-wanneroo-perth.webp"
                alt="High-gloss metallic epoxy floor with marbled effect in Wanneroo, Perth"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone-600">
              Metallic epoxy floor - Wanneroo, Perth
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BENEFITS - white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Why choose a metallic epoxy floor?
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Metallic epoxy is the showpiece end of resin flooring - a seamless,
            high-gloss, marbled surface that turns a plain slab into the feature
            of the room.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
                <h3 className="text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON - stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Metallic epoxy vs flake flooring vs polished concrete
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          Metallic epoxy is the decorative showpiece option. Flake flooring is
          the practical, hard-wearing choice for working garages, and polished
          concrete suits indoor living areas.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
          <table className="w-full min-w-[640px] text-sm border-collapse bg-white">
            <thead>
              <tr className="text-left border-b border-stone-200 bg-stone-50">
                <th className="px-5 py-4 font-bold text-stone-900"> </th>
                <th className="px-5 py-4 font-bold text-emerald-700">Metallic epoxy</th>
                <th className="px-5 py-4 font-bold text-stone-900">Epoxy flake</th>
                <th className="px-5 py-4 font-bold text-stone-900">Polished concrete</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Best for</td>
                <td className="px-5 py-4">Showrooms, feature garages, interiors</td>
                <td className="px-5 py-4">Working garages, workshops</td>
                <td className="px-5 py-4">Indoor living areas</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Look</td>
                <td className="px-5 py-4">Marbled, high-gloss 3D</td>
                <td className="px-5 py-4">Speckled, textured</td>
                <td className="px-5 py-4">Smooth, refined</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Durability</td>
                <td className="px-5 py-4">Light-to-medium traffic</td>
                <td className="px-5 py-4">Heavy, hot-tyre resistant</td>
                <td className="px-5 py-4">Very high</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-stone-900">Cost guide</td>
                <td className="px-5 py-4">$160-$180/m2</td>
                <td className="px-5 py-4">$80-$100/m2</td>
                <td className="px-5 py-4">$140-$220/m2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-stone-600">
          See <Link href="/epoxy-flake-flooring-perth" className="font-semibold text-emerald-700 hover:underline">epoxy flake floors</Link> or <Link href="/concrete-polishing-perth" className="font-semibold text-emerald-700 hover:underline">polished concrete</Link>, or send a photo with the <Link href="/#quote" className="font-semibold text-emerald-700 hover:underline">quote form</Link> and we&apos;ll recommend the right finish.
        </p>
      </section>

      {/* PROCESS - white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Our metallic epoxy process
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            A metallic floor is built up in layers. Control at every stage is what
            separates a stunning result from a muddy one.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([title, desc], i) => (
              <li key={title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm">
                <div className="text-sm font-bold text-emerald-700">Step {i + 1}</div>
                <h3 className="mt-2 text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-3 text-sm text-stone-700 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE AREA + RELATED - stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Price guide</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-stone-900">$160-$180</span>
              <span className="text-sm font-medium text-stone-500">/m&sup2;</span>
            </div>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Typical installed price for a metallic epoxy floor. Highlights,
              multiple colours and complex effects sit at the upper end. Final
              price depends on slab condition, area and design.
            </p>
            <Link href="/#quote" className="mt-6 inline-block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors">
              Request a free quote
            </Link>
            <p className="mt-3 text-xs text-stone-500">
              Fixed-price written quote - No obligation - We don&apos;t hard-sell
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Service area</h2>
            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              The Perth metro area, north and south of the river, from the
              Butler corridor and Joondalup to Rossmoyne, Canning Vale and
              Fremantle.
            </p>
            <h3 className="mt-6 text-sm font-bold text-stone-800">Typical metallic jobs</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-stone-700 space-y-1.5">
              <li>Showrooms &amp; retail interiors</li>
              <li>Feature garages</li>
              <li>Studios &amp; living areas</li>
              <li>Entries &amp; display spaces</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Related services</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Epoxy flake floors &rarr;</Link>
              <Link href="/concrete-polishing-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete polishing &rarr;</Link>
              <Link href="/concrete-grinding-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete grinding &rarr;</Link>
              <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Contact &rarr;</Link>
            </div>

            <div className="mt-5 border-t border-stone-200 pt-4">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                Areas we serve
              </div>
              <div className="mt-3 grid gap-3 text-sm">
                <Link href="/concrete-flooring/wanneroo" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Wanneroo &rarr;</Link>
                <Link href="/concrete-flooring/joondalup" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Joondalup &rarr;</Link>
                <Link href="/concrete-flooring/mindarie" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Mindarie &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Metallic epoxy flooring FAQ
          </h2>
          <p className="mt-2 text-sm text-stone-600">Click a question to expand.</p>
          <div className="mt-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="bg-stone-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Want a floor that turns heads?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Tell us the space and your colour ideas, send a few photos, and
              we&apos;ll come back with a clear scope and a fixed written price.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/#quote" className="rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-stone-950 hover:bg-emerald-400 transition-colors">Get a free quote</Link>
            <a href="tel:+61448483226" className="rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors">Call 0448 483 226</a>
          </div>
        </div>
      </section>
    </main>
  );
}

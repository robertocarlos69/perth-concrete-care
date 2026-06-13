import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import PolishingGallery from "./PolishingGallery";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Concrete Polishing Perth",
  description:
    "Concrete polishing Perth for homes, warehouses, showrooms and commercial interiors. Full mechanical grind, densify and polish process for a durable, refined finish.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-polishing-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/cottesloe-polished-concrete-interior-floor-perth.webp",
        alt: "Polished concrete interior floor in Cottesloe home by Perth Concrete Care",
      },
    ],
    type: "website",
    url: "https://perthconcretecare.com.au/concrete-polishing-perth",
    title: "Concrete Polishing Perth | Perth Concrete Care",
    description:
      "Concrete polishing Perth for homes, warehouses, showrooms and commercial interiors. Full mechanical grind, densify and polish process for a durable, refined finish.",
  },
};

const benefits = [
  {
    title: "Built to last decades",
    desc: "A properly polished slab is one of the most durable floors you can own — no coating to peel or wear through, just hardened, refined concrete that handles heavy foot traffic and furniture.",
  },
  {
    title: "Low maintenance",
    desc: "No waxing, no stripping, no recoating. Day-to-day care is a dust mop and the occasional damp mop — which is why warehouses and showrooms choose it.",
  },
  {
    title: "Bright, clean interiors",
    desc: "A polished surface reflects light, lifting the brightness of living areas and commercial spaces and reducing the lighting you need to run.",
  },
  {
    title: "Healthier underfoot",
    desc: "A sealed, dense polished floor doesn't harbour dust, allergens or mould the way carpet does — a genuine plus for allergy-prone households.",
  },
  {
    title: "Choice of look",
    desc: "From a subtle cream finish to full stone exposure, and from a soft satin sheen to a high mirror gloss — we dial the finish to the room.",
  },
  {
    title: "Uses the slab you have",
    desc: "If your existing slab is sound, polishing turns it into the finished floor — no new flooring material, no landfill, lower cost.",
  },
];

const sheenLevels = [
  {
    name: "Satin (low sheen)",
    desc: "A soft, matte-to-low reflection. Understated and modern; hides minor surface variation well. Popular in homes.",
  },
  {
    name: "Semi-gloss",
    desc: "A clear step up in reflectivity that still isn't a mirror. A versatile middle ground for living areas and retail.",
  },
  {
    name: "High gloss / mirror",
    desc: "Maximum clarity and reflection. A showpiece finish for showrooms, entries and statement spaces.",
  },
];

const exposureLevels = [
  {
    name: "Cream finish",
    desc: "Polishes the top cream layer with little to no stone showing. The most uniform, contemporary look.",
  },
  {
    name: "Salt & pepper",
    desc: "A light cut revealing fine aggregate for a subtle speckle — the most popular residential choice.",
  },
  {
    name: "Full aggregate",
    desc: "A deeper grind exposing the full stone for a terrazzo-like result with maximum character.",
  },
];

const processSteps = [
  ["Assess the slab", "We review coatings, repairs, cracks, flatness and the finish you want, then confirm whether the slab is a good polishing candidate."],
  ["Initial grinding", "The surface is opened and flattened with coarse diamonds to begin the mechanical refinement sequence."],
  ["Densify", "A chemical densifier is applied at the right stage to harden the slab and support a clear, durable polish."],
  ["Refine & polish", "We work up through progressively finer grits to build clarity, reflectivity and the target sheen."],
  ["Protect (optional)", "Where it suits the room, a penetrating guard improves stain resistance and makes cleaning easier."],
  ["Handover & care", "We explain cleaning, maintenance and realistic long-term expectations so the floor stays looking its best."],
];

export default function ConcretePolishingPerthPage() {
  const faqs = [
    {
      q: "How much does concrete polishing cost in Perth?",
      a: "Polished concrete in Perth typically costs $140–$220 per square metre installed, depending on slab condition, area size, aggregate exposure, repairs, access and the level of refinement. Larger areas achieve a lower per-m² rate. We confirm pricing after reviewing photos, measurements and the finish you want.",
    },
    {
      q: "Can existing concrete be polished?",
      a: "Yes, if the slab is suitable. Existing coatings, patching, moisture, cracking and slab flatness all affect what result is possible, so we assess those factors first and tell you honestly what finish your slab can achieve.",
    },
    {
      q: "Is polished concrete the same as honed concrete?",
      a: "No. Honed concrete is a lower-sheen grind-and-seal system, usually used outdoors where the sealer handles UV and weather. Polished concrete is an interior mechanical process using densifiers and progressively finer grits to develop clarity and sheen without a surface coating.",
    },
    {
      q: "Can you polish residential and commercial floors?",
      a: "Yes. Polished concrete suits homes, showrooms, warehouses and commercial interiors wherever the slab condition and intended finish make polishing a good fit.",
    },
    {
      q: "Will cracks disappear after polishing?",
      a: "Cracks can often be improved or repaired, but concrete moves over time. Repairs can reduce visual impact, but no honest contractor can guarantee a repaired crack will never show again.",
    },
    {
      q: "How long does polished concrete last?",
      a: "A correctly polished and densified floor can last decades — there's no coating to peel or wear off. Periodic re-polishing of high-traffic zones restores sheen if it ever dulls, but the floor itself is permanent.",
    },
    {
      q: "Is polished concrete slippery?",
      a: "Polished concrete is no more slippery than tile or timber when dry. For areas that may get wet, a penetrating guard or a slightly lower sheen improves grip. We'll recommend the right finish for the room.",
    },
    {
      q: "How long does a polishing job take?",
      a: "Most residential floors take 2–4 days depending on area, slab condition and the number of grinding/polishing passes required. We confirm timing in your quote.",
    },
  ];

  const jsonLd = servicePageJsonLd({
    name: "Concrete Polishing Perth",
    serviceType: "Concrete polishing",
    description:
      "Mechanical polished concrete for homes, warehouses, showrooms and commercial interiors across Perth north of the river.",
    url: `${siteUrl}/concrete-polishing-perth`,
    breadcrumbName: "Concrete Polishing Perth",
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
          <span>›</span>
          <span className="text-stone-900">Concrete Polishing Perth</span>
        </div>

        <div className="mt-6 grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Concrete Polishing Perth
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-700 leading-relaxed">
              Premium mechanically polished concrete for homes, warehouses,
              showrooms and commercial interiors across Perth. A proper grind,
              densify and refine process — not a quick shine-and-seal shortcut —
              for a durable, low-maintenance floor that lasts decades.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] text-stone-700">
              {[
                "Full mechanical grind, densify and polish system",
                "Satin to high-gloss sheen, cream to full-stone exposure",
                "Residential & commercial interiors, north of river to CBD",
                "From $140/m² — a permanent floor, no coating to peel",
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
              Free on-site quotes · Most enquiries answered within 24 hours ·
              Page updated June 2026
            </p>
          </div>

          <figure>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200 shadow-lg">
              <Image
                src="/gallery/cottesloe-polished-concrete-interior-floor-perth.webp"
                alt="Polished concrete interior floor in Cottesloe home by Perth Concrete Care"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone-600">
              Polished concrete interior — Cottesloe, Perth
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BENEFITS — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Why choose polished concrete?
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Polished concrete is the low-maintenance, long-life choice for indoor
            floors. It turns your existing slab into the finished surface — no
            coating to peel, nothing to replace, and a clean, premium look that
            brightens the room.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
                <h3 className="text-lg font-bold text-stone-900">{b.title}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINISH OPTIONS — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Choose your sheen level
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          Polishing lets you dial the reflectivity to suit the space — from a
          soft, understated satin to a full mirror gloss.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sheenLevels.map((s, i) => (
            <div key={s.name} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Level {i + 1}</div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">{s.name}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl md:text-3xl font-extrabold text-stone-900">
          And your aggregate exposure
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {exposureLevels.map((e) => (
            <div key={e.name} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
              <h3 className="text-lg font-bold text-stone-900">{e.name}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Polished concrete vs honed concrete vs epoxy
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Polished concrete is the premium smooth finish for indoor floors,
            with no coating to peel. Honed concrete is the lower-sheen
            grind-and-seal made for outdoors. Epoxy is a applied coating that's
            ideal for garages and workshops.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full min-w-[640px] text-sm border-collapse bg-white">
              <thead>
                <tr className="text-left border-b border-stone-200 bg-stone-50">
                  <th className="px-5 py-4 font-bold text-stone-900"> </th>
                  <th className="px-5 py-4 font-bold text-emerald-700">Polished concrete</th>
                  <th className="px-5 py-4 font-bold text-stone-900">Honed concrete</th>
                  <th className="px-5 py-4 font-bold text-stone-900">Epoxy / flake</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Best for</td>
                  <td className="px-5 py-4">Indoor living & commercial</td>
                  <td className="px-5 py-4">Outdoor, pools, driveways</td>
                  <td className="px-5 py-4">Garages, workshops</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Surface</td>
                  <td className="px-5 py-4">Polished concrete itself</td>
                  <td className="px-5 py-4">Honed concrete + sealer</td>
                  <td className="px-5 py-4">Applied resin coating</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Coating to peel?</td>
                  <td className="px-5 py-4">No</td>
                  <td className="px-5 py-4">Sealer reapplied periodically</td>
                  <td className="px-5 py-4">Yes (long-lived if prepped well)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-stone-900">Cost guide</td>
                  <td className="px-5 py-4">$140–$220/m²</td>
                  <td className="px-5 py-4">$60–$80/m²</td>
                  <td className="px-5 py-4">$80–$100/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            Not sure which suits your space? Send a photo of your slab with the{" "}
            <Link href="/#quote" className="font-semibold text-emerald-700 hover:underline">quote form</Link>{" "}
            and we&apos;ll recommend the right finish.
          </p>
        </div>
      </section>

      {/* PROCESS — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Our polishing process
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          A real polish is a multi-stage mechanical process, not a topical
          coating. Here&apos;s how we take a raw slab to a refined floor.
        </p>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(([title, desc], i) => (
            <li key={title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
              <div className="text-sm font-bold text-emerald-700">Step {i + 1}</div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* GALLERY — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Recent polished concrete work
          </h2>
          <div className="mt-8">
            <PolishingGallery />
          </div>
        </div>
      </section>

      {/* PRICE + SERVICE AREA + RELATED — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Price guide</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-stone-900">$140–$220</span>
              <span className="text-sm font-medium text-stone-500">/m²</span>
            </div>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Typical installed price for polished concrete. Final pricing
              depends on slab condition, area, exposure level, repairs and
              access — larger areas get a better per-m² rate.
            </p>
            <Link href="/#quote" className="mt-6 inline-block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors">
              Request a free quote
            </Link>
            <p className="mt-3 text-xs text-stone-500">
              Fixed-price written quote · No obligation · We don&apos;t hard-sell
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Service area</h2>
            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Perth north of the river — Butler corridor, Joondalup/Wanneroo,
              Osborne Park, North Perth and Perth CBD.
            </p>
            <h3 className="mt-6 text-sm font-bold text-stone-800">Typical polishing jobs</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-stone-700 space-y-1.5">
              <li>Homes &amp; residential interiors</li>
              <li>Warehouses &amp; showrooms</li>
              <li>Commercial interiors</li>
              <li>Existing slabs needing a refined finish</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Related services</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/honed-concrete-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Honed concrete →</Link>
              <Link href="/concrete-grinding-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete grinding →</Link>
              <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Epoxy flake floors →</Link>
              <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Contact →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Concrete polishing FAQ
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
              Thinking about a polished concrete floor?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Send dimensions, photos and your suburb and we&apos;ll come back
              with a clear scope and a fixed written price — usually within 24
              hours.
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

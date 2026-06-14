import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Honed Concrete Perth",
  description:
    "Honed concrete (grind & seal) across Perth’s north of the river. A refined, slip-manageable finish for alfresco and outdoor areas with stain resistance",
  alternates: {
    canonical: "https://perthconcretecare.com.au/honed-concrete-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/honed-concrete-patio-Willetton-perth.webp",
        alt: "Honed concrete patio with sealed finish in Willetton, Perth",
      },
    ],
    title: "Honed Concrete Perth | Perth Concrete Care",
    description:
      "Honed concrete (grind & seal) across Perth’s north of the river. A refined, slip-manageable finish for alfresco and outdoor areas with stain resistance",
    url: "https://perthconcretecare.com.au/honed-concrete-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

const benefits = [
  {
    title: "Uses the slab you already have",
    desc: "Honing transforms existing concrete — no demolition, no new pour. It's a fraction of the cost of replacing the slab, with far less mess and downtime.",
  },
  {
    title: "Kind to bare feet",
    desc: "Rough exposed aggregate is hard on feet around pools and alfresco areas. Honing smooths the sharp stone edges while keeping a slip-rated surface.",
  },
  {
    title: "Slip ratings for wet areas",
    desc: "We tune the finish and sealer to achieve P3–P5 slip ratings — suitable for pool surrounds, alfresco areas and other zones that get wet.",
  },
  {
    title: "Built for Perth sun",
    desc: "We use UV-stable sealers selected for WA conditions, so the finish resists yellowing and breakdown through hot summers.",
  },
  {
    title: "Stain and mark resistance",
    desc: "Sealed honed concrete shrugs off the marks that stain raw concrete — barbecue drips, leaf tannins, red wine and pot stains clean up far more easily.",
  },
  {
    title: "Easy to keep clean",
    desc: "A honed and sealed surface doesn't trap dirt the way rough broomed or washed-aggregate concrete does. A hose or mop brings it back.",
  },
];

const finishLevels = [
  {
    name: "Nil / cream exposure",
    desc: "A light hone that keeps the smooth cream surface of the slab. Subtle, modern and uniform — popular for new pours with a tight finish.",
  },
  {
    name: "Salt & pepper",
    desc: "A shallow cut revealing fine sands and small stone — the most popular choice. A natural, speckled look that hides everyday dust and footprints well.",
  },
  {
    name: "Full stone exposure",
    desc: "A deeper grind that reveals the full aggregate, similar to terrazzo. Maximum character; great where the slab has attractive stone.",
  },
];

const sealerOptions = [
  {
    name: "Natural / penetrating",
    desc: "Sits within the concrete rather than on top. Keeps the matte, natural look and is very low-maintenance — a great choice for driveways.",
  },
  {
    name: "Enhanced ‘wet look’",
    desc: "Deepens the colour of the stone and concrete the way water does. Available in satin or gloss for alfresco areas that deserve to be shown off.",
  },
  {
    name: "Anti-slip additive",
    desc: "Where pool fencing rules or wet zones demand it, we add traction grit to the sealer to hit the required slip rating without ruining the look.",
  },
];

const processSteps = [
  ["Inspect & plan", "We confirm the cut level, slip requirements and sealer on-site, and cut a small sample so you can see your actual finish before committing."],
  ["Grind / hone", "Mechanical diamond grinding through the required grits — dust-controlled with H-class HEPA extraction."],
  ["Repair & detail", "Cracks, pits and edges are addressed so the sealed result looks resolved, not patched."],
  ["Clean & dry", "The surface is vacuumed and prepared so the sealer bonds evenly with no blotching."],
  ["Seal (+ anti-slip)", "Penetrating or film-forming sealer as specified, with traction additive in wet zones."],
  ["Cure & aftercare", "Clear guidance on cure times, cleaning products and the reseal interval for your system."],
];

export default function Page() {
  const faqs = [
    {
      q: "Is honed concrete slippery?",
      a: "It depends on grit level and sealer. We can tune the finish and add traction additives to suit wet areas, achieving P3–P5 slip ratings for pool surrounds and alfresco zones.",
    },
    {
      q: "How is honing different to polishing?",
      a: "Honing is a lower-sheen grind-and-seal — ideal outdoors because the sealer handles UV and weather. Polishing uses densifiers and higher grits to reach a shinier finish, usually indoors.",
    },
    {
      q: "Can you hone my rough exposed aggregate?",
      a: "Yes — this is one of our most requested jobs. We grind the sharp stone tips smooth, then seal. The result keeps the exposed-aggregate character but is far kinder to bare feet and easier to clean.",
    },
    {
      q: "Will the sealer change the colour?",
      a: "Most film-forming sealers will deepen the colour slightly (a ‘wet look’), which most clients love. If you prefer the dry, natural look, a penetrating sealer keeps the colour as-is. We show you samples before committing.",
    },
    {
      q: "Can this be done on older slabs?",
      a: "Yes — as long as the concrete is sound. We assess coatings, contamination, cracks and repairs first, and tell you honestly if a slab isn't a good candidate.",
    },
    {
      q: "How long does a honed concrete job take?",
      a: "Most residential alfresco or pool-surround jobs are completed in 1–3 days depending on area, exposure level and weather for sealing. We confirm timing in your quote.",
    },
    {
      q: "How long does the sealer last?",
      a: "Typically 2–5 years outdoors depending on the product, sun exposure and traffic. Resealing is quick and inexpensive compared to the initial hone — we advise the right interval at handover.",
    },
    {
      q: "How much does honed concrete cost in Perth?",
      a: "Hone-and-seal for outdoor areas typically costs $60–$80 per square metre in Perth. Final pricing depends on area size, slab hardness, access, existing coatings and the exposure level you choose — larger areas achieve a lower per-m² rate.",
    },
  ];

  const jsonLd = servicePageJsonLd({
    name: "Honed Concrete Perth",
    serviceType: "Honed concrete and grind-and-seal flooring",
    description:
      "Honed concrete and grind-and-seal flooring across Perth north of the river for alfresco areas, pool surrounds, driveways and outdoor concrete areas.",
    url: `${siteUrl}/honed-concrete-perth`,
    breadcrumbName: "Honed Concrete Perth",
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
          <span className="text-stone-900">Honed Concrete Perth</span>
        </div>

        <div className="mt-6 grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Honed Concrete Perth
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-stone-700 leading-relaxed">
              Turn the concrete you already have into the best-looking surface
              on the street. Honing is a controlled diamond grind that smooths
              and refines your slab — alfresco, pool surround, driveway or
              path — then locks it in with a sealer chosen for Perth
              conditions.
            </p>

            <ul className="mt-6 space-y-3 text-[15px] text-stone-700">
              {[
                "Smooths sharp, rough aggregate — comfortable on bare feet",
                "P3–P5 slip-rated options for pools and wet areas",
                "UV-stable, stain-resistant sealers made for WA sun",
                "From $60/m² — far cheaper than replacing the slab",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+61448483226"
                className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors"
              >
                Call 0448 483 226
              </a>
              <Link
                href="/#quote"
                className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                Get a free quote
              </Link>
            </div>
            <p className="mt-4 text-sm text-stone-500">
              Free on-site quotes · Most enquiries answered within 24 hours ·
              Page updated June 2026
            </p>
          </div>

          {/* Recent project photo */}
          <figure>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-200 shadow-lg">
              <Image
                src="/gallery/honed-concrete-patio-Willetton-perth.webp"
                alt="Honed concrete patio with sealed finish in Willetton, Perth"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-stone-600">
              Honed concrete patio — Willetton, Perth
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WHY HONED — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Why Perth homeowners choose honed concrete
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Honed concrete is the practical upgrade for outdoor slabs: it costs
            a fraction of replacing the concrete, feels better underfoot, and
            holds up to Perth sun and pool water.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
              >
                <h3 className="text-lg font-bold text-stone-900">{b.title}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINISH OPTIONS — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Choose your exposure level
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          How deep we grind determines how much stone shows. We cut a sample
          area on your slab first, so you choose from what your concrete
          actually looks like — not a brochure.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {finishLevels.map((f, i) => (
            <div
              key={f.name}
              className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
            >
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                Level {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-bold text-stone-900">{f.name}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl md:text-3xl font-extrabold text-stone-900">
          Then pick the look of your sealer
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sealerOptions.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
            >
              <h3 className="text-lg font-bold text-stone-900">{s.name}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Honed vs washed aggregate vs polished concrete
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Honed and sealed concrete works on existing outdoor slabs and gives
            a smooth, slip-rated surface. Washed aggregate can only be done on a
            new pour and stays rough and textured. Polished concrete is the
            premium smooth finish for indoor floors.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full min-w-[640px] text-sm border-collapse bg-white">
              <thead>
                <tr className="text-left border-b border-stone-200 bg-stone-50">
                  <th className="px-5 py-4 font-bold text-stone-900"> </th>
                  <th className="px-5 py-4 font-bold text-emerald-700">Honed &amp; sealed</th>
                  <th className="px-5 py-4 font-bold text-stone-900">Washed aggregate</th>
                  <th className="px-5 py-4 font-bold text-stone-900">Polished concrete</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Best for</td>
                  <td className="px-5 py-4">Outdoor areas, pools, existing slabs</td>
                  <td className="px-5 py-4">New pours only</td>
                  <td className="px-5 py-4">Indoor living areas</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Feel underfoot</td>
                  <td className="px-5 py-4">Smooth but slip-rated</td>
                  <td className="px-5 py-4">Rough, textured</td>
                  <td className="px-5 py-4">Very smooth</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Cleaning</td>
                  <td className="px-5 py-4">Easy — sealed surface</td>
                  <td className="px-5 py-4">Traps dirt in texture</td>
                  <td className="px-5 py-4">Easy</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="px-5 py-4 font-semibold text-stone-900">Cost guide</td>
                  <td className="px-5 py-4">$60–$80/m²</td>
                  <td className="px-5 py-4">Part of new concrete cost</td>
                  <td className="px-5 py-4">$140–$220/m²</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-stone-900">Works on existing concrete</td>
                  <td className="px-5 py-4">Yes</td>
                  <td className="px-5 py-4">No</td>
                  <td className="px-5 py-4">Yes (indoors)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            Not sure which suits your slab? Send a photo with your enquiry and
            we&apos;ll tell you straight — including if honing isn&apos;t the
            right call.
          </p>
        </div>
      </section>

      {/* WHERE IT WORKS + PROCESS — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Where honed concrete works best
        </h2>
        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 text-stone-700">
          {[
            "Alfresco & outdoor entertaining areas",
            "Pool surrounds (slip-rated finishes)",
            "Driveways & crossovers",
            "Paths, porches & entries",
            "Patios & courtyards",
            "Rough exposed aggregate you want smoothed",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <svg className="mt-1 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-2xl md:text-3xl font-extrabold text-stone-900">
          Our process
        </h2>
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

      {/* RECENT WORK — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Recent honed &amp; exposed concrete work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="relative aspect-video">
                <Image
                  src="/gallery/grind-and-seal-concrete-noranda.webp"
                  alt="Grind and seal concrete floor in Noranda, Perth"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-stone-600">
                Grind &amp; seal concrete — Noranda
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="relative aspect-video">
                <Image
                  src="/gallery/hone-and-seal-exposed-aggregate-balcatta.webp"
                  alt="Hone and Seal - Balcatta"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-stone-600">
                Hone &amp; seal exposed aggregate — Balcatta
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm sm:max-lg:hidden lg:block">
              <div className="relative aspect-video">
                <Image
                  src="/gallery/exposed-aggregate-driveway-ashby-perth.webp"
                  alt="Exposed or washed aggregate driveway finish in Ashby, Western Australia"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-stone-600">
                Exposed / washed aggregate driveway — Ashby
              </figcaption>
            </figure>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            More photos in the{" "}
            <Link href="/#gallery" className="font-semibold text-emerald-700 hover:underline">
              project gallery
            </Link>{" "}
            and on{" "}
            <a
              href="https://www.instagram.com/perthconcretecare/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:underline"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </section>

      {/* PRICE + SERVICE AREA + RELATED — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Price guide</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-stone-900">$60–$80</span>
              <span className="text-sm font-medium text-stone-500">/m²</span>
            </div>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Typical hone-and-seal for outdoor areas. Final price depends on
              area size, slab hardness, access, existing coatings and the
              exposure level — larger areas get a better per-m² rate.
            </p>
            <Link
              href="/#quote"
              className="mt-6 inline-block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors"
            >
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
            <h3 className="mt-6 text-sm font-bold text-stone-800">Typical honing jobs</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-stone-700 space-y-1.5">
              <li>Alfresco &amp; entertaining areas</li>
              <li>Pool surrounds</li>
              <li>Driveways &amp; paths</li>
              <li>Rough exposed aggregate rescue</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Related services</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/concrete-polishing-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">
                Concrete polishing →
              </Link>
              <Link href="/concrete-grinding-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">
                Concrete grinding →
              </Link>
              <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">
                Epoxy flake floors →
              </Link>
              <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">
                Contact →
              </Link>
            </div>

            <div className="mt-5 border-t border-stone-200 pt-4">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                Areas we serve
              </div>
              <div className="mt-3 grid gap-3 text-sm">
                <Link href="/concrete-flooring/scarborough" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Scarborough →</Link>
                <Link href="/concrete-flooring/mindarie" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Mindarie →</Link>
                <Link href="/concrete-flooring/duncraig" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Duncraig →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Honed concrete FAQ
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
              Ready to transform your concrete?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Send a couple of photos and a rough m² and we&apos;ll come back
              with a clear scope and a fixed written price — usually within 24
              hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/#quote"
              className="rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-stone-950 hover:bg-emerald-400 transition-colors"
            >
              Get a free quote
            </Link>
            <a
              href="tel:+61448483226"
              className="rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call 0448 483 226
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import PolishingGallery from "./PolishingGallery";

export const metadata: Metadata = {
  title: "Concrete Polishing Perth | Perth Concrete Care",
  description:
    "Concrete polishing Perth for homes, warehouses, showrooms and commercial interiors. Full mechanical grind, densify and polish process for a durable, refined finish.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-polishing-perth",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/concrete-polishing-perth",
    title: "Concrete Polishing Perth | Perth Concrete Care",
    description:
      "Concrete polishing Perth for homes, warehouses, showrooms and commercial interiors. Full mechanical grind, densify and polish process for a durable, refined finish.",
  },
};

const faqs = [
  {
    q: "How much does concrete polishing cost in Perth?",
    a: "Pricing depends on slab condition, area size, aggregate exposure goals, repairs, access and the level of refinement required. We usually quote after reviewing photos, measurements and the type of finish you want.",
  },
  {
    q: "Can existing concrete be polished?",
    a: "Yes, if the slab is suitable. Existing coatings, patching, moisture, cracking and slab flatness all affect what result is possible, so we assess those factors first.",
  },
  {
    q: "Is polished concrete the same as honed concrete?",
    a: "No. Honed concrete is typically a lower-sheen system often used outdoors with sealers. Polished concrete is generally an interior mechanical process focused on refinement, clarity and sheen development.",
  },
  {
    q: "Can you polish residential and commercial floors?",
    a: "Yes. Polished concrete can suit homes, showrooms, warehouses and commercial interiors where the slab condition and intended finish make polishing a good fit.",
  },
  {
    q: "Will cracks disappear after polishing?",
    a: "Cracks can often be improved or repaired, but concrete moves over time. Repairs can reduce visual impact, but no honest contractor can guarantee repaired cracks will never show again.",
  },
];

export default function ConcretePolishingPerthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://perthconcretecare.com.au/#business",
        name: "Perth Concrete Care",
        url: "https://perthconcretecare.com.au/",
        telephone: "+61 448 483 226",
        email: "sales@perthconcretecare.com.au",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Perth",
          addressRegion: "WA",
          addressCountry: "AU",
        },
        areaServed: [
          "Perth WA",
          "Joondalup WA",
          "Wanneroo WA",
          "Wangara WA",
          "Malaga WA",
          "Osborne Park WA",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://perthconcretecare.com.au/concrete-polishing-perth#service",
        serviceType: "Concrete polishing",
        provider: { "@id": "https://perthconcretecare.com.au/#business" },
        areaServed: "Perth, WA",
        url: "https://perthconcretecare.com.au/concrete-polishing-perth",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://perthconcretecare.com.au/concrete-polishing-perth#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://perthconcretecare.com.au/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Concrete Polishing Perth",
            item: "https://perthconcretecare.com.au/concrete-polishing-perth",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://perthconcretecare.com.au/concrete-polishing-perth#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-emerald-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-700">Concrete Polishing Perth</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              Perth polished concrete specialists
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Concrete Polishing Perth
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              Premium mechanically polished concrete for homes, warehouses,
              showrooms and commercial interiors across Perth. Durable,
              low-maintenance, and built for a clean, modern finish that lasts.
            </p>

            <p className="mt-3 max-w-3xl font-semibold text-slate-900">
              Proper grind, densify and refine process — not a quick shine-and-seal shortcut.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+61448483226"
                className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Call 0448 483 226
              </a>

              <Link
                href="/contact"
                className="rounded-xl border border-emerald-300 bg-white px-5 py-3 font-semibold transition hover:bg-slate-50"
              >
                Get a Free Quote
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Mechanically polished systems",
                "Residential and commercial interiors",
                "North of river to Perth CBD",
                "Fast quotes from photos or plans",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm">
            <img
              src="/gallery/cottesloe-polished-concrete-interior-floor-perth.webp"
              alt="Polished concrete interior floor in Cottesloe home by Perth Concrete Care"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Why choose polished concrete?
            </h2>
            <p className="mt-3 text-slate-700">
              Ideal for clients wanting a durable, low-maintenance surface with a
              cleaner and more premium look than a basic grind and seal.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Is your slab suitable?
            </h2>
            <p className="mt-3 text-slate-700">
              Existing coatings, cracks, repairs, slab flatness and exposure goals
              all affect the final result and how much preparation is needed.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              What affects pricing?
            </h2>
            <p className="mt-3 text-slate-700">
              Area size, slab hardness, repair work, access, edge detail and the
              final finish level all influence the scope and pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <PolishingGallery />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-slate-900">What you get</h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              <li>Mechanical grinding and polishing steps matched to the target finish</li>
              <li>Densifier application at the appropriate stage</li>
              <li>Grout coat or pore filling where required</li>
              <li>Finish options from lower sheen to higher gloss refinement</li>
              <li>Clear advice on slab suitability and realistic expectations</li>
              <li>Low-maintenance surface with a clean, premium appearance</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-slate-900">
              Our polishing process
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                {
                  step: "Step 1",
                  title: "Assess the slab",
                  text: "We review coatings, repairs, cracks, flatness and the type of finish you want before confirming suitability.",
                },
                {
                  step: "Step 2",
                  title: "Initial grinding",
                  text: "The surface is opened and flattened to begin the mechanical refinement sequence.",
                },
                {
                  step: "Step 3",
                  title: "Densify",
                  text: "Densifier is applied at the correct stage to harden the slab and support the polishing process.",
                },
                {
                  step: "Step 4",
                  title: "Refine and polish",
                  text: "We continue through the polishing sequence to build clarity, reflectivity and finish quality.",
                },
                {
                  step: "Step 5",
                  title: "Protection if required",
                  text: "Where suitable, we can discuss guard treatments for easier cleaning and added stain resistance.",
                },
                {
                  step: "Step 6",
                  title: "Handover and care advice",
                  text: "We explain maintenance, cleaning and realistic long-term expectations for the floor.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-200 bg-white p-5"
                >
                  <div className="text-sm font-semibold text-emerald-700">
                    {item.step}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">
                    {item.title}
                  </div>
                  <p className="mt-2 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-slate-900">FAQ</h2>
            <p className="mt-2 text-sm text-slate-500">
              Common questions about concrete polishing in Perth.
            </p>

            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-xl font-bold text-slate-900">Service area</h2>
            <p className="mt-3 text-slate-700">
              North of the river — Butler corridor, Joondalup, Wanneroo, Osborne Park
              and through to Perth CBD.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-800">
                Typical polishing jobs
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
                <li>Homes and residential interiors</li>
                <li>Warehouses and showrooms</li>
                <li>Commercial interiors</li>
                <li>Existing slabs needing a refined finish</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="font-semibold text-emerald-900">Fast quotes</div>
              <p className="mt-2 text-emerald-900/80">
                Send dimensions, photos, suburb and whether the slab is new or existing.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700"
              >
                Request a quote
              </Link>
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Related pages
            </h3>

            <div className="mt-3 grid gap-3">
              <Link
                href="/honed-concrete-perth"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 transition hover:bg-slate-50"
              >
                Honed concrete →
              </Link>
              <Link
                href="/concrete-grinding-perth"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 transition hover:bg-slate-50"
              >
                Concrete grinding →
              </Link>
              <Link
                href="/epoxy-flake-flooring-perth"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 transition hover:bg-slate-50"
              >
                Epoxy flake floors →
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-emerald-200 bg-white px-4 py-3 transition hover:bg-slate-50"
              >
                Contact →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
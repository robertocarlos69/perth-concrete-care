import type { Metadata } from "next";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Concrete Grinding Perth",
  description:
    "Concrete grinding Perth with mechanical surface preparation. Remove coatings, level high spots and prep to CSP2–CSP3 for epoxy, polyaspartic and sealers.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-grinding-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/honed-concrete-perth.webp",
        alt: "Mechanically ground and prepared concrete floor by Perth Concrete Care",
      },
    ],
    title: "Concrete Grinding Perth | Perth Concrete Care",
    description:
      "Concrete grinding Perth with mechanical surface preparation. Remove coatings, level high spots and prep to CSP2–CSP3 for epoxy, polyaspartic and sealers.",
    url: "https://perthconcretecare.com.au/concrete-grinding-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

const whatYouGet = [
  ["CSP2–CSP3 mechanical profile", "The right surface roughness for epoxy, polyurethane, polyaspartic and sealer systems to bond and stay bonded."],
  ["Coating, paint & glue removal", "Old paint, epoxy, tile adhesive and carpet glue ground back to clean concrete wherever feasible."],
  ["High-spot levelling", "Slab undulations and trip points ground down to a flatter, safer, coat-ready surface."],
  ["Dust-controlled grinding", "H-class HEPA extraction keeps airborne silica dust down — cleaner for you and safer for us."],
  ["Hardness assessment", "We test the slab and select the right diamond tooling so the profile is correct, not guessed."],
  ["Edge & detail work", "Hand grinders take the prep right into corners, edges and tight areas the big machines can't reach."],
];

const useCases = [
  "Garage & workshop floors before epoxy or flake",
  "Removing old paint, epoxy or tile adhesive",
  "Carpet glue removal after flooring is pulled up",
  "Levelling high spots and trip hazards",
  "Warehouse & showroom slab preparation",
  "Driveway and outdoor slab prep before sealing",
];

const processSteps = [
  ["Site inspection", "We identify coatings, contaminants, slab condition and the target finish so the prep matches the coating system going on top."],
  ["Grind & level", "Coarse diamonds remove laitance, old coatings and high spots, opening the slab up for proper adhesion."],
  ["Profile to spec", "We dial in the CSP and scratch pattern the chosen coating manufacturer requires — the difference between a floor that lasts and one that peels."],
  ["Detail work", "Edges, corners and tight areas are ground by hand so the whole floor is prepped, not just the open middle."],
  ["Vacuum & clean", "Thorough dust removal so primer and coatings bond to clean concrete, not a dusty surface."],
  ["Ready for coating", "Final inspection and a clean, profiled substrate handed over ready for installation."],
];

export default function Page() {
  const faqs = [
    {
      q: "What is CSP2–CSP3?",
      a: "Concrete Surface Profile (CSP) is the standardised measure of how rough a prepared slab is, set by the ICRI. CSP2–CSP3 is the typical profile required for epoxy and polyaspartic floor coatings to mechanically key into the concrete and bond reliably.",
    },
    {
      q: "Why grind instead of acid etching?",
      a: "Acid etching is inconsistent, can leave residue that compromises adhesion, and doesn't remove existing coatings. For professional floor systems, mechanical diamond grinding is the reliable, manufacturer-recommended method for a sound bond.",
    },
    {
      q: "Can you remove old paint, epoxy or tile glue?",
      a: "Yes — coating and adhesive removal is one of the most common reasons people call us. We grind back old paint, failed epoxy, tile adhesive and carpet glue to clean concrete wherever the slab allows.",
    },
    {
      q: "Can you grind new concrete?",
      a: "Yes, once it's cured enough to grind without tearing the surface. We'll advise the right timing based on the slab age and the finish required.",
    },
    {
      q: "Will grinding make my slab perfectly level?",
      a: "Grinding corrects many high spots and minor undulations and removes trip points. Major level problems — like a slab that falls the wrong way — may need patching, self-levelling compound or resurfacing, which we'll flag on inspection.",
    },
    {
      q: "Do you control the dust?",
      a: "Yes. We grind with H-class HEPA vacuum extraction connected to the machines, which captures the bulk of the fine silica dust at the source — far cleaner than uncontrolled grinding.",
    },
    {
      q: "How much does concrete grinding cost in Perth?",
      a: "Grinding is usually priced as part of the floor preparation for a coating or polishing job rather than on its own, because cost depends heavily on what's being removed, slab hardness, area and access. Send photos and measurements and we'll give you a clear scope and price.",
    },
  ];

  const jsonLd = servicePageJsonLd({
    name: "Concrete Grinding Perth",
    serviceType: "Concrete grinding and mechanical surface preparation",
    description:
      "Concrete grinding and mechanical surface preparation across Perth north of the river. Remove coatings, level high spots and prepare CSP profiles for epoxy, polyaspartic and sealers.",
    url: `${siteUrl}/concrete-grinding-perth`,
    breadcrumbName: "Concrete Grinding Perth",
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
          <span className="text-stone-900">Concrete Grinding Perth</span>
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
            Concrete Grinding Perth
          </h1>
          <p className="mt-5 text-lg text-stone-700 leading-relaxed">
            Industrial diamond grinding for slab preparation, coating removal and
            profile control across Perth. A coating is only as good as the prep
            beneath it — and prep is what we do properly, to the CSP profile your
            floor system actually requires.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-[15px] text-stone-700">
            {[
              "CSP2–CSP3 profiling for epoxy & polyaspartic",
              "Old paint, epoxy, tile & carpet glue removal",
              "High-spot levelling & trip-hazard removal",
              "H-class HEPA dust-controlled grinding",
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
      </section>

      {/* WHAT YOU GET — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            What our concrete grinding includes
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Grinding is the foundation of every successful floor coating. Get the
            profile and cleanliness right and the coating bonds for years; get it
            wrong and it peels. Here&apos;s what proper preparation looks like.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatYouGet.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
                <h3 className="text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          When you need concrete grinding
        </h2>
        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 text-stone-700">
          {useCases.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <svg className="mt-1 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* PROCESS — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Our grinding & prep process
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
        </div>
      </section>

      {/* SERVICE AREA + RELATED — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Service area</h2>
            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Perth north of the river — Butler corridor, Joondalup/Wanneroo,
              Osborne Park, North Perth and Perth CBD.
            </p>
            <h3 className="mt-6 text-sm font-bold text-stone-800">Typical jobs</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-stone-700 space-y-1.5">
              <li>Garages &amp; workshops</li>
              <li>Alfresco &amp; outdoor areas</li>
              <li>Warehouses &amp; showrooms</li>
              <li>Driveway / slab prep</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Free quotes</h2>
            <p className="mt-4 text-sm text-stone-700 leading-relaxed">
              Send dimensions and a few photos — including any existing coating or
              damage — and we&apos;ll give you a clear scope and price.
            </p>
            <Link href="/#quote" className="mt-6 inline-block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors">
              Request a quote
            </Link>
            <p className="mt-3 text-xs text-stone-500">
              Fixed-price written quote · No obligation
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-stone-900">Related services</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Epoxy flake floors →</Link>
              <Link href="/metallic-epoxy-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Metallic epoxy floors →</Link>
              <Link href="/concrete-polishing-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete polishing →</Link>
              <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Contact →</Link>
            </div>

            <div className="mt-5 border-t border-stone-200 pt-4">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                Areas we serve
              </div>
              <div className="mt-3 grid gap-3 text-sm">
                <Link href="/concrete-flooring/joondalup" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Joondalup →</Link>
                <Link href="/concrete-flooring/wanneroo" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Wanneroo →</Link>
                <Link href="/concrete-flooring/banksia-grove" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete flooring Banksia Grove →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Concrete grinding FAQ
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
              Need a slab ground or prepped?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Whether it&apos;s coating removal or prep before epoxy, send photos
              and measurements and we&apos;ll come back with a clear scope and a
              fixed written price.
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

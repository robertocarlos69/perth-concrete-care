import type { Metadata } from "next";
import Link from "next/link";


import FaqAccordion from "../components/FaqAccordion";
export const metadata: Metadata = {
  title: "Concrete Polishing Perth | Perth Concrete Care",
  description: "Concrete polishing Perth with full mechanical grinding, densifier and guard. Matte to high-gloss finishes for residential and commercial interiors.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-polishing-perth",
  },
  openGraph: {
    title: "Concrete Polishing Perth | Perth Concrete Care",
    description: "Concrete polishing Perth with full mechanical grinding, densifier and guard. Matte to high-gloss finishes for residential and commercial interiors.",
    url: "https://perthconcretecare.com.au/concrete-polishing-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  const faqs = [
    { q: "Is polished concrete the same as honing?", a: "No. Honing is a lower-sheen cut (often outdoor-friendly with sealers). Polishing typically targets higher sheen and uses densifiers/guards." },
    { q: "Can you polish outdoor concrete?", a: "Outdoor polished concrete is uncommon due to slip risk and weathering. For outdoors we usually recommend honing + sealer with slip control." },
    { q: "Will cracks disappear?", a: "Cracks can be repaired, but concrete moves. We can improve appearance but cannot guarantee cracks won’t reappear." },
    { q: "How glossy can it get?", a: "From matte to high gloss depending on the grit sequence and guard. We’ll recommend what suits your space." }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Concrete Polishing Perth\", \"description\": \"Concrete polishing in Perth (north of river). Mechanical grinding and polishing to matte, satin or gloss levels with densifiers and guards for a durable indoor finish.\", \"provider\": {\"@type\": \"HomeAndConstructionBusiness\", \"name\": \"Perth Concrete Care\", \"url\": \"https://perthconcretecare.com.au\", \"telephone\": \"+61448483226\", \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}, {\"@type\": \"Place\", \"name\": \"Butler, WA\"}, {\"@type\": \"Place\", \"name\": \"Joondalup, WA\"}, {\"@type\": \"Place\", \"name\": \"Wanneroo, WA\"}, {\"@type\": \"Place\", \"name\": \"Osborne Park, WA\"}, {\"@type\": \"Place\", \"name\": \"Malaga, WA\"}]}, \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}], \"serviceType\": \"Concrete Polishing Perth\", \"url\": \"https://perthconcretecare.com.au/concrete-polishing-perth\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://perthconcretecare.com.au/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Concrete Polishing Perth\", \"item\": \"https://perthconcretecare.com.au/concrete-polishing-perth\"}]}" }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-neutral-900">Concrete Polishing Perth</span>
        </div>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Concrete Polishing Perth
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          Polished concrete delivers a clean, modern look with excellent wear resistance. We use full mechanical steps — not a quick ‘shine and seal’ shortcut.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="tel:+61448483226" className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">
            Call 0448 483 226
          </a>
          <Link href="/#quote" className="rounded-xl border border-emerald-300 bg-white px-5 py-3 font-semibold hover:bg-neutral-50">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-neutral-900">What you get</h2>
            <ul className="mt-4 list-disc pl-6 text-neutral-700 space-y-2">
              <li>Mechanical polishing steps to reach the desired sheen</li>
<li>Densifier options to harden the surface</li>
<li>Grout coat / pore filling where required</li>
<li>Finish options: matte, satin, high gloss</li>
<li>Best suited for interior slabs and low-porosity substrates</li>
<li>Maintenance plan: simple cleaning + periodic refresh</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-neutral-900">Our process</h2>
            <ol className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 1</div>
              <div className="mt-1 font-semibold text-neutral-900">Assess suitability</div>
              <p className="mt-2 text-neutral-700">Check slab condition, aggregate exposure goals and existing coatings.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 2</div>
              <div className="mt-1 font-semibold text-neutral-900">Initial grind</div>
              <p className="mt-2 text-neutral-700">Open the surface and flatten to start the polishing sequence.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 3</div>
              <div className="mt-1 font-semibold text-neutral-900">Densify</div>
              <p className="mt-2 text-neutral-700">Apply densifier at the right stage to harden the slab.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 4</div>
              <div className="mt-1 font-semibold text-neutral-900">Refine the cut</div>
              <p className="mt-2 text-neutral-700">Progress through resin grits to build clarity and sheen.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 5</div>
              <div className="mt-1 font-semibold text-neutral-900">Guard/protection</div>
              <p className="mt-2 text-neutral-700">Optional guard for stain resistance and easier cleaning.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 6</div>
              <div className="mt-1 font-semibold text-neutral-900">Handover</div>
              <p className="mt-2 text-neutral-700">Care instructions and what to expect long-term.</p>
            </li>
            </ol>

                        <h2 className="mt-10 text-2xl font-bold text-neutral-900">FAQ</h2>
            <p className="mt-2 text-sm text-neutral-600">Click a question to expand.</p>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>


          </div>

          
          <aside className="rounded-3xl border border-emerald-200 bg-white p-7 h-fit">
            <h2 className="text-xl font-bold text-neutral-900">Service area</h2>
            <p className="mt-3 text-neutral-700">
              North of the river — Butler corridor, Joondalup/Wanneroo, Osborne Park and through to Perth CBD.
            </p>

            <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
              <div className="text-sm font-semibold text-neutral-800">Typical jobs</div>
              <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
                <li>Garages & workshops</li>
                <li>Alfresco & outdoor areas</li>
                <li>Warehouses & showrooms</li>
                <li>Driveway / slab prep</li>
              </ul>
            </div>

            <h3 className="mt-8 text-sm font-semibold text-neutral-800 uppercase tracking-wide">Related pages</h3>
            <div className="mt-3 grid gap-3">
            <Link href="/honed-concrete-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Honed concrete →
            </Link>
            <Link href="/concrete-grinding-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Concrete grinding →
            </Link>
            <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Epoxy flake floors →
            </Link>
            <Link href="/contact" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Contact →
            </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="font-semibold text-emerald-900">Free quotes</div>
              <p className="mt-2 text-emerald-900/80">
                Send dimensions + photos and we’ll give you a clear scope and price.
              </p>
              <Link href="/#quote" className="mt-4 inline-block rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">
                Request a quote
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

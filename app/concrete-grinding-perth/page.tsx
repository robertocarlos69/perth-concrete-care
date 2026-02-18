import type { Metadata } from "next";
import Link from "next/link";


import FaqAccordion from "../components/FaqAccordion";
export const metadata: Metadata = {
  title: "Concrete Grinding Perth | Perth Concrete Care",
  description: "Concrete grinding and mechanical surface preparation across Perth (north of river). Remove coatings, level high spots, and prep to CSP2–CSP3 for epoxy and sealers.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-grinding-perth",
  },
  openGraph: {
    title: "Concrete Grinding Perth | Perth Concrete Care",
    description: "Concrete grinding and mechanical surface preparation across Perth (north of river). Remove coatings, level high spots, and prep to CSP2–CSP3 for epoxy and sealers.",
    url: "https://perthconcretecare.com.au/concrete-grinding-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  const faqs = [
    { q: "What is CSP2–CSP3?", a: "Concrete Surface Profile is the roughness required for coating adhesion. CSP2–CSP3 is typical for epoxy and polyaspartic systems." },
    { q: "Can you grind new concrete?", a: "Yes — once it’s cured enough to grind without tearing. We’ll advise timing based on the slab and finish required." },
    { q: "Will grinding make my slab perfectly level?", a: "Grinding can correct many high spots and minor undulations. Major level issues may require patching or resurfacing." },
    { q: "Do you use acid etch?", a: "No. For professional coatings, mechanical grinding is the reliable method for adhesion." }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Concrete Grinding Perth\", \"description\": \"Concrete grinding and mechanical surface preparation across Perth (north of river). Remove coatings, level high spots, and prep to CSP2\u2013CSP3 for epoxy and sealers.\", \"provider\": {\"@type\": \"HomeAndConstructionBusiness\", \"name\": \"Perth Concrete Care\", \"url\": \"https://perthconcretecare.com.au\", \"telephone\": \"+61448483226\", \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}, {\"@type\": \"Place\", \"name\": \"Butler, WA\"}, {\"@type\": \"Place\", \"name\": \"Joondalup, WA\"}, {\"@type\": \"Place\", \"name\": \"Wanneroo, WA\"}, {\"@type\": \"Place\", \"name\": \"Osborne Park, WA\"}, {\"@type\": \"Place\", \"name\": \"Malaga, WA\"}]}, \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}], \"serviceType\": \"Concrete Grinding Perth\", \"url\": \"https://perthconcretecare.com.au/concrete-grinding-perth\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://perthconcretecare.com.au/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Concrete Grinding Perth\", \"item\": \"https://perthconcretecare.com.au/concrete-grinding-perth\"}]}" }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-neutral-900">Concrete Grinding Perth</span>
        </div>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Concrete Grinding Perth
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          Industrial diamond grinding for slab preparation, coating removal and profile control. The job is won or lost in the prep — we do it properly.
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
              <li>CSP2–CSP3 mechanical profile for coatings and resins</li>
<li>Old coating/paint/adhesive removal (where feasible)</li>
<li>Edge work and detail grinding</li>
<li>Dust-controlled grinding with extraction</li>
<li>Assessment of hardness and diamond selection</li>
<li>Prep for epoxy, polyurethane, polyaspartic, and sealers</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-neutral-900">Our process</h2>
            <ol className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 1</div>
              <div className="mt-1 font-semibold text-neutral-900">Site inspection</div>
              <p className="mt-2 text-neutral-700">Identify coatings, contaminants, slab condition and target finish.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 2</div>
              <div className="mt-1 font-semibold text-neutral-900">Grind & level</div>
              <p className="mt-2 text-neutral-700">Remove laitance/coatings and level high spots as required.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 3</div>
              <div className="mt-1 font-semibold text-neutral-900">Profile to spec</div>
              <p className="mt-2 text-neutral-700">Dial in CSP and scratch pattern to match the coating system.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 4</div>
              <div className="mt-1 font-semibold text-neutral-900">Detail work</div>
              <p className="mt-2 text-neutral-700">Edges, corners and tight areas with hand grinders.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 5</div>
              <div className="mt-1 font-semibold text-neutral-900">Vacuum & clean</div>
              <p className="mt-2 text-neutral-700">Thorough dust removal prior to priming/coating.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 6</div>
              <div className="mt-1 font-semibold text-neutral-900">Ready for coating</div>
              <p className="mt-2 text-neutral-700">Final inspection and substrate handover for installation.</p>
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
            <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Epoxy flake floors →
            </Link>
            <Link href="/metallic-epoxy-flooring-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Metallic epoxy floors →
            </Link>
            <Link href="/concrete-polishing-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Concrete polishing →
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

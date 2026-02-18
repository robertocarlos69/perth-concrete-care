import type { Metadata } from "next";
import Link from "next/link";


import FaqAccordion from "../components/FaqAccordion";
export const metadata: Metadata = {
  title: "Metallic Epoxy Flake Floors Perth | Perth Concrete Care",
  description: "Metallic epoxy flooring Perth for garages and commercial spaces. High-gloss decorative resin floors with custom movement patterns and durable topcoats.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/metallic-epoxy-flooring-perth",
  },
  openGraph: {
    title: "Metallic Epoxy Flake Floors Perth | Perth Concrete Care",
    description: "Metallic epoxy flooring Perth for garages and commercial spaces. High-gloss decorative resin floors with custom movement patterns and durable topcoats.",
    url: "https://perthconcretecare.com.au/metallic-epoxy-flooring-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  const faqs = [
    { q: "Are metallic floors slippery?", a: "They can be if finished smooth. We can incorporate texture in the topcoat where appropriate." },
    { q: "Will it look exactly like a photo?", a: "Metallic floors vary by slab, batch and movement technique. We aim for the same style, but each floor is one-of-one." },
    { q: "Can metallic epoxy go in garages?", a: "It can, but flake systems are usually more practical for garages. Metallic is best for feature areas and light-to-medium traffic." },
    { q: "Do you need perfect concrete?", a: "We need a properly prepared surface. We’ll repair and prep so the metallic finish performs." }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Metallic Epoxy Flake Floors Perth\", \"description\": \"Metallic epoxy floors in Perth (north of river). High-gloss decorative resin floors with unique movement patterns \u2014 installed over mechanically prepared slabs.\", \"provider\": {\"@type\": \"HomeAndConstructionBusiness\", \"name\": \"Perth Concrete Care\", \"url\": \"https://perthconcretecare.com.au\", \"telephone\": \"+61448483226\", \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}, {\"@type\": \"Place\", \"name\": \"Butler, WA\"}, {\"@type\": \"Place\", \"name\": \"Joondalup, WA\"}, {\"@type\": \"Place\", \"name\": \"Wanneroo, WA\"}, {\"@type\": \"Place\", \"name\": \"Osborne Park, WA\"}, {\"@type\": \"Place\", \"name\": \"Malaga, WA\"}]}, \"areaServed\": [{\"@type\": \"Place\", \"name\": \"Perth (North of the River), WA\"}], \"serviceType\": \"Metallic Epoxy Flake Floors Perth\", \"url\": \"https://perthconcretecare.com.au/metallic-epoxy-flooring-perth\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://perthconcretecare.com.au/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Metallic Epoxy Flake Floors Perth\", \"item\": \"https://perthconcretecare.com.au/metallic-epoxy-flooring-perth\"}]}" }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-neutral-900">Metallic Epoxy Flake Floors Perth</span>
        </div>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Metallic Epoxy Flake Floors Perth
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          A premium decorative epoxy finish with depth and movement. Each floor is unique — we focus on prep, clean installs and controlled effects.
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
              <li>Mechanical prep for a flat, bonded base</li>
<li>Colour consultation to suit your space and lighting</li>
<li>Controlled metallic movement (no muddy swirls)</li>
<li>Clear topcoat options for durability and easier maintenance</li>
<li>Suitable for showrooms, studios and feature areas</li>
<li>Realistic expectations on variation — every metallic floor is unique</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-neutral-900">Our process</h2>
            <ol className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 1</div>
              <div className="mt-1 font-semibold text-neutral-900">Design & sample</div>
              <p className="mt-2 text-neutral-700">Confirm colour direction and movement style (subtle to dramatic).</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 2</div>
              <div className="mt-1 font-semibold text-neutral-900">Prep the slab</div>
              <p className="mt-2 text-neutral-700">Diamond grind and repair so the metallic finish lays clean.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 3</div>
              <div className="mt-1 font-semibold text-neutral-900">Base + metallic layer</div>
              <p className="mt-2 text-neutral-700">Apply base coat then metallic layer with controlled effects.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 4</div>
              <div className="mt-1 font-semibold text-neutral-900">Detail and de-nib</div>
              <p className="mt-2 text-neutral-700">Address edges, pinholes and minor texture before topcoat.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 5</div>
              <div className="mt-1 font-semibold text-neutral-900">Topcoat</div>
              <p className="mt-2 text-neutral-700">Apply a protective clear coat suitable for your use case.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 6</div>
              <div className="mt-1 font-semibold text-neutral-900">Cure & care</div>
              <p className="mt-2 text-neutral-700">Cure guidance and cleaning/maintenance advice.</p>
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
            <Link href="/concrete-polishing-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Concrete polishing →
            </Link>
            <Link href="/concrete-grinding-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Concrete grinding →
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

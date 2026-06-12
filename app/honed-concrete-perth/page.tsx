import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


import FaqAccordion from "../components/FaqAccordion";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";
export const metadata: Metadata = {
  title: "Honed Concrete Perth",
  description: "Honed concrete (grind & seal) across Perth’s north of the river. A refined, slip-manageable finish for alfresco and outdoor areas with stain resistance",
  alternates: {
    canonical: "https://perthconcretecare.com.au/honed-concrete-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/honed-concrete-perth.webp",
        alt: "Honed and sealed concrete floor by Perth Concrete Care",
      },
    ],
        title: "Honed Concrete Perth | Perth Concrete Care",
    description: "Honed concrete (grind & seal) across Perth’s north of the river. A refined, slip-manageable finish for alfresco and outdoor areas with stain resistance",
    url: "https://perthconcretecare.com.au/honed-concrete-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  const faqs = [
    { q: "Is honed concrete slippery?", a: "It depends on grit level and sealer. We can tune finish and add traction to suit wet areas." },
    { q: "How is honing different to polishing?", a: "Honing is a lower sheen grind-and-seal. Polishing uses densifiers and higher grits to reach a shinier finish, usually indoors." },
    { q: "Will the sealer change the colour?", a: "Most sealers will deepen colour slightly (‘wet look’) depending on product. We can advise based on your desired appearance." },
    { q: "Can this be done on older slabs?", a: "Yes — as long as the concrete is sound. We’ll assess coatings, contamination and repairs first." }
  ];



  const jsonLd = servicePageJsonLd({
    name: "Honed Concrete Perth",
    serviceType: "Honed concrete and grind-and-seal flooring",
    description: "Honed concrete and grind-and-seal flooring across Perth north of the river for alfresco areas, pool surrounds, driveways and outdoor concrete areas.",
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

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-neutral-900">Honed Concrete Perth</span>
        </div>

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Honed Concrete Perth
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-neutral-700">
              Honed concrete is a practical upgrade for outdoor slabs — a controlled grind to expose fine aggregate, then a sealer suited to Perth conditions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+61448483226" className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 shadow-sm transition-colors">
                Call 0448 483 226
              </a>
              <Link href="/#quote" className="rounded-xl border border-emerald-300 bg-white px-5 py-3 font-semibold hover:bg-neutral-50">
                Get a free quote
              </Link>
            </div>
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

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-neutral-900">What you get</h2>
            <ul className="mt-4 list-disc pl-6 text-neutral-700 space-y-2">
              <li>Light-to-medium grind to refine texture and expose fine aggregate</li>
<li>Sealer selection to suit UV and weather exposure</li>
<li>Slip-rating options (P3–P5) depending on area</li>
<li>Great for alfresco, pathways and pool-adjacent zones</li>
<li>Cleaner look than raw broomed concrete</li>
<li>Easier maintenance with the right sealing system</li>
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-neutral-900">Our process</h2>
            <ol className="mt-4 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 1</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Inspect & plan</h3>
              <p className="mt-2 text-neutral-700">Confirm desired cut level, slip needs and sealer type.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 2</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Grind/hone</h3>
              <p className="mt-2 text-neutral-700">Mechanical grinding through the required grits for the finish.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 3</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Clean & dry</h3>
              <p className="mt-2 text-neutral-700">Prepare the surface for sealer adhesion and uniformity.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 4</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Seal</h3>
              <p className="mt-2 text-neutral-700">Apply penetrating or film-forming sealer as specified.</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 5</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Optional anti-slip</h3>
              <p className="mt-2 text-neutral-700">Add traction where required (wet zones).</p>
            </li>
            <li className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="text-sm font-semibold text-emerald-700">Step 6</div>
              <h3 className="mt-1 font-semibold text-neutral-900">Cure & aftercare</h3>
              <p className="mt-2 text-neutral-700">Cure times, cleaning advice and reseal intervals.</p>
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
              Perth north of the river — Butler corridor, Joondalup/Wanneroo, Osborne Park, North Perth and Perth CBD.
            </p>

            <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
              <h3 className="text-sm font-semibold text-neutral-800">Typical jobs</h3>
              <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
                <li>Garages & workshops</li>
                <li>Alfresco & outdoor areas</li>
                <li>Warehouses & showrooms</li>
                <li>Driveway / slab prep</li>
              </ul>
            </div>

            <h3 className="mt-8 text-sm font-semibold text-neutral-800 uppercase tracking-wide">Related pages</h3>
            <div className="mt-3 grid gap-3">
            <Link href="/concrete-polishing-perth" className="rounded-xl border border-emerald-200 bg-white px-4 py-3 hover:bg-neutral-50">
              Concrete polishing →
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
              <h3 className="font-semibold text-emerald-900">Free quotes</h3>
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

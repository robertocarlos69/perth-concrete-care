import type { Metadata } from "next";
import Link from "next/link";

import FaqAccordion from "../components/FaqAccordion";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Concrete Repair Perth",
  description:
    "Concrete repair across Perth: crack injection with two-part epoxy resin, control-joint repair, spalling and surface repair, done properly before it spreads or before a new floor goes down.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/concrete-repair-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/grind-and-seal-concrete-noranda.webp",
        alt: "Repaired and sealed concrete floor by Perth Concrete Care",
      },
    ],
    title: "Concrete Repair Perth | Perth Concrete Care",
    description:
      "Crack injection, joint repair and spalling repair with two-part epoxy resin across the Perth metro area.",
    url: "https://perthconcretecare.com.au/concrete-repair-perth",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

const whatWeRepair = [
  ["Crack injection", "Cracks cleaned out and injected with a two-part epoxy injection resin (for example Sikadur) that bonds the sides back together and seals the crack, rather than a soft filler that just hides it."],
  ["Control and expansion joints", "Failed, chipped or lifting joints cut back, cleaned and refilled so edges stop breaking down and the joint does its job again."],
  ["Spalling and surface breakdown", "Flaking, pitted or delaminated surface areas cut out and rebuilt with an epoxy or cementitious repair mortar to a sound, level finish."],
  ["Structural crack injection", "Wider or active cracks injected with structural-grade two-part epoxy. Where there is significant ongoing movement, we recommend an engineer's assessment first so the cause is addressed, not just the symptom."],
  ["Pre-coating repair", "Cracks, holes and low spots repaired before grinding and coating, so the new epoxy, flake or polished floor sits on a sound, level surface and doesn't telegraph or fail at the repair."],
  ["Pitting and bug holes", "Surface pitting and pin-holes filled and ground flush, common on older slabs and a must before a smooth coating goes down."],
];

const useCases = [
  "Cracked garage and workshop slabs before epoxy",
  "Warehouse and factory floor crack and joint repair",
  "Lifting or crumbling control joints",
  "Spalled, flaking or pitted concrete surfaces",
  "Repairs before grinding, polishing or coating",
  "Trip hazards from cracked or uneven slabs",
];

const processSteps = [
  ["Inspect and diagnose", "We look at the crack pattern, width, movement and the likely cause, and confirm whether it's a cosmetic, prep or structural repair so the right method is used."],
  ["Prepare the crack", "The crack is cut, cleaned and dried, and ports are set where needed so the resin reaches the full depth rather than sitting on the surface."],
  ["Inject or fill", "A two-part epoxy injection resin is pumped in under control, or the area is filled with the correct epoxy or cementitious repair mortar for the job."],
  ["Grind flush", "Once cured, the repair is ground back flush and profiled so it's level with the surrounding slab and ready for whatever finish follows."],
  ["Ready for finish or handover", "The slab is left sound and level, ready for a coating, polish or seal, or handed back as a completed standalone repair."],
];

export default function Page() {
  const faqs = [
    {
      q: "What do you fill concrete cracks with?",
      a: "We use a two-part epoxy injection resin (for example Sikadur) rather than a flexible caulk. A rigid two-part epoxy bonds the crack faces back together, carries load and leaves a sound surface, which a soft filler simply can't do. The right product depends on the crack width and whether it's still moving.",
    },
    {
      q: "Can you repair a cracked garage or warehouse floor before epoxy?",
      a: "Yes, and it's one of the most common reasons people call us. We inject and repair cracks, joints and spalling, then grind the repairs flush, so the new epoxy, flake or polished floor goes down on a sound, level slab and doesn't fail at the crack.",
    },
    {
      q: "Do you do structural crack repair?",
      a: "We inject many cracks with structural-grade two-part epoxy resin. Where a crack is wide, still actively moving or tied to a subfloor or footing problem, we'll recommend a structural engineer assess it first, so the underlying cause is fixed rather than the crack just being filled.",
    },
    {
      q: "Will the repair be invisible?",
      a: "Structurally the repair is sound and level. Under a coating or a full-flake floor the repair disappears completely. On bare or polished concrete a faint repair line can remain, because we're matching decades-old concrete, and we'll be upfront about that before we start.",
    },
    {
      q: "What causes concrete to crack?",
      a: "Usually shrinkage as the slab cured, ground or footing movement, heavy point loads, or moisture and reactive soils. We identify the likely cause during inspection so the repair method suits the crack and it's less likely to come back.",
    },
    {
      q: "How much does concrete repair cost in Perth?",
      a: "Repair is quoted per job because it depends on the number and length of cracks, joint work, spalling area and access. Send a few photos and rough measurements and we'll come back with a clear scope and a fixed written price.",
    },
  ];

  const jsonLd = servicePageJsonLd({
    name: "Concrete Repair Perth",
    serviceType: "Concrete crack, joint and spalling repair",
    description:
      "Concrete crack injection with two-part epoxy resin, control-joint repair and spalling repair across the Perth metro area, as a standalone fix or before grinding and coating.",
    url: `${siteUrl}/concrete-repair-perth`,
    breadcrumbName: "Concrete Repair Perth",
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
          <span className="text-stone-900">Concrete Repair Perth</span>
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
            Concrete Repair Perth
          </h1>
          <p className="mt-5 text-lg text-stone-700 leading-relaxed">
            Cracks, failed joints and spalling fixed properly, before they
            spread or before a new floor goes down. We inject cracks with
            two-part epoxy resin, rebuild broken joints and spalled surfaces, and
            grind the repairs flush so the slab is sound, level and ready for
            whatever comes next.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-[15px] text-stone-700">
            {[
              "Crack injection with two-part epoxy (e.g. Sikadur)",
              "Control and expansion joint repair",
              "Spalling, pitting and surface repair",
              "Repairs ground flush, ready to coat",
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
            Page updated July 2026
          </p>
        </div>
      </section>

      {/* WHAT WE REPAIR — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            What we repair
          </h2>
          <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
            Most concrete problems are fixable if they're dealt with correctly
            and early. Here's the work we do most, whether it's a standalone
            repair or prep before a new floor.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeRepair.map(([title, desc]) => (
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
          When you need concrete repair
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
            Our repair process
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

      {/* COST — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          How much does concrete repair cost in Perth?
        </h2>
        <p className="mt-4 max-w-3xl text-stone-700 leading-relaxed">
          Repair is quoted per job, because a single hairline crack and a
          warehouse full of failed joints are very different pieces of work. The
          price comes down to the number and length of cracks, how much joint or
          spalling repair is involved, whether it's structural, and site access.
          Where the repair is prep for a new floor, it's usually rolled into the
          {" "}
          <Link href="/concrete-grinding-perth" className="font-semibold text-emerald-700 hover:underline">grinding and preparation</Link>{" "}
          quote for that floor. Send a few photos and rough measurements and
          we'll come back with a clear scope and a fixed written price.
        </p>
        <div className="mt-6">
          <Link href="/#quote" className="inline-block rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
            Get a repair quote
          </Link>
        </div>
      </section>

      {/* SERVICE AREA + RELATED — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900">Service area</h2>
              <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                The Perth metro area, north and south of the river, from the
                Butler corridor and Joondalup to Rossmoyne, Canning Vale and
                Fremantle.
              </p>
              <h3 className="mt-6 text-sm font-bold text-stone-800">Typical jobs</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-stone-700 space-y-1.5">
                <li>Garages &amp; workshops</li>
                <li>Warehouses &amp; factories</li>
                <li>Driveways &amp; paths</li>
                <li>Repairs before coating</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900">Free quotes</h2>
              <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                Send photos of the cracks, joints or damage with rough
                measurements and we'll give you a clear scope and a fixed price.
              </p>
              <Link href="/#quote" className="mt-6 inline-block w-full rounded-xl bg-emerald-600 px-4 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors">
                Request a quote
              </Link>
              <p className="mt-3 text-xs text-stone-500">
                Fixed-price written quote · No obligation
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-7 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900">Related services</h2>
              <div className="mt-4 grid gap-3 text-sm">
                <Link href="/concrete-grinding-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete grinding &amp; prep →</Link>
                <Link href="/concrete-polishing-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Concrete polishing →</Link>
                <Link href="/epoxy-flake-flooring-perth" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Epoxy flake floors →</Link>
                <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200">Contact →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Concrete repair FAQ
        </h2>
        <p className="mt-2 text-sm text-stone-600">Click a question to expand.</p>
        <div className="mt-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="bg-stone-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Got a cracked or damaged slab?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Deal with it before it spreads or before you lay a new floor. Send
              photos and measurements and we'll come back with a clear scope and
              a fixed written price.
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

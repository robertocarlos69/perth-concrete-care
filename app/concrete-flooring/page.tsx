import type { Metadata } from "next";
import Link from "next/link";

import { breadcrumbSchema } from "../lib/schema";
import { business, siteUrl } from "../lib/site";
import { suburbs } from "../lib/suburbs";

const pageUrl = `${siteUrl}/concrete-flooring`;

export const metadata: Metadata = {
  title: "Areas We Serve — Concrete Flooring Across Perth",
  description:
    "Concrete polishing, grinding, epoxy flake, metallic epoxy and hone & seal across Perth's northern suburbs — from Butler and Yanchep to Osborne Park and the CBD. Find your suburb.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Areas We Serve — Concrete Flooring Across Perth | Perth Concrete Care",
    description:
      "Concrete flooring, epoxy and polishing across Perth's northern suburbs. Find your suburb and see what we offer locally.",
    url: pageUrl,
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function AreasIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", url: `${siteUrl}/` },
          { name: "Areas We Serve", url: pageUrl },
        ],
        pageUrl
      ),
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#suburbs`,
        itemListElement: suburbs.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Concrete flooring ${s.name}`,
          url: `${siteUrl}/concrete-flooring/${s.slug}`,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>›</span>
          <span className="text-stone-900">Areas We Serve</span>
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
            Concrete Flooring Across Perth&apos;s Northern Suburbs
          </h1>
          <p className="mt-5 text-lg text-stone-700 leading-relaxed">
            We install epoxy flake, metallic epoxy, polished concrete, honed
            concrete and grind-and-seal finishes across Perth north of the river
            — from the Butler corridor and Yanchep on the coast, through
            Joondalup and Wanneroo, to the Osborne Park, Wangara and Malaga
            commercial precincts. Find your suburb below to see what we do
            locally, or call {business.phoneDisplay} for a free quote.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${business.phoneHref}`}
              className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/#quote"
              className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* SUBURB GRID */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <h2 className="sr-only">Suburbs we serve</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {suburbs.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/concrete-flooring/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
              >
                <span className="text-lg font-bold text-stone-900 group-hover:text-emerald-700">
                  Concrete flooring {s.name}
                </span>
                <span className="mt-1 text-sm text-stone-500">{s.region}</span>
                <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                  View {s.name} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM CTA BAND */}
      <section className="bg-stone-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Don&apos;t see your suburb?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              We cover all of Perth north of the river. Send photos and
              measurements and we&apos;ll come back with a clear scope and a
              fixed written price.
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
              href={`tel:${business.phoneHref}`}
              className="rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

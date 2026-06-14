import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl, trustSignals } from "../../lib/site";
import {
  getSuburb,
  sharedSuburbFaqs,
  suburbs,
  suburbServices,
} from "../../lib/suburbs";

type RouteParams = { suburb: string };

export function generateStaticParams(): RouteParams[] {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

// Only render the suburbs we've written real content for; anything else 404s.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const data = getSuburb(suburb);
  if (!data) return {};

  const url = `${siteUrl}/concrete-flooring/${data.slug}`;
  const title = `Concrete Flooring & Epoxy ${data.name}`;

  return {
    title,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Perth Concrete Care`,
      description: data.metaDescription,
      url,
      siteName: "Perth Concrete Care",
      type: "website",
      images: [{ url: data.image, alt: data.imageAlt }],
    },
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { suburb } = await params;
  const data = getSuburb(suburb);
  if (!data) notFound();

  const url = `${siteUrl}/concrete-flooring/${data.slug}`;
  const faqs = [...data.localFaqs, ...sharedSuburbFaqs(data.name)];
  const nearby = data.nearby
    .map((slug) => getSuburb(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Concrete flooring ${data.name}`,
        serviceType: "Concrete flooring, epoxy and polishing",
        description: data.metaDescription,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "Place", name: `${data.name}, WA` },
        url,
      },
      breadcrumbSchema(
        [
          { name: "Home", url: `${siteUrl}/` },
          { name: `Concrete Flooring ${data.name}`, url },
        ],
        url
      ),
      faqPageSchema(faqs, url),
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-16 md:pb-20">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>›</span>
          <span className="text-stone-900">Concrete Flooring {data.name}</span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Concrete Flooring &amp; Epoxy {data.name}
            </h1>
            <p className="mt-5 text-lg text-stone-700 leading-relaxed">
              {data.heroIntro}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-[15px] text-stone-700">
              {[
                "Epoxy flake, metallic, polished & hone-and-seal",
                "Slab prep to the correct CSP profile",
                "H-class HEPA dust-controlled grinding",
                "Fully insured · free fixed-price quotes",
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
            <p className="mt-4 text-sm text-stone-500">
              Serving {data.region} · Most enquiries answered within 24 hours ·
              Page updated June 2026
            </p>
          </div>

          {/* Featured local project */}
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs font-medium text-stone-500">
              {data.imageLabel}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* LOCAL CONTEXT — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
            Concrete &amp; epoxy floors for {data.name} homes
          </h2>
          <p className="mt-4 max-w-3xl text-stone-700 leading-relaxed">
            {data.localContext}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustSignals.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Flooring services we offer in {data.name}
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          Not sure which finish suits your floor? Send a photo with your quote
          and we&apos;ll recommend the right system for the way you use the
          space — including telling you if a cheaper option will do the job.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {suburbServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
            >
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {s.blurb}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE + NEARBY — white band */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm lg:col-span-2">
              <h2 className="text-xl font-bold text-stone-900">
                Free quotes for {data.name}
              </h2>
              <p className="mt-4 text-sm text-stone-700 leading-relaxed">
                Send your dimensions and a few photos — including any existing
                coating, cracks or damage — and we&apos;ll come back with a clear
                scope and a fixed written price. No obligation, and we don&apos;t
                hard-sell.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#quote"
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white hover:bg-emerald-700 transition-colors"
                >
                  Request a quote
                </Link>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="rounded-xl border border-emerald-300 bg-white px-5 py-3 text-center font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
                >
                  Call {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900">
                Nearby areas
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {nearby.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/concrete-flooring/${s.slug}`}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-3 hover:bg-stone-50 hover:border-emerald-300 hover:translate-x-1 transition-all duration-200"
                  >
                    Concrete flooring {s.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — stone band */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          {data.name} concrete flooring FAQ
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
              Thinking about a new floor in {data.name}?
            </h2>
            <p className="mt-2 text-stone-300 max-w-xl">
              Send photos and measurements and we&apos;ll come back with a clear
              scope and a fixed written price — from a local who does the work
              himself.
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

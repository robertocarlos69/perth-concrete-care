import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epoxy Floor Colour Visualiser Perth",
  description:
    "Preview epoxy flake floor colours and finishes with our interactive visualiser. Compare styles for garages, patios, workshops and commercial floors across Perth.",
  keywords: [
    "epoxy floor visualiser Perth",
    "epoxy flake colour visualiser Perth",
    "garage floor colour visualiser Perth",
    "epoxy floor colours Perth",
    "epoxy flake flooring Perth",
  ],
  alternates: {
    canonical: "https://perthconcretecare.com.au/epoxy-floor-visualiser-perth",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/epoxy-floor-visualiser-perth",
    title: "Epoxy Floor Colour Visualiser Perth",
    description:
      "Preview epoxy flake floor colours and finishes with our interactive visualiser for Perth garages, patios, workshops and commercial spaces.",
  },
};

export default function VisualiserPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            name: "Epoxy Floor Colour Visualiser Perth",
            item: "https://perthconcretecare.com.au/epoxy-floor-visualiser-perth",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Epoxy Floor Colour Visualiser",
        serviceType: "Epoxy flake flooring colour selection",
        areaServed: "Perth WA",
        provider: {
          "@type": "LocalBusiness",
          name: "Perth Concrete Care",
          url: "https://perthconcretecare.com.au/",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does the epoxy floor colour visualiser help with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It helps you preview epoxy flake colours and floor styles before installation so you can shortlist finishes for garages, patios, workshops and commercial spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Will the final colour look exactly the same as the screen preview?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Screen previews are a useful guide, but lighting, slab condition and topcoat finish can affect the final appearance slightly. Perth Concrete Care can help confirm your final colour choice before installation.",
            },
          },
          {
            "@type": "Question",
            name: "Can I get a quote after using the visualiser?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Once you have shortlisted your preferred flake colours, contact Perth Concrete Care for a quote and send through screenshots of the styles you like.",
            },
          },
        ],
      },
    ],
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <li>
            <Link href="/" className="hover:text-neutral-900 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-neutral-400">/</li>
          <li className="font-semibold text-neutral-900">Epoxy Floor Colour Visualiser Perth</li>
        </ol>
      </nav>

      <header className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4">
          Epoxy Floor Colour Visualiser Perth
        </h1>

        <p className="text-lg text-neutral-700 mb-6">
          Use our epoxy floor visualiser to preview flake colours and flooring styles before you book.
          Compare finishes for garages, patios, workshops, alfresco areas and commercial floors across Perth.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="https://perthconcretecare.floorai.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700"
          >
            Open Full Visualiser
          </a>
          <Link
            href="/#quote"
            className="inline-flex items-center rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50"
          >
            Request a Free Quote
          </Link>
        </div>
      </header>

      <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-lg">
        <iframe
          src="https://perthconcretecare.floorai.com.au/"
          title="Epoxy Floor Colour Visualiser Perth"
          className="w-full border-0"
          style={{ minHeight: "1100px", height: "80vh" }}
          loading="lazy"
          allowFullScreen
        />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            How to use the visualiser
          </h2>
          <p className="text-neutral-700">
            Try different epoxy flake colours to see what suits your garage, patio, showroom or workshop.
            Once you find a style you like, send Perth Concrete Care screenshots so we can price the job accurately.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Popular uses in Perth
          </h2>
          <p className="text-neutral-700">
            Epoxy flake flooring is a strong option for garages, home gyms, workshops, laundries, patios,
            alfresco areas and selected commercial interiors where you want a durable, easy-to-clean finish.
          </p>
        </div>
      </section>

      <section className="mt-10 max-w-4xl space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900">
          Compare epoxy flake colours before installation
        </h2>
        <p className="text-neutral-700">
          Choosing the right flake blend can change the whole look of your floor. Lighter blends can brighten a garage,
          while darker blends can hide tyre marks and create a bolder finish. This visualiser gives you a practical way
          to compare options before your site visit.
        </p>
        <p className="text-neutral-700">
          Please note that colours may vary slightly depending on lighting, slab texture and the final topcoat.
          We can help confirm the right blend for your project during quoting.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border border-emerald-500 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">
          Related epoxy flooring pages
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/epoxy-flake-flooring-perth"
            className="rounded-xl border border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Epoxy Flake Flooring Perth
          </Link>
          <Link
            href="/#contact"
            className="rounded-xl border border-emerald-600 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Contact Perth Concrete Care
          </Link>
        </div>
      </section>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote for epoxy flooring, concrete grinding, honed concrete, polishing or metallic epoxy across the Perth metro area. Call 0448 483 226.",
  alternates: { canonical: "https://perthconcretecare.com.au/contact" },
  openGraph: {
    images: [
      {
        url: "/gallery/honed-concrete-perth.webp",
        alt: "Honed and sealed concrete floor by Perth Concrete Care",
      },
    ],
        title: "Contact | Perth Concrete Care",
    description:
      "Request a free quote for epoxy flooring, concrete grinding, honed concrete, polishing or metallic epoxy across the Perth metro area.",
    url: "https://perthconcretecare.com.au/contact",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://perthconcretecare.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://perthconcretecare.com.au/contact" },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="text-neutral-800">Contact</span>
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Contact Perth Concrete Care
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-neutral-700">
          Get a clear scope and written quote for epoxy flooring, concrete grinding, honing, polishing or metallic epoxy.
          We service the <strong>Perth metro area</strong>, north and south of the river, from Joondalup and Wanneroo through the city to Rossmoyne, Willetton and Fremantle.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="tel:+61448483226" className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 shadow-sm transition-colors">
            Call 0448 483 226
          </a>
          <a href="mailto:sales@perthconcretecare.com.au" className="rounded-xl border border-emerald-300 bg-white px-5 py-3 font-semibold hover:bg-neutral-50">
            Email us
          </a>
        </div>
      </section>

      <ContactClient />
    </main>
  );
}

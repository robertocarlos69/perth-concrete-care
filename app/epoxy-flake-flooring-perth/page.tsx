import type { Metadata } from "next";
import EpoxyFlakeClient from "./EpoxyFlakeClient";

export const metadata: Metadata = {
  title: "Epoxy Flake Floors Perth",
  description:
    "Epoxy flake floors in Perth for garages, workshops and homes. Correct diamond grinding preparation, flake broadcast options, and durable topcoats. View popular flake choices and get a free quote.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
    title: "Epoxy Flake Floors Perth",
    description:
      "Durable epoxy flake flooring in Perth with correct surface preparation. Browse popular flake blends and request a free quote.",
  },
};

export default function EpoxyFlakeFlooringPerthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://perthconcretecare.com.au/#business",
        name: "Perth Concrete Care",
        url: "https://perthconcretecare.com.au/",
        telephone: "+61 448 483 226",
        email: "sales@perthconcretecare.com.au",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Perth",
          addressRegion: "WA",
          addressCountry: "AU",
        },
        areaServed: [
          "Perth WA",
          "Joondalup WA",
          "Wanneroo WA",
          "Wangara WA",
          "Malaga WA",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://perthconcretecare.com.au/epoxy-flake-flooring-perth#service",
        serviceType: "Epoxy flake flooring",
        provider: { "@id": "https://perthconcretecare.com.au/#business" },
        areaServed: "Perth, WA",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://perthconcretecare.com.au/epoxy-flake-flooring-perth#breadcrumb",
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
            name: "Epoxy Flake Floors",
            item: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EpoxyFlakeClient />
    </main>
  );
}

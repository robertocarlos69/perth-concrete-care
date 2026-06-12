import type { Metadata } from "next";
import EpoxyFlakeClient from "./EpoxyFlakeClient";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Epoxy Flake Flooring Perth",
  description:
    "Epoxy flake flooring Perth for garages and workshops. Preview colours with our epoxy floor visualiser, then book a quote for a durable, non-slip flake finish.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
  },
  openGraph: {
    images: [
      {
        url: "/gallery/honed-concrete-perth.webp",
        alt: "Honed and sealed concrete floor by Perth Concrete Care",
      },
    ],
        type: "website",
    url: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
    title: "Epoxy Flake Flooring Perth",
    description:
      "Epoxy flake flooring Perth for garages and workshops. Preview colours with our epoxy floor visualiser, then book a quote for a durable, non-slip flake finish.",
  },
};

export default function EpoxyFlakeFlooringPerthPage() {
  const jsonLd = servicePageJsonLd({
    name: "Epoxy Flake Flooring Perth",
    serviceType: "Epoxy flake flooring",
    description:
      "Epoxy flake flooring for garages, workshops, patios and commercial spaces across Perth north of the river.",
    url: `${siteUrl}/epoxy-flake-flooring-perth`,
    breadcrumbName: "Epoxy Flake Floors",
  });

  return (
    <main className="min-h-screen bg-stone-100 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EpoxyFlakeClient />
    </main>
  );
}
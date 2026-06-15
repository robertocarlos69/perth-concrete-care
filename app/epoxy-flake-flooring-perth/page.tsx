import type { Metadata } from "next";
import EpoxyFlakeClient from "./EpoxyFlakeClient";
import { servicePageJsonLd } from "../lib/schema";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Epoxy Flake Flooring Perth: From $80/m²",
  description:
    "Durable, non-slip epoxy flake flooring for Perth garages & workshops, from $80/m². 20+ flake colours, UV-stable topcoat, free quotes. Preview colours online.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
  },
  openGraph: {
    images: [
      {
        url: "/flake-choices/river-stone-epoxy-flake.webp",
        alt: "River Stone epoxy flake flooring finish by Perth Concrete Care",
      },
    ],
    type: "website",
    url: "https://perthconcretecare.com.au/epoxy-flake-flooring-perth",
    title: "Epoxy Flake Flooring Perth: From $80/m² | Perth Concrete Care",
    description:
      "Durable, non-slip epoxy flake flooring for Perth garages & workshops, from $80/m². 20+ flake colours, UV-stable topcoat, free quotes. Preview colours online.",
  },
};

const faqs = [
  {
    q: "How much does epoxy flake flooring cost in Perth?",
    a: "Epoxy flake flooring in Perth typically costs $80-$100 per square metre installed, including surface preparation, the flake system and a UV-stable protective topcoat. Final pricing depends on slab condition, area size, repairs and access - larger areas achieve a lower per-m2 rate.",
  },
  {
    q: "How soon can I park on a new epoxy flake floor?",
    a: "Foot traffic is usually fine within 24 hours and vehicle traffic after about 3-5 days, depending on the system and weather. We give you exact cure times for your floor at handover so you don't mark the coating early.",
  },
  {
    q: "Will epoxy flake flooring peel or lift?",
    a: "Peeling almost always comes down to poor preparation, not the product. We mechanically grind the slab to the correct CSP profile, repair and clean it before coating, which is what gives a flake floor its long bond. Skipping prep is why cheap jobs fail.",
  },
  {
    q: "Is epoxy flake flooring slippery?",
    a: "The flake itself adds texture, and the topcoat can include an anti-slip additive for garages, workshops and wet areas. We tune the finish to the room so it's safe underfoot without being hard to clean.",
  },
  {
    q: "Does epoxy flake flooring fade in the sun?",
    a: "We finish with a UV-stable polyaspartic or polyurethane topcoat selected for WA conditions, so the floor resists the yellowing that affects cheaper epoxy-only systems in sunlight.",
  },
  {
    q: "Can you apply flake flooring over an existing slab?",
    a: "Yes - most jobs are on existing garage and workshop slabs. As long as the concrete is sound, we grind back old coatings, repair cracks and prepare the surface before applying your chosen flake system.",
  },
  {
    q: "What's the difference between full, partial and sparse flake?",
    a: "It refers to how densely the flake is broadcast. A full broadcast covers the floor completely for maximum texture and a premium look; partial and sparse use less flake over a coloured base for a more economical finish. We'll show you examples for each.",
  },
  {
    q: "How long does an epoxy flake garage floor take to install?",
    a: "A typical single or double garage is completed in 1-2 days including preparation. We confirm timing in your quote based on the slab condition and the system you choose.",
  },
];

export default function EpoxyFlakeFlooringPerthPage() {
  const jsonLd = servicePageJsonLd({
    name: "Epoxy Flake Flooring Perth",
    serviceType: "Epoxy flake flooring",
    description:
      "Epoxy flake flooring for garages, workshops, patios and commercial spaces across the Perth metro area.",
    url: `${siteUrl}/epoxy-flake-flooring-perth`,
    breadcrumbName: "Epoxy Flake Floors",
    faqs,
  });

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EpoxyFlakeClient faqs={faqs} />
    </main>
  );
}

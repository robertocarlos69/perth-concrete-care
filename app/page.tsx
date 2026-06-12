import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "./lib/schema";
import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  title: "Concrete Polishing, Grinding & Epoxy Flooring Perth",
  description:
    "Perth Concrete Care provides concrete polishing, concrete grinding, honed concrete, epoxy flake flooring and metallic epoxy floors across Perth north of the river. Free quotes for residential and commercial floors.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/",
  },
  openGraph: {
    title: "Concrete Polishing, Grinding & Epoxy Flooring Perth",
    description:
      "Concrete polishing, grinding, honed concrete, epoxy flake flooring and metallic epoxy floors across Perth north of the river by Perth Concrete Care.",
    url: "https://perthconcretecare.com.au/",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

const homeFaqs = [
  { q: "How dusty is grinding?", a: "We use H-class HEPA extractors and shrouds. Expect minimal dust; we mask and protect adjacent areas." },
  { q: "How soon can we park on epoxy flake garage?", a: "Light foot traffic is usually around 12–24 hours. Vehicles are typically 72 hours depending on temperature and the flooring system used." },
  { q: "Can you remove carpet glue and tile adhesive?", a: "Yes. We use PCD or carbide tooling with dust extraction to remove adhesives and prepare the slab for new finishes." },
  { q: "Do you service both indoor and outdoor areas?", a: "Yes. We work on garages, living rooms, shops, warehouses, alfresco areas, driveways and pool surrounds." },
  { q: "Is polished concrete slippery?", a: "Properly finished polished concrete with the right guard and maintenance can meet slip-rating requirements. Outdoors, we usually recommend hone-and-seal systems." },
  { q: "What affects price?", a: "Price is affected by square metres, slab hardness, crack repairs, access, moisture issues, edge/detail work and the flooring system selected." },
  { q: "What is CSP and why does it matter?", a: "CSP means Concrete Surface Profile. It describes the texture created by mechanical preparation and helps coatings, primers and sealers bond correctly." },
  { q: "What is the difference between exposed concrete and washed aggregate?", a: "Washed aggregate is exposed while the concrete is fresh using retarder and washing. Exposed or honed concrete is ground after curing for a smoother and more refined finish." },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    faqPageSchema(homeFaqs, `${siteUrl}/`),
    serviceSchema({
      name: "Concrete polishing, grinding and epoxy flooring Perth",
      serviceType: "Concrete flooring services",
      description:
        "Concrete grinding, polishing, honing, exposed aggregate honing, epoxy flake flooring and metallic epoxy flooring across Perth north of the river.",
      url: `${siteUrl}/`,
    }),
    breadcrumbSchema([{ name: "Home", url: `${siteUrl}/` }], `${siteUrl}/`),
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeClient />
    </>
  );
}

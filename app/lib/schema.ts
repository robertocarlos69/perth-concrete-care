import { business, serviceAreas, services, siteUrl } from "./site";

export type FaqItem = { q: string; a: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: `${siteUrl}/`,
    image: `${siteUrl}/perth-concrete-care-logo.png`,
    logo: `${siteUrl}/perth-concrete-care-logo.png`,
    hasMap: business.googleMapsUrl,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Google Place ID",
      value: business.googlePlaceId,
    },
    telephone: business.phoneSchema,
    email: business.email,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneSchema,
      contactType: "customer service",
      areaServed: "AU-WA",
      availableLanguage: ["English"],
    },
    sameAs: [business.instagramUrl, business.pinterestUrl, business.googleBusinessUrl],
    knowsAbout: [
      "Concrete polishing",
      "Concrete grinding",
      "Concrete honing",
      "Epoxy flake flooring",
      "Metallic epoxy flooring",
      "Washed aggregate restoration",
      "Hone and seal concrete",
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: service.serviceType,
        url: service.url,
        areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
      },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Service",
    "@id": `${input.url}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })),
    url: input.url,
  };
}

export function faqPageSchema(faqs: FaqItem[], pageUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>, pageUrl: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function servicePageJsonLd(input: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  breadcrumbName: string;
  faqs?: FaqItem[];
}) {
  const graph: object[] = [
    serviceSchema(input),
    breadcrumbSchema(
      [
        { name: "Home", url: `${siteUrl}/` },
        { name: input.breadcrumbName, url: input.url },
      ],
      input.url
    ),
  ];

  if (input.faqs?.length) {
    graph.push(faqPageSchema(input.faqs, input.url));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

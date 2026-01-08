import HomeClient from "./HomeClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
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
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy flake flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete grinding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metallic epoxy floors" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Honed / exposed concrete" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete paint removal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Washed / exposed aggregate" } },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}

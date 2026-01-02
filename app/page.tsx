import HomeClient from "./HomeClient";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Perth Concrete Care", "url": "https://perthconcretecare.com.au/", "telephone": "+61 448 483 226", "email": "sales@perthconcretecare.com.au", "image": "https://perthconcretecare.com.au/og-image.jpg", "priceRange": "$$", "address": {"@type": "PostalAddress", "addressLocality": "Perth", "addressRegion": "WA", "addressCountry": "AU"}, "areaServed": ["Perth WA", "Joondalup WA", "Wanneroo WA", "Wangara WA", "Malaga WA", "Rockingham WA", "Dalkeith WA", "Claremont WA", "Cottesloe WA", "Mosman Park WA", "Peppermint Grove WA", "City Beach WA", "Floreat WA", "Wembley Downs WA", "Applecross WA", "Mount Pleasant WA", "South Perth WA", "Como WA", "Nedlands WA", "Subiaco WA", "Mount Claremont WA", "Karrinyup WA", "Trigg WA", "Scarborough WA"], "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "07:00", "closes": "18:00"}], "makesOffer": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Concrete grinding"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Concrete honing"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Concrete polishing"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Epoxy flake floors"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Metallic epoxy floors"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Washed aggregate"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Concrete paint removal"}}]}' }}
      />
      <HomeClient />
    </>
  );
}

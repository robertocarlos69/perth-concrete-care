import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Concrete Polishing, Grinding & Epoxy Flooring Perth",
  description:
    "Perth Concrete Care provides concrete polishing, concrete grinding, honed concrete, epoxy flake flooring and metallic epoxy floors across Perth. Free quotes for residential and commercial floors.",
  alternates: {
    canonical: "https://perthconcretecare.com.au/",
  },
  openGraph: {
    title: "Concrete Polishing, Grinding & Epoxy Flooring Perth",
    description:
      "Concrete polishing, grinding, honed concrete, epoxy flake flooring and metallic epoxy floors across Perth by Perth Concrete Care.",
    url: "https://perthconcretecare.com.au/",
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}

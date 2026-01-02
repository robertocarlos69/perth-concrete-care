import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concrete Grinding & Epoxy Floors Perth | Perth Concrete Care",
  description:
    "Perth Concrete Care specialises in concrete grinding, honing, polished concrete, epoxy garage floors, metallic epoxy floors, washed aggregate, exposed (honed) concrete and paint removal across Perth Metro.",
  keywords: [
    "concrete grinding Perth",
    "concrete polishing Perth",
    "concrete honing Perth",
    "epoxy garage floors Perth",
    "epoxy flake floors Perth",
    "metallic epoxy floors Perth",
    "washed aggregate Perth",
    "exposed concrete Perth",
    "concrete paint removal Perth",
  ],
  alternates: {
    canonical: "https://perthconcretecare.com.au/",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/",
    title: "Concrete Grinding & Epoxy Floors Perth | Perth Concrete Care",
    description:
      "Concrete grinding, honing, polishing, epoxy flake and metallic floors, plus washed aggregate and paint removal across Perth Metro.",
    siteName: "Perth Concrete Care",
    images: [
      {
        url: "https://perthconcretecare.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perth Concrete Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concrete Grinding & Epoxy Floors Perth | Perth Concrete Care",
    description:
      "Concrete grinding, honing, polishing, epoxy flake and metallic floors across Perth Metro.",
    images: ["https://perthconcretecare.com.au/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H6TMS5HZK3"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6TMS5HZK3');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

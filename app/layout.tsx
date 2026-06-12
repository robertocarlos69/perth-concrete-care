import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { business } from "./lib/site";
import { localBusinessSchema } from "./lib/schema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perthconcretecare.com.au"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default:
      "Concrete Polishing, Grinding & Epoxy Flooring Perth | Perth Concrete Care",
    template: "%s | Perth Concrete Care",
  },
  description:
    "Perth Concrete Care delivers epoxy flooring, flake floors, metallic epoxy, concrete grinding and polished concrete across Perth. Residential and commercial finishes north of the river. Free quotes.",
  keywords: [
    "epoxy flooring Perth",
    "epoxy flake flooring Perth",
    "garage epoxy floors Perth",
    "concrete grinding Perth",
    "metallic epoxy Perth",
    "concrete polishing Perth",
    "concrete honing Perth",
    "non slip epoxy Perth",
    "epoxy flooring Joondalup",
    "epoxy flooring Wanneroo",
    "epoxy flooring Butler",
    "epoxy flooring Subiaco",
    "concrete grinding Osborne Park",
  ],
  alternates: {
    canonical: "https://perthconcretecare.com.au/",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/",
    siteName: "Perth Concrete Care",
    title:
      "Concrete Polishing, Grinding & Epoxy Flooring Perth | Perth Concrete Care",
    description:
      "Concrete polishing, concrete grinding, epoxy flake floors and metallic epoxy specialists for Perth north of the river: Butler to Perth CBD. Free quotes.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Concrete Polishing, Grinding & Epoxy Flooring Perth | Perth Concrete Care",
    description:
      "Concrete polishing, grinding and epoxy flooring specialists for Perth north of the river: Butler to Perth CBD. Free quotes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = localBusinessSchema();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-stone-100 text-stone-800 font-sans antialiased pb-20 md:pb-0">
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

        {/* LocalBusiness Schema */}
        <script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <SiteHeader />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* Mobile sticky click-to-call CTA */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 px-4 py-3 shadow-[0_-8px_20px_rgba(28,25,23,0.10)] backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl gap-3">
            <a
              href={`tel:${business.phoneHref}`}
              className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
            >
              Call Rob
            </a>
            <a
              href="/#quote"
              className="flex-1 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-900"
            >
              Free Quote
            </a>
          </div>
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}

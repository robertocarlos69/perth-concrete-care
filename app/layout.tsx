import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://perthconcretecare.com.au"),
  title: {
    default: "Perth Concrete Care | Concrete Grinding & Epoxy Flooring Perth",
    template: "%s | Perth Concrete Care",
  },
  description:
    "Perth Concrete Care specialises in concrete grinding, epoxy flake floors, metallic epoxy, honed/exposed concrete and paint removal across Perth Metro.",
  keywords: [
    "epoxy flake floors Perth",
    "epoxy flake flooring Perth",
    "epoxy garage floors Perth",
    "flake flooring Perth",
    "concrete grinding Perth",
    "concrete honing Perth",
    "metallic epoxy floors Perth",
    "washed aggregate Perth",
    "garage floor coating Perth",
    "concrete paint removal Perth",
  ],
  alternates: {
    canonical: "https://perthconcretecare.com.au/",
  },
  openGraph: {
    type: "website",
    url: "https://perthconcretecare.com.au/",
    siteName: "Perth Concrete Care",
    title: "Perth Concrete Care | Concrete Grinding & Epoxy Flooring Perth",
    description:
      "Concrete grinding and epoxy flooring in Perth. Epoxy flake floors, metallic epoxy, honed/exposed concrete and paint removal.",
  },
  twitter: {
    card: "summary_large_image",
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
      <body className="bg-slate-50 text-slate-800">
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

        {/* TOP BAR */}
        <div className="w-full bg-slate-900 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <span>Perth Metro — Two Rocks to Rockingham</span>
            <div className="flex items-center gap-4">
              <a
                href="mailto:sales@perthconcretecare.com.au"
                className="hover:underline"
              >
                sales@perthconcretecare.com.au
              </a>
              <a
                href="tel:+61448483226"
                className="inline-flex items-center bg-white text-neutral-900 px-3 py-1 rounded-md font-medium hover:opacity-90"
              >
                Call 0448 483 226
              </a>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-emerald-100 text-neutral-900">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white shadow-sm ring-1 ring-neutral-200 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Perth Concrete Care"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-semibold">Perth Concrete Care</span>
            </Link>

            <ul className="hidden md:flex items-center gap-6 text-sm whitespace-nowrap">
              <li>
                <a href="/#services" className="text-neutral-800 hover:text-emerald-600 transition"
>
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/epoxy-flake-flooring-perth"
                  className="text-neutral-800 hover:text-emerald-600 transition font-medium"
                >
                  Epoxy Flakes
                </Link>
              </li>
              <li>
                <a href="/#gallery" className="text-neutral-800 hover:text-emerald-600 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#process" className="text-neutral-800 hover:text-emerald-600 transition">
                  Process
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-neutral-800 hover:text-emerald-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-neutral-800 hover:text-emerald-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-neutral-800 hover:text-emerald-600 transition">
                  Contact
                </a>
              </li>
            </ul>

            <a
              href="/#quote"
              className="ml-4 inline-flex items-center rounded-xl bg-emerald-600 text-white px-6 py-3 text-sm md:text-base font-semibold hover:bg-emerald-700 shadow-md"
            >
              Get a Quote
            </a>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}

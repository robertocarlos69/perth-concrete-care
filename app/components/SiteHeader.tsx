"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business } from "../lib/site";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/epoxy-flake-flooring-perth", label: "Epoxy Flakes" },
  { href: "/concrete-polishing-perth", label: "Polished" },
  { href: "/epoxy-floor-visualiser-perth", label: "Visualiser" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full bg-stone-950 text-stone-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <span className="hidden md:inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {business.serviceAreaShort}
          </span>
          <span className="md:hidden inline-flex items-center gap-1.5">
            <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            North Perth metro
          </span>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${business.email}`}
              className="hidden sm:inline text-stone-300 hover:text-white transition-colors"
            >
              {business.email}
            </a>
            <a
              href={`tel:${business.phoneHref}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white whitespace-nowrap hover:text-emerald-300 transition-colors"
            >
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200 text-stone-900 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
            <div className="h-11 w-11 rounded-xl bg-white shadow-sm ring-1 ring-stone-200 flex items-center justify-center">
              <Image
                src="/perth-concrete-care-logo.png"
                alt="Perth Concrete Care logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold tracking-tight leading-tight">
              Perth Concrete Care
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6 text-sm whitespace-nowrap">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-medium text-stone-700 hover:text-emerald-700 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/#quote"
              className="hidden sm:inline-flex items-center rounded-xl bg-emerald-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-emerald-700 shadow-sm transition-colors"
            >
              Get a Quote
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-800"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile nav panel */}
        {menuOpen && (
          <div id="mobile-nav" className="lg:hidden border-t border-stone-200 bg-white">
            <ul className="max-w-7xl mx-auto px-4 py-3 grid gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 grid grid-cols-2 gap-2 pb-2">
                <a
                  href={`tel:${business.phoneHref}`}
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-900"
                  onClick={() => setMenuOpen(false)}
                >
                  Call Rob
                </a>
                <a
                  href="/#quote"
                  className="rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

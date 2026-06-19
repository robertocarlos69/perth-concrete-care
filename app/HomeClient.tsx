"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { business, trustSignals } from "./lib/site";
import { getSuburb } from "./lib/suburbs";
import GoogleReviewsCarousel from "./components/GoogleReviewsCarousel";

// Featured suburbs for the homepage "Areas we serve" row (commercial /
// industrial focus). The full list lives on the /concrete-flooring hub page.
const featuredAreas = [
  "osborne-park",
  "malaga",
  "wangara",
  "balcatta",
  "ellenbrook",
  "joondalup",
]
  .map((slug) => getSuburb(slug))
  .filter((s): s is NonNullable<ReturnType<typeof getSuburb>> => Boolean(s));

// index.tsx — Single-file React page for Perth Concrete Care
// Pure TSX. Drop into Next.js (e.g. app/page.tsx) or Vite entry.

export default function HomeClient() {
  // Run self-tests in dev once
  useEffect(() => {
    if (typeof window !== "undefined") runSelfTests();
  }, []);

  // -----------------------------
  // Lightbox state for "Recent Work"
  // -----------------------------
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  // -----------------------------
  // Quote form state + submit handler
  // -----------------------------
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setFormStatus("sending");

    // --- Optional client-side photo limits ---
    const MAX_FILES = 5;
    const MAX_SIZE = 8 * 1024 * 1024; // 8 MB

    const fileInput = form.elements.namedItem("photos") as HTMLInputElement | null;
    const files = fileInput?.files;

    if (files && files.length > 0) {
      if (files.length > MAX_FILES) {
        alert(`Please upload up to ${MAX_FILES} photos only.`);
        setFormStatus("idle");
        return;
      }

      for (const file of Array.from(files) as File[]) {
        if (file.size > MAX_SIZE) {
          alert(`Each photo must be smaller than 8 MB.`);
          setFormStatus("idle");
          return;
        }
      }
    }
    // ----------------------------------------

    // Use FormData so text fields + photos are sent together
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData, // browser sets the multipart/form-data headers for us
      });

      if (!res.ok) {
        console.error("Contact API error, status:", res.status);
        setFormStatus("error");
        return;
      }

      setFormStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact API error:", err);
      setFormStatus("error");
    } finally {
      // back to idle after a few seconds
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  // Swipe gestures for mobile (lightbox)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    const distance = touchStartX - touchEndX;
    const threshold = 50; // px before we treat it as a swipe

    if (distance > threshold) {
      // swipe left -> next image
      nextImage();
    } else if (distance < -threshold) {
      // swipe right -> previous image
      prevImage();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-700 selection:text-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-stone-950 text-white">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/header-bg1.png"
              alt="Swirled concrete texture background"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
            {/* Glossy "polished floor" sheen + readability gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-950/95 via-stone-950/80 to-emerald-950/70" />
            {/* Settle to solid stone-950 at the bottom so the wedge in the
                next section continues the colour seamlessly */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950 to-transparent" />
          </div>

          {/* Foreground content */}
          <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-20 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              {/* Google rating strip */}
              <a
                href={business.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm hover:bg-white/15 transition-colors"
              >
                <span className="flex text-amber-400" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </span>
                5-star rated on Google
                <span className="text-white/60">— read our reviews</span>
              </a>

              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Concrete <span className="text-emerald-300">Polishing</span>,
                Grinding &{" "}
                <span className="text-emerald-300">Epoxy Flooring</span> Perth
              </h1>

              <p className="mt-5 text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl">
                Perth specialists in concrete polishing, epoxy flooring and
                grind-and-seal systems across the Perth metro area.
              </p>

              <ul className="mt-5 space-y-2.5 text-[15px] text-stone-200">
                {[
                  "Concrete polishing, grinding, honing & slab levelling, paint & glue removal",
                  "Epoxy garage floors, flake systems & metallic epoxy floors for residential & workshops",
                  "Exposed concrete & washed aggregate driveways, paths & alfrescos",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-emerald-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="rounded-xl bg-emerald-500 text-stone-950 px-7 py-3.5 text-base font-bold hover:bg-emerald-400 shadow-lg shadow-emerald-950/40 transition-colors"
                >
                  Request Free Quote
                </a>

                <a
                  href={`tel:${business.phoneHref}`}
                  className="rounded-xl border border-white/25 bg-white/5 text-white px-6 py-3.5 text-base font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors"
                >
                  Call {business.phoneDisplay}
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-7 flex flex-wrap items-center gap-2 text-xs text-stone-300">
                {trustSignals.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Project photo — desktop only, keeps mobile fast */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] max-h-[560px] rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/50">
                <Image
                  src="/gallery/honed-concrete-perth.webp"
                  alt="Honed and sealed concrete floor finished by Perth Concrete Care"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                    Recent project
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Honed concrete — Perth
                  </p>
                </div>
              </div>
              {/* Subtle reflection glow under the card */}
              <div
                className="absolute -bottom-8 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>


        {/* Services – FULL-WIDTH BACKGROUND */}
        <section
          id="services"
          className="relative w-full bg-stone-100 pt-20 md:pt-28 pb-20 overflow-hidden"
        >
          {/* Concrete texture, kept subtle */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/services.png')" }}
          />
          {/* Settle the texture into the page */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-100/70 via-transparent to-white" />

          {/* Dark wedge continuing the hero — texture runs right up to the
              diagonal edge, so there's no colour seam */}
          <svg
            className="absolute top-0 left-0 w-full h-10 md:h-16 text-stone-950"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 1440,0 1440,8 0,64" fill="currentColor" />
          </svg>

          {/* Foreground content kept to max-w-7xl */}
          <div className="relative max-w-7xl mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              What we do
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-stone-900">
             Concrete Flooring Services in Perth
            </h2>

            <p className="mt-2 text-neutral-700">
              Perth Concrete Care provides end-to-end concrete preparation and finishes – from concrete grinding and honing
              through to polished concrete, epoxy garage floors and outdoor washed aggregate / exposed concrete.
              All floor preparation is carried out to Australian Standards (AS 1884, AS 3730, AS 3610 and CSP/ICRI profiles)
              so coatings and sealers bond properly and don&apos;t peel.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryServices.map((s) => (
                <div
                  key={s.title}
                  className="
                    group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                      aria-hidden="true"
                    >
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">
                    {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 text-sm space-y-2 text-stone-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {s.href && (
                    <div className="mt-5">
                      <Link
                        href={s.href}
                        className="
                          inline-flex items-center justify-center gap-2
                          rounded-xl bg-emerald-600 px-4 py-2
                          text-sm font-semibold text-white shadow-sm
                          hover:bg-emerald-700 hover:shadow-md transition
                        "
                      >
                        View details <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-stone-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Also available
                </p>
                <h3 className="mt-1 text-xl font-bold text-neutral-900">
                  Other Surface Preparation Services
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  These support services are usually quoted as part of a larger grinding, honing, epoxy or polishing job.
                  Keeping them here helps customers understand the full prep capability without making the main service grid too busy.
                </p>
              </div>

              <div className="mt-5 grid md:grid-cols-3 gap-4">
                {supportServices.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-stone-200 bg-stone-50 p-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 ring-1 ring-stone-200"
                        aria-hidden="true"
                      >
                        <ServiceIcon name={s.icon} className="h-4 w-4" />
                      </span>
                      <h4 className="font-bold text-stone-900">{s.title}</h4>
                    </div>
                    <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
                    <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-stone-700">
                      {s.bullets.slice(0, 2).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Slider */}
        <BeforeAfter before="/gallery/before-1.jpg" after="/gallery/after-1.jpg" />

        {/* Gallery */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
              Recent Concrete Flooring Projects in Perth
              </h2>
            </div>
            <a href="#contact" className="text-sm underline ">
              Want your project featured? Get in touch
            </a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <figure
                key={item.id}
                className="group aspect-video rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    onClick={() => openLightbox(index)}
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs font-medium text-stone-600 bg-white">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Pricing / Packages */}
        <section id="pricing" className="relative w-full bg-white/60 pt-4 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
              Flooring Costs in Perth
            </h2>
            <p className="mt-2 text-neutral-600">
              Every project is different; these ballparks help planning. Get a free
              on-site quote.
            </p>

            <div className="mt-8 flex gap-6 overflow-x-auto pb-4 md:overflow-visible">
              {pricing.map((p) => (
                <div
                  key={p.name}
                  className="
                    min-w-[260px] rounded-2xl border border-stone-200 bg-white p-6 shadow-sm
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300
                  "
                >
                  <div className="text-xs uppercase tracking-[0.14em] text-emerald-700 font-bold">
                    {p.name}
                  </div>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-stone-900">{p.price}</span>
                    <span className="text-sm font-medium text-neutral-500">{p.unit}</span>
                  </div>

                  <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  {p.href && (
                    <div className="mt-6">
                      <Link
                        href={p.href}
                        className="
                          inline-flex items-center justify-center gap-2
                          rounded-xl bg-emerald-600 px-4 py-2
                          text-sm font-semibold text-white shadow-sm
                          hover:bg-emerald-700 hover:shadow-md transition
                        "
                      >
                        View details <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              *Pricing is influenced by total floor area, slab hardness, site access, existing coatings or contaminants, crack and surface repairs, moisture conditions, edge/detail work. In general, larger projects achieve a lower per m² rate, while smaller, heavily detailed jobs are priced higher per m². Final pricing is confirmed after site inspection.</p>

            {/* Finish comparison — extractable table for humans and AI answer engines */}
            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-extrabold text-stone-900">
                Which concrete finish is right for you?
              </h3>
              <p className="mt-2 max-w-3xl text-sm md:text-base text-stone-600 leading-relaxed">
                For garages and workshops, epoxy flake is the most cost-effective
                durable finish. For outdoor areas and pool surrounds, hone-and-seal
                gives a slip-rated surface at the lowest price per m². For indoor
                living areas, polished concrete is the premium option, while
                metallic epoxy suits showpiece floors.
              </p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
                <table className="w-full min-w-[680px] text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-left">
                      <th className="px-4 py-3 font-bold text-stone-900">Finish</th>
                      <th className="px-4 py-3 font-bold text-stone-900">Best for</th>
                      <th className="px-4 py-3 font-bold text-stone-900">Cost guide</th>
                      <th className="px-4 py-3 font-bold text-stone-900">Feel &amp; finish</th>
                      <th className="px-4 py-3 font-bold text-stone-900">Indoor / outdoor</th>
                    </tr>
                  </thead>
                  <tbody className="text-stone-700">
                    <tr className="border-b border-stone-100">
                      <td className="px-4 py-3 font-semibold text-stone-900">
                        <Link href="/epoxy-flake-flooring-perth" className="text-emerald-700 hover:underline">Epoxy flake</Link>
                      </td>
                      <td className="px-4 py-3">Garages, workshops, patios</td>
                      <td className="px-4 py-3 whitespace-nowrap">$80–$100/m²</td>
                      <td className="px-4 py-3">Textured, hard-wearing, hides dirt</td>
                      <td className="px-4 py-3">Both</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-4 py-3 font-semibold text-stone-900">
                        <Link href="/metallic-epoxy-flooring-perth" className="text-emerald-700 hover:underline">Metallic epoxy</Link>
                      </td>
                      <td className="px-4 py-3">Showrooms, living areas, statement garages</td>
                      <td className="px-4 py-3 whitespace-nowrap">$160–$180/m²</td>
                      <td className="px-4 py-3">High-gloss marbled, 3D depth</td>
                      <td className="px-4 py-3">Indoor (mainly)</td>
                    </tr>
                    <tr className="border-b border-stone-100">
                      <td className="px-4 py-3 font-semibold text-stone-900">
                        <Link href="/honed-concrete-perth" className="text-emerald-700 hover:underline">Hone &amp; seal</Link>
                      </td>
                      <td className="px-4 py-3">Alfresco, pool surrounds, driveways, rough exposed aggregate</td>
                      <td className="px-4 py-3 whitespace-nowrap">$60–$80/m²</td>
                      <td className="px-4 py-3">Smooth but slip-rated (P3–P5)</td>
                      <td className="px-4 py-3">Outdoor</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-stone-900">
                        <Link href="/concrete-polishing-perth" className="text-emerald-700 hover:underline">Polished concrete</Link>
                      </td>
                      <td className="px-4 py-3">Indoor living areas, commercial interiors</td>
                      <td className="px-4 py-3 whitespace-nowrap">$140–$220/m²</td>
                      <td className="px-4 py-3">Very smooth, satin to mirror gloss</td>
                      <td className="px-4 py-3">Indoor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-stone-600">
                Not sure? Send a photo of your slab with the quote form and
                we&apos;ll recommend the right system — including telling you if a
                cheaper option will do the job.
              </p>
            </div>
          </div>
        </section>

        {/* Service Area + Map */}
        <section className="bg-white/60">
          <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
                Flooring Services Across Perth
              </h2>
              <p className="mt-3 text-neutral-600 text-sm md:text-base">
                We install honed concrete, polished concrete, epoxy garage
                floors, epoxy flake and washed aggregate across Perth.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
                  Rapid quotes with photos &amp; m²
                </span>
                <span className="px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
                  Weekend &amp; after-hours available
                </span>
                <span className="px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
                  Fully insured
                </span>
              </div>

              {/* Areas we serve — internal links to suburb landing pages */}
              <div className="mt-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                  Areas we serve
                </h3>
                <ul className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  {featuredAreas.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/concrete-flooring/${s.slug}`}
                        className="inline-block rounded-full border border-stone-200 bg-white px-3.5 py-1.5 font-medium text-stone-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Concrete flooring {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/concrete-flooring"
                      className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-1.5 font-semibold text-white hover:bg-emerald-700 transition-colors"
                    >
                      View all areas →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="aspect-video w-full rounded-xl border overflow-hidden">
              <iframe
                title="Perth Concrete Care — Service Area"
                src="https://www.google.com/maps?q=Perth+WA&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="bg-white/60">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-10 shadow-md">
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
                Get a Quote for Your Concrete Floor
              </h2>
              <p className="mt-2 text-neutral-600">
                Send plans/photos and rough m². We&apos;ll confirm on-site.
              </p>

              <ul className="mt-3 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                <li>Fixed-price written quote</li>
                <li>No obligation – we don&apos;t hard-sell</li>
                <li>Most quotes replied to within 24 hours</li>
              </ul>

              <form
                className="mt-6 grid md:grid-cols-2 gap-4"
                onSubmit={handleQuoteSubmit}
                encType="multipart/form-data"
              >
                <input name="name" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Full name" required />
                <input name="email" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Email" type="email" required />
                <input name="phone" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Phone" />
                <input name="suburb" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Suburb (e.g. Joondalup)" />
                <select name="service" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition">
                  <option value="">Service needed</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
                <input name="area" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Approx. area (m²)" />

                <div className="md:col-span-2 flex flex-col gap-1 text-sm">
                  <label className="font-medium text-neutral-700">Photos (optional)</label>
                  <input
                    name="photos"
                    type="file" accept="image/jpeg,image/jpg,image/png,image/heic,image/heif,.heic,.heif"
multiple
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-emerald-800"
                  />
                  <p className="text-xs text-neutral-500">
                    You can attach up to 5 photos, max 8&nbsp;MB each (garage,
                    alfresco, close-ups of cracks, etc.).
                  </p>
                </div>

                <textarea
                  name="details"
                  className="md:col-span-2 rounded-xl border border-stone-300 bg-white px-4 py-3 min-h-[120px] placeholder:text-stone-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition"
                  placeholder="Project details (indoor/outdoor, new/old slab, deadlines, etc.)"
                />

                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <label className="text-sm text-neutral-600">
                    You can also email details to{" "}
                    <a className="underline" href="mailto:sales@perthconcretecare.com.au">
                      sales@perthconcretecare.com.au
                    </a>
                    .
                  </label>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="rounded-xl bg-emerald-600 text-white px-8 py-3.5 font-bold hover:bg-emerald-700 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {formStatus === "sending"
                      ? "Sending..."
                      : formStatus === "success"
                      ? "Sent ✔"
                      : formStatus === "error"
                      ? "Try again"
                      : "Send Request"}
                  </button>
                </div>
              </form>

              <p className="mt-3 text-xs text-neutral-500">
                We respect your privacy and never share your details with third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Google Reviews / Social Proof */}
        <section id="reviews" className="relative bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
                    Google reviews
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-neutral-900">
                    Check Perth Concrete Care on Google before you book
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-neutral-700">
                    For concrete polishing, honing, grinding and epoxy flooring, trust matters. Use the Google links below to view the Business Profile or leave Perth Concrete Care a review directly on Google.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={business.googleBusinessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700"
                    >
                      View Google Profile
                    </a>
                    <a
                      href={business.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-emerald-300 bg-white px-5 py-3 text-sm font-bold text-emerald-900 hover:bg-emerald-50"
                    >
                      Leave a Google Review
                    </a>
                  </div>

                  {/* Owner-operator trust block */}
                  <div className="mt-7 rounded-2xl border border-stone-200 bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Owner-operated
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-stone-900">
                      You deal with Rob from quote to handover
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                      Perth Concrete Care is run by Rob — the same person who
                      answers the phone, quotes your job and does the work. Every
                      floor is prepared to Australian Standards (AS 1884, AS 3730,
                      AS 3610) with H-class HEPA dust control, fully insured and
                      police cleared.
                    </p>
                  </div>
                </div>

                <GoogleReviewsCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative bg-stone-100">
          {/* Faint brand tint so the section doesn't feel sterile */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(14,111,85,0.07),transparent)]"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
              Concrete Flooring FAQ Perth
            </h2>
            <p className="mt-2 text-sm text-stone-600">Click a question to expand.</p>

            <div className="mt-8 w-full">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="
                      group mb-3 md:mb-4
                      rounded-2xl border border-stone-200
                      bg-white shadow-sm
                      transition-all duration-300
                      hover:shadow-md hover:border-emerald-300
                    "
                  >
                    <summary className="cursor-pointer list-none select-none">
                      <div className="flex items-center justify-between gap-4 px-8 py-3 md:py-4">
                        <span className="text-sm md:text-[15px] leading-snug font-semibold text-neutral-900">
                          {f.q}
                        </span>

                        <span
                          className="
                            inline-flex h-8 w-8 items-center justify-center
                            rounded-full bg-emerald-50 text-emerald-800
                            border border-emerald-200
                            transition-transform duration-200
                            group-open:rotate-180
                            shrink-0
                          "
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </summary>

                    <div className="px-8 pb-7 -mt-2">
                      <div className="h-px bg-emerald-100/80 mb-4" />
                      <p className="text-sm text-neutral-600 leading-relaxed">{f.a}</p>
                    </div>
                  </details>
                ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA STRIP */}
        <section className="bg-stone-950">
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-lg md:text-xl font-bold text-white">
              Still have questions?{" "}
              <span className="text-emerald-300">Call Rob</span> — he&apos;s happy to talk through your slab.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${business.phoneHref}`}
                className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-stone-950 hover:bg-emerald-400 transition-colors"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href="#quote"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </section>




        {/* LIGHTBOX MODAL FOR RECENT WORK */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={galleryItems[lightboxIndex].src}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
                alt={galleryItems[lightboxIndex].alt}
                loading="lazy"
              />

              <div className="mt-3 text-center text-sm text-white/90">
                {galleryItems[lightboxIndex].label}
              </div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                ✕ Close
              </button>

              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* Line-icon set for service cards (replaces the old emoji) */
function ServiceIcon({ name, className }: { name?: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "driveway": // car / driveway
      return (
        <svg {...common}>
          <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
          <path d="M4 11h16a1 1 0 0 1 1 1v4h-2.5M3 16V12a1 1 0 0 1 1-1" />
          <path d="M3 16h18" />
          <circle cx="7.5" cy="16.5" r="1.8" />
          <circle cx="16.5" cy="16.5" r="1.8" />
        </svg>
      );
    case "grinder": // grinding disc
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" />
        </svg>
      );
    case "stone": // layered slab
      return (
        <svg {...common}>
          <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
          <path d="M3 14.5 12 19l9-4.5" />
        </svg>
      );
    case "sparkle": // polished shine
      return (
        <svg {...common}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
          <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
        </svg>
      );
    case "flake": // flake scatter
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <path d="M8 8.5h.01M12.5 7h.01M16 9.5h.01M7.5 13h.01M11.5 12h.01M15.5 13.5h.01M9 16.5h.01M13.5 16h.01M17 17h.01" strokeWidth="2.6" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M7 4h10l4 5-9 11L3 9l4-5Z" />
          <path d="M3 9h18M9.5 4 12 9l2.5-5M12 9l0 11" />
        </svg>
      );
    case "broom": // coating removal
      return (
        <svg {...common}>
          <path d="M19 3 11.5 10.5" />
          <path d="M10 9.5 4.5 15c-1 1-1 3 0 4.5s3.5 1.5 4.5.5L14.5 14 10 9.5Z" />
          <path d="M7 13.5 10.5 17" />
        </svg>
      );
    case "level": // spirit level / ruler
      return (
        <svg {...common}>
          <rect x="2.5" y="9" width="19" height="6" rx="1.5" />
          <path d="M7 9v3M11 9v3M15 9v3M19 9v3" />
        </svg>
      );
    case "water": // pressure cleaning
      return (
        <svg {...common}>
          <path d="M12 3.5S6.5 9.8 6.5 13.5a5.5 5.5 0 0 0 11 0C17.5 9.8 12 3.5 12 3.5Z" />
          <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
  }
}

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-white/60">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-4">
          Before &amp; After: Paint Removal & Hone-and-Seal Finish
        </h2>

        <div className="relative w-full aspect-[16/8] overflow-hidden rounded-2xl border bg-white shadow-sm">
          <Image
            src={before}
            alt="Garage concrete floor before grinding and hone & seal"
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image
              src={after}
              alt="Garage concrete floor after paint removal and hone & seal finish"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(parseInt(e.target.value))}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2"
          />

          <div
            className="absolute top-3 left-3 bg-emerald-700/90 text-white text-xs px-2 py-1 rounded transition-opacity duration-200"
            style={{ opacity: (100 - pos) / 100 }}
          >
            Before
          </div>
          <div
            className="absolute top-3 right-3 bg-emerald-700/90 text-white text-xs px-2 py-1 rounded transition-opacity duration-200"
            style={{ opacity: pos / 100 }}
          >
            After
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600 max-w-3xl">
          This pathway had old paint and uneven patches. We mechanically ground the slab, removed all coatings and sealed the finish for a cleaner, brighter, easier-to-maintain floor.
        </p>
      </div>
    </section>
  );
}

const galleryItems = [
  {
    id: 1,
    src: "/gallery/epoxy-flake-garage-floor-joondalup-perth.webp",
    label: "Epoxy Flake Floor – Joondalup Garage",
    alt: "Light grey epoxy flake garage floor in Joondalup with full flake coverage",
  },
  {
    id: 2,
    src: "/gallery/metallic-epoxy-floor-wanneroo-perth.webp",
    label: "Metallic Floor – Wanneroo Living Area",
    alt: "High-gloss metallic epoxy floor in a Wanneroo living space with marbled effect",
  },
  {
    id: 3,
    src: "/gallery/hone-and-seal-exposed-aggregate-balcatta.webp",
    label: "Hone and Seal - Balcatta",
    alt: "Hone and Seal - Balcatta",
  },
  {
    id: 4,
    src: "/gallery/exposed-aggregate-driveway-ashby-perth.webp",
    label: "Exposed / Washed Aggregate Driveway – Ashby",
    alt: "Exposed or washed aggregate driveway finish in Ashby, Western Australia",
  },
  {
    id: 5,
    src: "/gallery/Epoxy-Flake-Floor-Wanneroo.webp",
    label: "Epoxy Flake Floor – Wanneroo Garage",
    alt: "Black and white epoxy flake garage floor in Wanneroo, Perth",
  },
  {
  id: 6,
  src: "/gallery/epoxy-flake-garage-banksia-grove.webp",
  label: "Epoxy Flake Garage – Banksia Grove",
  alt: "Epoxy flake garage floor with added glitter installed in Banksia Grove, W.A",
  },
  {
  id: 7,
  src: "/gallery/epoxy-flake-garage-floor-bullseye-kallaroo-perth.webp",
  label: "Epoxy flake garage - Kallaroo, Perth",
  alt: "Epoxy flake garage floor in Bullseye colour installed in Kallaroo, W.A",
  },
  {
  id: 8,
  src: "/gallery/epoxy-flake-floor-granny-flat-mindarie-perth.webp",
  label: "Granny-Flat renovation – Mindarie",
  alt: "Granny Flat with old carpet removed and Epoxy flake floor installed in Mindarie, W.A",
  },
  {
  id: 9,
  src: "/gallery/epoxy-flake-pool-area-sandstone-mindarie-perth.webp",
  label: "Epoxy Flake Pool Area – Mindarie",
  alt: "Epoxy flake pool area with sandstone aggregate installed in Mindarie, W.A",
  },
  {
  id: 10,
  src: "/gallery/epoxy-flake-garage-floor-cookies-and-cream-Banksia-Grove.webp",
  label: "Epoxy Flake Garage – Banksia Grove",
  alt: "Epoxy flake garage floor with cookies and cream flakes installed in Banksia Grove, W.A",
  },
  {
  id: 11,
  src: "/gallery/grind-and-seal-concrete-noranda.webp",
  label: "Grind and Seal - Noranda",
  alt: "Grind and seal concrete floor in Noranda, Perth",
  },
  {
  id: 12,
  src: "/gallery/polished-concrete-floor-perth.webp",
  label: "Polished Concrete Floor – Full Exposure Satin - Semi Gloss Finish (Perth)",
  alt: "Polished concrete floor in Perth home with Satin - Semi Glossfinish by Perth Concrete Care",
  },
];

const primaryServices = [
  {
    title: "Exposed Aggregate Honing & Sealing",
    icon: "driveway",
    href: "/honed-concrete-perth",
    desc: "Smooths rough exposed or washed aggregate, removes sharp stones, and seals the surface for a cleaner outdoor finish.",
    bullets: [
      "Ideal for driveways, paths, patios & pool surrounds",
      "Helps make rough aggregate easier on bare feet",
      "Topical or penetrating sealer options",
    ],
  },
  {
    title: "Concrete Grinding & Sealing",
    icon: "grinder",
    href: "/concrete-grinding-perth",
    desc: "Smooths and refines concrete, then seals with UV-stable coatings for a durable finish.",
    bullets: ["6–120 grit prep as required", "Acrylic/PU/penetrating sealers", "Indoor & outdoor applications"],
  },
  {
    title: "Honing & Seal Concrete Floors",
    icon: "stone",
    href: "/honed-concrete-perth",
    desc: "Outdoor-friendly, slip-rated finish that exposes fine aggregate then seals for protection.",
    bullets: ["Pool surrounds & alfresco", "Slip rating options (P3–P5)", "UV-stable & stain-resistant sealers"],
  },
  {
    title: "Polished Concrete",
    icon: "sparkle",
    href: "/concrete-polishing-perth",
    desc: "Mechanical polish with densifier and guard for a premium indoor finish.",
    bullets: ["Full mechanical polish using 400–3000 grit resin pads", "Lithium densifier & grout coat", "Matte to high-gloss options"],
  },
  {
    title: "Epoxy Flake Floors",
    icon: "flake",
    href: "/epoxy-flake-flooring-perth",
    desc: "Hard-wearing resin floors with optional flakes and rapid-cure polyaspartic topcoats.",
    bullets: ["Great option for both interior and exterior", "Choice of light, medium or full flake system", "Non-yellowing UV resistant topcoats", "Service area only — no showroom visit required"],
  },
  {
    title: "Metallic Epoxy Floors",
    icon: "diamond",
    href: "/metallic-epoxy-flooring-perth",
    desc: "Luxurious, high-gloss resin floors that create unique marbled and 3D depth effects using metallic pigments and clear epoxy resins.",
    bullets: ["Garages, showrooms & living areas", "Custom metallic pigment blends", "High-gloss or matte polyurethane topcoat"],
  },
];

const supportServices = [
  {
    title: "Coating & Glue Removal",
    icon: "broom",
    desc: "Removal of paint, epoxy, tile adhesive, carpet glue and membranes before a new floor system is installed.",
    bullets: ["PCD/carbide tooling", "H-class HEPA extraction", "Suitable for tiling & resurfacing projects"],
  },
  {
    title: "Floor Levelling Prep",
    icon: "level",
    desc: "Self-leveller or grind correction to achieve a flatter, ready-to-finish substrate.",
    bullets: ["Slab moisture, RH & pH testing", "Laser level checks", "Self-levelling compounds", "Prep for tiles, timber, vinyl, carpet or epoxy"],
  },
  {
    title: "Water Pressure Cleaning",
    icon: "water",
    desc: "High-pressure cleaning for driveways, paths and alfresco areas where washing is the right method.",
    bullets: ["Pre-treat oil stains", "Whirl-away surface cleaner", "Soft wash for sensitive areas"],
  },
];

const services = [...primaryServices, ...supportServices];

const pricing = [
  {
    name: "Epoxy Flake Floors",
    price: "$80–$100",
    unit: "/m²",
    href: "/epoxy-flake-flooring-perth",
    features: ["Moisture-tolerant primer", "Flake (full, partial or sparse) broadcast", "UV / Oil / chemical resitant Polyaspartic topcoat"],
  },
  {
    name: "Metallic Epoxy Floors",
    price: "$160–$180",
    unit: "/m²",
    href: "/metallic-epoxy-flooring-perth",
    features: ["100% solids metallic epoxy", "Custom blends, highlights & 3D effects", "UV-stable polyurethane topcoat"],
  },
  {
    name: "Hone & Seal (Outdoor)",
    price: "$60–$80",
    unit: "/m²",
    href: "/honed-concrete-perth",
    features: ["Precision diamond-honed finish", "UV-stable protective sealer", "Durable Exterior-grade slip resistance"],
  },
  {
    name: "Polished Concrete (Indoor)",
    price: "$140–$220",
    unit: "/m²",
    href: "/concrete-polishing-perth",
    features: ["Choice of Cream / Salt & Pepper / full exposed finish", "Various gloss options (satin, high or mirror)"],
  },
];

const faqs = [
  { q: "How dusty is grinding?", a: "We use H-class HEPA extractors and shrouds. Expect minimal dust; we mask and protect adjacent areas." },
  { q: "How soon can we park on epoxy flake garage?", a: "Light foot traffic ~12–24h. Vehicles typically 72h depending on temperature and system." },
  { q: "Can you remove carpet glue and tile adhesive?", a: "Yes. We use PCD/carbide tooling with dust extraction to remove adhesives and prep the slab for new finishes." },
  { q: "Do you service both indoor and outdoor areas?", a: "Yes—garages, living rooms, shops, warehouses, alfresco, driveways, and pool surrounds." },
  { q: "Is polished concrete slippery?", a: "Properly finished polished concrete with the right guard and maintenance can meet slip ratings. Outdoors we recommend hone & seal." },
  { q: "What affects price?", a: "m², slab hardness, crack repairs, access, moisture issues, and the system you choose (grind & seal, flake, full metallic, or polished concrete). Full metallic floors with multi-colour blends, liquid highlights and premium polyurethane/polyaspartic topcoats use more resin and labour, so they sit at the top end of our price range." },
  { q: "What do P1–P5 slip ratings mean?", a: "Slip ratings measure how safe a surface is when wet. P1 is very low slip resistance, P2–P3 are standard indoor ratings, and P4–P5 offer high to very high slip resistance for outdoor, commercial, or wet areas such as pool surrounds." },
  { q: "What is CSP and why does it matter?", a: "CSP (Concrete Surface Profile) is the texture created by grinding. CSP-1/2 is a light profile for sealers, CSP-2/3 is ideal for epoxy flooring, and CSP-4/5 is used for high-build systems or heavy repair work. Correct CSP ensures strong adhesion and long-term durability." },
  { q: "Why do metallic floors cost more with highlights?", a: "Metallic floors use more resin, multi-colour pigments, and require artistic blending. Adding highlights (liquid diamonds, veining, spray effects) increases labour and design time, so highlighted metallic floors sit at the premium end of epoxy pricing." },
  { q: "What is the difference between exposed concrete and washed aggregate?", a: "Washed aggregate is done by spraying a retarder on fresh concrete and pressure-washing it the next day to expose the stones. Exposed (honed) concrete is poured normally, cured, then ground and honed a few days later for a smoother, more modern finish. Washed agg is more rustic and textured, while honed concrete is smoother and easier to clean." },
];

// -----------------------------
// Simple runtime self-tests
// -----------------------------
function runSelfTests() {
  const tests: Array<{ name: string; pass: boolean }> = [];

  tests.push({ name: "primaryServices has 6 items", pass: Array.isArray(primaryServices) && primaryServices.length === 6 });
  tests.push({ name: "supportServices has 3 items", pass: Array.isArray(supportServices) && supportServices.length === 3 });
  tests.push({ name: "pricing has >= 3 items", pass: Array.isArray(pricing) && pricing.length >= 3 });
  tests.push({ name: "faqs has >= 6 items", pass: Array.isArray(faqs) && faqs.length >= 6 });
  tests.push({ name: "each service has bullets[]", pass: services.every((s) => Array.isArray(s.bullets) && s.bullets.length > 0) });

  const email = "sales@perthconcretecare.com.au";
  const phone = "+61448483226";
  const emailOk = /.+@.+\..+/.test(email);
  const phoneOk = /^\+?\d{9,15}$/.test(phone);
  tests.push({ name: "contact email format", pass: emailOk });
  tests.push({ name: "contact phone format", pass: phoneOk });

  const failed = tests.filter((t) => !t.pass);
  if (failed.length) console.error("[PCC self-tests] Failed tests:", failed);
  else console.info("[PCC self-tests] All tests passed:", tests.map((t) => t.name));
}
                    
// Success message helper
const SUCCESS_MESSAGE = "Thank you. Your request has been sent successfully. We will respond within 24 hours.";

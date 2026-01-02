"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";


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
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
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
    const MAX_SIZE = 2 * 1024 * 1024; // 2 MB

    const fileInput = form.elements.namedItem("photos") as HTMLInputElement | null;
    const files = fileInput?.files;

    if (files && files.length > 0) {
      if (files.length > MAX_FILES) {
        alert(`Please upload up to ${MAX_FILES} photos only.`);
        setFormStatus("idle");
        return;
      }

      for (const file of Array.from(files)) {
        if (file.size > MAX_SIZE) {
          alert(`Each photo must be smaller than 2 MB.`);
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

      <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-700 selection:text-white">
        {/* SEO & Structured Data */}
        {/* Top Bar */}
        <div className="w-full bg-slate-900 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <span>Perth Metro — Two Rocks to Rockingham</span>
            <div className="flex items-center gap-3">
              <a
                className="underline decoration-white/40 hover:decoration-white"
                href="mailto:sales@perthconcretecare.com.au"
              >
                sales@perthconcretecare.com.au
              </a>
              <a
                className="inline-flex items-center gap-2 bg-white text-neutral-900 px-3 py-1 rounded-md font-medium hover:opacity-90"
                href="tel:+61448483226"
              >
                Call 0448 483 226
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-emerald-100">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold">
                PCC
              </div>
              <span className="font-semibold">Perth Concrete Care</span>
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li>
                <a className="hover:text-neutral-500" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-500" href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-500" href="#process">
                  Process
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-500" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-500" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-neutral-500" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#quote"
              className="ml-4 inline-flex items-center rounded-xl bg-emerald-600 text-white px-6 py-3 text-sm md:text-base font-semibold hover:bg-emerald-700 shadow-md"
            >
              Get a Quote
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="relative w-full bg-white">
          {/* Background Image Wrapper — MUST have height */}
          <div className="absolute inset-0 h-[680px] sm:h-[620px] md:h-[620px]">
            <Image
              src="/header-bg1.png"
              alt="Swirled concrete texture background"
              fill
              priority
              className="object-cover opacity-60"
              sizes="100vw"
            />

            {/* Soft fade for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-stone-100" />
          </div>
          {/* Foreground content */}
          <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-20 md:pt-16 md:pb-28">
            <div className="max-w-5xl md:-ml-12">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
                Perth Concrete Grinding, Honed, Polished, {" "}
                <span className="text-emerald-600">Epoxy Flake</span> &amp;{" "}
                <span className="text-blue-600">Metallic</span> Floors
              </h1>

              <p className="mt-5 text-lg text-neutral-700">Perth specialists in:</p>

              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>- Exposed concrete &amp; washed aggregate driveways, paths &amp; alfrescos</li>
                <li>- Concrete grinding, honed concrete &amp; slab levelling, paint &amp; glue removal</li>
                <li>- Epoxy garage floors, flake systems &amp; metallic epoxy floors for residential &amp; workshops</li>
              </ul>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="rounded-xl bg-emerald-600 text-white px-6 py-3 text-base font-semibold hover:bg-emerald-700 shadow-md transition-all duration-300 hover:scale-105"
                >
                  Request Free Quote
                </a>

                <a
                  href="#services"
                  className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-medium hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Browse Services
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                {[
                  "Fully insured",
                  "H-class dust control",
                  "WA owned & operated",
                  "Police cleared",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border bg-white/90 backdrop-blur-sm shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services – FULL-WIDTH BACKGROUND */}
        <section
          id="services"
          className="relative w-full py-24 overflow-hidden -mt-16 md:-mt-24"
        >
          {/* Background image goes edge-to-edge */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/services.png')" }}
          />
          {/* Light mist overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.8px]" />
          {/* Fade at the very top to blend into hero */}
          <div
            className="absolute -top-10 left-0 right-0 h-35
               bg-gradient-to-b from-slate-50 via-slate-30/45 to-transparent
               pointer-events-none"
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

          {/* Foreground content kept to max-w-7xl */}
          <div className="relative max-w-7xl mx-auto px-4 -mt-10 md:-mt-16">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>

            <p className="mt-2 text-neutral-700">
              Perth Concrete Care provides end-to-end concrete preparation and finishes – from concrete grinding and honing
              through to polished concrete, epoxy garage floors and outdoor washed aggregate / exposed concrete.
              All floor preparation is carried out to Australian Standards (AS 1884, AS 3730, AS 3610 and CSP/ICRI profiles)
              so coatings and sealers bond properly and don&apos;t peel.
            </p>
          <p className="mt-2 text-sm text-neutral-700">
            We regularly complete concrete grinding Perth projects, epoxy garage floors, metallic epoxy feature areas, honed
            concrete and paint removal jobs across Perth metro suburbs.
          </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="
                  rounded-2xl border border-emerald-500 bg-white p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400
                  transition duration-200
                "
                >
                  <div className="flex items-center gap-2">
                    {s.icon && (
                      <span className="text-xl" aria-hidden="true">
                        {s.icon}
                      </span>
                    )}
                    <div className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
                      {s.title}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                  <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Slider */}
        <BeforeAfter before="/gallery/before-1.jpg" after="/gallery/after-1.jpg" />

        {/* Gallery */}
        <section id="gallery" className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Recent Work</h3>
            </div>
            <a href="#contact" className="text-sm underline ">
              Want your project featured? Get in touch
            </a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <figure
                key={item.id}
                className="aspect-video rounded-xl overflow-hidden border bg-white shadow-sm"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    className="object-cover cursor-pointer hover:opacity-90 transition"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    onClick={() => openLightbox(index)}
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs text-neutral-600 bg-white/90">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-white/60">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h3 className="text-2xl md:text-3xl font-bold">How We Work</h3>

            <p className="mt-2 text-neutral-600 max-w-3xl">
              Clear steps from first visit to final handover, so you always know
              what&apos;s happening with your floor and when.
            </p>

            {/* Horizontal scroll on mobile; same sizing as pricing cards */}
            <div className="mt-8 flex gap-6 overflow-x-auto pb-4 md:overflow-visible">
              {[
                {
                  t: "Free site visit & consultation",
                  d: "We come out, look at the slab and talk through your goals.",
                  bullets: [
                    "Asses the concrete condition",
                    "Select flakes/colours if epoxy",
                    "Discuss finish options & slip rating",
                  ],
                },
                {
                  t: "Agree Price & Secure Deposit",
                  d: "You receive a clear written quote with fixed inclusions.",
                  bullets: [
                    "Transparent pricing",
                    "No hidden extras",
                    "Deposit secures materials & booking",
                  ],
                },
                {
                  t: "Surface prep",
                  d: "We get the slab to the correct CSP profile for your system.",
                  bullets: [
                    "Dust-controlled grinding",
                    "Crack repair & patching",
                    "Glue/paint/membrane removal",
                  ],
                },
                {
                  t: "Install system",
                  d: "We install your chosen finish to spec & manufacturer standards.",
                  bullets: [
                    "Primer/moisture barrier if needed",
                    "Base coats, flakes or metallics",
                    "UV-stable or polyaspartic topcoat",
                  ],
                },
                {
                  t: "Handover & aftercare",
                  d: "We hand the floor back with clear instructions.",
                  bullets: [
                    "Final clean & inspection",
                    "Curing times & traffic rules",
                    "Maintenance guide included",
                  ],
                },
              ].map((step, i) => (
                <div
                  key={step.t}
                  className="
            min-w-[260px]
            rounded-2xl border border-emerald-500 
            bg-white p-6 
            shadow-sm transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400
          "
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    <div className="font-semibold text-emerald-700 text-sm uppercase tracking-wide">
                      {step.t}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                    {step.d}
                  </p>

                  {/* Bullet list */}
                  <ul className="mt-4 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                    {step.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing / Packages – FULL-WIDTH BAND */}
        <section id="pricing" className="relative w-full bg-white/60 pt-4 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold">Typical Packages</h3>
            <p className="mt-2 text-neutral-600">
              Every project is different; these ballparks help planning. Get a free
              on-site quote.
            </p>

            {/* Horizontal scroll row like Process section */}
            <div className="mt-8 flex gap-6 overflow-x-auto pb-4 md:overflow-visible">
              {pricing.map((p) => (
                <div
                  key={p.name}
                  className="min-w-[260px] rounded-2xl border border-emerald-500 bg-white p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400
                           transition duration-200
                           "
                >
                  <div className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">
                    {p.name}
                  </div>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold">{p.price}</span>
                    <span className="text-sm font-medium text-neutral-500">
                      {p.unit}
                    </span>
                  </div>

                  <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 transform transition-all duration-300 hover:scale-105 hover:shadow-md
                           text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700"
                  >
                    Free Quote
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              *Pricing varies with slab hardness, m², access, repairs, and
              moisture. All prices incl. GST estimates.
            </p>

            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              Achieving a long-lasting epoxy floor begins with correct surface
              preparation. All our floors are mechanically diamond-ground to a
              verified CSP2–CSP3 profile to ensure proper adhesion and prevent
              peeling or delamination.
            </p>
          </div>
        </section>

        {/* Service Area + Map */}
        <section className="bg-white/60">
          <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-start">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Servicing all Perth Metro from Two Rocks to Rockingham
              </h3>
              <p className="mt-3 text-neutral-600 text-sm md:text-base">
                We install honed concrete, polished concrete, epoxy garage
                floors, epoxy flake systems and washed aggregate across Perth
                suburbs including Joondalup, Wanneroo, Alkimos, Butler, Yanchep,
                Ellenbrook, Wangara, Malaga, Rockingham and nearby areas.
              </p>

              {/* BADGES */}
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
            </div>

            {/* RIGHT SIDE – MAP */}
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
            <div className="rounded-2xl border border-emerald-500 bg-white p-8 shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400">
              <h3 className="text-2xl md:text-3xl font-bold">Get a Free Quote</h3>
              <p className="mt-2 text-neutral-600">
                Send plans/photos and rough m². We&apos;ll confirm on-site.
              </p>

              {/* What you’ll get list */}
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
                <input
                  name="name"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Full name"
                  required
                />
                <input
                  name="email"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  name="phone"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Phone"
                />
                <input
                  name="suburb"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Suburb (e.g. Joondalup)"
                />
                <select
                  name="service"
                  className="w-full rounded-xl border px-4 py-3"
                >
                  <option value="">Service needed</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                </select>
                <input
                  name="area"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Approx. area (m²)"
                />

                {/* NEW: photo upload field */}
                <div className="md:col-span-2 flex flex-col gap-1 text-sm">
                  <label className="font-medium text-neutral-700">
                    Photos (optional)
                  </label>
                  <input
                    name="photos"
                    type="file"
                    accept="image/*"
                    multiple
                    className="w-full rounded-xl border px-4 py-2 text-sm"
                  />
                  <p className="text-xs text-neutral-500">
                    You can attach up to 5 photos, max 2&nbsp;MB each (garage,
                    alfresco, close-ups of cracks, etc.).
                  </p>
                </div>

                <textarea
                  name="details"
                  className="md:col-span-2 rounded-xl border px-4 py-3 min-h-[120px]"
                  placeholder="Project details (indoor/outdoor, new/old slab, deadlines, etc.)"
                />

                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <label className="text-sm text-neutral-600">
                    You can also email details to{" "}
                    <a
                      className="underline"
                      href="mailto:sales@perthconcretecare.com.au"
                    >
                      sales@perthconcretecare.com.au
                    </a>
                    .
                  </label>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="rounded-xl bg-emerald-600 text-white px-6 py-3 font-medium hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
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
                We respect your privacy and never share your details with third
                parties.
              </p>
            </div>
          </div>
        </section>

{/* FAQ */}
<section
  id="faq"
  className="relative bg-[url('/faq-metallic.png')] bg-cover bg-center"
>
  {/* Top fade to blend with section above */}
  <div
    className="pointer-events-none absolute -top-32 left-0 right-0 h-32
    bg-gradient-to-b from-transparent via-white/40 to-transparent"
  />

  {/* Light overlay for readability */}
  <div className="bg-white/75 relative">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-bold">FAQ</h3>
      <p className="mt-2 text-sm text-neutral-600">
        Click a question to expand.
      </p>

      <div className="mt-8 w-full">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="
              group mb-4 md:mb-5
              rounded-2xl border border-emerald-500
              bg-white/90 shadow-sm
              transition-all duration-300
              hover:shadow-lg hover:border-emerald-400
            "
          >
            {/* QUESTION ROW */}
<summary className="cursor-pointer list-none select-none">
  <div
    className="
      flex items-center justify-between gap-4
      px-8 py-3 md:py-4
    "
  >
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


            {/* ANSWER */}
            <div className="px-8 pb-7 -mt-2">
              <div className="h-px bg-emerald-100/80 mb-4" />
              <p className="text-sm text-neutral-600 leading-relaxed">
                {f.a}
              </p>
            </div>
          </details>
        ))}
      </div>
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
              {/* IMAGE */}
              <img
                src={galleryItems[lightboxIndex].src}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
                alt={galleryItems[lightboxIndex].alt}
                loading="lazy"
              />

              {/* CAPTION INSIDE LIGHTBOX */}
              <div className="mt-3 text-center text-sm text-white/90">
                {galleryItems[lightboxIndex].label}
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                ✕ Close
              </button>

              {/* LEFT ARROW */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer id="contact" className="bg-slate-900 text-neutral-200">
          <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white text-neutral-900 flex items-center justify-center font-bold">
                  PCC
                </div>
                <div className="font-semibold">Perth Concrete Care</div>
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Concrete grinding, honing, polishing, epoxy floors, and surface prep
                across Perth Metro. Indoor &amp; outdoor.
              </p>
              <div className="mt-3 text-sm">ABN: 63 775 263 307</div>
            </div>
            <div>
              <div className="font-semibold">Services</div>
              <ul className="mt-2 text-sm space-y-1">
                {services.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <ul className="mt-2 text-sm space-y-1">
                <li>
                  <a
                    href="mailto:sales@perthconcretecare.com.au"
                    className="hover:underline"
                  >
                    sales@perthconcretecare.com.au
                  </a>
                </li>
                <li>
                  <a href="tel:+61448483226" className="hover:underline">
                    0448 483 226
                  </a>
                </li>
                <li>Mon–Sat 7:00–18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-neutral-400 flex items-center justify-between">
              <span>
                © {new Date().getFullYear()} Perth Concrete Care. All rights
                reserved.
              </span>
              <a className="hover:underline" href="#">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);

  return (
    <section className="bg-white/60">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Before &amp; After: Paint Removal & Hone-and-Seal Finish
        </h2>

        {/* FULL WIDTH / NO WHITE SPACES */}
        <div className="relative w-full aspect-[16/8] overflow-hidden rounded-2xl border bg-white shadow-sm">
          {/* BEFORE IMAGE */}
          <Image
            src={before}
            alt="Garage concrete floor before grinding and hone & seal"
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />

          {/* AFTER IMAGE */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src={after}
              alt="Garage concrete floor after paint removal and hone & seal finish"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* SLIDER */}
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(parseInt(e.target.value))}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2"
          />

          {/* LABELS */}
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

        {/* Short explainer under slider */}
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
    src: "/gallery/recent-1.jpg",
    label: "Epoxy Flake Floor – Joondalup Garage",
    alt: "Light grey epoxy flake garage floor in Joondalup with full flake coverage",
  },
  {
    id: 2,
    src: "/gallery/recent-2.jpg",
    label: "Metallic Floor – Wanneroo Living Area",
    alt: "High-gloss metallic epoxy floor in a Wanneroo living space with marbled effect",
  },
  {
    id: 3,
    src: "/gallery/exposed-concrete-1.jpg",
    label: "Exposed Concrete Pathway - Burns Beach",
    alt: "Exposed concrete pathway with decorative aggregate",
  },
  {
    id: 4,
    src: "/gallery/drive-way-1.jpg",
    label: "Exposed / Washed Aggregate Driveway – Ashby",
    alt: "Exposed or washed aggregate driveway finish in Ashby, Western Australia",
  },
  {
    id: 5,
    src: "/gallery/Epoxy-Flake-Floor-Wanneroo.jpg",
    label: "Epoxy Flake Floor – Wanneroo Garage",
    alt: "Black and white epoxy flake garage floor in Wanneroo, Perth",
  },
];

// Data
const services = [
  {
    title: "Exposed Concrete & Washed Aggregate",
    icon: "🚗",
    desc: "Durable, decorative outdoor concrete finishes with uniform stone exposure, ideal for driveways, alfresco areas and pathways.",
    bullets: [
      "Premium exposed or washed aggregate options",
      "Slip-resistant, hard-wearing outdoor surface",
      "Ideal for driveways, paths, patios & pool surrounds",
    ],
  },
  {
    title: "Concrete Grinding & Sealing",
    icon: "🧱",
    desc: "Smooths and refines concrete, then seals with UV-stable coatings for a durable finish.",
    bullets: [
      "6–120 grit prep as required",
      "Acrylic/PU/penetrating sealers",
      "Indoor & outdoor applications",
    ],
  },
  {
    title: "Hone & Seal Concrete Floors",
    icon: "🪨",
    desc: "Outdoor-friendly, slip-rated finish that exposes fine aggregate then seals for protection.",
    bullets: [
      "Pool surrounds & alfresco",
      "Slip rating options (P3–P5)",
      "UV-stable & stain-resistant sealers",
    ],
  },
  {
    title: "Polished Concrete",
    icon: "✨",
    desc: "Mechanical polish with densifier and guard for a premium indoor finish.",
    bullets: [
      "Full mechanical polish using 400–3000 grit resin pads",
      "Lithium densifier & grout coat",
      "Matte to high-gloss options",
    ],
  },
  {
    title: "Epoxy Flake Floors",
    icon: "🎨",
    desc: "Hard-wearing resin floors with optional flakes and rapid-cure polyaspartic topcoats.",
    bullets: [
      "Great option for garages, alfrescos & workshops",
      "Choice of light, medium or full flake system",
      "Non-yellowing hard-wearing topcoats",
    ],
  },
  {
    title: "Metallic Epoxy Floors",
    icon: "💎",
    desc: "Luxurious, high-gloss resin floors that create unique marbled and 3D depth effects using metallic pigments and clear epoxy resins.",
    bullets: [
      "Garages, showrooms & living areas",
      "Custom metallic pigment blends",
      "High-gloss or matte polyurethane topcoat",
    ],
  },
  {
    title: "Removal of Old Coatings & Glues",
    icon: "🧹",
    desc: "Remove paint, epoxy, tile adhesive, carpet glue, and membranes safely and cleanly.",
    bullets: [
      "PCD/Carbide tooling",
      "H-class HEPA extraction",
      "Suitable tiling & resurfacing projects",
    ],
  },
  {
    title: "Levelling Uneven Floors",
    icon: "📐",
    desc: "Self-leveller or grind correction to achieve a flat, ready-to-finish surface.",
    bullets: [
      "Laser level checks",
      "Self-levelling compounds",
      "Prep for tiles, timber, vinyl, carpet or epoxy",
    ],
  },
  {
    title: "Water Pressure Cleaning",
    icon: "💦",
    desc: "High-pressure wash to remove grime, mould, and tyre marks from driveways, paths, and alfresco areas.",
    bullets: [
      "Pre-treat oil stains",
      "Whirl-away surface cleaner",
      "Soft wash for sensitive areas",
    ],
  },
];

const pricing = [
    {
    name: "Epoxy Flake Floor System",
    price: "$75–$100",
    unit: "/m²",
    features: [
      "Moisture-tolerant primer",
      "Flake (full, partial or sparse) broadcast",
      "Polyaspartic topcoat",
    ],
  },
  {
    name: "Metallic Epoxy Floor System",
    price: "$90–$180",
    unit: "/m²",
    features: [
      "100% solids metallic epoxy",
      "Custom blends, highlights & 3D effects",
      "UV-stable polyurethane topcoat",
    ],
  },
  {
    name: "Honed & Seal (Outdoor)",
    price: "$70–$95",
    unit: "/m²",
    features: [
      "Honed finish (P4–P5 slip-rated)",
      "UV-stable sealer",
      "Exterior-grade slip resistance",
    ],
  },
  {
    name: "Exposed / Washed Aggregate",
    price: "$110–$160",
    unit: "/m²",
    features: [
      "Premium washed or exposed stone finish",
      "Slip-resistant and ideal for outdoor areas",
    ],
  },
];

const faqs = [
  {
    q: "How dusty is grinding?",
    a: "We use H-class HEPA extractors and shrouds. Expect minimal dust; we mask and protect adjacent areas.",
  },
  {
    q: "How soon can we park on epoxy flake garage?",
    a: "Light foot traffic ~12–24h. Vehicles typically 72h depending on temperature and system.",
  },
  {
    q: "Can you remove carpet glue and tile adhesive?",
    a: "Yes. We use PCD/carbide tooling with dust extraction to remove adhesives and prep the slab for new finishes.",
  },
  {
    q: "Do you service both indoor and outdoor areas?",
    a: "Yes—garages, living rooms, shops, warehouses, alfresco, driveways, and pool surrounds.",
  },
  {
    q: "Is polished concrete slippery?",
    a: "Properly finished polished concrete with the right guard and maintenance can meet slip ratings. Outdoors we recommend hone & seal.",
  },
  {
    q: "What affects price?",
    a: "m², slab hardness, crack repairs, access, moisture issues, and the system you choose (grind & seal, flake, full metallic, or polished concrete). Full metallic floors with multi-colour blends, liquid highlights and premium polyurethane/polyaspartic topcoats use more resin and labour, so they sit at the top end of our price range.",
  },
  {
    q: "What do P1–P5 slip ratings mean?",
    a: "Slip ratings measure how safe a surface is when wet. P1 is very low slip resistance, P2–P3 are standard indoor ratings, and P4–P5 offer high to very high slip resistance for outdoor, commercial, or wet areas such as pool surrounds.",
  },
  {
    q: "What is CSP and why does it matter?",
    a: "CSP (Concrete Surface Profile) is the texture created by grinding. CSP-1/2 is a light profile for sealers, CSP-2/3 is ideal for epoxy flooring, and CSP-4/5 is used for high-build systems or heavy repair work. Correct CSP ensures strong adhesion and long-term durability.",
  },
  {
    q: "Why do metallic floors cost more with highlights?",
    a: "Metallic floors use more resin, multi-colour pigments, and require artistic blending. Adding highlights (liquid diamonds, veining, spray effects) increases labour and design time, so highlighted metallic floors sit at the premium end of epoxy pricing.",
  },
  {
    q: "What is the difference between exposed concrete and washed aggregate?",
    a: "Washed aggregate is done by spraying a retarder on fresh concrete and pressure-washing it the next day to expose the stones. Exposed (honed) concrete is poured normally, cured, then ground and honed a few days later for a smoother, more modern finish. Washed agg is more rustic and textured, while honed concrete is smoother and easier to clean.",
  },
];

// -----------------------------
// Simple runtime self-tests
// -----------------------------
function runSelfTests() {
  const tests: Array<{ name: string; pass: boolean; message?: string }> = [];

  tests.push({
    name: "services has >= 8 items",
    pass: Array.isArray(services) && services.length >= 8,
  });
  tests.push({
    name: "pricing has >= 3 items",
    pass: Array.isArray(pricing) && pricing.length >= 3,
  });
  tests.push({
    name: "faqs has >= 6 items",
    pass: Array.isArray(faqs) && faqs.length >= 6,
  });
  tests.push({
    name: "each service has bullets[]",
    pass: services.every(
      (s) => Array.isArray(s.bullets) && s.bullets.length > 0
    ),
  });

  const email = "sales@perthconcretecare.com.au";
  const phone = "+61448483226";
  const emailOk = /.+@.+\..+/.test(email);
  const phoneOk = /^\+?\d{9,15}$/.test(phone);
  tests.push({ name: "contact email format", pass: emailOk });
  tests.push({ name: "contact phone format", pass: phoneOk });

  const failed = tests.filter((t) => !t.pass);
  if (failed.length) {
    console.error("[PCC self-tests] Failed tests:", failed);
  } else {
    console.info(
      "[PCC self-tests] All tests passed:",
      tests.map((t) => t.name)
    );
  }
}
// End of index.tsx

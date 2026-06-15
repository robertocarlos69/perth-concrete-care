"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../components/FaqAccordion";

type Faq = { q: string; a: string };

const flakeChoices = [
  { name: "Blue Storm", file: "/flake-choices/blue-storm-epoxy-flake.webp" },
  { name: "Bullseye", file: "/flake-choices/bullseye-epoxy-flake.webp" },
  { name: "Camo", file: "/flake-choices/camo-epoxy-flake.webp" },
  { name: "Cookies & Cream", file: "/flake-choices/cookies-and-cream-epoxy-flake.webp" },
  { name: "Cookies & Cream (Small)", file: "/flake-choices/cookies-and-cream-small-epoxy-flake.webp" },
  { name: "Eggshell", file: "/flake-choices/eggshell-epoxy-flake.webp" },
  { name: "Foil", file: "/flake-choices/foil-epoxy-flake.webp" },
  { name: "Graphite", file: "/flake-choices/graphite-epoxy-flake.webp" },
  { name: "Graphite (Light)", file: "/flake-choices/graphite-light-epoxy-flake.webp" },
  { name: "Heritage", file: "/flake-choices/heritage-epoxy-flake.webp" },
  { name: "Night Sky", file: "/flake-choices/night-sky-epoxy-flake.webp" },
  { name: "Suede", file: "/flake-choices/suede-epoxy-flake.webp" },
  { name: "Red Earth", file: "/flake-choices/red-earth-epoxy-flake.webp" },
  { name: "Biscuit", file: "/flake-choices/biscuit-epoxy-flake.webp" },
  { name: "Carbon", file: "/flake-choices/carbon-black-epoxy-flake.webp" },
  { name: "Ice", file: "/flake-choices/ice-epoxy-flake.webp" },
];

const hyperFlakeChoices = [
  { name: "Basalt", file: "/flake-choices/basalt-epoxy-flake.webp" },
  { name: "Coral", file: "/flake-choices/coral-epoxy-flake.webp" },
  { name: "Quarry", file: "/flake-choices/quarry-epoxy-flake.webp" },
  { name: "River Stone", file: "/flake-choices/river-stone-epoxy-flake.webp" },
  { name: "Sand Stone", file: "/flake-choices/sand-stone-epoxy-flake.webp" },
  { name: "Silver Stone", file: "/flake-choices/silver-stone-epoxy-flake.webp" },
];

export default function EpoxyFlakeClient({ faqs }: { faqs: Faq[] }) {
  type FlakeRange = "ultra" | "hyper";
  const [lightbox, setLightbox] = useState<{ range: FlakeRange; index: number } | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const getChoices = (range: FlakeRange) =>
    range === "hyper" ? hyperFlakeChoices : flakeChoices;

  const openLightbox = (range: FlakeRange, index: number) =>
    setLightbox({ range, index });
  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (!lightbox) return;
    const choices = getChoices(lightbox.range);
    setLightbox({
      range: lightbox.range,
      index: (lightbox.index + 1) % choices.length,
    });
  };

  const prevImage = () => {
    if (!lightbox) return;
    const choices = getChoices(lightbox.range);
    setLightbox({
      range: lightbox.range,
      index: (lightbox.index - 1 + choices.length) % choices.length,
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }
    const distance = touchStartX - touchEndX;
    const threshold = 50;

    if (distance > threshold) nextImage();
    if (distance < -threshold) prevImage();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
          <li>
            <Link href="/" className="hover:text-neutral-900 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-neutral-400">
            /
          </li>
          <li className="font-semibold text-neutral-900">
            Epoxy Flake Floors
          </li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
          Epoxy Flake Flooring Perth
        </h1>
        <p className="mt-5 text-lg text-stone-700 leading-relaxed">
          Durable, non-slip epoxy flake flooring for garages, workshops and
          homes across Perth, from $80/m². The finish is only as good as the
          prep, so we mechanically grind, repair and profile the slab before
          applying your chosen flake system and a UV-stable, stain-resistant
          protective topcoat.
        </p>

        <ul className="mt-6 space-y-3 text-[15px] text-stone-700">
          {[
            "Hard-wearing, hot-tyre and chemical resistant",
            "Non-slip texture, easy to mop clean",
            "20+ flake colours across Ultra & Hyper ranges",
            "UV-stable topcoat made for Perth sun that won't yellow",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <svg className="mt-1 h-4 w-4 shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-7 mb-2 flex flex-wrap gap-3">
          <Link
            href="/#quote"
            className="rounded-xl bg-emerald-600 text-white px-6 py-3.5 font-bold hover:bg-emerald-700 shadow-sm transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/epoxy-floor-visualiser-perth"
            className="rounded-xl border border-emerald-300 bg-white text-emerald-800 px-6 py-3.5 font-semibold hover:bg-emerald-50 transition-colors"
          >
            Try Colour Visualiser
          </Link>
        </div>
        <p className="mt-3 text-sm text-stone-500">
          Free on-site quotes - Most enquiries answered within 24 hours - Page updated June 2026
        </p>
      </header>

      {/* BENEFITS */}
      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Why epoxy flake is the smart garage floor
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          Flake flooring turns a dusty, stain-prone concrete slab into a sealed,
          hard-wearing surface that looks great and wipes clean. Here's why it's
          the most popular garage and workshop finish we install.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Tough enough for cars", "Resists hot tyres, dropped tools, oil and chemicals - built for how garages and workshops are actually used."],
            ["Wipes clean", "A sealed, seamless surface means spills mop straight up and dust doesn't grind into bare concrete."],
            ["Non-slip underfoot", "The flake texture plus an anti-slip topcoat additive keeps the floor safe, even when wet."],
            ["Hides imperfections", "The speckled flake disguises minor slab marks and everyday wear far better than a plain colour."],
            ["Won't yellow in the sun", "A UV-stable polyaspartic or polyurethane topcoat holds its colour through Perth summers."],
            ["Adds value", "A finished floor lifts the look of a garage instantly - a genuine selling point for the home."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300">
              <h3 className="text-lg font-bold text-stone-900">{title}</h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-1">
          Popular epoxy flake colours in the Ultra Flake range
        </h2>
        <p className="mt-2 text-stone-600 max-w-3xl leading-relaxed">
          Below are popular flake blends commonly chosen for Perth garages,
          workshops and alfresco areas. Colours may vary slightly on screens, so
          we help confirm your choice during the site visit.
        </p>

        <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {flakeChoices.map((f, idx) => (
            <figure
              key={f.file}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => openLightbox("ultra", idx)}
                className="block w-full text-left"
                aria-label={`Open ${f.name} flake colour preview`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={f.file}
                    alt={`${f.name} epoxy flake flooring colour`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
                <figcaption className="px-3 py-2 text-sm font-semibold text-neutral-800">
                  {f.name}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Hyper Flake Range (Premium Blend)
        </h2>
        <p className="mt-2 text-stone-600 leading-relaxed">
          Our Hyper Flake blends offer a denser mix and stronger contrast for
          extra depth and a more premium finish, ideal for feature garages,
          workshops and commercial spaces. Colours may vary slightly on screens, so
          we help confirm your choice during the site visit.
        </p>

        <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {hyperFlakeChoices.map((f, idx) => (
            <figure
              key={f.file}
              className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => openLightbox("hyper", idx)}
                className="block w-full text-left"
                aria-label={`Open ${f.name} Hyper Flake colour preview`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={f.file}
                    alt={`${f.name} hyper epoxy flake flooring colour`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-3 py-2 text-sm font-semibold text-neutral-800">
                  {f.name}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Epoxy flake vs metallic epoxy vs polished concrete
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600 leading-relaxed">
          For most Perth garages, epoxy flake is the best balance of durability,
          looks and price. Metallic epoxy is the premium decorative option, while
          polished concrete suits indoor living areas rather than garages.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
          <table className="w-full min-w-[640px] text-sm border-collapse bg-white">
            <thead>
              <tr className="text-left border-b border-stone-200 bg-stone-50">
                <th className="px-5 py-4 font-bold text-stone-900"> </th>
                <th className="px-5 py-4 font-bold text-emerald-700">Epoxy flake</th>
                <th className="px-5 py-4 font-bold text-stone-900">Metallic epoxy</th>
                <th className="px-5 py-4 font-bold text-stone-900">Polished concrete</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Best for</td>
                <td className="px-5 py-4">Garages, workshops, patios</td>
                <td className="px-5 py-4">Showpiece garages, showrooms</td>
                <td className="px-5 py-4">Indoor living areas</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Look</td>
                <td className="px-5 py-4">Speckled, textured</td>
                <td className="px-5 py-4">Marbled, high-gloss 3D</td>
                <td className="px-5 py-4">Smooth, refined</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-5 py-4 font-semibold text-stone-900">Hides marks</td>
                <td className="px-5 py-4">Excellent</td>
                <td className="px-5 py-4">Good</td>
                <td className="px-5 py-4">Moderate</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-stone-900">Cost guide</td>
                <td className="px-5 py-4">$80-$100/m2</td>
                <td className="px-5 py-4">$160-$180/m2</td>
                <td className="px-5 py-4">$140-$220/m2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-stone-600">
          See <Link href="/metallic-epoxy-flooring-perth" className="font-semibold text-emerald-700 hover:underline">metallic epoxy</Link> or <Link href="/concrete-polishing-perth" className="font-semibold text-emerald-700 hover:underline">polished concrete</Link>, or send a photo with the <Link href="/#quote" className="font-semibold text-emerald-700 hover:underline">quote form</Link> and we'll recommend the right finish.
        </p>
      </section>

      {/* VISUALISER CTA */}
      <section className="mt-16 rounded-3xl border border-stone-200 bg-white p-7 md:p-9 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-stone-900">
          Not sure which flake colour to choose?
        </h2>
        <p className="mt-2 max-w-3xl text-stone-600 leading-relaxed">
          Preview popular flake blends on a floor before you book with our epoxy
          floor colour visualiser - a simple way to compare looks for garages,
          patios, workshops and commercial floors in Perth.
        </p>
        <div className="mt-5">
          <Link
            href="/epoxy-floor-visualiser-perth"
            className="inline-block rounded-xl bg-emerald-600 text-white px-6 py-3.5 font-bold hover:bg-emerald-700 shadow-sm transition-colors"
          >
            Launch Visualiser
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Epoxy flake flooring FAQ
        </h2>
        <p className="mt-2 text-sm text-stone-600">Click a question to expand.</p>
        <div className="mt-8">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900">
          Epoxy flake floors across Perth&apos;s northern suburbs
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          We install epoxy flake garage and workshop floors right across the
          Perth metro area, including:
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {[
            { slug: "banksia-grove", name: "Banksia Grove" },
            { slug: "joondalup", name: "Joondalup" },
            { slug: "wanneroo", name: "Wanneroo" },
            { slug: "mindarie", name: "Mindarie" },
          ].map((s) => (
            <li key={s.slug}>
              <Link
                href={`/concrete-flooring/${s.slug}`}
                className="inline-block rounded-full border border-stone-200 bg-white px-3.5 py-1.5 font-medium text-stone-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                Epoxy flake {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* BOTTOM CTA */}
      <section className="mt-16 rounded-3xl bg-stone-950 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Ready for a floor that lasts?
          </h2>
          <p className="mt-2 text-stone-300 max-w-xl">
            Send your garage size and a couple of photos and we'll come back with
            a fixed written price - usually within 24 hours.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/#quote" className="rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-stone-950 hover:bg-emerald-400 transition-colors">Get a free quote</Link>
          <a href="tel:+61448483226" className="rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors">Call 0448 483 226</a>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative w-[90vw] max-w-[900px]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative aspect-square w-full max-h-[85vh] rounded-2xl border border-stone-200 overflow-hidden bg-black">
              <Image
                src={getChoices(lightbox.range)[lightbox.index].file}
                alt={getChoices(lightbox.range)[lightbox.index].name}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-base font-semibold shadow-lg transition"
                aria-label="Close gallery"
              >
                ✕ Close
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center text-3xl font-bold shadow-lg"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center text-3xl font-bold shadow-lg"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="mt-3 text-center text-sm text-white/90">
              {getChoices(lightbox.range)[lightbox.index].name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function EpoxyFlakeClient() {
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
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Epoxy Flake Floors Perth
        </h1>
        <p className="mt-4 text-neutral-700">
          Durable, easy-to-clean epoxy flake flooring for garages, workshops and
          homes across Perth. Proper surface preparation is critical — we
          mechanically grind, repair and prepare the slab before applying your
          chosen flake system and then add a UV  & stain resistant protective topcoat.
        </p>

        <div className="mt-6 mb-5 flex flex-wrap gap-2">
          <Link
            href="/#quote"
            className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/epoxy-floor-visualiser-perth"
            className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50"
          >
            Try Colour Visualiser
          </Link>
          <Link
            href="/#gallery"
            className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50"
          >
            See Recent Work
          </Link>
        </div>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-1">
          Popular epoxy flake colours in the Ultra Flake range
        </h2>
        <p className="mt-2 text-neutral-700 max-w-3xl">
          Below are popular flake blends commonly chosen for Perth garages,
          workshops and alfresco areas. Colours may vary slightly on screens —
          we help confirm your choice during the site visit.
        </p>

        <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {flakeChoices.map((f, idx) => (
            <figure
              key={f.file}
              className="rounded-2xl overflow-hidden border border-emerald-500 bg-white shadow-sm transition hover:shadow-md"
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
        <h2 className="text-2xl font-bold text-neutral-900">
          Hyper Flake Range (Premium Blend)
        </h2>
        <p className="mt-2 text-neutral-700">
          Our Hyper Flake blends offer a denser mix and stronger contrast for
          extra depth and a more premium finish — ideal for feature garages,
          workshops and commercial spaces. Colours may vary slightly on screens —
          we help confirm your choice during the site visit.
        </p>

        <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {hyperFlakeChoices.map((f, idx) => (
            <figure
              key={f.file}
              className="rounded-2xl overflow-hidden border border-emerald-500 bg-white shadow-sm transition hover:shadow-md"
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

      <section className="mt-14 max-w-3xl rounded-2xl border border-emerald-500 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-900">
          Not sure which flake colour to choose?
        </h2>
        <p className="mt-2 text-neutral-700">
          Use our epoxy floor colour visualiser to preview popular flake blends
          before booking. It is a simple way to compare looks for garages,
          patios, workshops and other residential or commercial floors in Perth.
        </p>
        <div className="mt-4">
          <Link
            href="/epoxy-floor-visualiser-perth"
            className="inline-block rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700"
          >
            Launch Visualiser
          </Link>
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
            <div className="relative aspect-square w-full max-h-[85vh] rounded-2xl border-2 border-emerald-500 overflow-hidden bg-black">
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

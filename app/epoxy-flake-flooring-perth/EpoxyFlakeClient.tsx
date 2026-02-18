"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const flakeChoices = [
  { name: "Blue Storm", file: "/flake-choices/blue-storm-epoxy-flake.webp" },
  { name: "Bullseye", file: "/flake-choices/bullseye-epoxy-flake.webp" },
  { name: "Camo", file: "/flake-choices/camo-epoxy-flake.webp" },
  {
    name: "Cookies & Cream",
    file: "/flake-choices/cookies-and-cream-epoxy-flake.webp",
  },
  {
    name: "Cookies & Cream (Small)",
    file: "/flake-choices/cookies-and-cream-small-epoxy-flake.webp",
  },
  { name: "Eggshell", file: "/flake-choices/eggshell-epoxy-flake.webp" },
  { name: "Foil", file: "/flake-choices/foil-epoxy-flake.webp" },
  { name: "Graphite", file: "/flake-choices/graphite-epoxy-flake.webp" },
  {
    name: "Graphite (Light)",
    file: "/flake-choices/graphite-light-epoxy-flake.webp",
  },
  { name: "Heritage", file: "/flake-choices/heritage-epoxy-flake.webp" },
  { name: "Night Sky", file: "/flake-choices/night-sky-epoxy-flake.webp" },
  { name: "Suede", file: "/flake-choices/suede-epoxy-flake.webp" },
];

export default function EpoxyFlakeClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % flakeChoices.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + flakeChoices.length) % flakeChoices.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Swipe gestures (lightbox)
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
      {/* BREADCRUMBS (UX + internal linking) */}
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

      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
          Epoxy Flake Floors Perth
        </h1>
        <p className="mt-4 text-neutral-700">
          Durable, easy-to-clean epoxy flake flooring for garages, workshops and
          homes across Perth. Proper surface preparation is critical — we
          mechanically grind, repair and prepare the slab before applying your
          chosen flake system and protective topcoat.
        </p>

        <div className="mt-6 mb-6 flex flex-wrap gap-2">
          <Link
            href="/#quote"
            className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/#gallery"
            className="rounded-xl border border-emerald-600 text-emerald-700 px-5 py-3 font-semibold hover:bg-emerald-50"
          >
            See Recent Work
          </Link>
        </div>
      </header>

      {/* FLAKE COLOURS */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-1">
          Popular epoxy flake colours
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
              className="
                rounded-2xl overflow-hidden
                border border-emerald-500
                bg-white shadow-sm
                transition hover:shadow-md
              "
            >
              <button
                type="button"
                onClick={() => openLightbox(idx)}
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

      {/* CTA */}
      <section className="mt-14 max-w-3xl rounded-2xl border border-emerald-500 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-neutral-900">
          Need help choosing the right flake?
        </h2>
        <p className="mt-2 text-neutral-700">
          Book a free site visit and we’ll show popular options on-site and
          recommend the best system based on your space, usage and budget.
        </p>
        <div className="mt-4">
          <Link
            href="/#quote"
            className="inline-block rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold hover:bg-emerald-700"
          >
            Book Free Site Visit
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
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
            {/* FRAME (NO GAP) */}
            <div
              className="
                relative
                aspect-square
                w-full
                max-h-[85vh]
                rounded-2xl
                border-2 border-emerald-500
                overflow-hidden
                bg-black
              "
            >
              {/* IMAGE FLUSH TO BORDER */}
              <Image
                src={flakeChoices[lightboxIndex].file}
                alt={flakeChoices[lightboxIndex].name}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />

              {/* CLOSE BUTTON (BIGGER + EMERALD) */}
              <button
                onClick={closeLightbox}
                className="
                  absolute top-4 right-4 z-30
                  inline-flex items-center gap-2
                  rounded-full bg-emerald-600 hover:bg-emerald-700
                  text-white
                  px-5 py-3
                  text-base font-semibold
                  shadow-lg
                  transition
                "
                aria-label="Close gallery"
              >
                ✕ Close
              </button>

              {/* LEFT ARROW (VISIBLE) */}
              <button
                onClick={prevImage}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 z-30
                  h-11 w-11
                  rounded-full
                  bg-white/95 hover:bg-white
                  text-black
                  flex items-center justify-center
                  text-3xl font-bold
                  shadow-lg
                "
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* RIGHT ARROW (VISIBLE) */}
              <button
                onClick={nextImage}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2 z-30
                  h-11 w-11
                  rounded-full
                  bg-white/95 hover:bg-white
                  text-black
                  flex items-center justify-center
                  text-3xl font-bold
                  shadow-lg
                "
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* CAPTION */}
            <div className="mt-3 text-center text-sm text-white/90">
              {flakeChoices[lightboxIndex].name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

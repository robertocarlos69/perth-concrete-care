"use client";

import { useState } from "react";

const galleryItems = [
  {
    src: "/gallery/cottesloe-polished-concrete-interior-floor-perth.webp",
    alt: "Polished concrete interior floor in Cottesloe home by Perth Concrete Care",
    label: "Cottesloe interior polished concrete",
    description:
      "Clean polished concrete finish in a residential interior setting with a refined, modern look.",
  },
  {
    src: "/gallery/cottesloe-polished-concrete-home-floors-perth.webp",
    alt: "Polished concrete home floors in Cottesloe by Perth Concrete Care",
    label: "Cottesloe polished home floors",
    description:
      "Residential polished concrete floors designed for a clean appearance, durability and low maintenance.",
  },
  {
    src: "/gallery/duncraig-polished-concrete-floors-perth.webp",
    alt: "Polished concrete floors in Duncraig by Perth Concrete Care",
    label: "Duncraig polished concrete floors",
    description:
      "Perth polished concrete floor example showing a durable, refined finish for residential living spaces.",
  },
];

export default function PolishingGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) nextImage();
    if (distance < -50) prevImage();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <>
      <div className="rounded-3xl border border-emerald-200 bg-white p-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Concrete polishing examples
            </h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              Real polished concrete examples from Perth Concrete Care showing
              clean, refined finishes for residential interiors and living spaces.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-2xl border border-emerald-200 bg-slate-50"
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="block w-full overflow-hidden text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>

              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

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
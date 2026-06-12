"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "../lib/site";
import { googleReviews } from "../lib/reviews";

const AUTO_ADVANCE_MS = 6000;

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex text-amber-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${className} fill-current`} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = googleReviews.length;

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto-advance, paused on hover/touch and when reduced motion is preferred
  useEffect(() => {
    if (paused || count < 2) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (dx > 40) next();
    else if (dx < -40) prev();
    touchStartX.current = null;
  };

  const review = googleReviews[index];

  return (
    <div
      className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Stars />
          <span className="text-sm font-bold text-stone-900">5.0 on Google</span>
        </div>
        <a
          href={business.googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-700 hover:underline whitespace-nowrap"
        >
          View profile →
        </a>
      </div>

      {/* Slide */}
      <div
        className="mt-4 min-h-[180px]"
        role="group"
        aria-roledescription="carousel slide"
        aria-label={`Review ${index + 1} of ${count}`}
        aria-live="polite"
      >
        <svg
          className="h-6 w-6 text-emerald-200"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.2 5C4.9 6.7 3.5 9.1 3.5 12.2c0 3.9 2.4 6.3 5.2 6.3 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.6-3.7-.4 0-.9.1-1 .1.3-1.9 1.9-3.9 3.7-4.9L7.2 5Zm9.7 0c-2.3 1.7-3.7 4.1-3.7 7.2 0 3.9 2.4 6.3 5.2 6.3 2.3 0 4-1.7 4-3.9 0-2.1-1.6-3.7-3.6-3.7-.4 0-.9.1-1 .1.3-1.9 1.9-3.9 3.7-4.9L16.9 5Z" />
        </svg>
        <blockquote className="mt-2 text-[15px] leading-relaxed text-stone-700">
          {review.text}
        </blockquote>
        <div className="mt-4">
          <div className="font-bold text-stone-900 text-sm">{review.name}</div>
          {review.jobLabel && (
            <div className="text-xs text-stone-500 mt-0.5">{review.jobLabel}</div>
          )}
          <div className="mt-1 text-xs text-stone-400">Posted on Google</div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {googleReviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-5 bg-emerald-600"
                  : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:border-emerald-300 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:border-emerald-300 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

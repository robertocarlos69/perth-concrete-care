import React from "react";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({
  faqs,
  className = "",
}: {
  faqs: FaqItem[];
  className?: string;
}) {
  return (
    <div className={className}>
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
          <summary className="cursor-pointer list-none select-none">
            <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-3 md:py-4">
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

          <div className="px-6 md:px-8 pb-7 -mt-2">
            <div className="h-px bg-emerald-100/80 mb-4" />
            <p className="text-sm text-neutral-600 leading-relaxed">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function ContactClient() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus("sending");

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

    try {
      const formData = new FormData(form);
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setFormStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact API error:", err);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border bg-white p-7">
          <h2 className="text-2xl font-bold">Request a free quote</h2>
          <p className="mt-3 text-neutral-700">
            Send dimensions and a couple of photos. We service north of the river — Butler corridor, Joondalup/Wanneroo, Osborne Park through to Perth CBD.
          </p>

          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
            <input name="name" className="w-full rounded-xl border px-4 py-3" placeholder="Full name" required />
            <input name="email" className="w-full rounded-xl border px-4 py-3" placeholder="Email" type="email" required />
            <input name="phone" className="w-full rounded-xl border px-4 py-3" placeholder="Phone" required />
            <input name="suburb" className="w-full rounded-xl border px-4 py-3" placeholder="Suburb" required />

            <select name="service" className="w-full rounded-xl border px-4 py-3 md:col-span-1" required defaultValue="">
              <option value="" disabled>Select service</option>
              <option>Epoxy flake floors</option>
              <option>Epoxy flake flooring</option>
              <option>Garage floor coatings</option>
              <option>Concrete grinding</option>
              <option>Concrete polishing</option>
              <option>Honed concrete (grind & seal)</option>
              <option>Metallic epoxy</option>
            </select>

            <input name="area" className="w-full rounded-xl border px-4 py-3" placeholder="Approx area (m²)" />

            <textarea name="details" className="w-full rounded-xl border px-4 py-3 md:col-span-2" placeholder="Tell us about the job (condition, use, any coating/paint, timeline)..." rows={5} />

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-neutral-800">Upload photos (optional)</label>
              <input name="photos" type="file" accept="image/*" multiple className="mt-2 w-full rounded-xl border px-4 py-3 bg-white" />
              <p className="mt-1 text-xs text-neutral-600">Up to 5 photos, 2MB each.</p>
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="md:col-span-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {formStatus === "sending" ? "Sending…" : "Send enquiry"}
            </button>

            {formStatus === "success" && (
              <div className="md:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                Sent. We’ll get back to you ASAP.
              </div>
            )}
            {formStatus === "error" && (
              <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
                Something went wrong. Please call 0448 483 226 or email sales@perthconcretecare.com.au.
              </div>
            )}
          </form>
        </div>

        <aside className="rounded-3xl border bg-white p-7 h-fit">
          <h3 className="text-xl font-bold">Contact</h3>
          <div className="mt-4 space-y-2 text-neutral-700">
            <a className="block hover:underline" href="tel:+61448483226">0448 483 226</a>
            <a className="block hover:underline" href="mailto:sales@perthconcretecare.com.au">sales@perthconcretecare.com.au</a>
            <div className="text-sm text-neutral-600">Service area only (no shopfront) — north of the river.</div>
          </div>

          <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
            <div className="text-sm font-semibold text-neutral-800">Fastest way to quote</div>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
              <li>Photos of the slab</li>
              <li>Approx size (m²)</li>
              <li>Suburb + access notes</li>
              <li>Any coating/paint currently on it</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

import Link from "next/link";
import { business } from "./lib/site";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-100">
      <section className="mx-auto max-w-3xl px-4 pt-20 pb-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          404 · Page not found
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
          That page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-stone-700 leading-relaxed">
          The link may be old or mistyped. Everything we do is a click away
          below, or call {business.phoneDisplay} and talk to Rob directly.
        </p>

        <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2 text-sm">
          <Link href="/" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Home
          </Link>
          <Link href="/#services" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Our services
          </Link>
          <Link href="/concrete-flooring" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Areas we serve
          </Link>
          <Link href="/blog" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Guides
          </Link>
          <Link href="/#pricing" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="rounded-xl border border-stone-200 bg-white px-4 py-3 font-semibold text-stone-800 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
            Contact
          </Link>
        </div>

        <div className="mt-10">
          <Link href="/#quote" className="inline-block rounded-xl bg-emerald-600 px-7 py-3.5 font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors">
            Get a free quote
          </Link>
        </div>

        <p className="mt-12 text-xs text-stone-500">
          Looking for the machine-readable index? See{" "}
          <a href="/sitemap.xml" className="underline hover:text-emerald-700">sitemap.xml</a>{" "}
          or{" "}
          <a href="/llms.txt" className="underline hover:text-emerald-700">llms.txt</a>.
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { breadcrumbSchema } from "../lib/schema";
import { siteUrl } from "../lib/site";
import { blogPosts } from "../lib/blog";

const pageUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "Concrete Flooring Guides & Advice",
  description:
    "Practical guides on concrete finishes for Perth homes and businesses: honed concrete, polished concrete, epoxy, exposed aggregate, costs, prep and slip ratings.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Concrete Flooring Guides & Advice | Perth Concrete Care",
    description:
      "Practical, no-nonsense guides on concrete finishes for Perth homes and businesses.",
    url: pageUrl,
    siteName: "Perth Concrete Care",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", url: `${siteUrl}/` },
          { name: "Guides", url: pageUrl },
        ],
        pageUrl
      ),
      {
        "@type": "Blog",
        "@id": `${pageUrl}#blog`,
        name: "Perth Concrete Care Guides",
        url: pageUrl,
        blogPost: blogPosts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${siteUrl}/blog/${p.slug}`,
          datePublished: p.date,
          dateModified: p.updated,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>›</span>
          <span className="text-stone-900">Guides</span>
        </div>

        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">
          Concrete Flooring Guides &amp; Advice
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-stone-700 leading-relaxed">
          Straight answers on concrete finishes for Perth homes and businesses:
          how each finish is made, what it costs, where it works and how to
          choose. Written by the team that does the grinding, honing and coating
          north of the river.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                    {p.category}
                  </span>
                  <h2 className="mt-2 text-lg font-bold text-stone-900 group-hover:text-emerald-700">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
                    <span>{p.dateDisplay}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <span className="mt-4 inline-block text-sm font-semibold text-emerald-700">
                    Read guide →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

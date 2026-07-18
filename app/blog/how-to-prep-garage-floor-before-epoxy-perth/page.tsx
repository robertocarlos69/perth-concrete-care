import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "how-to-prep-garage-floor-before-epoxy-perth";
const post = getPost(slug)!;
const pageUrl = `${siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: `${post.title} | Perth Concrete Care`,
    description: post.description,
    url: pageUrl,
    siteName: "Perth Concrete Care",
    type: "article",
    images: [{ url: post.image, alt: post.imageAlt }],
  },
};

const faqs = [
  {
    q: "Can I just acid-etch my garage floor instead of grinding?",
    a: "We don't recommend it. Acid etching is inconsistent, leaves residue that can stop coatings bonding, and it won't remove old paint or sealer. Diamond grinding gives a clean, even, correctly profiled surface every time, which is why coating manufacturers specify it for their warranties.",
  },
  {
    q: "Do I really need a moisture test on a garage slab?",
    a: "For a new build or a slab on ground with no working vapour barrier, yes. Moisture pushing up through the slab is a common cause of epoxy bubbling and peeling, and most manufacturer warranties require a test. We cover this in our slab moisture testing guide.",
  },
  {
    q: "How long does garage floor prep take?",
    a: "For a typical single or double garage, grinding and prep is usually done in a day, sometimes alongside the coating if there's no heavy removal or moisture mitigation needed. Crack repair, old-coating removal or moisture barriers add time, which we confirm when we quote.",
  },
  {
    q: "How soon can I park on the new floor?",
    a: "With a fast-cure polyaspartic topcoat, light foot traffic is usually fine the next day and vehicles after around 72 hours, depending on temperature and the system used. Good prep is what makes those cure times hold up over the years.",
  },
];

export default function Page() {
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.description,
        image: `${siteUrl}${post.image}`,
        datePublished: post.date,
        dateModified: post.updated,
        author: { "@type": "Person", name: "Rob", worksFor: { "@id": `${siteUrl}/#business` } },
        publisher: { "@id": `${siteUrl}/#business` },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        articleSection: post.category,
      },
      breadcrumbSchema(
        [
          { name: "Home", url: `${siteUrl}/` },
          { name: "Guides", url: `${siteUrl}/blog` },
          { name: post.title, url: pageUrl },
        ],
        pageUrl
      ),
      faqPageSchema(faqs, pageUrl),
    ],
  };

  const h2 = "mt-12 text-2xl md:text-3xl font-extrabold text-stone-900 scroll-mt-24";
  const p = "mt-4 text-stone-700 leading-relaxed";
  const aCls = "font-semibold text-emerald-700 hover:underline";

  return (
    <main className="min-h-screen bg-stone-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-14 pb-16">
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:underline">Guides</Link>
          <span>›</span>
          <span className="text-stone-900">Slab preparation</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            How to Prep a Garage Floor Before Epoxy in Perth
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span>By Rob, owner-operator at Perth Concrete Care</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="(min-width: 768px) 768px, 100vw" />
        </div>

        <p className={`${p} mt-8 text-lg`}>
          A garage epoxy floor is only as good as the slab underneath it. We get
          called out to fix peeling, bubbling and flaking floors all the time,
          and it almost always traces back to one thing: the prep was rushed or
          skipped. Get the preparation right and a flake or epoxy floor lasts for
          years. Get it wrong and it lets go, no matter how good the coating is.
          Here's how we prep a Perth garage properly, step by step.
        </p>

        <h2 className={h2}>Step 1: Clear and clean the slab</h2>
        <p className={p}>
          Everything comes out, and the bare slab gets a thorough clean to remove
          oil, dust and loose material. Oil stains matter, because epoxy will not
          bond through them, so any contaminated patches are degreased or ground
          out. This is also when we spot what we're really dealing with, such as
          old paint, a previous sealer, or a slab that's been coated before.
        </p>

        <h2 className={h2}>Step 2: Check the slab for moisture</h2>
        <p className={p}>
          On a new build, or any slab on ground without a working vapour barrier,
          moisture can push up through the concrete and lift a sealed coating off
          later. For those slabs we test first, and if it reads high we use a
          moisture barrier or suppression coating before anything else. There's a
          full breakdown in our{" "}
          <Link href="/blog/concrete-slab-moisture-testing-perth" className={aCls}>concrete slab moisture testing guide</Link>.
        </p>

        <h2 className={h2}>Step 3: Repair cracks and damage</h2>
        <p className={p}>
          Cracks, spalling and pitting are fixed before the floor goes down, not
          coated over. We inject cracks with a two-part epoxy resin and rebuild
          any broken areas, then grind them flush so the surface is sound and
          level. A coating bridged over an untreated crack will split there
          before long. Our{" "}
          <Link href="/concrete-repair-perth" className={aCls}>concrete repair</Link>{" "}
          page covers this in more detail.
        </p>

        <h2 className={h2}>Step 4: Diamond grind to the right profile</h2>
        <p className={p}>
          This is the step that makes or breaks the floor. We mechanically grind
          the slab with diamond tooling to open it up and create the correct{" "}
          <Link href="/blog/concrete-surface-profile-csp-explained-perth" className={aCls}>concrete surface profile (CSP)</Link>{" "}
          so the coating can key into the concrete. For epoxy and flake systems
          that's typically a CSP 2 to CSP 3 profile. We grind, not acid-etch,
          because grinding is consistent, removes old coatings and gives a
          reliable bond. It's the core of our{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>concrete grinding and prep</Link>{" "}
          service, all done with H-class dust extraction.
        </p>

        <h2 className={h2}>Step 5: Vacuum, then prime</h2>
        <p className={p}>
          A freshly ground slab has to be vacuumed properly, because a coating
          bonds to clean concrete, not to a layer of fine dust. Once it's clean we
          apply the right primer for the system and the slab condition, which
          locks everything together and gives the flake or epoxy coat the best
          possible base.
        </p>

        <h2 className={h2}>Step 6: Then, and only then, the floor goes down</h2>
        <p className={p}>
          With the slab clean, dry, repaired, profiled and primed, the actual
          coating goes on. Because the prep is right, the flake broadcast and
          topcoat bond hard and cure the way they should. The finish everyone sees
          is the easy part. The prep no one sees is what makes it last.
        </p>

        <h2 className={h2}>Why DIY prep usually fails</h2>
        <p className={p}>
          The kits look simple, but the two things that sink most DIY garage
          floors are acid etching instead of grinding, and skipping the moisture
          check. Etching can't match the profile or cleanliness of a mechanical
          grind, and an untested slab that's pushing moisture will lift the best
          coating on the market. That's why nearly every failed floor we're asked
          to strip and redo was a coating problem caused by a prep shortcut.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Want a garage floor that actually lasts?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            We prep and coat garage floors right across Perth. Send the size and
            a few photos of your slab and we'll give you a fixed written quote.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#quote" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
              Get a free quote
            </Link>
            <a href={`tel:${business.phoneHref}`} className="rounded-xl border border-emerald-300 bg-white px-6 py-3.5 font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors">
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>

        <h2 className={h2}>Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion faqs={faqs} />
        </div>
      </article>
    </main>
  );
}

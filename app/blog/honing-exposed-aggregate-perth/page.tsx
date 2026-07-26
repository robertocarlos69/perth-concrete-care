import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "honing-exposed-aggregate-perth";
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
    q: "Can existing exposed aggregate really be honed?",
    a: "Yes. As long as the slab is structurally sound and the aggregate sits deep enough, we grind the sharp tops off the stones and seal the surface. You keep the slab you already have and end up with a completely different surface underfoot. It's one of the most common jobs we do across Perth.",
  },
  {
    q: "How much does honing exposed aggregate cost in Perth?",
    a: "Honing existing washed aggregate runs about $80 to $100 per square metre, normally including sealing. The price moves with total area, access and side gate width, the amount of step and edge work needing hand grinding, how hard the aggregate is, and the condition of the slab. We confirm it with a fixed written quote after looking at the job.",
  },
  {
    q: "Will honed concrete be slippery around my pool?",
    a: "No, and this is the question we get most. Smooth is not the same as slippery. Honed concrete is finished and sealed to hold genuine outdoor grip, and we can target P4 to P5 slip ratings for wet, barefoot areas like pool surrounds. It's the finish we recommend around water.",
  },
  {
    q: "How long does the job take?",
    a: "Most residential alfrescos and pool surrounds are ground, sealed and finished within a couple of days depending on size, access and the sealer chosen. We give you exact cure times at handover so nothing gets marked while it's still green.",
  },
  {
    q: "Is honing the same as polishing?",
    a: "No. Polishing keeps going through much finer grits to build a sheen, and it belongs indoors. Honing stops at a refined matte surface built for outdoor use. You're refining the surface, not turning the backyard into a shopping centre floor.",
  },
  {
    q: "What if my slab isn't suitable?",
    a: "We'll tell you straight. If the aggregate was laid too shallow there isn't enough stone to cut into, and a slab that's badly out of level will hone unevenly. We assess it before quoting and we'd rather turn a job down than take your money for a finish that won't work.",
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
  const ul = "mt-4 space-y-2 text-stone-700 list-disc pl-5 marker:text-emerald-600";
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
          <span className="text-stone-900">Honed concrete</span>
        </div>

        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Exposed Aggregate Too Rough? We Can Fix That
</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-500">
            <span>By Rob, owner-operator at Perth Concrete Care</span>
            <span aria-hidden="true">·</span>
            <span>{post.dateDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <figure className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/exposed-aggregate-before-honing-perth.webp"
                alt="Rough exposed aggregate alfresco in Perth before honing, with grinding equipment on site"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Before honing
              </span>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/exposed-aggregate-after-honing-perth.webp"
                alt="Exposed aggregate alfresco honed and sealed to a smooth wet-look finish in Perth"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                After honing
              </span>
            </div>
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            The same Perth alfresco before and after honing, shot from opposite
            ends. No demolition and no new pour. That is the original slab,
            ground back and sealed with a UV-stable topical sealer.
          </figcaption>
        </figure>

        <p className={`${p} mt-8 text-lg`}>
          If your exposed aggregate is killing your feet, you almost certainly
          don&apos;t need a new slab. This comes up constantly and most
          homeowners have no idea it&apos;s an option: existing washed aggregate
          can be mechanically honed and sealed. You don&apos;t have to demolish
          perfectly good concrete. Same old slab, completely different surface.
        </p>
        <p className={p}>
          I&apos;ve been finishing concrete in WA for years and this is one of
          the most satisfying jobs we do, because the before and after is so
          stark. People who were about to spend a fortune ripping out their
          alfresco end up with a surface they actually want to walk on, for a
          fraction of the cost and in a couple of days rather than weeks.
        </p>

        <h2 className={h2}>Why so many Perth slabs end up like this</h2>
        <p className={p}>
          Exposed aggregate is the cheap option up front. Pour it, spray a
          retarder, wash the cream off while it&apos;s still green, done. No
          grinding, no extra passes, and it goes down fast. That&apos;s exactly
          why it&apos;s been the default for Perth driveways, paths and alfrescos
          for decades.
        </p>
        <p className={p}>
          Then you actually live on it. Alfresco areas and pool surrounds are
          where I see the problem most, because that&apos;s where everyone is
          barefoot every weekend all summer. The kids won&apos;t run on it, the
          dog won&apos;t cross it, and if someone goes down on it it&apos;s like
          landing on a cheese grater. The slab is perfectly sound. It&apos;s just
          brutal to be on.
        </p>

        <h2 className={h2}>What honing actually does to the surface</h2>
        <p className={p}>
          Honing is a controlled diamond grind. We cut the sharp tops off the
          stones so the surface sits flat and smooth underfoot, then refine it
          through progressively finer tooling and seal it. The texture goes from
          jagged peaks to an even, comfortable surface you can stand on all day.
        </p>
        <p className={p}>
          Now the question everyone asks: doesn&apos;t smooth mean slippery? No.
          Smooth and slippery are two different things. Finished properly, honed
          concrete keeps plenty of outdoor grip, and we can target{" "}
          <strong>P4 to P5 slip ratings</strong> for wet barefoot zones like pool
          surrounds. That&apos;s the whole reason we recommend it around water
          instead of a polished finish.
        </p>
        <p className={p}>
          And to be clear, honing is not polishing. Polishing keeps going through
          much finer grits to build a sheen, and it belongs indoors. Honing stops
          at a refined matte surface built for the outdoors. You&apos;re refining
          the surface, not turning the backyard into a shopping centre floor.
        </p>

        <h2 className={h2}>The part nobody expects: the colour</h2>
        <p className={p}>
          Here&apos;s what sells this job better than anything I can say.
          Grinding cuts the faces of the stones open, which brings out colour,
          depth and detail that has been buried in that slab since the day it was
          poured. Greys, golds, quartz sparkle, the lot. Most people have never
          seen what&apos;s actually in their own concrete.
        </p>
        <p className={p}>
          Seal it and the difference is dramatic. Customers regularly tell me the
          honed slab looks better than the day it was laid, and it&apos;s the
          same concrete they were three days away from demolishing.
        </p>

        <figure className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/exposed-aggregate-closeup-before-honing-perth.webp"
                alt="Close up of rough exposed aggregate before honing, showing sharp uncut stone tops"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Before honing
              </span>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <Image
                src="/gallery/exposed-aggregate-closeup-after-honing-perth.webp"
                alt="Close up of honed exposed aggregate showing cut stone faces and colour brought out by grinding"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 384px, 100vw"
              />
              <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                After honing
              </span>
            </div>
          </div>
          <figcaption className="mt-3 text-sm text-stone-600">
            The same slab up close. On the left the stone tops are rough and
            uncut. On the right the faces have been cut open, bringing out the
            colour and detail that had been buried in that concrete since the
            day it was poured.
          </figcaption>
        </figure>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Send me a photo and I&apos;ll tell you straight
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            I can usually tell from a picture whether a slab will hone well. Send
            a photo and rough measurements and you&apos;ll get a fixed written
            price, no obligation and no hard sell.
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

        <h2 className={h2}>What it costs in Perth</h2>
        <p className={p}>
          Honing existing washed aggregate runs about{" "}
          <strong>$80 to $100 per square metre</strong>, normally including
          sealing. The price moves with a handful of things:
        </p>
        <ul className={ul}>
          <li>Total area, since bigger jobs earn a better rate per m²</li>
          <li>Access and side gate width, because the machines have to get in</li>
          <li>Steps, edges and detail work that need hand grinding</li>
          <li>How hard the aggregate is</li>
          <li>The condition of the slab, including any repairs</li>
        </ul>
        <p className={p}>
          Worth knowing why honing existing aggregate costs more than honing a
          slab that was poured for it. It&apos;s what you&apos;re cutting. On
          washed aggregate you go straight into quartz and hard stone from the
          very first pass. It&apos;s slower and it chews through diamond tooling.
          A slab poured to be honed from day one runs closer to $75/m² for the
          honing and sealing.
        </p>
        <p className={p}>
          Either way, honing is the expensive part of the process. Washing the
          cream off is the shortcut, which is exactly why most people take washed
          aggregate first and end up here later. Set that against the cost of
          demolition, removal, a new pour and weeks of disruption, and honing
          wins comfortably.
        </p>

        <h2 className={h2}>Choosing your sealer</h2>
        <p className={p}>
          You&apos;ve got two realistic options, and it genuinely changes the
          look:
        </p>
        <ul className={ul}>
          <li>
            <strong>Topical UV-resistant sealer.</strong> The strongest colour
            enhancement with a wet look. Needs redoing every few years depending
            on sun and traffic.
          </li>
          <li>
            <strong>Penetrating sealer.</strong> Soaks in, lower maintenance and
            a natural finish, but it does very little for the colour.
          </li>
        </ul>
        <p className={p}>
          My honest recommendation is topical. The colour is half the reason to
          hone in the first place, and it feels like a waste to do all that work
          and not see it. Whichever way you lean, get a sample patch done before
          you commit. We&apos;ll do one so you&apos;re looking at your actual
          slab, not a brochure.
        </p>

        <h2 className={h2}>Is your slab a good candidate?</h2>
        <p className={p}>
          Most are. If the slab is structurally sound and the only real problem
          is that it&apos;s too rough, honing beats demolition every time:
          cheaper, faster, far less mess, and it usually looks better than the
          original.
        </p>
        <p className={p}>
          But not every slab suits it, and I&apos;d rather say so up front. If
          the aggregate was laid too shallow there isn&apos;t enough stone to cut
          into. A slab that&apos;s badly out of level will hone unevenly. Serious
          structural cracking needs sorting first, which is covered on our{" "}
          <Link href="/concrete-repair-perth" className={aCls}>concrete repair</Link>{" "}
          page. We assess all of that before quoting, and we&apos;ll tell you
          honestly if it isn&apos;t worth doing.
        </p>

        <h2 className={h2}>What the job actually looks like</h2>
        <p className={p}>
          We turn up, protect the surrounding areas and set up dust extraction.
          The slab gets its first cut with coarse diamonds to knock the stone
          tops off, then progressively finer passes to refine the surface. Edges,
          steps and tight corners are done by hand so the whole area matches, not
          just the open middle. Once it&apos;s clean and dry, the sealer goes on.
        </p>
        <p className={p}>
          Most residential alfrescos and pool surrounds are finished within a
          couple of days. You get exact cure times at handover so nothing gets
          marked while it&apos;s still green. The same{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>grinding and preparation</Link>{" "}
          discipline sits behind every finish we install.
        </p>

        <h2 className={h2}>So, is it worth it?</h2>
        <p className={p}>
          If you&apos;ve got a sound slab that&apos;s too rough to enjoy, this is
          the easiest win in concrete. You keep the concrete you already paid
          for, you skip the demolition and the mess, you get a surface the kids
          and the dog will actually use, and you uncover colour that&apos;s been
          hiding in there for years. It&apos;s the job customers thank us for
          most.
        </p>
        <p className={p}>
          We hone and seal exposed aggregate right across the Perth metro area,
          including{" "}
          <Link href="/concrete-flooring/scarborough" className={aCls}>Scarborough</Link>,{" "}
          <Link href="/concrete-flooring/mindarie" className={aCls}>Mindarie</Link>,{" "}
          <Link href="/concrete-flooring/balcatta" className={aCls}>Balcatta</Link>{" "}
          and{" "}
          <Link href="/concrete-flooring/willetton" className={aCls}>Willetton</Link>.
          There&apos;s more detail on the process and finish options on our{" "}
          <Link href="/honed-concrete-perth" className={aCls}>honed concrete in Perth</Link>{" "}
          page, and if you&apos;re still weighing up finishes, our{" "}
          <Link href="/blog/honed-vs-polished-vs-exposed-aggregate-perth" className={aCls}>honed vs polished vs exposed aggregate guide</Link>{" "}
          breaks down the differences.
        </p>

        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Stop avoiding your own alfresco
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send a photo of your slab with rough measurements and I&apos;ll tell
            you whether honing will work and what it&apos;ll cost. Fixed written
            quote, no obligation, and I&apos;ll tell you if a cheaper option will
            do the job.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#quote" className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors">
              Get my free quote
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

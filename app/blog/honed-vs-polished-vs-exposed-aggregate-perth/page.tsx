import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import FaqAccordion from "../../components/FaqAccordion";
import { breadcrumbSchema, faqPageSchema } from "../../lib/schema";
import { business, siteUrl } from "../../lib/site";
import { getPost } from "../../lib/blog";

const slug = "honed-vs-polished-vs-exposed-aggregate-perth";
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
    q: "Is honed concrete slippery?",
    a: "Not when it's finished correctly. Honed concrete is the finish we recommend for outdoor and wet areas precisely because it can be sealed to a slip rating of P3–P5, depending on the sealer and any added anti-slip grip. A high-gloss polished floor is the slippery one — which is why we keep that finish indoors.",
  },
  {
    q: "Can polished concrete be used outdoors or around a pool?",
    a: "We don't recommend it. A polished, high-gloss surface gets slippery when wet and the gloss can suffer under constant UV. For pool surrounds, alfrescos and driveways we use honed concrete or hone-and-seal, which give a slip-rated, UV-stable finish built for Perth conditions.",
  },
  {
    q: "Can you hone my existing exposed aggregate driveway or patio?",
    a: "Usually, yes — it's one of our most common jobs. If the slab is sound, we grind back the high points of the stone to leave a smoother, flatter surface that keeps the decorative aggregate look but is far kinder on bare feet and easier to clean. It's much cheaper than tearing out and re-pouring.",
  },
  {
    q: "How much does honed concrete cost in Perth?",
    a: "As a guide, hone-and-seal finishes start around $60–$80 per square metre and polished concrete sits around $140–$220 per square metre. Exposed aggregate is generally cheaper because it's created at the original pour. Final pricing depends on slab condition, aggregate type, repairs, access and area, so we confirm it after a site assessment.",
  },
  {
    q: "What's the difference between exposed aggregate and washed aggregate?",
    a: "They're the same finish — both are created by spraying a retarder on fresh concrete and washing off the surface cream the next day to reveal the stone. “Washed aggregate” just refers to that washing step. It's different from honed concrete, which is ground and refined after the slab has cured.",
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
  const h3 = "mt-8 text-xl font-bold text-stone-900";
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
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:underline">Guides</Link>
          <span>›</span>
          <span className="text-stone-900">Concrete finishes</span>
        </div>

        {/* Title + byline */}
        <header className="mt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
            {post.category}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Honed Concrete vs Polished Concrete vs Exposed Aggregate: What’s the Difference?
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
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        {/* Intro */}
        <p className={`${p} mt-8 text-lg`}>
          If you’ve started getting quotes for a concrete finish in Perth, you’ve
          probably heard the terms <strong>honed concrete</strong>,{" "}
          <strong>polished concrete</strong> and{" "}
          <strong>exposed aggregate</strong> used almost interchangeably. They’re
          not the same thing — and choosing the wrong one for the spot you have
          in mind is one of the more expensive mistakes we get called out to fix.
        </p>
        <p className={p}>
          All three show off the stone inside the concrete, but they’re prepared
          differently, they suit different parts of a property, and they behave
          very differently underfoot and in Perth’s climate. This guide explains
          how each finish is actually made, where it works best, and how to pick
          the right one — written from what we see day to day grinding, honing
          and coating floors north of the river.
        </p>

        {/* Honed */}
        <h2 className={h2}>What is honed concrete?</h2>
        <p className={p}>
          Honed concrete is a <em>mechanically ground</em> finish. We grind the
          cured slab with progressively finer diamond tooling — stepping up
          through the grits — to cut back the top surface and expose the sand and
          stone within the concrete, then seal it. How much stone shows comes
          down to how deep we grind: a light{" "}
          <span className="whitespace-nowrap">“cream”</span> grind barely opens
          the surface, while a deeper cut gives a salt-and-pepper or full-aggregate
          look.
        </p>
        <p className={p}>
          The key point for Perth: honed concrete is built for{" "}
          <strong>outdoors</strong>. We finish it to a slip rating (commonly
          P3–P5 depending on the sealer and any added grip) so it stays safe
          around water, and we use UV-stable sealers so it doesn’t yellow or
          break down in the local sun. It’s ideal for pool surrounds, alfrescos,
          patios, courtyards, paths and outdoor entertaining areas.
        </p>
        <p className={p}>
          People choose it because it keeps a natural stone look but feels smooth
          and comfortable on bare feet, it hoses down easily, and a correctly
          sealed honed surface holds up well to Perth summers. The honest
          trade-offs: it needs professional grinding gear and costs more up front
          than leaving raw concrete, and because we’re exposing whatever stone the
          original pour used, the colour and aggregate can vary from slab to slab.
          We always check the slab before quoting so there are no surprises. See
          our{" "}
          <Link href="/honed-concrete-perth" className={aCls}>honed concrete in Perth</Link>{" "}
          page for the full process.
        </p>

        {/* Polished */}
        <h2 className={h2}>What is polished concrete?</h2>
        <p className={p}>
          Polished concrete is the indoor cousin. The early grinding stages look
          similar to honing, but instead of stopping at a matte honed surface we
          keep going — through fine resin-bond diamond pads, often up to the
          1500–3000 grit range, usually with a lithium densifier to harden the
          surface and a guard to protect it — until the floor takes on a sheen.
          You can dial the gloss anywhere from a soft satin to a near-mirror
          finish.
        </p>
        <p className={p}>
          It suits living rooms, kitchens, hallways, retail floors, showrooms and
          warehouses — anywhere indoors that wants a hard-wearing, low-maintenance
          floor that reflects light and opens the space up. It’s extremely durable
          (it’s essentially a hardened version of the slab you already own),
          there’s no grout or carpet to stain, and it wipes clean.
        </p>
        <p className={p}>
          The honest trade-off is slip: a high-gloss polish can get slippery when
          wet, so it’s not what we recommend right around a pool. Properly
          finished with the right guard, indoor polished concrete can still meet
          slip requirements — but outdoors, hone-and-seal is the safer call. More
          detail on our{" "}
          <Link href="/concrete-polishing-perth" className={aCls}>polished concrete</Link>{" "}
          page.
        </p>

        {/* Exposed aggregate */}
        <h2 className={h2}>What is exposed aggregate?</h2>
        <p className={p}>
          Exposed aggregate is different from the other two because it happens{" "}
          <em>at the pour</em>, not afterwards. While the concrete is still green,
          a surface retarder is applied and the top layer of cement{" "}
          <span className="whitespace-nowrap">“cream”</span> is washed off the
          next day to reveal the decorative stones underneath — which is why it’s
          sometimes called washed aggregate. Crucially, it isn’t ground or refined
          after exposure, so the texture you get is the texture of the stones
          themselves.
        </p>
        <p className={p}>
          It’s been a Perth default for residential driveways, crossovers,
          footpaths and front entrances for decades. People choose it because it’s
          affordable compared with honing, the exposed stone gives excellent grip
          for cars and feet on a slope, and there’s a huge range of local
          aggregate blends to pick from. The trade-offs are the flip side of that
          texture — it can feel rough or sharp underfoot, the peaks and valleys
          trap dirt, and it’s harder to clean than a honed surface. That roughness
          is exactly why so many Perth homeowners later ask us to hone it back.
        </p>

        {/* Honed vs exposed */}
        <h2 className={h2}>Honed concrete vs exposed aggregate — the one people mix up</h2>
        <p className={p}>
          These two get confused the most, because both show the stone. The real
          difference is what happens <em>after</em> the stone is exposed:
        </p>
        <ul className={ul}>
          <li>Exposed aggregate is left with its natural, as-cast texture.</li>
          <li>Honed concrete is ground and refined after exposure, taking the high points off the stone.</li>
        </ul>
        <p className={p}>
          In practice, honed concrete feels smoother, cleans more easily and reads
          as a more premium, modern finish, while exposed aggregate costs less and
          grips harder. For a driveway on a slope, that grip is a feature. For a
          pool surround or alfresco where people walk barefoot, the smoother honed
          surface usually wins.
        </p>

        {/* Can you hone existing */}
        <h2 className={h2}>Can existing exposed aggregate be honed?</h2>
        <p className={p}>
          Yes — and it’s one of our most-requested jobs around Perth. If you’ve
          got a rough exposed-aggregate patio, pool surround or driveway that’s
          hard on bare feet, we can grind back the high points of the stone to
          leave a smoother, flatter, more refined surface while keeping the
          decorative aggregate look. You get most of the comfort and cleanability
          of a fresh honed slab without the cost of ripping out and re-pouring.
        </p>
        <p className={p}>
          It’s especially popular around swimming pools, alfrescos, courtyards and
          entertaining areas in suburbs like{" "}
          <Link href="/concrete-flooring/scarborough" className={aCls}>Scarborough</Link>{" "}
          and{" "}
          <Link href="/concrete-flooring/mindarie" className={aCls}>Mindarie</Link>.
          We assess the existing slab first — if it’s sound, honing and resealing
          is usually far cheaper than replacement.
        </p>

        {/* Pools */}
        <h2 className={h2}>Which finish is best around pools?</h2>
        <p className={p}>
          For pool surrounds, honed concrete (or hone-and-seal over existing
          aggregate) is almost always the right answer. It gives barefoot comfort,
          reduces trip hazards from sharp stone, looks clean and modern, and — most
          importantly — can be sealed to a high slip rating so it stays safe when
          wet. A polished, glossy surface is the opposite of what you want next to
          water.
        </p>

        {/* Driveways */}
        <h2 className={h2}>Which finish is best for driveways?</h2>
        <p className={p}>
          For most residential driveways, exposed aggregate is still one of the
          most cost-effective choices: strong traction, good durability and plenty
          of design flexibility. That said, homeowners chasing a more refined look
          increasingly ask us to hone an exposed-aggregate driveway for a smoother,
          premium finish that’s easier to keep clean. Both are valid — it comes
          down to budget and the look you’re after.
        </p>

        {/* Cost */}
        <h2 className={h2}>Cost comparison</h2>
        <p className={p}>
          Pricing always depends on the slab’s condition, the aggregate, the area
          and access, but as a rough Perth guide:
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[480px] text-sm border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left">
                <th className="px-4 py-3 font-bold text-stone-900">Finish</th>
                <th className="px-4 py-3 font-bold text-stone-900">Typical cost</th>
                <th className="px-4 py-3 font-bold text-stone-900">Best for</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">Exposed aggregate</td>
                <td className="px-4 py-3">Lowest (done at the pour)</td>
                <td className="px-4 py-3">Driveways, paths</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="px-4 py-3 font-semibold text-stone-900">
                  <Link href="/honed-concrete-perth" className={aCls}>Hone &amp; seal</Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">from $60–$80/m²</td>
                <td className="px-4 py-3">Pools, alfrescos, outdoor</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-stone-900">
                  <Link href="/concrete-polishing-perth" className={aCls}>Polished concrete</Link>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">$140–$220/m²</td>
                <td className="px-4 py-3">Indoor living &amp; commercial</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Which to choose */}
        <h2 className={h2}>So which finish should you choose?</h2>
        <p className={p}>The short version:</p>
        <ul className={ul}>
          <li><strong>Honed concrete</strong> — pool surrounds, outdoor entertaining and any barefoot area where you want a premium, low-maintenance, slip-rated finish.</li>
          <li><strong>Polished concrete</strong> — indoor living areas and commercial floors that want a durable, light-reflecting surface.</li>
          <li><strong>Exposed aggregate</strong> — driveways and budget-friendly decorative concrete where maximum grip matters.</li>
        </ul>
        <p className={p}>
          Still not sure? That’s genuinely the most common reason people call us —
          and we’ll happily tell you if a cheaper option will do the job. If your
          slab needs prep first, that side of it is covered on our{" "}
          <Link href="/concrete-grinding-perth" className={aCls}>concrete grinding</Link>{" "}
          page.
        </p>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900">
            Not sure which finish suits your place?
          </h2>
          <p className="mt-2 text-stone-700 leading-relaxed">
            Send a photo of your slab or area with rough measurements and we’ll
            recommend the right finish — a free, no-obligation assessment from the
            person who does the work.
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

        {/* FAQ */}
        <h2 className={h2}>Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion faqs={faqs} />
        </div>
      </article>
    </main>
  );
}

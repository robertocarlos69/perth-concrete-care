/**
 * Suburb landing pages for local SEO.
 *
 * ── HOW TO ADD A SUBURB ───────────────────────────────────────────
 * 1. Copy one of the entries below and change the fields.
 * 2. Write GENUINELY UNIQUE copy for `heroIntro`, `localContext` and
 *    `localFaqs` — do NOT reuse another suburb's wording. Thin, near-
 *    duplicate "doorway" pages get filtered by Google and can hurt the
 *    whole site. Reference a real local job wherever you can.
 * 3. Point `image` at a real photo from /public/gallery for that area.
 * 4. The page, sitemap entry and footer link are generated automatically.
 * ──────────────────────────────────────────────────────────────────
 */

export type SuburbFaq = { q: string; a: string };

export type Suburb = {
  /** URL slug → /concrete-flooring/<slug> */
  slug: string;
  /** Display name, e.g. "Joondalup" */
  name: string;
  /** Short area descriptor used in copy */
  region: string;
  /** ISO date used for sitemap lastmod — bump when you edit the page */
  updated: string;
  /** <=160 char meta description, unique per suburb */
  metaDescription: string;
  /** Unique 2–3 sentence hero intro */
  heroIntro: string;
  /** Unique ~80–120 word paragraph about local conditions/jobs */
  localContext: string;
  /** Featured local project image from /public/gallery */
  image: string;
  imageAlt: string;
  imageLabel: string;
  /** Slugs of nearby suburbs for internal linking */
  nearby: string[];
  /** 2–3 unique, locally-flavoured FAQs */
  localFaqs: SuburbFaq[];
};

export const suburbs: Suburb[] = [
  {
    slug: "joondalup",
    name: "Joondalup",
    region: "Joondalup & the northern corridor",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Joondalup — epoxy flake garage floors, polished concrete, metallic epoxy and hone & seal. Local installer, fully insured, free quotes.",
    heroIntro:
      "Perth Concrete Care installs epoxy flake garage floors, polished concrete and hone-and-seal finishes throughout Joondalup. As one of the City's main residential and commercial hubs, Joondalup keeps us busy with everything from double garages in established streets to showroom and office floors.",
    localContext:
      "Joondalup's housing is a mix of established 1990s–2000s homes and newer infill, so we see a lot of garages with old paint or failing DIY epoxy that needs grinding back before a proper flake system goes down. For Joondalup's commercial and retail spaces, polished concrete and grind-and-seal are popular because they handle heavy foot traffic and stay easy to maintain. Every slab is prepared to the correct CSP profile with H-class dust extraction, so the coating bonds for years — not months.",
    image: "/gallery/epoxy-flake-garage-floor-joondalup-perth.webp",
    imageAlt:
      "Light grey epoxy flake garage floor installed in Joondalup, Perth",
    imageLabel: "Epoxy flake garage floor — Joondalup",
    nearby: ["wanneroo", "banksia-grove", "duncraig"],
    localFaqs: [
      {
        q: "Do you charge extra to travel to Joondalup?",
        a: "No. Joondalup sits right in the middle of our service area, so there's no travel surcharge, and you get the same fixed-price quote as anywhere else we cover.",
      },
      {
        q: "Can you finish a Joondalup garage floor quickly?",
        a: "Most single and double garages in Joondalup are completed in 1–2 days. With a fast-cure polyaspartic topcoat we can often have you walking on it the next day and parking within a few days.",
      },
    ],
  },
  {
    slug: "wanneroo",
    name: "Wanneroo",
    region: "Wanneroo & surrounds",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Wanneroo — epoxy flake, metallic epoxy, shed & workshop floors, polished concrete and hone & seal. Local, insured, free quotes.",
    heroIntro:
      "From large rural-residential blocks to new estates, Wanneroo homes often come with big sheds and workshops — exactly the spaces an epoxy flake or metallic epoxy floor transforms. We prepare and coat garage, shed, workshop and living-area floors right across Wanneroo.",
    localContext:
      "Wanneroo's mix of semi-rural properties and growing estates means we get a lot of large shed and workshop slabs, alongside new-build garages. Older sheds often have stained, dusty or previously painted concrete that needs mechanical grinding first; new estate slabs need correct profiling and a moisture-tolerant primer. Flake floors are the go-to for durability underfoot in workshops, while metallic epoxy is increasingly popular for statement garages and alfresco rooms.",
    image: "/gallery/metallic-epoxy-floor-wanneroo-perth.webp",
    imageAlt:
      "High-gloss metallic epoxy floor with marbled effect installed in Wanneroo, Perth",
    imageLabel: "Metallic epoxy floor — Wanneroo",
    nearby: ["joondalup", "banksia-grove", "mindarie"],
    localFaqs: [
      {
        q: "Can you coat a large shed or workshop floor in Wanneroo?",
        a: "Yes — big shed and workshop slabs are some of our most common Wanneroo jobs. We assess the slab, grind back any old paint or contamination, and choose a flake or grind-and-seal system suited to how you use the space.",
      },
      {
        q: "My Wanneroo slab is old and dusty — can it still be coated?",
        a: "Usually, yes. Dusty or previously painted concrete is mechanically ground back to sound concrete and profiled correctly before any coating goes on. We'll confirm on site if any patching or crack repair is needed first.",
      },
    ],
  },
  {
    slug: "banksia-grove",
    name: "Banksia Grove",
    region: "Banksia Grove & the northern estates",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Banksia Grove — epoxy flake garage floors for new-build homes, plus polished concrete and hone & seal. Local installer, free quotes.",
    heroIntro:
      "Banksia Grove is one of Perth's fast-growing northern estates, full of newer homes with fresh slabs ready for a proper garage floor. We install epoxy flake and metallic epoxy floors that turn a bare builder's slab into a finished, easy-clean space — and we've completed several flake garages in the area already.",
    localContext:
      "Because Banksia Grove is largely new-build, most jobs here are clean garage slabs that only need correct profiling and a moisture-tolerant primer rather than heavy coating removal. New slabs can still hold construction moisture, so we test and prime accordingly to avoid bubbling or delamination. Full-flake systems in colours like Cookies & Cream are popular with Banksia Grove homeowners chasing a showroom look the builder didn't provide.",
    image:
      "/gallery/epoxy-flake-garage-floor-cookies-and-cream-Banksia-Grove.webp",
    imageAlt:
      "Cookies and cream epoxy flake garage floor installed in Banksia Grove, Perth",
    imageLabel: "Cookies & Cream epoxy flake garage — Banksia Grove",
    nearby: ["wanneroo", "joondalup", "mindarie"],
    localFaqs: [
      {
        q: "My Banksia Grove home is a new build — when can the garage be coated?",
        a: "New slabs need to cure before coating, usually around 28 days, and we test for residual moisture before priming. If the slab is ready, a new-build garage is one of the quickest, cleanest floors to coat because there's no old coating to remove.",
      },
      {
        q: "Do you have a reference floor in Banksia Grove?",
        a: "Yes — we've installed several epoxy flake garages in Banksia Grove, including a full Cookies & Cream broadcast. Ask when you enquire and we can talk you through recent local jobs.",
      },
    ],
  },
  {
    slug: "mindarie",
    name: "Mindarie",
    region: "Mindarie & the northern coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Mindarie — UV-stable epoxy flake, hone & seal pool surrounds and alfresco floors built for coastal conditions. Free quotes.",
    heroIntro:
      "Mindarie's coastal homes, marina apartments and pool areas need finishes that stand up to sun, salt and bare feet. We install UV-stable epoxy flake, hone-and-seal pool surrounds and alfresco floors designed for the northern coast — including flake pool areas we've finished locally.",
    localContext:
      "Being on the coast, Mindarie floors face strong UV and salt-laden air, so we always specify UV-stable polyaspartic or polyurethane topcoats that resist the yellowing cheaper epoxy-only systems suffer. Around pools and alfresco areas we use hone-and-seal and flake systems with anti-slip additives to reach P4–P5 slip ratings for wet, bare-foot zones. Granny flats and outdoor rooms are common here too, where a flake floor gives a hard-wearing, easy-clean finish.",
    image: "/gallery/epoxy-flake-pool-area-sandstone-mindarie-perth.webp",
    imageAlt:
      "Sandstone epoxy flake pool area installed in Mindarie on the Perth coast",
    imageLabel: "Sandstone epoxy flake pool area — Mindarie",
    nearby: ["wanneroo", "banksia-grove", "scarborough"],
    localFaqs: [
      {
        q: "Will an epoxy or flake floor fade in Mindarie's coastal sun?",
        a: "Not with the right topcoat. For coastal suburbs like Mindarie we finish with a UV-stable polyaspartic or polyurethane that resists yellowing and fading, which is essential so close to the water.",
      },
      {
        q: "Can you make a pool surround non-slip?",
        a: "Yes. For Mindarie pool surrounds and alfresco areas we add an anti-slip aggregate to the topcoat and can target P4–P5 slip ratings, so the surface stays safe underfoot when wet.",
      },
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "Scarborough & the western coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Scarborough — resurfacing rough aggregate, hone & seal, epoxy flake and polished concrete for coastal homes. Free quotes.",
    heroIntro:
      "From beachside renovations to tired exposed-aggregate patios, Scarborough floors often need refreshing rather than replacing. We grind, resurface, hone-and-seal and coat concrete across Scarborough — including transforming rough exposed aggregate into smooth, modern honed concrete.",
    localContext:
      "Scarborough's older beachside homes and apartments frequently have dated, rough exposed-aggregate driveways and patios that are hard on bare feet. Honing and sealing smooths the surface and brings the colour back to life without a full re-pour. As a coastal suburb, UV and salt exposure mean we always use UV-stable sealers and topcoats. Indoors, polished concrete and flake floors suit the bright, open style of many Scarborough renovations.",
    image: "/gallery/hone-and-seal-exposed-aggregate-balcatta.webp",
    imageAlt:
      "Exposed aggregate honed and sealed to a smooth coastal finish near Scarborough, Perth",
    imageLabel: "Hone & seal exposed aggregate — coastal finish",
    nearby: ["mindarie", "duncraig", "joondalup"],
    localFaqs: [
      {
        q: "Can you smooth a rough exposed-aggregate patio in Scarborough?",
        a: "Yes — that's one of our most-requested Scarborough jobs. We diamond-hone the surface to knock back the sharp stones, then seal it for a smoother, easier-to-clean finish that's kinder on bare feet.",
      },
      {
        q: "Do I need to replace my old concrete, or can it be resurfaced?",
        a: "In most cases sound concrete can be ground, honed and resealed rather than replaced, which is far cheaper. We'll tell you honestly on site if the slab is too far gone, but most Scarborough patios and driveways are good candidates for resurfacing.",
      },
    ],
  },
  {
    slug: "duncraig",
    name: "Duncraig",
    region: "Duncraig & the leafy northern suburbs",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Duncraig — polished concrete for renovations, epoxy flake garages and hone & seal alfresco areas. Local installer, free quotes.",
    heroIntro:
      "Duncraig's established family homes are popular for renovations and extensions, where polished concrete makes a hard-wearing, low-maintenance living-area floor. We polish, grind, coat and hone-and-seal floors throughout Duncraig — including polished concrete interiors we've completed locally.",
    localContext:
      "Many Duncraig projects are renovations and extensions on established homes, where owners want a polished concrete floor that's easy to keep clean with kids and pets. These often involve removing old carpet, tile or adhesive first, then grinding and polishing the existing slab to a cream, salt-and-pepper or full-exposure finish. Garages get flake floors, and alfresco areas are honed and sealed to match the indoor finish.",
    image: "/gallery/duncraig-polished-concrete-floors-perth.webp",
    imageAlt:
      "Polished concrete floor in a Duncraig home finished by Perth Concrete Care",
    imageLabel: "Polished concrete floor — Duncraig",
    nearby: ["joondalup", "scarborough", "wanneroo"],
    localFaqs: [
      {
        q: "Can you polish the existing slab under my carpet or tiles in Duncraig?",
        a: "Often, yes. Once the carpet, tile or adhesive is removed we assess the slab — if it's sound, we can grind and polish it to a cream, salt-and-pepper or full-exposure finish. We always check for cracks and moisture before committing to a polish.",
      },
      {
        q: "Is polished concrete good with kids and pets?",
        a: "Very. It's one of the reasons Duncraig families choose it — there's no grout or carpet to stain, it doesn't harbour dust or allergens, and a sealed, guarded polished floor wipes clean and resists scuffs.",
      },
    ],
  },
  {
    slug: "butler",
    name: "Butler",
    region: "Butler & the northern growth corridor",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Butler — epoxy flake garage floors for new homes, plus polished concrete and hone & seal. Local installer in the northern corridor. Free quotes.",
    heroIntro:
      "Butler sits at the heart of the growth corridor we serve, full of newer homes with fresh slabs ready for a proper finish. We install epoxy flake garage floors, hone-and-seal alfresco areas and polished concrete throughout Butler and the surrounding estates.",
    localContext:
      "Butler's rapid growth means most of our work here is on near-new homes — clean garage slabs that need correct profiling and a moisture-tolerant primer rather than heavy coating removal. Because so many Butler slabs are recently poured, we always test for construction moisture before priming so the coating doesn't bubble or lift later. Full-flake garage floors and hone-and-seal alfresco areas are the most popular choices for the family homes going up across the estate.",
    image: "/gallery/Epoxy-Flake-Floor-Wanneroo.webp",
    imageAlt:
      "Black and white epoxy flake garage floor finished by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["alkimos", "clarkson", "wanneroo"],
    localFaqs: [
      {
        q: "My Butler home is a new build — when can the garage be coated?",
        a: "New slabs need to cure first, usually around 28 days, and we test for residual moisture before priming. Once it's ready, a new-build Butler garage is one of the quickest, cleanest floors to coat because there's no old coating to remove.",
      },
      {
        q: "Do you charge travel to Butler?",
        a: "No. Butler is the top of our northern service corridor, so there's no travel surcharge — you get the same fixed-price quote as anywhere else we cover.",
      },
    ],
  },
  {
    slug: "alkimos",
    name: "Alkimos",
    region: "Alkimos & the northern coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Alkimos — UV-stable epoxy flake garage floors and hone & seal alfresco for coastal new-build homes. Local installer, free quotes.",
    heroIntro:
      "Alkimos is one of Perth's newest coastal estates, where fresh slabs meet salt air straight off the Indian Ocean. We install UV-stable epoxy flake garages, hone-and-seal alfresco areas and pool surrounds built to handle both the sun and the sea.",
    localContext:
      "Most Alkimos homes are recent builds, so garage slabs are usually clean and only need correct profiling and a moisture-tolerant primer. What sets coastal Alkimos apart is exposure: we always specify UV-stable polyaspartic or polyurethane topcoats that won't yellow in the strong coastal sun, and we add anti-slip additives around pools and alfresco areas. It's the combination of a new slab and a marine-grade finish that gives the longest-lasting result this close to the water.",
    image: "/gallery/epoxy-flake-pool-area-sandstone-mindarie-perth.webp",
    imageAlt:
      "Sandstone epoxy flake pool surround built for coastal conditions by Perth Concrete Care",
    imageLabel: "Epoxy flake pool area — coastal finish",
    nearby: ["butler", "clarkson", "mindarie"],
    localFaqs: [
      {
        q: "Will a coastal Alkimos floor hold up to salt and sun?",
        a: "Yes, when it's finished correctly. For Alkimos we use UV-stable topcoats and marine-appropriate sealers that resist the fading and yellowing strong coastal sun causes, so the floor still looks right years down the track.",
      },
      {
        q: "Can you coat my new Alkimos build's garage?",
        a: "Almost always. New garage slabs are some of the easiest to coat once they've cured — we test for moisture, profile the surface and apply your chosen flake or coating system, usually in a day or two.",
      },
    ],
  },
  {
    slug: "clarkson",
    name: "Clarkson",
    region: "Clarkson & the northern line",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Clarkson — epoxy flake garages, polished concrete and hone & seal for established northern-corridor homes. Local installer, free quotes.",
    heroIntro:
      "Clarkson is one of the more established suburbs along the northern line, with a real mix of older and newer homes. We grind, coat, polish and hone-and-seal floors across Clarkson — from refreshing tired garage slabs to finishing newer ones.",
    localContext:
      "Because Clarkson has been around longer than the estates further north, we see a broader range of slabs here — older garages with flaking paint or DIY coatings that need grinding back, alongside newer homes with clean concrete. That makes proper preparation the key variable: we assess each slab, remove failed coatings, and profile to the correct CSP before any flake or sealer goes down. Garage flake floors and grind-and-seal finishes are the most requested.",
    image: "/gallery/epoxy-flake-garage-floor-joondalup-perth.webp",
    imageAlt: "Grey epoxy flake garage floor finished by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["butler", "alkimos", "kallaroo"],
    localFaqs: [
      {
        q: "My Clarkson garage has old flaking paint — can you fix it?",
        a: "Yes. Flaking paint or failed DIY coatings are ground back to sound concrete with dust extraction, then the slab is profiled correctly so the new floor actually bonds and stays put — which is exactly why the old one let go.",
      },
      {
        q: "Do you cover all of Clarkson?",
        a: "Yes, all of Clarkson and the surrounding northern-line suburbs. It's central to our service area, so there's no travel surcharge on your quote.",
      },
    ],
  },
  {
    slug: "tapping",
    name: "Tapping",
    region: "Tapping & the Wanneroo growth area",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Tapping — epoxy flake garage floors, polished concrete and hone & seal. Local installer with happy Tapping customers. Free quotes.",
    heroIntro:
      "Tapping is a popular family suburb in the Wanneroo growth area, and we've already transformed garages here for happy local customers. We install epoxy flake garage floors, hone-and-seal alfresco areas and polished concrete throughout Tapping.",
    localContext:
      "Tapping is largely made up of family homes built over the last couple of decades, so most jobs are double-garage flake floors and alfresco hone-and-seal work. Slabs here are generally sound and only need correct profiling before coating, though we always check for cracks and moisture first. A full-flake garage floor in a hard-wearing polyaspartic topcoat is the standout choice for Tapping families wanting a clean, easy-care space.",
    image:
      "/gallery/epoxy-flake-garage-floor-cookies-and-cream-Banksia-Grove.webp",
    imageAlt:
      "Cookies and cream epoxy flake garage floor finished by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["wanneroo", "banksia-grove", "joondalup"],
    localFaqs: [
      {
        q: "Do you have happy customers in Tapping?",
        a: "Yes — we've completed epoxy flake garage floors for Tapping homeowners who've left us five-star reviews. Ask when you enquire and we can talk you through recent local jobs.",
      },
      {
        q: "How long does a Tapping garage floor take?",
        a: "Most single and double garages in Tapping are finished in 1–2 days including preparation, with exact cure times confirmed at handover so you don't mark the coating early.",
      },
    ],
  },
  {
    slug: "kallaroo",
    name: "Kallaroo",
    region: "Kallaroo & the northern coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Kallaroo — epoxy flake garage floors, hone & seal and polished concrete for coastal northern-suburb homes. Local installer, free quotes.",
    heroIntro:
      "Kallaroo's established coastal homes near Whitfords are ideal for a hard-wearing garage or alfresco floor — and we've installed standout flake garages here, including a bold Bullseye colour finish. We coat, grind, polish and hone-and-seal floors across Kallaroo.",
    localContext:
      "Kallaroo sits close to the coast, so alongside garage flake floors we do a lot of hone-and-seal work on alfresco areas and pool surrounds where UV and salt exposure matter. The suburb's established homes often have older slabs that benefit from grinding back any previous coating before a fresh system goes on. Whether it's a statement garage colour or a slip-rated outdoor finish, the prep and the topcoat choice are what make it last by the coast.",
    image: "/gallery/epoxy-flake-garage-floor-bullseye-kallaroo-perth.webp",
    imageAlt:
      "Bullseye colour epoxy flake garage floor installed in Kallaroo, Perth",
    imageLabel: "Bullseye epoxy flake garage — Kallaroo",
    nearby: ["clarkson", "duncraig", "scarborough"],
    localFaqs: [
      {
        q: "Can you do a bold colour like Bullseye in Kallaroo?",
        a: "Absolutely — we've installed a Bullseye flake garage right here in Kallaroo. We carry a wide range of flake colours and can show you samples so you can pick a look that suits your home.",
      },
      {
        q: "Will an alfresco floor in Kallaroo handle the coastal weather?",
        a: "Yes. For coastal Kallaroo we use UV-stable sealers and topcoats, plus anti-slip additives on alfresco and pool areas, so the finish stays safe and keeps its colour despite sun and salt.",
      },
    ],
  },
  {
    slug: "balcatta",
    name: "Balcatta",
    region: "Balcatta & the inner-north",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Balcatta — hone & seal exposed aggregate, epoxy flake, polished concrete and warehouse floor prep. Local installer, free quotes.",
    heroIntro:
      "Balcatta blends established homes with a busy commercial and industrial pocket, so we work on everything here from honing rough exposed-aggregate driveways to preparing warehouse and workshop slabs. We've already honed and sealed exposed aggregate in Balcatta.",
    localContext:
      "Balcatta's mix of housing and light industry means two very different jobs. For homes, we smooth and seal dated exposed-aggregate driveways and alfresco areas and coat garages with flake. For the commercial side, we grind and prepare warehouse and workshop slabs for epoxy, polyaspartic or polished finishes that survive forklifts and foot traffic. In both cases the slab prep is the same discipline — get the profile and cleanliness right and the finish lasts.",
    image: "/gallery/hone-and-seal-exposed-aggregate-balcatta.webp",
    imageAlt:
      "Exposed aggregate honed and sealed to a smooth finish in Balcatta, Perth",
    imageLabel: "Hone & seal exposed aggregate — Balcatta",
    nearby: ["osborne-park", "wangara", "scarborough"],
    localFaqs: [
      {
        q: "Can you smooth a rough exposed-aggregate driveway in Balcatta?",
        a: "Yes — we've done exactly that in Balcatta. We diamond-hone the surface to knock back sharp stones, then seal it for a smoother, easier-to-clean finish that's kinder on bare feet and brings the colour back.",
      },
      {
        q: "Do you prepare commercial and warehouse floors in Balcatta?",
        a: "Yes. We grind and profile warehouse, workshop and showroom slabs in Balcatta's industrial areas, ready for epoxy, polyaspartic or polished concrete systems that stand up to heavy use.",
      },
    ],
  },
  {
    slug: "osborne-park",
    name: "Osborne Park",
    region: "Osborne Park commercial precinct",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Osborne Park — polished concrete, warehouse and showroom floor prep, epoxy and grind & seal for commercial spaces. Free quotes.",
    heroIntro:
      "Osborne Park is one of Perth's busiest commercial and retail precincts, where hard-wearing, low-maintenance floors matter. We polish, grind, coat and prepare concrete for showrooms, warehouses, workshops and offices across Osborne Park.",
    localContext:
      "Most Osborne Park work is commercial: polished concrete for showrooms and retail fit-outs, grind-and-seal and epoxy for warehouses and workshops, and coating or glue removal when a tenancy changes hands. These floors take heavy foot traffic, trolleys and sometimes forklifts, so the priority is a correctly profiled slab and a system matched to the load. We work around trading hours where we can to keep disruption down.",
    image: "/gallery/polished-concrete-floor-perth.webp",
    imageAlt:
      "Polished concrete floor with a satin finish by Perth Concrete Care",
    imageLabel: "Polished concrete floor",
    nearby: ["balcatta", "wangara", "scarborough"],
    localFaqs: [
      {
        q: "Can you polish a showroom or retail floor in Osborne Park?",
        a: "Yes — polished concrete is one of our most popular Osborne Park finishes for showrooms and retail spaces. It's hard-wearing, easy to clean and looks premium under lighting, and we can work around your trading hours.",
      },
      {
        q: "Do you remove old coatings or glue for Osborne Park fit-outs?",
        a: "Yes. When a tenancy changes we grind back old paint, epoxy, tile adhesive and carpet glue with dust extraction, leaving a clean, profiled slab ready for the new floor system.",
      },
    ],
  },
  {
    slug: "wangara",
    name: "Wangara",
    region: "Wangara industrial area",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Wangara — warehouse and workshop floor prep, epoxy, grind & seal and polished concrete for industrial and trade spaces. Free quotes.",
    heroIntro:
      "Wangara is a major industrial and trade hub, full of warehouses, workshops and showrooms that need tough, dust-free floors. We grind, coat and seal industrial slabs across Wangara for epoxy, polyaspartic and polished systems.",
    localContext:
      "Wangara is almost all commercial and industrial, so our work here is warehouse and workshop floors rather than garages. Bare industrial slabs are often dusty, oil-stained or previously coated, which makes mechanical grinding and degreasing the critical first step. From there we match the system to the use — grind-and-seal or epoxy for warehouses, anti-slip coatings for wet or trade areas, and polished concrete for showrooms. H-class dust control keeps the rest of your operation running while we work.",
    image: "/gallery/grind-and-seal-concrete-noranda.webp",
    imageAlt:
      "Grind and seal concrete warehouse floor by Perth Concrete Care",
    imageLabel: "Grind & seal concrete floor",
    nearby: ["wanneroo", "osborne-park", "balcatta"],
    localFaqs: [
      {
        q: "Do you coat warehouse and workshop floors in Wangara?",
        a: "Yes — industrial slabs are our core work in Wangara. We grind back contamination and old coatings, then apply a grind-and-seal, epoxy or polyaspartic system suited to forklift traffic, oil resistance or whatever the space demands.",
      },
      {
        q: "Can you work around our business hours in Wangara?",
        a: "Usually, yes. We can stage industrial jobs and use H-class dust extraction to limit disruption, and we'll plan timing around your operation so the floor goes down with minimal downtime.",
      },
    ],
  },
  {
    slug: "ellenbrook",
    name: "Ellenbrook",
    region: "Ellenbrook & the Swan Valley fringe",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Ellenbrook — epoxy flake garage floors, polished concrete and hone & seal for this growing northern community. Local installer, free quotes.",
    heroIntro:
      "Ellenbrook is one of Perth's largest master-planned communities, full of family homes and fresh slabs ready for a proper finish. We install epoxy flake garages, polished concrete and hone-and-seal alfresco areas across Ellenbrook and the surrounding Swan Valley fringe.",
    localContext:
      "Ellenbrook is a sprawling, mostly newer community, so much of our work here is on near-new garage and alfresco slabs that need correct profiling and a moisture-tolerant primer rather than coating removal. Newer slabs can still hold construction moisture, and some pockets nearer the Swan Valley sit on more reactive ground, so we test and check for cracking before coating. Full-flake garage floors and slip-rated hone-and-seal alfrescos are the most popular choices for Ellenbrook families.",
    image: "/gallery/epoxy-flake-garage-banksia-grove.webp",
    imageAlt:
      "Epoxy flake garage floor with a fine glitter finish by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["malaga", "wanneroo", "banksia-grove"],
    localFaqs: [
      {
        q: "My Ellenbrook home is a new build — when can I coat the garage?",
        a: "Once the slab has cured (usually about 28 days) and passes a moisture check, a new Ellenbrook garage is quick to coat because there's no old coating to grind off. We confirm exact timing on site.",
      },
      {
        q: "Do you travel out to Ellenbrook?",
        a: "Yes, Ellenbrook is within our service area and there's no travel surcharge. We cover the whole northern and north-eastern corridor.",
      },
    ],
  },
  {
    slug: "malaga",
    name: "Malaga",
    region: "Malaga industrial & commercial area",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Malaga — warehouse and workshop floor prep, epoxy, grind & seal and polished concrete for industrial and trade premises. Free quotes.",
    heroIntro:
      "Malaga is one of Perth's biggest industrial and trade estates, packed with warehouses, workshops and showrooms that need tough, low-dust floors. We grind, coat and seal industrial slabs across Malaga for epoxy, polyaspartic and polished systems.",
    localContext:
      "Malaga work is overwhelmingly commercial and industrial — warehouse and workshop floors rather than home garages. Bare industrial slabs here are often dusty, oil-stained or carrying old failed coatings, so mechanical grinding and degreasing come first. From there we match the system to the use: grind-and-seal or epoxy for warehouses, anti-slip coatings for wet and trade areas, and polished concrete for showrooms. H-class dust extraction keeps the rest of your operation running while we work.",
    image: "/gallery/grind-and-seal-concrete-noranda.webp",
    imageAlt: "Grind and seal concrete warehouse floor by Perth Concrete Care",
    imageLabel: "Grind & seal concrete floor",
    nearby: ["wangara", "osborne-park", "ellenbrook"],
    localFaqs: [
      {
        q: "Do you coat warehouse floors in Malaga?",
        a: "Yes — industrial slabs are our core work in Malaga. We grind back oil, dust and old coatings, then apply a grind-and-seal, epoxy or polyaspartic system suited to forklifts, chemical exposure or heavy foot traffic.",
      },
      {
        q: "Can you work around our trading hours in Malaga?",
        a: "Usually, yes. We stage industrial jobs and use H-class dust control to limit disruption, and plan timing around your operation to minimise downtime.",
      },
    ],
  },
  {
    slug: "yanchep",
    name: "Yanchep",
    region: "Yanchep & the far northern coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Yanchep — UV-stable epoxy flake garages and hone & seal alfresco for coastal new-build homes up the northern line. Free quotes.",
    heroIntro:
      "Yanchep sits at the far northern end of the coastal corridor we serve, where new estates meet ocean air. We install UV-stable epoxy flake garages, hone-and-seal alfresco areas and pool surrounds built for Yanchep's coastal conditions.",
    localContext:
      "Yanchep is one of the fastest-growing coastal suburbs, so most homes are recent builds with clean garage slabs that just need correct profiling and a moisture-tolerant primer. Because it's right on the coast, exposure is the key factor: we specify UV-stable polyaspartic or polyurethane topcoats that resist yellowing in the strong sun, and add anti-slip additives around pools and alfresco areas. A new slab plus a marine-grade finish gives the longest-lasting result this far north on the coast.",
    image: "/gallery/Epoxy-Flake-Floor-Wanneroo.webp",
    imageAlt:
      "Black and white epoxy flake garage floor by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["alkimos", "butler", "clarkson"],
    localFaqs: [
      {
        q: "Is Yanchep too far for you?",
        a: "No — Yanchep is the northern edge of our service area and we regularly work up the coast. There's no travel surcharge; you get the same fixed-price quote as anywhere else we cover.",
      },
      {
        q: "Will a Yanchep floor handle the coastal sun and salt?",
        a: "Yes, with the right topcoat. We use UV-stable, salt-tolerant finishes for Yanchep so the floor resists fading and yellowing despite the strong coastal exposure.",
      },
    ],
  },
  {
    slug: "wembley-downs",
    name: "Wembley Downs",
    region: "Wembley Downs & the western suburbs",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Wembley Downs — epoxy flake garages, honed concrete and polished floors for established western-suburb homes. Local installer, free quotes.",
    heroIntro:
      "Wembley Downs is an established western-suburbs pocket near City Beach, and we've already honed concrete and installed epoxy flake garages here for happy local customers. We grind, coat, hone-and-seal and polish floors throughout Wembley Downs.",
    localContext:
      "Wembley Downs is a settled, leafy suburb of established homes, so we see a real mix of work — honing and resealing older exposed-aggregate and concrete, refreshing tired garages with flake, and polishing slabs during renovations. Many slabs here are older, which makes grinding back previous coatings and getting the prep right the difference between a finish that lasts and one that lifts. Its proximity to the coast also means UV-stable sealers are worth specifying on outdoor work.",
    image: "/gallery/honed-concrete-perth.webp",
    imageAlt:
      "Honed and sealed concrete floor finished by Perth Concrete Care",
    imageLabel: "Honed concrete finish",
    nearby: ["scarborough", "duncraig", "osborne-park"],
    localFaqs: [
      {
        q: "Do you have customers in Wembley Downs?",
        a: "Yes — we've honed concrete and installed an epoxy flake garage in Wembley Downs for a customer who left us a five-star review. Ask when you enquire and we'll talk you through it.",
      },
      {
        q: "Can you both hone my concrete and do my garage in Wembley Downs?",
        a: "Yes, we often combine jobs — for example honing and sealing an outdoor area while installing a flake floor in the garage on the same visit, which is exactly what we did for a recent Wembley Downs customer.",
      },
    ],
  },
  {
    slug: "rossmoyne",
    name: "Rossmoyne",
    region: "Rossmoyne & the southern riverside suburbs",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Rossmoyne — epoxy flake garage floors, polished concrete and hone & seal south of the river. Happy local Rossmoyne customers. Free quotes.",
    heroIntro:
      "Rossmoyne is one of Perth's sought-after riverside suburbs south of the river, and we've already installed standout epoxy flake garages here for happy local customers. We coat, grind, polish and hone-and-seal floors throughout Rossmoyne.",
    localContext:
      "Rossmoyne is an established, leafy suburb of substantial family homes, so we see a real mix of work: epoxy flake and metallic floors in garages, polished concrete during renovations, and hone-and-seal on alfresco areas and pool surrounds. Many homes here have older slabs that benefit from grinding back previous coatings before a fresh system goes on. Now that we cover the full Perth metro area, Rossmoyne and the surrounding southern riverside suburbs are well within our reach.",
    image: "/gallery/epoxy-flake-garage-floor-joondalup-perth.webp",
    imageAlt: "Grey epoxy flake garage floor finished by Perth Concrete Care",
    imageLabel: "Epoxy flake garage floor",
    nearby: ["willetton", "canning-vale", "fremantle"],
    localFaqs: [
      {
        q: "Do you have customers in Rossmoyne?",
        a: "Yes. We installed a river stone flake garage floor in Rossmoyne for a customer who left us a five-star review. Ask when you enquire and we'll talk you through it.",
      },
      {
        q: "Do you travel south of the river to Rossmoyne?",
        a: "Yes. We now cover the full Perth metro area, north and south of the river, so Rossmoyne is well within our service area with no travel surcharge.",
      },
    ],
  },
  {
    slug: "willetton",
    name: "Willetton",
    region: "Willetton & the southern suburbs",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Willetton — honed concrete patios, epoxy flake garages and polished concrete south of the river. Local installer, free quotes.",
    heroIntro:
      "Willetton is a popular established family suburb south of the river, where we've honed and sealed outdoor concrete and finished garage floors for local homeowners. We grind, hone, coat and polish floors throughout Willetton.",
    localContext:
      "Willetton's established homes often have dated outdoor concrete and exposed-aggregate patios that we smooth and seal into a comfortable honed finish, plus garages that suit a hard-wearing epoxy flake floor. As with any older suburb, the prep is the key variable: we grind back previous coatings and profile the slab correctly before sealing or coating. It's a typical southern-suburbs job for us now that we cover the whole Perth metro area.",
    image: "/gallery/honed-concrete-patio-Willetton-perth.webp",
    imageAlt:
      "Honed and sealed concrete patio finished in Willetton, Perth",
    imageLabel: "Honed concrete patio — Willetton",
    nearby: ["rossmoyne", "canning-vale", "fremantle"],
    localFaqs: [
      {
        q: "Can you smooth a rough patio in Willetton?",
        a: "Yes. We've honed and sealed outdoor concrete in Willetton. We grind back the rough surface and seal it for a smoother, easier-to-clean finish that's kinder on bare feet.",
      },
      {
        q: "Do you service Willetton south of the river?",
        a: "Yes. We cover the full Perth metro area now, so Willetton and the surrounding southern suburbs are part of our regular service area.",
      },
    ],
  },
  {
    slug: "fremantle",
    name: "Fremantle",
    region: "Fremantle & the southern coast",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Fremantle — polished concrete, epoxy, hone & seal and warehouse floor prep for homes and commercial spaces south of the river. Free quotes.",
    heroIntro:
      "Fremantle blends heritage homes, coastal living and a busy commercial and warehouse scene, so we work on everything here from polished concrete in renovations to industrial floor prep. We grind, coat, polish and hone-and-seal across Fremantle.",
    localContext:
      "Fremantle is a real mix: character homes being renovated where polished concrete suits the style, coastal properties where UV-stable hone-and-seal handles sun and salt, and a strong commercial and warehouse base needing grind-and-seal or epoxy floors. Older Freo slabs often carry previous coatings or tile adhesive that we grind back before refinishing. Being coastal, we always specify UV-stable sealers and topcoats on outdoor work.",
    image: "/gallery/polished-concrete-floor-perth.webp",
    imageAlt:
      "Polished concrete floor with a satin finish by Perth Concrete Care",
    imageLabel: "Polished concrete floor",
    nearby: ["rossmoyne", "willetton", "canning-vale"],
    localFaqs: [
      {
        q: "Do you cover Fremantle south of the river?",
        a: "Yes. We service the full Perth metro area, so Fremantle and the surrounding southern and coastal suburbs are within our regular service area.",
      },
      {
        q: "Can you handle heritage or commercial floors in Fremantle?",
        a: "Yes. We polish and refinish floors in character home renovations and prepare commercial and warehouse slabs across Fremantle for epoxy, polyaspartic or polished finishes.",
      },
    ],
  },
  {
    slug: "canning-vale",
    name: "Canning Vale",
    region: "Canning Vale & the southern corridor",
    updated: "2026-06-15",
    metaDescription:
      "Concrete flooring in Canning Vale — warehouse and workshop floor prep, epoxy, polished concrete and epoxy flake garages south of the river. Free quotes.",
    heroIntro:
      "Canning Vale pairs large family-home estates with one of Perth's biggest southern industrial areas, so we cover both garage flake floors and warehouse floor prep here. We grind, coat, seal and polish floors throughout Canning Vale.",
    localContext:
      "Canning Vale gives us two kinds of work: residential garages and alfrescos in the estates, and warehouse, workshop and showroom slabs across the industrial area. Industrial slabs here are often dusty, oil-stained or previously coated, so mechanical grinding and degreasing come first, then a grind-and-seal, epoxy or polyaspartic system matched to the load. Homes get flake garages and hone-and-seal outdoor areas. It's a core southern suburb for us now that we cover the full metro.",
    image: "/gallery/grind-and-seal-concrete-noranda.webp",
    imageAlt:
      "Grind and seal concrete warehouse floor by Perth Concrete Care",
    imageLabel: "Grind & seal concrete floor",
    nearby: ["rossmoyne", "willetton", "fremantle"],
    localFaqs: [
      {
        q: "Do you coat warehouse floors in Canning Vale?",
        a: "Yes. Canning Vale's industrial area is core work for us. We grind back oil, dust and old coatings, then apply a grind-and-seal, epoxy or polyaspartic system suited to forklifts and heavy traffic.",
      },
      {
        q: "Do you service Canning Vale south of the river?",
        a: "Yes. We cover the full Perth metro area, so Canning Vale and the surrounding southern suburbs are part of our regular service area, with no travel surcharge.",
      },
    ],
  },
];

export function getSuburb(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}

/** Service cards shown on every suburb page, linking back to the main service pages. */
export const suburbServices = [
  {
    title: "Epoxy flake flooring",
    href: "/epoxy-flake-flooring-perth",
    blurb:
      "Hard-wearing garage, shed and workshop floors with optional flake. From $80/m².",
  },
  {
    title: "Metallic epoxy flooring",
    href: "/metallic-epoxy-flooring-perth",
    blurb:
      "Showpiece high-gloss floors with marbled, 3D depth. From $160/m².",
  },
  {
    title: "Hone & seal concrete",
    href: "/honed-concrete-perth",
    blurb:
      "Slip-rated alfresco, driveways and pool surrounds. From $60/m².",
  },
  {
    title: "Polished concrete",
    href: "/concrete-polishing-perth",
    blurb:
      "Premium indoor floors, satin to mirror gloss. From $140/m².",
  },
  {
    title: "Concrete grinding & prep",
    href: "/concrete-grinding-perth",
    blurb:
      "Coating, paint and glue removal plus slab levelling and CSP profiling.",
  },
];

/** Shared, suburb-flavoured FAQs appended after each suburb's unique ones. */
export function sharedSuburbFaqs(name: string): SuburbFaq[] {
  return [
    {
      q: `How much does a concrete floor cost in ${name}?`,
      a: `${name} pricing is the same as the rest of our service area: epoxy flake from $80/m², hone-and-seal from $60/m², polished concrete from $140/m² and metallic epoxy from $160/m². The final price depends on area, slab condition, repairs and access — send photos and rough m² for a fixed written quote.`,
    },
    {
      q: `Are you local to ${name}?`,
      a: `We're a Perth-based, WA owned-and-operated business covering the northern suburbs, and ${name} is well within our service area. You deal directly with Rob from quote through to handover.`,
    },
  ];
}

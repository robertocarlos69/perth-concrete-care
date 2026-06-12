# Product Marketing Context — Perth Concrete Care

Read this before any marketing, SEO, CRO, or content task for this project.
Lives at `.agents/product-marketing.md` (the marketingskills repo's skills
check this path first).

## Business

- **Name:** Perth Concrete Care | **ABN:** 63 775 263 307
- **Site:** https://perthconcretecare.com.au (Next.js 16, Tailwind 4, Vercel, repo: robertocarlos69/perth-concrete-care)
- **Owner-operator:** Rob — answers the phone, quotes, and does the work
- **Contact:** 0448 483 226 · sales@perthconcretecare.com.au · Mon–Sat 7am–6pm
- **Service area:** Perth north of the river — Butler, Alkimos, Yanchep, Mindarie, Clarkson, Joondalup, Wanneroo, Banksia Grove, Ellenbrook, Wangara, Malaga, Osborne Park, Balcatta, Scarborough, North Perth, Perth CBD. Service-area business, no showroom.

## Services & pricing (AUD/m², guide rates)

- Epoxy flake floors: $85–$100 (garages, workshops, patios)
- Metallic epoxy floors: $160–$180 (showrooms, living areas)
- Hone & seal / honed concrete (outdoor): $60–$80 (alfresco, pools, driveways, smoothing rough exposed aggregate)
- Polished concrete (indoor): $140–$220
- Support services: grinding, coating/glue removal, slab levelling, pressure cleaning

## Audience & positioning

- **Primary:** homeowners in Perth's northern suburbs upgrading garages, alfresco areas, pool surrounds, driveways
- **Secondary:** small commercial (workshops, showrooms)
- **Positioning:** trustworthy owner-operator; prep done properly to Australian Standards (AS 1884, AS 3730, AS 3610, CSP/ICRI); transparent pricing (rare in this trade); 5-star Google reviews; H-class HEPA dust control; fully insured; police cleared
- **Voice:** straight-talking, friendly, no hard-sell ("we'll tell you if a cheaper option will do the job")

## Conversion goals

1. Quote form submissions (/#quote, with photo upload)
2. Phone calls to Rob (click-to-call)
- GA4 property: G-H6TMS5HZK3

## SEO state (as of June 2026)

- All pages: unique titles/descriptions, canonicals, one H1, JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList), sitemap.ts, static robots.txt
- AEO/AI-search: llms.txt + pricing.md in /public, finish comparison table on home, FAQ schema synced to visible FAQs, all AI crawlers allowed, pages statically rendered
- Reviews: 5 real Google reviews hardcoded in app/lib/reviews.ts carousel (update from GBP as new ones land)

## Priority query clusters (LLM + traditional)

1. **Cost:** "epoxy garage floor cost Perth", "polished concrete price per m2 Perth", "honed concrete cost"
2. **Comparison:** "epoxy flake vs polished concrete", "honed vs washed aggregate", "grind and seal vs polished"
3. **Problem:** "make rough exposed aggregate smooth", "remove paint from garage floor", "exposed aggregate hurts bare feet"
4. **Local/recommendation:** "[service] + Joondalup/Wanneroo/Butler/etc", "best epoxy flooring Perth northern suburbs"

## Roadmap / backlog (priority order)

1. Suburb landing pages (programmatic-seo skill) — start with Joondalup, Wanneroo, Butler, Mindarie
2. Directory citations: hipages, Oneflare, TrueLocal, Houzz, Yelp AU — consistent NAP everywhere
3. AggregateRating schema — needs real GBP review count + average from Rob
4. "Last updated" / dateModified freshness signals on service pages
5. Rob credentials in E-E-A-T block (years in trade, tickets) + photo
6. Privacy page (footer link currently dead)
7. Custom 1200×630 OG image
8. Comparison articles (competitor-alternatives skill) if competing installers warrant it

## Rules

- Never fabricate reviews, ratings, stats, credentials, or experience claims
- All pricing changes update: home pricing cards, comparison table, public/pricing.md, public/llms.txt
- Keep FAQ schema in page.tsx synced with visible FAQs in HomeClient.tsx
- Monthly: check Search Console, ask ChatGPT/Perplexity the cost + comparison queries above and log citations

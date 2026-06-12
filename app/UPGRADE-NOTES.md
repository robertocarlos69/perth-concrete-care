# Perth Concrete Care — Design Upgrade (Option A, restyled)

Drop-in replacement for your existing `app/` directory. Same routes, same
content, same SEO — new look and feel.

## What changed

### Typography — Plus Jakarta Sans everywhere
- Loaded via `next/font/google` in `layout.tsx` (zero extra packages, no
  layout shift, self-hosted by Next.js automatically).
- Replaces the old Arial fallback. Headings get tighter letter-spacing and
  balanced line wrapping via `globals.css` — the single biggest "looks
  professional" upgrade.

### Palette — "polished concrete"
- The bright emerald has been remapped (in `globals.css` via Tailwind v4
  `@theme`) to a deeper eucalyptus green, with warm concrete-grey neutrals.
- Because the remap happens at the token level, **every page** — including
  the service pages, contact page and visualiser — picks up the new brand
  colour with no per-page rework. If you ever want to tweak the brand
  colour again, edit one place: the `--color-emerald-*` values in
  `globals.css`.

### New components
- `components/SiteHeader.tsx` — the nav now has a **mobile hamburger menu**
  (the old site had no navigation at all on phones), a refined top bar with
  location + click-to-call, and a cleaner sticky header.

### Home page (`HomeClient.tsx`)
- **New dark hero**: high-contrast charcoal/green over your concrete texture,
  with a 5-star Google rating strip linking to your Business Profile,
  check-marked benefit list, and "Request Free Quote" + click-to-call CTAs.
- **Emoji icons replaced** with a custom SVG line-icon set (`ServiceIcon`) —
  consistent across primary and support service cards.
- Service, pricing and gallery cards: calmer borders, better shadows,
  hover lift / image zoom; pricing typography sharpened.
- Quote form: proper input borders, brand-green focus rings, styled file
  picker, bolder submit button.
- FAQ accordions restyled (also the shared `FaqAccordion` used on service
  pages).

### Everything else
- Footer: deep charcoal with green hover accents and a brand monogram.
- Sub-pages: heavy green card borders softened to subtle stone borders,
  buttons unified with the home page, consistent light-concrete background.
- Accessibility/quality floor: visible keyboard focus rings, respects
  `prefers-reduced-motion`, anchored sections scroll clear of the sticky
  header, aria labels on the mobile menu.

## SEO — preserved (and slightly improved)
- All `metadata` exports, canonical URLs, Open Graph/Twitter tags, JSON-LD
  (LocalBusiness, Service, FAQPage, BreadcrumbList), sitemap and robots
  settings are **unchanged**.
- All H1/H2 headings and keyword-bearing copy retained.
- Image `alt` text retained.
- Font now loads via `next/font` (self-hosted, `display: swap`) — better
  Core Web Vitals than a render-blocking font link.
- The mobile menu and stronger mobile CTAs should help engagement signals
  (bounce rate / time on site), which matter for local rankings.

## How to deploy
1. Back up your current `app/` directory.
2. Copy these files over the matching paths in `app/`.
   New file: `app/components/SiteHeader.tsx`.
3. No new dependencies — `Plus_Jakarta_Sans` ships with Next.js's built-in
   `next/font/google`.
4. `npm run dev`, check each page, then build and deploy as usual.

## Small things worth doing next (not included)
- The footer "Privacy" link still points to `#` — worth adding a real
  privacy page (also good for Google Business Profile trust).
- Your services data still mentions "Visit our show-room in Canning Vale"
  on the live site while the footer says "no showroom" — the version in
  this code says "Service area only", so deploying this resolves it.
- Consider adding a real Open Graph image (`opengraph-image.png`) — link
  previews currently have no picture.

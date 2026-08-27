# Darbar Springwala — Site Map, Product Pages & Loader Spec

Companion to `README.md` (design tokens/components). This file defines **every page**
the Next.js site needs, the **product catalogue structure** (idea/structure referenced
from crystalspringindia.com — a competitor spring manufacturer site, content rewritten
in Darbar's own voice, not copied), and the **loader/preloader component spec**.

---

## 1. Site Map

```
/                          Home  (already scoped in README.md)
/about                     About Us
/products                  Products — index/listing (category grid)
/products/[slug]           Product detail — dynamic route, one per spring type
/quality                   Quality & Certifications
/industries                Industries We Serve
/contact                   Contact / Enquiry
/faq                       FAQ (optional — can also stay as a home section only)
```

`[slug]` product routes (8 categories, matching the legacy site's product range plus
the two extra types already illustrated in the current build — Compression & Extension):

| Slug | Display Name |
|---|---|
| `compression-spring` | Compression Springs |
| `extension-tension-spring` | Extension / Tension Springs |
| `torsion-spring` | Torsion Springs |
| `conical-spring` | Conical Springs |
| `wire-forms` | Wire Forms |
| `garter-spring` | Garter Springs |
| `spiral-spring` | Spiral Springs |
| `die-spring` | Die Springs |

Use Next.js **generateStaticParams** to statically pre-render all 8 product pages at
build time (`app/products/[slug]/page.tsx`), sourced from a single typed data file —
see §3.

---

## 2. Loader (Preloader) Component

Matches the legacy behavior already in `darbar-springwala.html` (full-screen navy
overlay, animated coil-draw SVG + progress bar) — rebuilt as a proper React/Framer
Motion component so it can gate the whole app.

### Behavior
- Mounts at the root layout, shows on first load only (not on client-side route
  changes — check with a `sessionStorage` flag so it doesn't replay on every nav).
- Full-viewport fixed overlay, `z-index` above everything, background `--navy` (`#17324F`).
- Centered: an SVG coil icon whose stroke "draws itself" in a loop (`stroke-dasharray`/
  `stroke-dashoffset` animation), a mono-font uppercase label (e.g. "LOADING…" / "PRECISION IN PROGRESS"), and a thin 140×2px progress bar that fills bronze (`--bronze`) left→right.
- Exit: fades out (`opacity 0`) and unmounts via `AnimatePresence` once `window.onload`
  fires or a minimum-display timer (~1.2–1.6s) completes, whichever is later — avoids
  a flash-then-gone loader on fast connections.
- Respect `prefers-reduced-motion`: skip the coil-draw loop animation, just show a
  static icon + fade in/out.

### Component skeleton

```tsx
// components/motion/Preloader.tsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('ds_loaded');
    if (alreadyShown) { setVisible(false); return; }
    const minTimer = setTimeout(() => {
      sessionStorage.setItem('ds_loaded', '1');
      setVisible(false);
    }, 1400);
    return () => clearTimeout(minTimer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-navy"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <CoilMark className="h-16 w-16" />
          <span className="font-mono text-[11px] tracking-[.18em] uppercase text-bronze-2">
            Darbar Springwala
          </span>
          <span className="h-[2px] w-[140px] overflow-hidden rounded-full bg-white/15">
            <motion.span
              className="block h-full bg-bronze"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Reusable "in-page loading" variant
For product listing/detail pages that fetch data client-side (or Next.js `loading.tsx`
route-level skeletons), reuse the same coil icon at a smaller scale as a spinner rather
than the full navy takeover — keep the full preloader for first paint only.

`app/products/loading.tsx` and `app/products/[slug]/loading.tsx` should render a
lightweight skeleton (grey/bronze shimmer blocks matching card/hero shapes) using
Next.js's built-in loading UI convention — instant, no JS needed, works with
Suspense boundaries automatically.

---

## 3. Product Data Model

Central typed source so both the listing and detail pages, and Copilot, work off one
source of truth. Idea/structure referenced from how competitor spring-manufacturer
sites organize product detail pages (materials / finishes / process / applications) —
all copy below is original, written for Darbar Springwala.

```ts
// lib/products.ts
export type Product = {
  slug: string;
  name: string;
  shortDescription: string;      // for card grid
  description: string;            // full intro paragraph, detail page
  applicationTag: string;         // e.g. "Load-Bearing Assemblies"
  materials: string[];
  finishes: string[];
  process: string;                // manufacturing process paragraph
  applications: string[];         // bullet list of end uses
  images: string[];               // gallery image paths
  iconSvg: string;                 // key referencing icon component
};

export const products: Product[] = [
  {
    slug: 'compression-spring',
    name: 'Compression Springs',
    shortDescription: 'Open-coil springs engineered to resist compressive loads and return to free length.',
    description:
      'Compression springs are engineered to absorb and push back against compressive force in "push mode." Variable pitch between coils reduces solid height and buckling risk while managing load-deflection behaviour, making them dependable energy-storage components across demanding applications.',
    applicationTag: 'Load-Bearing Assemblies',
    materials: ['Stainless Steel', 'Carbon Steel', 'Alloy Steel', 'Music Wire', 'Phosphor Bronze'],
    finishes: ['Zinc Plating', 'Galvanizing', 'Powder Coating', 'Black Oxide', 'Passivation'],
    process:
      'Manufactured on CNC spring-coiling machines with in-line statistical process control and free-length sorting for critical load applications, ensuring tight tolerances across every batch.',
    applications: ['Automobile components', 'Consumer hardware', 'Writing instruments', 'Switches & switchgear', 'General industrial assemblies'],
    images: ['/products/compression-1.webp', '/products/compression-2.webp', '/products/compression-3.webp'],
    iconSvg: 'compression',
  },
  {
    slug: 'extension-tension-spring',
    name: 'Extension / Tension Springs',
    shortDescription: 'Close-wound springs with end hooks or loops, designed to absorb and resist pulling forces.',
    description:
      'Extension springs are tightly wound so they resist and store energy from pulling/stretching forces, returning to their original length once tension is released. End configurations (hooks, loops, machine ends) are built to the mounting requirement.',
    applicationTag: 'Pulling & Return Mechanisms',
    materials: ['Stainless Steel', 'Carbon Steel', 'Alloy Steel', 'Music Wire'],
    finishes: ['Zinc Plating', 'Black Oxide', 'Powder Coating', 'Passivation'],
    process: 'Coiled and end-formed on precision wire-forming equipment with load testing performed on sample batches for consistent spring rate.',
    applications: ['Agricultural equipment', 'Garage door assemblies', 'Trampolines', 'Automotive components', 'Industrial machinery'],
    images: ['/products/extension-1.webp', '/products/extension-2.webp'],
    iconSvg: 'extension',
  },
  {
    slug: 'torsion-spring',
    name: 'Torsion Springs',
    shortDescription: 'Coiled wire components that exert rotational (torque) force when twisted.',
    description:
      'Torsion springs store and release angular energy when twisted around their axis. Straight or formed legs transmit torque to a mating part, making them ideal wherever rotational force or return-to-position action is needed.',
    applicationTag: 'Rotational & Return Force',
    materials: ['Music Wire', 'Stainless Steel', 'Chrome Silicon', 'Carbon Steel'],
    finishes: ['Zinc Plating', 'Black Oxide', 'Passivation'],
    process: 'Formed on CNC coilers with leg-angle and torque verification against drawing specification before dispatch.',
    applications: ['Clothes pins & clips', 'Hinges', 'Automotive levers', 'Garage doors', 'Electrical switchgear'],
    images: ['/products/torsion-1.webp', '/products/torsion-2.webp'],
    iconSvg: 'torsion',
  },
  {
    slug: 'conical-spring',
    name: 'Conical Springs',
    shortDescription: 'Tapered compression springs offering a low solid height and increasing spring rate.',
    description:
      'Conical (tapered) springs reduce to a low solid height because each coil can nest within the one below it, while providing a progressively increasing spring rate under load — useful where vibration control and compact packaging both matter.',
    applicationTag: 'Compact Load Applications',
    materials: ['Carbon Steel', 'Stainless Steel', 'Alloy Steel'],
    finishes: ['Powder Coating', 'Zinc Plating', 'Black Oxide'],
    process: 'Precision-coiled with pitch and taper angle controlled to specification, quality-checked for nesting and solid height.',
    applications: ['Vibration mounts', 'Seating & upholstery', 'Electrical contacts', 'Valve assemblies'],
    images: ['/products/conical-1.webp'],
    iconSvg: 'conical',
  },
  {
    slug: 'wire-forms',
    name: 'Wire Forms',
    shortDescription: 'Custom-bent wire components engineered to exact geometric specification.',
    description:
      'Wire forms are shaped rather than coiled — clips, brackets, hooks and retaining components bent to precise geometry on CNC wire-forming equipment for consistent, repeatable results at volume.',
    applicationTag: 'Custom Retention & Support',
    materials: ['Stainless Steel', 'Carbon Steel', 'Galvanized Wire'],
    finishes: ['Zinc Plating', 'Powder Coating', 'Black Oxide'],
    process: 'CNC wire-bending with dimensional verification against customer drawings for tight-tolerance geometry.',
    applications: ['Retail & display fixtures', 'Automotive clips', 'Appliance components', 'Furniture hardware'],
    images: ['/products/wireforms-1.webp'],
    iconSvg: 'wireforms',
  },
  {
    slug: 'garter-spring',
    name: 'Garter Springs',
    shortDescription: 'Circular, endless-loop springs used to apply constant radial force around a shaft or seal.',
    description:
      'A garter spring is an extension spring joined end-to-end into a closed loop, applying uniform inward radial force — most commonly used to hold a sealing lip firmly against a rotating shaft.',
    applicationTag: 'Sealing & Radial Force',
    materials: ['Stainless Steel', 'Carbon Steel', 'Music Wire'],
    finishes: ['Zinc Plating', 'Passivation'],
    process: 'Coiled, joined and calibrated for consistent radial force across the full loop diameter.',
    applications: ['Oil seals', 'O-rings & gaskets', 'Hydraulic seals', 'Rotary shaft seals'],
    images: ['/products/garter-1.webp'],
    iconSvg: 'garter',
  },
  {
    slug: 'spiral-spring',
    name: 'Spiral Springs',
    shortDescription: 'Flat wound springs (clock/power springs) that store rotational energy in a compact form.',
    description:
      'Spiral (flat/power) springs are wound in a flat plane around a central arbor, storing energy as they are wound and releasing it as controlled rotational force — the same principle used in clockwork and retraction mechanisms.',
    applicationTag: 'Compact Rotational Energy Storage',
    materials: ['Carbon Steel', 'Stainless Steel', 'Spring Steel Strip'],
    finishes: ['Black Oxide', 'Zinc Plating', 'Powder Coating'],
    process: 'Precision flat-strip winding with torque and cycle-life testing to specification.',
    applications: ['Retractable mechanisms', 'Timers & clockwork', 'Cable reels', 'Toys & consumer devices'],
    images: ['/products/spiral-1.webp'],
    iconSvg: 'spiral',
  },
  {
    slug: 'die-spring',
    name: 'Die Springs',
    shortDescription: 'Heavy-duty rectangular-wire compression springs built for high-load tooling applications.',
    description:
      'Die springs are compression springs wound from rectangular-section wire for higher load capacity in a compact footprint, colour-coded by duty rating and built to withstand the repeated high-cycle stress of die and mould tooling.',
    applicationTag: 'Heavy-Duty Tooling',
    materials: ['Chrome Vanadium', 'Alloy Steel', 'Music Wire'],
    finishes: ['Powder Coating (colour-coded by load rating)', 'Black Oxide'],
    process: 'Rectangular-wire coiling with load-rating verification and high-cycle fatigue testing.',
    applications: ['Stamping dies', 'Injection moulds', 'Press tooling', 'Heavy machinery'],
    images: ['/products/die-spring-1.webp'],
    iconSvg: 'die',
  },
];

export const getProduct = (slug: string) => products.find(p => p.slug === slug);
```

---

## 4. `/products` — Listing Page

Reuses the **Product Card** pattern already defined in README.md §5, but as a full
page rather than a homepage teaser (all 8 items, not just 3):

- Page header: eyebrow "Product Range" + H1 + intro paragraph (same section-head
  pattern as home).
- Optional filter/tag row (by material or application category) — nice-to-have, not
  required for v1.
- `grid grid-cols-3` (2 on tablet, 1 on mobile) of `ProductCard` components, each
  linking to `/products/[slug]`, staggered reveal-on-scroll (same as home).
- Bottom CTA banner reusing the `.final-cta` pattern: "Need a custom spring
  specification? Get in touch."

```tsx
// app/products/page.tsx
import { products } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductsPage() {
  return (
    <section className="pad">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Product Range</p>
          <h1>Spring solutions for every engineering requirement.</h1>
          <p>Manufactured to specification for automotive, industrial, agricultural and OEM applications.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 5. `/products/[slug]` — Product Detail Page

Structure (idea referenced from how competitor spring manufacturer sites lay out a
single product page — breadcrumb → hero → gallery → specs → process → applications →
CTA — content rewritten for Darbar):

1. **Breadcrumb** — `Home / Products / [Product Name]`, mono font, small, `--steel` text.
2. **Hero block** — eyebrow "Manufacturer & Supplier of", H1 product name, intro
   description paragraph (from `description` field).
3. **Image gallery** — grid of 3–6 product photos, lightbox-on-click (use a lightweight
   lib like `yet-another-react-lightbox`, or a simple Framer Motion modal).
4. **Specification panel** — two-column layout:
   - **Materials** — bulleted list (`materials[]`)
   - **Finishes** — bulleted list (`finishes[]`)
   Style as the existing `.spec-grid` / `.spec-cell` pattern from README.md.
5. **Manufacturing process** — short paragraph (`process` field) + an optional
   technical line-illustration (reuse the SVG measurement-diagram style already built
   for the homepage feature-spot section).
6. **Applications** — bulleted list (`applications[]`) styled as tag pills or a simple
   checklist with the bronze check icon.
7. **Related products** — 3-card row of other items from the same `products` array
   (exclude current slug), reusing `ProductCard`.
8. **CTA band** — "Request a quote for [Product Name]" → pre-fills the contact form's
   product `<select>` with this product (mirrors the legacy `view-product` click
   behavior — pass `?product=slug` as a query param and read it in the contact form
   with `useSearchParams`).

```tsx
// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/lib/products';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} Manufacturer | Darbar Springwala`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();

  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name }]} />
      <ProductHero product={product} />
      <ProductGallery images={product.images} />
      <ProductSpecs materials={product.materials} finishes={product.finishes} />
      <ProductProcess text={product.process} />
      <ProductApplications items={product.applications} />
      <RelatedProducts exclude={product.slug} />
      <ProductCTA productName={product.name} slug={product.slug} />
    </>
  );
}
```

---

## 6. Other Standalone Pages (brief scope)

### `/about`
Eyebrow "Since 1990" + company story (2–3 paragraphs, reuse the homepage About section
copy/visual pattern), badge row of certifications, "Why Us" numbered grid reused from
home, animated stat counters (years in business, staff, clients served).

### `/quality`
Reuse the homepage Quality section pattern (QC checklist + visual) expanded into a full
page: QC process steps, testing equipment list, certifications/standards badges, and a
downloadable capability-statement PDF link if available.

### `/industries`
Grid or horizontal-scroller (reuse `.industry-card` pattern) of industries served —
Automotive, Agriculture, Electrical, Furniture, General Engineering, OEM — each card
linking to a filtered `/products?industry=...` view (nice-to-have) or just a short blurb.

### `/contact`
Reuse the homepage Contact section (info list + form card) as a full page — same field
set, same file-drop UI, same success-state swap. Read `?product=` query param (see §5.8)
to prefill the product `<select>`.

### `/faq` (optional standalone)
If FAQ content grows beyond ~6 items, break it out from the homepage into its own page
using the same accordion component from README.md §5.

---

## 7. Build Order Recommendation

1. Design tokens + fonts + layout shell (`README.md` §2–4, §8)
2. Reusable UI primitives: `Button`, `Eyebrow`, `Card`, `Breadcrumb`
3. `Preloader` (this file, §2)
4. Home page sections (`README.md` §9)
5. `lib/products.ts` data (this file, §3)
6. `/products` listing (§4)
7. `/products/[slug]` detail template (§5)
8. `/about`, `/quality`, `/industries`, `/contact` (§6)
9. Polish: scroll coil rail, process scroll-fill, animated counters, FAQ accordion
10. Forms wiring (React Hook Form + Zod + API route or email service)

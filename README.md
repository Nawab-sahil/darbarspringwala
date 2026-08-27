# Darbar Springwala — Next.js Rebuild Design System

Precision industrial springs manufacturer, Jamnagar, Gujarat · Est. 1990.
This README is the single source of truth for rebuilding the existing static HTML site
(`darbar-springwala.html`) as a **Next.js + Framer Motion** site. Hand this file to
Copilot/Cursor/Claude as project context — every color, font, spacing value, and
component pattern the current site uses is documented below.

Reference (live legacy site): https://www.darbarspringwala.com/
Source file used to extract these tokens: `darbar-springwala.html` (previously built).

---

## 1. Brand Concept

**"Tempered steel navy + burnished spring-wire bronze."**
Brand anchor color pulled directly (pixel-verified) from the official logo. The navy
represents precision-machined steel; the bronze represents the oxide/temper color a
real coil spring develops when heat-treated. Warm paper-steel background (not pure
white) gives it an industrial, technical-catalogue feel rather than a generic SaaS look.

---

## 2. Color Tokens

Use these as CSS variables (`globals.css`) **and** mirror them in `tailwind.config.ts`
theme extension so both raw CSS and Tailwind utility classes stay in sync.

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#17202B` | Primary text, dark surfaces (near navy-black) |
| `--navy` | `#17324F` | **Brand navy** (exact logo value) — nav mobile bg, primary surface accents |
| `--navy-2` | `#23496F` | Lighter navy for gradients / hover states |
| `--navy-deep` | `#0D1D2F` | Darkest navy — footer, topbar, deep sections |
| `--steel` | `#5B6672` | Secondary/body text on light backgrounds |
| `--steel-2` | `#89919B` | Tertiary/muted text |
| `--line` | `#E2DED4` | Hairline borders on light backgrounds |
| `--line-dark` | `rgba(255,255,255,0.14)` | Hairline borders on dark backgrounds |
| `--bronze` | `#9C724A` | **Brand bronze** (exact logo value) — CTAs, eyebrows, accents, icons |
| `--bronze-2` | `#B98F5E` | Lighter bronze — hover/highlight state |
| `--bronze-deep` | `#7A5636` | Darker bronze — pressed/active state |
| `--bg` | `#F7F5F1` | Page background — warm "steel paper" tone |
| `--surface` | `#FFFFFF` | Cards, header, form panels |
| `--surface-2` | `#EFEBE2` | Secondary surface (mega menu items, spec cells) |
| `--ok` | `#4A7A5E` | Success state (form success, checkmarks) |
| WhatsApp green | `#25D366` | Floating WhatsApp CTA button only |

**Color pairing rules:**
- Light sections: `--bg` background, `--ink` text, `--steel` for body copy, `--bronze` for accents/links/eyebrows.
- Dark sections (`.dark`): `--ink` (#17202B) background, white text, `#9FADBB` for muted/secondary text.
- Navy sections (`.navy-bg`): `--navy` background, white text.
- Footer / topbar: `--navy-deep`, muted text `#C7CFD7`.
- Never use pure black or pure white for text — always `--ink` / off-white.
- Bronze is the **only** accent color used for interactive/CTA emphasis — don't introduce a second accent hue.

---

## 3. Typography

| Font | Google Fonts import | Role |
|---|---|---|
| **Space Grotesk** (400/500/600/700) | `family=Space+Grotesk:wght@400;500;600;700` | Display font — all headings (h1–h4), hero stats, logo wordmark |
| **Inter** (400/500/600/700/800) | `family=Inter:wght@400;500;600;700;800` | Body font — paragraphs, nav, buttons, UI text |
| **IBM Plex Mono** (400/500) | `family=IBM+Plex+Mono:wght@400;500` | Technical/mono accents — eyebrows, spec labels, measurement callouts, preloader text, coil scroll % |

```css
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;
```

In Next.js, load via `next/font/google` rather than a `<link>` tag:

```ts
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-body' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono' });
```

**Type scale:**
- H1 (hero): `clamp(36px, 5vw, 62px)`, line-height `1.05`, letter-spacing `-.02em`, weight 600. `<em>` inline highlight → bronze, not italic.
- H2 (section head): `clamp(28px, 3.4vw, 44px)`, line-height `1.12`, weight 600.
- Body / paragraph: `16px` base, `line-height:1.6`. Section intro paragraphs `17px`, hero paragraph `18px`, line-height `1.65–1.7`.
- Eyebrow label: `12px`, IBM Plex Mono, `letter-spacing:.14em`, uppercase, bronze, weight 500, preceded by a 22×1px bronze rule.
- Buttons: `14.5px`, weight 600, `letter-spacing:.01em`.
- Micro/meta labels (hero stats, spec captions): `11px`, IBM Plex Mono, uppercase, `letter-spacing:.08em`.

---

## 4. Layout & Spacing

| Token | Value |
|---|---|
| `--container` | `1280px` max-width, centered, `32px` side padding (`20px` on mobile ≤768px) |
| `--radius` | `6px` — small elements |
| `--radius-lg` | `14px` — cards |
| Section padding `.pad` | `120px 0` (`80px 0` ≤900px) |
| Section padding `.pad-sm` | `80px 0` (`56px 0` ≤900px) |
| `--ease` | `cubic-bezier(.22,.61,.36,1)` — use as the Framer Motion easing curve everywhere |

Grid breakpoints used throughout: `1180px` (coil rail hides), `1079px` (nav → mobile drawer), `980px`, `960px`, `900px`, `768px`, `640px`.

---

## 5. Core Components (translate to React components)

### Buttons
- `.btn-primary` — bronze fill (`#9C724A`), dark ink text (`#1a1206`), `15px 28px` padding, `3px` radius. Hover: background → `--bronze-2`, `translateY(-2px)`, bronze glow shadow, arrow icon slides right.
- `.btn-secondary` — transparent, border `--line`, ink text. On dark/navy backgrounds, border becomes `--line-dark`, text white.
- `.btn-ghost` — text-only with bottom border-underline (`1px solid var(--line)`), hover → bronze text + bronze underline. Used for "View Details" / "View All" links.
- All buttons: `transition: all .25s var(--ease)`.

### Header / Nav
- Sticky, `backdrop-filter: blur(14px)`, translucent `rgba(244,241,234,.86)` background, shrinks padding on scroll (`.scrolled` state, 20px → 13px).
- Desktop: horizontal nav links with animated underline on hover; dropdown ("mega menu") — white card, `10px` radius, drops down with fade+translateY(8px→0).
- Mobile (≤1079px): slide-in drawer from right, `340px`/`84vw` wide, navy background (`--navy`), full-height, hamburger → X animation, dark scrim overlay behind.
- Topbar above header: `--navy-deep` background, contact info + social icons, `12.5px` text.

### Hero
- Two-column grid (copy + SVG illustration), background grid-line pattern masked with radial gradient fade.
- Floating "tag" chips positioned absolutely around the illustration (glassy white pill, mono font, bronze dot).
- Hero meta stats row below CTA buttons, separated by top border, animated counters (count up on scroll into view).

### Signature interaction — Scroll Coil Rail
- A fixed-position vertical SVG "spring coil" on the right edge of viewport (desktop only, hides ≤1180px) that visually compresses as the user scrolls down the page, with a live percentage readout below it (mono font). This is the site's signature motion device — **rebuild this in Framer Motion using `useScroll` + `useTransform`** driving the coil path's amplitude/turns and a percentage counter.

### Cards
- `.product-card` — white surface, `1px` `--line` border, `14px` radius, hover: lift `-6px` + shadow + border → navy. Contains index number (01/02/03…), SVG icon media, title, description, application tag, ghost "View Details" link.
- `.industry-card` — horizontal scroller (drag/scroll snap), prev/next arrow buttons.
- `.why-cell`, `.qc-item`, `.stat-cell` — grid cells with numbered/iconed headers.

### Process / Timeline
- `.process-grid` — horizontal step list with a connecting line whose fill animates (`width %`) based on scroll position, and steps light up (`.active` class) sequentially — build with Framer `useScroll`-linked `motion.div` width animation.

### FAQ Accordion
- Single-open accordion, `+` icon rotates to `×`, `max-height` transition for expand/collapse. In Framer Motion, use `AnimatePresence` + `motion.div` height auto animation instead of manual `scrollHeight` JS.

### Forms
- Contact/enquiry form: labeled fields, focus state = bronze outline, custom file-drop zone (drag & drop + click-to-browse), success state swaps form for a check-icon confirmation panel (`.form-success`).

### Footer
- `--navy-deep` background, multi-column link layout, social icon row, bottom bar with legal links.

### Floating elements
- WhatsApp float button — bottom-right, `#25D366` circle, 56px (50px mobile), scale-up on hover.
- Preloader — full-screen navy overlay, animated coil-draw SVG stroke + progress bar, fades out on load.

---

## 6. Motion / Animation Patterns (→ Framer Motion equivalents)

| Legacy behavior | Framer Motion approach |
|---|---|
| `.reveal` + IntersectionObserver fade-up on scroll | `<motion.div initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:"-40px"}} transition={{duration:.7, ease:[.22,.61,.36,1]}}>` |
| `.stagger` staggered children delays | Parent `motion.div` with `variants` + `staggerChildren: 0.06` |
| Scroll coil rail compression | `useScroll()` + `useTransform()` mapped to SVG path `d` (recompute path string in a memoized function) and a `motion.span` counter |
| Process step scroll-fill | `useScroll({ target: ref })` → `useTransform` to `width: progress*100+'%'` on the fill bar; toggle `active` class via `useMotionValueEvent` |
| Animated counters (hero stats) | `useInView` trigger + `animate()` from `framer-motion` counting a `useMotionValue`, or a small custom `useCounter` hook with `requestAnimationFrame` |
| Mega menu / dropdown | `AnimatePresence` + `motion.div` opacity/translateY on hover (desktop), click-toggle on mobile |
| FAQ accordion | `AnimatePresence` + `motion.div` `initial={{height:0}} animate={{height:"auto"}}` |
| Mobile nav drawer | `motion.div` `x: "100%"→0` slide, plus a `motion.div` scrim fade |
| Preloader | `AnimatePresence` wrapping the whole preloader; exit `opacity:0` then unmount |
| Button hover lift | Tailwind/CSS transition is fine (`hover:-translate-y-0.5`) — Framer optional, use `whileHover`/`whileTap` for consistency |

Global easing curve to reuse everywhere: `ease: [0.22, 0.61, 0.36, 1]` (matches legacy `--ease`).
Respect `prefers-reduced-motion` — wrap Framer transitions or use `useReducedMotion()` to shorten/disable.

---

## 7. Recommended Tech Stack

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS with the token table above mapped into `tailwind.config.ts` (`theme.extend.colors`, `theme.extend.fontFamily`) + a small `globals.css` for CSS variables/keyframes not expressible in Tailwind
- **Animation:** Framer Motion (`motion`, `useScroll`, `useTransform`, `useInView`, `AnimatePresence`)
- **Icons:** inline SVG (as in the legacy build) or `lucide-react` for generic UI icons; keep bespoke technical illustrations (spring coils, measurement diagrams) as hand-authored SVG components
- **Forms:** React Hook Form + Zod validation; wire to an API route or a service like Resend/Formspree for the enquiry form
- **Fonts:** `next/font/google` (Space Grotesk, Inter, IBM Plex Mono)
- **Deployment:** Vercel

### Suggested folder structure
```
/app
  layout.tsx          — fonts, <html>, global providers
  page.tsx             — home page composition
  globals.css          — CSS variables, base resets
/components
  layout/Header.tsx, Footer.tsx, Topbar.tsx, MobileNav.tsx
  sections/Hero.tsx, TrustStrip.tsx, Products.tsx, About.tsx,
            WhyUs.tsx, Process.tsx, Quality.tsx, Industries.tsx,
            Stats.tsx, FAQ.tsx, FinalCTA.tsx, Contact.tsx
  ui/Button.tsx, Eyebrow.tsx, Card.tsx, Pill.tsx
  motion/ScrollCoilRail.tsx, RevealOnScroll.tsx, Counter.tsx
  icons/*.tsx           — SVG icon components
/lib
  constants.ts          — product data, nav links, FAQ data as arrays (CMS-ready)
tailwind.config.ts
```

Keep section content (products, FAQs, process steps, industries, stats) as typed data
arrays in `/lib/constants.ts` so Copilot can scaffold each section as `data.map(...)`
rather than hardcoding JSX per item.

---

## 8. Tailwind Config Snippet

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        ink: '#17202B',
        navy: { DEFAULT: '#17324F', 2: '#23496F', deep: '#0D1D2F' },
        steel: { DEFAULT: '#5B6672', 2: '#89919B' },
        line: '#E2DED4',
        bronze: { DEFAULT: '#9C724A', 2: '#B98F5E', deep: '#7A5636' },
        bg: '#F7F5F1',
        surface: { DEFAULT: '#FFFFFF', 2: '#EFEBE2' },
        ok: '#4A7A5E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: { DEFAULT: '6px', lg: '14px' },
      maxWidth: { container: '1280px' },
      transitionTimingFunction: { brand: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
};
```

---

## 9. Page Sections (in order — build as separate components)

1. Preloader (coil-draw animation)
2. Topbar (contact info + socials)
3. Header / Nav (sticky, mega menu, mobile drawer)
4. Hero (headline, CTA, floating tags, illustration, hero-meta counters)
5. Trust strip (5 icon+label items)
6. Products grid (3-col card grid, index numbers, hover lift)
7. Feature spotlight (spec grid + technical spring illustration)
8. About (badge row, est. 1990 badge, visual)
9. Why Us (numbered grid cells)
10. Process (scroll-linked horizontal timeline)
11. Quality (QC checklist + visual)
12. Industries (horizontal scroller with arrow controls)
13. Custom section (flow-row diagram)
14. Tech spec table (app-row comparison table)
15. Stats grid
16. Trusted-by / client marks strip
17. FAQ accordion
18. Final CTA banner
19. Contact (info list + form card w/ file upload + success state)
20. Footer (brand, link columns, social, legal bar)
21. Floating: WhatsApp button, scroll coil rail, sticky mobile CTA

---

## 10. Notes for Copilot / AI Pair-Programmer

- Match the **exact hex values** in section 2 — do not let Copilot invent shades.
- Every heading uses **Space Grotesk**; every paragraph/UI text uses **Inter**; every
  label/eyebrow/mono-style detail uses **IBM Plex Mono**. Don't mix.
- Reuse the single easing curve `cubic-bezier(.22,.61,.36,1)` for all transitions.
- Bronze = the only accent/CTA color. Navy = structural/dark surfaces. Never introduce
  a new accent hue (e.g. no blue links, no purple).
- All scroll-triggered reveals should use `viewport={{ once: true }}` in Framer Motion
  (no re-triggering on scroll back up), matching the legacy `IntersectionObserver`
  `unobserve` behavior.
- Keep the warm off-white `--bg` (#F7F5F1) as the default page background — never pure
  white (#FFFFFF is reserved for card/surface elements sitting on top of `--bg`).

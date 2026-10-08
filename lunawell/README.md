# LunaWell Wellness Clinic — Standalone Rebuild

A clean, standalone recreation of the LunaWell Wellness Clinic site
(`intrepid-luna-well-path.base44.app`), rebuilt outside of Base44 as a
production-ready **React + TypeScript + Tailwind CSS** single-page app.

## Tech stack

- **React 18 + TypeScript** — component structure, type safety
- **Vite** — build tool / dev server (chosen over Next.js: the original site
  is a fully client-rendered marketing SPA with no server data or SSR needs,
  so Vite gives the same production result with a much simpler, faster
  build/deploy story; the code is ordinary React and can be ported into a
  Next.js `app/` router in an afternoon if you later need SSR/SEO rendering
  or API routes)
- **React Router** — client-side routing between pages
- **Tailwind CSS** — styling, using a custom theme matched to the brand
  (see `tailwind.config.js`)
- No backend/database is required for the site itself — see "The Book page"
  below for how the consultation form is wired up.

## Project structure

```
lunawell/
├── public/                  # Static assets (favicon, robots.txt)
├── src/
│   ├── components/          # Header, Footer, PageHero, CTASection, icons, etc.
│   ├── config/site.ts        # Centralised contact details (phone/email/WhatsApp)
│   ├── pages/                # One file per route
│   │   ├── Home.tsx
│   │   ├── WeightManagement.tsx
│   │   ├── PeptideTherapy.tsx
│   │   ├── NaturalTherapies.tsx
│   │   ├── Products.tsx
│   │   ├── Fees.tsx
│   │   ├── Book.tsx
│   │   ├── ClinicalPsychologist.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx               # Route definitions
│   ├── main.tsx               # App entry point
│   └── index.css              # Tailwind + global styles
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── .env.example
└── package.json
```

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint       # ESLint
```

> **Note:** this project was authored in a sandboxed environment with no
> network access, so the build could not be run and verified here (`npm
> install` could not reach the npm registry). The code follows standard,
> current Vite/React/TypeScript/Tailwind conventions throughout and should
> build cleanly with `npm install && npm run build` — please run that as
> your first step and open an issue/let me know if anything doesn't compile.

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

| Variable | Purpose |
|---|---|
| `VITE_FORM_ENDPOINT` | Where the Book page's consultation form submits to (see below). Leave blank to fall back to a `mailto:` link. |
| `VITE_CLINIC_EMAIL` | Clinic email shown in the footer and used as the mailto fallback. |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number (international format, digits only) used for "Chat on WhatsApp" links. |

## The Book page (replacing Base44's built-in form/backend)

The original app is built on Base44, whose hosted backend handled form
submissions invisibly. This standalone version has no bundled backend, so
the booking form is built to work with **any** POST endpoint that accepts
`multipart/form-data` and returns a 2xx response — you plug in whichever
suits you:

- **Formspree** (fastest to set up, no code): create a form at
  formspree.io, set `VITE_FORM_ENDPOINT` to the endpoint it gives you.
- **A serverless function** (Vercel/Netlify function, AWS Lambda, etc.)
  that emails/stores the submission, then set `VITE_FORM_ENDPOINT` to its URL.
- **Your own API** — same idea.
- **No endpoint configured** — the form falls back to opening the visitor's
  email client with a pre-filled `mailto:` message to `VITE_CLINIC_EMAIL`,
  so the site is fully functional even with zero backend setup.

If you'd rather use a real booking/calendar system (Calendly, Cal.com,
SimplyBook.me, etc.), swap the form in `src/pages/Book.tsx` for an embed —
that's usually simpler for appointment scheduling than a raw contact form.

## Deployment

Any static host works, since this builds to a plain `dist/` folder:

- **Vercel**: import the repo, framework preset "Vite", done.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages / GitHub Pages / any static host**: same idea — build,
  then serve `dist/`.

Because this is a client-side-routed SPA, configure your host to redirect
all unknown paths to `index.html` (a `_redirects` file with `/* /index.html
200` for Netlify, or the equivalent rewrite rule for Vercel/Cloudflare —
Vercel and Cloudflare Pages do this automatically for Vite projects).

## Design system

Matched from the original site's screenshots:

- **Colors**: deep forest green (`#14271F`) for dark sections/headers, warm
  gold (`#C9A24B`) as the accent (buttons, icons, dividers), warm cream
  (`#F7F5F0`) as the main background.
- **Type**: Playfair Display (serif) for headings, Inter (sans) for body
  text and UI — matching the original's serif display / sans body pairing.
- **Shape language**: pill-shaped buttons and nav bar, soft `rounded-2xl`
  cards, generous whitespace.

All of this lives as reusable tokens in `tailwind.config.js` and
`src/index.css`, so palette/type changes are one-line edits.

## Accessibility & quality

- Semantic landmarks (`header`, `nav`, `main`, `footer`), labelled nav
  regions, and a real `<form>` with associated `<label>`s on the Book page.
- Visible keyboard focus states on all interactive elements.
- `prefers-reduced-motion` respected (the only motion is a hover
  micro-interaction and the mobile menu open/close).
- Sufficient color contrast between text and backgrounds.
- Fully responsive from mobile through desktop (the nav collapses to a
  slide-down menu under `lg`, cards and hero stack on small screens).

## Known limitations — please read

I own only the seven screenshots you provided (all from the **Home page**)
and could not browse the live app further: `intrepid-luna-well-path.base44.app`
is a fully client-rendered SPA, and my tooling can only fetch a URL's raw
HTML (which returns just the empty React shell/meta tags for a site like
this) and cannot click through to or fetch sub-pages that weren't already
linked in a prior search/fetch result. I also had no network access in the
build sandbox, so I could not download any real photography, run `npm
install`, or execute a build to verify it compiles.

As a result:

1. **Home page** — layout, copy, section order, colors, and typography are
   rebuilt closely from your screenshots. Two small gaps: the "Three
   pillars" card body text was cropped in your screenshot, so I completed
   those sentences plausibly rather than guessing wrong; and there's no
   screenshot of the site's footer, so I designed one that's consistent
   with the rest of the brand — please review/edit its content and links.
2. **Weight Management, Peptide Therapy, Natural Therapies, Products, Fees,
   and Book pages** — I never saw these pages, so they are **built from
   scratch** using the same design system and only the fragments of real
   copy visible on the homepage (the three service-card descriptions, the
   four product names/descriptions). Treat their content, pricing, and
   section structure as a reasonable starting placeholder, not a faithful
   reproduction — please replace with your actual copy/pricing before
   launch.
3. **All photography** is a labelled placeholder box (e.g. "Portrait of
   LunaWell's doctor in clinic"), not the real photos — I had no way to
   retrieve the originals. Drop your real images into `src/assets` and
   swap them into `ImagePlaceholder` usages (or replace the component
   calls with `<img>` tags directly).
4. **Booking form backend** — Base44's built-in backend/database is
   replaced with a bring-your-own-endpoint form (see "The Book page"
   above) rather than a specific hosted service, since I don't know which
   backend you'd prefer.
5. **Build not verified** — I could not run `npm install`/`npm run build`
   in this environment (no network access), so please run those as your
   first step after downloading.

## Improvements made over the original

- Proper semantic HTML, labelled forms, and visible focus states
  (accessibility gaps are common in no-code page builders).
- A working, validated booking form instead of relying on a proprietary
  hosted backend.
- Centralised contact details (`src/config/site.ts` + `.env`) instead of
  phone numbers/emails hardcoded in multiple places.
- Clean component structure (reusable `PageHero`, `CTASection`, icon set)
  so future edits are one-line changes instead of hunting through a
  page-builder's block tree.
- No page-builder runtime/JS bundle bloat — this ships only the code the
  site actually uses.

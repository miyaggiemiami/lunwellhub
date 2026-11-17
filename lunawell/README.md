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
pnpm install
pnpm dev       # start local dev server (http://localhost:5173)
pnpm build     # production build → dist/
pnpm preview   # preview the production build locally
pnpm lint      # ESLint
```

The production build and lint checks pass locally with pnpm.

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

| Variable | Purpose |
|---|---|
| `VITE_FORM_ENDPOINT` | Where the Book page's consultation form submits to (see below). Leave blank to fall back to a `mailto:` link. |
| `VITE_CLINIC_EMAIL` | Clinic email shown in the footer and booking page, and used as the mailto fallback. |
| `VITE_DOCTOR_EMAIL` | Doctor's email shown in the footer and booking page. |
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

## Content and deployment notes

- The Home page follows the available screenshots. Other service and
  informational pages were built using the same design system; verify
  treatment descriptions and fees against clinic-approved information.
- Page and product imagery uses the available assets in `public/`, reused
  where the subject matches.
- The booking form requires a configured endpoint for direct submission.
  Without one, it opens a pre-filled email to `VITE_CLINIC_EMAIL`.

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

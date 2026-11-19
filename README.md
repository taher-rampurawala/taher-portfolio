# Taher Rampurawala · AI Automation Engineer

Personal portfolio for Taher Rampurawala: n8n automations, AI agents, voice receptionists,
WhatsApp CRM and RAG chatbots. It's a single-page site built with React, Vite and GSAP, with
smooth scrolling and scroll-triggered animations.

## What's on the page

| Section | Contents |
|---|---|
| Hero | Introduction, availability, core skills, "Book a call" |
| About | Background, services list, languages, certifications, what every build ships with |
| Tools | Marquee of the tools used across builds |
| Selected work | 11 n8n projects with category filters, each linking to its workflow on GitHub |
| Stats | Years of engineering, builds, services, availability, certifications |
| How I work | The 4-step process, experience and education |
| Services | The 6 services and 3 working principles |
| Contact | Contact form, contact details and social links |

Unknown URLs show a 404 page that links back to the portfolio.

## Tech stack

- [React 19](https://react.dev) + TypeScript, built with [Vite 6](https://vite.dev)
- [GSAP](https://gsap.com) with ScrollTrigger and ScrollSmoother for smooth scrolling and animations
- [React Router 6](https://reactrouter.com) for the home and 404 routes
- Bootstrap 5 grid/utilities and the template's theme CSS (served from `public/assets/css`)
- [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) for the tools strip
- DM Sans, self-hosted (no requests to external font or CSS hosts)

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:5174
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server on port 5174 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Editing content

All text, links and project data live in one file: **`src/data/taher.ts`**.

| To change… | Edit |
|---|---|
| Name, role, availability, location, photo | `PROFILE` |
| LinkedIn / GitHub / Upwork / workflows repo | `LINKS` |
| Header and footer menu | `NAV_LINKS` |
| Projects (title, summary, stack, cover, GitHub folder) | `PROJECTS` |
| Services, process steps, principles | `SERVICES`, `PROCESS`, `PRINCIPLES` |
| Experience, certifications, education, languages | `EXPERIENCE`, `CERTIFICATIONS`, `EDUCATION`, `LANGUAGES` |
| Tools marquee | `TOOLS` |

Two settings in the same file control the contact actions:

- **`BOOK_CALL_URL`**: a booking page (e.g. a Google Calendar appointment schedule). While empty,
  "Book a call" scrolls to the contact form.
- **`FORM_ENDPOINT`**: an n8n Webhook URL (POST) that receives the form as JSON
  `{ name, email, company, topic, message, page, sentAt }`. While empty, the form opens the
  visitor's email app with the message pre-filled.

Images are in `public/taher/` (photo, project covers, workflow canvas). The HTML/CSS sources the
covers were designed from are kept in `design/covers-src/`; they aren't part of the site build.

## Project structure

```
├── index.html                 # HTML shell: meta tags, favicon, font + CSS links
├── public/
│   ├── favicon.svg            # Tab icon (same mark as the logo, adapts to dark mode)
│   ├── scripts/theme-init.js  # Sets light/dark theme before first paint
│   ├── assets/css/            # Template theme (main.css) + Bootstrap + spacing utilities
│   ├── assets/fonts/dm-sans/  # Self-hosted DM Sans
│   └── taher/                 # Portfolio images
├── design/covers-src/         # Source files for the project cover images
└── src/
    ├── data/taher.ts          # All portfolio content (edit here)
    ├── pages/                 # TaherHomePage (/) and NotFoundPage (*)
    ├── layouts/MainLayout.tsx # Header, sidebar, smooth-scroll wrapper, footer
    └── shared/
        ├── sections/taher/    # Page sections, project card, icons, scroll helper, styles
        ├── header/ footer/ sidebar/
        ├── effects/           # GSAP effects: reveal text, fade-in, move-up, image scale, zoom
        ├── elements/          # Logo, odometer counter, back-to-top
        ├── hooks/             # Counter, intersection observer, scroll helpers
        └── mobile-menu/       # Copies the header menu into the mobile/side panels
```

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted anywhere.
`vercel.json` rewrites all paths to `index.html`, so the 404 page works when deployed on Vercel.
On other static hosts, add the equivalent single-page-app fallback.

## Credits

- Layout and animations are adapted from the **Orisa** creative portfolio template (home 5),
  with its placeholder content, demo pages and unused assets removed.
- DM Sans by Colophon Foundry, licensed under the SIL Open Font License 1.1.

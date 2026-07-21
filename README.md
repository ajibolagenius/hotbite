# Hotbite

**Wrapped in flavor — bold street food, delivered hot.**

Hotbite is the marketing site for a street-food brand, built with Next.js (App Router), React 19, and Tailwind CSS 4.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scrolling
- [Lucide](https://lucide.dev) — icons
- TypeScript

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

| Command      | Description                        |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Start the development server        |
| `pnpm build` | Build the app for production        |
| `pnpm start` | Start the production server         |
| `pnpm lint`  | Run ESLint                          |

## Project Structure

```
src/
├── app/                  # Routes (App Router)
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── not-found.tsx     # 404 page
│   ├── licenses/         # Licenses page
│   └── privacy-policy/   # Privacy policy page
├── components/           # Page sections and UI building blocks
│   ├── hero/ about/ featured/ slogan/ menu/ ticker/
│   ├── values/ testimonials/ gallery/ benefits/
│   ├── order/ contact/ footer/ header/
│   ├── licenses/ privacy/ not-found/
│   ├── emoji/ logo/ providers/ ui/
├── assets/               # Images used across sections
└── lib/                  # Shared utilities (e.g. scroll helpers)
```

The home page (`src/app/page.tsx`) composes the full landing experience from section components: `Hero`, `About`, `Featured`, `Slogan`, `Menu`, `Ticker`, `Values`, `Testimonials`, `Gallery`, `Benefits`, `PhraseTicker`, `Order`, `Contact`, and `Footer`.

## Fonts

Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load and self-host:

- **Londrina Solid** — display font
- **Andika** — body font

## Environment Variables

| Variable                | Description                                      | Default                  |
| ------------------------ | ------------------------------------------------ | ------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Base URL used for metadata and Open Graph images | `http://localhost:3000`  |

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/new), the platform from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

# Team Apex Gaming - Official Website

> **"Time To Rise."** - The official web presence of Team Apex Gaming, India's rising BGMI esports organization founded by Jonathan Gaming.

## Overview

This is the official website for **Team Apex Gaming (TAG)**, built as a modern, performant React SPA. It covers the org's story, competitive BGMI roster, news/announcements, achievements, and community touchpoints.

**Live:** [teamapexgaming.gg](https://teamapexgaming.gg)

---

## Tech Stack

| Layer           | Technology                         |
| --------------- | ---------------------------------- |
| Framework       | React 18 + TypeScript              |
| Build Tool      | Vite                               |
| Styling         | Tailwind CSS + tailwindcss-animate |
| UI Components   | shadcn/ui (Radix UI primitives)    |
| Routing         | React Router v6                    |
| Animations      | Framer Motion                      |
| Forms           | React Hook Form + Zod              |
| Data Fetching   | TanStack Query v5                  |
| Testing         | Vitest + Testing Library           |
| Package Manager | pnpm                               |

---

## Pages

| Route           | Description                                           |
| --------------- | ----------------------------------------------------- |
| `/`             | Home - hero, stats, org members, roster preview, news |
| `/about`        | Organization story and timeline                       |
| `/team`         | Full org members (founders, creators, staff)          |
| `/roster/bgmi`  | Active BGMI competitive roster                        |
| `/news`         | Newsroom - all articles                               |
| `/news/:slug`   | Individual news article                               |
| `/achievements` | Org and individual achievements                       |
| `/contact`      | Contact form                                          |
| `/merch`        | Coming soon                                           |
| `/tournaments`  | Coming soon                                           |
| `/fanzone`      | Coming soon                                           |
| `/careers`      | Coming soon                                           |
| `/sponsors`     | Coming soon                                           |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (or npm/bun)

### Install & Run

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Testing

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Linting

```bash
pnpm lint
```

---

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, cards, etc.)
│   └── ui/           # shadcn/ui base components
├── hooks/            # Custom React hooks
├── lib/
│   ├── data.ts       # Static content - roster, news, achievements, timeline
│   ├── animations.ts # Framer Motion animation variants
│   └── utils.ts      # Utility helpers
├── pages/            # Route-level page components
└── test/             # Test setup and example tests
```

---

## Content

All site content (roster, news articles, org members, achievements, timeline) lives in `src/lib/data.ts` as typed static data. Update that file to add players, news, or achievements without touching page components.

---

## Organization

**Team Apex Gaming** was founded in April 2026 by **Jonathan Jude Amaral** (Jonathan Gaming) following his departure from GodLike Esports. The org launched with a five-man BGMI roster and founding members Shreeman Legend and SSR Vlogs.

- Founder: Jonathan Gaming (Red Bull athlete, 5M+ YouTube)
- Game: BGMI (Battlegrounds Mobile India)
- Motto: _#TAGonTop_

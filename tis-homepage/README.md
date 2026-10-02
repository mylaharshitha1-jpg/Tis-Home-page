# TIS Homepage Redesign

A production-focused landing page for Tulas International School, built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Responsive component-driven architecture

## Setup Instructions

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open the site in your browser:
   http://localhost:3000

## Component Architecture

```text
components/
├── ui/
│   ├── Button.tsx
│   ├── Badge.tsx
│   └── Card.tsx
├── sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Academics.tsx
│   ├── Admissions.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── animation/
│   ├── ScrollProgress.tsx
│   └── ScrollReveal.tsx
└── app/
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

## Homepage Features

- Responsive layout tuned for mobile, tablet, and desktop sizing
- Scroll reveal transitions for section entrances
- Fixed scroll progress indicator for reading depth
- Theme toggle interaction for a premium modern feel
- Strong blue-and-gold school branding inspired by the official TIS visual direction

## Notes

The homepage is structured to be clean, production-ready, and easy to extend. All sections are separated into reusable components to keep the codebase maintainable and aligned with the requested architecture.

# Palinga Codebase Snapshot

Source scope: `C:\Users\mst\Palinga-web-site`

Snapshot date: 2026-05-11

## Summary

This source summary records the current technical scan of the Palinga Website codebase. The project is a static-export Next.js site for PALINGA Yazilim A.S. and the Aphasia Reverbis product.

## Scanned Areas

- Root configuration files: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
- App Router pages under `src/app/`
- Shared UI components under `src/components/`
- Utility code under `src/lib/`
- Public assets under `public/`
- Obsidian/wiki setup under `Palinga-Web-Site/`

## Durable Findings

- The application stack is Next.js 16, React 19, TypeScript, Tailwind CSS 4, ESLint 9.
- The site is configured for static export.
- The repository is frontend-only; it does not contain a backend, database, API service, or persistent form submission layer.
- The product narrative is Aphasia Reverbis: a therapist-controlled, data-driven aphasia rehabilitation platform.
- The website contains home, platform, about, contact, FAQ/SSS, KVKK, privacy, and cookie policy pages.
- Build passed and lint passed with warnings only.
- Key technical risks are documented in [[Palinga Website QA and Risks]].

## Related

- [[Palinga Website]]
- [[Palinga Website Technical Stack]]
- [[Palinga Website Architecture]]
- [[Palinga Website Page Map]]
- [[Palinga Website Assets]]
- [[Palinga Website QA and Risks]]

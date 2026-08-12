# Portfolio — Sumit Kumar Singh

Personal portfolio for **Sumit Kumar Singh** — Senior Python Engineer.
Live at [singh-sumit.github.io](https://singh-sumit.github.io).

## Tech stack

- **Framework** — [Next.js 13](https://nextjs.org) (App Router, static export)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) primitives on top of [Radix UI](https://radix-ui.com)
- **Motion** — [framer-motion](https://www.framer.com/motion/)
- **Icons** — [lucide-react](https://lucide.dev)
- **Timeline** — [react-chrono](https://github.com/prabhuignoto/react-chrono)
- **Theming** — [next-themes](https://github.com/pacocoursey/next-themes) (light / dark / system)
- **Blog RSS** — [rss-parser](https://github.com/rbren/rss-parser), fetched at build time from Medium + Substack

## Project structure

```
app/
  content/          # Typed content modules — one source of truth per section
  components/       # UI components; ui/ = shadcn primitives
  hooks/            # Custom React hooks
  types.ts          # Shared domain types
lib/
  blog.ts           # Build-time RSS fetcher
  icons.ts          # Icon maps
  utils.ts          # cn() helper
public/
  images/           # Company + profile images
  Sumit_Kumar_Singh_Resume.pdf
```

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build for production

```bash
npm run build
# outputs a fully static site into ./out
```

The site is a **static export** — deploy `./out` to any static host (GitHub Pages, Netlify, Cloudflare Pages, S3+CloudFront).

## Editing content

All content lives in `app/content/*.ts`. Types are enforced by [`app/types.ts`](app/types.ts), so autocomplete and typecheck guide edits.

| File                                      | What it drives                          |
|-------------------------------------------|------------------------------------------|
| `app/content/basics.ts`                   | Hero, About, Contact, social links       |
| `app/content/experience.ts`               | Experience timeline                      |
| `app/content/skills.ts`                   | Skills section                           |
| `app/content/openSource.ts`               | Open Source section                      |
| `app/content/projects.ts`                 | Projects section                         |
| `app/content/education.ts`                | Education section                        |
| `app/content/certifications.ts`           | Certifications section                   |

To swap the resume PDF, replace `public/Sumit_Kumar_Singh_Resume.pdf` — the hero button links to it via `basics.resumeUrl`.

## Deployment to GitHub Pages

`next.config.js` sets `output: 'export'` and `trailingSlash: true`. Deploy `./out` (built by `npm run build`) to your `gh-pages` branch, or use GitHub Actions with the standard `actions/deploy-pages` workflow pointed at `./out`.

## License

[MIT](./LICENSE)

# hgclay.github.io

Hannah Clay's software engineering portfolio. React + Vite + TypeScript + Tailwind CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. The dev server hot-reloads on save.

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Editing content

Almost all of the site's copy lives in one file:

- **`src/data/portfolioData.ts`** — hero text, About Me, experience content, personal projects, skills, and contact info. Edit this to change what the site says.

A few things to fill in there:

- `contact.linkedin` — currently a placeholder, replace with your real LinkedIn URL.
- `resumePath` — points at `public/resume/Hannah-Clay-Resume.pdf`. Swap that file whenever your resume changes (keep the filename, or update the path).

Structure:

- `src/components/` — reusable UI pieces (Hero, Section, ExperienceCard, ProjectCard, SkillBadge, ContactLinks, etc.)
- `src/pages/` — `Home.tsx` (the one-page layout), `NotFound.tsx`
- `src/data/portfolioData.ts` — all content

To add a new professional experience entry, add an item to the `experience` array in `portfolioData.ts` — a card is generated for it on the homepage automatically.

## Deploying to GitHub Pages

This repo deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

**One-time setup** (already a `username.github.io` repo, so it serves from the domain root):

1. On GitHub: **Settings → Pages → Build and deployment → Source** → set to **GitHub Actions**.
2. Push to `main`. The workflow builds the site and publishes it to `https://hgclay.github.io/`.

No `gh-pages` branch or manual deploy step needed — the workflow handles build + publish on each push.

### How routing works on Pages

The site is a single page, but still uses React Router for a clean 404 fallback on unrecognized paths. The build's `postbuild` script copies `dist/index.html` to `dist/404.html`, so GitHub Pages serves the app (and its not-found page) instead of GitHub's default 404 for any unrecognized path.

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [React Router](https://reactrouter.com/) for the not-found fallback
- GitHub Actions for CI/deploy

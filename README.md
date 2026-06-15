# Aria Portfolio

A personal portfolio site built with React + Vite + Tailwind CSS, deployed on GitHub Pages.

## Build & Deploy

- **Build**: `npx vite build` (use `npm run build` if you also need TypeScript type checking)
- **Output**: `dist/` directory
- **GitHub Pages source**: `docs/` directory (configured in repo Settings > Pages > Folder: `/docs`)
- **Deploy flow**:
  ```bash
  npx vite build
  rm -rf docs
  cp -r dist docs
  git add docs/
  git commit -m "update docs"
  git push
  ```
- **Live URL**: `https://cwrachel777-maker.github.io/aria-portfolio/`

## Critical Configuration

These two values **must match** or the site will show a blank page:

1. `vite.config.ts` → `base: '/aria-portfolio/'` — asset path prefix
2. `src/App.tsx` → `<Router basename="/aria-portfolio/">` — React Router path prefix

If deploying to a different subpath, update both accordingly.

## Project Structure

```
src/
  pages/              Page components (Home, AbilityMap, Projects, About, etc.)
  components/common/  Shared components (SectionWrapper, AnimateOnScroll)
  components/project/ Project detail components (UnifiedProjectDetail, ProjectDetailNav, ProjectCard)
  data/               Project data (projects.ts, projectImages.ts)
  hooks/              Custom hooks (useActiveSection, useScrollAnimation)
  assets/             Images (imported via Vite)
docs/                 GitHub Pages deployment directory (copied from dist/, must be committed to git)
```

## Notes

- `docs/` is the deployment source for GitHub Pages — do not delete or gitignore it
- `dist/` is in `.gitignore` — never commit it
- Images in `src/assets/` are processed by Vite at build time
- Scroll animations are handled by `AnimateOnScroll` component using IntersectionObserver (no external animation library)

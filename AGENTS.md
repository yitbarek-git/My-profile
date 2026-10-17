# Portfolio Agent Guide

Static-only Next.js (App Router) → static `out/`, GitHub Pages. `/projects` = separate static route.

## Static-only
- Keep `output:"export"`. No API/route handlers, middleware, server actions, dynamic routes, runtime server features.
- No request-dep rendering, cookies, headers, runtime data fetch.
- Server components OK w/ static build-time inputs only.
- `"use client"` only for browser: audio, theme hydration, pointer/animation/state, events.
- Local checked-in assets. External URLs only for outbound links.
- No CMS/backend/db/runtime source.

## Folders
```text
src/
  app/           globals.css · layout.tsx · page.tsx · projects/page.tsx
  components/
    providers/   sound-provider.tsx
    sections/    hero.tsx · about-me.tsx · projects-preview.tsx · experience.tsx · contact.tsx
  data/          site.ts · projects.ts · experience.ts · social-links.ts
public/
  images/  sounds/
```

## Data & assets
- Replace `src/constants.tsx` with typed `src/data/`: site, projects, experience, social-links.
- `public/images/` (images+SVG), `public/sounds/` (audio).

## GitHub Pages (next.config.ts)
- `output:"export"`, `images.unoptimized`, `trailingSlash`.
- `basePath`+`assetPrefix` via env var; empty OK for local/custom-domain.
- Drop `allowedDevOrigins` unless LAN dev.
- GH Actions builds+publishes `out/`. No Node server; preview statically, not `next start`.

## Order
1. Confirm static route surface
2. Component folders + moves
3. Constants → data modules
4. Organize images/sounds + update refs
5. Home sections + `/projects`
6. GH Pages static paths + deploy docs
7. Update tests, validate export

## Verify
```sh
npm run test:run
npm run lint
npx tsc --noEmit
npm run build
```
With `/projects`: check out/index.html, out/projects/index.html, out/images/*, out/sounds/click.ogg. Serve `out/` statically; verify `/`+`/projects/` load + refresh, base-path assets, metadata/social images, theme hydration, pointer/DitherReveal/sound/mute, external links.

## Forbidden (search src/)
No `use server`, `next/server`, `next/headers`, `cookies()`/`headers()`, API/route handlers, middleware, dynamic request params, request-dep server fetching.

Stay focused: structure + static contract only. No unrequested redesigns/copy/bugfixes.

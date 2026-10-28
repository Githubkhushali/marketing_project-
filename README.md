# Vaidehi Teraiya — Portfolio

A responsive portfolio for Vaidehi Teraiya, built with Vite, React, TypeScript, and Tailwind CSS. The page includes selected design work, six links to original Instagram Reels, a filtered image gallery with keyboard-accessible lightbox, experience, education, skills, and contact details.

## Run locally

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Build and check

```sh
npm run build
npm run preview
```

The production site is a static Vite build in `dist/`. There is no backend or client-side router. TypeScript checking runs as part of the build. The package currently declares a lint command, but ESLint is not included in its dependencies, so that command is unavailable until lint tooling is configured.

## Project structure

- `src/components/` — page sections and gallery/lightbox UI
- `src/data/content.ts` — portfolio copy, verified experience, and project metadata
- `src/hooks/` — scroll reveal helpers
- `src/index.css` — design system, responsive styles, and motion preferences
- `public/assets/photos/` — profile photos
- `public/assets/work/` — design images and the locally available Bitwise video

Add portfolio images to `public/assets/work/` and reference them with `/assets/work/<filename>` paths. Keep source files and filenames matched to references in `src/data/content.ts`.

## Deploy

### Vercel

Import the GitHub repository in Vercel. Use the Vite preset, `npm run build` as the build command, and `dist` as the output directory. No environment variables or rewrite rules are required.

### Netlify

Create a site from the GitHub repository. The build command is `npm run build` and the publish directory is `dist`. No redirect rules are needed because this site uses hash anchors rather than client-side routes.

## Remaining asset

The CV PDF is not present in this project, so the contact section does not offer a download link. Add the verified CV file under `public/` and wire its real path into the contact section when it is available.

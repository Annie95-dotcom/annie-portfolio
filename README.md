# Annie Png — Portfolio starter (GitHub Pages)

## First: publish safely
1. Create a **new public GitHub repository**, e.g. `annie-portfolio-v2` (do not overwrite your current site yet).
2. Upload the **contents of this ZIP** into the repository root: `index.html`, `styles.css`, `script.js`, `work/`, `assets/`.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
4. Open the Pages URL GitHub displays. It may take a few minutes to publish.
5. Once approved, move the contents to your existing GitHub Pages repository or point your domain at the new site.

## Add your real project images
The homepage and case-study pages look for `assets/<project>/hero.webp`. Missing files display designed editorial placeholders, not broken-image icons.

Suggested first uploads:
- `assets/fffa/hero.webp` — crop of your actual IMS dashboard, with names and client details removed
- `assets/propel/hero.webp` — sanitised product UI or prototype
- `assets/univers/hero.webp` — strong original Santiago/Hawaii photo
- `assets/gala/hero.webp` — still from Unimaginable or Bloom stage photo
- `assets/grow/hero.webp` — GROW platform screen from Figma
- `assets/quantum/hero.webp` — Quantum stage photo

For a first pass, export each hero as WebP ~1600px wide, ideally under 400 KB when practical. No need to upload confidential raw Figma files to a public repo.

## Gala video
- `assets/gala/unimaginable-showreel.mp4` — compressed H.264 MP4 (recommended under ~25–50 MB; large videos are better hosted on Vimeo/YouTube and embedded later)
- `assets/gala/unimaginable-poster.webp` — still frame for video poster
- Bloom: photographs only. Waves is deliberately excluded until delivered.

## Important edits before sharing publicly
- Replace `hello@example.com` in `script.js` with your actual public email address.
- Review case-study copy in `work/projects.js` for exact scope, personal ownership, client approval and launch status.
- Remove confidential client names, account details, beneficiary addresses, personally identifiable information, non-public business metrics and proprietary product screens.
- This is a content-and-layout starter. Asset slots inside project pages are placeholders, not completed case studies.

## How the site works
- Pure HTML, CSS and JavaScript. No build tools, npm or local setup.
- `index.html`: homepage.
- `styles.css`: all visual styling, including mobile.
- `script.js`: homepage image loading and email.
- `work/project.html`: reusable case-study page.
- `work/projects.js`: editable case-study text and project definitions.
- All links are relative and work under a GitHub Pages repository subpath.

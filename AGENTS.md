# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

This is the personal site for `yangmingtian.com`, built with Astro and deployed to Cloudflare Workers.

- Framework: Astro
- Runtime/deploy target: Cloudflare Workers via `@astrojs/cloudflare`
- Content source for `/now`:
  - English: `src/content/pages/now.md`
  - Chinese: `src/content/pages/now-zh.md`
- Route implementation: `src/pages/now.astro`

## Common commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

Before committing code or content changes, run:

```bash
npm run build
```

## Content editing rules

When updating the `/now` page:

1. Update both language versions unless explicitly told otherwise.
2. Keep the English page in `src/content/pages/now.md`.
3. Keep the Chinese page in `src/content/pages/now-zh.md`.
4. Keep both versions aligned in meaning, but write each naturally in its own language.
5. Update the visible date at the top of each file.
6. Treat the page as an introduction for first-time visitors, not as a daily work log.
7. Summarize recent activity into durable themes, directions, and categories.
8. Avoid overly specific operational details such as individual record IDs, exact contract numbers, one-off debugging steps, account names, temporary errors, or internal implementation minutiae.
9. Only mention specific examples when they clarify a broader long-term focus.
10. Prefer timeless wording that can stay accurate for weeks, not text that sounds like a status report from today.

Do not edit the root-level `now.md` for the live `/now` page unless the project structure changes. The rendered page uses the files in `src/content/pages/`.

## Style notes

- Keep writing plain, direct, and personal.
- Avoid corporate filler.
- Prefer clear sections and short paragraphs.
- The site should feel like a thoughtful personal website, not a marketing brochure.

## Implementation notes

- `src/pages/now.astro` renders both language versions and switches between them client-side.
- `src/layouts/BaseLayout.astro` contains the shared page layout.
- `astro.config.mjs` configures Cloudflare output and image handling.

## Git hygiene

- Check `git status` before editing.
- Do not overwrite unrelated user changes.
- Keep commits focused and descriptive.
- Build before pushing.

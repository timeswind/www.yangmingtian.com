# www.yangmingtian.com

Personal site for [yangmingtian.com](https://yangmingtian.com), built with [Astro](https://astro.build) and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/).

The `/now` page is sourced from [`src/content/pages/now.md`](./src/content/pages/now.md). Edit that file to update what's shown at `https://yangmingtian.com/now`.

## Develop

```bash
npm install
npm run dev          # Astro dev server (fast iteration)
npm run preview      # Build + run on the local Wrangler runtime
```

## Deploy to Cloudflare

First time only:

```bash
npx wrangler login
```

Then:

```bash
npm run deploy
```

After the first deploy, attach your domain in the Cloudflare dashboard
(Workers & Pages → `www-yangmingtian-com` → Settings → Domains & Routes →
Add Custom Domain → `yangmingtian.com` and `www.yangmingtian.com`),
or uncomment the `[[routes]]` block in `wrangler.toml` and re-deploy.

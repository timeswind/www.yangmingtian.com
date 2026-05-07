// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://yangmingtian.com',
  output: 'server',
  image: {
    service: { entrypoint: 'astro/assets/services/compile' },
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    sessionKVBindingName: 'SESSION',
  }),
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import lingostackDevProxy from './integrations/lingostack-dev-proxy.mjs';

export default defineConfig({
  site: 'https://transla.website',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  integrations: [sitemap(), lingostackDevProxy()],
  server: { port: 4323, allowedHosts: ['host.docker.internal', 'lingostack.local'] },
});

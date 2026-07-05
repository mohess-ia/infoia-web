import { defineConfig } from 'astro/config'

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://infoia.es',
  compressHTML: true,
  output: "hybrid",
  adapter: cloudflare()
})
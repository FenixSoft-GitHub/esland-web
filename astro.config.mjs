import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: false
    },
    fallbackLocale: 'es'
    // localeDir: 'src/locales',
    // runtimeConfig: {
    //   publicDir: '../public',
    // },
  }
});
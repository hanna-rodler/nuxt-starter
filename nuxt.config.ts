// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/eslint'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true,
    },
  ],
  app: {
    head: {
      meta: [
        { name: 'author', content: 'Hanna Rodler' },
        { name: 'msapplication-TileColor', content: '#096509' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      title: 'Hanna Julia Rodler',
      htmlAttrs: {
        lang: 'de',
      },
      /*      link: [
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "android-chrome",
    type: "image/png",
    sizes: "192x192",
    href: "/android-chrome-192x192.png",
  },
  {
    rel: "android-chrome",
    type: "image/png",
    sizes: "512x512",
    href: "/android-chrome-512x512.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
],*/
    },
  },
  runtimeConfig: {
    public: {
      NUXT_ENV_CS_SECRET: process.env.CS_SECRET,
    },
    private: {
      // const SECRET = useRuntimeConfig().private.NUXT_ENV_DB_EXAMPLE;
      NUXT_ENV_DB_EXAMPLE: process.env.NUXT_MONGO_DB_EXAMPLE,
    },
  },
  routeRules: {
    '/': { prerender: true }, // static build site rendering

    // '/blog/**': { swr: 3600 }, // stale-while-revalidation (revalidation in background

    // ISR (Incremental Static Regeneration) - Nur bei bestimmten Hosting-Providern (z.B. Vercel)
    // Ähnlich wie SWR, aber die Revalidierung kann auch durch externe Trigger ausgelöst werden
    // '/news/**': { isr: 60 * 60 }, // Cache für 1 Stunde mit ISR

    // Seiten, die nicht gecacht werden sollen (z.B. Benutzer-spezifisch)
    '/admin/**': { ssr: false, cache: false }, // Client-seitiges Rendern, kein Cache
    '/dashboard': { ssr: false }, // Nur Client-seitig

    // '/assets/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    // '/api/public-data': { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=60' } },
  },
  plugins: [],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
  robots: {
    disallow: ['/example/*'],
    blockNonSeoBots: true,
  },
  sitemap: {
    xslTips: false,
    xslColumns: [
      { label: 'URL', width: '75%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
    ],
    dynamicUrlsApiEndpoint: '/sitemap',
  },
  icon: {
    serverBundle: {
      collections: ['heroicons'],
    },
  },
});

/*
import { useStorage } from 'nitropack/runtime';
export default defineEventHandler(async () => {
  const myCache = useStorage('cache');
  let data = await myCache.getItem('my-custom-data');
  if (!data) {
    data = { date: new Date(), title: 'My title', components: 'Test' }; // fetch
    ;
    await myCache.setItem('my-custom-data', data, { ttl: 60 * 60 }); // Cache für 1 Stunde
  }
  return data;
});*/

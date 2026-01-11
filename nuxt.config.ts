import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/eslint', '@nuxt/image'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      }
    },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    apiKey: '',
    public: {
      apiBase: '',
    },
  },
  vite: {
    plugins: [svgLoader()]
  },
  image: {
    domains: ['cloud.funda.nl']
  },
  routeRules: {
    '/': { swr: 300 },
    '/detail/**': { swr: 900 },
    '/api/listing': { swr: 300 },
    '/api/listing/**': { swr: 900 },
  },
  eslint: {
    config: {
      nuxt: { sortConfigKeys: false },
      typescript: true,
      stylistic: {
        commaDangle: 'only-multiline',
        quoteProps: 'as-needed',
        indent: 2,
        quotes: 'single',
        semi: true,
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
});

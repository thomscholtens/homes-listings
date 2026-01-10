import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/eslint', '@nuxt/image'],
  devtools: { enabled: true },
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

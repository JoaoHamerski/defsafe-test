// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-lodash",
    "@nuxt/test-utils/module",
  ],
  googleFonts: {
    families: {
      Jost: "300..800",
    },
  },
});

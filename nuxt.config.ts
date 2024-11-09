// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["~/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/abstracts/_variables.scss" as *;
            @use "@/assets/styles/abstracts/_mixins.scss" as *;
          `,
          api: "modern-compiler",
        },
      },
    },
  },

  alias: {
    "@Components": "./components",
    "@assets": "./assets",
  },

  modules: ["@nuxt/image"],
});

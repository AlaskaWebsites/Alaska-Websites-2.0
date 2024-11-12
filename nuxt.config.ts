// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
        },
      ],
    },
  },
  alias: {
    "@Components": "./components",
    "@assets": "./assets",
  },
  css: ["~/assets/styles/main.scss"],
  compatibilityDate: "2024-04-03",
  modules: ["@nuxt/image", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/abstracts/_mixins.scss" as *;
            @use "@/assets/styles/abstracts/_variables.scss" as *;
          `,
          api: "modern-compiler",
        },
      },
    },
  },
});

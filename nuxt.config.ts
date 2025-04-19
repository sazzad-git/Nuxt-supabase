export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.postcss",
  },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "ERC Pro | Get Your ERC Now",
      charset: "utf-16",
      meta: [
        { name: "description", content: "See of you qualify for the ERC" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "FirmSalesLLC" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        },
      ],
    },
  },
  css: ["~/assets/css/style.css"],
});

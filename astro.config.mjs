// @ts-check
import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), UnoCSS()],

  vite: {
    plugins: [tailwindcss()],
  },
});

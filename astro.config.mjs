import node from "@astrojs/node";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import { loadEnv } from "vite";

const {
  SITE_URL,
  NODE_ENV,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

const isDev = NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  // output: "server",
  // adapter: node({
  //     mode: "middleware",
  // }),
  integrations: [
    solid(),
    tailwind(),
    sitemap(),
    // partytown({
    //   debug: isDev,
    //   config: {},
    // }),
    astroI18next(),
  ],
});

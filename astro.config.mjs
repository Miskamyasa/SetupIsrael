import image from "@astrojs/image"
import node from "@astrojs/node"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import { loadEnv } from "vite"

const {
  SITE_URL,
  NODE_ENV,
} = loadEnv(import.meta.env.MODE, process.cwd(), "")

const isDev = NODE_ENV === "development"

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  // build: {
  //     format: "directory",
  // },
  // experimental: {
  //     redirects: true,
  // },
  // redirects: {
  //     "/": "/en/",
  // },
  // output: "server",
  // adapter: node({
  //     mode: "middleware",
  // }),
  integrations: [
    solidJs(),
    tailwind(),
    sitemap(),
    partytown({
      debug: isDev,
      config: {},
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
})

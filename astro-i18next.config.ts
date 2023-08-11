import { locales, namespaces } from "./locales";

/** @type {import('astro-i18next').AstroI18nextConfig} */
const config = {
  defaultLocale: locales[0],
  locales,
  namespaces,
  resourcesBasePath: "../locales",
  i18nextServer: {
    // debug: true,
  },
};

export default config;

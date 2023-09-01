import he_common from "./he/common.json";
import he_home from "./he/home.json";
import he_menu from "./he/menu.json";
// import en_common from "./en/common.json";
// import en_menu from "./en/menu.json";
// import ru_common from "./ru/common.json";
// import ru_menu from "./ru/menu.json";

export const locales = [
  "he",
  // "en",
  // "ru",
] as const;

export const translations = {
  he: {
    common: he_common,
    menu: he_menu,
    home: he_home,
  },
  // en: {
  //   common: en_common,
  //   menu: en_menu,
  // },
  // ru: {
  //   common: ru_common,
  //   menu: ru_menu,
  // },
} as const;

export type Locale = typeof locales[number];

export type Translation = typeof translations[Locale];

export const namespaces = Object
  .keys(translations[locales[0]])
  .map((key) => key as keyof Translation);

export const defaultLocale = "en";

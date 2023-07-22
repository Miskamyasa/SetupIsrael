import _ from "lodash";

import englishCommon from "../../locales/en/common.json";
import englishMenu from "../../locales/en/menu.json";


export const locales = ["en"] as const; // , "ru", "he"

export type Locale = typeof locales[number];

const en = {
  common: englishCommon,
  menu: englishMenu,
} as const;

export type Translation = typeof en;

export const translations: Record<Locale, Translation> = {
  en: {
    common: englishCommon,
    menu: englishMenu,
  },
};

export type Scope<T extends Record<string, unknown>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K & string}.${Scope<T[K]> & string}` : never]: unknown
};


function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return locales[0];
}

export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);

  const t = (scope: Scope<Translation>) => {
    return _.get(translations, `${lang}.${scope}`);
  };

  const localizePath = (path: string) => {
    return path;

    // if (lang === locales[0]) return path
    // return `/${lang}${path}`
  };

  return {
    lang,
    t,
    localizePath,
  };
}

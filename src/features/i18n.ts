import { get } from "lodash"

import englishCommon from "../../locales/en/common.json"
import englishMenu from "../../locales/en/menu.json"
import hebrewCommon from "../../locales/he/common.json"
import hebrewMenu from "../../locales/he/menu.json"
import russianCommon from "../../locales/ru/common.json"
import russianMenu from "../../locales/ru/menu.json"


export const locales = ["en", "ru", "he"] as const

export type Locale = typeof locales[number]

const he = {
  common: hebrewCommon,
  menu: hebrewMenu,
} as const

export type Translation = typeof he

export const translations: Record<Locale, Translation> = {
  en: {
    common: englishCommon,
    menu: englishMenu,
  },
  ru: {
    common: russianCommon,
    menu: russianMenu,
  },
  he,
}

export type Scope<T extends Record<string, unknown>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K & string}.${Scope<T[K]> & string}` : never]: unknown
}


function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/")
  if (locales.includes(lang)) {
    return lang as Locale
  }
  return locales[0]
}

export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url)

  const t = (scope: Scope<Translation>) => {
    return get(translations, `${lang}.${scope}`)
  }

  const localizePath = (path: string) => {
    return `/${lang}${path}`
  }

  return {
    lang,
    t,
    localizePath,
  }
}

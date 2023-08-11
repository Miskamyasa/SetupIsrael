import { t } from "i18next";
import { get } from "lodash";
import { Locale, locales, translations, type Translation } from "../../locales";


type Scope<T extends Record<string, unknown>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, unknown>
      ? `${K & string}.${Scope<T[K]> & string}` : never]: unknown
};


function onError(scope: Scope<Translation>, result: unknown, locale: Locale): string {
  const err = JSON.stringify({ locale, scope, result }, null, 2);
  throw Error(`Translations error: \n ${err}`);
}

function checkTranslations(scope: Scope<Translation>): void {
  setTimeout(() => {
    locales.forEach((locale) => {
      const tr: unknown = get(translations[locale], scope);
      if (!tr || typeof tr == "object") {
        onError(scope, tr || "Missing translation", locale);
      }
    });
  }, 1);
}


export function __t(scope: Scope<Translation>) {
  if (import.meta.env.MODE === "development") {
    checkTranslations(scope);
  }
  const [ns, ...keys] = scope.split(".");
  return t(`${ns}:${keys.join(".")}`);
}

// dynamic values
export const __td = (scope: string): string => __t(scope as Scope<Translation>);

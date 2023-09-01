/// <reference types="astro/client" />

/// <reference path="../.astro-i18n/generated.d.ts" />

declare module "astro-i18next" {
  export function localizePath(path: string): string;
}


declare const __DEV__: boolean;

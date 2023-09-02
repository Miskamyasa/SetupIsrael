import { __t, localizePath } from "./i18n";

export const HOME = {
  name: "home",
  label: __t("menu.home"),
  path: localizePath("/"),
} as const;

const ABOUT = {
  name: "about",
  label: __t("menu.about"),
  path: localizePath("/about"),
} as const;

const CONTACT = {
  name: "contact",
  label: __t("menu.contact"),
  path: localizePath("/contact"),
} as const;

const SELFIE = {
  name: "selfie",
  label: __t("menu.selfie"),
  path: localizePath("/selfie"),
} as const;

const EVENTS = {
  name: "events",
  label: __t("menu.events"),
  path: localizePath("/events"),
} as const;

const PRODUCTIONS = {
  name: "productions",
  label: __t("menu.productions"),
  path: localizePath("/productions"),
} as const;

export const headerLinks = [
  SELFIE, EVENTS, PRODUCTIONS, ABOUT, CONTACT,
] as const;

export const footerLinks = [
  SELFIE, EVENTS, PRODUCTIONS,
] as const;

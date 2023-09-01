import { __t } from "../features/i18n";
import type { Service, AvailableServices } from "./types";


const services: Record<AvailableServices, Service> = {
  "selfie": {
    slug: "selfie",
    title: __t("services.selfie.title"),
    description: __t("services.selfie.description"),
    audience: ["personal"],
  },
  "events": {
    slug: "events",
    title: __t("services.events.title"),
    description: __t("services.events.description"),
    audience: ["personal", "mothers"],
  },
  "productions": {
    slug: "productions",
    title: __t("services.productions.title"),
    description: __t("services.productions.description"),
    audience: ["business"],
  },
};

export default services;

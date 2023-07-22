import type { Service, AvailableServices } from "./types";


const services: Record<AvailableServices, Service> = {
  "bat-mitzvah": {
    slug: "batmizvah",
    title: "Bar Mitzvah Birthday Party",
    description: "Celebrate your child's Bar Mitzvah in style and create memories!",
    audience: ["mothers"],
  },
  "party": {
    slug: "party",
    title: "Book personal party",
    description: "Celebrate your child's Bar Mitzvah in style and create memories!",
    audience: ["personal"],
  },
  "corporate": {
    slug: "corporate",
    title: "Business Corporate meet-up",
    description: "Celebrate your child's Bar Mitzvah in style and create memories!",
    audience: ["business"],
  },
};

export default services;

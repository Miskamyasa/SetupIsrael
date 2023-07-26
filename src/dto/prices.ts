import type { AvailablePrices, Price } from "./types";

const prices: Record<AvailablePrices, Price> = {
  regular: {
    slug: "personal",
    price: 60,
    title: "Personal",
    description:
      "Good for anyone who is self-employed and just getting started.",
    bullets: [
      "Different designed sets for photo shoots ",
      "Cool costumes, accessories and masks",
      "Rings and LED lightning (multicolor)",
      "Conference & meeting room",
    ],
  },
  premium: {
    slug: "business",
    price: 60,
    title: "Business",
    description:
      "Good for anyone who is self-employed and just getting started.",
    bullets: [
      "Different designed sets for photo shoots ",
      "Cool costumes, accessories and masks",
      "Rings and LED lightning (multicolor)",
      "Conference & meeting room",
    ],
  },
};


export default prices;

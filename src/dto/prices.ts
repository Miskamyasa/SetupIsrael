import type { AvailablePrices, Price } from "./types";

const prices: Record<AvailablePrices, Price> = {
  regular: {
    slug: "regular",
    price: 60,
    title: "Regular",
    description:
      "Good for anyone who is self-employed and just getting started.",
    bulets: [
      "Different designed sets for photo shoots ",
      "Cool costumes, accessories and masks",
      "Rings and LED lightning (multicolor)",
      "Conference & meeting room",
    ],
  },
  premium: {
    slug: "premium",
    price: 60,
    title: "Premium",
    description:
      "Good for anyone who is self-employed and just getting started.",
    bulets: [
      "Different designed sets for photo shoots ",
      "Cool costumes, accessories and masks",
      "Rings and LED lightning (multicolor)",
      "Conference & meeting room",
    ],
  },
};


export default prices;

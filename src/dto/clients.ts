import type { Clients } from "./types";

const clients: Clients[] = [
  {
    id: 1,
    author: { name: "John", lastName: "Doe" },
    comment:
      "The place is wonderful and full of charm! It has a great aesthetic that pulls" +
      " you in and makes you feel right at home. An unforgettable experience.",
    imageSrc: "/images/1.jpg",
  },
  {
    id: 2,
    author: { name: "Jane", lastName: "Smith" },
    comment:
      "The beauty of this place is unmatched! From the architectural elegance to the breathtaking views," +
      " everything is stunning. A must-visit location!",
    imageSrc: "/images/2.jpg",
  },
  {
    id: 3,
    author: { name: "James", lastName: "Brown" },
    comment:
      "The atmosphere is serene and peaceful. It's the perfect getaway " +
      "from the daily hustle and bustle. Truly a paradise on Earth.",
    imageSrc: "/images/3.jpg",
  },
  {
    id: 4,
    author: { name: "Linda", lastName: "Jones" },
    comment:
      "The location is excellent, central and convenient. You're never too far away " +
      "from anything you need, yet it still feels tranquil and secluded. Perfectly balanced.",
    imageSrc: "/images/4.jpg",
  },
  {
    id: 5,
    author: { name: "Robert", lastName: "Johnson" },
    comment:
      "The place has a great vibe, very welcoming! Everyone is friendly and" +
      " it feels like a close-knit community. It's a home away from home.",
    imageSrc: "/images/5.jpg",
  },
  {
    id: 6,
    author: { name: "Julia", lastName: "Miller" },
    comment:
      "The views from this place are breathtaking. Waking up to such scenes is a delight, " +
      "and it's something I'll always remember. It's nature at its finest.",
    imageSrc: "/images/6.jpg",
  },
  {
    id: 7,
    author: { name: "Richard", lastName: "Davis" },
    comment:
      "A gem of a place! Can't wait to return. The amenities are top-notch and the " +
      "overall ambience is warm and inviting. A stellar experience!",
    imageSrc: "/images/7.jpg",
  },
  {
    id: 8,
    author: { name: "Susan", lastName: "Taylor" },
    comment:
      "One of the best places I've visited, highly recommended. It's the ideal location" +
      " for a vacation or a retreat. A place that truly lives up to the hype.",
    imageSrc: "/images/8.jpg",
  },
];

export default clients;

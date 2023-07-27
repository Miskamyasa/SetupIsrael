import type { Clients } from "./types";

const clients: Clients[] = [
  {
    id: 1,
    author: { name: "John", lastName: "Doe" },
    comment: "The place is wonderful and full of charm!",
    imageSrc: "/images/1.jpg",
  },
  {
    id: 2,
    author: { name: "Jane", lastName: "Smith" },
    comment: "The beauty of this place is unmatched!",
    imageSrc: "/images/2.jpg",
  },
  {
    id: 3,
    author: { name: "James", lastName: "Brown" },
    comment: "The atmosphere is serene and peaceful.",
    imageSrc: "/images/3.jpg",
  },
  {
    id: 4,
    author: { name: "Linda", lastName: "Jones" },
    comment: "The location is excellent, central and convenient.",
    imageSrc: "/images/4.jpg",
  },
  {
    id: 5,
    author: { name: "Robert", lastName: "Johnson" },
    comment: "The place has a great vibe, very welcoming!",
    imageSrc: "/public/images/5.jpg",
  },
  {
    id: 6,
    author: { name: "Julia", lastName: "Miller" },
    comment: "The views from this place are breathtaking.",
    imageSrc: "/public/images/6.jpg",
  },
  {
    id: 7,
    author: { name: "Richard", lastName: "Davis" },
    comment: "A gem of a place! Can't wait to return.",
    imageSrc: "/public/images/7.jpg",
  },
  {
    id: 8,
    author: { name: "Susan", lastName: "Taylor" },
    comment: "One of the best places I've visited, highly recommended.",
    imageSrc: "/images/8.jpg",
  },
];


export default clients;
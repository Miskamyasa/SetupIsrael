import image53 from "../assets/gallery/53.jpg";
import image54 from "../assets/gallery/54.jpg";
import image55 from "../assets/gallery/55.jpg";
import image56 from "../assets/gallery/56.jpg";
import image57 from "../assets/gallery/57.jpg";
import image58 from "../assets/gallery/58.jpg";

export interface CarouselImage {
  src: string
  title: string
  alt: string
}

const carousel: CarouselImage[] = [
  {
    src: image53,
    title: "Mock Title for Image 53",
    alt: "Mock Alt for Image 53",
  },
  {
    src: image58,
    title: "Mock Title for Image 58",
    alt: "Mock Alt for Image 58",
  },
  {
    src: image55,
    title: "Mock Title for Image 55",
    alt: "Mock Alt for Image 55",
  },
  {
    src: image57,
    title: "Mock Title for Image 57",
    alt: "Mock Alt for Image 57",
  },
  {
    src: image56,
    title: "Mock Title for Image 56",
    alt: "Mock Alt for Image 56",
  },
  {
    src: image54,
    title: "Mock Title for Image 54",
    alt: "Mock Alt for Image 54",
  },
];

export default carousel;

import image53 from "../assets/gallery/53.jpg";
import image54 from "../assets/gallery/54.jpg";
import image55 from "../assets/gallery/55.jpg";
import image56 from "../assets/gallery/56.jpg";
import image57 from "../assets/gallery/57.jpg";
import image58 from "../assets/gallery/58.jpg";
// import { useTranslation } from "../i18n/translator"

// const { t } = useTranslation()

export interface CarouselImage {
  src: string
  title: string
  alt: string
}

const carousel: CarouselImage[] = [
  {
    src: image53,
    // title: t("gallery.53.title"),
    // alt: t("gallery.53.alt"),
  },
  {
    src: image58,
    // title: t("gallery.54.title"),
    // alt: t("gallery.54.alt"),
  },
  {
    src: image55,
    // title: t("gallery.55.title"),
    // alt: t("gallery.55.alt"),
  },
  {
    src: image57,
    // title: t("gallery.55.title"),
    // alt: t("gallery.55.alt"),
  },
  {
    src: image56,
    // title: t("gallery.55.title"),
    // alt: t("gallery.55.alt"),
  },
  {
    src: image54,
    // title: t("gallery.55.title"),
    // alt: t("gallery.55.alt"),
  },

];

export default carousel;

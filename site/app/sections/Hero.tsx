import ScrollExpandMedia from "../components/ScrollExpandMedia";
import About from "./About";
import { images } from "../lib/images";

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={images.heroMedia}
      bgImageSrc={images.heroBackground}
      scrollToExpand="Role para explorar"
    >
      <About />
    </ScrollExpandMedia>
  );
}

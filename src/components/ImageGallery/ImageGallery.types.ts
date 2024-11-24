import { Image } from "../../Global.types";

export type GalleryProps = {
  images: Image[];
  onImageClick: (item: Image) => void;
};

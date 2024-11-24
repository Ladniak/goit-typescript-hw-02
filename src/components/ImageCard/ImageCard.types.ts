import { Image } from "../../Global.types";

export type CardProps = {
  item: Image;
  onImageClick: (item: Image) => void;
};

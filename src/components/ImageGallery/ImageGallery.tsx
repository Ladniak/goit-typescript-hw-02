import ImageCard from "../ImageCard/ImageCard";
import module from "./ImageGallery.module.css";
import { GalleryProps } from "./ImageGallery.types";

export const ImageGallery = ({ images, onImageClick }: GalleryProps) => {
  return (
    <ul className={module.imageList}>
      {Array.isArray(images) &&
        images.map((item) => {
          return (
            <li key={item.id}>
              <ImageCard item={item} onImageClick={onImageClick} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;

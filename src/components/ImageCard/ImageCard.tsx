import module from "./ImageCard.module.css";
import { CardProps } from "./ImageCard.types";

const ImageCard = ({ item, onImageClick }: CardProps) => {
  return (
    <div>
      <img
        onClick={() => onImageClick(item)}
        className={module.cardImg}
        src={item.urls.small}
        alt={item.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;

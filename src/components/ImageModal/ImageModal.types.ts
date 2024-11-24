import { Image } from "../../Global.types";

export type ModalProps = {
  modalIsOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedImage: Image | null;
};

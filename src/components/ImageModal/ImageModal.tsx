import Modal from "react-modal";
import { ModalProps } from "./ImageModal.types";
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, setIsOpen, selectedImage }: ModalProps) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          width: "auto",
          transform: "translate(-50%, -50%)",
          padding: "0",
          border: "none",
          background: "transparent",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {selectedImage && selectedImage.urls && (
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100vh",
            objectFit: "contain",
          }}
          src={selectedImage.urls.full}
          alt={selectedImage.alt_description || "Image"}
        />
      )}
    </Modal>
  );
};

export default ImageModal;

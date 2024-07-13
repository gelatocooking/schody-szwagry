import React, { useState } from "react";
import Modal from "react-modal";
import style from "./module-css/Galerry.module.css";

// Konfiguracja domyślnego elementu modalnego
Modal.setAppElement("#root");

interface GalleryInsideProps {
      tab: string[];
      title:string;

}

const GalleryInside: React.FC<GalleryInsideProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [visibleRange, setVisibleRange] = useState([0, 4]); // Początkowy zakres widocznych zdjęć (0 do 4)

  const openModal = (src:string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  const showPrevImages = () => {
    setVisibleRange((prevRange) => {
      const start = Math.max(prevRange[0] - 1, 0);
      const end = Math.max(prevRange[1] - 1, 4);
      return [start, end];
    });
  };

  const showNextImages = () => {
    setVisibleRange((prevRange) => {
      const start = Math.min(prevRange[0] + 1, props.tab.length - 4);
      const end = Math.min(prevRange[1] + 1, props.tab.length);
      return [start, end];
    });
  };

  return (
    <div className={style.yearly}>
      <h3>{props.title}</h3>
      <div className={style.imageContainer}>
        <div className={style.images}>
          {props.tab
            .slice(visibleRange[0], visibleRange[1])
            .map((src, index) => {
              return (
                <img
                  className={style.photo}
                  key={visibleRange[0] + index}
                  src={src}
                  alt={`Image ${visibleRange[0] + index + 1}`}
                  onClick={() => openModal(src)}
                />
              );
            })}
        </div>
        <div className={style.switchButtons}>
          <button onClick={showPrevImages} className={style.scrollButton}>
            cofnij
          </button>

          <button onClick={showNextImages} className={style.scrollButton}>
            dalej
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Fullscreen Image"
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <button onClick={closeModal} className={style.closeButton}>
          Zamknij
        </button>
        <img
          src={selectedImage}
          alt="Fullscreen"
          className={style.fullscreenImage}
        />
      </Modal>
    </div>
  );
};

export default GalleryInside;

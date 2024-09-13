import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./module-css/Galerry.module.css";

Modal.setAppElement("#root");

interface GalleryInsideProps {
  tab: string[];
  title: string;
}

const GalleryInside: React.FC<GalleryInsideProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [visibleRange, setVisibleRange] = useState<[number, number]>([0, visibleCount]);

  const openModal = (src: string) => {
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
      const end = Math.max(prevRange[1] - 1, visibleCount);
      return [start, end];
    });
  };

  const showNextImages = () => {
    setVisibleRange((prevRange) => {
      const start = Math.min(prevRange[0] + 1, props.tab.length - visibleCount);
      const end = Math.min(prevRange[1] + 1, props.tab.length);
      return [start, end];
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = window.innerWidth <= 768 ? 3 : 4;
      setVisibleCount(newVisibleCount);
      setVisibleRange([0, newVisibleCount]);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.gallery}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.imageContainer}>
        <button
          onClick={showPrevImages}
          className={`${style.scrollButton} ${style.leftButton}`}
          aria-label="Pokaż poprzednie zdjęcia"
        >
          ◄
        </button>
        <div className={style.images}>
          {props.tab
            .slice(visibleRange[0], visibleRange[1])
            .map((src, index) => (
              <div
                className={style.imageWrapper}
                key={visibleRange[0] + index}
                onClick={() => openModal(src)}
                role="button"
                tabIndex={0}
                aria-label={`Otwórz zdjęcie ${visibleRange[0] + index + 1}`}
              >
                <img
                  className={style.photo}
                  src={src}
                  alt={`Zdjęcie ${visibleRange[0] + index + 1}`}
                  loading="lazy"
                  srcSet={`${src} 1x, ${src} 2x`}  // Zakładając, że masz wersje w wyższej rozdzielczości
                />
              </div>
            ))}
        </div>
        <button
          onClick={showNextImages}
          className={`${style.scrollButton} ${style.rightButton}`}
          aria-label="Pokaż następne zdjęcia"
        >
          ►
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Fullscreen Image"
        className={style.modal}
        overlayClassName={style.overlay}
        aria={{
          labelledby: "imageTitle",
          describedby: "imageDescription"
        }}
      >
        <button onClick={closeModal} className={style.closeButton} aria-label="Zamknij">
          ×
        </button>
        <img
          src={selectedImage}
          alt="Pełnoekranowe zdjęcie"
          className={style.fullscreenImage}
          id="imageTitle"
        />
      </Modal>
    </div>
  );
};

export default GalleryInside;

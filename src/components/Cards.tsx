import Card from "./Card";
import styles from "./module-css/Card.module.css";
import offert from "../assets/offer.png";
import png from "../assets/projekty/projects-t-1.webp";
import png2 from "../assets/projekty/projects-t-4.webp";
import png3 from "../assets/projekty/projects-t-5.webp";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import camera from "../assets/camera.png";
import contact from "../assets/contact.png";

const Cards = () => {
  const images = [png, png2, png3];
  const [currentBackground, setCurrentBackground] = useState(images[0]);
  const [nextBackground, setNextBackground] = useState(images[1]);
  const [fade, setFade] = useState(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      setFade(true);
      setNextBackground(images[i]);

      setTimeout(() => {
        setCurrentBackground(images[i]);
        setFade(false);
      }, 1000); // Duration must match the CSS transition
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className={styles.cardsSection}>
      <div
        className={`${styles.background} ${styles.backgroundBottom}`}
        style={{ backgroundImage: `url(${currentBackground})` }}
      />
      <div
        className={`${styles.background} ${styles.backgroundTop}`}
        style={{
          backgroundImage: `url(${nextBackground})`,
          opacity: fade ? 1 : 0,
        }}
      />

      <div className={styles.Cards}>
        <Link to="/galeria" aria-label="Zobacz naszą galerię">
          <Card
            name={"Galeria"}
            icon={camera}
            text={
              "Zajrzyj do naszej galerii, aby zobaczyć, jakie schody na zamówienie stworzyliśmy na przestrzeni czasu!"
            }
          />
        </Link>
     
      </div>
    </section>
  );
};

export default Cards;

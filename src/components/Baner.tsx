import React, { useState, useEffect } from 'react';
import styles from "./module-css/Baner.module.scss";
import baner1 from '../assets/projekty/projects-d-2.webp';
import baner2 from '../assets/projekty/projects-d-4.webp';
import baner3 from '../assets/projekty/projects-d-5.webp';

const banerData = [
  {
    image: baner1,
    title: "Idealne dla Twojego Domu!",
    description: "Ponad 15 lat doświadczenia.",
  },
  {
    image: baner2,
    title: "Styl i Elegancja w Twoim Domu",
    description: "Nowoczesne wzornictwo.",
  },
  {
    image: baner3,
    title: "Bezpieczeństwo i Trwałość",
    description: "Najwyższa jakość materiałów.",
  },
];

const Baner = () => {
  const [currentBaner, setCurrentBaner] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Rozpocznij animację fade-out
      setTimeout(() => {
        setCurrentBaner((prev) => (prev + 1) % banerData.length);
        setFadeIn(true); // Rozpocznij animację fade-in
      }, 1000); // Długość fade-out (1s) przed zmianą obrazu
    }, 7000); // Zmiana banera co 7 sekund

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.banerSection} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>

      <img
        src={banerData[currentBaner].image}
        alt={banerData[currentBaner].title}
        className={styles.banerImage}
        loading="lazy"
        srcSet={`
        ${banerData[currentBaner].image} 480w,
        ${banerData[currentBaner].image} 800w,
        ${banerData[currentBaner].image} 1200w
        `}
        sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
        />
       
      <div className={styles.info}>
        <div className={styles.text}>
          <h2>{banerData[currentBaner].title}</h2>
          <p>{banerData[currentBaner].description}</p>
        </div>
        <a className={styles.aButton} href="tel:+48 661 922 181" aria-label="Zadzwoń teraz">
          <span>Zadzwoń teraz</span>
        </a>
      </div>
    </section>
  );
};

export default Baner;

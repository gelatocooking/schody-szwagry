import React from 'react';
import { FaTools, FaCogs } from 'react-icons/fa'; // Importujemy ikony
import styles from './module-css/TechnologySection.module.css';

export const TechnologySection: React.FC = () => {
  return (
    <section className={styles.technologySection}>
      <h2 className={styles.heading}>Nowoczesne Technologie w Produkcji Schodów Drewnianych</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <FaCogs className={styles.icon} />
          <p>Nasza firma wykorzystuje najnowocześniejsze technologie, aby zapewnić najwyższą jakość i precyzję produkcji. Dzięki temu nasze schody są trwałe, estetyczne i funkcjonalne.</p>
        </div>
        <div className={styles.video}>
          <FaTools className={styles.icon} />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/example" // Example video link
            title="Technologia produkcji"
            frameBorder="0"
            allowFullScreen
            className={styles.videoFrame}
          />
        </div>
      </div>
    </section>
  );
};

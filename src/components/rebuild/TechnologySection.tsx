import React from 'react';
import { FaTools, FaCogs } from 'react-icons/fa'; // Importujemy ikony
import styles from './module-css/TechnologySection.module.css';
import png from '../../assets/1.jpg'

export const TechnologySection: React.FC = () => {
  return (
    <section className={styles.technologySection}>
      <h2 className={styles.heading}>Nowoczesne Technologie w Produkcji Schodów Drewnianych</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <FaCogs className={styles.icon} />
          <p>Nasza firma wykorzystuje najnowocześniejsze technologie, aby zapewnić najwyższą jakość i precyzję produkcji. Dzięki temu nasze schody są trwałe, estetyczne i funkcjonalne.</p>
        </div>
        <div className={styles.image}>
          {/* <FaTools className={styles.icon} /> */}
          <img className={styles.videoFrame} src={png} alt="Schody drewniane" width="450" height="600" />
        </div>
      </div>
    </section>
  );
};

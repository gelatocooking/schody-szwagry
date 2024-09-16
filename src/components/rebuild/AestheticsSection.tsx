import React from 'react';
import { FaTree, FaCogs, FaShapes } from 'react-icons/fa'; // Import ikon
import styles from './module-css/AestheticsSection.module.css';
import png1 from '../../assets/projekty/projects-d-4.webp';
import png2 from '../../assets/projekty/projects-t-4.webp';
import png3 from '../../assets/projekty/projects-d-5.webp';

export const AestheticsSection: React.FC = () => {
  return (
    <section className={styles.aestheticsSection}>
      <h2 className={styles.heading}>Estetyka Schodów Drewnianych – Naturalne Piękno Drewna w Twoim Domu</h2>
      <div className={styles.grid}>
        <div className={styles.style}>
          <FaTree className={styles.icon} />
          <img src={png1} alt="Nowoczesne Schody Drewniane" width="300" height="200" />
          <h3>Nowoczesne Schody Drewniane</h3>
        </div>
        <div className={styles.style}>
          <FaCogs className={styles.icon} />
          <img src={png2} alt="Klasyczne Schody Drewniane" width="300" height="200" />
          <h3>Klasyczne Schody Drewniane</h3>
        </div>
        <div className={styles.style}>
          <FaShapes className={styles.icon} />
          <img src={png3} alt="Połączenie Drewna z Metalem" width="300" height="200" />
          <h3>Połączenie Drewna z Innych Materiałami</h3>
        </div>
      </div>
    </section>
  );
};

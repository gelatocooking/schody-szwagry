import React from 'react';
import { FaLeaf, FaPaintBrush, FaTree, FaExpandArrowsAlt } from 'react-icons/fa';
import styles from './module-css/WhyChooseWood.module.css';
import photo from '../../assets/projekty/projects-d-2.webp';

export const WhyChooseWood: React.FC = () => {
  return (
    <section className={styles.whyChooseWood} aria-labelledby="wood-section-title">
      <div className={styles.content}>
        {/* Tekst opisujący zalety schodów drewnianych */}
        <div className={styles.text}>
          <h2 id="wood-section-title">Dlaczego Wybrać Schody Drewniane?</h2>
          <ul className={styles.benefitsList}>
            <li>
              <FaTree className={styles.icon} />
              <span>Trwałość</span>
            </li>
            <li>
              <FaPaintBrush className={styles.icon} />
              <span>Estetyka</span>
            </li>
            <li>
              <FaLeaf className={styles.icon} />
              <span>Wpływ na środowisko</span>
            </li>
            <li>
              <FaExpandArrowsAlt className={styles.icon} />
              <span>Wszechstronność w designie</span>
            </li>
          </ul>
        </div>

        {/* Sekcja z obrazem */}
        <div className={styles.image}>
          <img
            src={photo}
            alt="Piękne, trwałe drewniane schody"
            loading="lazy"
            className={styles.imgWithAnimation}
          />
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { FaBroom, FaTint, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Dodajemy ikony strzałek
import styles from './module-css/MaintenanceTips.module.css';

export const MaintenanceTips: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.maintenanceTips}>
      <h2 className={styles.heading}>Konserwacja Schodów Drewnianych – Jak Dbać o Drewno, by Służyło na Lata</h2>
      <div className={styles.accordion}>
        <div className={`${styles.tip} ${activeIndex === 0 ? styles.active : ''}`} onClick={() => toggleAccordion(0)}>
          <div className={styles.header}>
            <FaBroom className={styles.icon} />
            <h3>Regularne Czyszczenie</h3>
            {activeIndex === 0 ? <FaChevronUp className={styles.arrowIcon} /> : <FaChevronDown className={styles.arrowIcon} />}
          </div>
          <div className={`${styles.content} ${activeIndex === 0 ? styles.open : ''}`}>
            <p>Schody drewniane wymagają regularnego czyszczenia, aby zachować ich wygląd i trwałość. Używaj odpowiednich środków do drewna.</p>
          </div>
        </div>

        <div className={`${styles.tip} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => toggleAccordion(1)}>
          <div className={styles.header}>
            <FaTint className={styles.icon} />
            <h3>Ochrona przed Wilgocią</h3>
            {activeIndex === 1 ? <FaChevronUp className={styles.arrowIcon} /> : <FaChevronDown className={styles.arrowIcon} />}
          </div>
          <div className={`${styles.content} ${activeIndex === 1 ? styles.open : ''}`}>
            <p>Zabezpieczaj drewno przed wilgocią, która może powodować odkształcenia i uszkodzenia. Unikaj stosowania nadmiaru wody przy czyszczeniu.</p>
          </div>
        </div>

        <div className={`${styles.tip} ${activeIndex === 2 ? styles.active : ''}`} onClick={() => toggleAccordion(2)}>
          <div className={styles.header}>
            <FaStar className={styles.icon} />
            <h3>Polerowanie i Woskowanie</h3>
            {activeIndex === 2 ? <FaChevronUp className={styles.arrowIcon} /> : <FaChevronDown className={styles.arrowIcon} />}
          </div>
          <div className={`${styles.content} ${activeIndex === 2 ? styles.open : ''}`}>
            <p>Regularne woskowanie i polerowanie schodów drewnianych pomoże utrzymać ich połysk i dodatkowo zabezpieczy powierzchnię.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

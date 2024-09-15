import React from 'react';
import { FaClipboardList, FaCogs, FaHammer } from 'react-icons/fa'; // Import ikon
import styles from './module-css/ProcessSection.module.css';

export const ProcessSection: React.FC = () => {
  return (
    <section className={styles.processSection}>
      <h2 className={styles.heading}>Proces Tworzenia Schodów Drewnianych – Od Projektu do Montażu</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <FaClipboardList className={styles.icon} />
          <h3>Konsultacje i Projektowanie</h3>
        </div>
        <div className={styles.step}>
          <FaCogs className={styles.icon} />
          <h3>Produkcja i Obróbka Drewna</h3>
        </div>
        <div className={styles.step}>
          <FaHammer className={styles.icon} />
          <h3>Profesjonalny Montaż Schodów</h3>
        </div>
      </div>
    </section>
  );
};

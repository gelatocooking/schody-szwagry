import React from 'react';
import { FaMedal, FaThumbsUp, FaShieldAlt } from 'react-icons/fa'; // Import ikon
import styles from './module-css/WhyChooseUs.module.css';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.heading}>Dlaczego Warto Wybrać Naszą Firmę jako Producenta Schodów Drewnianych?</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <FaMedal className={styles.icon} />
          <h3>Wieloletnie Doświadczenie i Profesjonalizm</h3>
        </div>
        <div className={styles.feature}>
          <FaThumbsUp className={styles.icon} />
          <h3>Opinie Zadowolonych Klientów</h3>
        </div>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.icon} />
          <h3>Gwarancja Jakości i Terminowości</h3>
        </div>
      </div>
    </section>
  );
};

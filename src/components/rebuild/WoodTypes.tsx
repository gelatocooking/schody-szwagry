import React from 'react';
import styles from './module-css/WoodTypes.module.css';
import { FaTree, FaLeaf, FaSeedling } from 'react-icons/fa'; // Import ikon
import image from '../../assets/projekty/projects-d-5.webp';
import image1 from '../../assets/projekty/projects-t-3.webp';
import image2 from '../../assets/projekty/projects-t-5.webp';

export const WoodTypes: React.FC = () => {
  return (
    <section className={styles.woodTypes}>
      <h2>Rodzaje Drewna Używane do Produkcji Schodów</h2>
      <div className={styles.grid}>
        <article className={styles.woodType}>
          <div className={styles.iconWrapper}>
            <FaTree className={styles.icon} />
          </div>
          <img
            src={image}
            alt="Dąb – Synonim Trwałości i Elegancji"
            loading="lazy"
          />
          <h3>Dąb – Synonim Trwałości i Elegancji</h3>
          <p>
            Dąb jest ceniony za swoją wyjątkową trwałość i elegancki wygląd, co
            czyni go idealnym wyborem dla schodów o wysokim standardzie.
          </p>
        </article>
        <article className={styles.woodType}>
          <div className={styles.iconWrapper}>
            <FaLeaf className={styles.icon} />
          </div>
          <img
            src={image1}
            alt="Jesion – Idealny dla Miłośników Naturalnego Uroku"
            loading="lazy"
          />
          <h3>Jesion – Idealny dla Miłośników Naturalnego Uroku</h3>
          <p>
            Jesion charakteryzuje się pięknym usłojeniem i jasnym kolorem,
            dodając wnętrzom naturalnego uroku i lekkości.
          </p>
        </article>
        <article className={styles.woodType}>
          <div className={styles.iconWrapper}>
            <FaSeedling className={styles.icon} />
          </div>
          <img
            src={image2}
            alt="Sosna – Ekonomiczna i Praktyczna Opcja"
            loading="lazy"
          />
          <h3>Sosna – Ekonomiczna i Praktyczna Opcja</h3>
          <p>
            Sosna to doskonały wybór dla osób poszukujących ekonomicznego
            rozwiązania bez kompromisów w kwestii jakości.
          </p>
        </article>
      </div>
    </section>
  );
};

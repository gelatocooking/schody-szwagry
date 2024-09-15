import React, { FC } from 'react';
import styles from './module-css/HeroSection.module.css';
import heroImage from '../../assets/projekty/projects-t-1.webp'
export const HeroSection: FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Schody Drewniane – piękne i funkcjonalne drewniane schody"
        className={styles.heroImage}
        loading="lazy" // Defer loading for better performance
      />

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1 id="hero-heading" className={styles.title}>
          Schody Drewniane – Piękno, Trwałość i Funkcjonalność od Najlepszego Producenta
        </h1>

        {/* CTA Button */}
        <a
          href="#whywood"
          className={styles.ctaButton}
          aria-label="Sprawdź naszą ofertę schodów drewnianych"
        >
          Sprawdź naszą ofertę
        </a>
      </div>
    </section>
  );
};

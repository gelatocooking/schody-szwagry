import React from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import ikon
import styles from './module-css/ContactSection.module.css';

export const ContactSection: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Kontakt i Informacje o Naszej Firmie</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          <FaUser className={styles.icon} /> Imię i nazwisko:
          <input type="text" name="name" className={styles.input} />
        </label>
        <label className={styles.label}>
          <FaEnvelope className={styles.icon} /> Email:
          <input type="email" name="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          <FaEnvelope className={styles.icon} /> Wiadomość:
          <textarea name="message" className={styles.textarea}></textarea>
        </label>
        <button type="submit" className={styles.button}>Wyślij</button>
      </form>
      <div className={styles.details}>
        <p>
          <FaPhone className={styles.icon} /> Telefon: +48 123 456 789
        </p>
        <p>
          <FaEnvelope className={styles.icon} /> Email: kontakt@schodydrewniane.pl
        </p>
      </div>
    </section>
  );
};

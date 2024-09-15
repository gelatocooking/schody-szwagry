import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './module-css/ContactSection.module.css';
import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Używamy EmailJS do wysyłki wiadomości
    emailjs
      .send(
        'service_toqffjg', // Usługa EmailJS, którą skonfigurowałeś
        'template_9368w77', // Szablon EmailJS
        {
          from_name: formData.name, // Dopasowanie do zmiennej {{from_name}} w szablonie
          from_email: formData.email, // Dopasowanie do zmiennej {{from_email}} w szablonie
          message: formData.message, // Dopasowanie do zmiennej {{message}} w szablonie
        },
        'tArdK31xexgAP4rGa' // Twój User ID z EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage('Wiadomość została wysłana!');
        },
        (error) => {
          console.log(error.text);
          setResponseMessage('Błąd podczas wysyłania wiadomości');
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Kontakt i Informacje o Naszej Firmie</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          <FaUser className={styles.icon} /> Imię i nazwisko:
          <input
            type="text"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          <FaEnvelope className={styles.icon} /> Email:
          <input
            type="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.label}>
          <FaEnvelope className={styles.icon} /> Wiadomość:
          <textarea
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit" className={styles.button}>Wyślij</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      <div className={styles.details}>
       <a href='tel:+48661922181'>
         <p>
          <FaPhone className={styles.icon} /> Telefon: +48 661 922 181
        </p>
        </a>
        <p>
          <FaEnvelope className={styles.icon} /> Email: schodyszwagry@proton.me
        </p>
      </div>
    </section>
  );
};

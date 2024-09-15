import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Dodajemy ikony
import styles from './module-css/FAQSection.module.css';

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Najczęściej Zadawane Pytania (FAQ)</h2>
      <div className={styles.faq}>
        <div className={styles.question} onClick={() => toggleFAQ(0)}>
          <h3>Jakie drewno najlepiej sprawdzi się w moim domu?</h3>
          {activeIndex === 0 ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
          <div className={`${styles.answer} ${activeIndex === 0 ? styles.open : ''}`}>
            <p>
              Wybór drewna zależy od stylu, w jakim utrzymane jest Twoje wnętrze. Dąb i jesion są popularne ze względu na
              trwałość i estetykę.
            </p>
          </div>
        </div>
        <div className={styles.question} onClick={() => toggleFAQ(1)}>
          <h3>Jak długo trwa proces produkcji schodów?</h3>
          {activeIndex === 1 ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
          <div className={`${styles.answer} ${activeIndex === 1 ? styles.open : ''}`}>
            <p>
              Proces produkcji schodów drewnianych trwa zazwyczaj od 4 do 6 tygodni, w zależności od skomplikowania projektu.
            </p>
          </div>
        </div>
        <div className={styles.question} onClick={() => toggleFAQ(2)}>
          <h3>Jakie są koszty produkcji schodów drewnianych?</h3>
          {activeIndex === 2 ? <FaChevronUp className={styles.icon} /> : <FaChevronDown className={styles.icon} />}
          <div className={`${styles.answer} ${activeIndex === 2 ? styles.open : ''}`}>
            <p>
              Koszty produkcji zależą od rodzaju drewna, złożoności projektu i wykończeń. Można jednak przyjąć, że średni
              koszt to X zł.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from "react";
import styles from "./module-css/Info.module.css";

interface InfoProps {
  header: string;
  src: string;
  srcSet?: string;  // Opcjonalny props do przekazania srcset
  sizes?: string;   // Opcjonalny props do przekazania sizes
  text: string;
}

const Info: React.FC<InfoProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      className={`${styles.infosec} ${isVisible ? styles.visible : styles.hidden}`}
      ref={ref}
    >
      <div className={styles.info}>
        <h1>{props.header}</h1>
        <p className={styles.text}>{props.text} </p>
      </div>
      <div className={styles.imgDiv}>
        <img 
          src={props.src} 
          srcSet={props.srcSet}
          sizes={props.sizes}
          alt="Info Image" 
          loading="lazy"  // Lazy loading
        />
      </div>
    </section>
  );
};

export default Info;

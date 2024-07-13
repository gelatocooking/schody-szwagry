import styles from "./module-css/Baner.module.scss";
const Baner = () => {
  return (
    <section className={styles.banerSection}>
      <div className={styles.info}>
        {" "}
        <div className={styles.text}>
          <h1>Idealne Schody dla Twojego Domu!</h1>
          <p>
            Ponad <strong>15 lat </strong>doświadczenia.
          </p>
          {/* <div className={styles.scrollArrow}>
        <span>Scrolluj w dół</span>
      <div className={styles.arrow}></div></div> */}
        </div>
      <a className={styles.aButton} href="tel:+48 661 922 181">
        <span>Zadzwon teraz</span>
      </a>
        

      </div>
      


      {/* <div className={styles.img}></div> */}
    </section>
  );
};
export default Baner;

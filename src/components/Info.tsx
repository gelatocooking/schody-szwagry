import styles from "./module-css/Info.module.css";
import png from "../assets/projects-1.jpg";
import png2 from "../assets/projects-4.jpg";

interface InfoProps {
      header:string;
      src:string;
      text:string;


}

const Info: React.FC<InfoProps> = (props) => {
  return (
    <section className={styles.infosec}>
      <div className={styles.info}>
        <h1>{props.header}</h1>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className={styles.imgDiv}>
        <img src={props.src}></img>
      </div>
    </section>
  );
};
export default Info;

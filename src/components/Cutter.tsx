import styles from "./module-css/Baner.module.scss";

interface CutterProps {
  text: string;
}

const Cutter: React.FC<CutterProps> = ({ text }) => {
  return (
    <div className={styles.header}>
      <h1>{text}</h1>
    </div>
  );
};

export default Cutter;

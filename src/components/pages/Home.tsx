import styles from "../module-css/Home.module.css";
import Baner from "../Baner";
import Info from "../Info";
import png from "../../assets/projects-4.jpg";
import png2 from "../../assets/projects-5.jpg";
import Cards from "../Cards";
import Sidebar from "../Sidebar";
// import styles from "./module-css/Home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Baner />
      <Info
        src={png}
        header={`Wysoka Jakość i Precyzja w Każdym Detalu

        `}
        text="W naszej firmie schody to nie tylko funkcjonalny element, ale także kluczowy komponent estetyki wnętrza. Stawiamy na wyjątkową precyzję i dokładność w każdym projekcie, aby każdy szczegół spełniał najwyższe standardy jakości. Nasze schody charakteryzują się nie tylko trwałością, ale również elegancją, która wzbogaca każde wnętrze."
      />
      <Info
        src={png2}
        header={`Terminowość i Bezpośredni Kontakt 

        `}
        text={`Cenimy sobie terminowość i rzetelność w realizacji zleceń, dzięki czemu możesz być pewien, że Twoje schody będą gotowe na czas. Nasz bezpośredni kontakt z klientem, gdzie każdą fazę projektu omawiasz z wykonawcą, gwarantuje pełne zadowolenie i dostosowanie do Twoich potrzeb.`}
      />
      <Cards />
      {/* <Socials /> */}
    </div>
  );
};
export default Home;

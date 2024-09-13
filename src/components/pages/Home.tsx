import styles from "../module-css/Home.module.css";
import Baner from "../Baner";
import Info from "../Info";
import png from "../../assets/projects-4.webp";
import png2 from "../../assets/projects-5.webp";
import Cards from "../Cards";
import Sidebar from "../Sidebar";
// import styles from "./module-css/Home.module.css";
import Cutter from "../Cutter";
const Home = () => {
  return (
    <main className={styles.home}>
      <Sidebar />
      <Baner />
      <Cutter
      text="Schody na wymiar, drewniane - tradycyjne i nowoczesne" />
      <Info
        src={png}
        header="Wysoka Jakość i Precyzja w Każdym Detalu"
        text="W naszej firmie schody to nie tylko funkcjonalny element, ale także kluczowy komponent estetyki wnętrza. Nasze schody drewniane, zarówno nowoczesne, jak i tradycyjne, są synonimem elegancji i trwałości. Każdy projekt jest realizowany z wyjątkową precyzją i dbałością o najmniejszy szczegół, co gwarantuje spełnienie najwyższych standardów jakości. Oferujemy schody na wymiar, które doskonale wpasowują się w każde wnętrze, dodając mu wyjątkowego charakteru i klasy."
      />
      <Info
        src={png2}
        header="Terminowość i Bezpośredni Kontakt"
        text="Cenimy sobie terminowość i rzetelność w realizacji zleceń. Nasz zespół doskonale rozumie, jak ważne jest, aby projekt był gotowy na czas. Dzięki naszemu bezpośredniemu kontaktowi z klientem, masz pewność, że Twoje schody – niezależnie od tego, czy wybierzesz nowoczesne schody drewniane, czy też bardziej tradycyjne rozwiązania – będą idealnie dostosowane do Twoich potrzeb. Każda faza projektu jest szczegółowo omawiana z wykonawcą, co gwarantuje pełne zadowolenie i zgodność z Twoimi oczekiwaniami."
      />
        
      <Cards />
    </main>
  );
};

export default Home;

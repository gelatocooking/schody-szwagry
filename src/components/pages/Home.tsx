import styles from "../module-css/Home.module.css";
import Baner from "../Baner";
import Info from "../Info";
import png from "../../assets/projects-4.webp";
import png2 from "../../assets/projects-5.webp";
import Cards from "../Cards";
import Sidebar from "../Sidebar";
// import styles from "./module-css/Home.module.css";
import Cutter from "../Cutter";
import { HeroSection } from "../rebuild/HeroSection";
import { WhyChooseWood } from "../rebuild/WhyChooseWood";
import { WoodTypes } from "../rebuild/WoodTypes";
import { ProcessSection } from "../rebuild/ProcessSection";
import { TechnologySection } from "../rebuild/TechnologySection";
import { MaintenanceTips } from "../rebuild/MaintenanceTips";
import { AestheticsSection } from "../rebuild/AestheticsSection";
import { WhyChooseUs } from "../rebuild/WhyChooseUs";
import { FAQSection } from "../rebuild/FAQSection";
import { ContactSection } from "../rebuild/ContactSection";
const Home = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <WhyChooseWood />
      <WoodTypes />
      <ProcessSection />
      <TechnologySection />
      <MaintenanceTips />
      <AestheticsSection />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Home;

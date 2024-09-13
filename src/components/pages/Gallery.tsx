import style from "../module-css/Galerry.module.css";
import projectsd1 from '../../assets/projekty/projects-d-1.webp';
import projectsd2 from '../../assets/projekty/projects-d-2.webp';
import projectsd3 from '../../assets/projekty/projects-d-3.webp';
import projectsd4 from '../../assets/projekty/projects-d-4.webp';
import projectsd5 from '../../assets/projekty/projects-d-5.webp';
import projectst1 from '../../assets/projekty/projects-t-1.webp';
import projectst2 from '../../assets/projekty/projects-t-2.webp';
import projectst3 from '../../assets/projekty/projects-t-3.webp';
import projectst4 from '../../assets/projekty/projects-t-4.webp';
import projectst5 from '../../assets/projekty/projects-t-5.webp';
import GalleryInside from "../GalerryInside";
import SocialLinks from "../Socials";

import Cutter from '../Cutter'
const Gallery = () => {
  const gallery2022 = [projectsd1, projectsd2, projectsd3, projectsd4, projectsd5];
  const gallery2023 = [projectst1, projectst2, projectst3, projectst4, projectst5];

  return (
    <main className={style.galleryMain}>
      <section className={style.gallery}>
        <GalleryInside title="Schody Dywanowe" tab={gallery2022} />
        <GalleryInside title="Schody Tradycyjne" tab={gallery2023} />
      </section>
      <Cutter 
      text="Producent schodów na zamówienie - Wrocław i okolice."/>
      <SocialLinks />
    </main>
  );
};

export default Gallery;

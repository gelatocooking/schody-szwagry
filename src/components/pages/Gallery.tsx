import style from "../module-css/Galerry.module.css";
import png from "../../assets/projects-2.jpg";
import png2 from "../../assets/projects-2.jpg";
import png3 from "../../assets/projects-3.jpg";
import GalleryInside from "../GalerryInside";
import Sidebar from "../Sidebar";
// import png from "../../assets/";

const Gallery = () => {
  const gallery2022 = [png, png2, png3, png, png2, png3, png, png2, png3];
  const gallery2023 = [png, png2, png3, png, png2, png3, png, png2, png3];
  const gallery2024 = [png, png2, png3, png, png2, png3, png, png2, png3];
  return (
    <section>
      <Sidebar />
      <section className={style.gallery}>
        <GalleryInside title="Schody Dywanowe" tab={gallery2022} />
        <GalleryInside title="Schody Tradyjne" tab={gallery2023} />
        {/* <GalleryInside year="2022" tab={gallery2024} /> */}
      </section>
      {/* <Socials /> */}
    </section>
  );
};
export default Gallery;

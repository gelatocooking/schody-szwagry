import React from "react";
import styles from "./module-css/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a
        className={styles.sidebarItem}
        href="https://www.facebook.com/schodyszwagry/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odwiedź nas na Facebooku"
        title="Facebook"
      >
        Facebook
      </a>
      <a
        className={styles.sidebarItem}
        href="https://instagram.com/schodyszwagry"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Odwiedź nas na Instagramie"
        title="Instagram"
      >
        Instagram
      </a>
      <a
        className={styles.sidebarItem}
        href="tel:+48661922181"
        aria-label="Zadzwoń do nas"
        title="Zadzwoń"
      >
        📞 Zadzwoń
      </a>
    </div>
  );
};

export default Sidebar;

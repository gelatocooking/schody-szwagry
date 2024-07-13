// src/components/Sidebar.js
import React from "react";
import styles from "./module-css/Sidebar.module.css";

import { useEffect, useState } from "react";
const Sidebar = () => {
  const [move, setMove] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setMove(true);
      // i = (i + 1) % images.length;
    }, 5000); // Change background every 5 seconds
    setMove(false);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem} id="facebook">
        <a href="">FB</a>
      </div>
      <div className={styles.sidebarItem} id="instagram">
        <a href="">IG</a>
      </div>
      <div className={styles.sidebarItem} id="phone">
        <a href="tel:">📞 Zadzwoń</a>
      </div>
    </div>
  );
};

export default Sidebar;

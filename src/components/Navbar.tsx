// REUSABLE COMPONENT NAVBAR
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./module-css/Navbar.module.css";
import logo from "../assets/logo.png";
import classNames from 'classnames';

const Navbar = React.memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  },[]);
  
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <header>
      <nav>
        <Link to="/" className={`${styles.logoContainer} ${styles.fadeIn}`}>
          <img
            src={logo}
            alt="Logo"
            className={`${styles.logo} ${styles.fadeIn}`}
          />
          {/* CHANGE LOGO TEXT HERE  */}
          {/* <span className={styles.logoText}>
            Schody<strong>Szwagry</strong>
          </span>{" "} */}
        </Link>
        {/* <button
          id="toggleNav"
          className={classNames(styles.hamburger, styles.fadeIn, {
            [styles.off]: isOpen,
            [styles.walkIn]: isOpen
          })}
          onClick={toggleMenu}
        >
          <span>☰</span>
        </button> */}
        {/* <ul */}
          {/* className={`${styles.navList} ${styles.fadeIn} ${ */}
            {/* isOpen ? `${styles.show} ${styles.walkIn}` : "" */}
          {/* }`} */}
        {/* > */}
          {/* <li onClick={handleLinkClick} className={styles.link}> */}
            {/* <Link to="/">Głowna</Link> */}
          {/* </li> */}
          {/* <li onClick={handleLinkClick} className={styles.link}> */}
            {/* <Link to="/galeria">Galeria</Link> */}
          {/* </li> */}
          {/* <li onClick={handleLinkClick} className={styles.link}>
            <Link to="/kontakt">Kontakt</Link>
          </li> */}
        {/* </ul> */}
      </nav>
    </header>
  );
});

export default Navbar;

import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./module-css/Navbar.module.css";
import logo from "../assets/logo.webp";
import classNames from 'classnames';

const Navbar = React.memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logoContainer} aria-label="Home">
          <img
            src={logo}
            alt="Stairway Logo"
            className={classNames(styles.logo, styles.logoStairway)}
            loading="lazy"
          
          />
        </Link>
       
      </nav>
    </header>
  );
});

export default Navbar;

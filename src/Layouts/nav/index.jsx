import React, { useState } from "react";
import styles from "./style.module.scss";

import logo from "../../Components/Icons/logo.png";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="#home">HOME</a>
        <a href="#services">CLOTHES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>

      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.icons}></div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleDrawer}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Drawer */}
      <div
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        onClick={toggleDrawer}
      >
        <div className={styles.drawerContent}>
          <a href="#home" onClick={toggleDrawer}>
            Home
          </a>
          <a href="#about" onClick={toggleDrawer}>
            About
          </a>
          <a href="#services" onClick={toggleDrawer}>
            Clothes
          </a>
          <a href="#contact" onClick={toggleDrawer}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

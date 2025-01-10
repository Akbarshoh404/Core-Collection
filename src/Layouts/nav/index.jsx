import React, { useState } from "react";
import styles from "./style.module.scss";

import { Link } from "react-router-dom";

import logo from "../../Components/Icons/logo.png";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/clothes">
          Clothes
        </Link>
        <Link to="/contact">
          Contact
        </Link>
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
          <Link to="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link to="/about" onClick={toggleDrawer}>
            About
          </Link>
          <Link to="/clothes" onClick={toggleDrawer}>
            Clothes
          </Link>
          <Link to="/contact" onClick={toggleDrawer}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

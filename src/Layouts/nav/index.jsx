import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "../../Components/Icons/logo.png";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTranslation } from "react-i18next";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const { t, i18n } = useTranslation();
  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/" onClick={toggleDrawer}>
          {t("home")}
        </Link>
        <Link to="/about" onClick={toggleDrawer}>
          {t("about")}
        </Link>
        <Link to="/clothes" onClick={toggleDrawer}>
          {t("clothes")}
        </Link>
        <Link to="/contact" onClick={toggleDrawer}>
          {t("contact")}
        </Link>
      </div>

      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.icons}>
        <FormControl className={styles.dropdown}>
          <InputLabel id="demo-simple-select-label">
            {t("drop_text")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10} onClick={() => changelanguage("uz")}>
              Uzbek
            </MenuItem>
            <MenuItem value={20} onClick={() => changelanguage("en")}>
              English
            </MenuItem>
            <MenuItem value={20} onClick={() => changelanguage("ru")}>
              Russian
            </MenuItem>
          </Select>
        </FormControl>
      </div>

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
            {t("home")}
          </Link>
          <Link to="/about" onClick={toggleDrawer}>
            {t("about")}
          </Link>
          <Link to="/clothes" onClick={toggleDrawer}>
            {t("clothes")}
          </Link>
          <Link to="/contact" onClick={toggleDrawer}>
            {t("contact")}
          </Link>

          <FormControl className={styles.dropdown}>
            <InputLabel id="demo-simple-select-label">
              {t("drop_text")}{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10} onClick={() => changelanguage("ru")}>
                Uzbek
              </MenuItem>
              <MenuItem value={20} onClick={() => changelanguage("en")}>
                English
              </MenuItem>
              <MenuItem value={20} onClick={() => changelanguage("ru")}>
                Russian
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

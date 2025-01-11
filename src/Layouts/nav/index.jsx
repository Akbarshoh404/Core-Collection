import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "../../Components/Icons/logo.png";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import i18next from "i18next";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function Navbar() {
  let navigate = useNavigate();
  // window.location.reload()
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const { t, i18n } = useTranslation();
  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };

  i18next.reloadResources();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <p className={styles.a}>{t("home")}</p>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <p className={styles.a}>{t("about")}</p>
        </Link>
        <Link
          to="/clothes"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <p className={styles.a}>{t("clothes")}</p>
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <p className={styles.a}>{t("contact")}</p>
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
            <MenuItem value={30} onClick={() => changelanguage("ru")}>
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
              <MenuItem value={10} onClick={() => changelanguage("uz")}>
                Uzbek
              </MenuItem>
              <MenuItem value={20} onClick={() => changelanguage("en")}>
                English
              </MenuItem>
              <MenuItem value={30} onClick={() => changelanguage("ru")}>
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

import React from "react";

import styles from "./style.module.scss";

import instagram from "../../../Components/Icons/Instagram.png";
import telegram from "../../../Components/Icons/Telegram.png";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.p1}>{t("join")}</p>

        <div className={styles.social}>
          <div
            onClick={() =>
              handleNavigation(
                "https://www.instagram.com/corecl_uz?igsh=M2dqMHViYmRkNGFo"
              )
            }
            className={styles.link}
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram logo" />
            <p>INSTAGRAM</p>
          </div>

          <span className={styles.separator}>X</span>

          <div
            onClick={() => handleNavigation("https://t.me/corecollectionuzb")}
            className={styles.link}
            aria-label="Telegram"
          >
            <img src={telegram} alt="Telegram logo" />
            <p>TELEGRAM</p>
          </div>
        </div>

        <p className={styles.year}>© 2022</p>
      </div>
    </footer>
  );
};

export default Footer;

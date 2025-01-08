import React from "react";

import styles from "./style.module.scss";

import instagram from "../../Components/Icons/Instagram.png";
import telegram from "../../Components/Icons/Telegram.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.p1}>JOIN OUR NEWSLETTER</p>

          <div className={styles.social}>
            <div>
              <img src={instagram} alt="instagram logo" />

              <p>INSTAGRAM</p>
            </div>

            <p>X</p>

            <div>
              <img src={telegram} alt="telegram logo" />

              <p>TELEGRAM</p>
            </div>
          </div>

          <p className={styles.year}>© 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

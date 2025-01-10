import React from "react";

import styles from "./style.module.scss";

import img1 from "../../../Components/Images/WinterAutumnCollection8.png";
import img2 from "../../../Components/Images/unique3.jpg";
import img3 from "../../../Components/Images/unique4.jpg";

import { useTranslation } from "react-i18next";

const Section5 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <img src={img1} alt="" className={styles.bigImg} />

          <div className={styles.right}>
            <div className={styles.texts}>
              <p className={styles.p1}>{t("c7")}</p>

              <div>
                <p className={styles.p2}>{t("c6")}</p>
              </div>
            </div>

            <div className={styles.images}>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;

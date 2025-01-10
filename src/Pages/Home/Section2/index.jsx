import React from "react";
import styles from "./style.module.scss";

import shop1 from "../../../Components/Images/shop1.png";

import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <p className={styles.p1}>{t("c1")}</p>
            <p className={styles.p2}>{t("c2")}</p>
            <p className={styles.p3}>— CORE</p>
            <p className={styles.p4}>{t("c3")}</p>
            <p className={styles.p5}>{t("c4")}</p>
          </div>

          <img src={shop1} alt="shop" className={styles.img} />
        </div>
      </section>
    </>
  );
};

export default Section2;

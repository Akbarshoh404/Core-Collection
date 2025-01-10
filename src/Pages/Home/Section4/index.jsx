import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

const Section4 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className={styles.section}>
        <p className={styles.p1}>
          {t("sitata2")}
        </p>
        <p className={styles.p2}>— Giorgio Armani — </p>
      </section>
    </>
  );
};

export default Section4;

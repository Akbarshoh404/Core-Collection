import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Section1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p>{t("longp1")}</p>

          <p>{t("longp2")}</p>
        </div>
      </div>
    </>
  );
};

export default Section1;

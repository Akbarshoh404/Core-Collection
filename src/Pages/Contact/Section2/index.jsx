import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p>{t("sitata6")}</p>
        </div>
      </header>
    </>
  );
};

export default Section2;

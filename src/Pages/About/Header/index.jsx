import React from "react";

import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p>{t("sitata3")}</p>
        </div>
      </header>
    </>
  );
};

export default Header;

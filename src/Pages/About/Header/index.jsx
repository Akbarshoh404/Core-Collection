import React from "react";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p>Welcome to Core Collection, where style meets quality!</p>
        </div>
      </header>
    </>
  );
};

export default Header;

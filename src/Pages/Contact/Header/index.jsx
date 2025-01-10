import React from "react";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p>
            Have questions or need style advice? We're here to help you discover
            the perfect look!
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;

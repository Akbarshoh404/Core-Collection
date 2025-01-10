import React from "react";
import styles from "./style.module.scss";

import woman1 from "../../../Components/Images/woman1.png";
import woman2 from "../../../Components/Images/woman2.png";
import woman3 from "../../../Components/Images/woman3.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.imageColumn1}>
          <img src={woman1} alt="Small 1" className={styles.imageSmall} />
        </div>

        <div className={styles.imageColumn}>
          <img src={woman2} alt="Big" className={styles.imageBig} />
        </div>

        <div className={styles.imageColumn2}>
          <img src={woman3} alt="Small 2" className={styles.imageSmall} />

          <p className={styles.p1}>
            Clothes won't change the world, The women who wear them will.
          </p>

          <p className={styles.p2}>— Anne Klein — </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

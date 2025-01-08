import React from "react";
import styles from "./style.module.scss";

import shop1 from "../../../Components/Images/shop1.png";

const Section2 = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <p>— COLLECTION for AUTUMN</p>
            <p>— COLLECTION for WINTER</p>
            <p>-CORE</p>
            <p>— COLLECTION  FOR  SPRING</p>
            <p>— COLLECTION  FOR  SUMMER</p>
          </div>

          <img src={shop1} alt="shop" className={styles.img} />
        </div>
      </section>
    </>
  );
};

export default Section2;
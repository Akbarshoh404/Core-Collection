import React from "react";
import styles from "./style.module.scss";

import shop1 from "../../../Components/Images/shop1.png";

const Section2 = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <p className={styles.p1}>— COLLECTION for AUTUMN</p>
            <p className={styles.p2}>— COLLECTION for WINTER</p>
            <p className={styles.p3}>— CORE</p>
            <p className={styles.p4}>— COLLECTION for SPRING</p>
            <p className={styles.p5}>— COLLECTION for SUMMER</p>
          </div>

          <img src={shop1} alt="shop" className={styles.img} />
        </div>
      </section>
    </>
  );
};

export default Section2;

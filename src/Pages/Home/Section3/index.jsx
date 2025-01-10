import React from "react";

import styles from "./style.module.scss";

import img1 from "../../../Components/Images/WinterAutumnCollection8.png";
import img2 from "../../../Components/Images/unique1.jpg";
import img3 from "../../../Components/Images/unique2.jpg";

const Section3 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <img src={img1} alt="" className={styles.bigImg} />

          <div className={styles.right}>
            <div className={styles.texts}>
              <p className={styles.p1}>the SPRING/SUMMER</p>

              <div>
                <p className={styles.p2}>CORE COLLECTION</p>
              </div>
            </div>

            <div className={styles.images}>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

import React from "react";

import styles from "./style.module.scss";

import img1 from "../../../Components/Images/WinterAutumnCollection8.png";
import img2 from "../../../Components/Images/WinterAutumnCollection2.png";
import img3 from "../../../Components/Images/WinterAutumnCollection3.png";
import img4 from "../../../Components/Images/WinterAutumnCollection4.png";
import img5 from "../../../Components/Images/WinterAutumnCollection5.png";
import img6 from "../../../Components/Images/WinterAutumnCollection6.png";
import img7 from "../../../Components/Images/WinterAutumnCollection7.png";
import img8 from "../../../Components/Images/WinterAutumnCollection1.png";
import img9 from "../../../Components/Images/WinterAutumnCollection9.png";

const Section5 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <img src={img1} alt="" className={styles.bigImg} />

          <div className={styles.right}>
            <div className={styles.texts}>
              <p className={styles.p1}>the AUTUMN/WINTER</p>

              <div>
                <p className={styles.p2}>CORE COLLECTION</p>
                <p className={styles.p3}>2025</p>
              </div>
            </div>

            <div className={styles.images}>
              asd
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;

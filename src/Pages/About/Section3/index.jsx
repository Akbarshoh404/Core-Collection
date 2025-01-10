import React from "react";

import styles from "./style.module.scss";

import img from "../../../Components/Icons/Location.png";

const Section3 = () => {
  return (
    <>
      <div className={styles.section}>
        <p className={styles.p1}>OUR LOCATIONS</p>
        <div className={styles.container}>
          <div>
            <img src={img} alt="" />

            <p>Buyuk Ipak Yuli Street, 58</p>
          </div>

          <div>
            <img src={img} alt="" />

            <p>Yunusabad District, Kashgar Residential Area, 4</p>
          </div>

          <div>
            <img src={img} alt="" />

            <p>
              Tashkent, Kukcha Darvoza Street (Samarkand Darvoza, 3rd floor)
            </p>
          </div>

          <div>
            <img src={img} alt="" />

            <p>Matbuotchilar Street, 17</p>
          </div>

          <div>
            <img src={img} alt="" />

            <p>Babur Street, 6 (NEXT, 3rd floor)</p>
          </div>

          <div>
            <img src={img} alt="" />

            <p>Samarkand, Shohrukh Mirzo Street, 17</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;

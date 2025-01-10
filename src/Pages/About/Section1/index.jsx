import React from "react";
import styles from "./style.module.scss";

const Section1 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p>
            Since opening our doors over two years ago, Core Collection has been
            dedicated to bringing the latest in women's fashion directly from
            Korea to our valued customers in Uzbekistan. With locations in both
            Tashkent and Samarkand, we are proud to offer a curated selection of
            chic and trendy clothing designed to make every woman feel confident
            and elegant.
          </p>

          <p>
            Our collections are carefully handpicked, focusing on premium
            quality, unique designs, and the distinct charm of Korean fashion.
            Whether you're looking for timeless wardrobe staples or standout
            pieces for a special occasion, Core Collection has something for
            every style and moment. At Core Collection, we believe that fashion
            is a form of self-expression. That's why we strive to provide not
            just clothes but also a shopping experience that inspires and
            empowers. Visit us in Tashkent or Samarkand to explore our latest
            arrivals and discover the perfect outfit to express your unique
            personality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;

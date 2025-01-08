import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./style.module.scss";

const Section1 = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.texts}>
            <p className={styles.p1}>HIGHLIGHTS</p>
            <p className={styles.p2}>2025</p>
          </div>

          <div className={styles.carousel}>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={"auto"}
              centeredSlides={true}
              className={styles.swiper}
            >
              <SwiperSlide className={styles.bigCard}>
                <div className={styles.card}>
                  <h3>Big Card</h3>
                  <p>This is the highlighted card.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <h3>Card 1</h3>
                  <p>Additional content here.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <h3>Card 2</h3>
                  <p>More content here.</p>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className={styles.navigation}>
              <button className={styles.button} id="prev">
                Previous
              </button>
              <button className={styles.button} id="next">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./style.module.scss";
import img from "../../../Components/Images/shop1.png";

const Section1 = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.texts}>
          <p className={styles.p1}>HIGHLIGHTS</p>
          <p className={styles.p2}>2025</p>
        </div>

        <div className={styles.slider_container}>
          <Swiper
            ref={swiperRef} // Attach the swiperRef to the Swiper instance
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: -75,
              depth: 250,
              modifier: 3.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next", // Target custom next button
              prevEl: ".swiper-button-prev", // Target custom prev button
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img src={img} alt="highlight1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="highlight10" />
            </SwiperSlide>
          </Swiper>

          {/* Custom navigation buttons */}
          <div className={styles.slider_controller}>
            <div
              className={`${styles.swiper_button_prev} swiper-button-prev`}
              onClick={() => swiperRef.current.swiper.slidePrev()} // Add onClick to navigate to the previous slide
            >
              <ArrowLeft size={40} color="black" />{" "}
            </div>
            <div
              className={`${styles.swiper_button_next} swiper-button-next`}
              onClick={() => swiperRef.current.swiper.slideNext()} // Add onClick to navigate to the next slide
            >
              <ArrowRight size={40} color="black" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

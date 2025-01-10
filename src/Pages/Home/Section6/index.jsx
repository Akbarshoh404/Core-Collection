import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./style.module.scss";
import img1 from "../../../Components/Images/NewArrival1.png";
import img2 from "../../../Components/Images/NewArrival2.png";
import img3 from "../../../Components/Images/NewArrival3.png";
import img4 from "../../../Components/Images/NewArrival4.png";
import img5 from "../../../Components/Images/NewArrival5.png";
import img6 from "../../../Components/Images/NewArrival6.png";
import img7 from "../../../Components/Images/NewArrival7.png";
import img8 from "../../../Components/Images/NewArrival8.png";
import img9 from "../../../Components/Images/NewArrival9.png";
import img10 from "../../../Components/Images/NewArrival10.png";
import img11 from "../../../Components/Images/NewArrival11.png";
import img12 from "../../../Components/Images/NewArrival12.png";
import img13 from "../../../Components/Images/NewArrival13.png";
import img14 from "../../../Components/Images/NewArrival14.png";
import img15 from "../../../Components/Images/NewArrival15.png";
import img16 from "../../../Components/Images/NewArrival16.png";
import img17 from "../../../Components/Images/NewArrival17.png";
import img18 from "../../../Components/Images/NewArrival18.png";

import { useTranslation } from "react-i18next";

const Section6 = () => {
  const swiperRef = useRef(null);

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <p className={styles.p1}>{t("arrival")}</p>

        <div className={styles.slider_container}>
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -75,
              depth: 250,
              modifier: 3.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
          >
            {[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
              img14,
              img15,
              img16,
              img17,
              img18,
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slide}>
                  <img
                    src={img}
                    alt={`New Arrival ${index + 1}`}
                    className={styles.img}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.slider_controller}>
            <div
              className={`${styles.swiper_button_prev} swiper-button-prev`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            ></div>
            <div
              className={`${styles.swiper_button_next} swiper-button-next`}
              onClick={() => swiperRef.current.swiper.slideNext()}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;

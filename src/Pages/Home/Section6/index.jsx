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

const Section6 = () => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <p className={styles.p1}>NEW ARRIVALS</p>

        <div className={styles.slider_container}>
          <Swiper
            ref={swiperRef}
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
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img src={img1} alt="New Arrival 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="New Arrival 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="New Arrival 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="New Arrival 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="New Arrival 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="New Arrival 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="New Arrival 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="New Arrival 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="New Arrival 9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="New Arrival 10" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="New Arrival 11" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img12} alt="New Arrival 12" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img13} alt="New Arrival 13" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img14} alt="New Arrival 14" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img15} alt="New Arrival 15" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img16} alt="New Arrival 16" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img17} alt="New Arrival 17" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img18} alt="New Arrival 18" />
            </SwiperSlide>
          </Swiper>

          <div className={styles.slider_controller}>
            <div
              className={`${styles.swiper_button_prev} swiper-button-prev`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <ArrowLeft size={60} color="black" />
            </div>
            <div
              className={`${styles.swiper_button_next} swiper-button-next`}
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <ArrowRight size={60} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;

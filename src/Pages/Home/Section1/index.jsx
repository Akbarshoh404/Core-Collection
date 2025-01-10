import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./style.module.scss";

import img1 from "../../../Components/Images/HighLight1.png";
import img2 from "../../../Components/Images/HighLight2.png";
import img3 from "../../../Components/Images/HighLight3.png";
import img4 from "../../../Components/Images/HighLight4.png";
import img5 from "../../../Components/Images/HighLight5.png";
import img6 from "../../../Components/Images/HighLight6.png";
import img7 from "../../../Components/Images/HighLight7.png";

const Section1 = () => {
  const swiperRef = useRef(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.texts}>
          <p className={styles.p1}>HIGHLIGHTS</p>
          <p className={styles.p2}>2025</p>
        </div>

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
            <SwiperSlide className={styles.slider}>
              <div className={styles.slide}>
                <img src={img1} alt="highlight1" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>DRESS</p>
                    <p className={styles.slide_text2}>272 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>SWEATER</p>
                    <p className={styles.slide_text2}>228 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>CARDIGAN</p>
                    <p className={styles.slide_text2}>216 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>SKIRT</p>
                    <p className={styles.slide_text2}>203 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img2} alt="highlight2" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>BLACK HANDBAG</p>
                    <p className={styles.slide_text2}>261 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>HANDBAG WITH STRAP</p>
                    <p className={styles.slide_text2}>296 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>ROUND HANDBAG</p>
                    <p className={styles.slide_text2}>234 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>
                      HANDBAG WITHOUT DECORATIONS
                    </p>
                    <p className={styles.slide_text2}>179 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>HANDBAG WITH A LOCK</p>
                    <p className={styles.slide_text2}>246 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img3} alt="highlight3" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>COAT</p>
                    <p className={styles.slide_text2}>624 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>CARDIGAN</p>
                    <p className={styles.slide_text2}>365 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>DRESS</p>
                    <p className={styles.slide_text2}>285 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img4} alt="highlight4" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>ANKLE BOOTS</p>
                    <p className={styles.slide_text2}>513 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img5} alt="highlight5" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>SNEAKERS</p>
                    <p className={styles.slide_text2}>203 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img6} alt="highlight6" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>1ST BAG MODEL</p>
                    <p className={styles.slide_text2}>247 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>2ND BAG MODEL</p>
                    <p className={styles.slide_text2}>283 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>3RD BAG MODEL</p>
                    <p className={styles.slide_text2}>254 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>4TH BAG MODEL</p>
                    <p className={styles.slide_text2}>247 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={img7} alt="highlight7" />
                <div className={styles.slide_texts}>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>CARDIGAN</p>
                    <p className={styles.slide_text2}>203 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>TUTU SKIRT</p>
                    <p className={styles.slide_text2}>203 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>SWEATER</p>
                    <p className={styles.slide_text2}>155 000 SUM</p>
                  </div>
                  <div className={styles.slide_text}>
                    <p className={styles.slide_text1}>SKIRT</p>
                    <p className={styles.slide_text2}>241 000 SUM</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={styles.slider_controller}>
            <div
              className={`${styles.swiper_button_prev} swiper-button-prev`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="20"
                viewBox="0 0 60 20"
                fill="black"
              >
                <path d="M20 0 L0 10 L20 20 Z" />
              </svg>
            </div>
            <div
              className={`${styles.swiper_button_next} swiper-button-next`}
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="20"
                viewBox="0 0 60 20"
                fill="black"
              >
                <path d="M40 0 L60 10 L40 20 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;

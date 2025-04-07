import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./HomeSlider.module.css";

const HomeSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        grabCursor={true}
        speed={1000}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/5f/8d/b3/5f8db37d894ade3b51592bf89f1f85df.jpg"
            alt="Image 1"
            className={styles.sliderImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/c9/e9/ba/c9e9baa48d8a4410df7968b10f6e27ae.jpg"
            alt="Image 2"
            className={styles.sliderImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/41/d8/53/41d85330a06da98e3a33b907a27764b3.jpg"
            alt="Image 3"
            className={styles.sliderImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/3c/70/52/3c705249d2ca5ef7a6e83be6504dbf72.jpg"
            alt="Image 4"
            className={styles.sliderImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/af/83/98/af8398596b49ffa5099fec2d06584710.jpg"
            alt="Image 5"
            className={styles.sliderImage}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

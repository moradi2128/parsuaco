import React, { useState } from "react";
import Theme from "../../Theme/Theme";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper style// import required modules
import {
  Controller,
  Autoplay,
  Mousewheel,
  Pagination,
  Navigation,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { carouselHome } from "../../data";
import Captions from "../Captions/Captions";

const CarouselHome = () => {
  
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        `${index > 8 ? "" : "0"}` +
        (index + 1) +
        "</span>"
      );
    },
  };
  return (
    <Theme>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        pagination={pagination}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Controller, Autoplay, Pagination, Navigation, Mousewheel]}
        controller={{ control: controlledSwiper }}
        className="swiper-img swiper-text"
      >
        {carouselHome.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Captions
                title={item.title}
                subTitle={item.subTitle}
                date={item.date}
                linkTitle={item.linkTitle}
                to={item.to}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        className="swiper-img"
      >
        {carouselHome.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item.image} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Theme>
  );
};

export default CarouselHome;

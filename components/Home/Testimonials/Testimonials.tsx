/**
 * This example requires Tailwind CSS v2.0+
 *
 * @format
 */

import DottedCarousel from "../DottedCarosel";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Card from "./Card";
export default function Testimonials() {
  let breakPoints = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 1,
      slidesPerGroup: 3,
    },
  };
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      cssMode={true}
      // pagination={true}
      modules={[Pagination]}
      className="mySwiper "
    >
      <SwiperSlide className="flex  ">
        <Card />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}

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
  let TestimonialsData = [
    {
      name: "Sherlene Soon",
      text: "“Bought 2 alpaca toys and they arrived in perfect condition. The floofiest, softest toys I have ever owned. Made with real alpaca fur but they don't smell at all! The owner gives loads of tips on how to take care of them and make them fluffier. He even sent me photos of the alpacas when I asked for it, cutest things ever!! Thank you so much for all your help and for making the most amazing floofs.” ",
    },
    {
      name: "Lindsey Buckingham",
      text: "“Amazing quality and detail in my custom order of alpaca toys for my little ones! These are the most soft and fuzzy toys, they are perfect!!!  ",
    },
  ];
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      cssMode={true}
      // pagination={true}
      modules={[Pagination]}
      className="mySwiper max-w-xs sm:max-w-lg md:max-w-max"
    >
      {TestimonialsData.map((item, index) => (
        <SwiperSlide className="block  " key={index}>
          <Card {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

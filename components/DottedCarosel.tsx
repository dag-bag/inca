/** @format */

import React from "react";
import { Pagination, Autoplay } from "swiper";
import FeatureCard from "./FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

type Props = {
  features: {
    title: string;
    description: string;
    svg: any;
  }[];
};

function DottedCarousel({ features }: Props) {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="  ' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      pagination={{
        clickable: true,
      }}
      slidesPerView={"auto"}
      modules={[Pagination, Autoplay]}
      className="mySwiper flex justify-center items-center flex-col py-8 "
      navigation={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {features.map((feature, index) => {
        return (
          <SwiperSlide key={index}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              svg={feature.svg}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default DottedCarousel;

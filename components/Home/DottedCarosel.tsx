/** @format */

import React from "react";
import { Pagination, Autoplay } from "swiper";
import FeatureCard from "../Fav/FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

type Props = {
  features?: {
    title: string;
    description: string;
    svg: any;
  }[];
};

function DottedCarousel({ features }: Props) {
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
      loop={true}
      breakpoints={breakPoints}
      pagination={{
        clickable: true,
      }}
      slidesPerView={"auto"}
      modules={[Pagination, Autoplay]}
      className=" flex justify-center items-center flex-col  "
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }}
    >
      {features?.map((feature, index) => {
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

/** @format */

import React from "react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import FeatureCard from "./FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  features: {
    title: string;
    description: string;
    svg: any;
  }[];
};

function DottedCarousel({ features }: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="  ' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper flex justify-center items-center flex-col"
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

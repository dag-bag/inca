/** @format */

import React from "react";
import { Pagination, Autoplay } from "swiper";
import FeatureCard from "../Fav/FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import BlurImage from "./BlurImage";

type Props = {
  imgs: string[];
};

function MobileCarousel({ imgs }: Props) {
  return (
    <div className=" md:hidden">
      <Swiper
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 768px
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        modules={[Pagination, Autoplay]}
        className="mySwiper flex justify-center items-center flex-col py-8 "
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
      >
        {imgs.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full">
                <BlurImage
                  image={img}
                  alt="hero"
                  width={200}
                  height={200}
                  type="responsive"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MobileCarousel;

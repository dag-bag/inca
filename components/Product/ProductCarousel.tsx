/** @format */

import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import FeatureCard from "../Fav/FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import SkeLeTonImage from "../skeleton/SkeletonImage";
import { Images, ImagesDatum } from "../../services/variants/variants";

type Props = {
  images: ImagesDatum[];
};

function ProductCarousel({ images }: Props) {
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
      slidesPerView: 2,
      slidesPerGroup: 3,
    },
  };
  return (
    <Swiper
      breakpoints={breakPoints}
      pagination={{
        clickable: true,
      }}
      loop={true}
      slidesPerView={"auto"}
      modules={[Pagination, Autoplay]}
      className=" flex justify-center items-center flex-col  max-w-6xl md:hidden "
      navigation={true}
      // speed={1000}
    >
      {images?.map((img, index) => {
        return (
          <SwiperSlide key={index} className="!h-[28rem]">
            <SkeLeTonImage
              width={600}
              height={600}
              image={img.attributes.formats.large.url}
              alt={""}
              type="responsive"
              className="w-full h-full object-center object-cover sm:rounded-lg"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductCarousel;

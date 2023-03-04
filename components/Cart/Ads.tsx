/** @format */

import React, { useCallback, useRef } from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import FeatureCard from "../Fav/FeatureCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { FetchCartProduct } from "../../services/product/products";
import Loader from "../Loaders/Loader";
import Link from "next/link";
import Image from "next/image";
import { FetchedProductType, ProductType, Variant } from "../../types/product";
import { AiFillStar } from "react-icons/ai";
// import "swiper/css/navigation";
import { useSetRecoilState } from "recoil";
import { SideCartOpenAtom } from "../../atoms/cart";
import { SwiperEvents } from "swiper/types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
type Props = {
  _id: "string";
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  variant: Variant[];
};

function AdsCard({ title, variant, tag }: Props) {
  let { slug, price, color, availableQty, metadesc, img, sellPrice } =
    variant[0];
  const setHideCart = useSetRecoilState(SideCartOpenAtom);
  return (
    <div className="relative rounded-md pb-20">
      <Link href={`/product/${slug}`} onClick={() => setHideCart(false)}>
        <div className="relative ">
          {/* <span className="badge bg-primary text-white">{tag}</span> */}
          <div
            className=" aspect-1
          "
          >
            <Image
              src={img[0].img}
              height={500}
              width={500}
              alt={img[0].alt}
              className="aspect-1"
            />
          </div>
        </div>
      </Link>
      <div className="flex justify-between  w-full mt-2">
        <div className="w-full h-[72px] ">
          <h1 className="  text-center text-black line-clamp-2 h-12 mt-4">
            {title}
          </h1>
          <div className="flex justify-center mt-2">
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
          </div>

          <p className=" text-base text-center text-black">
            {" "}
            <span className="text-orange-500 text-sm line-through mr-2">
              ${price}
            </span>{" "}
            ${sellPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

function Ads() {
  const swiperRef = useRef();
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current?.swiper.slideNext();
  }, []);
  const { data, isLoading } = useQuery(["product"], FetchCartProduct);
  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="mb-6 text-center text-[#333] font-semibold mt-8">
        Complete the Look
      </h1>
      <Swiper
        ref={sliderRef}
        onBeforeInit={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        //   breakpoints={breakPoints}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={2}
        modules={[Pagination, Autoplay, Navigation]}
        className=" grid grid-cols-2  max-w-6xl relative"
        navigation={true}
      >
        {data?.products?.map((product: FetchedProductType, index: number) => {
          return (
            <SwiperSlide key={index}>
              <AdsCard {...product} />
            </SwiperSlide>
          );
        })}
        <button
          onClick={handlePrev}
          className="    disabled:opacity-25 disabled:cursor-not-allowed !z-50 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] left-2 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            
            bg
            "
        >
          <GrFormPrevious className="text-3xl !text-black " />
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={handleNext}
          className=" text-white w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-50 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] -right-10 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            "
        >
          <GrFormNext className="text-3xl !text-black " />
          <span className="sr-only">Next</span>
        </button>
      </Swiper>
      {/* <div ref={prevRef}>Prev</div> */}
    </div>
  );
}

export default Ads;

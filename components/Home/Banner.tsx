/** @format */

import Image from "next/image";
import React from "react";
import BlurImage from "../utils/BlurImage";

function Banner() {
  return (
    <div className="relative  md:block md:pb-16">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center flex-col">
        {/* <h1 className=" text-white text-5xl text-center leading-tight font-bold">
          Inca Ancestry get to know the history of the Incs
        </h1> */}
        {/* <H1 h1={" Inca Ancestry get to know the history of the Incs"} /> */}
      </div>
      <div className="w-full h-[40vh] md:h-[70vh] relative">
        <BlurImage
          image={"/assets/slider/slider.jpg"}
          alt="Banner"
          type="fill"
          height={35}
          width={100}
        />
      </div>
    </div>
  );
}

export default Banner;

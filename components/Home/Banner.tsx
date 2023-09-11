/** @format */
import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative  md:block md:pb-16">
      <div className="absolute top-1/2 left-1/2  z-10 flex justify-center items-center flex-col"></div>
      <div className="w-full h-[40vh] md:h-[70vh] relative object-fill md:block hidden">
        <Image
          src={"/sliderbig1.jpg"}
          alt="Banner"
          className="object-cover"
          fill
        />
      </div>

      <div className="w-full h-[40vh] md:h-[70vh] relative object-fill md:hidden ">
        <Image
          src={"/slider_responsive.jpg"}
          alt="Banner"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}

export default Banner;

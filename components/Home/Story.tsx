/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Btn from "../buttons/Btn";
import DottedCarousel from "./DottedCarosel";
import Testimonials from "./Testimonials/Testimonials";
// import Btn2 from "../buttons/Btn2";
type Props = {
  image: string;
  title: string;
  description: string;
  boxType: "center-left" | "left-right" | "center-center";
  type: 1 | 2 | 3;
};
function Story({ title, description, image, boxType, type }: Props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {type === 1 && (
        <div
          className={`flex  justify-evenly  flex-wrap-reverse pb-2 md:p-0 mb-20 md:mt-32   md:mb-40`}
        >
          <div className={`px-5 flex  flex-col   space-y-12 mt-8 md:w-[50%]`}>
            <div
              className={` ${
                boxType === "center-left" ? "text-left" : "text-right"
              } mb-6 md:w-[70%] ml-auto`}
            >
              <p className="relative  text-2xl  lg:text-4xl  text-[#333] underline underline-offset-4">
                {title}
              </p>

              <p className=" text-base  text-[#333] mt-12 ">{description}</p>
            </div>
            <Btn text="Read More" className="btn-wide btn-outline ml-auto" />
            {/* <Btn2>Cosmos</Btn2> */}
          </div>
          <div className={`flex-1 flex  ml-2 relative justify-center  `}>
            <div className="w-[70%] rounded-[3px]   md:w-1/2 z-10">
              <div
                className={`w-[400px] h-[400px] rounded-[3px]   absolute md:w-1/2 -top-14 bg-[#bd9575]  right-0 md:right-15 -z-10`}
              ></div>
              <Image src={image} alt="Artesano" width={596} height={682} />
              {/* <BlurImage image={image} /> */}
            </div>
          </div>
        </div>
      )}
      {type === 2 && (
        <div
          className={`flex  justify-evenly  flex-wrap   md:mt-52 md:mb-40  mb-20`}
        >
          <div className={`flex-1 flex  relative justify-center mr-2 ml-0  `}>
            <div
              className={`w-[70%] h-[100%] max-h-[475.133px] rounded-[3px] absolute md:w-1/2 -top-14  bg-[#bd9575] left-0 md:left-14`}
            ></div>
            <div className="w-[70%] rounded-[3px]  md:w-1/2 z-10">
              <Image
                src={image}
                alt="Artesano"
                width={576}
                height={620}
                layout="responsive"
              />
            </div>
          </div>
          <div className={`px-5 flex  flex-col   space-y-12 mt-8 md:w-[50%]`}>
            <div className={` text-left mb-6 md:w-[70%] mr-auto`}>
              <p className="relative  text-2xl  lg:text-4xl  text-[#333] underline underline-offset-4">
                {title}
                {/* <svg
                  width={60}
                  height={2}
                  viewBox="0 0 60 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute  right-0 left-0 md:top-14`}
                  preserveAspectRatio="none"
                >
                  <path d="M0 1L60 0.999995" stroke="#333333" />
                </svg> */}
              </p>

              <p
                className={` text-base  text-[#333] mt-12 ${
                  readMore ? "line-clamp-none" : "line-clamp-6"
                } `}
              >
                {description}
              </p>
            </div>

            <Btn
              text={`${readMore ? "Read Less" : "Read More"} `}
              className=" btn-outline btn-wide mr-auto"
              onClick={() => setReadMore((value) => !value)}
            />
          </div>
        </div>
      )}
      {type === 3 && (
        <div className={`flex  justify-evenly  flex-wrap-reverse  md:my-28 `}>
          <div
            className={`px-5 flex justify-start flex-col   space-y-12  md:w-[50%]`}
          >
            <Testimonials />
            {/* <div className={` text-right mb-6 md:w-[70%] ml-auto`}>
              <p className="relative  text-2xl  lg:text-4xl  text-[#333] underline underline-offset-4">
                {title}
              </p>

              <p className=" text-base  text-[#333] mt-12 ">{description}</p>
            </div>

            <Btn text="Cosmos" className="btn-wide btn-outline ml-auto" /> */}
          </div>
          <div className={`flex-1 flex  ml-2 justify-center  relative pt-10`}>
            <div
              className={`w-[70%] h-[70%] rounded-[3px]  ${
                boxType === "center-center" ? "bg-[#e8e8e8]" : "bg-[#bd9575]"
              } absolute md:w-1/2 -top-[1rem]  `}
            ></div>
            <div className="w-[70%] rounded-[3px]   md:w-w-[70%] mt-16 relative">
              <Image
                src={image}
                alt="Artesano"
                width={802}
                height={552}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Story;

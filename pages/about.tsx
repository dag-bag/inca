/** @format */

import Image from "next/legacy/image";
import React from "react";
import H1 from "../components/Headings/H1";
import BlurImage from "../components/utils/BlurImage";
const para = {
  styles:
    "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-7xl text-left",
};
const About1 = () => {
  return (
    <div className="mt-10">
      <div className="relative  md:block ">
        <div className="w-full h-[40vh] md:h-screen relative">
          <BlurImage
            image={
              "https://res.cloudinary.com/dthpcwn8r/image/upload/v1675783536/IMG_9581-2_1_zbcea1.jpg"
            }
            width={500}
            height={200}
            alt={"Banner"}
          />
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <section className="bg-white ">
          <div className="container px-6 py-16 mx-auto ">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold mt-24">About Us</h1>
              <p className=" text-gray-700 ">
                <p className={para.styles}>
                  Incancestry is a social enterprise with a mission to empower
                  Andean communities and preserve their ancestral textile
                  traditions. We do this by giving visibility to the finest
                  artisans in these communities and sharing their handcrafted
                  products with the world.
                  <p className={para.styles}>
                    Our focus is on sustainability and fair trade values, which
                    means we work to create positive social and economic impact
                    while being environmentally responsible. We believe that by
                    supporting these artisans and their traditional crafts, we
                    can make a real difference not just in their lives but in
                    the Andean communities they are part of.
                  </p>
                  <p className={para.styles}>
                    At Incancestry, we are passionate about connecting people
                    with products that tell a story and preserve cultural
                    traditions. We are committed to being a force for good, both
                    for the artisans we work with and the supporters who share
                    our beliefs.
                  </p>
                </p>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About1;

/** @format */

import Image from "next/legacy/image";
import React from "react";
const para = {
  styles:
    "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",
};
const About1 = () => {
  return (
    <div className="mt-10">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <section className="bg-white ">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                About Us
              </h1>

              <p className="mt-6 text-gray-700 ">
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
            <div className="flex justify-center mt-10">
              <Image
                width={900}
                height={500}
                alt="About Us..."
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://res.cloudinary.com/dthpcwn8r/image/upload/v1675783536/IMG_9581-2_1_zbcea1.jpg"
              />
            </div>
          </div>
        </section>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;

/** @format */

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Variant } from "../../types/product";
import BlurImage from "../utils/BlurImage";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import style from "../../styles/Product.module.css";
import { CSSTransition } from "react-transition-group";
type Props = {
  _id: "string";
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  variant: Variant[];
};
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function TestCard({ title, variant, tag }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  let { slug, price, color, availableQty, metadesc, img, sellPrice } =
    variant[0];
  const [isLoading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative rounded-md">
      <Link href={`/product/${slug}`}>
        <div className="relative ">
          {/* <span className="badge bg-primary text-white">{tag}</span> */}
          <div
            className="image-wrapper flex group relative  md:w-full bg-white h-[161.66px] md:h-[287.425px] justify-end items-center flex-col min-w-[161.66px] md:min-w-[300px] lg:min-w-[16rem] lg:min-h-auto xl:min-w-[300px] xl:min-h-[300px] rounded-xl   overflow-hidden 
          "
            onMouseEnter={() => setCurrentImage(1)}
            onMouseLeave={() => setCurrentImage(0)}
          >
            <motion.div
              key={currentImage}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src={img[currentImage].img}
                height={300}
                width={300}
                alt={img[0].alt}
                className={cn(
                  `group-hover:opacity-75 duration-700 ease-in-out object-cover   ${
                    isLoading ? " opacity-0 " : " opacity-100"
                  } `
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </motion.div>
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

export default TestCard;

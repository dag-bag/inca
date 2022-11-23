/** @format */

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Variant } from "../types/product";
import BlurImage from "./BlurImage";
import { AiOutlineStar } from "react-icons/ai";
type Props = {
  _id: "string";
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  variant: Variant[];
};

function ProductCard({ title, variant, tag }: Props) {
  let { slug, price, color, availableQty, metadesc, img, sellPrice } =
    variant[0];
  return (
    <div className="relative rounded-md">
      <Link href={`/product/${slug}`}>
        <div className="relative ">
          {tag !== "General" && (
            <span
              className={`absolute  left-1 top-5 z-40 block bg-${
                tag === "New" ? "blue" : "orange"
              }-500 rounded-full py-1 px-3 text-white`}
            >
              {tag}
            </span>
          )}
          <div
            className="flex group relative  md:w-full bg-[#e8e8e8] h-[161.66px] md:h-[287.425px] justify-end items-center flex-col min-w-[161.66px] md:min-w-[287.425px] lg:min-w-[287.425px] lg:min-h-[287.425px] xl:min-w-[300.425px] xl:min-h-[300.425px] 2xl:min-w-[387.425px] 2xl:min-h-[387.425px]
          "
          >
            <BlurImage image={img[0]} height={200} width={200} alt={metadesc} />
          </div>
        </div>
      </Link>
      <div className="flex justify-between  w-full mt-2">
        <div className="w-full h-[72px] ">
          <h1 className="  text-center text-black">{title}</h1>
          <div className="flex justify-center">
            <AiOutlineStar className="text-yellow-300 text-xl" />
            <AiOutlineStar className="text-yellow-300 text-xl" />
            <AiOutlineStar className="text-yellow-300 text-xl" />
            <AiOutlineStar className="text-yellow-300 text-xl" />
            <AiOutlineStar className="text-yellow-300 text-xl" />
          </div>
          <p className=" text-base text-center text-black">{price} $</p>
        </div>
      </div>
    </div>
    // <div className=" bg-gray-100 flex items-center">
    //   <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    //     {/* // eslint-disable-next-line @next/next/no-img-element */}
    //     <img className="rounded-xl" src={variant[0].img[0]} alt="product" />
    //     <div className="flex justify-between items-center">
    //       <div>
    //         <h1 className="mt-5 text-2xl font-semibold">{title}</h1>
    //         <p className="mt-2">${variant[0].price}</p>
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductCard;

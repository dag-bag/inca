/** @format */

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Variant } from "../../types/product";
import BlurImage from "../utils/BlurImage";
import { AiFillStar } from "react-icons/ai";
import ProductImage from "./ProductImage";
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
          {/* <span className="badge bg-primary text-white">{tag}</span> */}
          <div
            className="flex group relative  md:w-full bg-white h-[161.66px] md:h-[287.425px] justify-end items-center flex-col min-w-[161.66px] md:min-w-[300px] lg:min-w-[16rem] lg:min-h-auto xl:min-w-[300px] xl:min-h-[300px] rounded-xl
          "
          >
            <ProductImage
              image={img[0].img}
              height={500}
              width={500}
              alt={img[0].alt}
              type="fill"
              rounded={true}
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

export default ProductCard;

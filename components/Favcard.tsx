/** @format */

import Link from "next/link";
import React from "react";
import Image from "next/image";

import BlurImage from "./BlurImage";
import { AiOutlineStar, AiOutlineDelete, AiFillHeart } from "react-icons/ai";
import { CartItem } from "../types/cart";
import RelativeBtn from "./buttons/RelativeBtn";
import { useSetRecoilState } from "recoil";
import { removeFav } from "../atoms/favraites";
type Props = {
  _id: string;
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  img: string[];
  metadesc: string;
  price: number;
  slug: string;
};

function FavCard({ title, img, desc, price, slug, uni }: CartItem) {
  const removeFavItems = useSetRecoilState(removeFav);
  return (
    <div className="relative rounded-md">
      <RelativeBtn
        className="z-50 right-5 top-2 cursor-pointer"
        Icon={AiFillHeart}
        onClick={() => {
          removeFavItems(uni);
        }}
      />
      <Link href={`/product/${slug}`}>
        <div className="relative ">
          {/* <span className="badge bg-primary text-white">{tag}</span> */}
          <div
            className="flex group relative  md:w-full bg-[#e8e8e8]  justify-end items-center flex-col h-full w-full rounded-md
          "
          >
            <BlurImage
              image={img[0]}
              height={200}
              width={200}
              alt={desc || title}
              type="responsive"
              rounded={true}
              className="rounded-md"
            />
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
  );
}

export default FavCard;

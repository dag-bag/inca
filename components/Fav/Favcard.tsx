/** @format */

import Link from "next/link";
import React from "react";
import Image from "next/image";

import BlurImage from "../utils/BlurImage";
import {
  AiOutlineStar,
  AiOutlineDelete,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import { CartItem } from "../../types/cart";
import RelativeBtn from "../buttons/RelativeBtn";
import { useSetRecoilState } from "recoil";
import { removeFav } from "../../atoms/favraites";
import { ImagesDatum } from "../../services/variants/variants";
type Props = {
  _id: string;
  active: boolean;
  category: string;
  desc: string;
  tag: string;
  title: string;
  img: ImagesDatum[];
  metadesc: string;
  price: number;
  slug: string;
};

function FavCard({ title, img, desc, price, slug, uni }: CartItem) {
  const removeFavItems = useSetRecoilState(removeFav);

  return (
    <div className="relative rounded-md">
      <Link href={`/product/${slug}`}>
        <div className="relative ">
          {/* <span className="badge bg-primary text-white">{tag}</span> */}
          <div className="flex group relative  md:w-60 bg-[#e8e8e8]  justify-end items-center flex-col h-64 w-full  rounded-2xl">
            <RelativeBtn
              className="z-50 right-5 top-2 cursor-pointer"
              Icon={AiFillHeart}
              onClick={() => {
                removeFavItems(uni);
              }}
            />
            <Image
              src={img.data[0].attributes.formats.medium.url}
              alt={img.data[0].attributes.alternativeText ?? ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
      <div className="flex justify-between  w-full mt-2">
        <div className="w-full h-[72px] ">
          <h1 className="  text-center text-black">{title}</h1>
          <div className="flex justify-center">
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
            <AiFillStar className="text-yellow-300 text-xl" />
          </div>
          <p className=" text-base text-center text-black">{price} $</p>
        </div>
      </div>
    </div>
  );
}

export default FavCard;

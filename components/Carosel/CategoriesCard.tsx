/** @format */

import Link from "next/link";
import React from "react";
import { ICategories } from "../../types/category";
import BlurImage from "../utils/BlurImage";
import Flex from "../utils/Flex";

function CategoriesCard({ name, img, link, category }: ICategories) {
  return (
    <Link href={`/category/${link}?category=${category}`}>
      <Flex className="hover:shadow-xl transition-all duration-200 ease-out cursor-pointer  rounded-md p-2 ">
        <div className="  ">
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className=" ">
            <BlurImage
              image={img}
              alt={name}
              type="responsive"
              width={300}
              height={300}
              rounded={true}
            />
          </div>
        </div>
        <h4 className="text-xl font-bold">{name}</h4>
      </Flex>
    </Link>
  );
}

export default CategoriesCard;

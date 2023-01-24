/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

import BlurImage from "../utils/BlurImage";
import truncate from "../../libs/Ese";

function BlogCard({ title, text, image, date, category, slug }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <>
        <div className="rounded overflow-hidden shadow-lg">
          <a href="#" />
          <div className="relative">
            <div className="relative w-full h-56">
              <BlurImage image={image} alt="banner" width={200} height={200} />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
            </div>
            <a>
              <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
                {category}
              </div>
            </a>
            <a>
              <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
                <span className="font-bold">{new Date(date).getDate()}</span>
                <small>
                  {new Date(date).toLocaleString("default", { month: "short" })}
                </small>
              </div>
            </a>
          </div>
          <div className="px-6 py-4">
            <a
              href="#"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {title}
            </a>
            <p className="text-gray-500 text-sm">{truncate(text, 100)}</p>
          </div>
          <div className="px-6 ">
            <Link href={`/blogs/${slug}`}>
              <button className=" bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
                read more
              </button>
            </Link>
          </div>
          <div className="px-6 py-4 flex flex-row items-center"></div>
        </div>
      </>
    </Link>
  );
}

export default BlogCard;

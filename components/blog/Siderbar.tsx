/** @format */

import React from "react";
import Image from "next/image";
import { BlurHeader } from "./BlurHeader";
import { useQuery } from "@tanstack/react-query";
import { IBlog } from "../../types/blog";
import { getAllBlogs } from "../../services/blogs/blogs";
import BlurImage from "../utils/BlurImage";
import ProductImage from "../Product/ProductImage";
const categoryData = [
  {
    sig: 50,
    name: "All",
  },
  {
    sig: 24,
    name: "Web Development",
  },
  {
    sig: 5,
    name: "Mobile Development",
  },
  {
    sig: 10,
    name: "UI/UX",
  },
  {
    sig: 5,
    name: "Data Science",
  },
];
function Siderbar() {
  const { data } = useQuery<IBlog[]>(["blogs"], getAllBlogs);
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-start px-3 max-w-sm mt-16">
      {/* Enter keyowrd here search your fav blogs */}
      <div className="">
        <div className="mt-1 relative">
          <label htmlFor="email">
            <div className="absolute top-2 right-4 z-30">
              <Image src={"/assets/search.svg"} width={20} height={20} alt="" />
            </div>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required={true}
            placeholder="Enter you keyword?"
            className="block w-full px-5 py-3 text-xs text-gray-300  transition duration-500 ease-in-out transform    focus:outline-none focus:border-[#333]  focus:ring-offset-[#333] border-b border-gray-300 placeholder:text-[#333]"
          />

          {/* <p className="text-red-500">{error}</p> */}
        </div>
      </div>
      {/* Popular post section */}
      <div className="space-y-3 mt-4">
        <h4 className="text-left font-light">Popular Post</h4>
        <div className="w-72 h-44 relative">
          <BlurImage
            image={
              "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="blogs"
            width={200}
            height={200}
          />
        </div>
      </div>
      {/* Recent Posts */}

      <div className="w-full bg-white  flex flex-col my-4 mt-8">
        <h4 className="text-left font-light mb-4">Recent Post</h4>
        <div className="space-y-5">
          {data?.slice(0, 4).map((blog) => {
            return (
              <div key={blog._id}>
                {/* Image div */}
                <div className="flex space-x-3">
                  <div className="h-14 w-20 rounded-sm relative">
                    <BlurImage
                      image={blog.img}
                      width={50}
                      height={50}
                      alt="Ads"
                    />
                  </div>
                  <h4 className="text-sm font-light">
                    {blog.title} <br />
                    <span className="text-xs text-gray-400 ">
                      {new Date(blog.date).toDateString()}
                    </span>
                  </h4>
                </div>
                {/* Timing */}
              </div>
            );
          })}
        </div>
      </div>
      {/* Categories */}
      <div className="w-full bg-white  flex flex-col my-4 ">
        <h4 className="text-left font-light mb-4">Categories</h4>
        {categoryData.map((category, index) => {
          return (
            <div className="flex py-3" key={index}>
              <div className="flex justify-between w-48 border-b border-gray-200">
                <h3 className="text-gray-600 text-sm">{category.name}</h3>

                <p className="tex-sm text-gray-500 font-light">
                  ({category.sig})
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Follow me section */}
      <div className="w-full bg-white  flex flex-col my-4  ">
        <h4 className="text-left font-light mb-4">Follow me</h4>
        <div className="flex flex-wrap gap-4">
          <span>
            <div className="  bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
              Facebook
            </div>
          </span>
          <span>
            <div className=" bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
              Twitter
            </div>
          </span>
          <span>
            <div className=" bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
              Linkedin
            </div>
          </span>
          <span>
            <div className=" bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out">
              Instagram
            </div>
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Siderbar;

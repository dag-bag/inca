/** @format */

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import BlogCard from "../../components/blog/BlogCard";
import BlogContainer from "../../components/blog/BlogContainer";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("../../components/blog/Siderbar"), {
  ssr: false,
});
const BlogCard = dynamic(() => import("../../components/blog/BlogCard"), {
  ssr: false,
});

import H1 from "../../components/Headings/H1";
import BlurImage from "../../components/utils/BlurImage";

import BlogModel from "../../models/Blog";
import { getAllBlogs } from "../../services/blogs/blogs";
import { IBlog } from "../../types/blog";

function Blog() {
  const { data } = useQuery<IBlog[]>(["blogs"], getAllBlogs);
  let img = data && data[0];
  console.log(img);
  return (
    <div>
      <Head>
        <title>
          Blog | Alpaca Store | Alpaca Shoes | Alpaca Clothing | Alpaca
        </title>
        <meta name="description" content="  " />
      </Head>
      <div className="relative  md:block ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center flex-col w-full px-4">
          <H1
            text={"  Latest post on, <br /> animal world"}
            className="p-3 bg-white"
          />
        </div>

        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <BlurImage
            image={
              "https://res.cloudinary.com/dthpcwn8r/image/upload/v1675167196/samples/landscapes/nature-mountains.jpg"
            }
            width={500}
            height={200}
            alt={"Banner"}
          />
        </div>
      </div>

      <div className=" flex flex-wrap py-6 justify-center md:px-20">
        {/* Posts Section */}
        <section className="w-full md:w-2/3 ">
          <BlogContainer>
            {data &&
              data?.map((blog) => {
                return <BlogCard {...blog} key={blog._id} />;
              })}
          </BlogContainer>
          {/* Pagination */}
          <div className="flex items-center py-8 ">
            <a
              href="#"
              className="h-10 w-10 bg-primary-1 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              2
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next
              <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </section>
        <SideBar />
      </div>
    </div>
  );
}

export default Blog;
export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["blogs"], getAllBlogs);

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=3600, stale-while-revalidate=60"f
  // );
  // let blogs = await BlogModel.find({});
  // console.log(blogs);
  // const resp = await fetch("http://localhost:3000/api/getproducts");
  // const products = await resp.json();
  return {
    props: { dehydratedState: dehydrate(queryClient) },
    // revalidate: 60,
    // will be passed to the page component as props
  };
};

/** @format */

import React from "react";
import { GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";




export const getStaticPaths = async () => {
  const files = fs.readdirSync("legals");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileName = fs.readFileSync(`legals/${params?.slug}.md`, "utf-8");
  const { content } = matter(fileName);
  return {
    props: { data: content },
  };
};
type Props = {
  data: any;
};

function Legal_Pages({ data }: Props) {
  return (
    <div>
      <div
        className=" p-5 md:p-0 prose md:prose-2xl mx-auto prose-p:text-[16px] prose-h1:text-center pt-10 prose-h2:text-gray-300 prose-h2:!capitalize prose-h3:capitalize prose-h3:text-[25px] prose-h1:bg-gray-100-- prose-h1:py-[5rem]"
        dangerouslySetInnerHTML={{ __html: md().render(data) }}
      ></div>
    </div>
  );
}

export default Legal_Pages;

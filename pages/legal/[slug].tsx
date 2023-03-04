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
    <div className="mt-8">
      <div
        className="prose mx-4  md:m-auto md:prose-xl"
        dangerouslySetInnerHTML={{ __html: md().render(data) }}
      ></div>
    </div>
  );
}

export default Legal_Pages;

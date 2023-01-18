/** @format */

/** @format */

import Image from "next/legacy/image";
import { useState } from "react";
import Skeleton from "./Skeleton";
type Props = {
  image: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
  className?: string;
  type?: "responsive" | "fill";
  rounded?: boolean;
  cursor?: boolean;
  onClick?: () => void;
};
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function SkeLeTonImage({
  image,
  rounded,
  cursor,
  onClick,
  alt,
  type,
  width,
  height,
}: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      {/* {isLoading ? (
        <Skeleton />
      ) :  */}
      {/* ( */}
      <Image
        alt={alt}
        src={image}
        layout={type === "responsive" ? "responsive" : "fill"}
        {...(type === "responsive" ? { width, height } : {})}
        // width={width}
        // width={width}
        // height={height}
        objectFit="cover"
        className={cn(
          `group-hover:opacity-75 duration-700 ease-in-out object-cover ${
            rounded ? "rounded-xl" : ""
          }
             
            ${cursor ? "cursor-pointer" : ""}`
        )}
        onLoadingComplete={() => setLoading(false)}
        //   onLoad={() => setLoading(false)}
        onClick={onClick}
      />
      {/* )} */}
    </>
  );
}

/** @format */

/** @format */

import Image from "next/image";
import { useState } from "react";
type Props = {
  image: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
  className?: string;
  type?: "responsive" | "fill";
  rounded?: "string";
  cursor?: boolean;
  onClick?: () => void;
};
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function BlurImage({
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
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200  overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
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
            `group-hover:opacity-75 duration-700 ease-in-out object-cover rounded-xl ${
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            } cursor-${cursor}`
          )}
          onLoadingComplete={() => setLoading(false)}
          onClick={onClick}
        />
      </div>
    </>
  );
}

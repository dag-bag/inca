/** @format */

/** @format */

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
type Props = {
  image: { img: string; alt: string }[];
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
export default function ProductImage({
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
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <motion.div
        className={`w-full aspect-w-1 aspect-h-1 bg-gray-200  overflow-hidden  ${
          rounded ? "rounded-xl" : ""
        }`}
        key={currentImage}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        onMouseEnter={() => setCurrentImage(1)}
        onMouseLeave={() => setCurrentImage(0)}
      >
        <Image
          alt={image[currentImage].alt}
          src={image[currentImage].img}
          //   fill={true}
          style={{
            objectFit: "cover",
          }}
          width={300}
          height={300}
          quality={100}
          className={cn(
            `group-hover:opacity-75 duration-700 ease-in-out object-cover ${
              rounded ? "rounded-xl" : ""
            }  ${
              isLoading
                ? "grayscale blur-2xl scale-110"
                : "grayscale-0 blur-0 scale-100"
            } ${cursor ? "cursor-pointer" : ""}`
          )}
          onLoadingComplete={() => setLoading(false)}
          onClick={onClick}
        />
      </motion.div>
    </>
  );
}

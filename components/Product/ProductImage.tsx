/** @format */
import { type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Images, ImagesDatum } from "../../types/newtypes/product";
type Props = {
  image: ImagesDatum[];
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

type imageComponenetProps = {
  cursor: boolean;
  rounded: boolean;
  trigger: boolean;
  isLoading: boolean;
  onClick: () => void;
  image: ImagesDatum;
  setLoading: Dispatch<SetStateAction<boolean>>;
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
  const onMouseEnter = () => {
    setCurrentImage(1);
  };
  const onMouseLeave = () => {
    setCurrentImage(0);
  };
  return (
    <>
      <motion.div
        className={`w-full aspect-w-1 aspect-h-1 --bg-gray-200 overflow-hidden  ${
          rounded ? "rounded-xl" : ""
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ImageComponent
          {...({
            image: image[0],
            rounded,
            isLoading,
            cursor,
            setLoading,
            onClick,
            trigger: currentImage == 0,
          } as imageComponenetProps)}
        />
        <ImageComponent
          {...({
            image: image[1],
            rounded,
            isLoading,
            cursor,
            setLoading,
            onClick,
            trigger: currentImage == 1,
          } as imageComponenetProps)}
        />
      </motion.div>
    </>
  );
}

const ImageComponent: React.FC<imageComponenetProps> = ({
  image,
  rounded,
  isLoading,
  cursor,
  setLoading,
  onClick,
  trigger,
}) => {
  const MotionImage = motion(Image);
  return (
    <MotionImage
      alt={image.attributes.alternativeText ?? ""}
      src={image.attributes.formats.medium.url}
      transition={{ duration: 0.2 }}
      initial={trigger ? { opacity: 0 } : { opacity: 1 }}
      animate={trigger ? { opacity: 1 } : { opacity: 0 }}
      style={{ objectFit: "cover" }}
      width={300}
      height={300}
      quality={100}
      className={cn(
        `group-hover:opacity-75 duration-700 ease-in-out absolute object-cover ${
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
  );
};

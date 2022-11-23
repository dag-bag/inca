/** @format */

import { useState, useRef, useEffect } from "react";
import { FetchedProductType } from "../types/product";

import Btn from "./Btn";
import ProductCard from "./ProductCard";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
type Props = {
  products: FetchedProductType[];
};
export default function Carousel({ products }: Props) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<any>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: "next" | "prev") => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="w-full md:w-[80%] mx-auto ">
      <div className="flex items-center justify-center w-full h-full  relative  px-4">
        <button
          onClick={movePrev}
          className=" text-white w-10 h-full text-center  disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] left-14 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            "
          disabled={isDisabled("prev")}
        >
          <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[60px] h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              d="M37.5 48.75L18.75 30L37.5 11.25"
              stroke="#BD9575"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x={1}
              y={1}
              width={58}
              height={58}
              stroke="#BD9575"
              strokeWidth={2}
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={moveNext}
          className=" text-white w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] right-14 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            "
          disabled={isDisabled("next")}
        >
          <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[60px] h-[60px]"
            preserveAspectRatio="none"
          >
            <rect
              x={59}
              y={59}
              width={58}
              height={58}
              transform="rotate(-180 59 59)"
              fill="#BD9575"
            />
            <path
              d="M22.5 11.25L41.25 30L22.5 48.75"
              stroke="white"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x={59}
              y={59}
              width={58}
              height={58}
              transform="rotate(-180 59 59)"
              stroke="#BD9575"
              strokeWidth={2}
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
        {/* Carousel for desktop and large size devices */}
        <div className="carousel my-12 mx-auto max-w-full relative  md:block">
          <div className="relative overflow-hidden">
            <div
              ref={carousel}
              className="carousel-container relative flex gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory touch-pan-x z-0 pb-16 scrollbar"
            >
              {products.map((product, index) => {
                return <ProductCard {...product} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

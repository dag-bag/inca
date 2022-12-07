/** @format */

import { useState, useRef, useEffect } from "react";
import { FetchedProductType } from "../../types/product";

import Btn from "../buttons/Btn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ProductCard from "../Product/ProductCard";
import FeatureCard from "../Fav/FeatureCard";
interface FeaturesProps {
  title: string;
  svg: any;
  description: string;
}
/* Install pure-react-carousel using -> npm i pure-react-carousel */
type Props = {
  products?: FetchedProductType[];
  features?: FeaturesProps[];
  title?: string;
};
export default function Carousel({ products, features, title }: Props) {
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
    <div className="">
      <h2 className=" md:text-5xl text-black text-center font-bold my-4">
        {title}
      </h2>
      <div className="w-full md:w-[80%] mx-auto ">
        <div className="flex items-center justify-center w-full h-full  relative  px-4">
          <button
            onClick={movePrev}
            className="    disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] left-0 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            
            bg
            "
            disabled={isDisabled("prev")}
          >
            <GrFormPrevious className="text-3xl !text-black btn btn-circle" />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className=" text-white w-10 h-full text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300
            absolute top-[40%] right-0 transform -translate-x-1/2 -translate-y-1/2
            hidden md:block
            "
            disabled={isDisabled("next")}
          >
            <GrFormNext className="text-3xl !text-black btn btn-circle" />
            <span className="sr-only">Next</span>
          </button>
          {/* Carousel for desktop and large size devices */}
          <div className="carousel my-12 mx-auto max-w-full relative  md:block">
            <div className="relative overflow-hidden ">
              <div
                ref={carousel}
                className="carousel-container relative flex gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory  z-0 pb-16  md:!scrollbar-hide"
              >
                {products &&
                  products?.map((product, index) => {
                    return <ProductCard {...product} key={index} />;
                  })}
                {features &&
                  features.map((feature, index) => {
                    return <FeatureCard {...feature} key={index} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

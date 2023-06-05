/** @format */

import { useState, useRef, useEffect } from "react";
import { FetchedProductType } from "../../types/product";

import Btn from "../buttons/Btn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ProductCard from "../Product/ProductCard";
import FeatureCard from "../Fav/FeatureCard";
import CategoriesCard from "../Carosel/CategoriesCard";
import { ICategories } from "../../types/category";
import H2 from "../Headings/H2";
import { MainDatum } from "../../services/product/product";
interface FeaturesProps {
  title: string;
  svg: any;
  description: string;
}
/* Install pure-react-carousel using -> npm i pure-react-carousel */
type Props = {
  products?: MainDatum[];
  features?: FeaturesProps[];
  title?: string;
  categories?: ICategories[];
};
export default function Carousel({
  products,
  features,
  title,
  categories,
}: Props) {
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
    <div className="max-w-7xl m-auto relative">
      <H2 text={title} />
      <div className="flex items-center justify-center w-full">
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
        <div className="carousel  my-6 mx-auto max-w-full relative  md:block">
          <div className="relative overflow-hidden ">
            <div
              ref={carousel}
              className="carousel-container relative flex gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory   pb-16  md:!scrollbar-hide"
            >
              {products?.map((product, index) => {
                return (
                  <ProductCard
                    attributes={product.attributes}
                    id={product.id}
                    key={index}
                  />
                );
              })}
              {/* {features
                  ? features.map((feature, index) => {
                      return <FeatureCard {...feature} key={index} />;
                    })
                  : null}
                {categories?.map((category, index) => {
                  return <CategoriesCard {...category} key={index} />;
                })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

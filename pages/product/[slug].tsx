/** @format */

import mongoose from "mongoose";

import { GetStaticProps } from "next";
import { Toaster } from "react-hot-toast";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import BlurImage from "../../components/utils/BlurImage";

import Product from "../../models/Product";

import { cartSelector, cartTotal } from "../../atoms/cart";
import {
  FetchedProductType,
  Variant,
  VariantDetails,
} from "../../types/product";
import { favSelector } from "../../atoms/favraites";

type Props = {
  product: FetchedProductType;
  variants: Variant[];
  variantDetails: VariantDetails;
  relatedProducts: FetchedProductType[];
};

import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import ProductReviews from "../../components/Product/ProductReviews";
import Link from "next/link";
import Image from "next/image";
import SkeLeTonImage from "../../components/skeleton/SkeletonImage";
import SizeGuide, {
  SizeGuideOpenAtom,
} from "../../components/Product/SizeGuide";
import ProductImage from "../../components/Product/ProductImage";
import { SideCartOpenAtom } from "../../atoms/cart";
import Carousel from "../../components/utils/Carosel";
import { useRouter } from "next/dist/client/router";

const productRaw = {
  sizes: ["XS", "S", "M", "L", "XL"],
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  product,
  relatedProducts,
  variantDetails,
  variants,
}: Props) {
  let rating = 4;

  const [selectedSize, setSelectedSize] = useState(variantDetails.size[0]);
  const [selectedColor, setSelectedColor] = useState(variantDetails.size[0]);

  const refreshVarient = (slug: string) => {
    let url = `/product/${slug}`;
  };

  const [cart, SetCart] = useRecoilState(cartSelector);
  const uni = `${variantDetails.slug}-${selectedSize}-${variantDetails.color}`;
  const [isfav, favSet] = useRecoilState(favSelector(uni));
  const setModalOpen = useSetRecoilState(SizeGuideOpenAtom);
  const setCartOpen = useSetRecoilState(SideCartOpenAtom);
  const addedToCart = () => {
    let newProduct = {
      title: product.title,
      uni: `${variantDetails.slug}-${selectedSize}-${variantDetails.color}`,
      price: variantDetails.price,
      color: variantDetails.color,
      size: selectedSize,
      img: variantDetails.img,
      slug: variantDetails.slug,
      id: variantDetails._id,
      qty: 1,
      category: product.category,
      sellPrice: variantDetails.sellPrice,
    };
    SetCart(newProduct);
    setCartOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <main className="max-w-7xl mx-auto sm:pt-5 sm:px-6 lg:px-8 ">
        <div className="text-sm breadcrumbs px-5 mb-5 py-5 border-t border-b border-gray-100 md:block hidden ">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link
                href={`/category?category=${product.category}`}
                className="capitalize"
              >
                {product?.category?.split("-").join(" ")}
              </Link>
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6 gap-y-10">
                  {variantDetails.img.map((image, index) => (
                    <Tab
                      key={index}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none  "
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{ }</span>
                          <div className="absolute inset-0 rounded-md overflow-hidden h-32">
                            <BlurImage
                              image={image.img}
                              alt="product"
                              key={index}
                              className="h-14 w-14  cursor-pointer"
                              width={50}
                              height={50}
                              rounded={true}
                              cursor={true}
                            />
                          </div>
                          <span
                            className={classNames(
                              selected
                                ? "ring-primary outline-none"
                                : "ring-transparent",
                              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none h-32"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {variantDetails.img.map((image, index) => (
                  <Tab.Panel key={index}>
                    <SkeLeTonImage
                      width={600}
                      height={600}
                      image={image.img}
                      alt={image.alt}
                      type="responsive"
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-700">
                  <span className="text-orange-500 text-xl line-through mr-2">
                    ${variantDetails.price}
                  </span>
                  ${variantDetails.sellPrice}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          rating > rating ? "text-primary" : "text-yellow-500",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{rating} out of 5 stars</p>
                </div>
              </div>

              <form
                className="mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-600">Variant</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <ul className="flex flex-row  items-center mt-2 space-x-2">
                      {variants.map((item, index) => {
                        return (
                          // <Link key={index} href={`/${item.slug}`}>
                          <div
                            key={index}
                            className="h-14 w-14 relative hover:opacity-75 duration-700 ease-in-out border border-gray-200 rounded-xl"
                          >
                            <ProductImage
                              image={item.img}
                              alt="product"
                              key={index}
                              className="h-14 w-14  cursor-pointer"
                              width={50}
                              height={50}
                              rounded={true}
                              onClick={() => refreshVarient(item.slug)}
                              cursor={true}
                            />
                          </div>
                        );
                      })}
                    </ul>
                  </RadioGroup>
                </div>
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900">Size</h2>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-sm font-medium text-primary hover:text-primary"
                    >
                      See sizing chart
                    </button>
                    <SizeGuide currentCategories={product.category} />
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {productRaw.sizes.map((size) => {
                        const isAvail = variantDetails.size.includes(size);
                        return (
                          <RadioGroup.Option
                            key={size}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                isAvail
                                  ? "cursor-pointer focus:outline-none"
                                  : "opacity-25 cursor-not-allowed",
                                active
                                  ? "ring-2 ring-offset-2 ring-primary"
                                  : "",
                                checked
                                  ? "bg-primary border-transparent text-white hover:bg-[#8B5801]"
                                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!isAvail}
                          >
                            <RadioGroup.Label as="p">{size}</RadioGroup.Label>
                          </RadioGroup.Option>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-10 flex sm:flex-col1">
                  <button
                    className="max-w-xs flex-1 bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#8B5801] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary sm:w-full"
                    onClick={addedToCart}
                  >
                    Add to bag
                  </button>

                  <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();

                      let newProduct = {
                        title: product.title,
                        uni: `${variantDetails.slug}-${selectedSize}-${variantDetails.color}`,
                        price: variantDetails.price,
                        color: variantDetails.color,
                        size: selectedSize,
                        img: variantDetails.img,
                        slug: variantDetails.slug,
                        id: variantDetails._id,
                        qty: 1,
                        desc: product.desc,
                      };
                      favSet(newProduct);
                    }}
                  >
                    <HeartIcon
                      className={`h-6 w-6 flex-shrink-0 ${isfav ? "text-red-500" : ""
                        }`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  {product.desc}
                </div>
              </div>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200"></div>
              </section>
            </div>
          </div>

          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
          >
            <Carousel products={relatedProducts} title="You May Also Like" />
            {/* <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
              Customers also bought
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product, index) => (
                <div key={product._id}>
                  <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <Image
                        width={200}
                        height={200}
                        src={product.variant[0].img[0].img}
                        alt={product.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900 h-[40px]">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.variant[0].color}
                      </p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {product.variant[0].sellPrice}$
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href={`/product/${product.variant[0].slug}`}>
                      <span className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
                        View Product
                        <span className="sr-only">, {product.title}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div> */}
          </section>
          <ProductReviews />
        </div>
      </main>
    </div>
  );
}

// function ProductDetails({
//   product,
//   variants,
//   variantDetails,
//   relatedProducts,
// }: Props) {
//   const [size, setSize] = useState(variantDetails.size[0]);

//   const refreshVarient = (slug: string) => {
//     let url = `/product/${slug}`;
//   };

//   const [cart, SetCart] = useRecoilState(cartSelector);
//   const favSet = useSetRecoilState(favSelector);

//   if (!product)
//     return (
//       <div className="flex justify-center items-center w-full h-[60vh] text-5xl">
//         Error 404 Not Found!
//       </div>
//     );
//   return (
//     <>
//       <div
//         className={`grid grid-cols-1 md:flex  justify-evenly  flex-wrap   py-16 `}
//       >
//         <Head>
//           <title>
//             {product.title} | Alpaca Store | Alpaca Clothing | Alpaca Shoes
//           </title>
//           <meta name="description" content={product.desc} />
//         </Head>

//         {/* Left container */}
//         <div
//           className={`hidden  flex-1 md:flex  relative justify-center   md:mt-10`}
//         >
//           <div className="grid grid-cols-1 w-[90%] justify-center gap-4 ">
//             {variantDetails.img.map((item, index) => {
//               return (
//                 index === 0 && (
//                   <div
//                     key={index}
//                     className="w-full rounded-[3px] h-auto  md:w-[90%] relative m-auto "
//                   >
//                     <BlurImage
//                       image={item}
//                       alt={product.title}
//                       height={500}
//                       width={500}
//                       type="responsive"
//                       cursor={true}
//                     />
//                     {/* <BlurImage
//                     width={500}
//                     alt={product.title}
//                     height={500}
//                     key={index}
//                     image={item}
//                     type={"responsive"}
//                   /> */}
//                   </div>
//                 )
//               );
//               // );
//             })}
//             <div className="grid grid-cols-2 gap-y-5 place-items-center">
//               {variantDetails.img.map((item, index) => {
//                 return (
//                   index > 0 && (
//                     <div
//                       key={index}
//                       className="w-full  h-[26rem]  md:w-[80%] relative "
//                     >
//                       <BlurImage
//                         image={item}
//                         alt={product.title}
//                         height={500}
//                         width={500}
//                         type={"responsive"}
//                       />
//                       {/* <BlurImage
//                       width={500}
//                       height={500}
//                       key={index}
//                       image={item}
//                       alt={product.title}
//                       type={"responsive"}
//                     /> */}
//                     </div>
//                   )
//                 );
//                 // );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* <ProductCarousel /> */}
//         <MobileCarousel imgs={variantDetails.img} />
//         {/* Right container */}
//         <div
//           className={`px-5 flex justify-end flex-col   space-y-12 mt-8 md:w-[40%] relative`}
//         >
//           <div className={` text-left mb-6 md:w-[70%] flex  h-full`}>
//             <div className="w-full ">
//               {/* first container */}
//               <div className="text-left text-black ">
//                 <span className="text-lg font-semibold text-left text-black">
//                   {product.title} ({size}cm/
//                   {variantDetails.color})
//                 </span>
//                 <br />
//                 <span className="text-lg font-light text-left text-black">
//                   {variantDetails.price} €
//                 </span>
//                 <br />
//                 <br />
//                 <span className="text-sm font-light text-left text-black">
//                   REF. 8704403-incan-Mini
//                 </span>
//               </div>
//               {/* Sec container */}
//               <div className="space-y-7">
//                 <ul className="flex flex-row  items-center mt-2 space-x-2">
//                   {variants.map((item, index) => {
//                     return (
//                       // <Link key={index} href={`/${item.slug}`}>
//                       <div
//                         key={index}
//                         className="h-14 w-14 relative hover:opacity-75 duration-700 ease-in-out border border-gray-200 rounded-xl"
//                       >
//                         <BlurImage
//                           image={item.img[0]}
//                           alt="product"
//                           key={index}
//                           className="h-14 w-14  cursor-pointer"
//                           width={50}
//                           height={50}
//                           rounded={true}
//                           onClick={() => refreshVarient(item.slug)}
//                           cursor={true}
//                         />
//                       </div>
//                     );
//                   })}
//                 </ul>
//                 <div className="space-x-4">
//                   {variantDetails?.size?.map((i) => {
//                     return (
//                       <span
//                         key={i}
//                         className={`${
//                           size === i ? "bg-primary text-white" : " "
//                         }  py-2 px-4 rounded-md cursor-pointer  hover:bg-white hover:text-amber-600 transition duration-500 ease-in-out border btn border-1 border-gray-200`}
//                         onClick={() => {
//                           setSize(i);
//                         }}
//                       >
//                         {i}cm
//                       </span>
//                     );
//                   })}
//                 </div>
//                 <button
//                   className="btn  md:min-w-[24rem] btn-primary text-white"
//                   onClick={() => {
//                     let newProduct = {
//                       title: product.title,
//                       uni: `${variantDetails.slug}-${size}-${variantDetails.color}`,
//                       price: variantDetails.price,
//                       color: variantDetails.color,
//                       size: size,
//                       img: variantDetails.img,
//                       slug: variantDetails.slug,
//                       id: variantDetails._id,
//                       qty: 1,
//                     };
//                     SetCart(newProduct);
//                   }}
//                 >
//                   Add To Cart
//                 </button>
//                 <button
//                   className="rounded-[3px] border border-[#bd9575] text-primary-1 w-full flex justify-center items-center py-3 max-w-sm  "
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     let newProduct = {
//                       title: product.title,
//                       uni: `${variantDetails.slug}-${size}-${variantDetails.color}`,
//                       price: variantDetails.price,
//                       color: variantDetails.color,
//                       size: size,
//                       img: variantDetails.img,
//                       slug: variantDetails.slug,
//                       id: variantDetails._id,
//                       qty: 1,
//                       desc: product.desc,
//                     };
//                     favSet(newProduct);
//                   }}
//                 >
//                   Add to Fav
//                   <BsSuitHeart className="ml-3" />
//                 </button>
//               </div>
//               {/* Third container */}
//               <div className="">
//                 {/* Temp */}
//                 <div className="py-10">
//                   <p className="text-sm font-light text-left text-black flex items-center space-x-2">
//                     <svg
//                       width={18}
//                       height={14}
//                       viewBox="0 0 18 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       preserveAspectRatio="none"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M17.3218 0.971861L6.25742 13.6281L0 6.47037L0.849625 5.49851L6.25742 11.6843L16.4722 0L17.3218 0.971861V0.971861Z"
//                         fill="#04D200"
//                       />
//                     </svg>
//                     <span>Envío gratis a tu casa</span>
//                   </p>
//                   <span className="text-sm font-light text-left  text-[#bd9575]">
//                     Información sobre envíos y devoluciones
//                   </span>
//                 </div>
//                 {/* Details */}
//                 <div className="space-y-5">
//                   <div>
//                     <div className="flex items-center space-x-4 ">
//                       <svg
//                         width={45}
//                         height={45}
//                         viewBox="0 0 45 45"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[45px] h-[45px]"
//                         preserveAspectRatio="none"
//                       >
//                         <circle cx="22.5" cy="22.5" r={22} stroke="#BD9575" />
//                         <path
//                           d="M13.4822 33.3634H10.6176C10.1171 33.3634 10 33.2478 10 32.7432V27.0666C10 26.6146 10.1278 26.4779 10.5963 26.4779H13.4822V26.0679C13.4822 25.7841 13.642 25.6264 13.9188 25.6264H17.4117C17.4689 25.6216 17.5264 25.6292 17.5803 25.6486C17.6342 25.6681 17.6831 25.6989 17.7237 25.7389C17.7643 25.779 17.7955 25.8273 17.8152 25.8805C17.8348 25.9337 17.8425 25.9905 17.8377 26.0469C17.8377 26.2782 17.8377 26.5094 17.8377 26.7828L19.3818 26.4148C19.7066 26.3064 20.0422 26.2324 20.3828 26.1941C20.8606 26.1567 21.3414 26.1885 21.8098 26.2887C23.8544 26.8038 25.8884 27.3399 27.933 27.897C28.1753 27.9392 28.4066 28.0288 28.6133 28.1606C28.82 28.2924 28.9978 28.4637 29.1363 28.6644L33.2362 26.3307C33.4765 26.1897 33.7394 26.0902 34.0136 26.0364C34.3827 25.9764 34.7616 26.0387 35.091 26.2137C35.4204 26.3886 35.6819 26.6664 35.8346 27.0035C35.9992 27.3461 36.0425 27.7334 35.9575 28.1032C35.8726 28.473 35.6642 28.8039 35.366 29.0429C35.1942 29.1752 35.0127 29.2947 34.8229 29.4003L27.9862 33.3003C27.4171 33.6357 26.7641 33.8069 26.1014 33.7944C24.1277 33.7944 22.1576 33.7944 20.1911 33.7944C19.4509 33.8302 18.7147 33.6667 18.0613 33.3214L17.8057 33.2162C17.8057 33.416 17.8057 33.5947 17.8057 33.7734C17.8128 33.834 17.8058 33.8954 17.7851 33.9529C17.7644 34.0104 17.7307 34.0624 17.6865 34.105C17.6423 34.1477 17.5888 34.1797 17.5301 34.1988C17.4714 34.2178 17.409 34.2233 17.3478 34.2149C16.1977 34.2149 15.0583 34.2149 13.9188 34.2149C13.8572 34.223 13.7945 34.2173 13.7354 34.1983C13.6763 34.1793 13.6223 34.1475 13.5773 34.1051C13.5323 34.0627 13.4976 34.0109 13.4756 33.9535C13.4536 33.8961 13.445 33.8345 13.4503 33.7734L13.4822 33.3634ZM17.8377 27.6448C17.8377 29.169 17.8377 30.6513 17.8377 32.123C17.8393 32.1524 17.8479 32.181 17.8626 32.2065C17.8774 32.2321 17.8981 32.2538 17.9229 32.2701C18.5031 32.6404 19.1633 32.8709 19.8504 32.9429C21.9802 32.9429 24.11 32.9429 26.1865 32.9429C26.6162 32.9496 27.0396 32.8406 27.4112 32.6276L34.6099 28.5173C34.7609 28.4333 34.8889 28.3142 34.9827 28.1704C35.0933 28.0109 35.1432 27.8179 35.1238 27.6256C35.1043 27.4332 35.0166 27.2539 34.8762 27.1191C34.7385 26.9841 34.5596 26.8976 34.3671 26.8729C34.1747 26.8482 33.9793 26.8867 33.8113 26.9825C32.4056 27.7814 31.0105 28.5698 29.6155 29.3793C29.5725 29.4118 29.537 29.453 29.5113 29.5002C29.4856 29.5473 29.4703 29.5992 29.4665 29.6526C29.4577 29.9103 29.3901 30.1628 29.2687 30.3912C29.1473 30.6195 28.9753 30.8179 28.7655 30.9715C28.5556 31.1251 28.3134 31.2299 28.0567 31.2783C27.8001 31.3266 27.5358 31.3171 27.2834 31.2505L25.7925 30.8615L22.1719 29.8944C22.1089 29.8856 22.0484 29.8642 21.9941 29.8316C21.9398 29.7989 21.8928 29.7557 21.8559 29.7046C21.8191 29.6534 21.7931 29.5954 21.7797 29.5341C21.7663 29.4727 21.7657 29.4093 21.7778 29.3477C21.8417 29.0954 22.076 28.9903 22.3955 29.0744L23.9928 29.4844L27.507 30.42C27.6483 30.4565 27.7967 30.457 27.9383 30.4215C28.0798 30.3859 28.2099 30.3155 28.3164 30.2167C28.4228 30.1179 28.5021 29.9941 28.5468 29.8568C28.5915 29.7196 28.6001 29.5733 28.5719 29.4318C28.4867 28.9903 28.1566 28.8221 27.7519 28.717C26.0694 28.2755 24.3975 27.813 22.715 27.3819C22.1145 27.1599 21.4815 27.0357 20.8407 27.014C19.8347 27.1642 18.839 27.3748 17.859 27.6448H17.8377ZM14.3767 26.4884V33.3424H16.9538V26.4884H14.3767ZM13.4822 32.4909V27.3609H10.9051V32.4909H13.4822Z"
//                           fill="#BD9575"
//                         />
//                         <path
//                           d="M32.9176 13.1111L32.7692 12.9832C32.7294 12.8561 32.7519 12.723 32.833 12.6065C32.9142 12.4899 33.0489 12.3971 33.2145 12.3438C33.2145 12.3437 33.348 12.3438 33.3777 12.3438C33.4074 12.3438 33.6004 12.5462 33.5559 12.6954C33.5056 12.7536 33.4609 12.8141 33.4222 12.8766C33.4163 12.9178 33.3975 12.9575 33.3674 12.9928C33.3373 13.0281 33.2965 13.0581 33.2481 13.0805C33.1997 13.103 33.1449 13.1175 33.0877 13.1227C33.0305 13.128 32.9724 13.124 32.9176 13.1111V13.1111Z"
//                           fill="#BD9575"
//                           stroke="#BD9575"
//                           strokeWidth="0.25"
//                           strokeMiterlimit={10}
//                         />
//                         <path
//                           d="M33.5552 11.1266C33.56 10.8678 33.478 10.6154 33.3234 10.4136C33.1688 10.2118 32.9515 10.0734 32.7095 10.0227C32.4777 9.97285 32.2367 10.0057 32.0247 10.116C31.8127 10.2263 31.6419 10.4077 31.5393 10.6314C31.4312 10.8687 31.3131 11.0957 31.205 11.3227C30.9198 11.756 30.7723 12.2513 30.5265 12.7052C30.4675 12.8084 30.4478 12.9322 30.3494 13.0044C30.2511 13.0767 30.2118 13.0044 30.1528 12.9425C30.0394 12.8441 29.9028 12.7797 29.7574 12.7561C29.612 12.7325 29.4632 12.7506 29.3268 12.8084C29.2186 12.8084 29.1399 13.0148 29.0219 12.9219C28.8887 12.7998 28.723 12.7235 28.5472 12.7032C28.3714 12.6829 28.1939 12.7196 28.0385 12.8084C27.9205 12.9219 27.8222 12.9116 27.7042 12.8084C27.6501 12.7581 27.5847 12.7231 27.5141 12.7069C27.4435 12.6906 27.3702 12.6936 27.301 12.7156C27.0962 12.728 26.9002 12.8074 26.7405 12.9425C26.7322 12.9516 26.7223 12.9588 26.7113 12.9637C26.7003 12.9686 26.6885 12.9712 26.6766 12.9712C26.6646 12.9712 26.6528 12.9686 26.6418 12.9637C26.6308 12.9588 26.6209 12.9516 26.6127 12.9425C26.4503 12.8278 26.2545 12.7773 26.06 12.8C25.8655 12.8227 25.685 12.9171 25.5506 13.0663C25.4621 13.1489 25.3539 13.1592 25.3146 12.9941C25.2913 12.9042 25.2512 12.82 25.1966 12.7465C25.0954 12.4535 24.9635 12.1732 24.8033 11.9108C24.6623 11.6528 24.5406 11.3838 24.4394 11.106C24.3312 10.879 24.2919 10.6004 24.0854 10.425L24.0264 10.3735C23.8806 10.2058 23.6886 10.0899 23.4771 10.0418C23.2657 9.99374 23.0452 10.0159 22.8463 10.1052C22.6513 10.1892 22.4846 10.3321 22.3672 10.5158C22.2499 10.6996 22.1873 10.9158 22.1875 11.137V11.6528C22.1875 11.8076 22.1875 11.983 22.2465 12.1378C22.2618 12.4236 22.3464 12.7006 22.4923 12.9425C22.665 13.3053 22.8691 13.6507 23.102 13.9743C23.2171 14.1723 23.3755 14.3385 23.5642 14.4592L23.9084 14.7275C23.515 15.1092 23.3675 15.5116 23.6036 15.8418C23.8396 16.172 23.7019 16.3989 23.4954 16.6259C23.4092 16.7406 23.3624 16.8823 23.3624 17.0283C23.3624 17.1743 23.4092 17.316 23.4954 17.4307C23.5624 17.5468 23.6381 17.6572 23.7216 17.7609C23.8592 17.895 23.8691 17.9982 23.7216 18.1426C23.5748 18.2794 23.4786 18.466 23.4498 18.6698C23.4211 18.8735 23.4615 19.0814 23.5642 19.2569C23.6672 19.4625 23.8036 19.6475 23.9674 19.8038V19.8038C24.0046 19.8365 24.0516 19.8545 24.1002 19.8545C24.1487 19.8545 24.1957 19.8365 24.2329 19.8038C24.2835 19.7849 24.3256 19.747 24.351 19.6975C24.3765 19.6479 24.3834 19.5902 24.3706 19.5355C24.3459 19.4532 24.3019 19.3787 24.2427 19.3188C24.1444 19.1537 23.9772 19.0402 23.9182 18.8545C23.8964 18.8062 23.885 18.7533 23.885 18.6998C23.885 18.6462 23.8964 18.5934 23.9182 18.545C23.9827 18.4398 24.0586 18.3429 24.1444 18.2561C24.4296 17.9053 24.4296 17.864 24.1444 17.5236C23.8592 17.1831 23.7707 17.0077 24.1444 16.5537C24.5181 16.0997 24.4099 16.1823 24.1444 15.8315C24.0879 15.7899 24.0428 15.7335 24.0136 15.6679C23.9844 15.6023 23.9722 15.5298 23.9781 15.4577C23.9841 15.3855 24.0081 15.3163 24.0476 15.257C24.0872 15.1976 24.1409 15.1502 24.2034 15.1196C24.2857 15.0771 24.3498 15.0035 24.3826 14.9135C24.4154 14.8236 24.4146 14.724 24.3804 14.6346C24.3639 14.5866 24.3576 14.5354 24.3619 14.4845C24.3662 14.4336 24.3811 14.3844 24.4054 14.3402C24.4298 14.2959 24.4631 14.2578 24.5029 14.2285C24.5427 14.1992 24.5882 14.1793 24.6361 14.1703C24.7134 14.1571 24.785 14.1194 24.8412 14.0622C24.8975 14.005 24.9357 13.9311 24.9508 13.8505C24.9596 13.8001 24.9786 13.7523 25.0064 13.7103C25.0342 13.6682 25.0703 13.6328 25.1121 13.6065C25.154 13.5801 25.2007 13.5634 25.2491 13.5575C25.2976 13.5515 25.3468 13.5564 25.3933 13.5719C25.4781 13.5985 25.5687 13.5958 25.6519 13.5642C25.7352 13.5326 25.8065 13.4738 25.8555 13.3965C25.9054 13.3207 25.9811 13.2677 26.067 13.2486C26.1529 13.2294 26.2426 13.2454 26.3177 13.2933H26.3963C26.6913 13.541 26.6913 13.541 26.9765 13.2933L27.0453 13.2314C27.1003 13.1871 27.1677 13.1631 27.2371 13.1631C27.3065 13.1631 27.3738 13.1871 27.4288 13.2314L27.5665 13.3449C27.8517 13.6235 27.8714 13.6235 28.1467 13.3449C28.422 13.0664 28.5007 13.1283 28.7465 13.3449C28.8142 13.4306 28.8979 13.5008 28.9924 13.5513H29.0514C29.1434 13.5264 29.2258 13.4723 29.2874 13.3965C29.3263 13.3446 29.3773 13.3041 29.4355 13.279C29.4937 13.254 29.5571 13.2452 29.6195 13.2535C29.6819 13.2618 29.7412 13.2869 29.7916 13.3265C29.8419 13.366 29.8817 13.4186 29.9069 13.4791C29.9491 13.5322 30.0046 13.572 30.0671 13.5939C30.1297 13.6158 30.1968 13.6189 30.2609 13.6029C30.5953 13.6029 30.6739 13.6029 30.7821 13.933C30.7976 13.9834 30.8232 14.0297 30.8571 14.0688C30.891 14.108 30.9325 14.1391 30.9788 14.16C31.3131 14.2426 31.4017 14.3973 31.323 14.7481C31.3126 14.7922 31.3126 14.8382 31.323 14.8822C31.3674 14.9874 31.4434 15.0743 31.5393 15.1299C31.8343 15.3672 31.8442 15.5632 31.5983 15.8624C31.5 15.9862 31.3623 16.0894 31.4016 16.2751C31.5283 16.4821 31.6696 16.6787 31.8245 16.8632C31.8637 16.9405 31.8791 17.0287 31.8685 17.1155C31.8579 17.2024 31.8219 17.2837 31.7655 17.3482L31.4705 17.7093C31.4464 17.7342 31.4273 17.7639 31.4142 17.7967C31.4012 17.8295 31.3944 17.8646 31.3944 17.9002C31.3944 17.9357 31.4012 17.9708 31.4142 18.0036C31.4273 18.0364 31.4464 18.0661 31.4705 18.091C31.5507 18.2082 31.6394 18.3185 31.736 18.4212C31.7952 18.4769 31.8379 18.5494 31.8588 18.6299C31.8798 18.7104 31.8781 18.7956 31.854 18.8752C31.7998 18.9795 31.7338 19.0765 31.6573 19.1641L31.5885 19.2466C31.3328 19.5561 31.3328 19.5871 31.5196 19.845L31.5983 19.9482L31.6966 20.0617C31.7515 20.1038 31.7962 20.159 31.8269 20.2226C31.8577 20.2863 31.8737 20.3566 31.8737 20.428C31.8737 20.4993 31.8577 20.5697 31.8269 20.6333C31.7962 20.6969 31.7515 20.7521 31.6966 20.7942L31.4705 21.0831C31.447 21.1063 31.4282 21.1343 31.4154 21.1653C31.4026 21.1964 31.396 21.2298 31.396 21.2637C31.396 21.2975 31.4026 21.331 31.4154 21.3621C31.4282 21.3931 31.447 21.4211 31.4705 21.4442L31.7163 21.7538C31.7163 21.7538 31.7163 21.7538 31.7655 21.7538C31.9622 22.022 31.9228 22.2284 31.6475 22.476C31.6132 22.5026 31.5861 22.5382 31.5688 22.5792C31.5688 22.672 31.441 22.7443 31.4115 22.8474C31.4055 22.8867 31.4087 22.9269 31.4207 22.9646C31.4327 23.0023 31.4531 23.0364 31.4803 23.0641L31.7262 23.3736C31.7791 23.4149 31.822 23.4686 31.8516 23.5304C31.8812 23.5922 31.8966 23.6604 31.8966 23.7296C31.8966 23.7988 31.8812 23.867 31.8516 23.9288C31.822 23.9906 31.7791 24.0443 31.7262 24.0856C31.6366 24.1818 31.5544 24.2853 31.4803 24.3951C31.4541 24.4382 31.4401 24.4883 31.4401 24.5395C31.4401 24.5907 31.4541 24.6408 31.4803 24.684V24.684C31.559 24.8284 31.677 24.9316 31.7557 25.0864C31.6814 25.106 31.6037 25.106 31.5295 25.0864H24.2821C24.2231 25.0864 24.1542 25.0864 24.1149 25.0864C24.0756 25.0864 24.3509 24.8078 24.4296 24.6324C24.5082 24.457 24.2821 24.3125 24.1837 24.1681L24.1051 24.0752C24.0542 24.0348 24.0128 23.9826 23.9844 23.9226C23.956 23.8627 23.9412 23.7966 23.9412 23.7296C23.9412 23.6626 23.956 23.5965 23.9844 23.5366C24.0128 23.4766 24.0542 23.4244 24.1051 23.384L24.2329 23.2395C24.4886 22.9197 24.4886 22.899 24.2329 22.5689C24.1958 22.5094 24.153 22.454 24.1051 22.4038C24.054 22.3623 24.0127 22.3091 23.9843 22.2483C23.9559 22.1875 23.9411 22.1207 23.9411 22.053C23.9411 21.9853 23.9559 21.9184 23.9843 21.8576C24.0127 21.7968 24.054 21.7436 24.1051 21.7022C24.1955 21.6003 24.2809 21.4936 24.3607 21.3823C24.3912 21.3529 24.413 21.3148 24.4234 21.2728C24.4339 21.2307 24.4326 21.1864 24.4197 21.145C24.3864 21.0736 24.3433 21.0075 24.2919 20.949C24.1118 20.7714 23.9796 20.5473 23.9084 20.299C23.9063 20.2751 23.8992 20.252 23.8878 20.2313C23.8763 20.2106 23.8607 20.1927 23.842 20.179C23.8232 20.1652 23.8019 20.1559 23.7794 20.1517C23.7569 20.1475 23.7338 20.1485 23.7117 20.1545V20.1545C23.4954 20.2165 23.4561 20.2887 23.4856 20.526C23.5314 20.7474 23.6454 20.9468 23.8101 21.0935C23.8986 21.1863 23.8887 21.2379 23.8101 21.3204C23.6585 21.4701 23.5467 21.6585 23.4856 21.8673C23.4562 21.9996 23.4562 22.1373 23.4856 22.2697C23.4859 22.3438 23.5052 22.4164 23.5416 22.4799C23.5779 22.5435 23.6299 22.5956 23.6921 22.6308C23.9379 22.8784 23.9379 22.8784 23.6921 23.126C23.5511 23.2861 23.4728 23.4961 23.4728 23.7141C23.4728 23.9321 23.5511 24.1421 23.6921 24.3022C23.6888 24.3262 23.6888 24.3505 23.6921 24.3745C23.8494 24.5705 23.8494 24.5705 23.6921 24.7562C23.5506 24.9047 23.4192 25.0633 23.2987 25.2308C23.2687 25.2587 23.2466 25.2947 23.235 25.3349C23.2234 25.3751 23.2226 25.418 23.2328 25.4586C23.243 25.4993 23.2637 25.5361 23.2927 25.5651C23.3217 25.5942 23.3579 25.6141 23.3971 25.6229H32.3555C32.3995 25.6294 32.4442 25.6208 32.4832 25.5985C32.5222 25.5762 32.5533 25.5414 32.5719 25.4991C32.5935 25.4568 32.6005 25.4079 32.5915 25.3608C32.5825 25.3137 32.5582 25.2714 32.5227 25.2411L32.1982 24.8284C32.0605 24.5705 31.9818 24.6014 32.1982 24.3125C32.2912 24.2122 32.3554 24.0863 32.3832 23.9494C32.411 23.8125 32.4014 23.6702 32.3555 23.5387C32.2944 23.33 32.1826 23.1415 32.031 22.9919C31.9425 22.9093 31.9425 22.8474 32.031 22.7649C32.1489 22.6551 32.2399 22.5172 32.2964 22.3628C32.3529 22.2084 32.3732 22.0419 32.3555 21.8776C32.3518 21.7706 32.3251 21.6658 32.2774 21.5712C32.2297 21.4765 32.1623 21.3943 32.0802 21.3308C32.0574 21.3187 32.0383 21.3003 32.0249 21.2775C32.0116 21.2547 32.0045 21.2285 32.0045 21.2018C32.0045 21.175 32.0116 21.1488 32.0249 21.1261C32.0383 21.1033 32.0574 21.0849 32.0802 21.0728L32.149 20.98C32.2827 20.8302 32.3633 20.6369 32.3777 20.4322C32.392 20.2276 32.339 20.024 32.2277 19.8553C32.149 19.7315 31.9622 19.6387 31.9917 19.5045C32.0212 19.3704 32.1687 19.2569 32.267 19.1331C32.3655 19.0104 32.4195 18.8551 32.4195 18.6946C32.4195 18.5342 32.3655 18.3789 32.267 18.2561C32.1883 18.1633 32.1293 18.0601 32.0408 17.9672C31.9523 17.8744 31.9523 17.7918 32.0408 17.6783C32.1293 17.6052 32.2027 17.5141 32.2567 17.4105C32.3108 17.3069 32.3443 17.1929 32.3554 17.0753C32.3664 16.9578 32.3547 16.8391 32.3209 16.7264C32.2871 16.6137 32.232 16.5094 32.1588 16.4196C32.1258 16.3851 32.0997 16.3441 32.0818 16.2989C32.0639 16.2538 32.0547 16.2054 32.0547 16.1565C32.0547 16.1076 32.0639 16.0592 32.0818 16.014C32.0997 15.9689 32.1258 15.9279 32.1588 15.8934C32.217 15.7919 32.2526 15.6779 32.2628 15.56C32.273 15.4421 32.2577 15.3232 32.2179 15.2124C32.1486 14.9976 32.0138 14.8126 31.8343 14.6862C32.0097 14.5526 32.1772 14.4079 32.3359 14.2529C32.3643 14.2352 32.3889 14.2114 32.4081 14.183C32.4272 14.1547 32.4405 14.1225 32.447 14.0884C32.4534 14.0544 32.453 14.0193 32.4458 13.9854C32.4385 13.9515 32.4245 13.9196 32.4047 13.8918C32.3162 13.7267 32.208 13.7679 32.09 13.8918C31.972 14.0156 31.9523 14.0362 31.854 14.0878C31.84 14.0995 31.8227 14.1059 31.8048 14.1059C31.787 14.1059 31.7696 14.0995 31.7557 14.0878C31.6516 13.915 31.501 13.7786 31.323 13.6957C31.1952 13.5719 31.1558 13.3656 30.9985 13.2624C30.8411 13.1592 30.9001 13.1076 30.9985 12.9941C31.2345 12.5298 31.4606 12.0552 31.6671 11.5806C31.7851 11.3227 31.8933 11.0647 32.031 10.8171C32.0711 10.7411 32.1261 10.6749 32.1922 10.6226C32.2583 10.5703 32.3342 10.5333 32.4149 10.5138C32.4956 10.4943 32.5793 10.4929 32.6606 10.5096C32.7418 10.5263 32.8188 10.5608 32.8865 10.6108C32.9767 10.677 33.048 10.7676 33.093 10.873C33.138 10.9783 33.155 11.0945 33.1422 11.2092C33.1422 11.3949 33.1422 11.56 33.3782 11.6013C33.3889 11.6067 33.4007 11.6096 33.4126 11.6096C33.4246 11.6096 33.4363 11.6067 33.4471 11.6013C33.6044 11.4671 33.5552 11.2814 33.5552 11.1266ZM23.9084 14.2219C23.7123 14.0763 23.5397 13.8986 23.3971 13.6957C23.1212 13.3573 22.9197 12.9592 22.807 12.5298C22.6427 12.0511 22.5789 11.5408 22.6202 11.0338C22.6197 11.0027 22.6256 10.9719 22.6375 10.9434C22.6493 10.9149 22.6669 10.8894 22.689 10.8687C22.7337 10.7631 22.8041 10.6716 22.893 10.6035C22.982 10.5353 23.0864 10.4929 23.1959 10.4803C23.3054 10.4678 23.4161 10.4856 23.517 10.5321C23.6179 10.5785 23.7053 10.6519 23.7707 10.7449V10.7449C23.8904 10.9393 23.9893 11.1469 24.0657 11.364C24.2722 11.7663 24.4591 12.179 24.6361 12.6021L24.9016 13.1283C24.9508 13.2211 24.9016 13.2521 24.8229 13.283C24.7442 13.314 24.6459 13.5616 24.5377 13.6751C24.3261 13.8539 24.1258 14.0469 23.9379 14.2529L23.9084 14.2219Z"
//                           fill="#BD9575"
//                           stroke="#BD9575"
//                           strokeWidth="0.25"
//                           strokeMiterlimit={10}
//                         />
//                         <path
//                           d="M29.1213 16.329C29.4029 16.2237 29.7144 16.2237 29.996 16.329L30.1709 16.4476C30.3055 16.5661 30.3593 16.6978 30.2651 16.8427C30.245 16.8788 30.217 16.91 30.1831 16.9341C30.1492 16.9583 30.1102 16.9747 30.069 16.9823C30.0277 16.9899 29.9853 16.9884 29.9448 16.9779C29.9042 16.9674 29.8665 16.9482 29.8345 16.9217C29.7966 16.8797 29.75 16.846 29.6978 16.8229C29.6456 16.7999 29.589 16.7879 29.5317 16.7879C29.4744 16.7879 29.4178 16.7999 29.3656 16.8229C29.3134 16.846 29.2668 16.8797 29.2289 16.9217C29.0809 17.0402 28.9195 17.0929 28.7849 16.9217C28.7224 16.8579 28.6875 16.773 28.6875 16.6846C28.6875 16.5963 28.7224 16.5113 28.7849 16.4476L29.1213 16.329Z"
//                           fill="#BD9575"
//                           stroke="#BD9575"
//                           strokeWidth="0.25"
//                           strokeMiterlimit={10}
//                         />
//                         <path
//                           d="M26.1659 16.5142C26.2487 16.6594 26.3039 16.7914 26.1659 16.9366C26.0279 17.0818 25.8899 17.0422 25.7381 16.9366C25.7054 16.8931 25.6638 16.8564 25.6159 16.8287C25.5679 16.801 25.5146 16.7829 25.4591 16.7755C25.4037 16.7681 25.3472 16.7716 25.2931 16.7856C25.2391 16.7997 25.1886 16.8241 25.1447 16.8574C24.9653 16.963 24.7997 17.0026 24.6755 16.8574C24.5513 16.7122 24.6755 16.5274 24.8411 16.4218C25.0417 16.2955 25.2803 16.2361 25.5199 16.2528C25.7595 16.2695 25.9866 16.3614 26.1659 16.5142V16.5142Z"
//                           fill="#BD9575"
//                           stroke="#BD9575"
//                           strokeWidth="0.25"
//                           strokeMiterlimit={10}
//                         />
//                         <path
//                           d="M27.1869 17.8549C27.5278 18.1108 27.553 18.1219 27.9191 17.8549C28.0832 17.7881 28.222 17.7881 28.3104 17.9439C28.3988 18.0997 28.3104 18.1887 28.1589 18.2554C28.0075 18.3222 27.755 18.4557 27.8181 18.7116C27.8181 18.8007 27.8181 18.8897 27.957 18.923C28.0102 18.9298 28.0645 18.9188 28.1089 18.892C28.1533 18.8652 28.1847 18.8246 28.1968 18.7784C28.2018 18.734 28.2018 18.6893 28.1968 18.6449C28.2079 18.6155 28.2258 18.5885 28.2494 18.5656C28.273 18.5427 28.3017 18.5244 28.3338 18.5118C28.3659 18.4993 28.4006 18.4927 28.4357 18.4927C28.4708 18.4926 28.5055 18.4989 28.5376 18.5114C28.6891 18.5114 28.7144 18.6671 28.6639 18.8007C28.525 19.2457 28.0958 19.535 27.5783 19.2791C27.5783 19.2791 27.4899 19.2791 27.4268 19.2791C27.3441 19.3233 27.252 19.3518 27.1562 19.3627C27.0603 19.3737 26.963 19.3669 26.8703 19.3429C26.7776 19.3188 26.6917 19.2779 26.6179 19.2229C26.5442 19.1678 26.4843 19.0998 26.4421 19.0232C26.3717 18.9655 26.3195 18.8926 26.2907 18.8118C26.1897 18.6449 26.2906 18.5447 26.4421 18.478C26.516 18.4467 26.6008 18.442 26.6785 18.4648C26.7563 18.4877 26.8209 18.5363 26.8587 18.6004V18.6004C26.8587 18.6894 26.9344 18.8229 27.1112 18.7673C27.2879 18.7116 27.1869 18.4891 27.1112 18.4001C27.0576 18.3568 26.9983 18.3195 26.9345 18.2888C26.8714 18.2637 26.8165 18.2251 26.7746 18.1765C26.7327 18.1279 26.7052 18.0709 26.6946 18.0107C26.7956 17.8549 26.9723 17.8437 27.1869 17.8549Z"
//                           fill="#BD9575"
//                         />
//                         <path
//                           d="M29.4916 19.4341L29.3841 18.7948V18.6862C29.2905 18.125 29.1669 17.5692 29.0138 17.0215C28.9825 16.9057 28.9253 16.7987 28.8466 16.7088C28.7679 16.6189 28.6698 16.5484 28.5599 16.5028C28.1277 16.2855 27.6404 16.2056 27.1623 16.2736C26.857 16.2774 26.562 16.3857 26.3255 16.5807C26.0891 16.7757 25.925 17.0459 25.8602 17.3472L25.5018 18.9878C25.3806 19.4244 25.432 19.8915 25.6452 20.2906C25.8593 20.5833 26.1608 20.7989 26.5053 20.9058C27.1536 20.9481 27.804 20.9481 28.4524 20.9058C28.6845 20.841 28.8984 20.7221 29.0768 20.5587C29.2552 20.3953 29.3932 20.1919 29.4797 19.9649C29.5019 19.7889 29.5059 19.611 29.4916 19.4341V19.4341ZM28.1298 20.4233C27.6759 20.4233 27.21 20.4233 26.7561 20.4233C26.6 20.4279 26.4467 20.3809 26.3195 20.2895C26.1923 20.198 26.0981 20.0671 26.0513 19.9166V19.9166C26.0033 19.8473 25.971 19.7681 25.9565 19.6847C25.9421 19.6014 25.9459 19.5158 25.9677 19.4341C25.982 19.2445 26.0222 19.0577 26.0872 18.8792C26.0872 18.8792 26.0872 18.8792 26.0872 18.8792C26.1591 18.3734 26.2669 17.8735 26.4097 17.3834C26.438 17.2848 26.4899 17.1948 26.5607 17.1212C26.6315 17.0476 26.7191 16.9926 26.8159 16.9612C27.2411 16.8104 27.7046 16.8104 28.1298 16.9612V16.9612C28.25 17.006 28.3563 17.082 28.4381 17.1815C28.5199 17.2811 28.5743 17.4006 28.5957 17.5281V17.5281C28.7391 18.1313 28.8824 18.7344 28.966 19.3497C28.9968 19.4775 28.9984 19.6107 28.9707 19.7392C28.9431 19.8678 28.8868 19.9883 28.8063 20.0917C28.7258 20.1951 28.6231 20.2787 28.5059 20.3361C28.3887 20.3936 28.2601 20.4234 28.1298 20.4233V20.4233Z"
//                           fill="#BD9575"
//                           stroke="#BD9575"
//                           strokeWidth="0.1"
//                           strokeMiterlimit={10}
//                         />
//                         <path
//                           d="M28.5728 18.9807C28.5279 18.9723 28.4776 18.9721 28.4324 18.9801C28.3871 18.9881 28.3504 19.0037 28.3298 19.0237C28.2883 19.0626 28.2386 19.0997 28.1813 19.1342C28.1548 19.1555 28.115 19.1728 28.0669 19.1837C28.0188 19.1947 27.9646 19.1988 27.9113 19.1956C27.8552 19.1902 27.8048 19.1763 27.7681 19.1563C27.7314 19.1362 27.7105 19.1112 27.7088 19.0851C27.7088 18.9745 27.7088 18.8763 27.9518 18.821H28.0328C28.1408 18.7841 28.2623 18.7473 28.2083 18.6797C28.1543 18.6122 28.0058 18.6245 27.8843 18.6183C27.8593 18.6531 27.8069 18.6825 27.737 18.7006C27.6671 18.7188 27.5849 18.7245 27.5063 18.7166C27.4204 18.7185 27.3356 18.7075 27.2649 18.6853C27.1941 18.6631 27.1414 18.6309 27.1148 18.5938V18.5938C26.9528 18.5938 26.7503 18.5937 26.7503 18.7227C26.8077 18.7696 26.898 18.8064 27.0068 18.8271C27.2633 18.8701 27.3038 18.9623 27.2768 19.0728C27.2848 19.0948 27.2738 19.1172 27.2461 19.1356C27.2184 19.1539 27.1762 19.1666 27.1283 19.1711C27.0203 19.1711 26.9528 19.1711 26.8988 19.1097C26.8448 19.0482 26.8313 19.0482 26.8043 19.0114C26.7917 18.9941 26.7707 18.9783 26.7429 18.9651C26.7152 18.9519 26.6813 18.9418 26.6439 18.9353C26.6064 18.9288 26.5662 18.9262 26.5262 18.9277C26.4863 18.9292 26.4475 18.9347 26.4128 18.9438C26.3782 18.9486 26.3465 18.9571 26.3204 18.9685C26.2943 18.9799 26.2745 18.994 26.2626 19.0096C26.2508 19.0252 26.2472 19.0418 26.2522 19.0581C26.2572 19.0744 26.2706 19.09 26.2913 19.1035C26.2913 19.1465 26.2913 19.1772 26.2913 19.2141H26.3723C26.4852 19.2619 26.6072 19.305 26.7368 19.3431C26.8218 19.364 26.9169 19.375 27.0136 19.375C27.1102 19.375 27.2053 19.364 27.2903 19.3431C27.3497 19.3308 27.4141 19.3245 27.4793 19.3245C27.5445 19.3245 27.6089 19.3308 27.6683 19.3431C27.7705 19.3638 27.8821 19.3731 27.9939 19.3703C28.1056 19.3674 28.2142 19.3524 28.3107 19.3266C28.4071 19.3008 28.4886 19.2648 28.5483 19.2217C28.6079 19.1786 28.6441 19.1297 28.6538 19.079C28.7078 19.0728 28.7078 18.9991 28.5728 18.9807Z"
//                           fill="#BD9575"
//                         />
//                       </svg>
//                       <p className=" text-base text-left text-black">
//                         Product Description
//                       </p>
//                     </div>
//                     <p className="ml-[3.8rem] text-sm font-light text-left text-[#5c5c5c]">
//                       {product.desc}
//                     </p>
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-4 ">
//                       <svg
//                         width={45}
//                         height={45}
//                         viewBox="0 0 45 45"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[45px] h-[45px]"
//                         preserveAspectRatio="none"
//                       >
//                         <circle cx="22.5" cy="22.5" r={22} stroke="#BD9575" />
//                         <path
//                           d="M29.358 33.7094L28.1475 35.4956C27.9313 35.7993 27.8102 35.8261 27.5076 35.6028L24.0488 33.0842C23.7635 32.8788 23.7462 32.7449 23.9451 32.4591L25.1643 30.6729L24.9221 30.4853C24.8834 30.4641 24.8497 30.4341 24.8236 30.3976C24.7975 30.3611 24.7796 30.319 24.7713 30.2745C24.763 30.2299 24.7645 30.184 24.7757 30.1402C24.7868 30.0963 24.8073 30.0555 24.8357 30.0209C25.3199 29.2975 25.8128 28.583 26.3057 27.8685C26.3282 27.8317 26.3579 27.8002 26.3929 27.7759C26.4279 27.7517 26.4674 27.7352 26.509 27.7276C26.5505 27.7201 26.5931 27.7215 26.634 27.732C26.6749 27.7424 26.7133 27.7615 26.7467 27.7882C26.8937 27.8864 27.032 27.9936 27.1963 28.1186L27.62 26.9933C27.6985 26.7471 27.7969 26.5081 27.914 26.2788C28.0945 25.9665 28.3188 25.6835 28.5798 25.4393C29.7558 24.4033 30.9491 23.3941 32.1424 22.376C32.2702 22.2432 32.4226 22.1384 32.5904 22.0678C32.7583 21.9972 32.9382 21.9623 33.1195 21.9652C33.2232 20.7684 33.327 19.5895 33.4394 18.3928C33.4606 18.1832 33.5131 17.9784 33.5951 17.7855C33.7132 17.5292 33.9112 17.3212 34.1573 17.1949C34.4035 17.0686 34.6835 17.0313 34.9526 17.0888C35.2301 17.14 35.483 17.2857 35.6711 17.5026C35.8591 17.7195 35.9715 17.9951 35.9903 18.2856C36.0032 18.4491 36.0032 18.6133 35.9903 18.7768C35.8173 20.7595 35.6357 22.7422 35.4628 24.7248C35.4189 25.2244 35.2457 25.7025 34.9613 26.1091C34.1197 27.2999 33.2838 28.5175 32.4537 29.7619C32.1709 30.221 31.7776 30.5964 31.3123 30.8515C31.2494 30.8828 31.1887 30.9186 31.1307 30.9587L31.4679 31.1998C31.5078 31.2236 31.5422 31.2563 31.5684 31.2955C31.5946 31.3346 31.6121 31.3794 31.6195 31.4264C31.627 31.4734 31.6242 31.5215 31.6115 31.5673C31.5987 31.613 31.5762 31.6553 31.5457 31.691C31.0701 32.3966 30.5773 33.1021 30.093 33.8077C30.0706 33.8482 30.0399 33.8831 30.003 33.9101C29.9661 33.9371 29.924 33.9555 29.8796 33.964C29.8352 33.9725 29.7895 33.9709 29.7457 33.9593C29.7019 33.9478 29.6611 33.9265 29.6261 33.897L29.358 33.7094ZM27.7411 28.4848L30.4562 30.4764C30.4978 30.4938 30.5443 30.4938 30.5859 30.4764C31.0547 30.282 31.4725 29.976 31.8052 29.5833C32.6698 28.2794 33.5951 26.9755 34.4857 25.6715C34.6717 25.4102 34.7853 25.1014 34.8143 24.7784C35.0045 22.6767 35.1919 20.5928 35.3764 18.5267C35.3865 18.3963 35.3688 18.2652 35.3245 18.1427C35.2696 18.0141 35.176 17.9072 35.0576 17.838C34.9392 17.7688 34.8023 17.741 34.6673 17.7587C34.5203 17.7813 34.3856 17.8561 34.2862 17.9702C34.1868 18.0843 34.1289 18.2305 34.1225 18.3838C34.0015 19.5985 33.8977 20.8131 33.7939 22.0366C33.7952 22.0771 33.8042 22.1169 33.8205 22.1537C33.8369 22.1905 33.8602 22.2236 33.8891 22.251C34.0432 22.3688 34.1693 22.5214 34.2578 22.6971C34.3463 22.8728 34.3949 23.067 34.3999 23.2649C34.4049 23.4629 34.3662 23.6595 34.2867 23.8397C34.2071 24.02 34.0889 24.1791 33.941 24.3051L33.0763 25.0553L30.9577 26.8415C30.9269 26.8776 30.889 26.9065 30.8465 26.9263C30.804 26.9461 30.7579 26.9564 30.7113 26.9564C30.6647 26.9564 30.6186 26.9461 30.5761 26.9263C30.5336 26.9065 30.4957 26.8776 30.4649 26.8415C30.3351 26.6897 30.3697 26.5021 30.5513 26.3414L31.4852 25.5376C32.1683 24.957 32.8514 24.3765 33.5345 23.7514C33.62 23.6826 33.6865 23.592 33.7277 23.4885C33.7688 23.385 33.7831 23.2722 33.7691 23.1613C33.7551 23.0504 33.7134 22.9451 33.648 22.8559C33.5826 22.7668 33.4958 22.6968 33.3962 22.6529C33.2647 22.5947 33.1188 22.5807 32.9792 22.6127C32.8396 22.6448 32.7133 22.7213 32.618 22.8315L29.678 25.3589C29.2879 25.6299 28.9433 25.9647 28.6576 26.3503C28.3095 27.0414 28.0034 27.7543 27.7411 28.4848V28.4848ZM25.5793 30.1192L29.7212 33.1557L30.8194 31.557L26.6688 28.5205L25.5793 30.1192ZM28.8219 33.3432L25.7177 31.0658L24.6281 32.6645L27.7324 34.933L28.8219 33.3432Z"
//                           fill="#BD9575"
//                         />
//                         <path
//                           d="M16.8232 33.8935C16.7863 33.925 16.7427 33.9482 16.6954 33.9614C16.6482 33.9746 16.5985 33.9774 16.55 33.9697C16.5015 33.962 16.4553 33.944 16.4149 33.9169C16.3744 33.8898 16.3407 33.8543 16.3161 33.8131L14.7673 31.6868C14.7349 31.6519 14.711 31.6103 14.6974 31.5652C14.6838 31.5201 14.6809 31.4726 14.6889 31.4262C14.6969 31.3799 14.7155 31.3359 14.7435 31.2975C14.7714 31.259 14.8079 31.2272 14.8503 31.2044L15.2099 30.9542L15.0255 30.847C14.517 30.5995 14.0846 30.2267 13.7717 29.766C12.8959 28.5421 12.0016 27.3271 11.1074 26.1121C10.7971 25.7057 10.6117 25.2226 10.5727 24.7184C10.3883 22.7351 10.1947 20.7518 10.0103 18.7685C9.99656 18.605 9.99656 18.4406 10.0103 18.2771C10.0307 17.9876 10.1509 17.7131 10.3515 17.4977C10.5521 17.2822 10.8215 17.1383 11.1166 17.0889C11.4037 17.0317 11.7023 17.0681 11.9658 17.1925C12.2293 17.317 12.4428 17.5224 12.5732 17.7768C12.6566 17.9737 12.7094 18.1814 12.7299 18.3933C12.8498 19.5725 12.9604 20.7607 13.0802 21.9668C13.4688 21.9617 13.8435 22.1063 14.122 22.3688C15.385 23.3962 16.6664 24.4057 17.9202 25.4421C18.193 25.689 18.4288 25.9717 18.6209 26.2818C18.7534 26.5076 18.8586 26.7474 18.9343 26.9966C19.091 27.3628 19.2385 27.7291 19.3953 28.1133L19.8654 27.7917C19.9004 27.7646 19.9408 27.7449 19.9841 27.7338C20.0274 27.7227 20.0726 27.7204 20.1168 27.7271C20.161 27.7338 20.2033 27.7494 20.241 27.7728C20.2786 27.7962 20.3109 27.827 20.3356 27.8631L21.9121 30.0251C21.9408 30.0604 21.9613 30.1012 21.9722 30.1448C21.9832 30.1884 21.9843 30.2338 21.9756 30.2778C21.9669 30.3219 21.9484 30.3636 21.9216 30.4002C21.8947 30.4368 21.86 30.4673 21.8199 30.4897L21.5525 30.6684L22.8616 32.4551C23.0737 32.75 23.046 32.884 22.751 33.0894L19.0634 35.5998C18.7407 35.8232 18.6117 35.8053 18.3904 35.4926L17.0905 33.7059L16.8232 33.8935ZM17.8373 26.3622C17.5335 25.9791 17.1695 25.6444 16.7586 25.3706C15.7169 24.5219 14.6659 23.691 13.6242 22.8513C13.5214 22.7399 13.3856 22.6621 13.2354 22.6285C13.0852 22.5949 12.928 22.6072 12.7853 22.6636C12.6797 22.7098 12.5883 22.7815 12.5197 22.8719C12.4512 22.9624 12.4078 23.0684 12.3939 23.1798C12.38 23.2912 12.396 23.4041 12.4403 23.5078C12.4847 23.6114 12.5558 23.7022 12.647 23.7714C13.366 24.3611 14.1036 24.9418 14.8319 25.5582L15.8183 26.3622C16.0211 26.5231 16.0488 26.7107 15.9197 26.8625C15.8853 26.8977 15.8438 26.9257 15.7978 26.9448C15.7519 26.9639 15.7024 26.9738 15.6524 26.9738C15.6023 26.9738 15.5528 26.9639 15.5069 26.9448C15.4609 26.9257 15.4194 26.8977 15.385 26.8625C14.629 26.264 13.8823 25.6565 13.1356 25.0758C12.8221 24.8346 12.5087 24.5844 12.2137 24.3253C12.057 24.199 11.9317 24.04 11.8472 23.8603C11.7626 23.6806 11.721 23.4846 11.7255 23.2872C11.7299 23.0897 11.7802 22.8957 11.8728 22.7197C11.9653 22.5437 12.0975 22.3901 12.2598 22.2705C12.2927 22.2443 12.3195 22.2117 12.3386 22.1747C12.3576 22.1378 12.3685 22.0974 12.3704 22.0561C12.2598 20.8411 12.1399 19.6261 12.0201 18.4111C12.0115 18.2583 11.9492 18.1129 11.8436 17.9991C11.7379 17.8853 11.5952 17.81 11.4393 17.7857C11.2937 17.7645 11.145 17.7906 11.0165 17.8602C10.8881 17.9297 10.787 18.0387 10.7294 18.1699C10.6974 18.2931 10.6974 18.422 10.7294 18.5451C10.923 20.6446 11.1258 22.7351 11.3194 24.7988C11.3551 25.1208 11.4757 25.4285 11.6697 25.6922C12.6285 26.9966 13.5842 28.3039 14.5369 29.6142C14.8891 30.0096 15.3352 30.3162 15.8367 30.5076C15.857 30.5164 15.879 30.521 15.9013 30.521C15.9235 30.521 15.9455 30.5164 15.9658 30.5076L18.8606 28.5242C18.5707 27.7818 18.2287 27.0595 17.8373 26.3622V26.3622ZM19.9484 28.5242L15.5325 31.5618L16.6941 33.152L21.1192 30.1145L19.9484 28.5242ZM18.8237 34.9387L22.1333 32.6606L20.9717 31.0614L17.6529 33.3396L18.8237 34.9387Z"
//                           fill="#BD9575"
//                         />
//                         <path
//                           d="M29.4107 19.1607C29.2777 18.4747 28.9518 17.8434 28.4729 17.3441C27.9941 16.8448 27.3831 16.4994 26.7151 16.3501C26.0556 16.184 25.3624 16.2253 24.7262 16.4689C24.0901 16.7124 23.5408 17.1468 23.1502 17.715C23.0272 17.8766 22.9833 17.9036 22.8428 17.715C22.5206 17.2602 22.0966 16.8908 21.6062 16.6377C21.1159 16.3846 20.5735 16.2552 20.0243 16.2603C19.785 16.2605 19.5465 16.2877 19.313 16.3412C18.4354 16.5495 17.6647 17.0838 17.1504 17.8404C16.6361 18.597 16.4149 19.5219 16.5296 20.4358C16.7407 21.6007 17.2326 22.6932 17.9608 23.6146C19.3144 25.4001 20.9076 26.9811 22.6935 28.3109C22.7796 28.3923 22.8925 28.4375 23.0097 28.4375C23.1269 28.4375 23.2397 28.3923 23.3258 28.3109C24.3652 27.5218 25.3455 26.6543 26.2585 25.7158C27.3023 24.7062 28.1904 23.5405 28.8926 22.2587C29.4438 21.3308 29.629 20.2232 29.4107 19.1607V19.1607ZM28.3921 21.5942C27.6819 22.9836 26.74 24.2356 25.6087 25.2937C24.8398 26.0684 24.0277 26.797 23.1765 27.4758C23.0711 27.5476 23.0097 27.6284 22.8604 27.4758C21.1484 26.1619 19.6286 24.6047 18.3472 22.8513C17.7978 22.116 17.4113 21.2672 17.2145 20.364C17.1507 19.9251 17.1837 19.4773 17.3112 19.0532C17.4387 18.6291 17.6574 18.2396 17.9512 17.9133C18.2451 17.5869 18.6067 17.332 19.0095 17.1671C19.4122 17.0023 19.846 16.9318 20.2789 16.9607C20.7643 17.0052 21.2282 17.1866 21.6188 17.4846C22.0095 17.7827 22.3116 18.1857 22.4916 18.6489C22.5352 18.7784 22.588 18.9044 22.6497 19.026C22.6941 19.0943 22.7566 19.1482 22.8299 19.1814C22.9032 19.2146 22.9843 19.2257 23.0636 19.2135C23.1428 19.2012 23.217 19.1661 23.2775 19.1122C23.3379 19.0583 23.3821 18.9879 23.4048 18.9093C23.55 18.4905 23.7805 18.1079 24.0809 17.7869C24.4179 17.4215 24.8481 17.1598 25.3229 17.0313C25.7976 16.9028 26.2981 16.9125 26.7677 17.0595C27.2529 17.1949 27.6922 17.4643 28.0376 17.8381C28.3829 18.2119 28.621 18.6757 28.7258 19.1787C28.9077 19.9984 28.789 20.858 28.3921 21.5942V21.5942Z"
//                           fill="#BD9575"
//                         />
//                       </svg>
//                       <p className=" text-base text-left text-black">
//                         PORQUE COMPRAR EN INCANCESTRY
//                       </p>
//                     </div>
//                     <p className="ml-[3.8rem] text-sm font-light text-left text-[#5c5c5c]">
//                       Al adquirir uno de estos exclusivos regalos de alpaca
//                       ayudarás a las comunidades y artesanos involucrados en la
//                       creación de estos preciosos peluches de alpacas a crecer.
//                     </p>
//                   </div>
//                   <div>
//                     <div className="flex items-center space-x-4 ">
//                       <svg
//                         width={45}
//                         height={45}
//                         viewBox="0 0 45 45"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[45px] h-[45px]"
//                         preserveAspectRatio="none"
//                       >
//                         <circle cx="22.5" cy="22.5" r={22} stroke="#BD9575" />
//                         <path
//                           d="M10 19.8875C10.1692 19.6292 10.3103 19.3525 10.4983 19.1126C10.5428 19.0576 10.5983 19.012 10.6613 18.9787C10.7244 18.9454 10.7937 18.925 10.865 18.9189C11.0462 18.9127 11.2234 18.9718 11.3633 19.0849C11.4386 19.168 11.3633 19.3894 11.3633 19.5462C11.3633 19.703 11.3633 19.6292 11.2787 19.6661C11.1475 19.7975 11.0534 19.9602 11.0055 20.1381C10.9577 20.316 10.9579 20.503 11.006 20.6808C11.0129 20.7878 11.06 20.8886 11.1381 20.9635C11.2163 21.0385 11.32 21.0824 11.4292 21.0867C11.5324 21.0959 11.6362 21.0959 11.7394 21.0867C12.0873 21.0867 12.2378 21.2343 12.2848 21.5756C12.3976 22.4981 12.5198 23.4206 12.6421 24.3431C13.0934 24.0202 13.5259 23.725 13.9208 23.4206C14.3905 23.0368 14.9745 22.8132 15.585 22.7832C16.1954 22.7533 16.7993 22.9187 17.3057 23.2545C17.6924 23.5141 18.0942 23.7513 18.5092 23.9649C18.8153 24.0972 19.1292 24.2111 19.4494 24.3062V23.5221C19.2802 23.5221 19.1109 23.5221 18.9417 23.5221C18.5784 23.4445 18.2493 23.2566 18.0012 22.985C17.753 22.7134 17.5985 22.3719 17.5595 22.0092C17.3934 20.5114 17.3494 19.003 17.4279 17.4983C17.4922 16.7443 17.7617 16.0211 18.2083 15.4042C18.5938 14.7862 18.9981 14.1681 19.4024 13.5593C19.7121 13.0867 19.8904 12.5429 19.9195 11.9818C19.9195 11.4376 19.9195 10.8933 19.9195 10.3491C19.9195 10.017 20.0888 9.83247 20.3709 9.81402C20.4394 9.8086 20.5082 9.81769 20.5729 9.84068C20.6375 9.86367 20.6963 9.90001 20.7453 9.94725C20.7944 9.99449 20.8325 10.0515 20.8571 10.1145C20.8817 10.1774 20.8922 10.2449 20.888 10.3122C20.9688 11.2804 20.8733 12.255 20.6059 13.1903C20.5126 13.4608 20.3896 13.7207 20.2392 13.9652C19.7315 14.7954 19.205 15.6164 18.6972 16.4467C18.4477 16.8691 18.3239 17.3516 18.3399 17.8396C18.3399 18.9466 18.3399 20.0443 18.3963 21.1513C18.4058 21.4639 18.4564 21.7739 18.5468 22.0738C18.562 22.1672 18.5999 22.2557 18.6573 22.3318C18.7147 22.4079 18.7898 22.4693 18.8765 22.5109C18.9631 22.5525 19.0587 22.573 19.1551 22.5708C19.2516 22.5686 19.3461 22.5437 19.4306 22.4981V18.7436C19.4162 18.6272 19.4162 18.5095 19.4306 18.3931C19.4356 18.3325 19.4526 18.2735 19.4808 18.2194C19.509 18.1653 19.5477 18.1171 19.5949 18.0777C19.642 18.0383 19.6966 18.0084 19.7556 17.9897C19.8145 17.971 19.8766 17.9639 19.9383 17.9687C20.0001 17.9736 20.0602 17.9903 20.1154 18.018C20.1705 18.0456 20.2196 18.0837 20.2597 18.1299C20.2999 18.1762 20.3304 18.2297 20.3494 18.2876C20.3685 18.3454 20.3758 18.4063 20.3709 18.4669C20.3709 18.5591 20.3709 18.6514 20.3709 18.7436C20.3709 20.8469 20.3709 22.9409 20.3709 25.0442C20.3942 25.8128 20.4601 26.5796 20.5683 27.3411C20.6341 27.8669 20.794 27.9684 21.3393 27.9131H21.5462V27.6179C21.5462 25.6346 21.5462 23.642 21.5462 21.6587C21.5323 21.5453 21.5323 21.4307 21.5462 21.3173C21.5707 21.2108 21.6338 21.1166 21.7237 21.0522C21.8135 20.9877 21.9242 20.9574 22.0351 20.9668C22.1469 20.9753 22.252 21.0227 22.3313 21.1005C22.4106 21.1783 22.4589 21.2814 22.4676 21.3911C22.4676 21.4834 22.4676 21.5756 22.4676 21.6679C22.4676 23.8818 22.4676 26.0927 22.4676 28.3005C22.4676 28.4573 22.4676 28.6234 22.665 28.6787C23.0881 28.7987 23.2386 28.6787 23.2386 28.2636C23.2386 26.0681 23.2386 23.8818 23.2386 21.6863C23.2242 21.5607 23.2242 21.4338 23.2386 21.3081C23.2646 21.2066 23.3256 21.1171 23.4114 21.0549C23.4971 20.9926 23.6022 20.9615 23.7087 20.9668C23.8199 20.9707 23.9259 21.0139 24.0071 21.0885C24.0884 21.1631 24.1393 21.2641 24.1506 21.3727C24.1506 21.4742 24.1506 21.5756 24.1506 21.6771C24.1506 23.6604 24.1506 25.6438 24.1506 27.6271C24.1363 27.717 24.1524 27.809 24.1966 27.889C24.2407 27.969 24.3105 28.0326 24.3951 28.0699C24.4957 28.1248 24.609 28.1536 24.7241 28.1536C24.8393 28.1536 24.9526 28.1248 25.0532 28.0699C25.119 28.0699 25.1285 27.8854 25.1285 27.7839C25.1285 25.7545 25.1285 23.7281 25.1285 21.7048C25.1191 21.6035 25.1191 21.5016 25.1285 21.4004C25.1347 21.278 25.1902 21.1631 25.2828 21.081C25.3754 20.9988 25.4974 20.9561 25.6221 20.9622C25.7468 20.9683 25.8639 21.0228 25.9476 21.1136C26.0314 21.2044 26.0749 21.3242 26.0687 21.4465C26.0734 21.5294 26.0734 21.6126 26.0687 21.6955V26.4187C26.0687 26.7323 26.0687 26.7507 26.473 26.7784C26.8773 26.8061 26.9337 26.7231 26.9431 26.4463C26.9431 25.5792 27.0183 24.7213 27.0277 23.8542C27.046 22.3424 27.2257 20.8367 27.5637 19.3617C27.8846 18.2581 27.7495 17.0749 27.1876 16.0684C26.9431 15.6625 26.6987 15.2474 26.4824 14.8231C26.2982 14.4863 26.1621 14.1262 26.0781 13.753C25.9935 13.1995 26.0029 12.6368 25.9747 12.0741C25.9747 11.7051 25.9747 11.3361 25.9747 10.9671C25.9644 10.8536 25.9957 10.7402 26.0629 10.6472C26.13 10.5543 26.2288 10.4878 26.3414 10.4598C26.4427 10.43 26.5516 10.4369 26.6483 10.4792C26.7449 10.5215 26.8228 10.5965 26.8679 10.6904C26.9105 10.7961 26.9328 10.9087 26.9337 11.0225C26.9337 11.6774 26.9337 12.3324 26.9337 12.9874C26.9212 13.5242 27.0683 14.0531 27.3568 14.5094C27.6389 14.9615 27.874 15.4319 28.1278 15.9208C28.5982 16.8482 28.7468 17.901 28.5509 18.9189C28.4099 19.7952 28.203 20.6624 28.0902 21.5387C27.9774 22.4151 27.968 23.1715 27.9116 24.0571L28.2125 23.8911C28.6638 23.6235 29.0963 23.3283 29.5664 23.0977C30.0131 22.8659 30.5202 22.7701 31.0227 22.8227C31.5252 22.8753 32.0003 23.0739 32.3871 23.3929C32.7726 23.6789 33.1487 24.0018 33.5718 24.3154C33.6188 23.9464 33.6659 23.6235 33.7129 23.2914C33.7975 22.7103 33.8727 22.1199 33.9667 21.5295C34.0231 21.2066 34.1266 21.1328 34.4556 21.1144C34.7847 21.0959 34.9822 20.9299 35.001 20.5332C35.0227 20.3765 35.0077 20.2169 34.9572 20.0667C34.9067 19.9164 34.822 19.7795 34.7095 19.6661C34.6636 19.6348 34.6245 19.5948 34.5944 19.5486C34.5643 19.5024 34.5439 19.4507 34.5343 19.3967C34.5246 19.3426 34.526 19.2873 34.5384 19.2338C34.5507 19.1802 34.5737 19.1297 34.6061 19.0849C34.6907 18.9943 34.8059 18.9368 34.9304 18.9232C35.0549 18.9097 35.1802 18.9409 35.2831 19.0111C35.5153 19.1788 35.7051 19.3966 35.8378 19.6477C36.0365 20.1175 36.0532 20.6425 35.8848 21.1236C35.819 21.3421 35.6985 21.541 35.5343 21.7022C35.37 21.8633 35.1673 21.9815 34.9446 22.0461C34.903 22.0597 34.8651 22.0826 34.8341 22.113C34.8031 22.1434 34.7798 22.1805 34.7659 22.2214C34.5027 24.0663 34.2488 25.9943 33.9855 27.8854C33.7505 29.6289 33.5154 31.3631 33.271 33.1066C33.2426 33.3872 33.1136 33.6488 32.9069 33.8448C32.7003 34.0408 32.4295 34.1584 32.1427 34.1767H31.8606H14.3439C14.1779 34.1985 14.009 34.1872 13.8476 34.1433C13.6861 34.0994 13.5354 34.0239 13.4045 33.9213C13.2736 33.8187 13.1652 33.6912 13.0859 33.5464C13.0066 33.4017 12.9579 33.2427 12.9429 33.079C12.8959 32.8022 12.8677 32.5162 12.8207 32.2303C12.6421 30.8927 12.454 29.5551 12.2754 28.2083C12.0967 26.8614 11.8899 25.3763 11.6924 23.9556C11.6078 23.3376 11.5138 22.7195 11.4386 22.1845C11.1103 22.0506 10.7955 21.8869 10.4983 21.6955C10.3076 21.4803 10.1464 21.2415 10.0188 20.9853L10 19.8875ZM26.3038 27.6732C26.3038 27.7655 26.3038 27.8946 26.2474 28.0145C26.2252 28.2584 26.1207 28.4879 25.9503 28.6668C25.78 28.8456 25.5536 28.9635 25.3071 29.0016C24.9979 29.0724 24.6761 29.0724 24.3669 29.0016C24.3245 28.9949 24.2812 28.9981 24.2403 29.0109C24.1995 29.0237 24.1623 29.0458 24.1318 29.0754C24.0121 29.2421 23.8565 29.381 23.6761 29.4822C23.4956 29.5835 23.2947 29.6446 23.0876 29.6613C22.8804 29.678 22.6721 29.6499 22.4772 29.579C22.2823 29.508 22.1057 29.3959 21.9599 29.2507C21.8756 29.1098 21.7491 28.998 21.5977 28.9303C21.4462 28.8626 21.2772 28.8424 21.1136 28.8725H21.0384C20.735 28.8871 20.4369 28.7903 20.2022 28.601C19.9675 28.4117 19.8131 28.1434 19.7691 27.8485C19.6469 27.295 19.581 26.7323 19.5152 26.1696C19.5152 25.8467 19.4682 25.5239 19.4494 25.1825C18.8942 25.1738 18.353 25.0106 17.8886 24.7121C17.4843 24.463 17.0706 24.2139 16.6381 23.9741C16.3364 23.7903 15.9846 23.7015 15.6299 23.7196C15.2753 23.7378 14.9348 23.862 14.6542 24.0755C14.0712 24.4814 13.5165 24.9058 12.9429 25.3209C12.8871 25.3546 12.8441 25.4053 12.8203 25.4653C12.7965 25.5252 12.7934 25.5911 12.8113 25.653C12.9806 26.8522 13.1404 28.0607 13.3096 29.2599C13.4789 30.4591 13.6293 31.6399 13.7986 32.8391C13.8644 33.2911 13.9396 33.3465 14.4097 33.3465H32.0862C32.5658 33.3465 32.6598 33.2542 32.7256 32.793C32.8478 31.8705 32.9701 30.9019 33.1017 29.961C33.2897 28.5219 33.4966 27.0828 33.694 25.6438C33.707 25.5782 33.7006 25.5104 33.6756 25.4483C33.6506 25.3862 33.6081 25.3324 33.553 25.2932C33.1111 24.9519 32.6692 24.5921 32.2273 24.2324C31.9398 23.9438 31.5551 23.7678 31.145 23.7372C30.7349 23.7066 30.3275 23.8236 29.9989 24.0663C29.4348 24.3984 28.8518 24.7028 28.2782 25.0349C28.2449 25.0617 28.2183 25.0955 28.2004 25.1339C28.1825 25.1722 28.1737 25.2141 28.1748 25.2563C28.1748 25.6899 28.1748 26.1235 28.109 26.557C28.1104 26.8324 28.0072 27.0984 27.8194 27.3031C27.6316 27.5078 27.3728 27.6365 27.0936 27.664C26.8209 27.664 26.567 27.6548 26.3038 27.6732Z"
//                           fill="#BD9575"
//                         />
//                       </svg>

//                       <p className=" text-base text-left text-black">
//                         COMPOSICIÓN Y LAVADO
//                       </p>
//                     </div>
//                     <p className="ml-[3.8rem] text-sm font-light text-left text-[#5c5c5c]">
//                       <span className=" text-sm font-light text-left text-[#5c5c5c]">
//                         <span className=" text-sm font-light text-left text-[#5c5c5c]">
//                           1. Rinde in water with a mild shampoo, don’t sook.
//                         </span>
//                         <br />
//                         <span className=" text-sm font-light text-left text-[#5c5c5c]">
//                           2. Wash gentlu
//                         </span>
//                         <br />
//                         <span className=" text-sm font-light text-left text-[#5c5c5c]">
//                           3. Brush with care
//                         </span>
//                         <br />
//                         <span className=" text-sm font-light text-left text-[#5c5c5c]">
//                           4. Dry
//                         </span>
//                       </span>
//                     </p>
//                   </div>
//                   <div className="ml-9 ">
//                     {}
//                     {/* <Image src={product.image} alt="" width={200} height={70} /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Carousel products={relatedProducts} title="You Would Like" />
//     </>
//   );
// }

// export default ProductDetails;
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/allparams`);
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((slug: string) => ({
    params: { slug: slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  }

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=3600, stale-while-revalidate=60"f
  // );

  let slug = params?.slug;
  let product = await Product.findOne({
    "variant.slug": slug,
  });
  let relatedProducts = await Product.find({
    $nor: [{ title: product?.title }],
    category: product?.category,
    // category: product?.category,
  });

  if (product) {
    let variants = product.variant;
    let variantDetails = variants.find((item) => item.slug === slug);
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
        variants: JSON.parse(JSON.stringify(variants)),
        variantDetails: JSON.parse(JSON.stringify(variantDetails)),
        relatedProducts: JSON.parse(JSON.stringify(relatedProducts)),
      }, // will be passed to the page component as props
    };
  } else {
    return {
      props: {
        product: null,
        variants: [],
        variantDetails: {
          size: [10],
        },
      }, // will be passed to the page component as props
    };
  }
};

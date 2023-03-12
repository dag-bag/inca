/** @format */

import mongoose from "mongoose";

import { GetStaticProps } from "next";
import { Toaster } from "react-hot-toast";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import BlurImage from "../../components/utils/BlurImage";
import Product from "../../models/Product";
import Loader from "../../components/Loaders/Loader";
import dynamic from "next/dist/shared/lib/dynamic";
const DynRecentlyViewed = dynamic(() => import('../../components/recently-viewed'), {
  loading: () => <Loader />,
  ssr: false
})

import { recentlyViewedAtom } from "../../components/recently-viewed";
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

import { Fragment, useEffect, useRef, useState } from "react";
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

// conditionally change element index and add new element
const elementReIndexer = (arr: any[], newElement: any) => {
  const modifiedArr: any[] = [...arr]
  if (arr.length == 5) {
    modifiedArr.unshift(newElement)
    modifiedArr.pop()
  } else {
    modifiedArr.push(newElement)
  }
  return modifiedArr
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


  const validateRecentlyViewed = useRef(false);
  const [recentlyItems, setRecentlyItems] = useRecoilState(recentlyViewedAtom);

  const setToRecentlyViewedItem = () => {
    if (!recentlyItems.map(ele => ele.id).includes(product._id)) {
      const T = elementReIndexer(recentlyItems, product)
      setRecentlyItems(T)
    }
  }

  useEffect(() => {
    if (validateRecentlyViewed.current) return;
    validateRecentlyViewed.current = true;
    setToRecentlyViewedItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

            <DynRecentlyViewed />

          </section>
          <ProductReviews />
        </div>
      </main>
    </div>
  );
}


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

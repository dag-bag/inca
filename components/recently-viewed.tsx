/** @format */

import { atom, useRecoilState } from "recoil";
import LinkBtn from "../components/buttons/LinkBtn";
import Flex from "../components/utils/Flex";
import { isEmpty } from "lodash";
import { recoilPersist } from "recoil-persist";
import H2 from "./Headings/H2";
const { persistAtom } = recoilPersist();
import ProductImage from "./Product/ProductImage";
import Link from 'next/link'
import { AiFillStar } from "react-icons/ai";

export const recentlyViewedAtom = atom<any[]>({
    key: 'recently-viewed',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

function RecentlyViewed() {
    const [recentlyItems, setRecentlyItems] = useRecoilState(recentlyViewedAtom);


    return (
        <Flex className="mt-4">
            <H2 text={!isEmpty(recentlyItems) ? "Recently Viewed" : "No Recently Viewed"} />
            {recentlyItems.length === 0 && (
                <Flex className="justify-center items-center mt-14">
                    <LinkBtn text="Explore Now" link="products" className="mt-2" />
                </Flex>
            )}
            <div >
                <div className={`grid grid-cols-${recentlyItems.length} gap-x-5 justify-center  `}>
                    {recentlyItems.map((item, index) => {
                        let { slug, price, img, sellPrice } = item.variant[0];
                        return (
                            <div className="relative rounded-md border h-full-- w-full-- " key={index}>
                                <Link href={`/product/${slug}`}>
                                    <div className="relative ">
                                        {/* <span className="badge bg-primary text-white">{tag}</span> */}
                                        <div
                                            className="flex group relative  --md:w-full bg-white --h-[161.66px] --md:h-[200.425px] justify-end items-center flex-col --min-w-[161.66px] --md:min-w-[300px] --lg:min-w-[16rem] --lg:min-h-auto --xl:min-w-[300px] --xl:min-h-[300px] rounded-xl">
                                            <ProductImage
                                                image={img}
                                                height={100}
                                                width={100}
                                                alt={img[0].alt}
                                                type="fill"
                                                rounded={true}
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex justify-between  w-full mt-2">
                                    <div className="w-full h-[72px] ">
                                        <h1 className="  text-center text-black line-clamp-2 h-12 mt-4">
                                            {item.title}
                                        </h1>
                                        <div className="flex justify-center mt-2">
                                            <AiFillStar className="text-yellow-300 text-xl" />
                                            <AiFillStar className="text-yellow-300 text-xl" />
                                            <AiFillStar className="text-yellow-300 text-xl" />
                                            <AiFillStar className="text-yellow-300 text-xl" />
                                            <AiFillStar className="text-yellow-300 text-xl" />
                                        </div>

                                        <p className=" text-base text-center text-black">
                                            {" "}
                                            <span className="text-orange-500 text-sm line-through mr-2">
                                                ${price}
                                            </span>{" "}
                                            ${sellPrice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </Flex >
    );
}

export default RecentlyViewed;

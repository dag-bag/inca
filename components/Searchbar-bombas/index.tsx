import { debounce } from "lodash";
import Router from "next/router";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { motion } from 'framer-motion'
import { atom, useRecoilState } from "recoil"
import { useQuery } from "@tanstack/react-query";
import { type ProductType } from "../../types/product";
import query from "../../pages/api/query";

interface searchAtomType {
    visiblity: boolean,
    query: string
}

export const SearchAtom = atom<searchAtomType>({
    key: 'search-atom',
    default: {
        visiblity: false,
        query: " "
    }
})

const Search = () => {
    const [state, setState] = useRecoilState(SearchAtom)
    const onClose = () => {
        setState({ ...state, visiblity: false })
    }
    const onChange = (event: any) => {
        setState({ ...state, query: event.target.value as string })
    }
    const onKeyHandler = (event: any) => {
        if (event.keyCode === 13) {
            Router.push({
                pathname: "search",
                query: {
                    keyword: query
                }
            } as any)
        }
    }

    return (
        <div className=" w-full z-50 bg-gray-100 ">
            <div className="w-full flex border border-gray-300">
                <input placeholder="search.." type="text" className="w-full border-none outline-none" onChange={onChange} onKeyDown={onKeyHandler} />
                <button onClick={onClose} className="px-5 text-2xl bg-gray-300">×</button>
            </div>
        </div>
    )
}


export const Result = () => {
    const [{ query }, setState] = useRecoilState(SearchAtom)

    const SearchQuery = async () => {
        const resp = await fetch(
            `/api/query?title=${query as string}`
        );
        const products = await resp.json();
        return products;
    };

    const { data } = useQuery(
        [`query`, { query }],
        SearchQuery
    );

    const showAllHandler = () => {
        setState(() => {
            Router.push({
                pathname: "search",
                query: {
                    keyword: query
                }
            })

            return { query, visiblity: false }
        })

    }


    if (query == "") {
        return null
    }

    if (data?.length == 0) {
        return (
            <div className="  rounded-xl my-5 bg-white z-50 flex items-center justify-center ">
                <h1 className="py-10 text-[18px]">No Result for {'" ' + query + ' "'} </h1>
            </div>
        )
    }

    return (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="rounded-xl my-5 bg-white z-50   md:max-w-[90%] mx-auto shadow-md overflow-y-auto  ">
            <div className="grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-cols-2 ">
                {query !== "" && data?.slice(0, 6).map((product: ProductType, index: number) => (
                    <Link key={index} href={`/product/${product.variant[0].slug}`}>
                        <div
                            key={product._id}
                            className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <Image
                                    src={product.variant[0].img[0].img}
                                    alt={product.desc}
                                    className="h-full w-full object-cover object-center"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className=" pb-4 text-center">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={"#"}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.variant[0].title}
                                    </a>
                                </h3>
                                <div className="mt-3 flex flex-col items-center">
                                    <p className="sr-only">{4} out of 5 stars</p>

                                    <p className="mt-1 text-sm text-gray-500">{15} reviews</p>
                                </div>
                                <p className="mt-4 text-base font-medium text-gray-900">
                                    {product.variant[0].price}$
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


            {
                // show : when result quantity above 12
                query !== "" && data?.length > 6 && (
                    <div className="md:flex items-center justify-center py-5 hidden">
                        <button onClick={showAllHandler} className="bg-primary text-md text-white btn">Show All Result ({data?.length})</button>
                    </div>
                )
            }


        </motion.div >
    )
}



export default Search
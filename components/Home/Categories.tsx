/** @format */

import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { CategoriesData } from "../../data/Categoies-Carose-Data";
import CategoriesCard from "../Carosel/CategoriesCard";

export default function Categories() {
  const { push } = useRouter();
  const CateGoriesClick = (queryName: string) => {
    push({
      pathname: "category",
      query: { category: queryName },
    });
  };
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Our Categories
          </h2>
        </div>

        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {CategoriesData.map((product, index) => (
                <li
                  onClick={() => CateGoriesClick(product.link)}
                  key={index}
                  className="w-64 inline-flex flex-col text-center lg:w-auto cursor-pointer"
                >
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <Image
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        layout="responsive"
                        height={200}
                        width={200}
                        placeholder="blur"
                        blurDataURL={
                          "data:image/webp;base64,UklGRvgDAABXRUJQVlA4WAoAAAAgAAAARAEAvAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCgIAAJAcAJ0BKkUBvQA+7XayVCm6L6MjE1orQB2JaW7gCBH/+R1Nyc+ajeiHvyR9AKneYpvc+Vm7JbeoEDQPfa0da1qc/X6i3OPNGQpaznV/+W1DEwTHL5x1ueTzmEn/zWrUF2d2eb6AuMaVABUrTJANzB2AuCLs2HpnElo+/tB70AnlljhZ+M6xAq5p0/bQGHL1mVkW/w7sFryo5vej11tN9Eh+XC2Zq72Vl3V2oYpR3pAyC1Urg6kqtOdnN6M8Z5rYGPVRRKGufCUa0RErNVV5O1/yFPrgie1d8qbJizszChtRtW7C7LpCVa3gunTb0AD+5ARe6SV4zCJO9Zf4aHH3/O3hGqbb0IIcJPxTxENRYXC/us/8a2D0JeZ3SZVqLc7QEPjkX5Xa5o1+Syx7lzzQGrl7ASC80/akV8PRXs0KAnAvspf7lHTmz0/xKfFMTTKbZ3zrBERYKSR1Y/Q2jHyJOxjPHOWbBQp1ldR0GJM+AxpNaj3h8wJ/jbo0AXibUq5VO+CEudlafBwkHgAffreQ7zt8Mm5PCyezkwgPm/vuMsf64JSRDjU/KFWML9m8PjjlHSGNoGHtPBht9kYeeKXxlqpReqAfl9Vioej5+A2iGD6B1Udt1crfuI2ZiEpTyJaqkjx41WKK0pCYbXu7yDRXw3x7VMg2gAFX3aFMtdEAA6tUORjYixXAAAAAAA=="
                        }
                      />
                    </div>
                    <div className="mt-6">
                      {/* <p className="text-sm text-gray-500">{product.color}</p> */}
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <button>
                          <span className="absolute inset-0" />
                          {product.name}
                        </button>
                      </h3>
                      {/* <p className="mt-1 text-gray-900">{product.price}</p> */}
                    </div>
                  </div>

                  <h4 className="sr-only">Available colors</h4>
                  {/* <ul
                    role="list"
                    className="mt-auto pt-6 flex items-center justify-center space-x-3"
                  >
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="w-4 h-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

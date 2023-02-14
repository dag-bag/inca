/** @format */

import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
type Props = {
  text: string;
  name: string;
};

function Card({ text, name }: Props) {
  const iconsStyles = {
    styles: "text-yellow-500 text-lg",
  };
  return (
    <div className="carousel-item active relative float-left w-full flex flex-col max-w-xs:">
      <div className="flex flex-wrap justify-center text-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
          <h5 className="text-lg font-bold mb-3">{name}</h5>
          <p className="text-gray-500 mb-6 line-clamp-6">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 pr-2 inline-block"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {text}
          </p>
          <ul className="flex justify-center mb-0">
            <li>
              <AiFillStar className={iconsStyles.styles} />
            </li>
            <li>
              <AiFillStar className={iconsStyles.styles} />
            </li>
            <li>
              <AiFillStar className={iconsStyles.styles} />
            </li>
            <li>
              <AiFillStar className={iconsStyles.styles} />
            </li>
            <li>
              <AiFillStar className={iconsStyles.styles} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;

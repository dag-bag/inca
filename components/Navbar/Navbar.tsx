/** @format */

import Image from "next/image";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";

import SmallMenu, { menuState } from "./SmallNavbar";
import dynamic from "next/dynamic";
const PoketCart = dynamic(() => import("../Cart/PoketCart"), {
  ssr: false,
});

import { SearchIcon } from "@heroicons/react/solid";
import SeachForm from "../Search/SeachForm";

const CartDetails = dynamic(() => import("./CartDetails"), { ssr: false });

const svgClass = "md:w-8 md:h-8 h-6 w-6 cursor-pointer";

const centerDivData = [
  { title: "Stuffed Animals", href: "/category/alpaca-stuffed-animals" },
  {
    title: " Slippers",
    href: "/category/alpaca-slippers",
  },
  {
    title: " Clothing",
    href: "/category/alpaca-clothing",
    dropdown: true,
    DropDownData: ["Alpaca Ponchos", "Scarves", "Alpaca Gloves", "Shawls"],
  },
  { title: "Home & deco", href: "/" },
  { title: " Accesories", href: "/category/alpaca-accessories" },
  {
    title: "About Us",
    href: "/about",
    // dropdown: true,
    // DropDownData: [
    //   "Our Story",
    //   "Sustainability ",
    //   "Our Values",
    //   "Alpacas for good",
    //   "Our Team",
    // ],
  },
];

function Navbar() {
  const { data: session } = useSession();
  const rightDivData = [
    {
      hide: true,
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M14.4998 25C20.2987 25 24.9998 20.299 24.9998 14.5C24.9998 8.70101 20.2987 4 14.4998 4C8.70077 4 3.99976 8.70101 3.99976 14.5C3.99976 20.299 8.70077 25 14.4998 25Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.9241 21.9248L27.9991 27.9999"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M16.0015 27C16.0015 27 3.50146 20 3.50146 11.5C3.50172 9.99768 4.02228 8.5418 4.97465 7.3799C5.92701 6.21801 7.25239 5.42181 8.72545 5.12669C10.1985 4.83156 11.7283 5.05572 13.0548 5.76105C14.3812 6.46638 15.4225 7.60935 16.0015 8.99563L16.0015 8.99565C16.5804 7.60936 17.6217 6.46639 18.9481 5.76106C20.2746 5.05572 21.8044 4.83156 23.2775 5.12669C24.7505 5.42181 26.0759 6.21801 27.0283 7.3799C27.9806 8.5418 28.5012 9.99768 28.5015 11.5C28.5015 20 16.0015 27 16.0015 27Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: "/favorites",
    },

    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3.87354 26.9988C5.10299 24.8708 6.8708 23.1037 8.99939 21.8752C11.128 20.6467 13.5424 20 16.0001 20C18.4577 20 20.8721 20.6468 23.0007 21.8754C25.1292 23.1039 26.897 24.871 28.1264 26.9991"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: `/${session ? "account" : "login"} `,
    },
    {
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgClass}
          preserveAspectRatio="none"
        >
          <path
            d="M27 9H5C4.44772 9 4 9.44772 4 10V26C4 26.5523 4.44772 27 5 27H27C27.5523 27 28 26.5523 28 26V10C28 9.44772 27.5523 9 27 9Z"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11 13V9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52678 14.6739 4 16 4C17.3261 4 18.5979 4.52678 19.5355 5.46447C20.4732 6.40215 21 7.67392 21 9V13"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),

      link: "/bolso",
    },
  ];

  const setHide = useSetRecoilState(menuState);

  return (
    <>
      <SmallMenu />
      <div className="navbar bg-white md:max-w-[90%] m-auto relative ">
        <div className="navbar-start">
          <div className="relative w-7 sm:w-10 md:w-16 cursor-pointer ">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="logo"
                width={97}
                height={139}
                layout="responsive"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {centerDivData.map((item, index) => {
              return item.dropdown ? (
                <li key={index + 100}>
                  <a>
                    {item.title}
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-white z-50">
                    {item?.DropDownData?.map((subItem, index) => {
                      return (
                        <li className="" key={index}>
                          <a className="">{subItem}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="focus:bg-primary-1 focus-visible:bg-primary-1">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end hidden md:block">
            <label
              tabIndex={0}
              className="btn btn-link btn-circle hover:no-animation"
            >
              <div className="indicator">{rightDivData[0]?.svg}</div>
            </label>
            <div
              tabIndex={0}
              className="mt-7 card card-compact dropdown-content  bg-white shadow w-[80vw]"
            >
              {/* <Search /> */}
              <SeachForm />
            </div>
          </div>
          {/* <Search svg={rightDivData[0].svg} /> */}
          <Link href={`${rightDivData[1]?.link}`}>
            <label tabIndex={0} className="btn btn-link btn-circle">
              <div className="indicator">{rightDivData[1]?.svg}</div>
            </label>
          </Link>

          <div className="dropdown dropdown-end">
            {session ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                >
                  <li>
                    <Link href={"/account/personal-details"}>
                      <span className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/account"}>Settings</Link>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <label tabIndex={0} className="btn btn-link btn-circle">
                    <div className="indicator">{rightDivData[2]?.svg}</div>
                  </label>
                </Link>
                {/* <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                >
                  <li>
                    <Link href={"/login"}>
                      <span>login</span>
                    </Link>
                  </li>
                </ul> */}
              </>
            )}
          </div>
          {/* <CartDetails svg={rightDivData[3].svg} /> */}
          <PoketCart svg={rightDivData[3].svg} />
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => {
              setHide(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;

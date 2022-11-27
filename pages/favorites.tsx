/** @format */

import React from "react";
import { BsFileX } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { favAtom } from "../atoms/favraites";
import Btn from "../components/buttons/Btn";
import LinkBtn from "../components/buttons/LinkBtn";
import FavCard from "../components/Favcard";
import Flex from "../components/Flex";
// import Flex from "../components/";
import Grid from "../components/Grid";
import H1 from "../components/Headings/H1";
import ProductCard from "../components/ProductCard";
import { CartItem } from "../types/cart";

function Favorites() {
  const favItems = useRecoilValue<CartItem[]>(favAtom);

  return (
    <Flex className="">
      <H1 text="Favrouites" />
      {favItems.length === 0 && (
        <Flex className="justify-center items-center mt-14">
          <H1 text="No Favrouites Items" />
          <LinkBtn text="Explore Now" link="products" className="mt-2" />
        </Flex>
      )}
      <Grid className="md:mt-16">
        {favItems.map((item, index) => {
          return <FavCard {...item} key={index} />;
        })}
      </Grid>
    </Flex>
  );
}

export default Favorites;

/** @format */

import React from "react";
import { BsFileX } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { favAtom } from "../atoms/favraites";
import Btn from "../components/buttons/Btn";
import LinkBtn from "../components/buttons/LinkBtn";
import FavCard from "../components/Fav/Favcard";
import Flex from "../components/utils/Flex";
import Grid from "../components/utils/Grid";
import H1 from "../components/Headings/H1";
import ProductCard from "../components/Product/ProductCard";
import { CartItem } from "../types/cart";
import { isEmpty } from "lodash";

function Favorites() {
  const favItems = useRecoilValue<CartItem[]>(favAtom);
  return (
    <Flex className="mt-4">
      <H1 text={!isEmpty(favItems) ? "Favourites" : "No favourites Items"} />
      {favItems.length === 0 && (
        <Flex className="justify-center items-center mt-14">
          <LinkBtn
            text="Explore Now"
            link="/category?category=alpaca+stuffed+animals"
            className="mt-2"
          />
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

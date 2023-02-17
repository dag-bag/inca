/** @format */

import React, { useState } from "react";

import Search from "../components/Navbar/Search";
import Flex from "../components/utils/Flex";

type Props = {};

function Test({}: Props) {
  const [markDown, setMarkdown] = useState("");
  const [count, setCount] = useState(0);
  // setTimeout(() => {
  //   setCount((prev) => prev + 1);
  // }, 1000);
  return (
    <Flex className="justify-center items-center">
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </Flex>
  );
}

export default Test;

/** @format */

import React, { useState } from "react";

import Search from "../components/Navbar/Search";

type Props = {};

function Test({}: Props) {
  const [markDown, setMarkdown] = useState("");
  return (
    <div>
      <Search />
    </div>
  );
}

export default Test;

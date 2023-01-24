/** @format */

import React from "react";
import styles from "../../styles/Home.module.css";
import Flex from "../utils/Flex";

type Props = {};

function Loader({}: Props) {
  return (
    <Flex className="h-screen">
      {" "}
      <span className={styles.loader}></span>;
    </Flex>
  );
}

export default Loader;

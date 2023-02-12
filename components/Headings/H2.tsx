/** @format */

import React from "react";
import style from "../../styles/Heading.module.css";
type Props = {
  text?: string;
};

function H2({ text }: Props) {
  return (
    <h2 className={`${style.heading} text-center mb-8 md:mb-8`}>{text}</h2>
  );
}

export default H2;

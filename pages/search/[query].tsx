/** @format */

import { useRouter } from "next/router";
import React from "react";

type Props = {};

function QueryPage({}: Props) {
  const { query } = useRouter();

  return <div>{`${query.query}`}</div>;
}

export default QueryPage;

/** @format */

import React from "react";
import Footer from "../Footers/Footer";
import Navbar from "../Navbar/Navbar";
import SubHeader from "../Navbar/SubHeader";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <SubHeader />
      <Navbar />

      {children}
      <Footer />
    </>
  );
}

export default Layout;

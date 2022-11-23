/** @format */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<any>) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </SessionProvider>
    </RecoilRoot>
  );
}

/** @format */

import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Layout from "../components/layouts/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<any>) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />;
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}

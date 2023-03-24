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
import Script from "next/dist/client/script";

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
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M9WK7F8');
      `}
            </Script>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}

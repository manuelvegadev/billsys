import "../styles/globals.scss";
import Head from "next/head";
import { AppProviders } from "../contexts";

/** @param {import('next/app').AppProps} appProps  */
function MyApp(appProps) {
  const { Component, pageProps } = appProps;
  return (
    <>
      <Head>
        <title>Billsys</title>
      </Head>

      <AppProviders pageProps={pageProps}>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
}

export default MyApp;

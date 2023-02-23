import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Donuts Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;

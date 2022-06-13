import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/codeblock.css";
import {NextSeo} from 'next-seo';
// import "../styles/themes/prism-atom-dark.css";

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}

export default MyApp;

import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/codeblock.css";
import { DefaultSeo } from "next-seo";
import { Seo } from "../data/seo";
import "../styles/themes/prism-one-light.css";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <DefaultSeo {...Seo} />
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;

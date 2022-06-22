import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/codeblock.css";
import { DefaultSeo } from "next-seo";
import { Seo } from "../data/seo";
import "../styles/themes/prism-night-owl.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof localStorage != "undefined") {
    localStorage.theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }
  return (
    <>
      <DefaultSeo {...Seo} />
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;

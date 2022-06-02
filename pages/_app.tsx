import "../styles/themes/prism-night-owl.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Prism from "prismjs";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/themes/prism-night-owl.css";


function MyApp({ Component, pageProps }: AppProps) {

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import 'tailwindcss/tailwind.css'
import { MdxComponentsProvider } from "../context/mdxContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // MdxComponentsProvider는 모든 페이지에서 액세스
    <MdxComponentsProvider>
      <Component {...pageProps} />
    </MdxComponentsProvider>
  );
}

export default MyApp;

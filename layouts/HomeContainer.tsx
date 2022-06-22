import Head from "next/head";
import dynamic from "next/dynamic";
import { Footer } from "../components/Home/Footer";

// index 라우트에서 사용할 루트 컴포넌트(HomePage)를 dynamic import로 불러온다.
const Header = dynamic(() => import("../components/Home/Header"), {
  ssr: false,
});

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <section className="flex flex-col flex-nowrap min-h-screen items-center justify-between bg-white dark:bg-zinc-900">
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Container;

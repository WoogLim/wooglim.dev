import React from "react";
import { Bottom } from "../components/common/Bottom/Bottom";
import { Header } from "../components/home/Header/Header";
import { Section } from "../components/home/Section/Section";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Section />
      <Bottom />
    </div>
  );
};

export default Home;

import React from "react";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { AboutLayout } from "../../layouts/AboutLayout";
import { Header } from "../../components/common/Header/Header";

    
const Index: React.FC = () => {
  return (
    <>
      <Header />
      <AboutLayout />
      <Bottom />
    </>
  );
};

export default Index;

import React from "react";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetsListLayout } from "../../layouts/SnippetsListLayout";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <SnippetsListLayout />
      <Bottom />
    </>
  );
};

export default Index;

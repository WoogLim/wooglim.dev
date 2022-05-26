import React from "react";
import {} from "../../lib/snippetsApi";
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

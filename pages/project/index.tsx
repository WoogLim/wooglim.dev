import React from "react";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { ProjectListLayout } from "../../layouts/ProjectListLayout";
import { Header } from "../../components/common/Header/Header";

    
const Index: React.FC = () => {
  return (
    <>
      <Header />
      <ProjectListLayout />
      <Bottom />
    </>
  );
};

export default Index;

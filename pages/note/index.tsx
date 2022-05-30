import React from "react";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { NoteListLayout } from "../../layouts/NoteListLayout";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <NoteListLayout />
      <Bottom />
    </>
  );
};

export default Index;

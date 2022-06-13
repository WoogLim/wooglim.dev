import React from "react";
import { getAllSnippets } from "../../lib/SnippetsLib";
import { SnippetI } from "../../types/snippet";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetsListLayout } from "../../layouts/SnippetsListLayout";

type SnippetIndexProps = {
  snippets: [SnippetI];
};

const Index: React.FC<SnippetIndexProps> = ({ snippets }) => {
  return (
    <>
      <Header />
      <SnippetsListLayout snippets={snippets} />
      <Bottom />
    </>
  );
};

export const getStaticProps = async () => {
  const snippets = getAllSnippets([
    "title",
    "description",
    "language",
    "category",
    "update",
    "slug"
  ]);

  return { props: { snippets } };
};

export default Index;

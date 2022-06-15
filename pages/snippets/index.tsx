import React from "react";
import { getAllSnippets } from "../../lib/SnippetsLib";
import { SnippetI } from "../../types/snippet";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetsListLayout } from "../../layouts/SnippetsListLayout";

type SnippetIndexProps = {
  snippets: [SnippetI];
  categories: string[];
  languages: string[];
};

const Index: React.FC<SnippetIndexProps> = ({ snippets, categories, languages }) => {
  return (
    <>
      <Header />
      <SnippetsListLayout snippets={snippets} categories={categories} languages={languages} />
      <Bottom />
    </>
  );
};

export const getStaticProps = async () => {
  const item = getAllSnippets([
    "title",
    "description",
    "language",
    "category",
    "update",
    "slug"
  ]);

  return { props: { snippets: item.snippets, categories: item.categories, languages: item.languages} };
};

export default Index;

import React from "react";
import { getAllSnippets } from "../../lib/SnippetsLib";
import { SnippetI } from "../../types/snippet";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetsListLayout } from "../../layouts/SnippetsListLayout";
import { NextSeo } from "next-seo";
import { meta } from "../../data/metadata";

type SnippetIndexProps = {
  snippets: [SnippetI];
  categories: string[];
  languages: string[];
};

const Index: React.FC<SnippetIndexProps> = ({
  snippets,
  categories,
  languages,
}) => {
  return (
    <>
      <NextSeo
        title="Snippets"
        description="짧은 코드 조각 모음"
        canonical={`${meta.url}/snippets`}
      />
      <Header />
      <SnippetsListLayout
        snippets={snippets}
        categories={categories}
        languages={languages}
      />
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
    "serisenumber",
    "slug",
  ]);
  return {
    props: {
      snippets: item.snippets,
      categories: item.categories,
      languages: item.languages,
    },
  };
};

export default Index;

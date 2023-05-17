import React from "react";
import { NextPage } from "next";

import { PostI } from "../types/post";
import { getAllPosts } from "../lib/PostMdxLib";

import { HomeSection } from "../layouts/HomeLayout";
import { NextSeo } from "next-seo";

import Container from "../layouts/HomeContainer"
import { getAllSnippets } from "../lib/SnippetsLib";
import { SnippetI } from "../types/snippet";

type Props = {
  posts: [PostI];
  snippets: [SnippetI];
};

const Home: NextPage<Props> = ({ posts, snippets }: Props) => {

  return (
    <Container>
      <NextSeo title="Home" />
      
      <HomeSection posts={posts} snippets={snippets}/>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "postnumber",
    "title",
    "slug",
    "date",
    "description",
    "thumbnail",
    "tag",
  ]);  

  const snippets = getAllSnippets([
    "title",
    "description",
    "language",
    "category",
    "update",
    "slug",
    "serisenumber"
  ], 5);

  return { props: { posts, ...snippets } };
};
export default Home;

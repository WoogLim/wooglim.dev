import React from "react";
import { NextPage } from "next";

import { PostI } from "../types/post";
import { getAllPosts } from "../lib/PostMdxLib";

import { Bottom } from "../components/common/Bottom/Bottom";
import { Header } from "../components/Header";
import { HomeSection } from "../layouts/HomeLayout";

import { useTrail, config, animated } from "react-spring";

type Props = {
  posts: [PostI];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <Header />
      <HomeSection posts={posts} />
      <Bottom />
    </>
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
    "tags",
  ]);
  return { props: { posts } };
};
export default Home;

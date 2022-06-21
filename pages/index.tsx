import React from "react";
import { NextPage } from "next";

import { PostI } from "../types/post";
import { getAllPosts } from "../lib/PostMdxLib";

import { Bottom } from "../components/Home/Bottom";
import { Header } from "../components/Home/Header";
import { HomeSection } from "../layouts/HomeLayout";
import { NextSeo } from "next-seo";

type Props = {
  posts: [PostI];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <NextSeo title="Home" />
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
    "tag",
  ]);
  return { props: { posts } };
};
export default Home;

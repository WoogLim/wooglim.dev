import React from "react";
import { NextPage } from "next";

import { PostI } from "../types/post";
import { getAllPosts } from "../lib/PostMdxLib";

import { HomeSection } from "../layouts/HomeLayout";
import { NextSeo } from "next-seo";

import Container from "../layouts/HomeContainer"

type Props = {
  posts: [PostI];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Container>
      <NextSeo title="Home" />
      
      <HomeSection posts={posts} />
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
  return { props: { posts } };
};
export default Home;

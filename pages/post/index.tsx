import React from "react";
import { getAllPosts } from "../../lib/PostMdxLib";
import { PostI } from "../../types/post";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostListLayout } from "../../layouts/PostListLayout";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { meta } from "../../data/metadata";

type PostIndexProps = {
  posts: [PostI];
};

const Index: React.FC<PostIndexProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="post"
        description="기술 관련 포스트 모음"
        canonical={`${meta.url}/post`}
      />
      <Header />
      <PostListLayout posts={posts} />
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

export default Index;

import React from "react";
import { getAllPosts } from "../../lib/PostMdxLib";
import { PostI } from "../../types/post";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostListLayout } from "../../layouts/PostListLayout";
import Head from "next/head";

type PostIndexProps = {
  posts: [PostI];
};
    
const Index: React.FC<PostIndexProps> = ({ posts }) => {
  return (
    <>
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
    "tag"
  ]);

  return { props: { posts } };
};

export default Index;

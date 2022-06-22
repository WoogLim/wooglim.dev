import React from "react";
import { getAllPosts } from "../../lib/PostMdxLib";
import { PostI } from "../../types/post";
// Layout
import { PostListLayout } from "../../layouts/PostListLayout";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { meta } from "../../data/metadata";
import Container from "../../layouts/Container"

type PostIndexProps = {
  posts: [PostI];
};

const Index: React.FC<PostIndexProps> = ({ posts }) => {
  return (
    <Container>
      <NextSeo
        title="post"
        description="기술 관련 포스트 모음"
        canonical={`${meta.url}/post`}
      />
      <PostListLayout posts={posts} />
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

export default Index;

import React from "react";
import Link from "next/link";
import markdownToHtml from "../../lib/markdownToHtml";
import {
  getAllPosts,
  getPostSlugs,
  postsDirectory,
  PostType,
} from "../../lib/postApi";
// Layout
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostListLayout } from "../../layouts/PostListLayout";

type PostIndexProps = {
  posts: PostType[];
};
    
const Index: React.FC<PostIndexProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Header />
      <PostListLayout posts={posts} />
      <Bottom />
    </>
  );
};

// export const getServerSideProps = async () => {
//     console.log(postsDirectory);
//     console.log(getPostSlugs());
//     return {
//         props: {
//             umm: "aaa",
//         },
//     };
// };

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "author",
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  // const content = await markdownToHtml(posts)
  return {
    props: {
      posts: posts,
    },
  };
};

export default Index;

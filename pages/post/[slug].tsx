import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";

import { GetStaticProps, GetStaticPaths } from "next";
import { PostI } from "../../types/post";
import { getPost, getAllPosts, getSimilarPosts } from "../../lib/PostMdxLib";
import { ParsedUrlQuery } from "querystring";

import { TagItem } from "../../components/TagItem";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostLayout } from "../../layouts/PostLayout";
import React from "react";
import { MdxLayout } from "../../components/common/Provider/PostMdx";

import { useEffect } from "react";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");



// props type
type Props = {
  source: MDXRemoteSerializeResult;
  // slug 속성만 제거
  frontMatter: Omit<PostI, "slug">;
  similarPosts: [PostI];
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  similarPosts,
}: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Header />
      <PostLayout post={frontMatter} similarposts={similarPosts}>
        <article className="prose prose-invert max-w-none prose-slate hover:prose-headings:text-blue-500">
          <h1>{frontMatter.title}</h1>
          <TagItem tag={frontMatter.tag} />
          <span>{frontMatter.date}</span>

          <MdxLayout>
            <MDXRemote {...source} />
          </MdxLayout>

          <p>{frontMatter.description}</p>
        </article>
      </PostLayout>
      <Bottom />
    </>
  );
};

export default PostPage;

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug, // h태그 id를 내용으로
    ],
  },
};

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // slug 수집
  const { content, data } = getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data, ...options });
  // 관련 게시물 수집
  const similarPosts = getSimilarPosts(
    ["thumbnail", "title", "description", "slug", "date", "tag", "postnumber"],
    data.tag,
    data.postnumber
  );

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      similarPosts: similarPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  // 포스트 경로
  const posts = getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";
// import { toc }from "@jsdevtools/rehype-toc"

import { GetStaticProps, GetStaticPaths } from "next";
import { SnippetI } from "../../types/snippet";
import { getSnippet, getAllSnippets } from "../../lib/SnippetsLib";
import { ParsedUrlQuery } from "querystring";

import React from "react";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
// import { SnippetLayout } from "../../layouts/SnippetLayout";
// import { MdxLayout } from "../../components/common/Provider/SnippetMdx";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  // slug 속성만 제거
  frontMatter: Omit<SnippetI, "slug">;
};

export const SnipetPage: React.FC<Props> = ({
    source,
    frontMatter,
  }: Props) => {
    return (
        <>
            <Header />
            <Bottom />
        </>
    );
};

const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug, // h태그 id를 내용으로
        rehypePrismPlus, // Syntax HighLight
      ],
    },
  };
  
  interface Iparams extends ParsedUrlQuery {
    slug: string;
  }
  
  export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as Iparams;
    // slug 수집
    const { content, data } = getSnippet(slug);
    // serialize the data on the server side
    const mdxSource = await serialize(content, { scope: data, ...options });
  
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    };
  };
  
  export const getStaticPaths: GetStaticPaths = () => {
    // 포스트 경로
    const posts = getAllSnippets(["slug"]);
  
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
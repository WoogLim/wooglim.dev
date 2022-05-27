import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMdxComponentsContext } from "../../context/mdxContext";
import { PostI } from "../../types/post";
import { getPost, getAllPosts } from "../../lib/PostMdxLib";
import Prerequisites from "../../components/common/MDX/Prerequisites";
import { ParsedUrlQuery } from "querystring";
import Stacks from "../../components/common/MDX/Stacks";

import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostLayout } from "../../layouts/PostLayout";

import GiscusBox from "../../components/giscus/giscus";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<PostI, "slug">;
};

// 컴포넌트 렌더
const components = {
  Prerequisites,
  Stacks,
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  // useState setter 가져오기
  const { setPrerequisites, setStacks } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    setPrerequisites(frontMatter.prerequisites);
    // set stacks
    setStacks(frontMatter.stacks);
  }, [
    setPrerequisites,
    setStacks,
    frontMatter.prerequisites,
    frontMatter.stacks,
  ]);

  return (
    <>
      <Header />
      <PostLayout>
        <article className="prose max-w-none">
          <h1>{frontMatter.title}</h1>

          <MDXRemote components={components} {...source} />

          <p>{frontMatter.description}</p>
        </article>
        <GiscusBox slug={frontMatter.date} />
      </PostLayout>
      <Bottom />
    </>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getPost(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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

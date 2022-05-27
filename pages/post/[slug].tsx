import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { PostI } from "../../types/post";
import { getPost, getAllPosts } from "../../lib/PostMdxLib";
import { ParsedUrlQuery } from "querystring";

import { TagItemList } from "../../components/TagItemList";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostLayout } from "../../layouts/PostLayout";

import GiscusBox from "../../components/giscus";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<PostI, "slug">;
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

  return (
    <>
      <Header />
      <PostLayout>
        <article className="prose max-w-none">
          <TagItemList tags={frontMatter.tags}/>

          <span>{frontMatter.date}</span>
          <h1>{frontMatter.title}</h1>

          <MDXRemote {...source} />

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

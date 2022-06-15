import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";
// import { toc }from "@jsdevtools/rehype-toc"

import { GetStaticProps, GetStaticPaths } from "next";
import { SnippetI } from "../../types/snippet";
import { getSnippet, getAllSnippets } from "../../lib/SnippetsLib";
import { ParsedUrlQuery } from "querystring";

import { TagItem } from "../../components/TagItem";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { SnippetLayout } from "../../layouts/SnippetLayout";
import { MdxLayout } from "../../components/common/Provider/SnippetMdx";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  // slug 속성만 제거
  frontMatter: Omit<SnippetI, "slug">;
};

const SnipetPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <>
      <Header />
      <SnippetLayout post={frontMatter}>
        <article className="prose max-w-none hover:prose-headings:text-blue-500">
          <h1 className="flex justify-center">{frontMatter.title}</h1>

          <div className="mt-10 mb-10 flex justify-center">
            <TagItem tag={`${frontMatter.language} - `} />
            <TagItem tag={`${frontMatter.category} - `}/>
            <TagItem tag={`${frontMatter.update} Updated.`} />
          </div>

          <MdxLayout>
            <MDXRemote {...source} />
          </MdxLayout>
        </article>
      </SnippetLayout>
      <Bottom />
    </>
  );
};

export default SnipetPage;

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
  const snippets = getAllSnippets(["slug"]).snippets;

  const paths = snippets.map((snippet) => ({
    params: {
      slug: snippet.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

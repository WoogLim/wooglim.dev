import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";
// import { toc }from "@jsdevtools/rehype-toc"

import { GetStaticProps, GetStaticPaths } from "next";
import { SnippetI } from "../../types/snippet";
import {
  getSnippet,
  getAllSnippets,
  getSimilarSnippets,
} from "../../lib/SnippetsLib";
import { ParsedUrlQuery } from "querystring";

import { TagItem } from "../../components/TagItem";
import { SnippetLayout } from "../../layouts/SnippetLayout";
import { MdxLayout } from "../../components/common/Provider/SnippetMdx";
import { NextSeo } from "next-seo";
import { meta } from "../../data/metadata";
import Container from "../../layouts/SnippetsContainer";

import Link from "next/link";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  // slug 속성만 제거
  frontMatter: SnippetI;
  similarSnippets: [SnippetI];
};

const SnipetPage: React.FC<Props> = ({
  source,
  frontMatter,
  similarSnippets,
}: Props) => {
  return (
    <Container>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`${meta.url}/snippets/${frontMatter.slug}`}
        openGraph={{
          type: 'snippets',
          url: `${meta.url}/snippets/${frontMatter.slug}`,
          article: {
            publishedTime: new Date(frontMatter.update).toISOString(),
            tags: [...frontMatter.category],
          },
          images: [
            {
              url: meta.imageUrl,
              width: 850,
              height: 650,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <SnippetLayout>
        <article className="prose max-w-none hover:prose-headings:text-blue-500">
          <MdxLayout
            similarSnippets={similarSnippets}
            frontMatter={frontMatter}
          >
            <MDXRemote {...source} />
          </MdxLayout>
        </article>
      </SnippetLayout>
    </Container>
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

  // 관련 스니펫 수집
  const similarSnippets = getSimilarSnippets(
    [
      "title",
      "description",
      "language",
      "category",
      "update",
      "hide",
      "serisenumber",
      "slug",
    ],
    data.category
  );

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      similarSnippets: similarSnippets,
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

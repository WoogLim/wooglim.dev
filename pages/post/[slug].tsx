import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypePrismPlus from "rehype-prism-plus";

// import { toc }from "@jsdevtools/rehype-toc"

import { GetStaticProps, GetStaticPaths } from "next";
import { PostI } from "../../types/post";
import { getPost, getAllPosts, getSimilarPosts } from "../../lib/PostMdxLib";
import { ParsedUrlQuery } from "querystring";

import { TagItem } from "../../components/TagItem";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostLayout } from "../../layouts/PostLayout";
import { MdxLayout } from "../../components/common/Provider/PostMdx";
import { NextSeo } from "next-seo";
import { meta } from "../../data/metadata";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  // slug 속성만 제거
  frontMatter: PostI;
  similarPosts: [PostI];
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  similarPosts,
}: Props) => {
  // const [scrollY, setScrollY] = useState(0);

  // const handleScroll = (e: Event) => {
  //   setScrollY(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <>
    <NextSeo
      title={frontMatter.title}
      description={frontMatter.description}
      canonical={`${meta.url}/post/${frontMatter.slug}`}
      openGraph={{
        type: 'post',
        url: `${meta.url}/post/${frontMatter.slug}`,
        article: {
          publishedTime: new Date(frontMatter.date).toISOString(),
          tags: [...frontMatter.tag],
        },
        images: [
          {
            url: `${meta.url}${frontMatter.thumbnail}`,
            width: 850,
            height: 650,
            alt: frontMatter.title,
          },
        ],
      }}
    />
      <Header />
      <PostLayout post={frontMatter} similarposts={similarPosts}>
        <article className="prose max-w-none hover:prose-headings:text-blue-500">
          <h1>{frontMatter.title}</h1>

          <div className="mt-6 mb-6">
            <span className="dateWriting">{frontMatter.date}</span>
            <TagItem tag={frontMatter.tag} />
          </div>

          <MdxLayout>
            <MDXRemote {...source} />
          </MdxLayout>
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

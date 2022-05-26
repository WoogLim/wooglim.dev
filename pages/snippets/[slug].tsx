import React from "react";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug, PostType } from "../../lib/postApi";
import { Bottom } from "../../components/common/Bottom/Bottom";
import { Header } from "../../components/common/Header/Header";
import { PostLayout } from "../../layouts/PostLayout";

type PostsProps = {
    post: PostType;
};

const Posts: React.FC<PostsProps> = ({ post }) => {
    console.log(post);
    return (
        <>
            <Header />
            <PostLayout post={post}/>
            <Bottom />
        </>
    );
};

//@ts-ignore
export const getStaticProps = async ({ params }) => {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
    ]);
    const content = await markdownToHtml(post.content || "");

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
};

export default Posts;

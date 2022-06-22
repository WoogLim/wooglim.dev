import Link from "next/link";
import { PostI } from "../types/post";
import {
  PostCard,
  PostThumnail,
  PostTitle,
  PostSubtude,
  PostAuthor,
  PostTags,
  PostView,
} from "./PostCard.style";
import Image from "next/image";

type PostsProps = {
  post: PostI;
};

export const PostCardItem = ({ post }: PostsProps) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <PostCard className="dark:border-zinc-900 dark:hover:border-gray-300 dark:hover:prose-h3:text-yellow-300">
        <PostThumnail>
          <Image
            src={post.thumbnail}
            alt="thumbnail"
            width={600}
            height={420}
            layout="intrinsic"
          />
        </PostThumnail> 
        <PostTitle className="dark:text-zinc-300 dark:hover:text-yellow-300">{post.title}</PostTitle>
        <PostSubtude className="dark:text-zinc-300">{post.description}</PostSubtude>
        <PostAuthor className="dark:border-zinc-300">
          <PostTags>
            <span className="dark:bg-gray-800 dark:text-zinc-300">{post.tag}</span>
          </PostTags>
          {/* <PostView>2</PostView> */}
        </PostAuthor>
      </PostCard>
    </Link>
  );
};

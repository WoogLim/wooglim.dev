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
      <PostCard>
        <PostThumnail>
          <Image
            src={post.thumbnail}
            alt="thumbnail"
            width={600}
            height={420}
            layout="intrinsic"
          />
        </PostThumnail> 
        <PostTitle>{post.title}</PostTitle>
        <PostSubtude>{post.description}</PostSubtude>
        <PostAuthor>
          <PostTags>
            <span>{post.tag}</span>
          </PostTags>
          {/* <PostView>2</PostView> */}
        </PostAuthor>
      </PostCard>
    </Link>
  );
};

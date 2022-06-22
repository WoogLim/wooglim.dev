import Link from "next/link";
import { PostI } from "../types/post";
import {
  PostCard,
  PostThumnail,
  PostTitle,
  PostSubtude,
  PostAuthor,
  PostView,
} from "./PostNavItem.style";
import Image from "next/image";

type Props = {
  post: PostI;
};

export const PostCardItem = ({ post }: Props) => {
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
        <PostTitle className="dark:text-zinc-200">{post.title}</PostTitle>
        <PostSubtude className="dark:text-zinc-300">{post.description}</PostSubtude>
      </PostCard>
    </Link>
  );
};

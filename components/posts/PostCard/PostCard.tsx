import Link from "next/link";
import { PostI } from "../../../types/post";
import {
  PostCard,
  PostThumnail,
  PostTitle,
  PostSubtude,
  PostAuthor,
  PostView,
} from "./PostCard.style";

type PostsProps = {
  post: PostI;
};

export const PostCardItem = ({ post }: PostsProps) => {
  return (
    <Link href={`/post/${post.slug}`} passHref>
      <PostCard>
        <PostThumnail>
            {/* 배포시 Image 태그로 변경 필요 height: 180 */}
            <img src={post.thumbnail}/>
        </PostThumnail>
        <PostTitle>{post.title}</PostTitle>
        <PostSubtude>
          {post.description}
        </PostSubtude>
        
        <PostAuthor>
            <PostView>
              2
            </PostView>
        </PostAuthor>
      </PostCard>
    </Link>
  );
};
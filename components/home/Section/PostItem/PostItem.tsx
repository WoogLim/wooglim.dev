import {
  PostItemWrap,
  Contents,
  Thumnail,
  Summary,
  SummaryTitle,
  SummarySub,
  PostItemDate,
} from "./PostItem.style";

import { PostI } from "../../../../types/post";
import Link from "next/link";

type Props = {
  post: PostI;
};

export const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <PostItemWrap>
        <Contents>
          <Summary>
            <SummaryTitle>{post.title}</SummaryTitle>
            <SummarySub>{post.description}</SummarySub>
            <PostItemDate>{post.date}</PostItemDate>
          </Summary>
        </Contents>
        <Thumnail src={post.thumbnail} />
      </PostItemWrap>
    </Link>
  );
};

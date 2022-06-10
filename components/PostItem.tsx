import {
  PostItemWrap,
  Contents,
  Thumnail,
  Summary,
  SummaryTitle,
  SummarySub,
  PostItemDate,
} from "./PostItem.style";

import { PostI } from "../types/post";
import Link from "next/link";
import Image from "next/Image";

type Props = {
  post: PostI;
};

export const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <PostItemWrap>
        <Contents>
          <Summary>
            <SummaryTitle>{post.title}</SummaryTitle>
            <SummarySub>{post.description}</SummarySub>
            <PostItemDate>{post.date}</PostItemDate>
          </Summary>
        </Contents>
        <Thumnail>
          <Image
            src={post.thumbnail}
            alt="thumbnail"
            width={600}
            height={420}
            layout="intrinsic"
          />
        </Thumnail>
      </PostItemWrap>
    </Link>
  );
};

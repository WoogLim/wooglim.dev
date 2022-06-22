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
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostI;
};

export const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <PostItemWrap>
        <Contents>
          <Summary className="dark:text-neutral-300">
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
            height={360}
            layout="intrinsic"
          />
        </Thumnail>
      </PostItemWrap>
    </Link>
  );
};

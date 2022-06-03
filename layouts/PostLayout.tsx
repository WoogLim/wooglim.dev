import React from "react";
import {
  SectionContainer,
  SectionWrap,
  ContentsWrap,
  SectionTitle,
  SimilarPostList,
  SearchSimilarPosts,
} from "./PostLayout.style";
import GiscusBox from "../components/GiscusItem";
import { PostCardItem } from "../components/PostNavItem";
import { PostI } from "../types/post";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  post: Omit<PostI, "slug">;
  // Omit<PostI, "slug">;
  similarposts: [PostI];
};

export const PostLayout = ({ children, post, similarposts }: Props) => {
  // console.log(React.Children.toArray(children));
  // typeof(children) : Object
  // typeof(React.Children.toArray(children)) : Array -> 고유의 키번호가 같이 붙음 .1, .2

  // giscus 각 포스트별 댓글..

  return (
    <SectionContainer>
      <SectionWrap>
        <ContentsWrap>
          {children}
          <SectionTitle>COMMENT</SectionTitle>
          {/* <GiscusBox /> */}
          <SectionTitle>{`${post.tag}`} 카테고리의 다른 글</SectionTitle>
          <SimilarPostList>
            {similarposts.map((post, idx) => {
              return <PostCardItem post={post} key={idx} />;
            })}
          </SimilarPostList>
          <SearchSimilarPosts>
            <Link href={`/post/${post.tag}`} passHref>
              <button>관련 게시글 더 보기</button>
            </Link>
          </SearchSimilarPosts>
        </ContentsWrap>
      </SectionWrap>
    </SectionContainer>
  );
};
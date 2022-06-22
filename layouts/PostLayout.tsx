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

type Props = {
  children: React.ReactNode;
  post: Omit<PostI, "slug">
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
      <SectionWrap className="dark:bg-zinc-900">
        <ContentsWrap>
          {children}
          <SectionTitle className="dark:text-zinc-200 dark:border-zinc-300">COMMENT</SectionTitle>
          <GiscusBox slug={post.title}/>
          <SectionTitle className="dark:text-zinc-200 dark:border-zinc-300">{`${post.tag}`} 카테고리의 다른 글</SectionTitle>
          <SimilarPostList className="dark:text-zinc-200">
            {
            similarposts.length < 1 ? `관련 게시글이 없습니다.` :
            similarposts.map((post, idx) => {
              return <PostCardItem post={post} key={idx} />;
            })}
          </SimilarPostList>
          {/* <SearchSimilarPosts>
            <Link href={`/post/${post.tag}`} passHref>
            {
            similarposts.length < 1 ? "" :
              <button>관련 게시글 더 보기</button>
            }
            </Link>
          </SearchSimilarPosts> */}
        </ContentsWrap>
      </SectionWrap>
    </SectionContainer>
  );
};
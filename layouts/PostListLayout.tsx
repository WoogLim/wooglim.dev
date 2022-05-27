import { PostCardItem } from "../components/posts/PostCard/PostCard";

import {
  PostsConatainer,
  PostsWrap,
  PostsHeaderWrap,
  PostsSearchBox,
  PostsSearch,
  PostsSearchBtn,
  PostNumber,
  PostList
} from "./PostListLayout.style";

import { PostI } from "../types/post";

type PostIndexProps = {
  posts: [PostI];
};

export const PostListLayout = ({ posts }: PostIndexProps) => {
  return (
    <>
      <PostsConatainer>
        <PostsWrap>
          {/* Posts 헤더 */}
          <PostsHeaderWrap>
            <h3>post</h3>
            <PostsSearchBox>
              <PostsSearch spellCheck={false} placeholder="Search" />
              <PostsSearchBtn />
            </PostsSearchBox>
            <PostNumber>
              4 articles
            </PostNumber>
          </PostsHeaderWrap>

          {/* Posts 게시글 카드 */}
          <PostList>
            {posts.map((post, idx) => {
              return (
                <PostCardItem post={post} key={idx}/>
              );
            })}
          </PostList>
        </PostsWrap>
      </PostsConatainer>
    </>
  );
};
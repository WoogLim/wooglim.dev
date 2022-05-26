import { PostCardItem } from "../components/posts/PostCard/PostCard";
import { PostType } from "../lib/postApi";

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

type PostIndexProps = {
  posts: PostType[];
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
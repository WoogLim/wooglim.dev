import { PostCardItem } from "../components/PostCard";

import {
  PostsConatainer,
  PostsWrap,
  PostsHeaderWrap,
  PostsSearchBox,
  PostsSearch,
  PostsSearchBtn,
  PostNumber,
  PostList,
  NotFoundPost,
} from "./PostListLayout.style";

import { PostI } from "../types/post";
import React, { useState, useEffect } from "react";

type PostIndexProps = {
  posts: [PostI];
};

export const PostListLayout = ({ posts }: PostIndexProps) => {
  const [filteredPosts, setFilteredPosts] = useState<PostI[]>(posts);
  const [postTitles, setPostTitles] = useState<string[]>(
    posts.map((post: PostI) => post.title.toLowerCase())
  );
  const [searchWord, setSearchWord] = useState("");
  const [postNumber, setPostNumber] = useState<number>(
    posts.length
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
    // searchFilter.searchWord = e.target.value;
  };

  useEffect(() => {
    const filteredPostsTitles: String[] = [...postTitles].filter(
      (title: string) => title.indexOf(searchWord.trim().toLowerCase()) !== -1
    );

    const filteredPosts: PostI[] = [...posts].filter((post: PostI) =>
      filteredPostsTitles.includes(post.title.toLowerCase())
    );

    setFilteredPosts(filteredPosts);
    setPostNumber(filteredPosts.length);
  }, [searchWord, postTitles, posts]);

  return (
    <>
      <PostsConatainer>
        <PostsWrap>
          {/* Posts 헤더 */}
          <PostsHeaderWrap>
            <h3>post</h3>
            <PostsSearchBox>
              <PostsSearch
                value={searchWord}
                spellCheck={false}
                onChange={onChangeSearch}
                placeholder="Search"
              />
              <PostsSearchBtn />
            </PostsSearchBox>
            <PostNumber>{`${postNumber} Articles`}</PostNumber>
          </PostsHeaderWrap>

          {/* Posts 게시글 카드 */}

          <PostList>
            {filteredPosts.length < 1 ? (
              <NotFoundPost>{`
              There is no post titled "${searchWord}".`}</NotFoundPost>
            ) : (
              filteredPosts.map((post, idx) => {
                return <PostCardItem post={post} key={idx} />;
              })
            )}
          </PostList>
        </PostsWrap>
      </PostsConatainer>
    </>
  );
};

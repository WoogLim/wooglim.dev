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
import Image from "next/image";

type PostIndexProps = {
  posts: [PostI];
};

export const PostListLayout = ({ posts }: PostIndexProps) => {
  const [filteredPosts, setFilteredPosts] = useState<PostI[]>(posts);
  const [postTitles, setPostTitles] = useState<string[]>(
    posts.map((post: PostI) => post.title.toLowerCase())
  );
  const [searchWord, setSearchWord] = useState("");
  const [postNumber, setPostNumber] = useState<number>(posts.length);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.currentTarget.value);
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
            <h3 className="dark:text-zinc-300">post</h3>
            <PostsSearchBox className="dark:border-zinc-700 dark:bg-zinc-100">
              <PostsSearch
                value={searchWord}
                spellCheck={false}
                onChange={onChangeSearch}
                placeholder="Search"
                className="dark:bg-zinc-100 dark:text-zinc-900"
              />
              <PostsSearchBtn>
                <Image
                  src="/Images/search.svg"
                  alt="search"
                  width={22.4}
                  height={22.4}
                />
              </PostsSearchBtn>
            </PostsSearchBox>
            <PostNumber className="dark:text-zinc-300">{`${postNumber} Posts`}</PostNumber>
          </PostsHeaderWrap>

          {/* Posts 게시글 카드 */}

          <PostList>
            {filteredPosts.length < 1 ? (
              <NotFoundPost className="dark:text-zinc-300">{`
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

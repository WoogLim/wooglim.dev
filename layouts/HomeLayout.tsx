import { useEffect, useState } from "react";
import { PostItem } from "../components/PostItem";
import { SnippetItem } from "../components/SnippetsItem";
import { PostI } from "../types/post";
import { SnippetI } from "../types/snippet";
import {
  SectionContainer,
  SectionWrap,
  StatusWrap,
  SectionTitle,
  SelectPost,
  SelectSnippet,
  SelectMoreContentWrap,
  SelectMoreContent,
  PostArticle,
  SnippetArticle,
} from "./HomeLayout.style";
import Link from "next/link";

type Props = {
  posts: [PostI];
  snippets: [SnippetI];
};

export const HomeSection = ({ posts, snippets }: Props) => {
  const [selectContent, setSelectContent] = useState(1);

  useEffect(() => {
    setSelectContent(posts[0].date > snippets[0].update ? 1 : 2);
  }, [posts, snippets]);

  return (
    <SectionContainer>
      <SectionWrap>
        <SectionTitle className="dark:text-yellow-300 dark:border-zinc-300">
          recent contents
          <SelectPost
            className="hover:text-blue-500 dark:hover:text-white dark:text-yellow-300"
            kind={selectContent}
            onClick={() => setSelectContent(1)}
          >
            POST
          </SelectPost>
          <SelectSnippet
            className="hover:text-blue-500 dark:hover:text-white dark:text-yellow-300"
            kind={selectContent}
            onClick={() => setSelectContent(2)}
          >
            SNIPPET
          </SelectSnippet>
        </SectionTitle>
        {selectContent === 1 ? (
          <PostArticle>
            {posts.slice(0, 5).map((post) => (
              <PostItem post={post} key={post.slug} />
            ))}
          </PostArticle>
        ) : (
          <SnippetArticle>
            {snippets.map((snippet) => (
              <SnippetItem snippet={snippet} key={snippet.slug} />
            ))}
          </SnippetArticle>
        )}

        <SelectMoreContentWrap className="mt-2">
          <SelectMoreContent className="hover:text-blue-500 dark:hover:text-white dark:text-yellow-300">
            <Link href={selectContent === 1 ? "/post" : "/snippets"} className="dark:hover:text-yellow-300 dark:text-zinc-100">
              SEE MORE
            </Link>
          </SelectMoreContent>
        </SelectMoreContentWrap>
      </SectionWrap>
    </SectionContainer>
  );
};

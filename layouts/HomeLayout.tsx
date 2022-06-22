import { PostItem } from "../components/PostItem";
import { PostI } from "../types/post";
import {
  SectionContainer,
  SectionWrap,
  StatusWrap,
  SectionTitle,
  PostArticle,
} from "./HomeLayout.style";

type Props = {
  posts: [PostI];
};

export const HomeSection = ({ posts }: Props) => {
  return (
    <SectionContainer>
      <SectionWrap>
          <SectionTitle className="dark:text-yellow-300 dark:border-zinc-300">RECENT POST</SectionTitle>
          <PostArticle>
            {posts.slice(0,5).map((post) => (
              <PostItem post={post} key={post.slug} />
            ))}
          </PostArticle>
        {/* <StatusWrap>
          <SectionTitle>POST STATUS</SectionTitle>
        </StatusWrap> */}
      </SectionWrap>
    </SectionContainer>
  );
};

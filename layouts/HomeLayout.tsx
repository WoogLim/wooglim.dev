import { PostItem } from "../components/PostItem";
import { PostI } from "../types/post";
import {
  SectionContainer,
  SectionWrap,
  PostWrap,
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
        <PostWrap>
          <SectionTitle>RECENTLY POSTED</SectionTitle>
          <PostArticle>
            {posts.slice(0,5).map((post) => (
              <PostItem post={post} key={post.slug} />
            ))}
          </PostArticle>
        </PostWrap>
        {/* <StatusWrap>
          <SectionTitle>POST STATUS</SectionTitle>
        </StatusWrap> */}
      </SectionWrap>
    </SectionContainer>
  );
};

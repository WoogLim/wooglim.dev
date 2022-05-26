import { PostItem } from "./PostItem/PostItem";
import {
  SectionContainer,
  SectionWrap,
  PostWrap,
  StatusWrap,
  SectionTitle,
  PostArticle,
} from "./Section.style";

export const Section = () => {
  return (
    <SectionContainer>
      <SectionWrap>
        <PostWrap>
          <SectionTitle>RECENTLY POSTED</SectionTitle>
          <PostArticle>
              <PostItem/>
              <PostItem/>
              <PostItem/>
              <PostItem/>
          </PostArticle>
        </PostWrap>
        <StatusWrap>
          <SectionTitle>POST STATUS</SectionTitle>
        </StatusWrap>
      </SectionWrap>
    </SectionContainer>
  );
};

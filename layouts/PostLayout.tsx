import {
  SectionContainer,
  SectionWrap,
  AuthorCard,
  ContentsWrap,
  AuthorImage,
  AuthorInfo,
  AuthorName,
  PostDate,
  AuthorLinks,
  AuthorLink,
} from "./PostLayout.style";
import GiscusBox from "../components/giscus/giscus";
import { PostType } from "../lib/postApi"

type PostsProps = {
  post: PostType;
};

export const PostLayout = ({ post }: PostsProps) => {
  return (
    <SectionContainer>
      <SectionWrap>
        <AuthorCard>
          <AuthorImage>
            {/* 나중에 배포시 Image 태그로 변경할 것 */}
            <img src={post.author.picture} />
          </AuthorImage>
          <AuthorInfo>
            <AuthorName>{post.author.name}</AuthorName>
            <PostDate>{post.date}</PostDate>
          </AuthorInfo>
          <AuthorLinks>
            <AuthorLink href="https://github.com/team-Twilight/TwilightBlog">
              <img src="https://dummyimage.com/40x40" alt="github" />
            </AuthorLink>
            <AuthorLink href="https://github.com/team-Twilight/TwilightBlog">
              <img src="https://dummyimage.com/40x40" alt="github" />
            </AuthorLink>
          </AuthorLinks>
        </AuthorCard>
        <ContentsWrap>
          <h2>{post.title}</h2>
          {post.content}
        </ContentsWrap>
        <GiscusBox slug={post.slug}/>
      </SectionWrap>
    </SectionContainer>
  );
};

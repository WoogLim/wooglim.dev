import {
  BottomContainer,
  FooterWrap,
  Copyright,
  BlogLinks,
  LinkButton,
} from "./Bottom.style";

export const Bottom = () => {
  return (
    <BottomContainer>
      <FooterWrap>
        <Copyright>© 2022 Geon Lim. All right reserved</Copyright>
        <BlogLinks>
          <LinkButton href="https://github.com/team-Twilight/TwilightBlog">
            <img src="https://dummyimage.com/40x40" alt="github" />
          </LinkButton>
        </BlogLinks>
      </FooterWrap>
    </BottomContainer>
  );
};

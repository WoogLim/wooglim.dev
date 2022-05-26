import {
  HeaderContainer,
  HeaderWrap,
  HeaderBackgroud,
  IntroduceWrap,
} from "./Header.style";
import { Navigation } from "../../common/Navigation/Navigation";
import { Title } from "./Title/HeaderTitle";
import { AuthorCard } from "./AuthorCard/AuthorCard";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderBackgroud />
        <Navigation />

        <IntroduceWrap>
                <Title />
                <AuthorCard />
        </IntroduceWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

import {
  HeaderContainer,
  HeaderWrap,
  HeaderBackgroud,
  IntroduceWrap,
} from "./Header.style";
import { Navigation } from "../common/Navigation/Navigation";
import { Title } from "./HeaderTitle";
import { AuthorCard } from "./AuthorCard";

export const Header = () => {
  return (
    <HeaderContainer className="mainIndex">
      <HeaderWrap>
        <HeaderBackgroud />
        <Navigation/>

        <IntroduceWrap>
                <Title />
                <AuthorCard />
        </IntroduceWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

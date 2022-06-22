import {
  HeaderContainer,
  HeaderWrap,
  HeaderBackgroud,
  IntroduceWrap,
} from "./Header.style";
import { Navigation } from "../common/Navigation/Navigation";
import { Title } from "./HeaderTitle";
import { AuthorCard } from "./AuthorCard";

const Header = () => {
  return (
    <HeaderContainer className="mainIndex">
      <HeaderWrap className="dark:bg-slate-800">
        <HeaderBackgroud className="dark:bg-slate-800"/>
        <Navigation/>

        <IntroduceWrap>
                <Title />
                <AuthorCard />
        </IntroduceWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
import { HeaderContainer, HeaderWrap } from "./Header.style";
import { Navigation } from "./Navigation";

type Props = {
  scrollY?: number
};

const Header = ({ scrollY }: Props) => {
  return (
    <HeaderContainer>
      <HeaderWrap className="dark:bg-slate-800 dark:border-slate-900">
        <Navigation />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
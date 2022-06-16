import { HeaderContainer, HeaderWrap } from "./Header.style";
import { Navigation } from "./Navigation";

type Props = {
  scrollY?: number
};

export const Header = ({ scrollY }: Props) => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Navigation />
      </HeaderWrap>
    </HeaderContainer>
  );
};

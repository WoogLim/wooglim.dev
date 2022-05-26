import {
  HeaderContainer,
  HeaderWrap,
} from "./Header.style";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Navigation />

      </HeaderWrap>
    </HeaderContainer>
  );
};

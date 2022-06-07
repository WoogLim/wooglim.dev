import Link from "next/link";
import {
  NavBar,
  LogoImage,
  MenuList,
  MenuButton,
  HomeButton,
} from "./Navigation.style";

export const Navigation = () => {

  return (
    <NavBar>
      <HomeButton>
        <Link href="/">
          <LogoImage src="/Images/Logo.svg" />
        </Link>
      </HomeButton>
      <MenuList>
        <MenuButton>
          <Link href="/post">
            <a>post</a>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/snippets">
            <a>snippets</a>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/project">
            <a>project</a>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/about">
            <a>about</a>
          </Link>
        </MenuButton>
      </MenuList>
    </NavBar>
  );
};

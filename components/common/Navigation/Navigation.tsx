import Link from "next/link";
import { useState } from "react";
import {
  NavBar,
  LogoImage,
  MenuList,
  MenuButton,
  HomeButton,
  MenuToggleBtn,
} from "./Navigation.style";

import { ThemeSwitch } from "./ThemeSwitch";

export const Navigation = () => {
  const [menuOepn, setMenuOepn] = useState(false);

  
  const MenuClickHandler = () => {
    const menuBox = document.getElementsByClassName('blogMenu');
    menuBox[0].classList.toggle('open');
    menuOepn === false ? setMenuOepn(true) : setMenuOepn(false);
  };

  return (
    <NavBar>
      <HomeButton>
        <Link href="/">
          <LogoImage src="/Images/Logo.svg" />
        </Link>
      </HomeButton>
      <MenuList className="blogMenu">
        <MenuButton>
          <Link href="/post" className="dark:hover:text-yellow-300 dark:text-zinc-100">
            post
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/snippets" className="dark:hover:text-yellow-300 dark:text-zinc-100">
            snippets
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/project" className="dark:hover:text-yellow-300 dark:text-zinc-100">
            project
          </Link>
        </MenuButton>
        <MenuButton>
          <Link href="/about" className="dark:hover:text-yellow-300 dark:text-zinc-100">
            about
          </Link>
        </MenuButton>
      </MenuList>
      <ThemeSwitch />
      <MenuToggleBtn onClick={MenuClickHandler}>
        {menuOepn === false ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        )}
      </MenuToggleBtn>
    </NavBar>
  );
};

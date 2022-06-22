import {
  AboutConatainer,
  ListsWrap,
  MenuWrap,
} from "./AboutLayout.style";

export const AboutLayout = () => {
  return (
    <AboutConatainer>
      <ListsWrap>
        <MenuWrap className="dark:text-zinc-200">
          <h3>about</h3>
          <span>준비중입니다! 😅</span>
        </MenuWrap>
      </ListsWrap>
    </AboutConatainer>
  );
};

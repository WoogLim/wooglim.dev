import { TitleWrap, MainTitle, SubTitle } from "./HeaderTitle.style";

export const Title = () => {
  return (
    <>
      <TitleWrap>
        <MainTitle className="dark:text-zinc-300">WoogLim dev Blog.</MainTitle>
        <SubTitle className="dark:text-zinc-300">loves pixel art</SubTitle>
      </TitleWrap>
    </>
  );
};
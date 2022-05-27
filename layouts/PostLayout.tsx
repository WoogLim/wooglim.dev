import React from "react";
import {
  SectionContainer,
  SectionWrap,
  ContentsWrap,
} from "./PostLayout.style";

type Props = {
  children: React.ReactNode;
};

export const PostLayout = ({children} : Props ) => {
  return (
    <SectionContainer>
      <SectionWrap>
        <ContentsWrap>
          {children}
        </ContentsWrap>
      </SectionWrap>
    </SectionContainer>
  );
};

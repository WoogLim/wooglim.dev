import React from "react";
import {
  SectionContainer,
  SectionWrap,
  ContentsWrap,
  SectionTitle,
} from "./SnippetLayout.style";
import { SnippetI } from "../types/snippet";

type Props = {
  children: React.ReactNode;
  post: Omit<SnippetI, "slug">;
};

export const SnippetLayout = ({ children, post }: Props) => {
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
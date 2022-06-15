import React from "react";
import {
  SectionContainer,
  SectionWrap,
  ContentsWrap,
  SectionTitle,
} from "./SnippetLayout.style";
import { SnippetI } from "../types/snippet";
import { SnippetIndexList } from "../components/SnippetIndexList";

type Props = {
  children: React.ReactNode;
  similarSnippets: SnippetI[];
};

export const SnippetLayout = ({ children, similarSnippets }: Props) => {
    return (
      <SectionContainer>
        <SnippetIndexList similarSnippets={similarSnippets}/>
        <SectionWrap>
          <ContentsWrap>
            {children}
          </ContentsWrap>
        </SectionWrap>
      </SectionContainer>
    );
  };
import React from "react";
import {
  SectionContainer
} from "./SnippetLayout.style";

type Props = {
  children: React.ReactNode;
};

export const SnippetLayout = ({ children }: Props) => {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
};

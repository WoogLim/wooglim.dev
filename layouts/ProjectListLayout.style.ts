import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleFontStyle = css`
  font-family: "Roboto";
`;

export const ProjectConatainer = styled.div`
  max-width: calc(100% - calc((100% - 1070px)));
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
`;

export const ListsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 17px;
`;

export const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  h3 {
    ${TitleFontStyle}
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 1em;
    font-variant: small-caps;
  }

  span {
    ${TitleFontStyle}
    display: inline-flex;
    flex: 1;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 4rem;
    /* identical to box height, or 160% */
  }
`;
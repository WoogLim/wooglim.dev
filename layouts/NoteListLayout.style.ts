import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleFontStyle = css`
  font-family: "Roboto";
`;

export const NoteContainer = styled.main`
  max-width: calc(100% - calc((100% - 1070px)));
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
`;

export const ListWrap = styled.div`
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

    color: #000000;
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

// 리스트
export const NoteListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  grid-gap: 3rem 2rem;

  li {
    list-style: none;
  }

  li:nth-child(4n + 1) {
    :after {
      position: absolute;
      bottom: 1px;
      left: -2rem;
      content: "";
      width: calc(100% - calc((100% - 1034px)));
      height: 46px;
      background: transparent;
      z-index: -1;
      border-top: 1px solid #000000;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
      box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.06);
    }
  }
`;

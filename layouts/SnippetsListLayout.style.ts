import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleFontStyle = css`
  font-family: "Roboto";
`;

export const SnippetsConatainer = styled.main`
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

export const ListFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SnippetsSearchBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  position: relative;
  box-sizing: border-box;
  max-width: 380px;
`;

export const SnippetsSearch = styled.input`
  all: unset;

  flex: 1;
  display: flex;
  align-itmes: center;

  padding: 6px 20px 6px 0.6rem;
  border-radius: 8px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
  box-sizing: border-box;
`;

export const SnippetsSearchBtn = styled.button`
  all: unset;

  cursor: pointer;
  position: absolute;
  top: 0.45rem;
  right: 0.4rem;
  display: inline-block;
  background: url("/images/search.svg") no-repeat 0px 0px;
  background-size: contain;
  width: 1.4rem;
  height: 1.4rem;
`;

export const SnippetsDropDownSelect = styled.button`
  all: unset;
`;

// 리스트
export const ItemListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 0.5rem;
`;

export const ListHeader = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: grid;
  grid-template-columns: 20% 50% 20% 10%;
  flex-direction: row;
  padding: 0px 0.3rem;

  height: 36px;

  border-bottom: 3px solid #000000;

  span {
    display: inline-flex;
    ${TitleFontStyle}
    font-style: normal;
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 2.4rem;

    text-transform: uppercase;

    color: #000000;
    white-space: nowrap;
  }
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

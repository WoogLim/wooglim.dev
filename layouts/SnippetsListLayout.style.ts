import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TitleFontStyle = css`
  font-family: "Roboto";
`;

const FilterTextStyle = css`
  font-family: "IBM Plex Sans";
`;

export const SnippetsConatainer = styled.main`
  max-width: calc(100% - calc((100% - 1070px)));
  width: 100%;
  margin: 0 auto;
  padding-top: 28px;
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

// 리스트
export const ItemListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 0.5rem;
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  caret-color: rgba(0, 0, 0, 0);
  padding: 12px 1px 1px 1px;

  @media screen and (max-width: 864px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 664px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 594px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FitlerContainer = styled.div`
  display: flex;
  padding: 8px;
  background: #695ddf;
  box-sizing: border-box;
  border: 3px solid #333333;
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 664px) {
    flex-direction: column;
    align-items: flex-start;

    .searchBox{
      width:100%;
    }
  }
`;

export const SelectWrap = styled.div`
  display: flex;
  max-width: 240px;
  order: 1;
  ${FilterTextStyle}

  font-style: normal;
  font-weight: 700;
  line-height: 1.4rem;

  gap: 8px;
  caret-color: rgba(0, 0, 0, 0);

  @media screen and (max-width: 664px) {
    gap: 4px;
    margin-bottom: 8px;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  width: 84px;
  height: 38px;
  cursor: pointer;

  box-sizing: border-box;
  border: 3px solid #695ddf;
  border-radius: 4px;

  @media screen and (max-width: 664px) {
    width: 64px;
  }

  :hover {
    border: 3px solid #000000;
    transition: 0.2s;
  }
`;

export const SerachWrap = styled.div`
  display: flex;
  flex: 1;
  order: 2;
  height: 38px;
  justify-content: flex-end;

  @media screen and (max-width: 664px) {
    width:100%;
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

  position: relative;
  box-sizing: border-box;
  width:100%;
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
  padding-right: 0.1rem;
  display: inline-flex;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
`;

export const NotFoundSnippet = styled.div`
  display: flex;
  flex-direction: row;
  align-itesm: center;
  padding: 0 17px;
`;

export const PostNumber = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${TitleFontStyle}
  text-transform: capitalize;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;

  color: #000000;

  @media screen and (max-width: 594px) {
    display: none;
  }
`;
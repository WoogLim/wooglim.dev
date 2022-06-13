import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextStyle = css`
  font-family: "IBM Plex Sans";
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
  ${TextStyle}

  font-style: normal;
  font-weight: 700;
  line-height: 1.4rem;

  gap: 8px;

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

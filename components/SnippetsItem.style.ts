import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 스니펫 아이템
export const ItemWrap = styled.ul`
  box-sizing: border-box;
  padding: 0.5rem 0.3rem;
  color: #ffffff;
  width: 100%;
  display: flex;
  border-radius: 4px;

  li {
    display: flex;
    align-items: center;
    list-style: none;
    ${FontStyle}
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;

    color: #000000;
  }

  :hover {
    background: #f7f2fc;
    transition: 0.2s;
  }
`;

export const ItemName = styled.button`
  all: unset;
  font-family: 'IBM Plex Sans';
  font-weight: 800;
  font-size: 1rem;

  padding: 4px 6px 4px 4px;

  border-radius: 8px;
  color: #695ddf;

  cursor: pointer;

  :hover {
    color: #4c39ff;
    transition: 0.2s;
  }
`;

export const ItemNameWrap = styled.li`
  font-size: 1rem;
  flex: 1;
`;

export const ItemDescription = styled.li`
  ${FontStyle}
  font-size: 1rem;
  flex: 3;
  padding-right: 1rem;
`;

export const ItemCategory = styled.li`
  font-size: 1rem;
  flex: 0.5;
  justify-content: flex-start;
`;

export const ItemUpdate = styled.li`
  font-size: 1rem;
  flex: 0.5;
  justify-content: flex-end;
`;

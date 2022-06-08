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
    background: #f1f1f1;
    transition: 0.2s;
  }
`;

export const ItemName = styled.button`
  all: unset;

  padding: 4px 6px 4px 4px;

  background: #f1f1f1;
  border-radius: 8px;
  color: #3e1ffc;

  cursor: pointer;

  :hover {
    background: #fefefe;
  }
`;

export const ItemNameWrap = styled.li`
  font-size: 1rem;
  flex: 1;
`;

export const ItemDescription = styled.li`
  font-size: 0.9rem;
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

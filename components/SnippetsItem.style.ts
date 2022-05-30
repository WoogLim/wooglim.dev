import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 스니펫 아이템
export const ItemWrap = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.3rem;
  color: #ffffff; 
  display: grid;
  grid-template-columns: 20% 50% 20% 10%;

  li {
    display: flex;
    align-items: center;
    list-style: none;
    ${FontStyle}
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.4rem;

    color: #000000;
  }

  :hover{
    background: #f1f1f1;
  }
`;

export const ItemNameWrap = styled.li`
`;

export const ItemName = styled.div`
  padding: 4px 6px 4px 4px;

  background: #f1f1f1;
  border-radius: 8px;
  color: #3e1ffc;

  cursor: pointer;

  :hover{
    background: #fefefe;
  }
`;

export const ItemDescription = styled.li`
`;

export const ItemCategory = styled.li`
`;

export const ItemUpdate = styled.li`
`;

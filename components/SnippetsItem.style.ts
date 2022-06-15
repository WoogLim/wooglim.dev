import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 스니펫 아이템
export const ItemWrap = styled.ul`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;
  border: 3px solid #A4A4A4;
  max-height:170px;

  li {
    display: flex;
    list-style: none;
    ${FontStyle}
    font-style: normal;
    font-weight: 500;
    line-height: 1.3rem;
  }

  :hover {
    transition: 0.2s;
    border: 3px solid #000000;
  }
`;

export const ItemName = styled.div`
  ${FontStyle}
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 8px;
  margin-top: 4px;
`;

export const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemDescription = styled.li`
  margin-top: 6px;
  ${FontStyle}
  font-size: 0.9rem;
  max-height:90px;
  overflow: hidden;
  flex: 3;
  position: relative;
  
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15%;
    height: 1.6rem;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 75%
    );
  }
`;

export const ItemLanguage = styled.li`
  ${FontStyle}
  flex:1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #575757;

  span {
    all: unset;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1rem;
    text-transform: capitalize;

    box-sizing: border-box;
  }
`;

export const ItemUpdate = styled.li`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: #575757;
`;

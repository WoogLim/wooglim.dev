import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 노트 아이템
export const NoteWrap = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  height: 300px;
  padding: 0.6rem 0.6rem 0 0.6rem;
  box-sizing: border-box;
  border-radius: 1rem;
  cursor: pointer;

  position: relative;
  z-index: 1;

  img { 
    height: 258.4px;
    object-fit: cover;
    overflow: hidden;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.06);
  }

  :hover{
    h3 {
        color: #6C5CE7;
      }
  }
`;

export const NoteTitle = styled.h3`
  ${FontStyle}
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  text-align: center;
`;

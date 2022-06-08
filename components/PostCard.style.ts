import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

// 게시글
export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 12px;
  box-sizing: border-box;
  border: 3px solid #ffffff;
  border-radius: 16px;
  height: 320px;

  :hover {
    cursor: pointer;
    border: 3px solid #000000;

    h3 {
      color: #4a94e6;
      transition: 0.3s;
    }
  }
`;

// 게시글 썸네일
export const PostThumnail = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  order: 0;

  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export const PostTitle = styled.h3`
  ${FontStyle}

  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;
  max-height: 3.2rem;

  text-overflow: ellipsis;
  overflow: hidden;

  color: #000000;
  order: 1;
`;

export const PostSubtude = styled.p`
  color: #4e4e4e;
  overflow: hidden;
  position: relative;

  ${FontStyle}
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.6rem;

  max-height: 3.2rem;
  color: #666;
  order: 2;

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

export const PostAuthor = styled.div`
  box-sizing: border-box;
  order: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 3px solid #000000;
`;

export const PostView = styled.p`
  ${FontStyle}
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;

  color: #000000;

  :after {
    content: "view";
    display: inline-block;
    margin-left: 6px;
  }
`;

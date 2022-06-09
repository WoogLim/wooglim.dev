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
  height: 35 0px;

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
  max-height: 155px;
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
  max-height: 1.8rem;

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
  border-top: 3px solid #000000;
  padding-top: 6px;
`;

export const PostTags = styled.p`
  ${FontStyle}
  flex:1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span{
    all: unset;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1rem;
    text-transform: capitalize;

    box-sizing: border-box;

    background: #f2f2f2;
    padding: 4px;
  }
`;

export const PostView = styled.p`
  flex: 1;

  ${FontStyle}
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  :after {
    content: "view";
    display: inline-block;
    margin-left: 6px;
  }
`;

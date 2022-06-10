import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FontStyle = css`
  font-family: "Roboto";
`;

export const PostsConatainer = styled.main`
  max-width: calc(100% - calc((100% - 1070px)));
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;
`;

export const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const PostsHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-itesm: center;
  padding: 0 17px;

  h3 {
    ${FontStyle}
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 2.4rem;
    font-variant: small-caps;

    color: #000000;
    margin-right: 1rem;
  }
`;

export const PostsSearchBox = styled.div`
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
`;

export const PostsSearch = styled.input`
  all: unset;

  flex: 1;
  display: flex;
  align-itmes: center;
  height: 48px;

  padding: 6px 20px 6px 0.6rem;
  border-radius: 8px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
  box-sizing: border-box;
`;

export const PostsSearchBtn = styled.button`
  all: unset;

  cursor: pointer;
  position: absolute;
  top: 0.85rem;
  right: 0.4rem;
  display: inline-block;
  background-size: contain;
  width: 1.4rem;
  height: 1.4rem;
`;

export const PostNumber = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${FontStyle}
  text-transform: capitalize;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  color: #000000;

  @media screen and (max-width: 594px) {
    display: none;
  }
`;

// 게시글 Wrap
export const PostList = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.6rem;
  caret-color: rgba(0, 0, 0, 0);

  @media screen and (max-width: 864px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 664px) {
    grid-gap: 0;
  }

  @media screen and (max-width: 594px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NotFoundPost = styled.div`
  display: flex;
  flex-direction: row;
  align-itesm: center;
  padding: 0 17px;
`;

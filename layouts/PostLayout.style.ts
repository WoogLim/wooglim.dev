import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AuthortextStyle = css`
  font-family: "Rubik";
  font-style: normal;
`;

export const SectionContainer = styled.div`
  max-width: calc(100% - calc((100% - 1036px)));
  margin: 0 auto;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 48px;

  background: #ffffff;
  border: 3px dashed #000000;
  margin: 40px auto 0;
`;

export const AuthorCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  gap: 10px;
`;

export const AuthorImage = styled.div`
  box-sizing: border-box;

  width: 48px;
  height: 48px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 100%;
  order: 0;
`;

export const AuthorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  height: 48px;
`;

export const AuthorName = styled.div`
  ${AuthortextStyle}
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #292931;
`;

export const PostDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #787b86;
`;

export const AuthorLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  gap: 6px;
`;

export const AuthorLink = styled.a`
  text-style: none;

  img {
    box-sizing: border-box;

    width: 38px;
    height: 38px;
    object-fit: contain;
    overflow: hidden;
    border-radius: 100%;
  }
`;
export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const textStyle = css`
  font-family: "Rubik";
  font-style: normal;
`;

export const BottomContainer = styled.footer`
  max-width: calc(100% - calc((100% - 1036px)));
  width: 100%;
  margin: 40px auto 0;
  box-sizing: border-box;
  caret-color: rgba(0, 0, 0, 0);

  @media screen and (max-width: 1048px) {
    padding: 0px 17px;
  }
`;

export const FooterWrap = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid #000000;
`;

export const Copyright = styled.p`
  ${textStyle}
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
`;

export const BlogLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-style: none;
  border-radius: 100%;
  width: 34px;
  height: 34px;

  img {
    border-radius: 100%;
    object-fit: cover;
  }
`;

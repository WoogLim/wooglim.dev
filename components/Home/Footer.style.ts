import styled from "@emotion/styled";
import { css } from "@emotion/react";

const textStyle = css`
  font-family: "Rubik";
  font-style: normal;
`;

export const BottomContainer = styled.footer`
  max-width: calc(100% - calc((100% - 802px)));
  width: 100%;
  padding: 0 17px;
  margin-top: 20px;
  caret-color: rgba(0, 0, 0, 0);
`;

export const FooterWrap = styled.div`
  border-top: 3px solid #000000;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

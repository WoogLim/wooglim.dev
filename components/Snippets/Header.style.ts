import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Nav_up = css`
  top: -62px;
  -webkit-transition: 2s
  transition: 2s
`;

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  z-index: 10;
  top: 0;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 26px;

  width: 100%;
  height: 62px;

  background: #ffffff;
  border-bottom: 3px solid #000000;

  @media screen and (max-width: 580px) {
    background: #6c5ce7;
    padding: 0 17px;
  }
`;

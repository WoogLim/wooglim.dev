import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Nav_up = css`
  top: -72px;
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
  padding: 0 17px;

  width: 100%;
  height: 72px;

  background: #6c5ce7;
  border-bottom: 3px solid #000000;
`;

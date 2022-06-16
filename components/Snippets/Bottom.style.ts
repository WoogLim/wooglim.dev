import styled from "@emotion/styled";
import { css } from "@emotion/react";

const textStyle = css`
  font-family: "Rubik";
  font-style: normal;
`;

export const BottomContainer = styled.footer`
  max-width: calc(100% - calc((100% - 1036px)));
  width: 100%;
  margin: 8px auto 0;
  box-sizing: border-box;
  border-top: 3px solid #000000;
  caret-color: rgba(0, 0, 0, 0);
`;

export const FooterWrap = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

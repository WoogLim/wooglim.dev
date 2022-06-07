import styled from "@emotion/styled";
import { css } from "@emotion/react";

const titleTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  color: #ffffff;
`;

export const TitleWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
  gap: 20px;
`;

export const MainTitle = styled.p`
  ${titleTextStyle}
  font-size: 1.6rem;
  line-height: 42px;
`;

export const SubTitle = styled.p`
  ${titleTextStyle}
  font-size: 1.2rem;
  line-height: 28px;
`;

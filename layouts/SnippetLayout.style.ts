import styled from "@emotion/styled";
import { css } from "@emotion/react";

const titleTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const SectionContainer = styled.main`
  caret-color: rgba(0, 0, 0, 0);
  width: 100%;
  margin: 0 auto;
  padding-top: 72px;
  display: flex;
  flex-direction:flex;
  @media screen and (max-width: 1152px) {
    max-width: calc(100% - calc((100% - 870px)));
  }

  article {
    h1 {
      margin: 0;
    }
  }
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 48px;

  background: #ffffff;
  margin: 40px auto 0;

  @media screen and (max-width: 832px) {
    padding: 40px 24px;
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1152px) {
    max-width: 774px;
  }

  .dateWriting {
    ::after {
      content: "·";
      margin-left: 6px;
    }

    font-family: "Roboto";
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
  }
`;

export const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  ${titleTextStyle}
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  font-variant: small-caps;

  color: #000000;

  box-sizing: border-box;

  border-bottom: 3px solid #000000;
`;

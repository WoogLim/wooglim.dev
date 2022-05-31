import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const SectionContainer = styled.div`
  max-width: calc(100% - calc((100% - 802px)));
  margin: 0 auto;
  padding: 0 17px;
  margin-top: 20px;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const PostWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;

export const StatusWrap = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const SectionTitle = styled.p`
  ${TextStyle}
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  font-variant: small-caps;

  color: #000000;

  box-sizing: border-box;

  border-bottom: 3px solid #000000;
`;

export const PostArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px;
  gap: 32px;
`;

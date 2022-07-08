import styled from "@emotion/styled";
import { css } from "@emotion/react";

const titleStyle = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
`;

const textStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const PostItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    h2 {
      color: rgb(253 224 71 / var(--tw-text-opacity));
    }
  }

  @media screen and (max-width: 614px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const Contents = styled.div`
  flex: 1;

  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  order: 0;

  @media screen and (max-width: 614px) {
    order: 1;
    gap: 0;
  }
`;

export const Thumnail = styled.div`
  box-sizing: border-box;

  width: 180px;
  height: 120px;

  img {
    object-fit: cover;
    overflow: hidden;
    border-radius: 1rem;
    order: 1;
  }

  @media screen and (max-width: 614px) {
    display: flex;
    width: 100%;
    order: 0;
    height: 140px;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.4rem 0;
`;

export const SummaryTitle = styled.h2`
  ${textStyle}
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

export const SummarySub = styled.p`
  display: block;
  max-height: 48px;

  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;

  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PostItemDate = styled.p`
  ${textStyle}
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

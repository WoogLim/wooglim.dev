import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AuthorCardTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  text-transform: capitalize;
`;

export const AuthorCardWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const Card = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 380px;
  height: 240px;

  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.25);
  border-radius: 30px;
  padding: 20px 20px 0 20px;
  gap: 20px;

  @media screen and (max-width: 656px) {
    width: 270px;
    height: 186px;
    gap: 12px;
    padding: 4px 16px 0px 16px;
  }
`;

export const AuthorProfile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const AuthorImage = styled.img`
  box-sizing: border-box;

  width: 90px;
  height: 90px;
  border: 3px solid #000000;
  object-fit: contain;
  overflow: hidden;
  border-radius: 100%;

  @media screen and (max-width: 656px) {
    width: 62px;
    height: 62px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const AuthroName = styled.p`
  ${AuthorCardTextStyle}
  color: #000000;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;

  @media screen and (max-width: 656px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const AuthroJob = styled.p`
  ${AuthorCardTextStyle}
  color: #737373;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;

  @media screen and (max-width: 656px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const AuthorLink = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AuthorInfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AuthorLinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  height: 60px;

  @media screen and (max-width: 656px) {
    height: 50px;
  }
`;

export const AuthorLinkImage = styled.img`
  box-sizing: border-box;

  width: 40px;
  height: 40px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 100%;

  @media screen and (max-width: 656px) {
    width: 32px;
    height: 32px;
  }
`;

export const AuthorResumeBtn = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 100%;

  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  cursor: pointer;

  ${AuthorCardTextStyle}
  font-size: 20px;
  line-height: 26ppx;
  font-weight: 600;

  &:hover {
    background: #333333;
    color: #ffffff;
  }

  @media screen and (max-width: 656px) {
    height: 32px;
  }
`;

import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  height: 320px;
  max-width: calc(100% - calc((100% - 802px)));
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 656px) {
    height: 270px;
  }

  @media screen and (max-width: 580px) {
    height: 240px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 17px;
  background: #6c5ce7;

  ul {
    margin-bottom: 23px;

    ::after {
      position: absolute;
      height: 100%;
      width: 100%;
      content: "";
      z-index: -1;
    }

    @media screen and (max-width: 580px) {
      position: fixed;
      top: 0;
      left: 0;
      padding: 0 17px 0 12px;
      background: inherit;
    }
  }
`;

export const HeaderBackgroud = styled.div`
  position: absolute;
  width: 100%;
  height: 320px;
  left: 0px;
  top: 0px;

  background: #6c5ce7;
  border-bottom: 3px solid #000000;

  @media screen and (max-width: 656px) {
    height: 270px;
  }

  @media screen and (max-width: 580px) {
    height: 240px;
  }
`;

export const IntroduceWrap = styled.div`
  position: relative;
  height: 254px;
  display: flex;
  flex-direction: row;
`;

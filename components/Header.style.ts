import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  height: 340px;
  max-width: calc(100% - calc((100% - 802px)));
  margin: 0 auto;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 17px;
`;

export const HeaderBackgroud = styled.div`
  position: absolute;
  width: 100%;
  height: 320px;
  left: 0px;
  top: 0px;

  background: #6c5ce7;
  border-bottom: 3px solid #000000;
  z-index: -1;
`;

export const IntroduceWrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
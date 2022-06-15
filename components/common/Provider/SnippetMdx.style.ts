import styled from "@emotion/styled";

export const MdxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  font-family: "Noto Sans";
  font-weight: 500;

  @media screen and (max-width: 1152px) {
    flex-direction: column;
  }
`;

export const PostBox = styled.div`
  font-family: "IBM Plex Sans";

  p {
    font-family: "Noto Sans KR";
    font-size: 1rem;
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "IBM Plex Sans";
    font-weight: 800;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  flex: 1 1;
  max-width: 774px;
  padding-right: 0px;

  a:not(:first-child) {
    margin-top: 20px;
  }

  // @media screen and (max-width: 1152px) {
  //   max-width: 774px;
  // }
`;
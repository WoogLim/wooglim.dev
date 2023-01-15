import styled from "@emotion/styled";

export const MdxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  font-weight: 500;

  @media screen and (max-width: 1152px) {
    flex-direction: column;
  }
`;

export const PostBox = styled.div`
  p {
    font-size: 1rem;
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  flex: 1 1;
  max-width: 774px;
  padding-right: 0px;

  a:not(:first-of-type) {
    margin-top: 20px;
  }

  // @media screen and (max-width: 1152px) {
  //   max-width: 774px;
  // }
`;

export const ContentOfPost = styled.ul`
  ::before {
    content: "INDEX";
    letter-spacing: 0.3em;
    font-weight: 700;
    margin-bottom: 0.4em;
    padding-left: 0.4em;
  }

  caret-color: rgba(0, 0, 0, 0);

  display: flex;
  flex-direction: column;
  flex: 0 1 268px;
  min-width: 268px;
  position: -webkit-sticky;
  position: sticky;
  top: 128px;
  max-height: calc(100vh - 184px);
  list-style: none;
  padding-left: 10px;
  margin-left: 20px;
  font-size: 1rem;

  border-left: 2px dashed #f2f2f2;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: #757075;
    font-size: 16px;
  }

  li {
    list-style: none;
    cursor: pointer;
    margin-top: 2px;
    margin-bottom: 0;
  }

  li:not(:first-of-type) {
    margin-top: 2px;
  }

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.2em;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    width: 0.2em;
    background-color: #333333;
    outline: 0px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
  }

  @media screen and (max-width: 1152px) {
    display: none;
  }
`;

export const IndexH1 = styled.h1`
  all: unset;
  font-size: 16px;
`;
export const IndexH2 = styled.h2`
  all: unset;
  padding-left: 0.5em;
`;
export const IndexH3 = styled.h3`
  all: unset;
  padding-left: 1em;
`;
export const IndexH4 = styled.h4`
  all: unset;
  padding-left: 1.5em;
`;
export const IndexH5 = styled.h5`
  all: unset;
  padding-left: 2em;
`;
export const IndexH6 = styled.h6`
  all: unset;
  padding-left: 2.5em;
`;
export const ImgBox = styled.div`
  width:100%;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  border-radius:4px;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
      border-radius:4px;
    }
  }
`;
import styled from "@emotion/styled";

export const MdxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20rem;

  font-family: "Noto Sans CKR";
  font-weight: 500;

  @media screen and (max-width: 1152px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
`;

export const PostBox = styled.div`
  font-family: "Noto Sans CKR";
  padding-top: 2rem;
  margin: 0 auto;
  width: 100%;
  p {
    font-family: "Noto Sans CKR";
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
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #e8e8e8;
  }
  h1 {
    font-size: 2rem;
    color: #000000;
  }
  h2 {
    font-size: 1.8rem;
    color: #333333;
  }
  h3 {
    font-size: 1.2rem;
    color: #515151;
  }
  h4 {
    font-size: 1rem;
    color: #808080;
  }

  display: flex;
  flex-direction: column;
  flex: 1 1;
  max-width: 774px;
  padding-right: 0px;

  a:not(:first-child) {
    margin-top: 20px;
  }

  @media screen and (max-width: 868px) {
    padding: 1.6rem;
  }

  @media screen and (max-width: 580px) {
    padding: 24px;
  }
`;

export const ListContainer = styled.aside`
  position: fixed;
  top: 62px;
  left: 0;
  height: 100%;
  background: #fefefe;
  width: 20rem;
  padding: 1.4rem 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgb(243, 243, 243);
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(71, 70, 82);
    border: 2px solid rgb(71, 70, 82);
  }

  a {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Noto Sans CKR";
    font-weight: 600;
  }

  @media screen and (max-width: 1152px) {
    display: none;
  }
`;

export const TopicCategory = styled.nav`
  padding: 0;
  position: relative;
  p {
    all: unset;
    display: block;
  }

  .topicTitle {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 1.6rem 0.2rem 1.6rem;
  }
`;

export const TopicItem = styled.ul`
  all: unset;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1.6rem;

  .subTopic {
    padding-left: 0.4rem;
    font-size: 1.15rem;
    font-weight: 600;
    cursor: pointer;
    height: 32px;

    :hover {
    color: #6C5CE7;
    }
  }

  .view {
    position: relative;
    height: 32px;
    color: #6C5CE7;
    font-weight: 700;

    ::after {
      position: absolute;
      left: -1.6rem;
      content: "";
      height: 100%;
      width: 4px;
      background: #6C5CE7;
    }
  }
`;

export const IndexList = styled.li`
  all: unset;
  display: block;
  cursor: pointer;
  :hover {
    color: #665ddf;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
  }
`;

export const IndexH1 = styled.h1`
  color: #000000;
  padding-left: 0.8rem;
  font-size: 1rem;
`;

export const IndexH2 = styled.h2`
  color: #333333;
  padding-left: 0.8rem;
  font-size: 0.95rem;
`;

export const IndexH3 = styled.h3`
  color: #808080;
  padding-left: 1.2rem;
  font-size: 0.90rem;
`;

export const IndexH4 = styled.h4`
  padding-left: 0.8rem;
  padding-left: 1.4rem;
  font-size: 0.90rem;
`;

export const IndexH5 = styled.h5`
  padding-left: 0.8rem;
  padding-left: 1.6rem;
  font-size: 0.90rem;
`;

export const IndexH6 = styled.h6`
  padding-left: 0.8rem;
  padding-left: 1.8rem;
  font-size: 0.90rem;
`;

export const TopicTitle = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  line-height: 2rem;
  padding-bottom: 8px;
  border-bottom: 2px solid #e8e8e8;
`;

export const TopicInfoBox = styled.ul`
  display: flex;
  list-style: none;
  line-height: 1rem;

  li:first-child {
    ::after {
      content: "ꞏ";
      font-weight: 900;
      margin-left: 6px;
    }
  }
`;

export const TopicSummary = styled.p`
  padding-top: 0.5rem;
  display: block;
  margin-bottom: 2rem;
`;

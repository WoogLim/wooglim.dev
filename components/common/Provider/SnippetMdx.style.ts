import styled from "@emotion/styled";

export const MdxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20rem;

  font-family: "Noto Sans";
  font-weight: 500;

  @media screen and (max-width: 1152px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
`;

export const PostBox = styled.div`
  font-family: "IBM Plex Sans";
  padding-top: 2rem;
  margin: 0 auto;
  width: 100%;
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
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #e8e8e8;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
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
  font-family: "IBM Plex Sans";

  position: fixed;
  top: 62px;
  left: 0;
  height: 100%;
  background: #fefefe;
  width: 20rem;
  padding: 2rem 0;
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
      color: #4280ee;
    }
  }

  .view {
    position: relative;
    height: 32px;
    color: #4280ee;
    font-weight:700;

    ::after {
      position: absolute;
      left: -1.6rem;
      content: "";
      height: 100%;
      width: 4px;
      background: #4280ee;
    }
  }
`;

export const IndexList = styled.li`
  all: unset;
  display: block;
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    color: #665ddf;
  }
`;

export const ListItem = styled.h6`
  padding-left: 0.8rem;
  font-weight: 600;
`;

export const TopicTitle = styled.span`
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
  color: #4280ee;
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

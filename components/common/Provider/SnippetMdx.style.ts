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

  .showMenu {
    display: block;
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
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1rem;
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
  display: block;
  top: 62px;
  left: 0;
  height: 100%;
  background: #fefefe;
  width: 20rem;
  padding: 1.4rem 0;
  overflow-y: scroll;
  z-index: 1;

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
    all: unset;
    display: none;
    height: 100%;
    position: fixed;
    top: 62px;
    padding-top: 1.6rem;
    right: 0px;
    background: #fefefe;
    box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;

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
      color: #6c5ce7;
    }
  }

  .view {
    position: relative;
    height: 32px;
    color: #6c5ce7;
    font-weight: 700;

    ::after {
      position: absolute;
      left: -1.6rem;
      content: "";
      height: 100%;
      width: 4px;
      background: #6c5ce7;
    }
  }
`;

export const IndexList = styled.li`
  display: block;
  cursor: pointer;
  padding:0;
  margin:0;

  :hover {
    color: #665ddf;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    margin: 0;
  }
`;

export const IndexViewBtn = styled.button`
  all: unset;
  font-family: "IBM Plex Sans";
  font-weight: 600;
  padding: 0px 1rem;
  height: 1.6rem;
  cursor: pointer;
  position: fixed;
  z-index: 3;
  top: 62px;
  right: 0;
  border-radius: 0 0 0 8px;
  justify-content: center;
  align-items: center;
  background: #f3ce49;
  display: none;
  border-left: 3px solid #333333;
  border-bottom: 3px solid #333333;
  text-transform: uppercase;

  @media screen and (max-width: 1152px) {
    display: flex;
  }
`;

export const IndexH1 = styled.h1`
  padding-left: 0.8rem;
  font-size: 1rem;
`;

export const IndexH2 = styled.h2`
  padding-left: 0.8rem;
  font-size: 0.95rem;
`;

export const IndexH3 = styled.h3`
  padding-left: 1.2rem;
  font-size: 0.9rem;
`;

export const IndexH4 = styled.h4`
  padding-left: 1.6rem;
  font-size: 0.9rem;
`;

export const IndexH5 = styled.h5`
  padding-left: 1.6rem;
  font-size: 0.9rem;
`;

export const IndexH6 = styled.h6`
  padding-left: 1.8rem;
  font-size: 0.9rem;
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

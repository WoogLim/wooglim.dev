import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MdxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 1076px) {
    flex-direction: column;
  }
`;

export const PostBox = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
`;

export const ContentOfPost = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 0 1 268px;
  min-width: 268px;
  position: -webkit-sticky;
  position: sticky;
  top: 128px;
  max-height: calc(100vh - 184px);
  list-style: none;
  padding:0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  li {
    list-style: none;
    cursor: pointer;
  }

  li:not(:first-child) {
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
  
  @media screen and (max-width: 1076px) {
    display: none; 
  }
`;

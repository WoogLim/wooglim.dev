import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MdxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  //   @media screen and (max-width: 580px) {
  //     display: none;
  //   }
`;

export const PostBox = styled.div``;

export const ContentOfPost = styled.ul`
  font-family: "Roboto";
  font-style: bold;
  text-transform: capitalize;
  right: 20px;
  top: 180px;
  width: 240px;
  flex-direction: column;
`;

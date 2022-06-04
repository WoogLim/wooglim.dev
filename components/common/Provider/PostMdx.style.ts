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
  display: inline-block;
  position: -webkit-sticky;
  position: sticky;
  top: 92px;
  background: #8a4baf;
  height: 120px;
`;

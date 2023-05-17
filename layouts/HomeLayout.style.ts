import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface SelectContent {
  kind: number;
}

const TextStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const SectionContainer = styled.div`
  max-width: calc(100% - calc(100% - 802px));
  width: 100%;
  margin: 0 auto;
  padding: 0 17px;
  margin-top: 20px;
  caret-color: rgba(0, 0, 0, 0);
  display:flex;
  flex:1;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;

export const StatusWrap = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  @media screen and (max-width: 958px) {
    display: none;
  }
`;

export const SectionTitle = styled.div`
  ${TextStyle}
  margin-top: 1rem;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  font-variant: small-caps;

  box-sizing: border-box;

  border-bottom: 3px solid #000000;

  display: flex;
  gap: 12px;
`;

export const SelectPost = styled.button<SelectContent>`
  all: unset;
  cursor: pointer;
  ${TextStyle}
  font-weight: 600;
  color: ${({ kind }) => (kind === 1 ? '#000000' : 'gray')};
`;

export const SelectSnippet = styled.button<SelectContent>`
  all: unset;
  cursor: pointer;
  ${TextStyle}
  font-weight: 600;
  color: ${({ kind }) => (kind === 2 ? '#000000' : 'gray')};
`;

export const SelectMoreContentWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const SelectMoreContent = styled.button`
  all: unset;
  cursor: pointer;
  ${TextStyle}
  color: 'gray';
  font-weight: 500;
`;

export const PostArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 0px;
  gap: 16px;
`;

export const SnippetArticle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 0px;
  gap: 16px;
`

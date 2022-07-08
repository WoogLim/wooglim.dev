import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ListFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SnippetsSearchBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.04);

  position: relative;
  box-sizing: border-box;
  width:100%;
`;

export const SnippetsSearch = styled.input`
  all: unset;

  flex: 1;
  display: flex;
  align-itmes: center;

  padding: 6px 20px 6px 0.6rem;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
  box-sizing: border-box;
`;

export const SnippetsSearchBtn = styled.button`
  all: unset;

  cursor: pointer;
  padding-right: 0.1rem;
  display: inline-flex;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
`;

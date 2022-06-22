import styled from "@emotion/styled";

export const SwitchBox = styled.div`
  order: 3;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 580px) {
    order: 2;
    flex: 0;
  }
`;

export const SwitchBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

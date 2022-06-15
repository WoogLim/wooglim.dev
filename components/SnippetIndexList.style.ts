import styled from "@emotion/styled";

export const ListContainer = styled.div`
  height: 100%;
  background: #fefefe;
  min-width: 240px;
  padding: 24px;
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


  @media screen and (max-width: 1152px) {
    display: none;
  }
`;

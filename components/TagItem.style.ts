import styled from "@emotion/styled";

export const TagBtn = styled.a`
  all: unset;
  cursor: pointer;
`

export const TagType = styled.span`
  display: inline-block;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  margin-left: 6px;

  text-transform: capitalize;

  :hover{
    border-color: #4280EE;
    color: #4280EE;
  }
`;

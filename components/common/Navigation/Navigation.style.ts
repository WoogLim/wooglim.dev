import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NavBar = styled.ul`
  max-width: 1036px;
  height: 74px;

  caret-color: rgba(0, 0, 0, 0);

  display: inline-flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px;
  box-sizing: border-box;
  margin: 0 auto;

  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 2;
`;

const menuTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 2rem;
  text-transform: capitalize;
  vertical-align: baseline;
  color: #ffffff;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  overflow: hidden;
  box-sizing: border-box;
`;

export const DropDownMenu = styled.div`
  max-width: 4.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .5rem  
  box-sizing: border-box
`;

export const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0;

  a {
    all: unset;
    ${menuTextStyle}
  }
`;

export const HomeButton = styled.button`
  all: unset;
  cursor: pointer;

  margin-right: 20px;
`;

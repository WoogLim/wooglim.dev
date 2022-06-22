import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const NavBar = styled.ul`
  max-width: 100%;
  height: 100%;

  caret-color: rgba(0, 0, 0, 0);

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0 auto;
  background: inherit;

  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 2;

  @media screen and (max-width: 580px) {
    justify-content: space-between;
  }

  .open {
    display: flex;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid #333333;
    padding: 28px 0 0 24px;
    background: inherit;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    a {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

const menuTextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 2rem;
  text-transform: capitalize;
  vertical-align: baseline;
  color: #000000;

  @media screen and (max-width: 580px) {
    color: #ffffff;
    margin-right: 0;
    order: 2;
  }
`;

export const HomeButton = styled.button`
  all: unset;
  cursor: pointer;

  margin-right: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 580px) {
    margin-right: 0;
    order: 2;
    flex: 1;
    justify-content: flex-end;
    margin-right: 1rem;
  }
`;

export const MenuToggleBtn = styled.button`
  display: none;

  @media screen and (max-width: 580px) {
    display: flex;
    height: 100%;
    align-items: center;
    left: -4px;

    svg {
      fill: #ffffff;
    }
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  order: 1;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  overflow: hidden;
  box-sizing: border-box;

@media screen and (max-width: 580px) {
  width: 42px;
  height: 42px;
}
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
    :hover {
      color: black;
      transition: 0.4s;
    }
  }
`;

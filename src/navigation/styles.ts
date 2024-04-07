import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  padding: 0 24px;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: #212121;
`;

export const AppBarNavLinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 14px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0 8px;
  border-bottom: 4px solid;
  border-bottom-color: transparent;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &.active {
    border-bottom-color: #fff;
  }
`;

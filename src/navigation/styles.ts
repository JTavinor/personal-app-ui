import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
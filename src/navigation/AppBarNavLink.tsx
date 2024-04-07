import { StyledNavLink } from "./styles";

const AppBarNavLink = ({ to, title }: { to: string; title: string }) => (
  <StyledNavLink
    to={to}
    className={({ isActive }) => (isActive ? "active" : "")}
  >
    {title}
  </StyledNavLink>
);

export default AppBarNavLink;

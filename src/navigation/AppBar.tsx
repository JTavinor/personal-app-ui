import { APP_BAR_LINK_CONFIG } from "./appBarLinkConfig";
import AppBarNavLink from "./AppBarNavLink";
import { AppBarContainer, AppBarNavLinksWrapper } from "./styles";

const AppBar = () => (
  <AppBarContainer>
    <AppBarNavLinksWrapper>
      {APP_BAR_LINK_CONFIG.map(({ to, title }) => (
        <AppBarNavLink to={to} title={title} key={title} />
      ))}
    </AppBarNavLinksWrapper>
  </AppBarContainer>
);
export default AppBar;

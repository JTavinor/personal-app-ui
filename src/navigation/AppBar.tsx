import { APP_BAR_LINK_CONFIG } from "./appBarLinkConfig";
import AppBarNavLink from "./AppBarNavLink";

const AppBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "72px",

        zIndex: 999,
boxShadow:'0 2px 4px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#212121'
      }}
    >
      {APP_BAR_LINK_CONFIG.map(({to, title}) => <AppBarNavLink to={to} title={title} key={title}/>)}
    </div>
  );
};

export default AppBar;

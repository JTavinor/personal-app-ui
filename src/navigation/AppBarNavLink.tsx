import { NavLink } from "react-router-dom";

const AppBarNavLink = ({ to, title }: { to: string; title: string }) => {
  return <NavLink to={to} style={({isActive}) => ({color: '#fff', textDecoration: 'none', padding: '0 8px', borderBottomColor: isActive ? '#fff' :'transparent',
   borderBottom:  '4px solid', height: '100%', boxSizing:'border-box', display: 'flex', alignItems:'center'})}>{title}</NavLink>;
};

export default AppBarNavLink;

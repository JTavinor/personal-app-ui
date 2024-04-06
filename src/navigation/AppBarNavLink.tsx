import { NavLink } from "react-router-dom";

const AppBarNavLink = ({to, title}: {to:string, title:string}) => {
    return ( <NavLink to={to}>{title}</NavLink> );
}
 
export default AppBarNavLink;
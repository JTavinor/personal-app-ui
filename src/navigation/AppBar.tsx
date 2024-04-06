import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "30px",
        borderBottom: "1px solid red",
        zIndex: 999,
        boxSizing: "border-box",
      }}
    >
<NavLink to='/path1'>Path 1</NavLink>
<NavLink to='/path2'>Path 2</NavLink>
    </div>
  );
};

export default AppBar;

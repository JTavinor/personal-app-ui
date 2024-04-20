import { NavLink, Outlet } from "react-router-dom";
import ContentContainer from "../common/ContentContainer";
import spacing from "../styles/spacing";
import URLS from "../navigation/URLS";

const Diet = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: spacing.LARGE,
        gap: spacing.LARGE,
      }}
    >
      <ContentContainer width="240px">
        <NavLink to={URLS.ADD_WEIGHTS}>Add Weights</NavLink>
      </ContentContainer>
      <Outlet />
    </div>
  );
};

export default Diet;

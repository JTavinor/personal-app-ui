import { NavLink, Outlet } from "react-router-dom";
import ContentContainer from "../common/ContentContainer";
import spacing from "../styles/spacing";
import URLS from "../navigation/URLS";

const Money = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: spacing.LARGE,
        gap: spacing.LARGE,
      }}
    >
      <ContentContainer width="240px">
        <NavLink to={URLS.CREATE_CATEGORY}>Create Category</NavLink>
        <NavLink to={URLS.CREATE_EXPENSES}>Create Expenses</NavLink>
      </ContentContainer>
      <Outlet />
    </div>
  );
};

export default Money;

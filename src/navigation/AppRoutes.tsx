import { Route, Routes } from "react-router-dom";
import URLS from "./URLS";
import Money from "../money";
import CreateExpenses from "../money/CreateExpenses";
import Categories from "../money/Categories";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.MONEY} element={<Money />}>
        <Route index element={<Categories />} />
        <Route path={URLS.CREATE_CATEGORY} element={<Categories />} />
        <Route path={URLS.CREATE_EXPENSES} element={<CreateExpenses />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

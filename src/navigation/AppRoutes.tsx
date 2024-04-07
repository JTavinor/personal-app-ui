import { Route, Routes } from "react-router-dom";
import URLS from "./URLS";
import Money from "../money";
import CreateExpenses from "../money/CreateExpenses";
import CreateCategory from "../money/CreateCategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.MONEY} element={<Money />}>
        <Route index element={<CreateCategory />} />
        <Route path={URLS.CREATE_CATEGORY} element={<CreateCategory />} />
        <Route path={URLS.CREATE_EXPENSES} element={<CreateExpenses />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

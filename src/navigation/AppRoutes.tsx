import { Route, Routes } from "react-router-dom";
import URLS from "./URLS";
import Money from "../money";
import CreateExpenses from "../money/CreateExpenses";
import Categories from "../money/Categories";
import Diet from "../diet";
import AddWeights from "../diet/AddWeights";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.MONEY} element={<Money />}>
        <Route index element={<Categories />} />
        <Route path={URLS.CATEGORIES} element={<Categories />} />
        <Route path={URLS.CREATE_EXPENSES} element={<CreateExpenses />} />
      </Route>
      <Route path={URLS.DIET} element={<Diet />}>
        <Route index element={<AddWeights />} />
        <Route path={URLS.ADD_WEIGHTS} element={<AddWeights />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

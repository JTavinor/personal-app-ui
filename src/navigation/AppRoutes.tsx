import { Route, Routes } from "react-router-dom";
import URLS from "./URLS";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.PATH1} element={<h1>hello</h1>} />
      <Route path={URLS.PATH2} element={<h1>goodbye</h1>} />
    </Routes>
  );
};

export default AppRoutes;

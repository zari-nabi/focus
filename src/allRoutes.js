import { Route, Routes } from "react-router";
import TablePage from "./pages/TablePage/TablePage";
import Home from "./pages/Home/Home";
// import ShowAgGrid from "./pages/ShowAgGrid/ShowAgGrid";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<TablePage />} />
      {/* <Route path="/products-ag" element={<ShowAgGrid />} /> */}

      {/* <Route path="/not-found" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AllRoutes;

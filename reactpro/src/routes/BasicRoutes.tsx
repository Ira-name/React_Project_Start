import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ProductPage from "../pages/products/ProductPage";
import UserPage from "../pages/users/UserPage";
import Layout from "../components/layout/Layout";
import NotFoundPage from "../components/NotFoundPage";
const BasicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoutes;

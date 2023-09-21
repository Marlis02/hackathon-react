import React from "react";
import { Routes, Route, Outlet, Navigate, Router } from "react-router-dom";
// user
import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./pages/Products/Products";
import EditProduct from "./pages/EditProduct/EditProduct";
import MyProducts from "./pages/MyProducts/MyProducts";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
import CustomCard from "./components/Card/Card";
const PrivateRoutes = () => {
  const user = localStorage.getItem("email");

  return user ? <Outlet /> : <Navigate to="/login" />;
};

const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="*" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/categories" element={<CreateCategory />} />
      </Route>
    </Routes>
  );
};

export default Routing;

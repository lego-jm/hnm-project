import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const loginCheck = useSelector((state) => state.login.loginCheck);
  return loginCheck ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;

import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ loginCheck }) => {
  return loginCheck ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;

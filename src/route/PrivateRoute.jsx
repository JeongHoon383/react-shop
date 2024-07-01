import React from "react";
import ProductDetail from "../Pages/ProductDetail";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ authenticate }) => {
  const nav = useNavigate();

  return authenticate === true ? <ProductDetail /> : nav("/Login");
};

export default PrivateRoute;

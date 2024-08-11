import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ product }) => {
  const Login = useSelector((state) => state.Login);

  return (
    <>
      {Login ? <ProductDetail product={product} /> : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRoute;

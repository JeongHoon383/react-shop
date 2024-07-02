import React, { useEffect } from "react";
import ProductDetail from "../Pages/ProductDetail";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ authenticate, productList }) => {
  const nav = useNavigate();
  useEffect(() => {
    authenticate === true ? <ProductDetail /> : nav("/Login");
  }, []);

  return (
    <>
      <ProductDetail productList={productList} />
    </>
  );
};

export default PrivateRoute;

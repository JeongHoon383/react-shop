import React from "react";
import ProductItem from "../Components/ProductItem";
import "./Home.css";

const Home = ({ product }) => {
  return (
    <div className="Home">
      {product.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = ({ authenticate, productList }) => {
  return (
    <div className="ProductAll">
      {productList.map((item) => (
        <ProductCard item={item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;

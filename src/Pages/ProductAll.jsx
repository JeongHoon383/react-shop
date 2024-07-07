import React from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = ({ authenticate, filterData }) => {
  return (
    <div className="ProductAll">
      {filterData.map((item) => (
        <ProductCard item={item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;

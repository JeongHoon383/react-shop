import React from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = ({ authenticate, filterProductList }) => {
  console.log(filterProductList);

  return (
    <div className="ProductAll">
      {filterProductList.map((item) => (
        <ProductCard {...item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;

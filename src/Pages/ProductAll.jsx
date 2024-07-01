import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = ({ authenticate }) => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:4000/products/";
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ProductAll">
      {productList.map((item) => (
        <ProductCard item={item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;

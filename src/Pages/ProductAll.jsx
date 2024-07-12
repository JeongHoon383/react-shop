import React from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = ({ authenticate, productList }) => {
  const [query, setQuery] = useSearchParams();

  const searchQuery = query.get("q");

  const filterProductList = () => {
    if (!searchQuery) {
      return productList;
    }
    return productList.filter((list) =>
      list.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredProductList = filterProductList();

  return (
    <div className="ProductAll">
      {filteredProductList.map((item) => (
        <ProductCard item={item} key={item.id} authenticate={authenticate} />
      ))}
    </div>
  );
};

export default ProductAll;

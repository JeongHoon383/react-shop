import React from "react";
import ProductItem from "../Components/ProductItem";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

const Home = ({ product }) => {
  const [query, setQuery] = useSearchParams();

  const searchQuery = query.get("q");

  console.log(searchQuery);

  const filterProduct = () => {
    if (!searchQuery) {
      return product;
    } else {
      return product.filter((list) =>
        list.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    }
  };

  const filteredProduct = filterProduct();

  return (
    <div className="Home">
      {filteredProduct.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Home;

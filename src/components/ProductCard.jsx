import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const nav = useNavigate;
  return (
    <div className="ProductCard">
      <img
        src={item.img}
        className="ProductCard-img"
        onClick={() => nav("/Login")}
      />
      <div>{item.choice ? "concious choice" : ""}</div>
      <div>{item.title}</div>
      <div>₩{item.price}</div>
      <div>{item.new}</div>
    </div>
  );
};

export default ProductCard;

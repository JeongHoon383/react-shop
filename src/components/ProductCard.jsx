import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, authenticate }) => {
  const nav = useNavigate();

  const productCardFalse = () => {
    alert("로그인이 필요합니다. ");
    return "Login";
  };

  return (
    <div
      className="ProductCard"
      onClick={() =>
        nav(authenticate ? `/Product/${item.id}` : productCardFalse())
      }
    >
      <img src={item.img} className="ProductCard-img" />
      <div>{item.choice ? "concious choice" : ""}</div>
      <div>{item.title}</div>
      <div>₩{item.price}</div>
      <div>{item.new}</div>
    </div>
  );
};

export default ProductCard;

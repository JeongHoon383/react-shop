import React from "react";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard">
      <img src={item.img} className="ProductCard-img" />
      <div>Conscious choice</div>
      <div>{item.title}</div>
      <div>₩{item.price}</div>
      <div>{item.new}</div>
    </div>
  );
};

export default ProductCard;

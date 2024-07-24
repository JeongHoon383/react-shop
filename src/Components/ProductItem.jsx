import React from "react";
import "./Css/ProductItem.css";

const ProductItem = ({ item }) => {
  const { choice, img, price, title } = item;

  return (
    <div className="item-wrapper">
      <div className="image-wrapper">
        <img src={img} alt="" className="image" />
      </div>
      <div className="item-choice">{choice ? "Conscious choice" : ""}</div>
      <div>{title}</div>
      <div>₩{price.toLocaleString()}</div>
    </div>
  );
};

export default ProductItem;

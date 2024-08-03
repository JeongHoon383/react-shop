import React from "react";
import "./Css/ProductItem.css";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { choice, img, price, title, id } = item;

  const navigate = useNavigate();

  return (
    <div className="item-wrapper" onClick={() => navigate(`/product/${id}`)}>
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

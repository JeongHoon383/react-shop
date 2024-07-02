import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ productList }) => {
  const params = useParams();
  const curProduct = productList.find(
    (item) => Number(item.id) === Number(params.id)
  );

  // productList 에 있는 데이터와 detail 페이지에 params.id 값이 일치하는 데이터를
  // productDetail 컴포넌트에 뿌려줘야함. - o

  return (
    <div className="ProductDetail">
      <img src={curProduct.img} alt="" />
      <div className="Product-info">
        <div>{curProduct.title}</div>
        <div>₩{curProduct.price}</div>
        {curProduct.choice ? (
          <div>Conscious choice</div>
        ) : (
          <span className="choice-none">none</span>
        )}
        <div>
          <select>
            <option>사이즈 선택</option>
            {curProduct.size.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>
        <div>
          <button className="add-button">추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ product }) => {
  const params = useParams();

  const selectedProduct = product.find(
    (item) => Number(item.id) == Number(params.id)
  );
  console.log(typeof selectedProduct);

  // find 함수까지는 에러가 발생하지 않음
  // find 함수에서 꺼낸 객체 안에 키값을 맨 처음 랜더링 했을 때는 괜찮지만 새로고침시 데이터가 날라감
  // 로컬 또는 세션 스토리지를 이용하여 데이터 저장시 데이터가 날라가지 않는지 해봐야됨.

  return (
    <div className="ProductDetail">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div>{title}</div>
        <div>₩{price.toLocaleString()}</div>
        <div>{choice ? "Conscious choice" : ""}</div>
        <div>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div>
          <button>추가</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
